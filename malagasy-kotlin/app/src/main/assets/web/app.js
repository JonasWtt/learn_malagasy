// ============================================
// MALAGASY LEARNING APP — LOGIC
// ============================================

(function() {
  'use strict';

  // ======== STATE ========
  let currentLesson = null;
  let currentReading = null; // when viewing a reading, this is set and currentLesson is null
  let currentCardIndex = 0;
  let currentQuizIndex = 0;
  let quizScore = 0;
  let isFlipped = false;
  let currentLanguage = 'en'; // 'en' or 'de'

  // ======== TAP HELPER ========
  // Android WebView: click events don't fire on <div> elements.
  // Use touchstart + touchend for reliable tap detection.
  function addTapHandler(el, handler) {
    if (!el) return;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;
    const MOVE_THRESHOLD = 10;

    el.addEventListener('touchstart', function(e) {
      touchMoved = false;
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    el.addEventListener('touchmove', function(e) {
      if (e.touches.length === 1) {
        const dx = Math.abs(e.touches[0].clientX - touchStartX);
        const dy = Math.abs(e.touches[0].clientY - touchStartY);
        if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
          touchMoved = true;
        }
      }
    }, { passive: true });

    el.addEventListener('touchend', function(e) {
      if (!touchMoved) {
        e.preventDefault();
        handler();
      }
    }, { passive: false });

    // Fallback for desktop / mouse
    el.addEventListener('click', function(e) {
      handler();
    });
  }

  // ======== NATIVE BACK BRIDGE ========
  // The web app is a single-page app loaded at one URL, so WebView.canGoBack()
  // is always false and Android's back gesture would close the app. Instead
  // we report in-page navigation depth to the native layer (AndroidBack) so
  // the OnBackPressedDispatcher can decide: undo the topmost overlay, or exit.
  // window.__appBack() is invoked by the native back handler (hardware button
  // or predictive-back swipe) to perform the undo.
  function navPush() { try { AndroidBack.pushNav(); } catch (e) {} }
  function navPop()  { try { AndroidBack.popNav();  } catch (e) {} }
  function navReset(){ try { AndroidBack.resetNav(); } catch (e) {} }

  // Stack of "close" handlers, top-most last. Each overlay pushes its closer
  // when it opens and pops it (plus a nav level) when it closes.
  // window.__appBack() calls the top handler WITHOUT popping — the handler's
  // own close path does the popping, so nav depth stays in sync.
  const backStack = [];
  function pushBackHandler(fn) { backStack.push(fn); navPush(); }
  function popBackHandler() {
    if (backStack.length) backStack.pop();
    navPop();
  }

  window.__appBack = function() {
    const fn = backStack[backStack.length - 1];
    if (typeof fn === 'function') {
      try { fn(); } catch (e) { popBackHandler(); }
    } else {
      popBackHandler();
    }
  };

  // ======== DOM REFERENCES ========
  const $ = id => document.getElementById(id);

  // Views
  const lessonListView = $('lesson-list-view');
  const lessonView = $('lesson-view');

  // List
  const lessonsGrid = $('lessons-grid');
  const categoryBtns = document.querySelectorAll('.category-btn');

  // Lesson view
  const lessonTitle = $('lesson-title');
  const lessonDesc = $('lesson-desc');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Cards
  const cardCounter = $('card-counter');
  const cardProgressFill = $('card-progress-fill');
  const cardProgressUI = $('card-progress-ui');
  const flashcardContainer = $('flashcard-container');
  const cardControls = $('card-controls');
  const flashcard = $('flashcard');
  const cardFront = $('card-front');
  const cardBack = $('card-back');
  const btnFlip = $('card-flip');
  const btnPrev = $('card-prev');
  const btnNext = $('card-next');
  const grammarContent = $('grammar-content');

  // Vocab
  const vocabList = $('vocab-list');

  // Readings
  const readingsGrid = $('readings-grid');
  const readingText = $('reading-text');
  const readingTranslation = $('reading-translation');
  const readingToggleTrans = $('reading-toggle-trans');
  const glossaryList = $('glossary-list');
  const readingLevelEl = document.querySelector('.reading-level');

  // Quiz
  const quizCounter = $('quiz-counter');
  const quizProgressFill = $('quiz-progress-fill');
  const quizQuestion = $('quiz-question');
  const quizOptions = $('quiz-options');
  const quizFeedback = $('quiz-feedback');
  const btnQuizNext = $('quiz-next');
  const quizScoreEl = $('quiz-score');
  const scoreText = $('score-text');
  const btnQuizRetry = $('quiz-retry');

  // Search
  const searchToggle = $('search-toggle');
  const searchOverlay = $('search-overlay');
  const searchInput = $('search-input');
  const searchClose = $('search-close');
  const searchResults = $('search-results');

  // Flat vocab index for search — built from all lessons
  const ALL_VOCAB = [];
  LESSONS.forEach(l => {
    (l.vocab || []).forEach(v => {
      ALL_VOCAB.push({
        malagasy: v.malagasy || '',
        english: v.english || '',
        german: v.german || '',
        french: v.french || '',
        lessonId: l.id,
        lessonTitle: l.title
      });
    });
  });

  // ======== LANGUAGE ========
  function toggleLanguage() {
    const order = ['en', 'de', 'fr'];
    const idx = order.indexOf(currentLanguage);
    currentLanguage = order[(idx + 1) % order.length];
    document.body.setAttribute('data-lang', currentLanguage);
    // Re-render current view if in a lesson
    if (currentLesson) {
      if (currentReading) {
        renderReading();
        renderQuiz();
      } else if (currentLesson.category === 'grammar' && currentLesson.content) {
        renderGrammar();
      } else {
        renderCard();
      }
      renderVocab();
      renderQuiz();
    }
    // Re-render lesson list (descriptions, category labels)
    const activeFilter = document.querySelector('.category-btn.active');
    renderLessons(activeFilter ? activeFilter.dataset.filter : 'all');
    renderReadings();
    // Update hero text
    updateHero();
    // Translate footer
    const footer = document.querySelector('.app-footer p');
    if (footer) footer.textContent = t('footer');
    // Translate back button
    const backBtn = $('back-to-list');
    if (backBtn) backBtn.textContent = t('backToList');
    // Update toggle button text — show NEXT language flag
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      const nextLang = order[(order.indexOf(currentLanguage) + 1) % order.length];
      const flags = { en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷' };
      langBtn.textContent = flags[nextLang];
    }
  }

  function updateHero() {
    const heroTitle = document.querySelector('.hero h2');
    const heroSubtitle = document.querySelector('.hero p');
    const heroStats = document.querySelectorAll('.hero-stats .stat');
    if (heroTitle) heroTitle.textContent = t('heroTitle');
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitle');
    if (heroStats.length >= 3) {
      const lessons = LESSONS.length;
      const cards = LESSONS.reduce((s, l) => s + (l.cards?.length || 0), 0);
      const quizCount = Object.keys(typeof QUIZZES !== 'undefined' ? QUIZZES : {}).reduce((s, k) => s + QUIZZES[k].length, 0);
      heroStats[0].innerHTML = `🔥 <b>${lessons}</b> ${t('heroStatsLessons')}`;
      heroStats[1].innerHTML = `📚 <b>${cards}</b> ${t('heroStatsCards')}`;
      heroStats[2].innerHTML = `📝 <b>${quizCount}</b> ${t('heroStatsQuiz')}`;
    }
  }

  // ======== UI STRINGS ========
  const STRINGS = {
    en: {
      flip: 'Tap to flip ↻',
      flipBack: 'Tap to flip ↺',
      noVocab: 'No vocabulary for this lesson yet.',
      noQuiz: 'No quiz questions for this lesson yet.',
      noContent: 'No grammar content available.',
      correct: '✅ Correct! Well done.',
      wrong: '❌ Wrong. The answer is: ',
      quizPerfect: "Perfect score! {0}/{1} — you're ready for Madagascar! 🎉",
      quizGreat: 'Great job! {0}/{1} — almost there! 🔥',
      quizOkay: 'Not bad! {0}/{1} — keep practicing! 💪',
      quizLow: 'You got {0}/{1}. Review the cards and try again! 📚',
      searchPlaceholder: 'Search Malagasy or English...',
      noSearchResults: 'No words found. Try a different search.',
      backToList: '← All Lessons',
      tabCards: '🗂️ Cards',
      tabText: '📝 Text',
      tabVocab: '📖 Vocab',
      tabQuiz: '✅ Quiz',
      next: 'Next →',
      prev: '← Prev',
      retry: 'Retry',
      quizComplete: '🎉 Quiz Complete!',
      heroTitle: 'Tsara be, Mpiara-miasa!',
      heroSubtitle: '29 curated lessons with flashcards, vocabulary, and quizzes. Ready for Madagascar?',
      heroStatsLessons: 'lessons',
      heroStatsCards: 'cards',
      heroStatsQuiz: 'quiz questions',
      filterAll: 'All',
      filterBasics: 'Basics',
      filterConversation: 'Conversation',
      filterVocabulary: 'Vocabulary',
      filterGrammar: 'Grammar',
      cardsLabel: ' cards',
      showTranslation: '🌐 Show translation',
      hideTranslation: '🌐 Hide translation',
      tabReading: '📝 Text',
      readingSectionTitle: '📖 Reading Comprehension',
      readingSectionSub: 'Short texts with translation, glossary, and quiz questions.',
      footer: 'Content sourced from Peace Corps & academic linguistics resources. Built for 🇲🇬.',
    },
    de: {
      flip: 'Zum Umdrehen tippen ↻',
      flipBack: 'Zum Umdrehen tippen ↺',
      noVocab: 'Noch kein Vokabular für diese Lektion.',
      noQuiz: 'Noch keine Quizfragen für diese Lektion.',
      noContent: 'Kein Grammatik-Inhalt verfügbar.',
      correct: '✅ Richtig! Gut gemacht.',
      wrong: '❌ Falsch. Die Antwort ist: ',
      quizPerfect: 'Perfekte Punktzahl! {0}/{1} — Du bist bereit für Madagaskar! 🎉',
      quizGreat: 'Gut gemacht! {0}/{1} — fast geschafft! 🔥',
      quizOkay: 'Nicht schlecht! {0}/{1} — weiter üben! 💪',
      quizLow: 'Du hast {0}/{1}. Sieh dir die Karten an und versuch es nochmal! 📚',
      searchPlaceholder: 'Suche Malagasy oder Deutsch...',
      noSearchResults: 'Keine Wörter gefunden. Versuche eine andere Suche.',
      backToList: '← Alle Lektionen',
      tabCards: '🗂️ Karten',
      tabText: '📝 Text',
      tabVocab: '📖 Vokabular',
      tabQuiz: '✅ Quiz',
      next: 'Weiter →',
      prev: '← Zurück',
      retry: 'Nochmal',
      quizComplete: '🎉 Quiz Abgeschlossen!',
      heroTitle: 'Tsara be, Mpiara-miasa!',
      heroSubtitle: '29 kuratierte Lektionen mit Karteikarten, Vokabular und Quiz. Bereit für Madagaskar?',
      heroStatsLessons: 'Lektionen',
      heroStatsCards: 'Karten',
      heroStatsQuiz: 'Quizfragen',
      filterAll: 'Alle',
      filterBasics: 'Grundlagen',
      filterConversation: 'Konversation',
      filterVocabulary: 'Vokabular',
      filterGrammar: 'Grammatik',
      cardsLabel: ' Karten',
      showTranslation: '🌐 Übersetzung anzeigen',
      hideTranslation: '🌐 Übersetzung verbergen',
      tabReading: '📝 Text',
      readingSectionTitle: '📖 Leseverstehen',
      readingSectionSub: 'Kurze Texte mit Übersetzung, Glossar und Quizfragen.',
      footer: 'Inhalte von Peace Corps & akademischen Linguistik-Ressourcen. Gebaut für 🇲🇬.',
    },
    fr: {
      flip: 'Touchez pour retourner ↻',
      flipBack: 'Touchez pour retourner ↺',
      noVocab: 'Pas encore de vocabulaire pour cette leçon.',
      noQuiz: 'Pas encore de questions pour cette leçon.',
      noContent: 'Aucun contenu de grammaire disponible.',
      correct: '✅ Correct ! Bien joué.',
      wrong: '❌ Faux. La réponse est : ',
      quizPerfect: 'Score parfait ! {0}/{1} — prêt pour Madagascar ! 🎉',
      quizGreat: 'Bon travail ! {0}/{1} — presque ! 🔥',
      quizOkay: 'Pas mal ! {0}/{1} — continue à pratiquer ! 💪',
      quizLow: 'Tu as {0}/{1}. Révise les cartes et réessaie ! 📚',
      searchPlaceholder: 'Rechercher en malgache ou en français...',
      noSearchResults: 'Aucun mot trouvé. Essayez une autre recherche.',
      backToList: '← Toutes les leçons',
      tabCards: '🗂️ Cartes',
      tabText: '📝 Texte',
      tabVocab: '📖 Vocabulaire',
      tabQuiz: '✅ Quiz',
      next: 'Suivant →',
      prev: '← Précédent',
      retry: 'Réessayer',
      quizComplete: '🎉 Quiz terminé !',
      heroTitle: 'Tsara be, Mpiara-miasa !',
      heroSubtitle: '29 leçons avec cartes mémoire, vocabulaire et quiz. Prêt pour Madagascar ?',
      heroStatsLessons: 'leçons',
      heroStatsCards: 'cartes',
      heroStatsQuiz: 'questions',
      filterAll: 'Tout',
      filterBasics: 'Bases',
      filterConversation: 'Conversation',
      filterVocabulary: 'Vocabulaire',
      filterGrammar: 'Grammaire',
      cardsLabel: ' cartes',
      showTranslation: '🌐 Afficher la traduction',
      hideTranslation: '🌐 Masquer la traduction',
      tabReading: '📝 Texte',
      readingSectionTitle: '📖 Compréhension écrite',
      readingSectionSub: 'Textes courts avec traduction, glossaire et questions de compréhension.',
      footer: 'Contenu des Peace Corps et ressources linguistiques académiques. Fait pour 🇲🇬.',
    }
  };

  function t(key, ...args) {
    let s = STRINGS[currentLanguage]?.[key] || STRINGS.en[key] || key;
    args.forEach((arg, i) => { s = s.replace(`{${i}}`, arg); });
    return s;
  }

  // ======== INIT ========
  function init() {
    navReset();
    renderLessons('all');
    renderReadings();
    // Translate footer + back button to default language
    const footer = document.querySelector('.app-footer p');
    if (footer) footer.textContent = t('footer');
    const backBtn = $('back-to-list');
    if (backBtn) backBtn.textContent = t('backToList');
    bindEvents();
    document.body.setAttribute('data-lang', 'en');
  }

  // ======== RENDER LESSON LIST ========
  function renderLessons(filter) {
    lessonsGrid.innerHTML = '';
    // Translate category filter buttons
    categoryBtns.forEach(btn => {
      const key = 'filter' + btn.dataset.filter.charAt(0).toUpperCase() + btn.dataset.filter.slice(1);
      btn.textContent = t(key);
    });
    const filtered = filter === 'all'
      ? LESSONS
      : LESSONS.filter(l => l.category === filter);

    filtered.forEach(lesson => {
      const card = document.createElement('div');
      card.className = 'lesson-card';
      card.innerHTML = `
        <span class="emoji">${lesson.emoji}</span>
        <h3>${lesson.title}</h3>
        <p class="desc">${lesson.description}</p>
        <div class="meta">
          <span class="badge ${lesson.category}">${lesson.category}</span>
          <span class="badge">${lesson.cards?.length || 0}${t('cardsLabel')}</span>
        </div>
      `;
      addTapHandler(card, () => openLesson(lesson));
      lessonsGrid.appendChild(card);
    });
  }

  // ======== RENDER READINGS ========
  function renderReadings() {
    if (!readingsGrid) return;
    // Translate section heading
    const h = $('readings-heading'); if (h) h.textContent = t('readingSectionTitle');
    const s = $('readings-sub'); if (s) s.textContent = t('readingSectionSub');
    // Translate reading tab button label
    const readingTabBtn = document.querySelector('.tab-btn[data-tab="reading"]');
    if (readingTabBtn) readingTabBtn.textContent = t('tabReading');

    readingsGrid.innerHTML = '';
    const list = (typeof READINGS !== 'undefined') ? READINGS : [];
    list.forEach(reading => {
      const card = document.createElement('div');
      card.className = 'lesson-card reading-card';
      card.innerHTML = `
        <span class="emoji">${reading.emoji}</span>
        <h3>${reading.title}</h3>
        <p class="desc">${reading.description}</p>
        <div class="meta">
          <span class="badge reading">${reading.level}</span>
          <span class="badge">${reading.quiz?.length || 0} Qs</span>
        </div>
      `;
      addTapHandler(card, () => openReading(reading));
      readingsGrid.appendChild(card);
    });
  }

  // ======== OPEN READING ========
  function openReading(reading) {
    const descendingFromHome = !lessonListView.classList.contains('hidden');
    if (descendingFromHome) pushBackHandler(backToList);

    currentReading = reading;
    currentLesson = { id: reading.id, title: reading.title, emoji: reading.emoji, description: reading.description, quiz: reading.quiz };
    currentQuizIndex = 0;
    quizScore = 0;

    // Title + description
    lessonTitle.textContent = `${reading.emoji} ${reading.title}`;
    lessonDesc.textContent = reading.description;

    // Tab layout: show only Text + Quiz (hide Cards + Vocab tabs)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const tab = btn.dataset.tab;
      btn.style.display = (tab === 'reading' || tab === 'quiz') ? '' : 'none';
    });
    // Switch to reading tab
    switchTab('reading');

    renderReading();
    renderQuiz();

    // Switch views
    lessonListView.classList.add('hidden');
    lessonView.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  // ======== RENDER READING CONTENT ========
  function renderReading() {
    if (!currentReading) return;
    const r = currentReading;
    const lang = currentLanguage; // 'en', 'de', or 'fr'

    if (readingLevelEl) readingLevelEl.textContent = r.level;

    // Malagasy text (always shown)
    readingText.textContent = r.text.mg;

    // Translation (hidden by default; shown in current UI language)
    let trans = r.text[lang] || r.text.en || '';
    readingTranslation.textContent = trans;
    readingTranslation.classList.add('hidden');
    readingToggleTrans.textContent = t('showTranslation');

    // Glossary: show translation in current UI language
    glossaryList.innerHTML = '';
    (r.glossary || []).forEach(g => {
      const item = document.createElement('div');
      item.className = 'vocab-item';
      let transText = g.en;
      if (lang === 'de' && g.de) transText = g.de;
      else if (lang === 'fr' && g.fr) transText = g.fr;
      item.innerHTML = `<span class="word">${g.mg}</span><span class="trans">${transText}</span>`;
      glossaryList.appendChild(item);
    });
  }

  function toggleReadingTranslation() {
    if (!currentReading) return;
    const hidden = readingTranslation.classList.toggle('hidden');
    readingToggleTrans.textContent = hidden ? t('showTranslation') : t('hideTranslation');
  }

  // ======== OPEN LESSON ========
  function openLesson(lesson) {
    const descendingFromHome = !lessonListView.classList.contains('hidden');
    if (descendingFromHome) pushBackHandler(backToList);

    currentLesson = lesson;
    currentReading = null; // no longer viewing a reading
    currentCardIndex = 0;
    currentQuizIndex = 0;
    quizScore = 0;
    isFlipped = false;

    // Restore all tab visibility (openReading hides Cards + Vocab).
    // The reading tab is hidden by default for regular lessons.
    document.querySelectorAll('.tab-btn').forEach(btn => {
      if (btn.dataset.tab === 'reading') {
        btn.style.display = 'none';
      } else {
        btn.style.display = '';
      }
    });

    // Update title
    lessonTitle.textContent = `${lesson.emoji} ${lesson.title}`;
    lessonDesc.textContent = lesson.description;

    // Update tab labels based on category
    const isGrammar = lesson.category === 'grammar';
    const cardsTabBtn = document.querySelector('.tab-btn[data-tab="cards"]');
    if (cardsTabBtn) cardsTabBtn.textContent = isGrammar ? t('tabText') : t('tabCards');

    // Reset tabs to cards/text
    switchTab('cards');

    // Render content
    if (isGrammar && lesson.content) {
      renderGrammar();
    } else {
      renderCard();
    }
    renderVocab();
    renderQuiz();

    // Switch views
    lessonListView.classList.add('hidden');
    lessonView.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  // ======== BACK TO LIST ========
  function backToList() {
    // Only pop if a lesson was actually open (we were at a nav level).
    if (currentLesson) popBackHandler();
    lessonView.classList.add('hidden');
    lessonListView.classList.remove('hidden');
    currentLesson = null;
    currentReading = null;
    // Restore all tab visibility for next time (reading tab stays hidden by default)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.style.display = (btn.dataset.tab === 'reading') ? 'none' : '';
    });
    window.scrollTo(0, 0);
  }

  // ======== TABS ========
  function switchTab(tabId) {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === `tab-${tabId}`);
    });
  }

  // ======== FLASHCARDS ========
  function renderCard() {
    hideGrammar();
    const cards = currentLesson.cards || [];
    const total = cards.length;
    const card = cards[currentCardIndex];

    if (!card) return;

    cardCounter.textContent = `${currentCardIndex + 1} / ${total}`;
    cardProgressFill.style.width = `${((currentCardIndex + 1) / total) * 100}%`;

    // Language switching for card front
    let frontText = card.front;
    if (currentLanguage === 'de' && card.front_de) frontText = card.front_de;
    else if (currentLanguage === 'fr' && card.front_fr) frontText = card.front_fr;
    cardFront.textContent = frontText;
    cardBack.textContent = card.back;

    // Reset flip
    isFlipped = false;
    flashcard.classList.remove('flipped');
    btnFlip.textContent = t('flip');

    // Button states
    btnPrev.disabled = currentCardIndex === 0;
    btnNext.disabled = currentCardIndex === total - 1;
  }

  function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
    btnFlip.textContent = isFlipped ? t('flipBack') : t('flip');
  }

  // ======== GRAMMAR TEXT ========
  function renderGrammar() {
    const sections = currentLesson.content || {};
    const lang = currentLanguage; // 'en', 'de', or 'fr'
    const textSections = sections[lang] || sections['en'] || [];

    // Show grammar content, hide card UI
    grammarContent.classList.remove('hidden');
    cardProgressUI.classList.add('hidden');
    flashcardContainer.classList.add('hidden');
    cardControls.classList.add('hidden');

    if (!textSections.length) {
      grammarContent.innerHTML = '<p style="text-align:center;color:var(--color-text-light);padding:2rem">' + t('noContent') + '</p>';
      return;
    }

    let html = '<div class="grammar-scroll">';
    textSections.forEach((sec, i) => {
      html += '<div class="grammar-block">';
      html += '<h3 class="grammar-heading">' + sec.heading + '</h3>';
      // Body text: split on pipe to separate individual points
      const lines = sec.body.split(' | ').map(s => s.trim()).filter(Boolean);
      lines.forEach((line, idx) => {
        let inner = '';
        if (line.includes('Example:') || line.includes('Beispiel:')) {
          inner = '<div class="grammar-example">' + line + '</div>';
        } else if (line.includes('=') || line.includes(':')) {
          inner = '<div class="grammar-line">' + line + '</div>';
        } else {
          inner = '<p class="grammar-body">' + line + '</p>';
        }
        html += '<div class="grammar-point">' + inner + '</div>';
        // Add spacer after every point except the last one in this section
        if (idx < lines.length - 1) {
          html += '<div class="grammar-spacer"></div>';
        }
        // Extra spacer after examples so next explanation starts on a fresh row
        if ((line.includes('Example:') || line.includes('Beispiel:')) && idx < lines.length - 1) {
          html += '<div class="grammar-spacer"></div>';
        }
      });
      html += '</div>';
    });
    html += '</div>';

    grammarContent.innerHTML = html;
  }

  function hideGrammar() {
    grammarContent.classList.add('hidden');
    cardProgressUI.classList.remove('hidden');
    flashcardContainer.classList.remove('hidden');
    cardControls.classList.remove('hidden');
  }

  function nextCard() {
    const total = currentLesson.cards?.length || 0;
    if (currentCardIndex < total - 1) {
      currentCardIndex++;
      renderCard();
    }
  }

  function prevCard() {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      renderCard();
    }
  }

  // ======== VOCAB ========
  function renderVocab() {
    const vocab = currentLesson.vocab || [];
    vocabList.innerHTML = '';

    if (vocab.length === 0) {
      vocabList.innerHTML = `<p style="text-align:center;color:var(--color-text-light)">${t('noVocab')}</p>`;
      return;
    }

    vocab.forEach(v => {
      const item = document.createElement('div');
      item.className = 'vocab-item';
      let transText = v.english;
      if (currentLanguage === 'de' && v.german) transText = v.german;
      else if (currentLanguage === 'fr' && v.french) transText = v.french;
      item.innerHTML = `
        <span class="word">${v.malagasy}</span>
        <span class="trans">${transText}</span>
      `;
      vocabList.appendChild(item);
    });
  }

  // ======== QUIZ ========
  function renderQuiz() {
    const questions = (typeof QUIZZES !== 'undefined' && QUIZZES[currentLesson.id]) || currentLesson.quiz || [];
    const total = questions.length;

    // Reset UI
    quizScoreEl.classList.add('hidden');
    document.querySelector('.quiz-box')?.classList.remove('hidden');

    if (total === 0) {
      quizQuestion.textContent = t('noQuiz');
      quizOptions.innerHTML = '';
      quizCounter.textContent = '0 / 0';
      quizProgressFill.style.width = '0%';
      return;
    }

    const q = questions[currentQuizIndex];
    quizCounter.textContent = `${currentQuizIndex + 1} / ${total}`;
    quizProgressFill.style.width = `${((currentQuizIndex + 1) / total) * 100}%`;

    // Language switching for quiz
    let qText = q.question;
    if (currentLanguage === 'de' && q.question_de) qText = q.question_de;
    else if (currentLanguage === 'fr' && q.question_fr) qText = q.question_fr;
    quizQuestion.textContent = qText;
    quizOptions.innerHTML = '';
    quizFeedback.classList.add('hidden');
    btnQuizNext.classList.add('hidden');

    let opts = q.options;
    if (currentLanguage === 'de' && q.options_de) opts = q.options_de;
    else if (currentLanguage === 'fr' && q.options_fr) opts = q.options_fr;
    opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => answerQuiz(i, btn));
      quizOptions.appendChild(btn);
    });
  }

  function answerQuiz(selectedIndex, btnEl) {
    const questions = (typeof QUIZZES !== 'undefined' && QUIZZES[currentLesson.id]) || currentLesson.quiz || [];
    const q = questions[currentQuizIndex];
    const isCorrect = selectedIndex === q.correct;

    // Disable all options
    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.correct) btn.classList.add('correct');
    });

    if (isCorrect) {
      quizScore++;
      quizFeedback.textContent = t('correct');
      quizFeedback.className = 'quiz-feedback correct';
    } else {
      btnEl.classList.add('wrong');
      // Show correct answer in the current language
      let correctOpts = q.options;
      if (currentLanguage === 'de' && q.options_de) correctOpts = q.options_de;
      else if (currentLanguage === 'fr' && q.options_fr) correctOpts = q.options_fr;
      quizFeedback.textContent = `${t('wrong')}${correctOpts[q.correct]}`;
      quizFeedback.className = 'quiz-feedback wrong';
    }

    quizFeedback.classList.remove('hidden');
    btnQuizNext.classList.remove('hidden');
  }

  function nextQuiz() {
    const questions = (typeof QUIZZES !== 'undefined' && QUIZZES[currentLesson.id]) || currentLesson.quiz || [];
    if (currentQuizIndex < questions.length - 1) {
      currentQuizIndex++;
      renderQuiz();
    } else {
      showQuizScore();
    }
  }

  function showQuizScore() {
    const questions = (typeof QUIZZES !== 'undefined' && QUIZZES[currentLesson.id]) || currentLesson.quiz || [];
    const total = questions.length;
    const percent = Math.round((quizScore / total) * 100);

    document.querySelector('.quiz-box').classList.add('hidden');
    quizScoreEl.classList.remove('hidden');

    let msg = '';
    if (percent === 100) msg = t('quizPerfect', quizScore, total);
    else if (percent >= 80) msg = t('quizGreat', quizScore, total);
    else if (percent >= 50) msg = t('quizOkay', quizScore, total);
    else msg = t('quizLow', quizScore, total);

    scoreText.textContent = msg;
  }

  function retryQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    document.querySelector('.quiz-box').classList.remove('hidden');
    quizScoreEl.classList.add('hidden');
    renderQuiz();
  }

  // ======== SEARCH ========
  function openSearch() {
    searchOverlay.classList.remove('hidden');
    searchInput.value = '';
    searchInput.focus();
    searchResults.innerHTML = '';
    pushBackHandler(closeSearch);
  }

  function closeSearch() {
    if (searchOverlay.classList.contains('hidden')) return;
    searchOverlay.classList.add('hidden');
    popBackHandler();
  }

  function doSearch(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = ALL_VOCAB.filter(v =>
      v.malagasy.toLowerCase().includes(query) ||
      v.english.toLowerCase().includes(query) ||
      (v.german && v.german.toLowerCase().includes(query)) ||
      (v.french && v.french.toLowerCase().includes(query))
    ).slice(0, 20);

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="no-results">${t('noSearchResults')}</div>`;
      return;
    }

    searchResults.innerHTML = matches.map(v => {
      let trans = v.english;
      if (currentLanguage === 'de' && v.german) trans = v.german;
      else if (currentLanguage === 'fr' && v.french) trans = v.french;
      return `
      <div class="search-result-item" data-lesson="${v.lessonId}">
        <div>
          <span class="word">${v.malagasy}</span>
          <span style="color:var(--color-text-light)"> — </span>
          <span class="trans">${trans}</span>
        </div>
        <span class="badge">${v.lessonTitle}</span>
      </div>`;
    }).join('');

    // Bind click to jump to lesson
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      addTapHandler(item, () => {
        const lessonId = item.dataset.lesson;
        const lesson = LESSONS.find(l => l.id === lessonId);
        if (lesson) {
          closeSearch();
          openLesson(lesson);
        }
      });
    });
  }

  // ======== EVENT BINDING ========
  function bindEvents() {
    // Category filter
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderLessons(btn.dataset.filter);
      });
    });

    // Back button
    $('back-to-list').addEventListener('click', backToList);

    // Tabs
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Flashcard
    btnFlip.addEventListener('click', flipCard);
    addTapHandler(flashcard, flipCard);
    btnNext.addEventListener('click', nextCard);
    btnPrev.addEventListener('click', prevCard);

    // Keyboard nav for cards
    document.addEventListener('keydown', (e) => {
      if (!currentLesson || lessonView.classList.contains('hidden')) return;
      const activeTab = document.querySelector('.tab-content.active');
      if (!activeTab || activeTab.id !== 'tab-cards') return;

      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        flipCard();
      }
    });

    // Quiz
    btnQuizNext.addEventListener('click', nextQuiz);
    btnQuizRetry.addEventListener('click', retryQuiz);

    // Reading translation toggle
    if (readingToggleTrans) readingToggleTrans.addEventListener('click', toggleReadingTranslation);

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);

    // Search
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
    searchInput.addEventListener('input', (e) => doSearch(e.target.value));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    });
  }

  // ======== START ========
  init();
})();
