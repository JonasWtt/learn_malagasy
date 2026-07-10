// ============================================
// MALAGASY LEARNING APP — LOGIC
// ============================================

(function() {
  'use strict';

  // ======== STATE ========
  let currentLesson = null;
  let currentCardIndex = 0;
  let currentQuizIndex = 0;
  let quizScore = 0;
  let isFlipped = false;

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
  const flashcard = $('flashcard');
  const cardFront = $('card-front');
  const cardBack = $('card-back');
  const btnFlip = $('card-flip');
  const btnPrev = $('card-prev');
  const btnNext = $('card-next');

  // Vocab
  const vocabList = $('vocab-list');

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

  // ======== INIT ========
  function init() {
    renderLessons('all');
    bindEvents();
  }

  // ======== RENDER LESSON LIST ========
  function renderLessons(filter) {
    lessonsGrid.innerHTML = '';
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
          <span class="badge">${lesson.cards?.length || 0} cards</span>
        </div>
      `;
      card.addEventListener('click', () => openLesson(lesson));
      lessonsGrid.appendChild(card);
    });
  }

  // ======== OPEN LESSON ========
  function openLesson(lesson) {
    currentLesson = lesson;
    currentCardIndex = 0;
    currentQuizIndex = 0;
    quizScore = 0;
    isFlipped = false;

    // Update title
    lessonTitle.textContent = `${lesson.emoji} ${lesson.title}`;
    lessonDesc.textContent = lesson.description;

    // Reset tabs to cards
    switchTab('cards');

    // Render content
    renderCard();
    renderVocab();
    renderQuiz();

    // Switch views
    lessonListView.classList.add('hidden');
    lessonView.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  // ======== BACK TO LIST ========
  function backToList() {
    lessonView.classList.add('hidden');
    lessonListView.classList.remove('hidden');
    currentLesson = null;
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
    const cards = currentLesson.cards || [];
    const total = cards.length;
    const card = cards[currentCardIndex];

    if (!card) return;

    cardCounter.textContent = `${currentCardIndex + 1} / ${total}`;
    cardProgressFill.style.width = `${((currentCardIndex + 1) / total) * 100}%`;

    cardFront.textContent = card.front;
    cardBack.textContent = card.back;

    // Reset flip
    isFlipped = false;
    flashcard.classList.remove('flipped');
    btnFlip.textContent = 'Tap to flip ↻';

    // Button states
    btnPrev.disabled = currentCardIndex === 0;
    btnNext.disabled = currentCardIndex === total - 1;
  }

  function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
    btnFlip.textContent = isFlipped ? 'Tap to flip ↺' : 'Tap to flip ↻';
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
      vocabList.innerHTML = '<p style="text-align:center;color:var(--color-text-light)">No vocabulary for this lesson yet.</p>';
      return;
    }

    vocab.forEach(v => {
      const item = document.createElement('div');
      item.className = 'vocab-item';
      item.innerHTML = `
        <span class="word">${v.malagasy}</span>
        <span class="trans">${v.english}</span>
      `;
      vocabList.appendChild(item);
    });
  }

  // ======== QUIZ ========
  function renderQuiz() {
    const questions = currentLesson.quiz || [];
    const total = questions.length;

    // Reset UI
    quizScoreEl.classList.add('hidden');
    $('quiz-box')?.classList.remove('hidden');

    if (total === 0) {
      quizQuestion.textContent = 'No quiz questions for this lesson yet.';
      quizOptions.innerHTML = '';
      quizCounter.textContent = '0 / 0';
      quizProgressFill.style.width = '0%';
      return;
    }

    const q = questions[currentQuizIndex];
    quizCounter.textContent = `${currentQuizIndex + 1} / ${total}`;
    quizProgressFill.style.width = `${((currentQuizIndex + 1) / total) * 100}%`;

    quizQuestion.textContent = q.question;
    quizOptions.innerHTML = '';
    quizFeedback.classList.add('hidden');
    btnQuizNext.classList.add('hidden');

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => answerQuiz(i, btn));
      quizOptions.appendChild(btn);
    });
  }

  function answerQuiz(selectedIndex, btnEl) {
    const questions = currentLesson.quiz || [];
    const q = questions[currentQuizIndex];
    const isCorrect = selectedIndex === q.correct;

    // Disable all options
    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.correct) btn.classList.add('correct');
    });

    if (isCorrect) {
      quizScore++;
      quizFeedback.textContent = '✅ Correct! Well done.';
      quizFeedback.className = 'quiz-feedback correct';
    } else {
      btnEl.classList.add('wrong');
      quizFeedback.textContent = `❌ Wrong. The answer is: ${q.options[q.correct]}`;
      quizFeedback.className = 'quiz-feedback wrong';
    }

    quizFeedback.classList.remove('hidden');
    btnQuizNext.classList.remove('hidden');
  }

  function nextQuiz() {
    const questions = currentLesson.quiz || [];
    if (currentQuizIndex < questions.length - 1) {
      currentQuizIndex++;
      renderQuiz();
    } else {
      showQuizScore();
    }
  }

  function showQuizScore() {
    const questions = currentLesson.quiz || [];
    const total = questions.length;
    const percent = Math.round((quizScore / total) * 100);

    document.querySelector('.quiz-box').classList.add('hidden');
    quizScoreEl.classList.remove('hidden');

    let msg = '';
    if (percent === 100) msg = `Perfect score! ${quizScore}/${total} — you're ready for Madagascar! 🎉`;
    else if (percent >= 80) msg = `Great job! ${quizScore}/${total} — almost there! 🔥`;
    else if (percent >= 50) msg = `Not bad! ${quizScore}/${total} — keep practicing! 💪`;
    else msg = `You got ${quizScore}/${total}. Review the cards and try again! 📚`;

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
  }

  function closeSearch() {
    searchOverlay.classList.add('hidden');
  }

  function doSearch(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = ALL_VOCAB.filter(v =>
      v.malagasy.toLowerCase().includes(query) ||
      v.english.toLowerCase().includes(query)
    ).slice(0, 20);

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No words found. Try a different search.</div>';
      return;
    }

    searchResults.innerHTML = matches.map(v => `
      <div class="search-result-item" data-lesson="${v.lessonId}">
        <div>
          <span class="word">${v.malagasy}</span>
          <span style="color:var(--color-text-light)"> — </span>
          <span class="trans">${v.english}</span>
        </div>
        <span class="badge">${v.lessonTitle}</span>
      </div>
    `).join('');

    // Bind click to jump to lesson
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
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
    flashcard.addEventListener('click', flipCard);
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
