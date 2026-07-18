// ============================================
// MALAGASY LEARNING APP — QUIZ DATA
// ============================================

const QUIZZES = {
  intro: [
    {
      question: "What does \"teny\" mean?",
      question_de: "Was bedeutet \"teny\"?",
      question_fr: "Que signifie \"teny\" ?",
      options: ["Madagascar", "language / words", "(unknown)", "The Malagasy language"],
      options_de: ["(unbekannt)", "Sprache / Wörter", "Die madagassische Sprache", "Madagaskar"],
      options_fr: ["Madagascar", "langue / mots", "La langue malgache", "(inconnu)"],
      correct: 1
    },
    {
      question: "What does \"Madagasikara\" mean?",
      question_de: "Was bedeutet \"Madagasikara\"?",
      question_fr: "Que signifie \"Madagasikara\" ?",
      options: ["language / words", "The Malagasy language", "(unknown)", "Madagascar"],
      options_de: ["Madagaskar", "Die madagassische Sprache", "Sprache / Wörter", "(unbekannt)"],
      options_fr: ["langue / mots", "(inconnu)", "La langue malgache", "Madagascar"],
      correct: 3
    },
    {
      question: "What does \"Malagasy\" mean?",
      question_de: "Was bedeutet \"Malagasy\"?",
      question_fr: "Que signifie \"Malagasy\" ?",
      options: ["language / words", "The Malagasy language", "(unknown)", "Madagascar"],
      options_de: ["Madagaskar", "Sprache / Wörter", "(unbekannt)", "Die madagassische Sprache"],
      options_fr: ["La langue malgache", "langue / mots", "Madagascar", "(inconnu)"],
      correct: 1
    },
    {
      question: "What is the Malagasy for \"Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'.\"?",
      question_de: "Was ist das madagassische Wort für \"Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'.\"?",
      question_fr: "Quel est le mot malgache pour \"Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'.\" ?",
      options: ["Word Order", "Malagasy Origin", "Dialects", "No verb 'to be'"],
      options_de: ["Word Order", "Malagasy Origin", "Dialects", "No verb 'to be'"],
      options_fr: ["Word Order", "Malagasy Origin", "Dialects", "No verb 'to be'"],
      correct: 3
    },
    {
      question: "What is the Malagasy for \"18 regional dialects. Standard = Merina (Antananarivo).\"?",
      question_de: "Was ist das madagassische Wort für \"18 regional dialects. Standard = Merina (Antananarivo).\"?",
      question_fr: "Quel est le mot malgache pour \"18 regional dialects. Standard = Merina (Antananarivo).\" ?",
      options: ["Word Order", "Alphabet", "Speakers", "Dialects"],
      options_de: ["Word Order", "Alphabet", "Speakers", "Dialects"],
      options_fr: ["Word Order", "Alphabet", "Speakers", "Dialects"],
      correct: 3
    },
    {
      question: "What is the Malagasy for \"Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago.\"?",
      question_de: "Was ist das madagassische Wort für \"Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago.\"?",
      question_fr: "Quel est le mot malgache pour \"Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago.\" ?",
      options: ["No verb 'to be'", "Dialects", "Alphabet", "Malagasy Origin"],
      options_de: ["No verb 'to be'", "Dialects", "Alphabet", "Malagasy Origin"],
      options_fr: ["No verb 'to be'", "Dialects", "Alphabet", "Malagasy Origin"],
      correct: 3
    },
    {
      question: "What is the Malagasy for \"VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I.\"?",
      question_de: "Was ist das madagassische Wort für \"VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I.\"?",
      question_fr: "Quel est le mot malgache pour \"VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I.\" ?",
      options: ["Alphabet", "Speakers", "Word Order", "Malagasy Origin"],
      options_de: ["Alphabet", "Speakers", "Word Order", "Malagasy Origin"],
      options_fr: ["Alphabet", "Speakers", "Word Order", "Malagasy Origin"],
      correct: 2
    },
    {
      question: "What is the Malagasy for \"Over 14 million speakers across Madagascar and Mayotte.\"?",
      question_de: "Was ist das madagassische Wort für \"Over 14 million speakers across Madagascar and Mayotte.\"?",
      question_fr: "Quel est le mot malgache pour \"Over 14 million speakers across Madagascar and Mayotte.\" ?",
      options: ["Dialects", "Speakers", "Word Order", "No verb 'to be'"],
      options_de: ["Dialects", "Speakers", "Word Order", "No verb 'to be'"],
      options_fr: ["Dialects", "Speakers", "Word Order", "No verb 'to be'"],
      correct: 1
    }
  ],
  alphabet: [
    {
      question: "What does \"onja\" mean?",
      question_de: "Was bedeutet \"onja\"?",
      question_fr: "Que signifie \"onja\" ?",
      options: ["Hello", "wave", "full", "there is"],
      options_de: ["voll / satt", "gut", "Hallo", "Welle"],
      options_fr: ["Au revoir !", "plein / rassasié", "vague", "brouillon"],
      correct: 1
    },
    {
      question: "What does \"Manana\" mean?",
      question_de: "Was bedeutet \"Manana\"?",
      question_fr: "Que signifie \"Manana\" ?",
      options: ["good", "to have", "I", "full"],
      options_de: ["neu", "einfach", "haben", "gut"],
      options_fr: ["simple", "Bonjour", "avoir", "je"],
      correct: 1
    },
    {
      question: "What does \"Salama\" mean?",
      question_de: "Was bedeutet \"Salama\"?",
      question_fr: "Que signifie \"Salama\" ?",
      options: ["new (news)", "Hello", "there is", "good"],
      options_de: ["es gibt", "Hallo", "Tschüss!", "besonders"],
      options_fr: ["Bonjour", "Au revoir !", "je", "il y a"],
      correct: 1
    },
    {
      question: "What does \"Indrindra\" mean?",
      question_de: "Was bedeutet \"Indrindra\"?",
      question_fr: "Que signifie \"Indrindra\" ?",
      options: ["to have", "especially", "draft", "wave"],
      options_de: ["besonders", "Entwurf", "haben", "voll / satt"],
      options_fr: ["il y a", "plein / rassasié", "surtout", "je"],
      correct: 1
    },
    {
      question: "What does \"tsotra\" mean?",
      question_de: "Was bedeutet \"tsotra\"?",
      question_fr: "Que signifie \"tsotra\" ?",
      options: ["to have", "draft", "simple", "Bye!"],
      options_de: ["neu", "Hallo", "besonders", "einfach"],
      options_fr: ["simple", "brouillon", "poitrine", "plein / rassasié"],
      correct: 2
    },
    {
      question: "What does \"Voky\" mean?",
      question_de: "Was bedeutet \"Voky\"?",
      question_fr: "Que signifie \"Voky\" ?",
      options: ["new", "Bye!", "full", "especially"],
      options_de: ["haben", "ich", "voll / satt", "Welle"],
      options_fr: ["plein / rassasié", "simple", "brouillon", "Bonjour"],
      correct: 2
    },
    {
      question: "What does \"soa\" mean?",
      question_de: "Was bedeutet \"soa\"?",
      question_fr: "Que signifie \"soa\" ?",
      options: ["good", "new (news)", "draft", "there is"],
      options_de: ["gut", "neu (Nachrichten)", "neu", "Tschüss!"],
      options_fr: ["bon", "avoir", "nouveau (nouvelles)", "vague"],
      correct: 0
    },
    {
      question: "What does \"Misy\" mean?",
      question_de: "Was bedeutet \"Misy\"?",
      question_fr: "Que signifie \"Misy\" ?",
      options: ["new", "there is", "wave", "simple"],
      options_de: ["ich", "es gibt", "gut", "voll / satt"],
      options_fr: ["il y a", "surtout", "poitrine", "plein / rassasié"],
      correct: 1
    }
  ],
  greetings: [
    {
      question: "What does \"Faly\" mean?",
      question_de: "Was bedeutet \"Faly\"?",
      question_fr: "Que signifie \"Faly\" ?",
      options: ["Lucky / Blessed", "thank you", "Hello", "Happy / Glad"],
      options_de: ["Hallo", "Hallo auch an dich", "Glücklich / Froh", "Willkommen"],
      options_fr: ["nouvelles / nouveau", "Saluer", "Heureux / Content", "Au revoir"],
      correct: 3
    },
    {
      question: "What does \"Tonga soa\" mean?",
      question_de: "Was bedeutet \"Tonga soa\"?",
      question_fr: "Que signifie \"Tonga soa\" ?",
      options: ["Hello", "Welcome", "Greet / Salute", "How are you doing?"],
      options_de: ["Nachrichten / neu", "Grüßen", "Sehr gut", "Willkommen"],
      options_fr: ["Saluer", "Bienvenue", "Bonjour", "S'il vous plaît / Pardon"],
      correct: 1
    },
    {
      question: "What does \"Azafady\" mean?",
      question_de: "Was bedeutet \"Azafady\"?",
      question_fr: "Que signifie \"Azafady\" ?",
      options: ["There is not / Nothing", "Please / Sorry / Excuse me", "Very well", "health / How are you?"],
      options_de: ["Hi / Gesundheit", "Bitte / Entschuldigung", "Nicht so gut", "Hallo auch an dich"],
      options_fr: ["S'il vous plaît / Pardon", "Comment allez-vous ?", "Ne vous inquiétez pas", "Heureux / Content"],
      correct: 1
    },
    {
      question: "What does \"Aza ny manahy\" mean?",
      question_de: "Was bedeutet \"Aza ny manahy\"?",
      question_fr: "Que signifie \"Aza ny manahy\" ?",
      options: ["Hi / Health", "good / OK", "Welcome", "Don't worry"],
      options_de: ["Bitte / Entschuldigung (formell)", "Problem", "Hallo auch an dich", "Keine Sorge"],
      options_fr: ["merci", "Bienvenue", "Ne vous inquiétez pas", "Très bien"],
      correct: 3
    },
    {
      question: "What does \"Manahoana\" mean?",
      question_de: "Was bedeutet \"Manahoana\"?",
      question_fr: "Que signifie \"Manahoana\" ?",
      options: ["Hello", "Hi / Health", "How are you doing?", "Greet / Salute"],
      options_de: ["Keine Sorge", "Hallo auch an dich", "Hallo", "Sehr gut"],
      options_fr: ["nouvelles / nouveau", "Il n'y a pas / Rien", "Bonjour", "Comment allez-vous ?"],
      correct: 0
    },
    {
      question: "What does \"Tsy misy\" mean?",
      question_de: "Was bedeutet \"Tsy misy\"?",
      question_fr: "Que signifie \"Tsy misy\" ?",
      options: ["There is not / Nothing", "health / How are you?", "good / OK", "Not so well"],
      options_de: ["Keine Sorge", "Es gibt nicht / Nichts", "Problem", "danke"],
      options_fr: ["Il n'y a pas / Rien", "Saluer", "Chanceux / Béni", "santé / Comment allez-vous ?"],
      correct: 0
    },
    {
      question: "What does \"olana\" mean?",
      question_de: "Was bedeutet \"olana\"?",
      question_fr: "Que signifie \"olana\" ?",
      options: ["Greet / Salute", "good / OK", "problem", "Not so well"],
      options_de: ["Es gibt nicht / Nichts", "Problem", "Nicht so gut", "Sehr gut"],
      options_fr: ["bien / OK", "S'il vous plaît / Pardon", "Pas très bien", "problème"],
      correct: 2
    },
    {
      question: "What does \"Salama ohatran'ny\" mean?",
      question_de: "Was bedeutet \"Salama ohatran'ny\"?",
      question_fr: "Que signifie \"Salama ohatran'ny\" ?",
      options: ["Please / Sorry / Excuse me", "problem", "Please / Sorry (formal)", "Hello to you too"],
      options_de: ["Nicht so gut", "Hallo auch an dich", "gut / OK", "Nachrichten / neu"],
      options_fr: ["Comment allez-vous ?", "Bonjour à vous aussi", "merci", "S'il vous plaît / Pardon"],
      correct: 3
    },
    {
      question: "What does \"vaovao\" mean?",
      question_de: "Was bedeutet \"vaovao\"?",
      question_fr: "Que signifie \"vaovao\" ?",
      options: ["Hi / Health", "news / new", "Not so well", "Happy / Glad"],
      options_de: ["Wie geht es dir?", "Willkommen", "Nachrichten / neu", "Bitte / Entschuldigung (formell)"],
      options_fr: ["Il n'y a pas / Rien", "nouvelles / nouveau", "Bienvenue", "bien / OK"],
      correct: 1
    },
    {
      question: "What does \"Tsy dia tsara\" mean?",
      question_de: "Was bedeutet \"Tsy dia tsara\"?",
      question_fr: "Que signifie \"Tsy dia tsara\" ?",
      options: ["problem", "thank you", "Not so well", "Don't worry"],
      options_de: ["danke", "Grüßen", "Nicht so gut", "Glücklich / Gesegnet"],
      options_fr: ["S'il vous plaît / Pardon", "Pas très bien", "santé / Comment allez-vous ?", "Salut / Santé"],
      correct: 2
    }
  ],
  introductions: [
    {
      question: "What does \"tompon'asa\" mean?",
      question_de: "Was bedeutet \"tompon'asa\"?",
      question_fr: "Que signifie \"tompon'asa\" ?",
      options: ["name", "employer", "work / job", "to live / to sit"],
      options_de: ["Haushälter/in", "Arbeitgeber", "Praktikant", "USA"],
      options_fr: ["employeur", "femme/homme de ménage", "bénévole", "nom"],
      correct: 1
    },
    {
      question: "What does \"Frantsay\" mean?",
      question_de: "Was bedeutet \"Frantsay\"?",
      question_fr: "Que signifie \"Frantsay\" ?",
      options: ["to live / to sit", "from where", "employer", "French"],
      options_de: ["Bis später", "Französisch", "Reiseführer", "Sprache / Wort"],
      options_fr: ["étudiant", "Anglais", "travailleur", "Français"],
      correct: 3
    },
    {
      question: "What does \"Mpiofana\" mean?",
      question_de: "Was bedeutet \"Mpiofana\"?",
      question_fr: "Que signifie \"Mpiofana\" ?",
      options: ["trainee", "English", "volunteer", "French"],
      options_de: ["Bekannter", "Wächter", "Arbeit / Beruf", "Praktikant"],
      options_fr: ["travailleur", "bénévole", "stagiaire", "Anglais"],
      correct: 0
    },
    {
      question: "What does \"sakaizana\" mean?",
      question_de: "Was bedeutet \"sakaizana\"?",
      question_fr: "Que signifie \"sakaizana\" ?",
      options: ["to learn", "tour guide", "acquaintance", "language / word"],
      options_de: ["Bekannter", "USA", "wohnen / sitzen", "Arbeiter"],
      options_fr: ["bénévole", "connaissance", "habiter / s'asseoir", "À plus tard"],
      correct: 2
    },
    {
      question: "What does \"mpiambina\" mean?",
      question_de: "Was bedeutet \"mpiambina\"?",
      question_fr: "Que signifie \"mpiambina\" ?",
      options: ["language / word", "housekeeper", "guard", "teacher"],
      options_de: ["Wächter", "Sprache / Wort", "Arbeiter", "Arzt"],
      options_fr: ["professeur", "Français", "gardien", "bénévole"],
      correct: 2
    },
    {
      question: "What does \"teny\" mean?",
      question_de: "Was bedeutet \"teny\"?",
      question_fr: "Que signifie \"teny\" ?",
      options: ["language / word", "volunteer", "from where", "French"],
      options_de: ["Bekannter", "Arbeit / Beruf", "Wächter", "Sprache / Wort"],
      options_fr: ["gardien", "étudiant", "langue / mot", "bénévole"],
      correct: 0
    },
    {
      question: "What does \"mpianatra\" mean?",
      question_de: "Was bedeutet \"mpianatra\"?",
      question_fr: "Que signifie \"mpianatra\" ?",
      options: ["acquaintance", "See you later", "name", "student"],
      options_de: ["lernen", "Student", "Französisch", "Bekannter"],
      options_fr: ["Français", "nom", "apprendre", "étudiant"],
      correct: 3
    },
    {
      question: "What does \"asa\" mean?",
      question_de: "Was bedeutet \"asa\"?",
      question_fr: "Que signifie \"asa\" ?",
      options: ["work / job", "language / word", "tour guide", "French"],
      options_de: ["Reiseführer", "lernen", "Arbeit / Beruf", "Bis später"],
      options_fr: ["stagiaire", "travail / métier", "employeur", "États-Unis"],
      correct: 0
    },
    {
      question: "What does \"Mandrapihaona\" mean?",
      question_de: "Was bedeutet \"Mandrapihaona\"?",
      question_fr: "Que signifie \"Mandrapihaona\" ?",
      options: ["See you later", "USA", "name", "French"],
      options_de: ["Sprache / Wort", "Bis später", "Arbeiter", "Lehrer"],
      options_fr: ["guide touristique", "À plus tard", "Français", "femme/homme de ménage"],
      correct: 0
    },
    {
      question: "What does \"Anglisy\" mean?",
      question_de: "Was bedeutet \"Anglisy\"?",
      question_fr: "Que signifie \"Anglisy\" ?",
      options: ["English", "from where", "USA", "French"],
      options_de: ["Name", "Reiseführer", "Englisch", "Französisch"],
      options_fr: ["professeur", "Anglais", "travail / métier", "connaissance"],
      correct: 0
    }
  ],
  family: [
    {
      question: "What does \"Raimandreny\" mean?",
      question_de: "Was bedeutet \"Raimandreny\"?",
      question_fr: "Que signifie \"Raimandreny\" ?",
      options: ["Age / Year", "Single child", "To be separated", "Parents"],
      options_de: ["Einzelkind", "Eltern", "Kinder großziehen", "Kind / Jugendlicher"],
      options_fr: ["Adopter", "frère/soeur aîné(e)", "Cousin(e)", "Parents"],
      correct: 3
    },
    {
      question: "What does \"Menaky\" mean?",
      question_de: "Was bedeutet \"Menaky\"?",
      question_fr: "Que signifie \"Menaky\" ?",
      options: ["To be married", "Friend", "Parents", "Cousin"],
      options_de: ["Cousin/Cousine", "Kind", "Geboren", "älteres Geschwister"],
      options_fr: ["Cousin(e)", "Parents", "Famille", "Mère"],
      correct: 3
    },
    {
      question: "What does \"Nisaraka\" mean?",
      question_de: "Was bedeutet \"Nisaraka\"?",
      question_fr: "Que signifie \"Nisaraka\" ?",
      options: ["Parents", "Age / Year", "To be separated", "Husband / Spouse"],
      options_de: ["Getrennt sein", "Freund", "Freund / Freundin", "Gebären"],
      options_fr: ["Frère", "Être séparé", "Résident / Habitant", "Âge / Année"],
      correct: 2
    },
    {
      question: "What does \"Dada\" mean?",
      question_de: "Was bedeutet \"Dada\"?",
      question_fr: "Que signifie \"Dada\" ?",
      options: ["Younger sibling", "Sister", "Brother", "Father"],
      options_de: ["jüngeres Geschwister", "Vater", "Einzelkind", "Freund / Freundin"],
      options_fr: ["Femme / Épouse", "Aîné / Senior", "Neveu / Nièce", "Père"],
      correct: 3
    },
    {
      question: "What does \"Mitaiza\" mean?",
      question_de: "Was bedeutet \"Mitaiza\"?",
      question_fr: "Que signifie \"Mitaiza\" ?",
      options: ["Boyfriend / Girlfriend", "Child", "Husband / Spouse", "To raise (children)"],
      options_de: ["Getrennt sein", "Eltern", "Kinder großziehen", "Haushalt"],
      options_fr: ["Élever (des enfants)", "Ami", "Adopter", "Parents"],
      correct: 3
    },
    {
      question: "What does \"Nenibe\" mean?",
      question_de: "Was bedeutet \"Nenibe\"?",
      question_fr: "Que signifie \"Nenibe\" ?",
      options: ["Household", "Sister", "Grandmother", "Mother"],
      options_de: ["Neffe / Nichte", "Großmutter", "Ehefrau", "Kinder großziehen"],
      options_fr: ["Fils", "Ami", "Mari / Époux", "Grand-mère"],
      correct: 2
    },
    {
      question: "What does \"Teraka\" mean?",
      question_de: "Was bedeutet \"Teraka\"?",
      question_fr: "Que signifie \"Teraka\" ?",
      options: ["Born", "Daughter", "Nephew / Niece", "Grandmother"],
      options_de: ["Ehefrau", "Geboren", "Cousin/Cousine", "Neffe / Nichte"],
      options_fr: ["Né", "Être marié", "Mari / Époux", "Donner naissance"],
      correct: 0
    },
    {
      question: "What does \"Anabavy\" mean?",
      question_de: "Was bedeutet \"Anabavy\"?",
      question_fr: "Que signifie \"Anabavy\" ?",
      options: ["Family", "Son", "Sister", "To give birth"],
      options_de: ["Adoptieren", "Haben", "Freund", "Schwester"],
      options_fr: ["Adopter", "Ami", "Soeur", "Cousin(e)"],
      correct: 2
    },
    {
      question: "What does \"Zanaka lahy\" mean?",
      question_de: "Was bedeutet \"Zanaka lahy\"?",
      question_fr: "Que signifie \"Zanaka lahy\" ?",
      options: ["Kid / Young person", "To raise (children)", "Parents", "Son"],
      options_de: ["Cousin/Cousine", "Mutter", "Kind", "Sohn"],
      options_fr: ["Être séparé", "Être marié", "Adopter", "Fils"],
      correct: 3
    },
    {
      question: "What does \"Manam-bady\" mean?",
      question_de: "Was bedeutet \"Manam-bady\"?",
      question_fr: "Que signifie \"Manam-bady\" ?",
      options: ["Friend", "Family", "Resident / Inhabitant", "To be married"],
      options_de: ["Verheiratet sein", "Gebären", "Bruder", "Zwillinge"],
      options_fr: ["Être marié", "Petit ami / Petite amie", "Jumeaux", "Jumeau/Jumelle"],
      correct: 3
    },
    {
      question: "What does \"Anadahy\" mean?",
      question_de: "Was bedeutet \"Anadahy\"?",
      question_fr: "Que signifie \"Anadahy\" ?",
      options: ["Elder / Senior", "Family", "Twins", "Brother"],
      options_de: ["Großmutter", "Bruder", "Gebären", "Freund / Freundin"],
      options_fr: ["Frère", "Résident / Habitant", "Enfant unique", "Soeur"],
      correct: 3
    },
    {
      question: "What does \"Dadabe\" mean?",
      question_de: "Was bedeutet \"Dadabe\"?",
      question_fr: "Que signifie \"Dadabe\" ?",
      options: ["Grandfather", "Boyfriend / Girlfriend", "Father", "Younger sibling"],
      options_de: ["Großvater", "Geboren", "Sohn", "Bruder"],
      options_fr: ["Résident / Habitant", "Jumeaux", "Grand-père", "Donner naissance"],
      correct: 0
    },
    {
      question: "What does \"Neny\" mean?",
      question_de: "Was bedeutet \"Neny\"?",
      question_fr: "Que signifie \"Neny\" ?",
      options: ["Parents", "Mother", "Brother", "To have"],
      options_de: ["Mutter", "Ehemann / Ehepartner", "Adoptieren", "älteres Geschwister"],
      options_fr: ["Femme / Épouse", "Mère", "Grand-mère", "Petit ami / Petite amie"],
      correct: 1
    },
    {
      question: "What does \"Zokiolona\" mean?",
      question_de: "Was bedeutet \"Zokiolona\"?",
      question_fr: "Que signifie \"Zokiolona\" ?",
      options: ["Elder / Senior", "Husband / Spouse", "Twin sibling", "Sister"],
      options_de: ["Älterer / Senior", "Adoptieren", "Bruder", "Kinder großziehen"],
      options_fr: ["Mari / Époux", "Jumeau/Jumelle", "Aîné / Senior", "Élever (des enfants)"],
      correct: 0
    },
    {
      question: "What does \"Miteraka\" mean?",
      question_de: "Was bedeutet \"Miteraka\"?",
      question_fr: "Que signifie \"Miteraka\" ?",
      options: ["Sister", "To give birth", "Cousin", "Nephew / Niece"],
      options_de: ["Älterer / Senior", "Neffe / Nichte", "Alter / Jahr", "Gebären"],
      options_fr: ["Fils", "Frère", "frère/soeur cadet(te)", "Donner naissance"],
      correct: 1
    }
  ],
  sentences: [
    {
      question: "What does \"Ity\" mean?",
      question_de: "Was bedeutet \"Ity\"?",
      question_fr: "Que signifie \"Ity\" ?",
      options: ["They", "this", "no / not", "He/She / He is/She is"],
      options_de: ["es gibt nicht", "dies", "dann / und (Verbinder)", "trinken"],
      options_fr: ["aimer", "ceci", "Ils/Elles", "Nous (inclusif)"],
      correct: 1
    },
    {
      question: "What does \"Satria\" mean?",
      question_de: "Was bedeutet \"Satria\"?",
      question_fr: "Que signifie \"Satria\" ?",
      options: ["to drink", "too / also", "to like", "because"],
      options_de: ["auch / ebenfalls", "Reis", "weil", "trinken"],
      options_fr: ["Nous (exclusif)", "parce que", "Nous (inclusif)", "manger (présent)"],
      correct: 3
    },
    {
      question: "What does \"Hihinana\" mean?",
      question_de: "Was bedeutet \"Hihinana\"?",
      question_fr: "Que signifie \"Hihinana\" ?",
      options: ["then / and (connector)", "will eat (future)", "that", "these / those"],
      options_de: ["dann / und (Verbinder)", "trinken", "wird essen (Zukunft)", "aber"],
      options_fr: ["Vous (pluriel)", "tu / tu es", "mangera (futur)", "aussi / également"],
      correct: 1
    },
    {
      question: "What does \"Mihinana\" mean?",
      question_de: "Was bedeutet \"Mihinana\"?",
      question_fr: "Que signifie \"Mihinana\" ?",
      options: ["to drink", "to eat (present)", "because", "rice"],
      options_de: ["essen (Gegenwart)", "er/sie / er/sie ist", "Sie", "auch / ebenfalls"],
      options_fr: ["si", "et", "manger (présent)", "non / ne pas"],
      correct: 1
    },
    {
      question: "What does \"Tsy\" mean?",
      question_de: "Was bedeutet \"Tsy\"?",
      question_fr: "Que signifie \"Tsy\" ?",
      options: ["to drink", "these / those", "there is not", "no / not"],
      options_de: ["nein / nicht", "ich / ich bin", "wenn/falls", "essen (Gegenwart)"],
      options_fr: ["manger (présent)", "non / ne pas", "si", "Ils/Elles"],
      correct: 3
    },
    {
      question: "What does \"koa\" mean?",
      question_de: "Was bedeutet \"koa\"?",
      question_fr: "Que signifie \"koa\" ?",
      options: ["or", "question particle (polite)", "too / also", "We (exclusive)"],
      options_de: ["Wir (exklusiv)", "diese / jene", "Ihr (Plural)", "auch / ebenfalls"],
      options_fr: ["aussi / également", "eau", "il/elle / il/elle est", "cela / il"],
      correct: 2
    },
    {
      question: "What does \"Ireo\" mean?",
      question_de: "Was bedeutet \"Ireo\"?",
      question_fr: "Que signifie \"Ireo\" ?",
      options: ["too / also", "these / those", "this", "ate (past)"],
      options_de: ["und", "du / du bist", "diese / jene", "Fragepartikel"],
      options_fr: ["ceux-ci / ceux-là", "eau", "that", "je / je suis"],
      correct: 1
    },
    {
      question: "What does \"Tia\" mean?",
      question_de: "Was bedeutet \"Tia\"?",
      question_fr: "Que signifie \"Tia\" ?",
      options: ["You (plural)", "if", "to like", "this"],
      options_de: ["mögen", "wird essen (Zukunft)", "Fragepartikel (höflich)", "weil"],
      options_fr: ["aimer", "ceux-ci / ceux-là", "aussi / également", "non / ne pas"],
      correct: 2
    },
    {
      question: "What does \"Aho\" mean?",
      question_de: "Was bedeutet \"Aho\"?",
      question_fr: "Que signifie \"Aho\" ?",
      options: ["there is / exists", "I / I am", "there is not", "that"],
      options_de: ["ich / ich bin", "und", "Reis", "Fragepartikel"],
      options_fr: ["je / je suis", "Ils/Elles", "Nous (exclusif)", "that"],
      correct: 1
    },
    {
      question: "What does \"Misotro\" mean?",
      question_de: "Was bedeutet \"Misotro\"?",
      question_fr: "Que signifie \"Misotro\" ?",
      options: ["to drink", "question particle (polite)", "there is / exists", "water"],
      options_de: ["das / es", "auch / ebenfalls", "trinken", "du / du bist"],
      options_fr: ["boire", "cela / il", "manger (présent)", "Ils/Elles"],
      correct: 0
    },
    {
      question: "What does \"Fa\" mean?",
      question_de: "Was bedeutet \"Fa\"?",
      question_fr: "Que signifie \"Fa\" ?",
      options: ["but", "to eat (present)", "then / and (connector)", "no / not"],
      options_de: ["aber", "wenn/falls", "ich / ich bin", "oder"],
      options_fr: ["mais", "particule de question", "ou", "il y a / existe"],
      correct: 0
    },
    {
      question: "What does \"rano\" mean?",
      question_de: "Was bedeutet \"rano\"?",
      question_fr: "Que signifie \"rano\" ?",
      options: ["You (plural)", "We (inclusive)", "water", "then / and (connector)"],
      options_de: ["oder", "es gibt nicht", "Wasser", "es gibt / existiert"],
      options_fr: ["mangera (futur)", "particule de question (polie)", "aimer", "eau"],
      correct: 2
    },
    {
      question: "What does \"Raha\" mean?",
      question_de: "Was bedeutet \"Raha\"?",
      question_fr: "Que signifie \"Raha\" ?",
      options: ["if", "will eat (future)", "that / it", "question particle"],
      options_de: ["wenn/falls", "es gibt / existiert", "du / du bist", "Sie"],
      options_fr: ["si", "boire", "alors / et (connecteur)", "mangera (futur)"],
      correct: 0
    },
    {
      question: "What does \"vary\" mean?",
      question_de: "Was bedeutet \"vary\"?",
      question_fr: "Que signifie \"vary\" ?",
      options: ["He/She / He is/She is", "this", "We (exclusive)", "rice"],
      options_de: ["Reis", "du / du bist", "Wasser", "Ihr (Plural)"],
      options_fr: ["il y a / existe", "ceci", "riz", "non / ne pas"],
      correct: 3
    }
  ],
  needs: [
    {
      question: "What does \"Reraka\" mean?",
      question_de: "Was bedeutet \"Reraka\"?",
      question_fr: "Que signifie \"Reraka\" ?",
      options: ["tired", "sick", "full", "thirsty"],
      options_de: ["müde", "Dusche", "krank", "Gesundheit"],
      options_fr: ["fatigué", "malade", "mince / svelte", "assez"],
      correct: 0
    },
    {
      question: "What does \"mahazo\" mean?",
      question_de: "Was bedeutet \"mahazo\"?",
      question_fr: "Que signifie \"mahazo\" ?",
      options: ["hungry", "nurse", "to get / receive", "I don't like meat"],
      options_de: ["Krankenhaus", "bekommen / erhalten", "fett / übergewichtig", "Impfstoff"],
      options_fr: ["donner", "s'il vous plaît / pardon", "pâle", "obtenir / recevoir"],
      correct: 2
    },
    {
      question: "What does \"hisakafo\" mean?",
      question_de: "Was bedeutet \"hisakafo\"?",
      question_fr: "Que signifie \"hisakafo\" ?",
      options: ["to eat (meal)", "health", "cold", "hot"],
      options_de: ["Klinik", "kalt", "gerötet", "essen (Mahlzeit)"],
      options_fr: ["manger (repas)", "médicament", "assez", "hôpital"],
      correct: 0
    },
    {
      question: "What does \"Te\" mean?",
      question_de: "Was bedeutet \"Te\"?",
      question_fr: "Que signifie \"Te\" ?",
      options: ["want", "fever", "enough", "sleepy"],
      options_de: ["Fieber", "wollen", "heilen / behandeln", "dünn / schlank"],
      options_fr: ["vouloir", "gros / en surpoids", "fatigué", "pot de chambre"],
      correct: 0
    },
    {
      question: "What does \"Mangatsiaka\" mean?",
      question_de: "Was bedeutet \"Mangatsiaka\"?",
      question_fr: "Que signifie \"Mangatsiaka\" ?",
      options: ["to get / receive", "cold", "tired", "nurse"],
      options_de: ["bekommen / erhalten", "kalt", "Toilette", "Nachttopf"],
      options_fr: ["infirmier/ère", "froid", "somnolent", "santé"],
      correct: 1
    },
    {
      question: "What does \"Fanafody\" mean?",
      question_de: "Was bedeutet \"Fanafody\"?",
      question_fr: "Que signifie \"Fanafody\" ?",
      options: ["want", "sleepy", "please / sorry", "medicine"],
      options_de: ["dünn / schlank", "Krankenhaus", "Medizin", "Arzt"],
      options_fr: ["Je n'aime pas la viande", "médicament", "fatigué", "vaccin"],
      correct: 3
    },
    {
      question: "What does \"Ladosy\" mean?",
      question_de: "Was bedeutet \"Ladosy\"?",
      question_fr: "Que signifie \"Ladosy\" ?",
      options: ["pee pot", "sick", "fat / overweight", "shower"],
      options_de: ["ausgehen", "Dusche", "Toilette", "essen (Mahlzeit)"],
      options_fr: ["infirmier/ère", "manger (repas)", "douche", "donner"],
      correct: 3
    },
    {
      question: "What does \"Clinika\" mean?",
      question_de: "Was bedeutet \"Clinika\"?",
      question_fr: "Que signifie \"Clinika\" ?",
      options: ["flushed", "full", "can / able", "clinic"],
      options_de: ["Dusche", "Klinik", "genug", "Ich mag kein Fleisch"],
      options_fr: ["plein / rassasié", "froid", "clinique", "pouvoir / capable"],
      correct: 3
    },
    {
      question: "What does \"Azafady\" mean?",
      question_de: "Was bedeutet \"Azafady\"?",
      question_fr: "Que signifie \"Azafady\" ?",
      options: ["cold", "please / sorry", "flushed", "thirsty"],
      options_de: ["heilen / behandeln", "Impfstoff", "bitte / Entschuldigung", "müde"],
      options_fr: ["mince / svelte", "pouvoir / capable", "s'il vous plaît / pardon", "affamé"],
      correct: 1
    },
    {
      question: "What does \"Mafana (tarehy)\" mean?",
      question_de: "Was bedeutet \"Mafana (tarehy)\"?",
      question_fr: "Que signifie \"Mafana (tarehy)\" ?",
      options: ["hungry", "sleepy", "flushed", "fat / overweight"],
      options_de: ["Ich mag kein Fleisch", "voll / satt", "Dusche", "gerötet"],
      options_fr: ["guérir / traiter", "fièvre", "rouge", "douche"],
      correct: 2
    },
    {
      question: "What does \"hivoaka\" mean?",
      question_de: "Was bedeutet \"hivoaka\"?",
      question_fr: "Que signifie \"hivoaka\" ?",
      options: ["to go out", "want", "fever", "vaccine"],
      options_de: ["ausgehen", "Impfstoff", "Krankenhaus", "fett / übergewichtig"],
      options_fr: ["s'il vous plaît / pardon", "sortir", "assez", "malade"],
      correct: 0
    },
    {
      question: "What does \"Voky\" mean?",
      question_de: "Was bedeutet \"Voky\"?",
      question_fr: "Que signifie \"Voky\" ?",
      options: ["fat / overweight", "can / able", "to get / receive", "full"],
      options_de: ["durstig", "voll / satt", "ausgehen", "blass"],
      options_fr: ["Je n'aime pas la viande", "plein / rassasié", "somnolent", "froid"],
      correct: 3
    },
    {
      question: "What does \"Mafana\" mean?",
      question_de: "Was bedeutet \"Mafana\"?",
      question_fr: "Que signifie \"Mafana\" ?",
      options: ["medicine", "to go out", "to hurt", "hot"],
      options_de: ["heiß", "essen (Mahlzeit)", "wollen", "weh tun"],
      options_fr: ["vouloir", "toilettes", "pâle", "chaud"],
      correct: 3
    },
    {
      question: "What does \"Fahasalamana\" mean?",
      question_de: "Was bedeutet \"Fahasalamana\"?",
      question_fr: "Que signifie \"Fahasalamana\" ?",
      options: ["to eat (meal)", "health", "fever", "sick"],
      options_de: ["Toilette", "voll / satt", "Gesundheit", "Krankenschwester/Pfleger"],
      options_fr: ["maladie", "assoiffé", "santé", "Je n'aime pas la viande"],
      correct: 1
    },
    {
      question: "What does \"kabone\" mean?",
      question_de: "Was bedeutet \"kabone\"?",
      question_fr: "Que signifie \"kabone\" ?",
      options: ["fever", "toilet", "to sleep", "to eat (meal)"],
      options_de: ["ausgehen", "hungrig", "blass", "Toilette"],
      options_fr: ["plein / rassasié", "pot de chambre", "toilettes", "infirmier/ère"],
      correct: 1
    }
  ],
  questions: [
    {
      question: "What does \"Hoatrinona ny vidiny?\" mean?",
      question_de: "Was bedeutet \"Hoatrinona ny vidiny?\"?",
      question_fr: "Que signifie \"Hoatrinona ny vidiny?\" ?",
      options: ["What is the price?", "How much", "Question marker (yes/no)", "How is your health?"],
      options_de: ["Wie", "Wo ist es geeignet?", "Was ist der Grund?", "Was ist der Preis?"],
      options_fr: ["Quelle est la raison ?", "Quel est le prix ?", "Que voulez-vous ?", "Où est-ce approprié ?"],
      correct: 0
    },
    {
      question: "What does \"Firy\" mean?",
      question_de: "Was bedeutet \"Firy\"?",
      question_fr: "Que signifie \"Firy\" ?",
      options: ["How many", "Why", "What time", "What is your name? (alt)"],
      options_de: ["Um wie viel Uhr", "Wie viele", "Wo wohnst du?", "Wann wirst du lernen?"],
      options_fr: ["Combien", "Que voulez-vous ?", "Quand (question)", "Quand (affirmation)"],
      correct: 0
    },
    {
      question: "What does \"Aiza no mety?\" mean?",
      question_de: "Was bedeutet \"Aiza no mety?\"?",
      question_fr: "Que signifie \"Aiza no mety?\" ?",
      options: ["What is the reason?", "Question marker (yes/no)", "How", "Where is it suitable?"],
      options_de: ["Wie alt bist du?", "Wo ist es geeignet?", "Wer", "Wo ist der/die/das ..."],
      options_fr: ["Que voulez-vous ?", "Où est-ce approprié ?", "Quel âge avez-vous ?", "Qui est le/la ..."],
      correct: 3
    },
    {
      question: "What does \"Inona\" mean?",
      question_de: "Was bedeutet \"Inona\"?",
      question_fr: "Que signifie \"Inona\" ?",
      options: ["How come?", "How", "How old are you?", "What"],
      options_de: ["Wo ist es geeignet?", "Was", "Wann (Frage)", "Warum"],
      options_fr: ["Quoi", "Comment ça se fait ?", "Où est-ce approprié ?", "Où habitez-vous ?"],
      correct: 3
    },
    {
      question: "What does \"Oviana\" mean?",
      question_de: "Was bedeutet \"Oviana\"?",
      question_fr: "Que signifie \"Oviana\" ?",
      options: ["When (statement)", "Where do you live?", "How is your health?", "When (question)"],
      options_de: ["Was ist der Preis?", "Wann (Frage)", "Wann wirst du lernen?", "Fragemarker (ja/nein)"],
      options_fr: ["Quand (question)", "Combien de ...", "Comment", "Où est-ce approprié ?"],
      correct: 3
    },
    {
      question: "What does \"Firy ny ...\" mean?",
      question_de: "Was bedeutet \"Firy ny ...\"?",
      question_fr: "Que signifie \"Firy ny ...\" ?",
      options: ["What is the reason?", "What is the price?", "How many ...", "Who"],
      options_de: ["Wer", "Fragemarker (ja/nein)", "Was ist der/die/das ...", "Wie viele ..."],
      options_fr: ["Où habitez-vous ?", "Qui est le/la ...", "Combien de ...", "Quel âge avez-vous ?"],
      correct: 2
    },
    {
      question: "What does \"Amin'ny firy\" mean?",
      question_de: "Was bedeutet \"Amin'ny firy\"?",
      question_fr: "Que signifie \"Amin'ny firy\" ?",
      options: ["How come?", "Why", "How many ...", "What time"],
      options_de: ["Wann wirst du lernen?", "Was willst du?", "Wer ist der/die/das ...", "Um wie viel Uhr"],
      options_fr: ["Quelle est la raison ?", "Quelle heure", "Où est-ce approprié ?", "Quel est le prix ?"],
      correct: 3
    },
    {
      question: "What does \"Inona no ...\" mean?",
      question_de: "Was bedeutet \"Inona no ...\"?",
      question_fr: "Que signifie \"Inona no ...\" ?",
      options: ["What is the ...", "Where is the ...", "What", "What is your name? (alt)"],
      options_de: ["Was ist der Grund?", "Wie ist dein Name? (alt)", "Wo ist es geeignet?", "Was ist der/die/das ..."],
      options_fr: ["Qu'est-ce que le/la ...", "Comment va votre santé ?", "Quel est votre nom ? (alt)", "Qui"],
      correct: 0
    },
    {
      question: "What does \"Aiza\" mean?",
      question_de: "Was bedeutet \"Aiza\"?",
      question_fr: "Que signifie \"Aiza\" ?",
      options: ["What is the price?", "Where", "Why", "How many"],
      options_de: ["Wie viele", "Wo wohnst du?", "Was ist der Grund?", "Wo"],
      options_fr: ["Où", "Quel est le prix ?", "Quoi", "Quel âge avez-vous ?"],
      correct: 1
    },
    {
      question: "What does \"Rehefa\" mean?",
      question_de: "Was bedeutet \"Rehefa\"?",
      question_fr: "Que signifie \"Rehefa\" ?",
      options: ["What is the ...", "What time", "When (statement)", "What is your name? (alt)"],
      options_de: ["Wenn (Aussage)", "Wie ist dein Name? (alt)", "Wer ist der/die/das ...", "Wo ist es geeignet?"],
      options_fr: ["Quand (affirmation)", "Qui", "Combien de ...", "Quel âge avez-vous ?"],
      correct: 2
    },
    {
      question: "What does \"Nahoana?\" mean?",
      question_de: "Was bedeutet \"Nahoana?\"?",
      question_fr: "Que signifie \"Nahoana?\" ?",
      options: ["How many", "How come?", "How many ...", "What is the ..."],
      options_de: ["Wo ist es geeignet?", "Was", "Wieso?", "Was ist der/die/das ..."],
      options_fr: ["Marqueur de question (oui/non)", "Comment ça se fait ?", "Où", "Qui"],
      correct: 1
    },
    {
      question: "What does \"Ahoana\" mean?",
      question_de: "Was bedeutet \"Ahoana\"?",
      question_fr: "Que signifie \"Ahoana\" ?",
      options: ["How come?", "Why", "How", "What is the reason?"],
      options_de: ["Wie", "Was ist der Preis?", "Was", "Was ist der/die/das ..."],
      options_fr: ["Quel est le prix ?", "Comment ça se fait ?", "Quelle heure", "Comment"],
      correct: 2
    }
  ],
  commands: [
    {
      question: "What does \"Azafady miditra\" mean?",
      question_de: "Was bedeutet \"Azafady miditra\"?",
      question_fr: "Que signifie \"Azafady miditra\" ?",
      options: ["Please come in", "To request", "Wait a moment", "Send it"],
      options_de: ["Wie geht's?", "Auf Wiedersehen", "Bitte komm rein", "Nein"],
      options_fr: ["Au revoir à toi", "Étudie bien", "Entrez s'il vous plaît", "Mieux / Plutôt"],
      correct: 0
    },
    {
      question: "What does \"Ampy izay\" mean?",
      question_de: "Was bedeutet \"Ampy izay\"?",
      question_fr: "Que signifie \"Ampy izay\" ?",
      options: ["No", "Don't do that", "Please come in", "That's enough"],
      options_de: ["Wie geht's?", "Falsch", "Bitte komm rein", "Das reicht"],
      options_fr: ["Ça suffit", "Éloigne-toi de", "Viens ici", "Je suis d'accord"],
      correct: 3
    },
    {
      question: "What does \"Andraso\" mean?",
      question_de: "Was bedeutet \"Andraso\"?",
      question_fr: "Que signifie \"Andraso\" ?",
      options: ["Can you do it?", "I agree", "Wait", "No"],
      options_de: ["Warte", "Lern gut", "Erinnere dich", "Falsch"],
      options_fr: ["Faux", "Attends", "Donne-moi s'il te plaît", "Non"],
      correct: 2
    },
    {
      question: "What does \"Aleo\" mean?",
      question_de: "Was bedeutet \"Aleo\"?",
      question_fr: "Que signifie \"Aleo\" ?",
      options: ["Better / Rather", "Can I see?", "I agree", "False"],
      options_de: ["Bitten", "Komm zurück", "Besser / Eher", "Lern gut"],
      options_fr: ["Mieux / Plutôt", "Vas-y", "Étudie bien", "Souviens-toi"],
      correct: 0
    },
    {
      question: "What does \"Miandrasa kely\" mean?",
      question_de: "Was bedeutet \"Miandrasa kely\"?",
      question_fr: "Que signifie \"Miandrasa kely\" ?",
      options: ["Don't do that", "Wait a moment", "Better / Rather", "Don't forget"],
      options_de: ["Auf Wiedersehen", "Ja", "Geh weg von", "Warte einen Moment"],
      options_fr: ["Attends un moment", "Comment allez-vous ?", "Allons-y", "Fais-le s'il vous plaît"],
      correct: 1
    },
    {
      question: "What does \"Avia aty\" mean?",
      question_de: "Was bedeutet \"Avia aty\"?",
      question_fr: "Que signifie \"Avia aty\" ?",
      options: ["Don't forget", "Come here", "Don't do that", "Please do it"],
      options_de: ["Schick es", "Mach weiter", "Lern gut", "Komm her"],
      options_fr: ["Étudie bien", "Viens ici", "Peux-tu le faire ?", "Ne fais pas ça"],
      correct: 1
    },
    {
      question: "What does \"Marina\" mean?",
      question_de: "Was bedeutet \"Marina\"?",
      question_fr: "Que signifie \"Marina\" ?",
      options: ["That's enough", "Come here", "True", "Wait a moment"],
      options_de: ["Wahr", "Erinnere dich", "Kannst du es tun?", "Wie geht's?"],
      options_fr: ["Vrai", "Ça suffit", "Attends", "Arrête"],
      correct: 2
    },
    {
      question: "What does \"Tsia\" mean?",
      question_de: "Was bedeutet \"Tsia\"?",
      question_fr: "Que signifie \"Tsia\" ?",
      options: ["Can you do it?", "Send it", "Can I see?", "No"],
      options_de: ["Nein", "Gut / OK", "Besser / Eher", "Ja"],
      options_fr: ["Peux-tu le faire ?", "Attends", "Non", "Étudie bien"],
      correct: 3
    },
    {
      question: "What does \"Afaka mijery ve?\" mean?",
      question_de: "Was bedeutet \"Afaka mijery ve?\"?",
      question_fr: "Que signifie \"Afaka mijery ve?\" ?",
      options: ["Remember", "Can I see?", "False", "Goodbye to you"],
      options_de: ["Kann ich sehen?", "Kannst du es tun?", "Gut / OK", "Bitte tu es"],
      options_fr: ["Je suis d'accord", "Puis-je voir ?", "N'oublie pas", "Viens ici"],
      correct: 1
    },
    {
      question: "What does \"Manaova azafady\" mean?",
      question_de: "Was bedeutet \"Manaova azafady\"?",
      question_fr: "Que signifie \"Manaova azafady\" ?",
      options: ["Don't forget", "Please do it", "I agree", "Wait a moment"],
      options_de: ["Komm her", "Geh weg von", "Bitte tu es", "Lass uns gehen"],
      options_fr: ["Fais-le s'il vous plaît", "Envoie-le", "Ça suffit", "Vas-y"],
      correct: 1
    },
    {
      question: "What does \"Mandrosoa\" mean?",
      question_de: "Was bedeutet \"Mandrosoa\"?",
      question_fr: "Que signifie \"Mandrosoa\" ?",
      options: ["No", "Go ahead", "Come here", "Study well"],
      options_de: ["Halt", "Vergiss nicht", "Mach weiter", "Geh weg von"],
      options_fr: ["Vas-y", "Donne-moi s'il te plaît", "N'oublie pas", "Demander"],
      correct: 1
    },
    {
      question: "What does \"Mba omeo aho\" mean?",
      question_de: "Was bedeutet \"Mba omeo aho\"?",
      question_fr: "Que signifie \"Mba omeo aho\" ?",
      options: ["Can I see?", "True", "No", "Please give me"],
      options_de: ["Besser / Eher", "Vergiss nicht", "Mach weiter", "Bitte gib mir"],
      options_fr: ["Fais-le s'il vous plaît", "Puis-je voir ?", "Donne-moi s'il te plaît", "Faux"],
      correct: 3
    },
    {
      question: "What does \"Aza manao izany\" mean?",
      question_de: "Was bedeutet \"Aza manao izany\"?",
      question_fr: "Que signifie \"Aza manao izany\" ?",
      options: ["No", "Don't do that", "Yes", "Please come in"],
      options_de: ["Schick es", "Tu das nicht", "Vergiss nicht", "Wie geht's?"],
      options_fr: ["Ne fais pas ça", "Vrai", "Envoie-le", "Vas-y"],
      correct: 1
    }
  ],
  numbers: [
    {
      question: "What does \"Firy\" mean?",
      question_de: "Was bedeutet \"Firy\"?",
      question_fr: "Que signifie \"Firy\" ?",
      options: ["Six", "Twenty thousand", "How many", "At (time/number)"],
      options_de: ["Sekunde", "Um (Zeit/Zahl)", "Wie viele", "viele"],
      options_fr: ["Quatre-vingt-dix", "Combien", "Troisième", "Cinq"],
      correct: 2
    },
    {
      question: "What does \"Maro\" mean?",
      question_de: "Was bedeutet \"Maro\"?",
      question_fr: "Que signifie \"Maro\" ?",
      options: ["Nine", "many", "Hundred", "few"],
      options_de: ["Tausend", "Vierhunderttausend", "wenige", "viele"],
      options_fr: ["beaucoup", "Six", "aucun / zéro", "Quarante"],
      correct: 1
    },
    {
      question: "What does \"Efatra\" mean?",
      question_de: "Was bedeutet \"Efatra\"?",
      question_fr: "Que signifie \"Efatra\" ?",
      options: ["How many", "some", "Forty", "Four"],
      options_de: ["und (für Zahlen nach 199)", "Acht", "Vier", "wenige"],
      options_fr: ["Six", "Quatre", "Dix mille", "Huit"],
      correct: 3
    },
    {
      question: "What does \"Iray hetsy\" mean?",
      question_de: "Was bedeutet \"Iray hetsy\"?",
      question_fr: "Que signifie \"Iray hetsy\" ?",
      options: ["Forty", "Eight hundred thousand", "Hundred thousand", "Seven"],
      options_de: ["Hunderttausend", "Tausend", "Vierzig", "Zehn"],
      options_fr: ["Trois cents", "Sept", "Cent mille", "Deux"],
      correct: 2
    },
    {
      question: "What does \"Tsiafa\" mean?",
      question_de: "Was bedeutet \"Tsiafa\"?",
      question_fr: "Que signifie \"Tsiafa\" ?",
      options: ["none / zero", "some", "How much (price)", "Seven"],
      options_de: ["Zehn", "Sekunde", "keine / null", "Drei"],
      options_fr: ["Un", "Soixante mille", "Seconde", "aucun / zéro"],
      correct: 0
    },
    {
      question: "What does \"Arivo\" mean?",
      question_de: "Was bedeutet \"Arivo\"?",
      question_fr: "Que signifie \"Arivo\" ?",
      options: ["Nine hundred", "One", "Thousand", "few"],
      options_de: ["Hundert", "Tausend", "Zwei", "Wie viele"],
      options_fr: ["Trois", "Huit", "Neuf", "Mille"],
      correct: 2
    },
    {
      question: "What does \"Iray alina\" mean?",
      question_de: "Was bedeutet \"Iray alina\"?",
      question_fr: "Que signifie \"Iray alina\" ?",
      options: ["and (for numbers after 199)", "Ninety", "Ten thousand", "At (time/number)"],
      options_de: ["und (für Zahlen nach 199)", "Hunderttausend", "Neun", "Zehntausend"],
      options_fr: ["À (heure/nombre)", "Seconde", "Dix mille", "Neuf cents"],
      correct: 2
    },
    {
      question: "What does \"Telo\" mean?",
      question_de: "Was bedeutet \"Telo\"?",
      question_fr: "Que signifie \"Telo\" ?",
      options: ["Twenty thousand", "Three", "Second", "some"],
      options_de: ["Vier", "Drei", "Sechs", "Neunzig"],
      options_fr: ["Mille", "Neuf cents", "Troisième", "Trois"],
      correct: 1
    },
    {
      question: "What does \"Telonjato\" mean?",
      question_de: "Was bedeutet \"Telonjato\"?",
      question_fr: "Que signifie \"Telonjato\" ?",
      options: ["Hundred thousand", "Three hundred", "One", "Hundred"],
      options_de: ["Neun", "alle / jeder", "wenige", "Dreihundert"],
      options_fr: ["beaucoup", "Trois cents", "Cent", "Quarante"],
      correct: 1
    },
    {
      question: "What does \"Sivy\" mean?",
      question_de: "Was bedeutet \"Sivy\"?",
      question_fr: "Que signifie \"Sivy\" ?",
      options: ["Ten thousand", "Eight hundred thousand", "Nine", "First"],
      options_de: ["Neun", "und (für Zahlen bis 199)", "und (für Zahlen nach 199)", "Sieben"],
      options_fr: ["beaucoup", "Neuf", "Huit", "et (pour les nombres après 199)"],
      correct: 2
    },
    {
      question: "What does \"Enina alina\" mean?",
      question_de: "Was bedeutet \"Enina alina\"?",
      question_fr: "Que signifie \"Enina alina\" ?",
      options: ["and (for numbers up to 199)", "How many", "and (for numbers after 199)", "Sixty thousand"],
      options_de: ["Tausend", "Sechzigtausend", "Dreihundert", "Hundert"],
      options_fr: ["Trois cents", "Sept mille", "Huit cent mille", "Soixante mille"],
      correct: 3
    },
    {
      question: "What does \"Fahatelo\" mean?",
      question_de: "Was bedeutet \"Fahatelo\"?",
      question_fr: "Que signifie \"Fahatelo\" ?",
      options: ["Third", "Forty", "One", "none / zero"],
      options_de: ["Sechs", "Sieben", "Acht", "Dritte"],
      options_fr: ["aucun / zéro", "Troisième", "Quarante", "Mille"],
      correct: 0
    },
    {
      question: "What does \"Faharoa\" mean?",
      question_de: "Was bedeutet \"Faharoa\"?",
      question_fr: "Que signifie \"Faharoa\" ?",
      options: ["Second", "and (for numbers after 199)", "many", "Three hundred"],
      options_de: ["und (für Zahlen nach 199)", "Sekunde", "Zwei", "Siebentausend"],
      options_fr: ["Cinq", "aucun / zéro", "Seconde", "Combien (prix)"],
      correct: 0
    },
    {
      question: "What does \"sy\" mean?",
      question_de: "Was bedeutet \"sy\"?",
      question_fr: "Que signifie \"sy\" ?",
      options: ["and (for numbers after 199)", "How much (price)", "Three hundred", "Three"],
      options_de: ["und (für Zahlen nach 199)", "Zehn", "Vierhunderttausend", "Vierzig"],
      options_fr: ["Cent mille", "Cinq", "et (pour les nombres après 199)", "Neuf"],
      correct: 0
    },
    {
      question: "What does \"amby\" mean?",
      question_de: "Was bedeutet \"amby\"?",
      question_fr: "Que signifie \"amby\" ?",
      options: ["Ten", "and (for numbers up to 199)", "Four hundred thousand", "Thousand"],
      options_de: ["Vier", "und (für Zahlen bis 199)", "Letzte", "Neun"],
      options_fr: ["Six", "beaucoup", "et (pour les nombres jusqu'à 199)", "Dix mille"],
      correct: 1
    }
  ],
  food: [
    {
      question: "What does \"Voasary\" mean?",
      question_de: "Was bedeutet \"Voasary\"?",
      question_fr: "Que signifie \"Voasary\" ?",
      options: ["Corn", "Orange", "Cold (drink)", "Rice-water"],
      options_de: ["Orange", "Snack", "Schweinefleisch", "Brot"],
      options_fr: ["Apprécier (nourriture)", "Poisson", "Orange", "Manioc"],
      correct: 1
    },
    {
      question: "What does \"Henomby\" mean?",
      question_de: "Was bedeutet \"Henomby\"?",
      question_fr: "Que signifie \"Henomby\" ?",
      options: ["Full (ate enough)", "Coffee", "Beef", "Beans"],
      options_de: ["Pfeffer", "Reis", "Tee", "Rindfleisch"],
      options_fr: ["Mangue", "Riz", "Haricots", "Boeuf"],
      correct: 2
    },
    {
      question: "What does \"Trondro\" mean?",
      question_de: "Was bedeutet \"Trondro\"?",
      question_fr: "Que signifie \"Trondro\" ?",
      options: ["Lemonade", "Fish", "Coffee", "Pepper"],
      options_de: ["Rindfleisch", "Fisch", "Pfeffer", "Tee"],
      options_fr: ["Thé", "Piment", "Maïs", "Poisson"],
      correct: 1
    },
    {
      question: "What does \"Mananasy\" mean?",
      question_de: "Was bedeutet \"Mananasy\"?",
      question_fr: "Que signifie \"Mananasy\" ?",
      options: ["Pineapple", "Fruit", "Potatoes", "Greens"],
      options_de: ["Eier", "Reis", "Ananas", "Pfeffer"],
      options_fr: ["Poisson", "Ananas", "Apprécier (nourriture)", "Mangue"],
      correct: 0
    },
    {
      question: "What does \"Mofo\" mean?",
      question_de: "Was bedeutet \"Mofo\"?",
      question_fr: "Que signifie \"Mofo\" ?",
      options: ["Meat", "Greens", "Cold (drink)", "Bread"],
      options_de: ["Snack", "Brot", "Tomate", "Reis"],
      options_fr: ["Piment", "Maïs", "Assoiffé", "Pain"],
      correct: 3
    },
    {
      question: "What does \"Voankazo\" mean?",
      question_de: "Was bedeutet \"Voankazo\"?",
      question_fr: "Que signifie \"Voankazo\" ?",
      options: ["Fruit", "Water", "Hungry", "Papaya"],
      options_de: ["Gewürze", "Snack", "Süßkartoffel", "Obst"],
      options_fr: ["Refroidir", "Huile", "Fruit", "Coca-Cola"],
      correct: 0
    },
    {
      question: "What does \"Atody\" mean?",
      question_de: "Was bedeutet \"Atody\"?",
      question_fr: "Que signifie \"Atody\" ?",
      options: ["Eggs", "To drink", "Chili", "Hot (food)"],
      options_de: ["Wasser", "Blattgemüse", "Zucker", "Eier"],
      options_fr: ["Lait", "Pain", "Oeufs", "Sucre"],
      correct: 0
    },
    {
      question: "What does \"Hena\" mean?",
      question_de: "Was bedeutet \"Hena\"?",
      question_fr: "Que signifie \"Hena\" ?",
      options: ["Meat", "Tea", "Salt", "Mango"],
      options_de: ["Snack", "Mais", "Gewürze", "Fleisch"],
      options_fr: ["Viande", "Coca-Cola", "Sucre", "Épices"],
      correct: 0
    },
    {
      question: "What does \"Siramamy\" mean?",
      question_de: "Was bedeutet \"Siramamy\"?",
      question_fr: "Que signifie \"Siramamy\" ?",
      options: ["Lemonade", "Sugar", "Beef", "Mango"],
      options_de: ["Reis", "Papaya", "Zucker", "Snack"],
      options_fr: ["Assoiffé", "Sucre", "Nourriture", "Haricots"],
      correct: 1
    },
    {
      question: "What does \"mampangatsiaka\" mean?",
      question_de: "Was bedeutet \"mampangatsiaka\"?",
      question_fr: "Que signifie \"mampangatsiaka\" ?",
      options: ["Water", "To cool", "To drink", "Beans"],
      options_de: ["Reiswasser", "Zubereiten (Essen)", "Abkühlen", "Brot"],
      options_fr: ["Légumes verts", "Refroidir", "Manger", "Lait"],
      correct: 1
    },
    {
      question: "What does \"Manga\" mean?",
      question_de: "Was bedeutet \"Manga\"?",
      question_fr: "Que signifie \"Manga\" ?",
      options: ["Corn", "Beans", "Mango", "Carrot"],
      options_de: ["Abkühlen", "Papaya", "Chili", "Mango"],
      options_fr: ["Oeufs", "Mangue", "Orange", "Huile"],
      correct: 2
    },
    {
      question: "What does \"Mangetaheta\" mean?",
      question_de: "Was bedeutet \"Mangetaheta\"?",
      question_fr: "Que signifie \"Mangetaheta\" ?",
      options: ["Thirsty", "Mango", "Delicious", "Cassava"],
      options_de: ["Papaya", "Rindfleisch", "Durstig", "Limonade"],
      options_fr: ["Piment", "Refroidir", "Froid (boisson)", "Assoiffé"],
      correct: 0
    },
    {
      question: "What does \"Legioma\" mean?",
      question_de: "Was bedeutet \"Legioma\"?",
      question_fr: "Que signifie \"Legioma\" ?",
      options: ["Orange", "Salt", "Not delicious", "Vegetable"],
      options_de: ["Snack", "Lecker", "Öl", "Gemüse"],
      options_fr: ["Légume", "Pommes de terre", "Mangue", "Boeuf"],
      correct: 3
    },
    {
      question: "What does \"Papay\" mean?",
      question_de: "Was bedeutet \"Papay\"?",
      question_fr: "Que signifie \"Papay\" ?",
      options: ["Papaya", "Round beans", "To drink", "Mango"],
      options_de: ["Papaya", "Gemüse", "Orange", "Huhn"],
      options_fr: ["Papaye", "Maïs", "Épices", "Boeuf"],
      correct: 0
    },
    {
      question: "What does \"Jus\" mean?",
      question_de: "Was bedeutet \"Jus\"?",
      question_fr: "Que signifie \"Jus\" ?",
      options: ["Sweet potato", "Cassava", "Papaya", "Juice"],
      options_de: ["Mais", "Mango", "Saft", "Heiß (Essen)"],
      options_fr: ["Haricots", "Boeuf", "Patate douce", "Jus"],
      correct: 3
    }
  ],
  days: [
    {
      question: "What does \"Famindrana\" mean?",
      question_de: "Was bedeutet \"Famindrana\"?",
      question_fr: "Que signifie \"Famindrana\" ?",
      options: ["Evening", "Appointment", "Before / Ago", "Monday"],
      options_de: ["Gestern", "Samstag", "Früher Morgen", "Termin"],
      options_fr: ["Semaine", "Midi", "Mardi", "Rendez-vous"],
      correct: 1
    },
    {
      question: "What does \"Alarobia\" mean?",
      question_de: "Was bedeutet \"Alarobia\"?",
      question_fr: "Que signifie \"Alarobia\" ?",
      options: ["Wednesday", "Today", "Friday", "Early morning"],
      options_de: ["Mittwoch", "Termin", "Gestern", "Tag"],
      options_fr: ["Mercredi", "Vacances / Jour férié", "Mois", "Lundi"],
      correct: 0
    },
    {
      question: "What does \"Maraina\" mean?",
      question_de: "Was bedeutet \"Maraina\"?",
      question_fr: "Que signifie \"Maraina\" ?",
      options: ["Sunday", "Week", "Tuesday", "Morning"],
      options_de: ["Später / Nach", "Morgen", "Montag", "Nacht"],
      options_fr: ["Mardi", "Matin", "Temps / Moment", "Semaine"],
      correct: 3
    },
    {
      question: "What does \"maraina be\" mean?",
      question_de: "Was bedeutet \"maraina be\"?",
      question_fr: "Que signifie \"maraina be\" ?",
      options: ["Saturday", "Afternoon", "Sunday", "Early morning"],
      options_de: ["Später / Nach", "Früher Morgen", "Essenszeit", "Fisch"],
      options_fr: ["Heure du repas", "Tôt le matin", "Vacances / Jour férié", "Lundi"],
      correct: 3
    },
    {
      question: "What does \"Andro\" mean?",
      question_de: "Was bedeutet \"Andro\"?",
      question_fr: "Que signifie \"Andro\" ?",
      options: ["Morning", "Day", "Evening", "Later / After"],
      options_de: ["Tag", "Später / Nach", "Woche", "Nacht"],
      options_fr: ["Jour", "Vacances / Jour férié", "Avant / Il y a", "Heure de travail"],
      correct: 1
    },
    {
      question: "What does \"Talata\" mean?",
      question_de: "Was bedeutet \"Talata\"?",
      question_fr: "Que signifie \"Talata\" ?",
      options: ["Tuesday", "Week", "Midnight", "Holiday / Festival day"],
      options_de: ["Dienstag", "Arbeitszeit", "Termin", "Donnerstag"],
      options_fr: ["Matin", "Mardi", "Midi", "Nuit"],
      correct: 0
    },
    {
      question: "What does \"Andro fety\" mean?",
      question_de: "Was bedeutet \"Andro fety\"?",
      question_fr: "Que signifie \"Andro fety\" ?",
      options: ["Fish", "Day", "Holiday / Festival day", "Early morning"],
      options_de: ["Morgen", "Zeit / Moment", "Feiertag / Festtag", "Urlaub / Feiertag"],
      options_fr: ["Demain", "Jour", "Semaine", "Jour férié / Fête"],
      correct: 2
    },
    {
      question: "What does \"tapitrisanandro\" mean?",
      question_de: "Was bedeutet \"tapitrisanandro\"?",
      question_fr: "Que signifie \"tapitrisanandro\" ?",
      options: ["Mealtime", "Later / After", "Evening", "Midnight"],
      options_de: ["Mittwoch", "Nacht", "Dienstag", "Mitternacht"],
      options_fr: ["Minuit", "Vacances / Jour férié", "Nuit", "Demain"],
      correct: 3
    },
    {
      question: "What does \"Amin'ny\" mean?",
      question_de: "Was bedeutet \"Amin'ny\"?",
      question_fr: "Que signifie \"Amin'ny\" ?",
      options: ["Morning", "At (time)", "Friday", "Month"],
      options_de: ["Mitternacht", "Um (Uhrzeit)", "Abend", "Heute"],
      options_fr: ["Temps / Moment", "Minuit", "Vendredi", "À (heure)"],
      correct: 1
    },
    {
      question: "What does \"Fotoam-pihinanana\" mean?",
      question_de: "Was bedeutet \"Fotoam-pihinanana\"?",
      question_fr: "Que signifie \"Fotoam-pihinanana\" ?",
      options: ["Month", "Mealtime", "Afternoon", "Time / Moment"],
      options_de: ["Fisch", "Abend", "Nachmittag", "Essenszeit"],
      options_fr: ["Avant / Il y a", "Mois", "Heure du repas", "Jour"],
      correct: 1
    },
    {
      question: "What does \"Taona\" mean?",
      question_de: "Was bedeutet \"Taona\"?",
      question_fr: "Que signifie \"Taona\" ?",
      options: ["Week", "Monday", "Wednesday", "Year"],
      options_de: ["Jahr", "Tag", "Mittag", "Sonntag"],
      options_fr: ["Minuit", "Hier", "Année", "Avant / Il y a"],
      correct: 3
    },
    {
      question: "What does \"Rahampitso\" mean?",
      question_de: "Was bedeutet \"Rahampitso\"?",
      question_fr: "Que signifie \"Rahampitso\" ?",
      options: ["Month", "Week", "Tomorrow", "Today"],
      options_de: ["Woche", "Morgen", "Donnerstag", "Monat"],
      options_fr: ["Nuit", "Demain", "Mardi", "Matin"],
      correct: 2
    },
    {
      question: "What does \"Herinandro\" mean?",
      question_de: "Was bedeutet \"Herinandro\"?",
      question_fr: "Que signifie \"Herinandro\" ?",
      options: ["Thursday", "Week", "Friday", "Work time"],
      options_de: ["Woche", "Sonntag", "Jahr", "Arbeitszeit"],
      options_fr: ["Semaine", "Mois", "Dimanche", "Mardi"],
      correct: 1
    },
    {
      question: "What does \"Alakamisy\" mean?",
      question_de: "Was bedeutet \"Alakamisy\"?",
      question_fr: "Que signifie \"Alakamisy\" ?",
      options: ["Thursday", "Yesterday", "Vacation / Holiday", "Friday"],
      options_de: ["Donnerstag", "Samstag", "Sonntag", "Essenszeit"],
      options_fr: ["Soir", "Demain", "Jour", "Jeudi"],
      correct: 0
    },
    {
      question: "What does \"Taloha\" mean?",
      question_de: "Was bedeutet \"Taloha\"?",
      question_fr: "Que signifie \"Taloha\" ?",
      options: ["Before / Ago", "Month", "Today", "Wednesday"],
      options_de: ["Vor / Vorher", "Mittag", "Morgen", "Früher Morgen"],
      options_fr: ["Avant / Il y a", "Tôt le matin", "Nuit", "Temps / Moment"],
      correct: 0
    }
  ],
  feelings: [
    {
      question: "What does \"Maneho hevitra\" mean?",
      question_de: "Was bedeutet \"Maneho hevitra\"?",
      question_fr: "Que signifie \"Maneho hevitra\" ?",
      options: ["worried / anxious", "to trust", "tired", "to give an opinion"],
      options_de: ["nicht wissen / nicht können", "eine Meinung abgeben", "wünschen / wollen", "ängstlich"],
      options_fr: ["triste", "donner un avis", "rassurer", "regrettable"],
      correct: 3
    },
    {
      question: "What does \"Manahy\" mean?",
      question_de: "Was bedeutet \"Manahy\"?",
      question_fr: "Que signifie \"Manahy\" ?",
      options: ["I hate it", "cold (person)", "sad", "worried / anxious"],
      options_de: ["besorgt / ängstlich", "beruhigen", "erschrocken", "bedauerlich"],
      options_fr: ["inquiet / anxieux", "drôle / amusant", "faire confiance", "recevoir / obtenir"],
      correct: 3
    },
    {
      question: "What does \"Manda\" mean?",
      question_de: "Was bedeutet \"Manda\"?",
      question_fr: "Que signifie \"Manda\" ?",
      options: ["to learn", "to appreciate", "to refuse", "pleasant"],
      options_de: ["ablehnen", "traurig", "sich erinnern", "schockiert / wütend"],
      options_fr: ["oublier", "inquiet / anxieux", "refuser", "incroyable"],
      correct: 2
    },
    {
      question: "What does \"Sosotra\" mean?",
      question_de: "Was bedeutet \"Sosotra\"?",
      question_fr: "Que signifie \"Sosotra\" ?",
      options: ["happy", "to forget", "to give", "shocked / angry"],
      options_de: ["erschrocken", "to give", "kalt (Person)", "schockiert / wütend"],
      options_fr: ["to give", "froid (personne)", "choqué / en colère", "heureux"],
      correct: 3
    },
    {
      question: "What does \"Manaiky\" mean?",
      question_de: "Was bedeutet \"Manaiky\"?",
      question_fr: "Que signifie \"Manaiky\" ?",
      options: ["to learn", "sad", "regrettable", "to agree"],
      options_de: ["wünschen / wollen", "schockiert / wütend", "Ich hasse es", "zustimmen"],
      options_fr: ["désirer / vouloir", "être d'accord", "regrettable", "faire confiance"],
      correct: 3
    },
    {
      question: "What does \"Reraka\" mean?",
      question_de: "Was bedeutet \"Reraka\"?",
      question_fr: "Que signifie \"Reraka\" ?",
      options: ["afraid", "tired", "to show / express", "to not know / cannot"],
      options_de: ["eine Meinung abgeben", "müde", "wünschen / wollen", "ängstlich"],
      options_fr: ["rappeler", "fatigué", "triste", "agréable"],
      correct: 1
    },
    {
      question: "What does \"Tsy mahay\" mean?",
      question_de: "Was bedeutet \"Tsy mahay\"?",
      question_fr: "Que signifie \"Tsy mahay\" ?",
      options: ["to not know / cannot", "lazy", "to watch / look at", "cold (person)"],
      options_de: ["traurig", "nicht wissen / nicht können", "erstaunlich", "zeigen / ausdrücken"],
      options_fr: ["ne pas savoir / ne pas pouvoir", "Je déteste ça", "chaud (personne)", "refuser"],
      correct: 0
    },
    {
      question: "What does \"Mahagaga\" mean?",
      question_de: "Was bedeutet \"Mahagaga\"?",
      question_fr: "Que signifie \"Mahagaga\" ?",
      options: ["shocked / angry", "amazing", "scared", "to desire / want"],
      options_de: ["angenehm", "glücklich", "Zeit verbringen", "erstaunlich"],
      options_fr: ["apprécier", "choqué / en colère", "incroyable", "surpris"],
      correct: 1
    },
    {
      question: "What does \"Mahafaly\" mean?",
      question_de: "Was bedeutet \"Mahafaly\"?",
      question_fr: "Que signifie \"Mahafaly\" ?",
      options: ["to trust", "pleasant", "sad", "to reassure"],
      options_de: ["müde", "anschauen / ansehen", "traurig", "angenehm"],
      options_fr: ["Je déteste ça", "agréable", "to give", "enseigner"],
      correct: 1
    },
    {
      question: "What does \"Halako\" mean?",
      question_de: "Was bedeutet \"Halako\"?",
      question_fr: "Que signifie \"Halako\" ?",
      options: ["worried / anxious", "to watch / look at", "I hate it", "regrettable"],
      options_de: ["faul", "Ich hasse es", "zustimmen", "erstaunlich"],
      options_fr: ["chaud (personne)", "choqué / en colère", "Je déteste ça", "apprendre"],
      correct: 2
    },
    {
      question: "What does \"Mandany\" mean?",
      question_de: "Was bedeutet \"Mandany\"?",
      question_fr: "Que signifie \"Mandany\" ?",
      options: ["to give an opinion", "scared", "to remember", "to spend (time)"],
      options_de: ["ängstlich", "Ich hasse es", "Zeit verbringen", "to give"],
      options_fr: ["passer (du temps)", "triste", "heureux", "regrettable"],
      correct: 3
    },
    {
      question: "What does \"Malahelo\" mean?",
      question_de: "Was bedeutet \"Malahelo\"?",
      question_fr: "Que signifie \"Malahelo\" ?",
      options: ["to not know / cannot", "sad", "to give", "hot (person)"],
      options_de: ["zustimmen", "traurig", "erhalten / bekommen", "wissen wie / können"],
      options_fr: ["chaud (personne)", "triste", "fatigué", "faire confiance"],
      correct: 1
    },
    {
      question: "What does \"Mampiseho\" mean?",
      question_de: "Was bedeutet \"Mampiseho\"?",
      question_fr: "Que signifie \"Mampiseho\" ?",
      options: ["to know how / can", "to forget", "to show / express", "regrettable"],
      options_de: ["nicht wissen / nicht können", "zustimmen", "wissen wie / können", "zeigen / ausdrücken"],
      options_fr: ["enseigner", "montrer / exprimer", "rappeler", "donner un avis"],
      correct: 2
    },
    {
      question: "What does \"Manome toky\" mean?",
      question_de: "Was bedeutet \"Manome toky\"?",
      question_fr: "Que signifie \"Manome toky\" ?",
      options: ["hot (person)", "cold (person)", "to reassure", "to remember"],
      options_de: ["ablehnen", "besorgt / ängstlich", "beruhigen", "ängstlich"],
      options_fr: ["Je déteste ça", "rassurer", "ne pas savoir / ne pas pouvoir", "donner un avis"],
      correct: 2
    },
    {
      question: "What does \"Matahotra\" mean?",
      question_de: "Was bedeutet \"Matahotra\"?",
      question_fr: "Que signifie \"Matahotra\" ?",
      options: ["to trust", "to receive / get", "afraid", "scared"],
      options_de: ["glücklich", "bedauerlich", "ängstlich", "angenehm"],
      options_fr: ["effrayé", "ne pas savoir / ne pas pouvoir", "recevoir / obtenir", "incroyable"],
      correct: 2
    }
  ],
  colors: [
    {
      question: "What does \"Mavo-mavo\" mean?",
      question_de: "Was bedeutet \"Mavo-mavo\"?",
      question_fr: "Que signifie \"Mavo-mavo\" ?",
      options: ["Very black / pitch black", "Very white", "Yellowish", "Red"],
      options_de: ["Sehr schwarz / Pechschwarz", "Grau", "Braun", "Gelblich"],
      options_fr: ["Bleu foncé", "Jaunâtre", "Rougeâtre", "Vert clair"],
      correct: 2
    },
    {
      question: "What does \"Maintso\" mean?",
      question_de: "Was bedeutet \"Maintso\"?",
      question_fr: "Que signifie \"Maintso\" ?",
      options: ["Color outside", "Color inside", "Green", "Reddish"],
      options_de: ["Grün", "Gelb", "Braun", "Dunkelblau"],
      options_fr: ["Rose", "Vert", "Bleu", "Bleu foncé"],
      correct: 2
    },
    {
      question: "What does \"Fotsy fotsy\" mean?",
      question_de: "Was bedeutet \"Fotsy fotsy\"?",
      question_fr: "Que signifie \"Fotsy fotsy\" ?",
      options: ["Green", "Very white", "Pink", "Very black / pitch black"],
      options_de: ["Gelb", "Sehr schwarz / Pechschwarz", "Sehr weiß", "Grün"],
      options_fr: ["Blanc", "Très blanc", "Orange", "Rose"],
      correct: 1
    },
    {
      question: "What does \"Mavo\" mean?",
      question_de: "Was bedeutet \"Mavo\"?",
      question_fr: "Que signifie \"Mavo\" ?",
      options: ["Black", "Light blue", "Yellow", "Reddish"],
      options_de: ["Gelb", "Farbe innen", "Farben", "Rötlich"],
      options_fr: ["Rougeâtre", "Jaune", "Blanc", "Couleur extérieure"],
      correct: 2
    },
    {
      question: "What does \"Mainty\" mean?",
      question_de: "Was bedeutet \"Mainty\"?",
      question_fr: "Que signifie \"Mainty\" ?",
      options: ["Dark blue", "To be colored", "Red", "Black"],
      options_de: ["Schwarz", "Hellgrün", "Hellblau", "Rosa"],
      options_fr: ["Noir", "Couleur extérieure", "Couleurs", "Bleuâtre"],
      correct: 3
    },
    {
      question: "What does \"Volon-davenona\" mean?",
      question_de: "Was bedeutet \"Volon-davenona\"?",
      question_fr: "Que signifie \"Volon-davenona\" ?",
      options: ["Grey", "Pink", "Bluish", "Very white"],
      options_de: ["Hellgrün", "Grau", "Hellblau", "Gelb"],
      options_fr: ["Rougeâtre", "Très noir", "Noir", "Gris"],
      correct: 0
    },
    {
      question: "What does \"Mavokely\" mean?",
      question_de: "Was bedeutet \"Mavokely\"?",
      question_fr: "Que signifie \"Mavokely\" ?",
      options: ["Pink", "Green", "Yellowish", "Reddish"],
      options_de: ["Farben", "Hellblau", "Bläulich", "Rosa"],
      options_fr: ["Bleu foncé", "Jaunâtre", "Marron", "Rose"],
      correct: 0
    },
    {
      question: "What does \"Manga antitra\" mean?",
      question_de: "Was bedeutet \"Manga antitra\"?",
      question_fr: "Que signifie \"Manga antitra\" ?",
      options: ["Dark blue", "Brown", "Yellow", "Bluish"],
      options_de: ["Grau", "Gelblich", "Dunkelblau", "Gefärbt sein"],
      options_fr: ["Bleu foncé", "Vert clair", "Noir", "Vert foncé"],
      correct: 0
    },
    {
      question: "What does \"Volom-boasary\" mean?",
      question_de: "Was bedeutet \"Volom-boasary\"?",
      question_fr: "Que signifie \"Volom-boasary\" ?",
      options: ["Colors", "Color outside", "Orange", "Dark blue"],
      options_de: ["Blau", "Orange", "Weiß", "Grün"],
      options_fr: ["Orange", "Très blanc", "Jaune", "Couleurs"],
      correct: 2
    },
    {
      question: "What does \"Manga tanora\" mean?",
      question_de: "Was bedeutet \"Manga tanora\"?",
      question_fr: "Que signifie \"Manga tanora\" ?",
      options: ["Color inside", "Light blue", "Dark blue", "Grey"],
      options_de: ["Hellblau", "Gelblich", "Orange", "Dunkelgrün"],
      options_fr: ["Rougeâtre", "Jaunâtre", "Jaune", "Bleu clair"],
      correct: 1
    },
    {
      question: "What does \"Loko\" mean?",
      question_de: "Was bedeutet \"Loko\"?",
      question_fr: "Que signifie \"Loko\" ?",
      options: ["Color outside", "Blue", "Bluish", "Colors"],
      options_de: ["Farben", "Orange", "Bläulich", "Gefärbt sein"],
      options_fr: ["Orange", "Bleu clair", "Marron", "Couleurs"],
      correct: 3
    },
    {
      question: "What does \"Volon-tsokola\" mean?",
      question_de: "Was bedeutet \"Volon-tsokola\"?",
      question_fr: "Que signifie \"Volon-tsokola\" ?",
      options: ["Light green", "Bluish", "Brown", "Green"],
      options_de: ["Sehr weiß", "Braun", "Orange", "Farbe außen"],
      options_fr: ["Marron", "Couleur extérieure", "Jaunâtre", "Vert foncé"],
      correct: 2
    }
  ],
  furniture: [
    {
      question: "What does \"Latabatra\" mean?",
      question_de: "Was bedeutet \"Latabatra\"?",
      question_fr: "Que signifie \"Latabatra\" ?",
      options: ["Window", "Farmhouse", "Clean", "Table"],
      options_de: ["Geschnitten / Kaputt", "Tisch", "Badezimmer", "Dach"],
      options_fr: ["Frais (maison)", "Table", "Lit", "Sol / Terre"],
      correct: 3
    },
    {
      question: "What does \"Kodiarana\" mean?",
      question_de: "Was bedeutet \"Kodiarana\"?",
      question_fr: "Que signifie \"Kodiarana\" ?",
      options: ["Cement floor", "Table", "Stairs", "Bag / Suitcase"],
      options_de: ["Uhr / Armbanduhr", "Möbel / Ausrüstung", "Tasche / Koffer", "Zementboden"],
      options_fr: ["Sol en ciment", "Toit", "Ventilateur", "Gobelet en plastique"],
      correct: 0
    },
    {
      question: "What does \"Fanaka\" mean?",
      question_de: "Was bedeutet \"Fanaka\"?",
      question_fr: "Que signifie \"Fanaka\" ?",
      options: ["Mosquito net", "Blankets", "Wall", "Furniture / Equipment"],
      options_de: ["Ventilator", "Möbel / Ausrüstung", "Esszimmer", "Tisch"],
      options_fr: ["Porte", "Chaud (maison)", "Meubles / Équipement", "Salle à manger"],
      correct: 3
    },
    {
      question: "What does \"Lay\" mean?",
      question_de: "Was bedeutet \"Lay\"?",
      question_fr: "Que signifie \"Lay\" ?",
      options: ["Radio", "Farmhouse", "Chair", "Mosquito net"],
      options_de: ["Gästehaus / Hotel", "Taschenlampe", "Decken", "Moskitonetz"],
      options_fr: ["Moustiquaire", "Mur", "Sol / Terre", "Lumière"],
      correct: 3
    },
    {
      question: "What does \"Jiro\" mean?",
      question_de: "Was bedeutet \"Jiro\"?",
      question_fr: "Que signifie \"Jiro\" ?",
      options: ["Clock / Watch", "Light", "Fan", "Warm (house)"],
      options_de: ["Werkzeuge / Geräte", "Kissen", "Dach", "Licht"],
      options_fr: ["Sol / Terre", "Lumière", "Lampe torche", "Couvertures"],
      correct: 1
    },
    {
      question: "What does \"Trano fandraisana\" mean?",
      question_de: "Was bedeutet \"Trano fandraisana\"?",
      question_fr: "Que signifie \"Trano fandraisana\" ?",
      options: ["Living room", "Plastic mug", "Table", "Cool (house)"],
      options_de: ["Boden / Erde", "Wohnzimmer", "Wand", "Licht"],
      options_fr: ["Salon", "Escaliers", "Mur", "Outils / Appareils"],
      correct: 0
    },
    {
      question: "What does \"Seza\" mean?",
      question_de: "Was bedeutet \"Seza\"?",
      question_fr: "Que signifie \"Seza\" ?",
      options: ["Pillow", "Bag / Suitcase", "Chair", "Door"],
      options_de: ["Schmutzig", "Stuhl", "Fenster", "Essen"],
      options_fr: ["Lampe torche", "Seau", "Chaise", "Maison"],
      correct: 2
    },
    {
      question: "What does \"Kidoro\" mean?",
      question_de: "Was bedeutet \"Kidoro\"?",
      question_fr: "Que signifie \"Kidoro\" ?",
      options: ["Cement floor", "Mattress", "Furniture / Equipment", "Wall"],
      options_de: ["Kissen", "Fenster", "Matratze", "Ventilator"],
      options_fr: ["Matelas", "Meubles / Équipement", "Coupé / Cassé", "Fenêtre"],
      correct: 1
    },
    {
      question: "What does \"Mafana (trano)\" mean?",
      question_de: "Was bedeutet \"Mafana (trano)\"?",
      question_fr: "Que signifie \"Mafana (trano)\" ?",
      options: ["Dirty", "Mattress", "Stairs", "Warm (house)"],
      options_de: ["Warm (Haus)", "Uhr / Armbanduhr", "Wand", "Stuhl"],
      options_fr: ["Escaliers", "Salle de bain", "Chaud (maison)", "Coupé / Cassé"],
      correct: 3
    },
    {
      question: "What does \"Trano\" mean?",
      question_de: "Was bedeutet \"Trano\"?",
      question_fr: "Que signifie \"Trano\" ?",
      options: ["House", "Mosquito net", "Floor / Ground", "Radio"],
      options_de: ["Haus", "Plastikbecher", "Bett", "Eimer"],
      options_fr: ["Frais (maison)", "Moustiquaire", "Maison", "Meubles / Équipement"],
      correct: 0
    },
    {
      question: "What does \"Sakafo\" mean?",
      question_de: "Was bedeutet \"Sakafo\"?",
      question_fr: "Que signifie \"Sakafo\" ?",
      options: ["Window", "Food", "Roof", "Door"],
      options_de: ["Wohnzimmer", "Boden / Erde", "Zementboden", "Essen"],
      options_fr: ["Lampe torche", "Nourriture", "Seau", "Lumière"],
      correct: 1
    },
    {
      question: "What does \"Trano fandraisam-bahiny\" mean?",
      question_de: "Was bedeutet \"Trano fandraisam-bahiny\"?",
      question_fr: "Que signifie \"Trano fandraisam-bahiny\" ?",
      options: ["Table", "Dining room", "Guest house / Hotel", "Mattress"],
      options_de: ["Eimer", "Schmutzig", "Essen", "Gästehaus / Hotel"],
      options_fr: ["Outils / Appareils", "Propre", "Maison d'hôtes / Hôtel", "Matelas"],
      correct: 2
    },
    {
      question: "What does \"Fitaovana\" mean?",
      question_de: "Was bedeutet \"Fitaovana\"?",
      question_fr: "Que signifie \"Fitaovana\" ?",
      options: ["Bag / Suitcase", "Warm (house)", "Mattress", "Tools / Appliances"],
      options_de: ["Tasche / Koffer", "Dach", "Haus", "Werkzeuge / Geräte"],
      options_fr: ["Oreiller", "Porte", "Outils / Appareils", "Horloge / Montre"],
      correct: 3
    },
    {
      question: "What does \"Radio\" mean?",
      question_de: "Was bedeutet \"Radio\"?",
      question_fr: "Que signifie \"Radio\" ?",
      options: ["Farmhouse", "Radio", "Bag / Suitcase", "Mattress"],
      options_de: ["Möbel / Ausrüstung", "Geschnitten / Kaputt", "Radio", "Kühl (Haus)"],
      options_fr: ["Lampe torche", "Radio", "Moustiquaire", "Propre"],
      correct: 1
    },
    {
      question: "What does \"Mangatsiaka (trano)\" mean?",
      question_de: "Was bedeutet \"Mangatsiaka (trano)\"?",
      question_fr: "Que signifie \"Mangatsiaka (trano)\" ?",
      options: ["Bed", "Cool (house)", "Bathroom", "Light"],
      options_de: ["Kühl (Haus)", "Schmutzig", "Dach", "Plastikbecher"],
      options_fr: ["Frais (maison)", "Toit", "Chaise", "Nourriture"],
      correct: 1
    }
  ],
  verbs: [
    {
      question: "What does \"voafetra\" mean?",
      question_de: "Was bedeutet \"voafetra\"?",
      question_fr: "Que signifie \"voafetra\" ?",
      options: ["to hate each other", "to learn", "to create", "to be limited"],
      options_de: ["lernen", "begrenzt sein", "aß (Vergangenheit)", "durchsetzen"],
      options_fr: ["aller", "être limité", "se détester", "frapper"],
      correct: 3
    },
    {
      question: "What does \"manao\" mean?",
      question_de: "Was bedeutet \"manao\"?",
      question_fr: "Que signifie \"manao\" ?",
      options: ["to hate each other", "to enforce", "to do", "to live"],
      options_de: ["suchen", "erschaffen", "schlagen", "tun"],
      options_fr: ["appliquer", "être limité", "chercher", "faire"],
      correct: 2
    },
    {
      question: "What does \"mianatra\" mean?",
      question_de: "Was bedeutet \"mianatra\"?",
      question_fr: "Que signifie \"mianatra\" ?",
      options: ["to do", "to speak", "to go", "to learn"],
      options_de: ["benutzen", "schlagen", "sprechen", "lernen"],
      options_fr: ["parler", "créer", "apprendre", "faire"],
      correct: 3
    },
    {
      question: "What does \"hihinana\" mean?",
      question_de: "Was bedeutet \"hihinana\"?",
      question_fr: "Que signifie \"hihinana\" ?",
      options: ["will eat (future)", "to buy", "to give", "to live"],
      options_de: ["benutzen", "wird essen (Zukunft)", "gehen", "sprechen"],
      options_fr: ["to give", "créer", "apprendre", "mangera (futur)"],
      correct: 0
    },
    {
      question: "What does \"manome\" mean?",
      question_de: "Was bedeutet \"manome\"?",
      question_fr: "Que signifie \"manome\" ?",
      options: ["to hate each other", "to live", "to give", "to drink"],
      options_de: ["tun", "to give", "trinken", "essen (Gegenwart)"],
      options_fr: ["aller", "boire", "to give", "se détester"],
      correct: 2
    },
    {
      question: "What does \"miteny\" mean?",
      question_de: "Was bedeutet \"miteny\"?",
      question_fr: "Que signifie \"miteny\" ?",
      options: ["to create", "to speak", "to learn", "will eat (future)"],
      options_de: ["leben", "lernen", "sprechen", "durchsetzen"],
      options_fr: ["manger (présent)", "appliquer", "parler", "apprendre"],
      correct: 1
    },
    {
      question: "What does \"mividy\" mean?",
      question_de: "Was bedeutet \"mividy\"?",
      question_fr: "Que signifie \"mividy\" ?",
      options: ["to enforce", "to give", "to buy", "to search"],
      options_de: ["kaufen", "anschauen", "wird essen (Zukunft)", "leben"],
      options_fr: ["appliquer", "frapper", "utiliser", "acheter"],
      correct: 2
    },
    {
      question: "What does \"mampihatra\" mean?",
      question_de: "Was bedeutet \"mampihatra\"?",
      question_fr: "Que signifie \"mampihatra\" ?",
      options: ["to enforce", "will eat (future)", "to live", "to speak"],
      options_de: ["suchen", "leben", "durchsetzen", "essen (Gegenwart)"],
      options_fr: ["manger (présent)", "appliquer", "a mangé (passé)", "utiliser"],
      correct: 0
    },
    {
      question: "What does \"nihinana\" mean?",
      question_de: "Was bedeutet \"nihinana\"?",
      question_fr: "Que signifie \"nihinana\" ?",
      options: ["to give", "to go", "ate (past)", "to live"],
      options_de: ["to give", "aß (Vergangenheit)", "trinken", "tun"],
      options_fr: ["regarder", "aller", "apprécier", "a mangé (passé)"],
      correct: 2
    },
    {
      question: "What does \"mifankahalana\" mean?",
      question_de: "Was bedeutet \"mifankahalana\"?",
      question_fr: "Que signifie \"mifankahalana\" ?",
      options: ["to live", "to hate each other", "ate (past)", "to hit"],
      options_de: ["sprechen", "sich hassen", "anschauen", "leben"],
      options_fr: ["regarder", "mangera (futur)", "parler", "se détester"],
      correct: 1
    },
    {
      question: "What does \"mipetraka\" mean?",
      question_de: "Was bedeutet \"mipetraka\"?",
      question_fr: "Que signifie \"mipetraka\" ?",
      options: ["to do", "to live", "to be limited", "to give"],
      options_de: ["leben", "begrenzt sein", "kaufen", "erschaffen"],
      options_fr: ["faire", "vivre", "boire", "apprécier"],
      correct: 1
    },
    {
      question: "What does \"mijery\" mean?",
      question_de: "Was bedeutet \"mijery\"?",
      question_fr: "Que signifie \"mijery\" ?",
      options: ["to look at", "to hit", "to speak", "to search"],
      options_de: ["anschauen", "suchen", "sich hassen", "trinken"],
      options_fr: ["regarder", "manger (présent)", "frapper", "apprendre"],
      correct: 0
    },
    {
      question: "What does \"mampiasa\" mean?",
      question_de: "Was bedeutet \"mampiasa\"?",
      question_fr: "Que signifie \"mampiasa\" ?",
      options: ["to use", "to look at", "to create", "will eat (future)"],
      options_de: ["sprechen", "benutzen", "wird essen (Zukunft)", "essen (Gegenwart)"],
      options_fr: ["to give", "chercher", "utiliser", "frapper"],
      correct: 0
    },
    {
      question: "What does \"mamely\" mean?",
      question_de: "Was bedeutet \"mamely\"?",
      question_fr: "Que signifie \"mamely\" ?",
      options: ["will eat (future)", "to go", "to learn", "to hit"],
      options_de: ["schlagen", "wird essen (Zukunft)", "anschauen", "essen (Gegenwart)"],
      options_fr: ["frapper", "to give", "créer", "parler"],
      correct: 3
    },
    {
      question: "What does \"mitady\" mean?",
      question_de: "Was bedeutet \"mitady\"?",
      question_fr: "Que signifie \"mitady\" ?",
      options: ["to search", "to buy", "will eat (future)", "to eat (present)"],
      options_de: ["tun", "wird essen (Zukunft)", "gehen", "suchen"],
      options_fr: ["chercher", "frapper", "acheter", "se détester"],
      correct: 0
    }
  ],
  pronouns: [
    {
      question: "What does \"Ankoatra\" mean?",
      question_de: "Was bedeutet \"Ankoatra\"?",
      question_fr: "Que signifie \"Ankoatra\" ?",
      options: ["because", "These/Those", "besides / except", "You"],
      options_de: ["wenn (Aussage)", "Er/Sie", "ich", "außer / ausgenommen"],
      options_fr: ["Tu / Vous", "parce que", "Nous (exclusif)", "en plus de / sauf"],
      correct: 2
    },
    {
      question: "What does \"Ireo\" mean?",
      question_de: "Was bedeutet \"Ireo\"?",
      question_fr: "Que signifie \"Ireo\" ?",
      options: ["because", "These/Those", "there is not", "then / and"],
      options_de: ["Er/Sie", "der/die/das / Besitzmarker", "dann / und", "Diese/Jene"],
      options_fr: ["Ils/Elles", "chaque", "Ceux-ci/Ceux-là", "quand (affirmation)"],
      correct: 1
    },
    {
      question: "What does \"Isika\" mean?",
      question_de: "Was bedeutet \"Isika\"?",
      question_fr: "Que signifie \"Isika\" ?",
      options: ["We (inclusive)", "I", "but", "This"],
      options_de: ["der/die/das / Besitzmarker", "Wir (inklusiv)", "aber", "auch / ebenfalls"],
      options_fr: ["Il/Elle", "Nous (inclusif)", "Cela", "parce que"],
      correct: 0
    },
    {
      question: "What does \"Satria\" mean?",
      question_de: "Was bedeutet \"Satria\"?",
      question_fr: "Que signifie \"Satria\" ?",
      options: ["but", "because", "the / possession marker", "This"],
      options_de: ["Sie", "Du / Sie", "weil", "Das"],
      options_fr: ["et", "Nous (exclusif)", "parce que", "il n'y a pas"],
      correct: 1
    },
    {
      question: "What does \"Ary\" mean?",
      question_de: "Was bedeutet \"Ary\"?",
      question_fr: "Que signifie \"Ary\" ?",
      options: ["there is not", "I", "and", "the / possession marker"],
      options_de: ["der/die/das / Besitzmarker", "und", "das / es", "Diese/Jene"],
      options_fr: ["Il/Elle", "alors / et", "Vous (pluriel)", "et"],
      correct: 2
    },
    {
      question: "What does \"izany\" mean?",
      question_de: "Was bedeutet \"izany\"?",
      question_fr: "Que signifie \"izany\" ?",
      options: ["That", "that / it", "because", "question particle"],
      options_de: ["es gibt nicht", "Dies", "das / es", "weil"],
      options_fr: ["parce que", "Il/Elle", "Tu / Vous", "cela / il"],
      correct: 1
    },
    {
      question: "What does \"Raha\" mean?",
      question_de: "Was bedeutet \"Raha\"?",
      question_fr: "Que signifie \"Raha\" ?",
      options: ["each / every", "if", "question particle", "I"],
      options_de: ["Sie", "ich", "wenn/falls", "der/die/das / Besitzmarker"],
      options_fr: ["je", "cela / il", "le/la/les / marqueur de possession", "si"],
      correct: 1
    },
    {
      question: "What does \"angaha\" mean?",
      question_de: "Was bedeutet \"angaha\"?",
      question_fr: "Que signifie \"angaha\" ?",
      options: ["besides / except", "that / it", "polite question particle", "These/Those"],
      options_de: ["Dies", "höfliche Fragepartikel", "dann / und", "Du / Sie"],
      options_fr: ["Cela", "particule de question polie", "Nous (exclusif)", "le/la/les / marqueur de possession"],
      correct: 2
    },
    {
      question: "What does \"Aho\" mean?",
      question_de: "Was bedeutet \"Aho\"?",
      question_fr: "Que signifie \"Aho\" ?",
      options: ["You", "polite question particle", "there is not", "I"],
      options_de: ["Wir (inklusiv)", "auch / ebenfalls", "höfliche Fragepartikel", "ich"],
      options_fr: ["particule de question", "je", "cela / il", "et"],
      correct: 3
    },
    {
      question: "What does \"ny\" mean?",
      question_de: "Was bedeutet \"ny\"?",
      question_fr: "Que signifie \"ny\" ?",
      options: ["the / possession marker", "when (statement)", "He/She", "there is not"],
      options_de: ["und", "höfliche Fragepartikel", "aber", "der/die/das / Besitzmarker"],
      options_fr: ["je", "le/la/les / marqueur de possession", "cela / il", "mais"],
      correct: 0
    },
    {
      question: "What does \"Izy\" mean?",
      question_de: "Was bedeutet \"Izy\"?",
      question_fr: "Que signifie \"Izy\" ?",
      options: ["when (statement)", "each / every", "that / it", "He/She"],
      options_de: ["Das", "weil", "es gibt nicht", "Er/Sie"],
      options_fr: ["Ceci", "si", "Vous (pluriel)", "Il/Elle"],
      correct: 3
    },
    {
      question: "What does \"Ity\" mean?",
      question_de: "Was bedeutet \"Ity\"?",
      question_fr: "Que signifie \"Ity\" ?",
      options: ["This", "He/She", "I", "question particle"],
      options_de: ["Er/Sie", "dann / und", "Dies", "jeder"],
      options_fr: ["je", "alors / et", "Ceci", "il n'y a pas"],
      correct: 0
    },
    {
      question: "What does \"Dia\" mean?",
      question_de: "Was bedeutet \"Dia\"?",
      question_fr: "Que signifie \"Dia\" ?",
      options: ["We (inclusive)", "They", "then / and", "question particle"],
      options_de: ["der/die/das / Besitzmarker", "und", "ich", "dann / und"],
      options_fr: ["si", "quand (affirmation)", "alors / et", "Vous (pluriel)"],
      correct: 2
    },
    {
      question: "What does \"Ianao\" mean?",
      question_de: "Was bedeutet \"Ianao\"?",
      question_fr: "Que signifie \"Ianao\" ?",
      options: ["then / and", "This", "that / it", "You"],
      options_de: ["wenn (Aussage)", "ich", "dann / und", "Du / Sie"],
      options_fr: ["Tu / Vous", "particule de question", "parce que", "chaque"],
      correct: 3
    }
  ],
  adjectives: [
    {
      question: "What does \"vaovao\" mean?",
      question_de: "Was bedeutet \"vaovao\"?",
      question_fr: "Que signifie \"vaovao\" ?",
      options: ["more", "new", "very (prefix)", "short"],
      options_de: ["alt", "dunkel (bei Farben)", "neu", "viele"],
      options_fr: ["facile / bon marché", "peu", "différent", "nouveau"],
      correct: 1
    },
    {
      question: "What does \"maloto\" mean?",
      question_de: "Was bedeutet \"maloto\"?",
      question_fr: "Que signifie \"maloto\" ?",
      options: ["bad", "many", "old", "dirty"],
      options_de: ["schlecht", "verschieden", "schmutzig", "dunkel (bei Farben)"],
      options_fr: ["tout", "très (préfixe)", "vieux", "sale"],
      correct: 3
    },
    {
      question: "What does \"tsara\" mean?",
      question_de: "Was bedeutet \"tsara\"?",
      question_fr: "Que signifie \"tsara\" ?",
      options: ["bad", "same", "good", "new"],
      options_de: ["gut", "hell (bei Farben)", "sehr (Präfix)", "gleich"],
      options_fr: ["très (préfixe)", "vieux", "le plus / surtout", "bon"],
      correct: 2
    },
    {
      question: "What does \"lava\" mean?",
      question_de: "Was bedeutet \"lava\"?",
      question_fr: "Que signifie \"lava\" ?",
      options: ["many", "long", "new", "bad"],
      options_de: ["lang", "kurz", "einige", "sehr (Präfix)"],
      options_fr: ["quelques", "long", "peu", "grand"],
      correct: 1
    },
    {
      question: "What does \"hafa\" mean?",
      question_de: "Was bedeutet \"hafa\"?",
      question_fr: "Que signifie \"hafa\" ?",
      options: ["short", "most / especially", "small", "different"],
      options_de: ["klein", "einfach / billig", "wenige", "verschieden"],
      options_fr: ["nouveau", "différent", "le plus / surtout", "facile / bon marché"],
      correct: 3
    },
    {
      question: "What does \"mora\" mean?",
      question_de: "Was bedeutet \"mora\"?",
      question_fr: "Que signifie \"mora\" ?",
      options: ["small", "old", "small (suffix)", "easy / cheap"],
      options_de: ["dunkel (bei Farben)", "einfach / billig", "alle", "hell (bei Farben)"],
      options_fr: ["facile / bon marché", "vieux", "très (préfixe)", "tout"],
      correct: 3
    },
    {
      question: "What does \"kokoa\" mean?",
      question_de: "Was bedeutet \"kokoa\"?",
      question_fr: "Que signifie \"kokoa\" ?",
      options: ["more", "very (prefix)", "new", "small"],
      options_de: ["alle", "groß", "mehr", "sehr (Präfix)"],
      options_fr: ["nouveau", "plus", "vieux", "quelques"],
      correct: 0
    },
    {
      question: "What does \"ratsy\" mean?",
      question_de: "Was bedeutet \"ratsy\"?",
      question_fr: "Que signifie \"ratsy\" ?",
      options: ["good", "bad", "different", "old"],
      options_de: ["lang", "schlecht", "einige", "sauber"],
      options_fr: ["mauvais", "court", "nouveau", "grand (suffixe)"],
      correct: 1
    },
    {
      question: "What does \"maro\" mean?",
      question_de: "Was bedeutet \"maro\"?",
      question_fr: "Que signifie \"maro\" ?",
      options: ["small", "many", "big", "very (prefix)"],
      options_de: ["groß (Suffix)", "neu", "viele", "am meisten / besonders"],
      options_fr: ["beaucoup", "clair (avec couleurs)", "foncé (avec couleurs)", "plus"],
      correct: 1
    },
    {
      question: "What does \"antitra\" mean?",
      question_de: "Was bedeutet \"antitra\"?",
      question_fr: "Que signifie \"antitra\" ?",
      options: ["easy / cheap", "clean", "good", "dark (with colors)"],
      options_de: ["neu", "dunkel (bei Farben)", "kurz", "am meisten / besonders"],
      options_fr: ["grand (suffixe)", "foncé (avec couleurs)", "nouveau", "grand"],
      correct: 3
    },
    {
      question: "What does \"-kely\" mean?",
      question_de: "Was bedeutet \"-kely\"?",
      question_fr: "Que signifie \"-kely\" ?",
      options: ["dirty", "old", "very (prefix)", "small (suffix)"],
      options_de: ["klein (Suffix)", "gleich", "viele", "hell (bei Farben)"],
      options_fr: ["vieux", "beaucoup", "petit (suffixe)", "propre"],
      correct: 3
    },
    {
      question: "What does \"taloha\" mean?",
      question_de: "Was bedeutet \"taloha\"?",
      question_fr: "Que signifie \"taloha\" ?",
      options: ["good", "dark (with colors)", "dirty", "old"],
      options_de: ["einige", "alt", "am meisten / besonders", "sehr (Präfix)"],
      options_fr: ["beaucoup", "vieux", "difficile / cher", "bon"],
      correct: 3
    },
    {
      question: "What does \"sasany\" mean?",
      question_de: "Was bedeutet \"sasany\"?",
      question_fr: "Que signifie \"sasany\" ?",
      options: ["some", "short", "very (prefix)", "clean"],
      options_de: ["verschieden", "lang", "sauber", "einige"],
      options_fr: ["grand (suffixe)", "quelques", "peu", "sale"],
      correct: 0
    },
    {
      question: "What does \"rehetra\" mean?",
      question_de: "Was bedeutet \"rehetra\"?",
      question_fr: "Que signifie \"rehetra\" ?",
      options: ["small (suffix)", "all", "long", "more"],
      options_de: ["kurz", "lang", "alt", "alle"],
      options_fr: ["facile / bon marché", "sale", "tout", "petit"],
      correct: 1
    },
    {
      question: "What does \"sarotra\" mean?",
      question_de: "Was bedeutet \"sarotra\"?",
      question_fr: "Que signifie \"sarotra\" ?",
      options: ["difficult / expensive", "old", "few", "dirty"],
      options_de: ["schwierig / teuer", "schlecht", "schmutzig", "mehr"],
      options_fr: ["quelques", "beaucoup", "très (préfixe)", "difficile / cher"],
      correct: 0
    }
  ],
  prepositions: [
    {
      question: "What does \"Aty\" mean?",
      question_de: "Was bedeutet \"Aty\"?",
      question_fr: "Que signifie \"Aty\" ?",
      options: ["here", "there", "far", "at / in / on"],
      options_de: ["nach", "darunter", "Mitte", "hier"],
      options_fr: ["ici", "bord", "à / dans / sur", "au-dessus"],
      correct: 0
    },
    {
      question: "What does \"Amin'ny tany\" mean?",
      question_de: "Was bedeutet \"Amin'ny tany\"?",
      question_fr: "Que signifie \"Amin'ny tany\" ?",
      options: ["inside", "with", "outside of", "on the ground"],
      options_de: ["auf dem Boden", "dort", "im Haus", "im Wald"],
      options_fr: ["sur le sol", "loin", "au-dessus", "en dessous"],
      correct: 3
    },
    {
      question: "What does \"Farany\" mean?",
      question_de: "Was bedeutet \"Farany\"?",
      question_fr: "Que signifie \"Farany\" ?",
      options: ["before", "on top", "end", "outside"],
      options_de: ["außerhalb von", "Ende", "dort", "an / in / auf"],
      options_fr: ["fin", "là", "en dehors de", "en dessous"],
      correct: 2
    },
    {
      question: "What does \"Amin'ny\" mean?",
      question_de: "Was bedeutet \"Amin'ny\"?",
      question_fr: "Que signifie \"Amin'ny\" ?",
      options: ["around", "except", "underneath", "at / in / on"],
      options_de: ["mit", "an / in / auf", "darauf", "dort"],
      options_fr: ["sur le sol", "sauf", "à / dans / sur", "en dessous"],
      correct: 3
    },
    {
      question: "What does \"Miaraka amin'ny\" mean?",
      question_de: "Was bedeutet \"Miaraka amin'ny\"?",
      question_fr: "Que signifie \"Miaraka amin'ny\" ?",
      options: ["here", "on top of it", "with", "in the forest"],
      options_de: ["weit", "Mitte", "mit", "dort"],
      options_fr: ["là", "au-dessus", "à l'extérieur", "avec"],
      correct: 2
    },
    {
      question: "What does \"Sisin'ny\" mean?",
      question_de: "Was bedeutet \"Sisin'ny\"?",
      question_fr: "Que signifie \"Sisin'ny\" ?",
      options: ["edge", "inside the house", "on top of it", "in the forest"],
      options_de: ["Rand", "in der Nähe", "oben drauf", "hier"],
      options_fr: ["avant", "fin", "après", "bord"],
      correct: 0
    },
    {
      question: "What does \"Any an-tampony\" mean?",
      question_de: "Was bedeutet \"Any an-tampony\"?",
      question_fr: "Que signifie \"Any an-tampony\" ?",
      options: ["here", "on top of it", "inside the house", "after"],
      options_de: ["darauf", "Ende", "nach", "um"],
      options_fr: ["dessus", "à l'extérieur", "en dessous", "au-dessus"],
      correct: 1
    },
    {
      question: "What does \"Afovoany\" mean?",
      question_de: "Was bedeutet \"Afovoany\"?",
      question_fr: "Que signifie \"Afovoany\" ?",
      options: ["on the ground", "nearby", "middle", "end"],
      options_de: ["außer", "weit", "im Wald", "Mitte"],
      options_fr: ["loin", "milieu", "avec", "après"],
      correct: 2
    },
    {
      question: "What does \"Ambany\" mean?",
      question_de: "Was bedeutet \"Ambany\"?",
      question_fr: "Que signifie \"Ambany\" ?",
      options: ["top", "underneath", "corner", "here"],
      options_de: ["darunter", "Mitte", "weit", "Rand"],
      options_fr: ["en dessous", "en dehors de", "sauf", "à l'extérieur"],
      correct: 1
    },
    {
      question: "What does \"Ao\" mean?",
      question_de: "Was bedeutet \"Ao\"?",
      question_fr: "Que signifie \"Ao\" ?",
      options: ["corner", "inside", "middle", "on top"],
      options_de: ["mit", "dort", "drinnen", "nach"],
      options_fr: ["dans la forêt", "à l'intérieur de la maison", "coin", "à l'intérieur"],
      correct: 1
    },
    {
      question: "What does \"Lavitra\" mean?",
      question_de: "Was bedeutet \"Lavitra\"?",
      question_fr: "Que signifie \"Lavitra\" ?",
      options: ["inside the house", "at / in / on", "on top of it", "far"],
      options_de: ["weit", "darunter", "dort", "außer"],
      options_fr: ["là", "dessus", "loin", "dans la forêt"],
      correct: 3
    },
    {
      question: "What does \"Ao an-trano\" mean?",
      question_de: "Was bedeutet \"Ao an-trano\"?",
      question_fr: "Que signifie \"Ao an-trano\" ?",
      options: ["top", "outside", "inside the house", "middle"],
      options_de: ["im Haus", "oben drauf", "an / in / auf", "drinnen"],
      options_fr: ["loin", "à l'intérieur de la maison", "sauf", "bord"],
      correct: 2
    },
    {
      question: "What does \"Manodidina\" mean?",
      question_de: "Was bedeutet \"Manodidina\"?",
      question_fr: "Que signifie \"Manodidina\" ?",
      options: ["in the forest", "end", "corner", "around"],
      options_de: ["um", "Mitte", "darunter", "draußen"],
      options_fr: ["sur le sol", "avant", "autour", "avec"],
      correct: 3
    },
    {
      question: "What does \"Ivelan'ny\" mean?",
      question_de: "Was bedeutet \"Ivelan'ny\"?",
      question_fr: "Que signifie \"Ivelan'ny\" ?",
      options: ["on the ground", "before", "outside of", "with"],
      options_de: ["außerhalb von", "darauf", "hier", "dort"],
      options_fr: ["à proximité", "dessus", "bord", "en dehors de"],
      correct: 2
    },
    {
      question: "What does \"Amin'ny ala\" mean?",
      question_de: "Was bedeutet \"Amin'ny ala\"?",
      question_fr: "Que signifie \"Amin'ny ala\" ?",
      options: ["on the ground", "before", "at / in / on", "in the forest"],
      options_de: ["Ende", "nach", "oben drauf", "im Wald"],
      options_fr: ["à l'extérieur", "sur le sol", "au-dessus", "dans la forêt"],
      correct: 3
    }
  ],
  negation: [
    {
      question: "What does \"Vao\" mean?",
      question_de: "Was bedeutet \"Vao\"?",
      question_fr: "Que signifie \"Vao\" ?",
      options: ["no / not", "just / recently", "to not like", "do not like"],
      options_de: ["kann nicht", "gut", "nicht gut", "gerade / kürzlich"],
      options_fr: ["particule de question", "juste / récemment", "devoir", "ne peut pas"],
      correct: 1
    },
    {
      question: "What does \"tsy azo atao\" mean?",
      question_de: "Was bedeutet \"tsy azo atao\"?",
      question_fr: "Que signifie \"tsy azo atao\" ?",
      options: ["already", "already arrived", "to not like", "impossible"],
      options_de: ["unmöglich", "nicht gut", "can", "kann nicht"],
      options_fr: ["particule de question", "ne pas", "impossible", "possible"],
      correct: 3
    },
    {
      question: "What does \"tsy afaka\" mean?",
      question_de: "Was bedeutet \"tsy afaka\"?",
      question_fr: "Que signifie \"tsy afaka\" ?",
      options: ["there is not", "polite question", "cannot", "already arrived"],
      options_de: ["mag nicht", "kann nicht", "nicht gut", "nicht mögen"],
      options_fr: ["ne peut pas", "devoir", "impossible", "question polie"],
      correct: 2
    },
    {
      question: "What does \"Angaha\" mean?",
      question_de: "Was bedeutet \"Angaha\"?",
      question_fr: "Que signifie \"Angaha\" ?",
      options: ["polite question", "cannot", "must", "to not like"],
      options_de: ["muss gehen", "noch", "es gibt nicht", "höfliche Frage"],
      options_fr: ["ne pas", "can", "déjà", "question polie"],
      correct: 0
    },
    {
      question: "What does \"Mbola\" mean?",
      question_de: "Was bedeutet \"Mbola\"?",
      question_fr: "Que signifie \"Mbola\" ?",
      options: ["not good", "polite question", "can", "still"],
      options_de: ["nein / nicht", "schon", "gerade / kürzlich", "noch"],
      options_fr: ["aimer", "il y a", "encore", "particule de question"],
      correct: 3
    },
    {
      question: "What does \"Tsy\" mean?",
      question_de: "Was bedeutet \"Tsy\"?",
      question_fr: "Que signifie \"Tsy\" ?",
      options: ["to not like", "to like", "can", "no / not"],
      options_de: ["muss gehen", "muss", "nein / nicht", "mag nicht"],
      options_fr: ["devoir", "non / ne pas", "ne peut pas", "question polie"],
      correct: 3
    },
    {
      question: "What does \"tsy tia\" mean?",
      question_de: "Was bedeutet \"tsy tia\"?",
      question_fr: "Que signifie \"tsy tia\" ?",
      options: ["don't", "can", "there is", "to not like"],
      options_de: ["gerade / kürzlich", "unmöglich", "es gibt nicht", "nicht mögen"],
      options_fr: ["encore", "ne peut pas", "ne pas aimer", "ne pas aimer"],
      correct: 3
    },
    {
      question: "What does \"Tsy afaka\" mean?",
      question_de: "Was bedeutet \"Tsy afaka\"?",
      question_fr: "Que signifie \"Tsy afaka\" ?",
      options: ["polite question", "cannot", "no / not", "there is"],
      options_de: ["es gibt", "kann nicht", "muss gehen", "mag nicht"],
      options_fr: ["il n'y a pas", "ne peut pas", "can", "déjà"],
      correct: 1
    },
    {
      question: "What does \"tsy tsara\" mean?",
      question_de: "Was bedeutet \"tsy tsara\"?",
      question_fr: "Que signifie \"tsy tsara\" ?",
      options: ["not good", "possible", "no / not", "there is"],
      options_de: ["nein / nicht", "nicht mögen", "höfliche Frage", "nicht gut"],
      options_fr: ["bon", "doit partir", "pas bon", "possible"],
      correct: 0
    },
    {
      question: "What does \"misy\" mean?",
      question_de: "Was bedeutet \"misy\"?",
      question_fr: "Que signifie \"misy\" ?",
      options: ["do not like", "no / not", "to not like", "there is"],
      options_de: ["gut", "es gibt", "unmöglich", "can"],
      options_fr: ["il y a", "aimer", "devoir", "bon"],
      correct: 3
    },
    {
      question: "What does \"Aza\" mean?",
      question_de: "Was bedeutet \"Aza\"?",
      question_fr: "Que signifie \"Aza\" ?",
      options: ["cannot", "impossible", "must go", "don't"],
      options_de: ["mag nicht", "nicht", "gerade / kürzlich", "unmöglich"],
      options_fr: ["ne peut pas", "aimer", "possible", "ne pas"],
      correct: 3
    },
    {
      question: "What does \"Tsy tia\" mean?",
      question_de: "Was bedeutet \"Tsy tia\"?",
      question_fr: "Que signifie \"Tsy tia\" ?",
      options: ["question particle", "just / recently", "cannot", "do not like"],
      options_de: ["Fragepartikel", "kann nicht", "gerade / kürzlich", "mag nicht"],
      options_fr: ["ne pas aimer", "ne pas", "il y a", "ne pas aimer"],
      correct: 3
    },
    {
      question: "What does \"maintsy\" mean?",
      question_de: "Was bedeutet \"maintsy\"?",
      question_fr: "Que signifie \"maintsy\" ?",
      options: ["there is not", "good", "can", "must"],
      options_de: ["unmöglich", "höfliche Frage", "mögen", "muss"],
      options_fr: ["il n'y a pas", "ne peut pas", "possible", "devoir"],
      correct: 3
    },
    {
      question: "What does \"tia\" mean?",
      question_de: "Was bedeutet \"tia\"?",
      question_fr: "Que signifie \"tia\" ?",
      options: ["must", "must go", "possible", "to like"],
      options_de: ["schon", "schon angekommen", "mögen", "muss"],
      options_fr: ["aimer", "ne pas aimer", "doit partir", "il n'y a pas"],
      correct: 3
    },
    {
      question: "What does \"tsy misy\" mean?",
      question_de: "Was bedeutet \"tsy misy\"?",
      question_fr: "Que signifie \"tsy misy\" ?",
      options: ["good", "not good", "still", "there is not"],
      options_de: ["nicht", "es gibt", "möglich", "es gibt nicht"],
      options_fr: ["devoir", "impossible", "juste / récemment", "il n'y a pas"],
      correct: 3
    }
  ],
  body: [
    {
      question: "What does \"Marary kibo\" mean?",
      question_de: "Was bedeutet \"Marary kibo\"?",
      question_fr: "Que signifie \"Marary kibo\" ?",
      options: ["Stomach ache", "Wound", "Blood", "Shoulder"],
      options_de: ["Bauchschmerzen", "Fieber", "Heilen / Behandeln", "Herz"],
      options_fr: ["Hôpital", "Médicament", "Mal de ventre", "Médecin"],
      correct: 0
    },
    {
      question: "What does \"Arety\" mean?",
      question_de: "Was bedeutet \"Arety\"?",
      question_fr: "Que signifie \"Arety\" ?",
      options: ["Arm / Hand", "Disease", "Medicine", "Nose"],
      options_de: ["Gesicht", "Kopfschmerzen", "Krankheit", "Weh tun"],
      options_fr: ["Mal de ventre", "Vomir", "Maladie", "Sang"],
      correct: 1
    },
    {
      question: "What does \"Lela\" mean?",
      question_de: "Was bedeutet \"Lela\"?",
      question_fr: "Que signifie \"Lela\" ?",
      options: ["Head", "Heart", "Tongue", "Shoulder"],
      options_de: ["Auge", "Knie", "Zunge", "Ohr"],
      options_fr: ["Bouche", "Poitrine", "Langue", "Estomac / Ventre"],
      correct: 2
    },
    {
      question: "What does \"Orona\" mean?",
      question_de: "Was bedeutet \"Orona\"?",
      question_fr: "Que signifie \"Orona\" ?",
      options: ["Heart", "Tongue", "Ear", "Nose"],
      options_de: ["Gebrochen (Knochen)", "Nase", "Krankheit", "Bauchschmerzen"],
      options_fr: ["Épaule", "Médicament", "Nez", "Vomir"],
      correct: 3
    },
    {
      question: "What does \"Tratra\" mean?",
      question_de: "Was bedeutet \"Tratra\"?",
      question_fr: "Que signifie \"Tratra\" ?",
      options: ["Back", "Chest", "Broken (bone)", "Knee"],
      options_de: ["Haut", "Herz", "Mund", "Brust"],
      options_fr: ["Oeil", "Poitrine", "Nez", "Sang"],
      correct: 1
    },
    {
      question: "What does \"Maso\" mean?",
      question_de: "Was bedeutet \"Maso\"?",
      question_fr: "Que signifie \"Maso\" ?",
      options: ["Knee", "Skin", "Hospital", "Eye"],
      options_de: ["Herz", "Haut", "Kopf", "Auge"],
      options_fr: ["Oeil", "Vomir", "Injection / Piqûre", "Bouche"],
      correct: 3
    },
    {
      question: "What does \"Tazo\" mean?",
      question_de: "Was bedeutet \"Tazo\"?",
      question_fr: "Que signifie \"Tazo\" ?",
      options: ["Wound", "Ear", "Leg / Foot", "Fever"],
      options_de: ["Krank / Schmerzhaft", "Fieber", "Finger", "Zahn / Zähne"],
      options_fr: ["Fièvre", "Injection / Piqûre", "Dos", "Mal de ventre"],
      correct: 3
    },
    {
      question: "What does \"Sofina\" mean?",
      question_de: "Was bedeutet \"Sofina\"?",
      question_fr: "Que signifie \"Sofina\" ?",
      options: ["Ear", "Skin", "Shoulder", "Tongue"],
      options_de: ["Zahn / Zähne", "Magen / Bauch", "Ohr", "Blut"],
      options_fr: ["Coeur", "Dent / Dents", "Épaule", "Oreille"],
      correct: 0
    },
    {
      question: "What does \"Tarehy\" mean?",
      question_de: "Was bedeutet \"Tarehy\"?",
      question_fr: "Que signifie \"Tarehy\" ?",
      options: ["Broken (bone)", "Shoulder", "Headache", "Face"],
      options_de: ["Brust", "Wunde", "Herz", "Gesicht"],
      options_fr: ["Médicament", "Visage", "Cou", "Injection / Piqûre"],
      correct: 3
    },
    {
      question: "What does \"Tanana\" mean?",
      question_de: "Was bedeutet \"Tanana\"?",
      question_fr: "Que signifie \"Tanana\" ?",
      options: ["Disease", "Sick / Painful", "Arm / Hand", "Hospital"],
      options_de: ["Krankheit", "Zunge", "Arm / Hand", "Wunde"],
      options_fr: ["Bras / Main", "Maladie", "Fièvre", "Os"],
      correct: 2
    },
    {
      question: "What does \"Mandoa\" mean?",
      question_de: "Was bedeutet \"Mandoa\"?",
      question_fr: "Que signifie \"Mandoa\" ?",
      options: ["To vomit", "Mouth", "Headache", "Arm / Hand"],
      options_de: ["Wunde", "Knochen", "Kopfschmerzen", "Erbrechen"],
      options_fr: ["Injection / Piqûre", "Vomir", "Bras / Main", "Bouche"],
      correct: 0
    },
    {
      question: "What does \"Hopitaly\" mean?",
      question_de: "Was bedeutet \"Hopitaly\"?",
      question_fr: "Que signifie \"Hopitaly\" ?",
      options: ["Headache", "Hospital", "Doctor", "Wound"],
      options_de: ["Injektion / Spritze", "Krankenhaus", "Zahn / Zähne", "Knie"],
      options_fr: ["Maladie", "Visage", "Hôpital", "Peau"],
      correct: 1
    },
    {
      question: "What does \"Soroka\" mean?",
      question_de: "Was bedeutet \"Soroka\"?",
      question_fr: "Que signifie \"Soroka\" ?",
      options: ["Shoulder", "Neck", "Broken (bone)", "Stomach / Belly"],
      options_de: ["Medizin", "Schulter", "Kopfschmerzen", "Rücken"],
      options_fr: ["Peau", "Dent / Dents", "Médicament", "Épaule"],
      correct: 0
    },
    {
      question: "What does \"Fery\" mean?",
      question_de: "Was bedeutet \"Fery\"?",
      question_fr: "Que signifie \"Fery\" ?",
      options: ["Wound", "Stomach ache", "Fever", "Tongue"],
      options_de: ["Herz", "Ohr", "Rücken", "Wunde"],
      options_fr: ["Bouche", "Blessure", "Dos", "Dent / Dents"],
      correct: 0
    },
    {
      question: "What does \"Lamosina\" mean?",
      question_de: "Was bedeutet \"Lamosina\"?",
      question_fr: "Que signifie \"Lamosina\" ?",
      options: ["Wound", "Sick / Painful", "Skin", "Back"],
      options_de: ["Rücken", "Krankenhaus", "Knochen", "Krankheit"],
      options_fr: ["Mal de ventre", "Dos", "Vomir", "Tête"],
      correct: 3
    }
  ],
  shopping: [
    {
      question: "What does \"Mpiasa\" mean?",
      question_de: "Was bedeutet \"Mpiasa\"?",
      question_fr: "Que signifie \"Mpiasa\" ?",
      options: ["Vendor / Worker", "To be bought", "Price", "Cheap"],
      options_de: ["Preis", "Verkäufer / Arbeiter", "Produkt / Waren", "Großer Markt"],
      options_fr: ["Assez", "Moitié", "Kilo", "Vendeur / Travailleur"],
      correct: 0
    },
    {
      question: "What does \"Lafo\" mean?",
      question_de: "Was bedeutet \"Lafo\"?",
      question_fr: "Que signifie \"Lafo\" ?",
      options: ["Expensive", "Ariary (currency)", "Trade / Commerce", "Vendor / Worker"],
      options_de: ["Feilschen / Verhandeln", "Teuer", "Billig", "Markt"],
      options_fr: ["Ariary (monnaie)", "Cher", "Produit / Marchandises", "Combien"],
      correct: 0
    },
    {
      question: "What does \"Varotra\" mean?",
      question_de: "Was bedeutet \"Varotra\"?",
      question_fr: "Que signifie \"Varotra\" ?",
      options: ["To reduce / lower", "Trade / Commerce", "Market", "Ariary (currency)"],
      options_de: ["Handel", "Feilschen / Verhandeln", "Markt", "Preis"],
      options_fr: ["Vendre", "Commerce", "Ariary (monnaie)", "Juste / Seulement"],
      correct: 1
    },
    {
      question: "What does \"Kilao\" mean?",
      question_de: "Was bedeutet \"Kilao\"?",
      question_fr: "Que signifie \"Kilao\" ?",
      options: ["Big market", "Ariary (currency)", "One", "Kilo"],
      options_de: ["Reduzieren / Senken", "Kilo", "Großhandel kaufen", "Wie viel"],
      options_fr: ["Argent", "Kilo", "Grand marché", "Un"],
      correct: 3
    },
    {
      question: "What does \"Ariary\" mean?",
      question_de: "Was bedeutet \"Ariary\"?",
      question_fr: "Que signifie \"Ariary\" ?",
      options: ["To buy wholesale", "Half", "Customer", "Ariary (currency)"],
      options_de: ["Nicht genug", "Großhandel kaufen", "Kunde / Käufer", "Ariary (Währung)"],
      options_fr: ["Vendre", "Commerce", "Prix", "Ariary (monnaie)"],
      correct: 3
    },
    {
      question: "What does \"Vola\" mean?",
      question_de: "Was bedeutet \"Vola\"?",
      question_fr: "Que signifie \"Vola\" ?",
      options: ["Ariary (currency)", "Expensive", "Money", "Customer"],
      options_de: ["Hälfte", "Laden / Geschäft", "Geld", "Ariary (Währung)"],
      options_fr: ["Commerce", "Pas assez", "Acheter en gros", "Argent"],
      correct: 2
    },
    {
      question: "What does \"Miady varotra\" mean?",
      question_de: "Was bedeutet \"Miady varotra\"?",
      question_fr: "Que signifie \"Miady varotra\" ?",
      options: ["Trade / Commerce", "Customer", "To bargain / negotiate", "Big market"],
      options_de: ["Zwei", "Verkäufer / Arbeiter", "Preis", "Feilschen / Verhandeln"],
      options_fr: ["Marchander / Négocier", "Cher", "Vendeur / Travailleur", "Vendre"],
      correct: 2
    },
    {
      question: "What does \"Vidiny\" mean?",
      question_de: "Was bedeutet \"Vidiny\"?",
      question_fr: "Que signifie \"Vidiny\" ?",
      options: ["Half", "To buy", "To bargain / negotiate", "Price"],
      options_de: ["Laden / Geschäft", "Preis", "Markt", "Feilschen / Verhandeln"],
      options_fr: ["Grand marché", "Prix", "Bon marché", "Moitié"],
      correct: 3
    },
    {
      question: "What does \"Ohatrinona\" mean?",
      question_de: "Was bedeutet \"Ohatrinona\"?",
      question_fr: "Que signifie \"Ohatrinona\" ?",
      options: ["How much", "To look", "Expensive", "Just / Only"],
      options_de: ["Großhandel kaufen", "Wie viel", "Gekauft werden", "Billig"],
      options_fr: ["Combien", "Moitié", "Juste / Seulement", "Vendre"],
      correct: 0
    },
    {
      question: "What does \"Roa\" mean?",
      question_de: "Was bedeutet \"Roa\"?",
      question_fr: "Que signifie \"Roa\" ?",
      options: ["Two", "Market", "Not enough", "To look"],
      options_de: ["Kunde / Käufer", "Zwei", "Verkaufen", "Schauen"],
      options_fr: ["Grand marché", "Un", "Argent", "Deux"],
      correct: 0
    },
    {
      question: "What does \"Hividy\" mean?",
      question_de: "Was bedeutet \"Hividy\"?",
      question_fr: "Que signifie \"Hividy\" ?",
      options: ["To be bought", "To buy", "Market", "Trade / Commerce"],
      options_de: ["Zwei", "Kaufen", "Gekauft werden", "Handel"],
      options_fr: ["Être acheté", "Acheter", "Vendeur / Travailleur", "Réduire / Baisser"],
      correct: 1
    },
    {
      question: "What does \"Tsenabe\" mean?",
      question_de: "Was bedeutet \"Tsenabe\"?",
      question_fr: "Que signifie \"Tsenabe\" ?",
      options: ["Big market", "Vendor / Worker", "Customer", "Just / Only"],
      options_de: ["Vorrat / Bestand", "Nur / Bloß", "Großer Markt", "Teuer"],
      options_fr: ["Combien", "Acheter", "Grand marché", "Juste / Seulement"],
      correct: 0
    },
    {
      question: "What does \"Mpanjifa\" mean?",
      question_de: "Was bedeutet \"Mpanjifa\"?",
      question_fr: "Que signifie \"Mpanjifa\" ?",
      options: ["How much", "Customer", "Expensive", "One"],
      options_de: ["Eins", "Kunde", "Ariary (Währung)", "Zwei"],
      options_fr: ["Client", "Magasin / Boutique", "Acheter en gros", "Cher"],
      correct: 1
    },
    {
      question: "What does \"Antsasaky\" mean?",
      question_de: "Was bedeutet \"Antsasaky\"?",
      question_fr: "Que signifie \"Antsasaky\" ?",
      options: ["Enough", "Price", "Half", "Big market"],
      options_de: ["Kunde", "Hälfte", "Wie viel", "Geld"],
      options_fr: ["Bon marché", "Marchander / Négocier", "Acheter", "Moitié"],
      correct: 2
    },
    {
      question: "What does \"Tsy ampy\" mean?",
      question_de: "Was bedeutet \"Tsy ampy\"?",
      question_fr: "Que signifie \"Tsy ampy\" ?",
      options: ["Customer / Buyer", "Not enough", "To bargain / negotiate", "To look"],
      options_de: ["Nicht genug", "Kunde", "Hälfte", "Verkäufer / Arbeiter"],
      options_fr: ["Pas assez", "Client", "Ariary (monnaie)", "Juste / Seulement"],
      correct: 1
    }
  ],
  directions: [
    {
      question: "What does \"Halavirana\" mean?",
      question_de: "Was bedeutet \"Halavirana\"?",
      question_fr: "Que signifie \"Halavirana\" ?",
      options: ["Distance", "Camp / Station", "Bridge", "To arrive"],
      options_de: ["Verloren", "Straße / Weg", "Zurückkehren", "Entfernung"],
      options_fr: ["Tourner à droite", "Revenir", "Perdu", "Distance"],
      correct: 0
    },
    {
      question: "What does \"Avaratra\" mean?",
      question_de: "Was bedeutet \"Avaratra\"?",
      question_fr: "Que signifie \"Avaratra\" ?",
      options: ["Here", "North", "Bus", "Straight"],
      options_de: ["Norden", "Flughafen", "Ankommen", "Lager / Station"],
      options_fr: ["Tourner à gauche", "Bus", "Nord", "Pousse-pousse"],
      correct: 1
    },
    {
      question: "What does \"Pousse-pousse\" mean?",
      question_de: "Was bedeutet \"Pousse-pousse\"?",
      question_fr: "Que signifie \"Pousse-pousse\" ?",
      options: ["On foot", "Rickshaw", "East", "Near"],
      options_de: ["Flughafen", "Zu Fuß", "Geradeaus", "Rikscha"],
      options_fr: ["Pousse-pousse", "Distance", "Arriver", "Ouest"],
      correct: 1
    },
    {
      question: "What does \"Akaiky\" mean?",
      question_de: "Was bedeutet \"Akaiky\"?",
      question_fr: "Que signifie \"Akaiky\" ?",
      options: ["Near", "West", "On foot", "Crossroads / Intersection"],
      options_de: ["Süden", "Verloren", "Nah", "Rechts abbiegen"],
      options_fr: ["Pousse-pousse", "À pied", "Sud", "Près"],
      correct: 0
    },
    {
      question: "What does \"Atsimo\" mean?",
      question_de: "Was bedeutet \"Atsimo\"?",
      question_fr: "Que signifie \"Atsimo\" ?",
      options: ["There", "South", "On foot", "Big shared taxi"],
      options_de: ["Verloren", "Sammeltaxi / Buschtaxi", "Süden", "Hier"],
      options_fr: ["Distance", "Sud", "Carrefour / Intersection", "Tout droit"],
      correct: 1
    },
    {
      question: "What does \"Tonga\" mean?",
      question_de: "Was bedeutet \"Tonga\"?",
      question_fr: "Que signifie \"Tonga\" ?",
      options: ["There", "Camp / Station", "Big shared taxi", "To arrive"],
      options_de: ["Straße / Weg", "Gehen", "Ankommen", "Kreuzung"],
      options_fr: ["Nord", "Voiture / Véhicule", "Arriver", "Place du village"],
      correct: 3
    },
    {
      question: "What does \"Bus\" mean?",
      question_de: "Was bedeutet \"Bus\"?",
      question_fr: "Que signifie \"Bus\" ?",
      options: ["Far", "Road / Path", "Bus", "North"],
      options_de: ["Station / Haltestelle", "Lager / Station", "Zurückkehren", "Bus"],
      options_fr: ["Bus", "Place du village", "À pied", "Arriver"],
      correct: 2
    },
    {
      question: "What does \"Tanimbarotra\" mean?",
      question_de: "Was bedeutet \"Tanimbarotra\"?",
      question_fr: "Que signifie \"Tanimbarotra\" ?",
      options: ["Town square", "West", "Station / Stop", "There"],
      options_de: ["Dorfplatz", "Auto / Fahrzeug", "Sammeltaxi / Buschtaxi", "Dort"],
      options_fr: ["Bord de route", "Place du village", "Pousse-pousse", "Grand taxi collectif"],
      correct: 0
    },
    {
      question: "What does \"Very\" mean?",
      question_de: "Was bedeutet \"Very\"?",
      question_fr: "Que signifie \"Very\" ?",
      options: ["Big shared taxi", "Straight", "Lost", "Turn left"],
      options_de: ["Großes Sammeltaxi", "Süden", "Osten", "Verloren"],
      options_fr: ["Taxi-brousse", "Aéroport", "Carrefour / Intersection", "Perdu"],
      correct: 2
    },
    {
      question: "What does \"Miankavia\" mean?",
      question_de: "Was bedeutet \"Miankavia\"?",
      question_fr: "Que signifie \"Miankavia\" ?",
      options: ["Straight", "Turn left", "Near", "Distance"],
      options_de: ["Westen", "Links abbiegen", "Flughafen", "Zurückkehren"],
      options_fr: ["Arriver", "Distance", "Est", "Tourner à gauche"],
      correct: 1
    },
    {
      question: "What does \"Toby\" mean?",
      question_de: "Was bedeutet \"Toby\"?",
      question_fr: "Que signifie \"Toby\" ?",
      options: ["Camp / Station", "There", "Bridge", "Far"],
      options_de: ["Lager / Station", "Osten", "Norden", "Dorfplatz"],
      options_fr: ["Taxi-brousse", "Loin", "Tout droit", "Camp / Station"],
      correct: 0
    },
    {
      question: "What does \"Atsinanana\" mean?",
      question_de: "Was bedeutet \"Atsinanana\"?",
      question_fr: "Que signifie \"Atsinanana\" ?",
      options: ["Big shared taxi", "Shared taxi / Bush taxi", "East", "Crossroads / Intersection"],
      options_de: ["Entfernung", "Osten", "Ankommen", "Großes Sammeltaxi"],
      options_fr: ["Est", "Pousse-pousse", "Bord de route", "Distance"],
      correct: 2
    },
    {
      question: "What does \"Seranam-piaramanidina\" mean?",
      question_de: "Was bedeutet \"Seranam-piaramanidina\"?",
      question_fr: "Que signifie \"Seranam-piaramanidina\" ?",
      options: ["Distance", "Rickshaw", "Airport", "Roadside"],
      options_de: ["Westen", "Flughafen", "Bus", "Sammeltaxi / Buschtaxi"],
      options_fr: ["Sud", "Aéroport", "Taxi-brousse", "Près"],
      correct: 2
    },
    {
      question: "What does \"Mahitsy\" mean?",
      question_de: "Was bedeutet \"Mahitsy\"?",
      question_fr: "Que signifie \"Mahitsy\" ?",
      options: ["Straight", "North", "Town square", "Near"],
      options_de: ["Dorfplatz", "Gehen", "Großes Sammeltaxi", "Geradeaus"],
      options_fr: ["Bus", "Place du village", "Revenir", "Tout droit"],
      correct: 0
    },
    {
      question: "What does \"Fiara\" mean?",
      question_de: "Was bedeutet \"Fiara\"?",
      question_fr: "Que signifie \"Fiara\" ?",
      options: ["Station / Stop", "To arrive", "North", "Car / Vehicle"],
      options_de: ["Großes Sammeltaxi", "Zurückkehren", "Auto / Fahrzeug", "Straßenrand"],
      options_fr: ["Distance", "Place du village", "À pied", "Voiture / Véhicule"],
      correct: 3
    }
  ],
  weather: [
    {
      question: "What does \"Varatra\" mean?",
      question_de: "Was bedeutet \"Varatra\"?",
      question_fr: "Que signifie \"Varatra\" ?",
      options: ["Mud", "Hot", "Drought", "Lightning"],
      options_de: ["Regen", "Donner", "Wetter", "Blitz"],
      options_fr: ["Brouillard / Brume", "Tonnerre", "Éclair", "Glace / Gel"],
      correct: 3
    },
    {
      question: "What does \"Maina\" mean?",
      question_de: "Was bedeutet \"Maina\"?",
      question_fr: "Que signifie \"Maina\" ?",
      options: ["Drought", "Flood", "Dry", "Cyclone"],
      options_de: ["Blitz", "Wind", "Kalt", "Trocken"],
      options_fr: ["Inondation", "Chaud", "Sec", "Saison sèche (hiver)"],
      correct: 2
    },
    {
      question: "What does \"Orana\" mean?",
      question_de: "Was bedeutet \"Orana\"?",
      question_fr: "Que signifie \"Orana\" ?",
      options: ["Rain", "Rainbow", "Dry season (winter)", "Wind"],
      options_de: ["Schlamm", "Sonne", "Regen", "Wind"],
      options_fr: ["Saison sèche (hiver)", "Nuage", "Pluie", "Tonnerre"],
      correct: 0
    },
    {
      question: "What does \"Alina\" mean?",
      question_de: "Was bedeutet \"Alina\"?",
      question_fr: "Que signifie \"Alina\" ?",
      options: ["Hot", "Dry season (winter)", "Rainbow", "Night"],
      options_de: ["Nacht", "Nieselregen", "Jahreszeit / Jahr", "Donner"],
      options_fr: ["Jour / Temps", "Chaleur / Température", "Nuit", "Froid"],
      correct: 3
    },
    {
      question: "What does \"Ranomandry\" mean?",
      question_de: "Was bedeutet \"Ranomandry\"?",
      question_fr: "Que signifie \"Ranomandry\" ?",
      options: ["Ice / Frost", "Hot", "Cloud", "Sun"],
      options_de: ["Regenbogen", "Eis / Frost", "Nacht", "Abend"],
      options_fr: ["Chaleur / Température", "Froid", "Glace / Gel", "Pluie"],
      correct: 0
    },
    {
      question: "What does \"Mafana\" mean?",
      question_de: "Was bedeutet \"Mafana\"?",
      question_fr: "Que signifie \"Mafana\" ?",
      options: ["Mud", "Rainy season (summer)", "Thunder", "Hot"],
      options_de: ["Abend", "Regenzeit (Sommer)", "Wind", "Heiß"],
      options_fr: ["Soir", "Boue", "Chaud", "Tonnerre"],
      correct: 3
    },
    {
      question: "What does \"Masoandro\" mean?",
      question_de: "Was bedeutet \"Masoandro\"?",
      question_fr: "Que signifie \"Masoandro\" ?",
      options: ["Cyclone", "Drizzle", "Farming season", "Sun"],
      options_de: ["Überschwemmung", "Nass / Feucht", "Tag / Wetter", "Sonne"],
      options_fr: ["Nuage", "Saison / Année", "Soleil", "Saison sèche (hiver)"],
      correct: 3
    },
    {
      question: "What does \"Erika\" mean?",
      question_de: "Was bedeutet \"Erika\"?",
      question_fr: "Que signifie \"Erika\" ?",
      options: ["Dry season (winter)", "Ice / Frost", "Drizzle", "Flood"],
      options_de: ["Tag / Wetter", "Nass / Feucht", "Eis / Frost", "Nieselregen"],
      options_fr: ["Météo", "Vent", "Bruine", "Soir"],
      correct: 2
    },
    {
      question: "What does \"Maraina\" mean?",
      question_de: "Was bedeutet \"Maraina\"?",
      question_fr: "Que signifie \"Maraina\" ?",
      options: ["Evening", "Season / Year", "Morning", "Heat / Temperature"],
      options_de: ["Anbausaison", "Blitz", "Morgen", "Jahreszeit / Jahr"],
      options_fr: ["Éclair", "Jour / Temps", "Matin", "Nuage"],
      correct: 2
    },
    {
      question: "What does \"Taona\" mean?",
      question_de: "Was bedeutet \"Taona\"?",
      question_fr: "Que signifie \"Taona\" ?",
      options: ["Sun", "Ice / Frost", "Lightning", "Season / Year"],
      options_de: ["Regen", "Jahreszeit / Jahr", "Kalt", "Wolke"],
      options_fr: ["Sec", "Soleil", "Saison / Année", "Nuage"],
      correct: 3
    },
    {
      question: "What does \"Tselatra\" mean?",
      question_de: "Was bedeutet \"Tselatra\"?",
      question_fr: "Que signifie \"Tselatra\" ?",
      options: ["Flood", "Flash (of lightning)", "Rain", "Drizzle"],
      options_de: ["Blitz", "Wind", "Trockenzeit (Winter)", "Sonne"],
      options_fr: ["Jour / Temps", "Chaleur / Température", "Soir", "Éclair"],
      correct: 1
    },
    {
      question: "What does \"Rivotra\" mean?",
      question_de: "Was bedeutet \"Rivotra\"?",
      question_fr: "Que signifie \"Rivotra\" ?",
      options: ["Evening", "Drought", "Dry season (winter)", "Wind"],
      options_de: ["Nacht", "Wetter", "Wind", "Heiß"],
      options_fr: ["Sec", "Vent", "Matin", "Soleil"],
      correct: 3
    },
    {
      question: "What does \"Rahona\" mean?",
      question_de: "Was bedeutet \"Rahona\"?",
      question_fr: "Que signifie \"Rahona\" ?",
      options: ["Farming season", "Cloud", "Drought", "Lightning"],
      options_de: ["Wind", "Wolke", "Überschwemmung", "Kalt"],
      options_fr: ["Jour / Temps", "Chaud", "Nuage", "Froid"],
      correct: 1
    },
    {
      question: "What does \"Zavona\" mean?",
      question_de: "Was bedeutet \"Zavona\"?",
      question_fr: "Que signifie \"Zavona\" ?",
      options: ["Fog / Mist", "Mud", "Rainbow", "Drizzle"],
      options_de: ["Wolke", "Abend", "Nebel", "Morgen"],
      options_fr: ["Boue", "Brouillard / Brume", "Vent", "Soleil"],
      correct: 0
    },
    {
      question: "What does \"Mangatsiaka\" mean?",
      question_de: "Was bedeutet \"Mangatsiaka\"?",
      question_fr: "Que signifie \"Mangatsiaka\" ?",
      options: ["Wet / Humid", "Lightning", "Rainbow", "Cold"],
      options_de: ["Kalt", "Nebel", "Hitze / Temperatur", "Regenzeit (Sommer)"],
      options_fr: ["Chaleur / Température", "Froid", "Tonnerre", "Nuit"],
      correct: 3
    }
  ],
  clothing: [
    {
      question: "What does \"Loko\" mean?",
      question_de: "Was bedeutet \"Loko\"?",
      question_fr: "Que signifie \"Loko\" ?",
      options: ["Skirt", "To sew", "Raincoat", "Color"],
      options_de: ["Ausziehen", "Klein", "Schneider", "Farbe"],
      options_fr: ["Essayer", "Linceul en soie", "Couleur", "Robe / Vêtement"],
      correct: 3
    },
    {
      question: "What does \"Kiraro\" mean?",
      question_de: "Was bedeutet \"Kiraro\"?",
      question_fr: "Que signifie \"Kiraro\" ?",
      options: ["Shirt", "Shoes", "Medium", "To wear"],
      options_de: ["Halskette", "Schuhe", "Seidenes Leichentuch", "Honigfarben (Stoff)"],
      options_fr: ["Essayer", "Chaussures", "Lunettes", "Imperméable"],
      correct: 1
    },
    {
      question: "What does \"Hanandrana\" mean?",
      question_de: "Was bedeutet \"Hanandrana\"?",
      question_fr: "Que signifie \"Hanandrana\" ?",
      options: ["To take off", "Silk cloth", "Raincoat", "To try on"],
      options_de: ["Größe / Maß", "Honigfarben (Stoff)", "Anprobieren", "Seidenes Leichentuch"],
      options_fr: ["Moyen", "Essayer", "Couleur", "Chapeau"],
      correct: 3
    },
    {
      question: "What does \"Famantaranandro\" mean?",
      question_de: "Was bedeutet \"Famantaranandro\"?",
      question_fr: "Que signifie \"Famantaranandro\" ?",
      options: ["To wear", "Small", "Size / Measurement", "Watch / Clock"],
      options_de: ["Schuhe", "Uhr", "Klein", "Tragen"],
      options_fr: ["Montre / Horloge", "Lunettes", "Jupe", "Collier"],
      correct: 3
    },
    {
      question: "What does \"Solomaso\" mean?",
      question_de: "Was bedeutet \"Solomaso\"?",
      question_fr: "Que signifie \"Solomaso\" ?",
      options: ["Pants", "Glasses", "Ring", "Shirt"],
      options_de: ["Halskette", "Brille", "Traditionelles Wickeltuch", "Kleid / Kleidung"],
      options_fr: ["Pantalon", "Collier", "Lunettes", "Lamba traditionnel"],
      correct: 1
    },
    {
      question: "What does \"Palitao\" mean?",
      question_de: "Was bedeutet \"Palitao\"?",
      question_fr: "Que signifie \"Palitao\" ?",
      options: ["Small", "Jacket / Coat", "Tie", "Size / Measurement"],
      options_de: ["Rock", "Jacke / Mantel", "Hose", "Pullover"],
      options_fr: ["Couleur miel (tissu)", "Collier", "Chaussures", "Veste / Manteau"],
      correct: 1
    },
    {
      question: "What does \"Kely\" mean?",
      question_de: "Was bedeutet \"Kely\"?",
      question_fr: "Que signifie \"Kely\" ?",
      options: ["To sew", "Traditional wrap cloth", "Shoes", "Small"],
      options_de: ["Seidenstoff", "Klein", "Gürtel", "Hose"],
      options_fr: ["Montre / Horloge", "Imperméable", "Petit", "Couleur"],
      correct: 3
    },
    {
      question: "What does \"Zipo\" mean?",
      question_de: "Was bedeutet \"Zipo\"?",
      question_fr: "Que signifie \"Zipo\" ?",
      options: ["Skirt", "Large", "Watch / Clock", "Color"],
      options_de: ["Mittel", "Hemd", "Rock", "Seidenes Leichentuch"],
      options_fr: ["Grand", "Linceul en soie", "Jupe", "Lamba traditionnel"],
      correct: 0
    },
    {
      question: "What does \"Lamba\" mean?",
      question_de: "Was bedeutet \"Lamba\"?",
      question_fr: "Que signifie \"Lamba\" ?",
      options: ["Watch / Clock", "Glasses", "Silk burial shroud", "Traditional wrap cloth"],
      options_de: ["Brille", "Traditionelles Wickeltuch", "Socken", "Schuhe"],
      options_fr: ["Lamba traditionnel", "Taille / Mesure", "Imperméable", "Coudre"],
      correct: 3
    },
    {
      question: "What does \"Akanjo\" mean?",
      question_de: "Was bedeutet \"Akanjo\"?",
      question_fr: "Que signifie \"Akanjo\" ?",
      options: ["Sweater", "Dress / Clothing", "Honey-colored (cloth)", "Tie"],
      options_de: ["Kleid / Kleidung", "Seidenstoff", "Socken", "Anprobieren"],
      options_fr: ["Coudre", "Robe / Vêtement", "Essayer", "Chemise"],
      correct: 1
    },
    {
      question: "What does \"Manala\" mean?",
      question_de: "Was bedeutet \"Manala\"?",
      question_fr: "Que signifie \"Manala\" ?",
      options: ["Raincoat", "Size / Measurement", "Tie", "To take off"],
      options_de: ["Jacke / Mantel", "Nähen", "Hut", "Ausziehen"],
      options_fr: ["Pantalon", "Coudre", "Enlever", "Grand"],
      correct: 3
    },
    {
      question: "What does \"Lamba landy\" mean?",
      question_de: "Was bedeutet \"Lamba landy\"?",
      question_fr: "Que signifie \"Lamba landy\" ?",
      options: ["Silk cloth", "Shirt", "Raincoat", "Shoes"],
      options_de: ["Seidenstoff", "Mittel", "Klein", "Rock"],
      options_fr: ["Chaussettes", "Cravate", "Linceul en soie", "Tissu en soie"],
      correct: 0
    },
    {
      question: "What does \"Manjaitra\" mean?",
      question_de: "Was bedeutet \"Manjaitra\"?",
      question_fr: "Que signifie \"Manjaitra\" ?",
      options: ["Size / Measurement", "To sew", "Shoes", "Necklace"],
      options_de: ["Anprobieren", "Uhr", "Nähen", "Rock"],
      options_fr: ["Chemise", "Coudre", "Petit", "Chaussettes"],
      correct: 1
    },
    {
      question: "What does \"Kravaty\" mean?",
      question_de: "Was bedeutet \"Kravaty\"?",
      question_fr: "Que signifie \"Kravaty\" ?",
      options: ["Skirt", "Small", "Watch / Clock", "Tie"],
      options_de: ["Jacke / Mantel", "Farbe", "Pullover", "Krawatte"],
      options_fr: ["Lunettes", "Pantalon", "Moyen", "Cravate"],
      correct: 3
    },
    {
      question: "What does \"Akanjo ba\" mean?",
      question_de: "Was bedeutet \"Akanjo ba\"?",
      question_fr: "Que signifie \"Akanjo ba\" ?",
      options: ["Traditional wrap cloth", "Pants", "Small", "Sweater"],
      options_de: ["Socken", "Regenmantel", "Pullover", "Brille"],
      options_fr: ["Jupe", "Pull", "Chaussures", "Collier"],
      correct: 3
    }
  ],
  animals: [
    {
      question: "What does \"Reniala\" mean?",
      question_de: "Was bedeutet \"Reniala\"?",
      question_fr: "Que signifie \"Reniala\" ?",
      options: ["Baobab tree", "Lemur (ring-tailed)", "Animal", "Lake"],
      options_de: ["Meer / Ozean", "Blatt", "Tier", "Baobab"],
      options_fr: ["Abeille / Miel", "Baobab", "Caméléon", "Rivière"],
      correct: 0
    },
    {
      question: "What does \"Saka\" mean?",
      question_de: "Was bedeutet \"Saka\"?",
      question_fr: "Que signifie \"Saka\" ?",
      options: ["Baobab tree", "Bee / Honey", "Cat", "Sand"],
      options_de: ["Tier", "Fluss", "Chamäleon", "Katze"],
      options_fr: ["Crocodile", "Chat", "Indri (plus grand lémur)", "Caméléon"],
      correct: 2
    },
    {
      question: "What does \"Riandriana\" mean?",
      question_de: "Was bedeutet \"Riandriana\"?",
      question_fr: "Que signifie \"Riandriana\" ?",
      options: ["Waterfall", "Indri (largest lemur)", "Sifaka lemur", "Lake"],
      options_de: ["Frosch", "Wasserfall", "Sifaka", "Insekt"],
      options_fr: ["Cascade", "Lémur (à queue annelée)", "Forêt", "Mer / Océan"],
      correct: 0
    },
    {
      question: "What does \"Lalitra\" mean?",
      question_de: "Was bedeutet \"Lalitra\"?",
      question_fr: "Que signifie \"Lalitra\" ?",
      options: ["Flower", "Chicken", "Fly", "Cow / Zebu"],
      options_de: ["Mücke", "Chamäleon", "Fliege", "Meer / Ozean"],
      options_fr: ["Terre / Sol", "Mouche", "Lémur (à queue annelée)", "Animal"],
      correct: 2
    },
    {
      question: "What does \"Hazo\" mean?",
      question_de: "Was bedeutet \"Hazo\"?",
      question_fr: "Que signifie \"Hazo\" ?",
      options: ["Chameleon", "Grass", "Fly", "Tree / Wood"],
      options_de: ["Wasserfall", "Sand", "Baum / Holz", "Chamäleon"],
      options_fr: ["Serpent", "Arbre / Bois", "Poisson", "Indri (plus grand lémur)"],
      correct: 3
    },
    {
      question: "What does \"Ala\" mean?",
      question_de: "Was bedeutet \"Ala\"?",
      question_fr: "Que signifie \"Ala\" ?",
      options: ["Earth / Soil", "Mountain", "Cat", "Forest"],
      options_de: ["Fliege", "Meer / Ozean", "Sifaka", "Wald"],
      options_fr: ["Lac", "Rizière", "Forêt", "Chien"],
      correct: 3
    },
    {
      question: "What does \"Tanalahy\" mean?",
      question_de: "Was bedeutet \"Tanalahy\"?",
      question_fr: "Que signifie \"Tanalahy\" ?",
      options: ["Chameleon", "Chicken", "Stone / Rock", "Grass"],
      options_de: ["Chamäleon", "Fluss", "Baum / Holz", "Meer / Ozean"],
      options_fr: ["Poulet", "Mouche", "Poisson", "Caméléon"],
      correct: 0
    },
    {
      question: "What does \"Ahitra\" mean?",
      question_de: "Was bedeutet \"Ahitra\"?",
      question_fr: "Que signifie \"Ahitra\" ?",
      options: ["Flower", "Root", "Cow / Zebu", "Grass"],
      options_de: ["Blume", "Gras", "Schlange", "Sifaka"],
      options_fr: ["Vache / Zébu", "Mer / Océan", "Arbre / Bois", "Herbe"],
      correct: 3
    },
    {
      question: "What does \"Sifaka\" mean?",
      question_de: "Was bedeutet \"Sifaka\"?",
      question_fr: "Que signifie \"Sifaka\" ?",
      options: ["Dog", "Leaf", "Grass", "Sifaka lemur"],
      options_de: ["Erde / Boden", "See", "Sifaka", "Wurzel"],
      options_fr: ["Racine", "Grenouille", "Sifaka", "Lac"],
      correct: 3
    },
    {
      question: "What does \"Bibilava\" mean?",
      question_de: "Was bedeutet \"Bibilava\"?",
      question_fr: "Que signifie \"Bibilava\" ?",
      options: ["Mosquito", "Snake", "Fly", "Lemur (general)"],
      options_de: ["Schlange", "Biene / Honig", "Meer / Ozean", "Wurzel"],
      options_fr: ["Animal", "Serpent", "Grenouille", "Forêt"],
      correct: 1
    },
    {
      question: "What does \"Faka\" mean?",
      question_de: "Was bedeutet \"Faka\"?",
      question_fr: "Que signifie \"Faka\" ?",
      options: ["Indri (largest lemur)", "Frog", "Animal", "Root"],
      options_de: ["Fisch", "Erde / Boden", "Wurzel", "Biene / Honig"],
      options_fr: ["Poisson", "Lémur (à queue annelée)", "Herbe", "Racine"],
      correct: 3
    },
    {
      question: "What does \"Fasika\" mean?",
      question_de: "Was bedeutet \"Fasika\"?",
      question_fr: "Que signifie \"Fasika\" ?",
      options: ["Chameleon", "Sand", "Waterfall", "Fly"],
      options_de: ["Mücke", "Wald", "Sand", "Kuh / Zebu"],
      options_fr: ["Terre / Sol", "Sable", "Lac", "Racine"],
      correct: 1
    },
    {
      question: "What does \"Akoho\" mean?",
      question_de: "Was bedeutet \"Akoho\"?",
      question_fr: "Que signifie \"Akoho\" ?",
      options: ["Grass", "Indri (largest lemur)", "Sand", "Chicken"],
      options_de: ["Indri (größter Lemur)", "Fluss", "Sifaka", "Huhn"],
      options_fr: ["Montagne", "Poulet", "Rivière", "Caméléon"],
      correct: 3
    },
    {
      question: "What does \"Indri\" mean?",
      question_de: "Was bedeutet \"Indri\"?",
      question_fr: "Que signifie \"Indri\" ?",
      options: ["Animal", "Waterfall", "Cow / Zebu", "Indri (largest lemur)"],
      options_de: ["Reisfeld", "Wurzel", "Indri (größter Lemur)", "Vogel"],
      options_fr: ["Indri (plus grand lémur)", "Crocodile", "Arbre / Bois", "Chat"],
      correct: 3
    },
    {
      question: "What does \"Farihy\" mean?",
      question_de: "Was bedeutet \"Farihy\"?",
      question_fr: "Que signifie \"Farihy\" ?",
      options: ["Bird", "Leaf", "Bee / Honey", "Lake"],
      options_de: ["Krokodil", "Biene / Honig", "Reisfeld", "See"],
      options_fr: ["Herbe", "Lac", "Arbre / Bois", "Poulet"],
      correct: 3
    }
  ],
  money: [
    {
      question: "What does \"Karama\" mean?",
      question_de: "Was bedeutet \"Karama\"?",
      question_fr: "Que signifie \"Karama\" ?",
      options: ["Bank", "To be bought / Cost", "Salary / Wage", "One thousand"],
      options_de: ["Kostenlos", "Gehalt / Lohn", "Geld", "Ausleihen"],
      options_fr: ["Billets", "Dépenser", "Gratuit", "Salaire"],
      correct: 2
    },
    {
      question: "What does \"Zato\" mean?",
      question_de: "Was bedeutet \"Zato\"?",
      question_fr: "Que signifie \"Zato\" ?",
      options: ["Expense", "One hundred", "Bank", "Salary / Wage"],
      options_de: ["Ausgeben", "Einhundert", "Bank", "Schulden"],
      options_fr: ["Payer", "Revenu", "Être acheté / Coûter", "Cent"],
      correct: 1
    },
    {
      question: "What does \"Mivarotra\" mean?",
      question_de: "Was bedeutet \"Mivarotra\"?",
      question_fr: "Que signifie \"Mivarotra\" ?",
      options: ["To sell", "Change (remainder)", "One hundred thousand", "Debt / What is owed"],
      options_de: ["Gekauft werden / Kosten", "Verleihen", "Verkaufen", "Feilschen"],
      options_fr: ["Million", "Juste (prix)", "Vendre", "Petite monnaie / Pièces"],
      correct: 0
    },
    {
      question: "What does \"Arivo\" mean?",
      question_de: "Was bedeutet \"Arivo\"?",
      question_fr: "Que signifie \"Arivo\" ?",
      options: ["Salary / Wage", "Retail", "One thousand", "One hundred thousand"],
      options_de: ["Ausgeben", "Eintausend", "Ausgabe", "Einhundert"],
      options_fr: ["Salaire", "Monnaie (reste)", "Mille", "Prix final"],
      correct: 2
    },
    {
      question: "What does \"Ambiny\" mean?",
      question_de: "Was bedeutet \"Ambiny\"?",
      question_fr: "Que signifie \"Ambiny\" ?",
      options: ["One hundred", "One thousand", "To sell", "Change (remainder)"],
      options_de: ["Bezahlen", "Wechselgeld", "Gehalt / Lohn", "Ausleihen"],
      options_fr: ["Gros", "Argent", "Monnaie (reste)", "Salaire"],
      correct: 3
    },
    {
      question: "What does \"Mirary\" mean?",
      question_de: "Was bedeutet \"Mirary\"?",
      question_fr: "Que signifie \"Mirary\" ?",
      options: ["Expense", "Wholesale", "Fair / Just (price)", "To lend"],
      options_de: ["Zehntausend", "Verkaufen", "Fair / Gerecht (Preis)", "Einkommen"],
      options_fr: ["Petite monnaie / Pièces", "Dépenser", "Prix final", "Juste (prix)"],
      correct: 2
    },
    {
      question: "What does \"Mandoa\" mean?",
      question_de: "Was bedeutet \"Mandoa\"?",
      question_fr: "Que signifie \"Mandoa\" ?",
      options: ["To be bought / Cost", "One thousand", "One hundred", "To pay"],
      options_de: ["Kleingeld / Münzen", "Gekauft werden / Kosten", "Gebühr", "Bezahlen"],
      options_fr: ["Payer", "Million", "Dette / Ce qui est dû", "Mille"],
      correct: 3
    },
    {
      question: "What does \"Miady varotra\" mean?",
      question_de: "Was bedeutet \"Miady varotra\"?",
      question_fr: "Que signifie \"Miady varotra\" ?",
      options: ["Change (remainder)", "Fair / Just (price)", "To bargain", "Final price"],
      options_de: ["Einzelhandel", "Kleingeld / Münzen", "Ariary (MGA Währung)", "Feilschen"],
      options_fr: ["Économiser (argent)", "Marchander", "Prix final", "Monnaie (reste)"],
      correct: 2
    },
    {
      question: "What does \"Vidina\" mean?",
      question_de: "Was bedeutet \"Vidina\"?",
      question_fr: "Que signifie \"Vidina\" ?",
      options: ["One hundred thousand", "Expense", "To be bought / Cost", "To borrow"],
      options_de: ["Bank", "Gekauft werden / Kosten", "Kleingeld / Münzen", "Fair / Gerecht (Preis)"],
      options_fr: ["Marchander", "Petite monnaie / Pièces", "Juste (prix)", "Être acheté / Coûter"],
      correct: 2
    },
    {
      question: "What does \"Antony\" mean?",
      question_de: "Was bedeutet \"Antony\"?",
      question_fr: "Que signifie \"Antony\" ?",
      options: ["Fee / Charge", "Retail", "Paper money / Bills", "Reasonable (price)"],
      options_de: ["Gekauft werden / Kosten", "Kostenlos", "Einkommen", "Angemessen (Preis)"],
      options_fr: ["Juste (prix)", "Salaire", "Raisonnable (prix)", "Prix final"],
      correct: 3
    },
    {
      question: "What does \"Mindrana\" mean?",
      question_de: "Was bedeutet \"Mindrana\"?",
      question_fr: "Que signifie \"Mindrana\" ?",
      options: ["Retail", "Bank", "Fee / Charge", "To borrow"],
      options_de: ["Endpreis", "Ausgeben", "Ausleihen", "Einzelhandel"],
      options_fr: ["Emprunter", "Payer", "Banque", "Gros"],
      correct: 3
    },
    {
      question: "What does \"Vola\" mean?",
      question_de: "Was bedeutet \"Vola\"?",
      question_fr: "Que signifie \"Vola\" ?",
      options: ["To lend", "Free (no cost)", "Money", "To save (money)"],
      options_de: ["Kleingeld / Münzen", "Geld", "Ausleihen", "Million"],
      options_fr: ["Billets", "Dépenser", "Vendre", "Argent"],
      correct: 2
    },
    {
      question: "What does \"Banky\" mean?",
      question_de: "Was bedeutet \"Banky\"?",
      question_fr: "Que signifie \"Banky\" ?",
      options: ["Bank", "Million", "Reasonable (price)", "Money"],
      options_de: ["Papiergeld / Scheine", "Kleingeld / Münzen", "Bank", "Einkommen"],
      options_fr: ["Gratuit", "Banque", "Vendre", "Revenu"],
      correct: 0
    },
    {
      question: "What does \"Vola madinika\" mean?",
      question_de: "Was bedeutet \"Vola madinika\"?",
      question_fr: "Que signifie \"Vola madinika\" ?",
      options: ["Ten thousand", "Expense", "Small change / Coins", "Money"],
      options_de: ["Bezahlen", "Ausgabe", "Kleingeld / Münzen", "Papiergeld / Scheine"],
      options_fr: ["Dépenser", "Marchander", "Petite monnaie / Pièces", "Million"],
      correct: 2
    },
    {
      question: "What does \"Tapitrisa\" mean?",
      question_de: "Was bedeutet \"Tapitrisa\"?",
      question_fr: "Que signifie \"Tapitrisa\" ?",
      options: ["Bank", "To borrow", "Million", "Small change / Coins"],
      options_de: ["Eintausend", "Einhunderttausend", "Geld", "Million"],
      options_fr: ["Marchander", "Être acheté / Coûter", "Billets", "Million"],
      correct: 2
    }
  ],
  time: [
    {
      question: "What does \"Maharitra\" mean?",
      question_de: "Was bedeutet \"Maharitra\"?",
      question_fr: "Que signifie \"Maharitra\" ?",
      options: ["After that / Later", "To last / take (time)", "Next time", "Time / Moment"],
      options_de: ["Wie lange", "Pünktlich", "Dauern", "Sekunde"],
      options_fr: ["À l'heure", "Prochain", "Maintenant", "Durer / Prendre (temps)"],
      correct: 1
    },
    {
      question: "What does \"Aoriana\" mean?",
      question_de: "Was bedeutet \"Aoriana\"?",
      question_fr: "Que signifie \"Aoriana\" ?",
      options: ["Soon / Not long", "Weekly", "To wait", "Afterwards"],
      options_de: ["Stunde / Zeit", "Wöchentlich", "Danach", "Jetzt"],
      options_fr: ["Quotidien / Chaque jour", "Annuel", "Revenir", "Ensuite"],
      correct: 3
    },
    {
      question: "What does \"Amin'ny firy\" mean?",
      question_de: "Was bedeutet \"Amin'ny firy\"?",
      question_fr: "Que signifie \"Amin'ny firy\" ?",
      options: ["Monthly", "At what time", "Minute", "Time / Moment"],
      options_de: ["Pünktlich", "Um wie viel Uhr", "Vorherige", "Danach / Später"],
      options_fr: ["À quelle heure", "Fixer (une heure)", "Seconde", "Minute"],
      correct: 1
    },
    {
      question: "What does \"Manaraka\" mean?",
      question_de: "Was bedeutet \"Manaraka\"?",
      question_fr: "Que signifie \"Manaraka\" ?",
      options: ["At what time", "Next", "Afterwards", "Appointment / Reservation"],
      options_de: ["Monatlich", "Nächste", "Früh", "Zeit / Moment"],
      options_fr: ["Temps / Moment", "Maintenant", "Prochain", "Précédent"],
      correct: 1
    },
    {
      question: "What does \"Tara\" mean?",
      question_de: "Was bedeutet \"Tara\"?",
      question_fr: "Que signifie \"Tara\" ?",
      options: ["To return", "At what time", "Late", "Weekly"],
      options_de: ["Termin / Reservierung", "Zeit / Moment", "Spät", "Um wie viel Uhr"],
      options_fr: ["Seconde", "En retard", "La prochaine fois", "À l'avance"],
      correct: 2
    },
    {
      question: "What does \"Isan-kerinandro\" mean?",
      question_de: "Was bedeutet \"Isan-kerinandro\"?",
      question_fr: "Que signifie \"Isan-kerinandro\" ?",
      options: ["Appointment / Reservation", "Weekly", "Yearly", "Second"],
      options_de: ["Stunde (Dauer)", "Wöchentlich", "Nächste", "Sekunde"],
      options_fr: ["Prochain", "À l'heure", "À quelle heure", "Hebdomadaire"],
      correct: 1
    },
    {
      question: "What does \"Aloha\" mean?",
      question_de: "Was bedeutet \"Aloha\"?",
      question_fr: "Que signifie \"Aloha\" ?",
      options: ["How long", "On time", "Early", "At what time"],
      options_de: ["Täglich", "Warten", "Monatlich", "Früh"],
      options_fr: ["Prochain", "Hebdomadaire", "Tôt", "Attendre"],
      correct: 2
    },
    {
      question: "What does \"Segondra\" mean?",
      question_de: "Was bedeutet \"Segondra\"?",
      question_fr: "Que signifie \"Segondra\" ?",
      options: ["To set (a time)", "Next", "Second", "On time"],
      options_de: ["Zurückkehren", "Sekunde", "Stunde / Zeit", "Festlegen (Zeit)"],
      options_fr: ["Temps / Moment", "Ensuite", "Seconde", "Hebdomadaire"],
      correct: 2
    },
    {
      question: "What does \"Adiny\" mean?",
      question_de: "Was bedeutet \"Adiny\"?",
      question_fr: "Que signifie \"Adiny\" ?",
      options: ["Hour (duration)", "Time / Moment", "Minute", "How long"],
      options_de: ["Nächste", "Warte!", "Stunde (Dauer)", "Danach / Später"],
      options_fr: ["Réunion", "À l'avance", "Heure (durée)", "À l'heure"],
      correct: 0
    },
    {
      question: "What does \"Mialoha\" mean?",
      question_de: "Was bedeutet \"Mialoha\"?",
      question_fr: "Que signifie \"Mialoha\" ?",
      options: ["To return", "To wait", "In advance", "Hour / Time"],
      options_de: ["Im Voraus", "Früh", "Warte!", "Vorherige"],
      options_fr: ["À l'avance", "En retard", "Fixer (une heure)", "Maintenant"],
      correct: 2
    },
    {
      question: "What does \"Hiverina\" mean?",
      question_de: "Was bedeutet \"Hiverina\"?",
      question_fr: "Que signifie \"Hiverina\" ?",
      options: ["Time / Moment", "To return", "Hour (duration)", "Late"],
      options_de: ["Dauern", "Zurückkehren", "Warten", "Treffen"],
      options_fr: ["La prochaine fois", "Minute", "À l'heure", "Revenir"],
      correct: 1
    },
    {
      question: "What does \"Hafiriana\" mean?",
      question_de: "Was bedeutet \"Hafiriana\"?",
      question_fr: "Que signifie \"Hafiriana\" ?",
      options: ["How long", "Hour (duration)", "Wait!", "Previous"],
      options_de: ["Täglich", "Wie lange", "Pünktlich", "Dauern"],
      options_fr: ["Attendre", "Quotidien / Chaque jour", "Combien de temps", "Maintenant"],
      correct: 0
    },
    {
      question: "What does \"Aorian'izay\" mean?",
      question_de: "Was bedeutet \"Aorian'izay\"?",
      question_fr: "Que signifie \"Aorian'izay\" ?",
      options: ["After that / Later", "Afterwards", "Yearly", "In advance"],
      options_de: ["Danach / Später", "Monatlich", "Wöchentlich", "Vorherige"],
      options_fr: ["Réunion", "Après / Plus tard", "Ensuite", "Mensuel"],
      correct: 0
    },
    {
      question: "What does \"Isan'andro\" mean?",
      question_de: "Was bedeutet \"Isan'andro\"?",
      question_fr: "Que signifie \"Isan'andro\" ?",
      options: ["Yearly", "On time", "Daily / Every day", "To set (a time)"],
      options_de: ["Täglich", "Treffen", "Jährlich", "Warten"],
      options_fr: ["Seconde", "Réunion", "À quelle heure", "Quotidien / Chaque jour"],
      correct: 2
    },
    {
      question: "What does \"Fotoana\" mean?",
      question_de: "Was bedeutet \"Fotoana\"?",
      question_fr: "Que signifie \"Fotoana\" ?",
      options: ["Soon / Not long", "Time / Moment", "Appointment / Reservation", "Before that"],
      options_de: ["Wie lange", "Pünktlich", "Danach", "Zeit / Moment"],
      options_fr: ["Combien de temps", "Temps / Moment", "Maintenant", "Mensuel"],
      correct: 1
    }
  ],
  comparisons: [
    {
      question: "What does \"Noho\" mean?",
      question_de: "Was bedeutet \"Noho\"?",
      question_fr: "Que signifie \"Noho\" ?",
      options: ["Same / Equal", "Clean", "To compare", "Than"],
      options_de: ["Als", "Lang / Groß", "Sauber", "Wenige"],
      options_fr: ["Rapide", "Nouveau", "Que", "Cher"],
      correct: 3
    },
    {
      question: "What does \"Maro\" mean?",
      question_de: "Was bedeutet \"Maro\"?",
      question_fr: "Que signifie \"Maro\" ?",
      options: ["More (comparative)", "Long / Tall", "Than", "Many"],
      options_de: ["Vergleichen", "Klein", "Schwer", "Viele"],
      options_fr: ["Cher", "Bon", "Beaucoup", "Vieux"],
      correct: 3
    },
    {
      question: "What does \"Mitovy\" mean?",
      question_de: "Was bedeutet \"Mitovy\"?",
      question_fr: "Que signifie \"Mitovy\" ?",
      options: ["Heavy", "Dirty", "Same / Equal", "Many"],
      options_de: ["Gleich", "Schmutzig", "Lang / Groß", "Kurz"],
      options_fr: ["Lent", "Comparer", "Vraiment / Très", "Même / Égal"],
      correct: 2
    },
    {
      question: "What does \"Mifanohitra\" mean?",
      question_de: "Was bedeutet \"Mifanohitra\"?",
      question_fr: "Que signifie \"Mifanohitra\" ?",
      options: ["Than", "Opposite", "Good", "Old"],
      options_de: ["Gegenteil", "Wirklich / Sehr", "Wenige", "Teuer"],
      options_fr: ["Même / Égal", "Cher", "Opposé", "Propre"],
      correct: 1
    },
    {
      question: "What does \"Be loatra\" mean?",
      question_de: "Was bedeutet \"Be loatra\"?",
      question_fr: "Que signifie \"Be loatra\" ?",
      options: ["Same / Equal", "Heavy", "Too much / Excessive", "To compare"],
      options_de: ["Zu viel / Übermäßig", "Groß", "Wirklich / Sehr", "Leicht"],
      options_fr: ["Bon marché / Facile", "Court", "Trop / Excessif", "Vraiment / Très"],
      correct: 2
    },
    {
      question: "What does \"Vaovao\" mean?",
      question_de: "Was bedeutet \"Vaovao\"?",
      question_fr: "Que signifie \"Vaovao\" ?",
      options: ["Bad", "Really / Very", "New", "Than"],
      options_de: ["Langsam", "Leicht", "Neu", "Alt"],
      options_fr: ["Cher", "Peu", "Nouveau", "Comparer"],
      correct: 2
    },
    {
      question: "What does \"Miadana\" mean?",
      question_de: "Was bedeutet \"Miadana\"?",
      question_fr: "Que signifie \"Miadana\" ?",
      options: ["New", "Almost", "Far / Much (intensifier)", "Slow"],
      options_de: ["Gegenteil", "Langsam", "Etwas / Ein bisschen", "Viele"],
      options_fr: ["Comparer", "Opposé", "Lent", "Sale"],
      correct: 3
    },
    {
      question: "What does \"Madio\" mean?",
      question_de: "Was bedeutet \"Madio\"?",
      question_fr: "Que signifie \"Madio\" ?",
      options: ["Too much / Excessive", "Clean", "To compare", "Almost"],
      options_de: ["Am meisten (Superlativ)", "Schwer", "Schlecht", "Sauber"],
      options_fr: ["Lent", "Plus (comparatif)", "Opposé", "Propre"],
      correct: 1
    },
    {
      question: "What does \"Mora\" mean?",
      question_de: "Was bedeutet \"Mora\"?",
      question_fr: "Que signifie \"Mora\" ?",
      options: ["Than", "Cheap / Easy", "More (comparative)", "Really / Very"],
      options_de: ["Billig / Einfach", "Sauber", "Viele", "Teuer"],
      options_fr: ["Bon", "Bon marché / Facile", "Mauvais", "Plus (comparatif)"],
      correct: 1
    },
    {
      question: "What does \"Somary\" mean?",
      question_de: "Was bedeutet \"Somary\"?",
      question_fr: "Que signifie \"Somary\" ?",
      options: ["Cheap / Easy", "Somewhat / A bit", "Bad", "Heavy"],
      options_de: ["Klein", "Als", "Mehr (Komparativ)", "Etwas / Ein bisschen"],
      options_fr: ["Que", "Lent", "Un peu", "Vieux"],
      correct: 1
    },
    {
      question: "What does \"Saika\" mean?",
      question_de: "Was bedeutet \"Saika\"?",
      question_fr: "Que signifie \"Saika\" ?",
      options: ["Light (weight)", "Few", "Almost", "Really / Very"],
      options_de: ["Viele", "Neu", "Wenige", "Fast"],
      options_fr: ["Léger", "Presque", "Propre", "Comparer"],
      correct: 2
    },
    {
      question: "What does \"Haingana\" mean?",
      question_de: "Was bedeutet \"Haingana\"?",
      question_fr: "Que signifie \"Haingana\" ?",
      options: ["Cheap / Easy", "Light (weight)", "Almost", "Fast"],
      options_de: ["Schnell", "Zu viel / Übermäßig", "Lang / Groß", "Weit / Viel (Verstärker)"],
      options_fr: ["Vraiment / Très", "Nouveau", "Rapide", "Lourd"],
      correct: 3
    },
    {
      question: "What does \"Maloto\" mean?",
      question_de: "Was bedeutet \"Maloto\"?",
      question_fr: "Que signifie \"Maloto\" ?",
      options: ["Too much / Excessive", "Old", "Good", "Dirty"],
      options_de: ["Vergleichen", "Teuer", "Schmutzig", "Langsam"],
      options_fr: ["Plus (comparatif)", "Léger", "Beaucoup", "Sale"],
      correct: 3
    },
    {
      question: "What does \"Lafo\" mean?",
      question_de: "Was bedeutet \"Lafo\"?",
      question_fr: "Que signifie \"Lafo\" ?",
      options: ["Expensive", "Long / Tall", "Too much / Excessive", "Most (superlative)"],
      options_de: ["Weit / Viel (Verstärker)", "Etwas / Ein bisschen", "Teuer", "Gut"],
      options_fr: ["Cher", "Rapide", "Bon marché / Facile", "Bon"],
      correct: 0
    },
    {
      question: "What does \"Mampitaha\" mean?",
      question_de: "Was bedeutet \"Mampitaha\"?",
      question_fr: "Que signifie \"Mampitaha\" ?",
      options: ["Same / Equal", "Slow", "Somewhat / A bit", "To compare"],
      options_de: ["Schnell", "Fast", "Alt", "Vergleichen"],
      options_fr: ["Vraiment / Très", "Comparer", "Grand", "Beaucoup"],
      correct: 3
    }
  ]
};
