// ============================================
// MALAGASY LEARNING APP — LESSON DATA
// Easy to extend: just add a new object to the LESSONS array
// ============================================

const LESSONS = [

  {
    id: "intro",
    title: "Introduction to Malagasy",
    emoji: "🇲🇬",
    category: "basics",
    description: "Overview of the language, its origins, and what makes it unique.",
    cards: [
      {
        front: "Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago.",
        back: "Malagasy Origin",
        front_de: "Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago.",
        front_fr: "Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago."
      },
      {
        front: "Over 14 million speakers across Madagascar and Mayotte.",
        back: "Speakers",
        front_de: "Over 14 million speakers across Madagascar and Mayotte.",
        front_fr: "Over 14 million speakers across Madagascar and Mayotte."
      },
      {
        front: "18 regional dialects. Standard = Merina (Antananarivo).",
        back: "Dialects",
        front_de: "18 regional dialects. Standard = Merina (Antananarivo).",
        front_fr: "18 regional dialects. Standard = Merina (Antananarivo)."
      },
      {
        front: "Latin alphabet. No C, Q, U, W, X. Pronunciation is phonetic.",
        back: "Alphabet",
        front_de: "Latin alphabet. No C, Q, U, W, X. Pronunciation is phonetic.",
        front_fr: "Latin alphabet. No C, Q, U, W, X. Pronunciation is phonetic."
      },
      {
        front: "VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I.",
        back: "Word Order",
        front_de: "VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I.",
        front_fr: "VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I."
      },
      {
        front: "Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'.",
        back: "No verb 'to be'",
        front_de: "Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'.",
        front_fr: "Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'."
      }
    ],
    vocab: [
      {
        malagasy: "Malagasy",
        english: "The Malagasy language",
        german: "Die madagassische Sprache",
        french: "La langue malgache"
      },
      {
        malagasy: "Madagasikara",
        english: "Madagascar",
        german: "Madagaskar",
        french: "Madagascar"
      },
      {
        malagasy: "teny",
        english: "language / words",
        german: "Sprache / Wörter",
        french: "langue / mots"
      }
    ],
  },
  {
    id: "alphabet",
    title: "The Alphabet & Sounds",
    emoji: "🔤",
    category: "basics",
    description: "Learn the 4 vowel sounds and key consonant clusters.",
    cards: [
      {
        front: "Sounds like 'a' in Father. Examples: Salama, Manana",
        back: "A [a]",
        front_de: "Sounds like 'a' in Father. Examples: Salama, Manana",
        front_fr: "Sounds like 'a' in Father. Examples: Salama, Manana"
      },
      {
        front: "Sounds like 'ay' in made/pay. Examples: Veloma, teny, enina",
        back: "E [ei]",
        front_de: "Sounds like 'ay' in made/pay. Examples: Veloma, teny, enina",
        front_fr: "Sounds like 'ay' in made/pay. Examples: Veloma, teny, enina"
      },
      {
        front: "Sounds like 'ee' in keep. Examples: Misy, mipetraka, tsia",
        back: "I / Y [i:]",
        front_de: "Sounds like 'ee' in keep. Examples: Misy, mipetraka, tsia",
        front_fr: "Sounds like 'ee' in keep. Examples: Misy, mipetraka, tsia"
      },
      {
        front: "Sounds like 'oo' in pool. Examples: Aho, Voky",
        back: "O [o/u]",
        front_de: "Sounds like 'oo' in pool. Examples: Aho, Voky",
        front_fr: "Sounds like 'oo' in pool. Examples: Aho, Voky"
      },
      {
        front: "Difficult diphthong. Example: vaovao (new), tratra (chest)",
        back: "ao",
        front_de: "Difficult diphthong. Example: vaovao (new), tratra (chest)",
        front_fr: "Difficult diphthong. Example: vaovao (new), tratra (chest)"
      },
      {
        front: "Difficult diphthong. Example: soa (good)",
        back: "oa",
        front_de: "Difficult diphthong. Example: soa (good)",
        front_fr: "Difficult diphthong. Example: soa (good)"
      },
      {
        front: "Affricate. Example: tsotra (simple)",
        back: "ts",
        front_de: "Affricate. Example: tsotra (simple)",
        front_fr: "Affricate. Example: tsotra (simple)"
      },
      {
        front: "Pronounced together. Example: drafitra (draft)",
        back: "dr",
        front_de: "Pronounced together. Example: drafitra (draft)",
        front_fr: "Pronounced together. Example: drafitra (draft)"
      },
      {
        front: "Example: Indrindra (especially)",
        back: "ndr",
        front_de: "Example: Indrindra (especially)",
        front_fr: "Example: Indrindra (especially)"
      },
      {
        front: "Example: onja (wave)",
        back: "nj",
        front_de: "Example: onja (wave)",
        front_fr: "Example: onja (wave)"
      }
    ],
    vocab: [
      {
        malagasy: "Salama",
        english: "Hello",
        german: "Hallo",
        french: "Bonjour"
      },
      {
        malagasy: "Manana",
        english: "to have",
        german: "haben",
        french: "avoir"
      },
      {
        malagasy: "Veloma",
        english: "Bye!",
        german: "Tschüss!",
        french: "Au revoir !"
      },
      {
        malagasy: "Misy",
        english: "there is",
        german: "es gibt",
        french: "il y a"
      },
      {
        malagasy: "Aho",
        english: "I",
        german: "ich",
        french: "je"
      },
      {
        malagasy: "Voky",
        english: "full",
        german: "voll / satt",
        french: "plein / rassasié"
      },
      {
        malagasy: "vaovao",
        english: "new",
        german: "neu",
        french: "nouveau"
      },
      {
        malagasy: "soa",
        english: "good",
        german: "gut",
        french: "bon"
      },
      {
        malagasy: "vaovao",
        english: "new (news)",
        german: "neu (Nachrichten)",
        french: "nouveau (nouvelles)"
      },
      {
        malagasy: "tratra",
        english: "chest",
        german: "Brust",
        french: "poitrine"
      },
      {
        malagasy: "tsotra",
        english: "simple",
        german: "einfach",
        french: "simple"
      },
      {
        malagasy: "Indrindra",
        english: "especially",
        german: "besonders",
        french: "surtout"
      },
      {
        malagasy: "onja",
        english: "wave",
        german: "Welle",
        french: "vague"
      },
      {
        malagasy: "drafitra",
        english: "draft",
        german: "Entwurf",
        french: "brouillon"
      }
    ],
  },
  {
    id: "greetings",
    title: "Greetings",
    emoji: "👋",
    category: "conversation",
    description: "Essential greetings and polite expressions.",
    cards: [
      {
        front: "Hello!",
        back: "Manahoana?",
        front_de: "Hello!",
        front_fr: "Hello!"
      },
      {
        front: "Hi!",
        back: "Salama!",
        front_de: "Hi!",
        front_fr: "Hi!"
      },
      {
        front: "What's up?",
        back: "Inona no vaovao?",
        front_de: "What's up?",
        front_fr: "What's up?"
      },
      {
        front: "Nothing special!",
        back: "Tsy misy!",
        front_de: "Nothing special!",
        front_fr: "Nothing special!"
      },
      {
        front: "How are you?",
        back: "Fahasalamana?",
        front_de: "How are you?",
        front_fr: "How are you?"
      },
      {
        front: "I'm OK. Thanks.",
        back: "Tsara fa misaotra!",
        front_de: "I'm OK. Thanks.",
        front_fr: "I'm OK. Thanks."
      },
      {
        front: "Welcome!",
        back: "Tonga soa!",
        front_de: "Welcome!",
        front_fr: "Welcome!"
      },
      {
        front: "Bye!",
        back: "Veloma!",
        front_de: "Bye!",
        front_fr: "Bye!"
      },
      {
        front: "Thanks!",
        back: "Misaotra!",
        front_de: "Thanks!",
        front_fr: "Thanks!"
      },
      {
        front: "Please / Sorry!",
        back: "Azafady!",
        front_de: "Please / Sorry!",
        front_fr: "Please / Sorry!"
      },
      {
        front: "Please / Sorry! (formal)",
        back: "Miala tsiny!",
        front_de: "Please / Sorry! (formal)",
        front_fr: "Please / Sorry! (formal)"
      },
      {
        front: "No problem!",
        back: "Tsy misy olana!",
        front_de: "No problem!",
        front_fr: "No problem!"
      }
    ],
    vocab: [
      {
        malagasy: "Manahoana",
        english: "Hello",
        german: "Hallo",
        french: "Bonjour"
      },
      {
        malagasy: "Salama",
        english: "Hi / Health",
        german: "Hi / Gesundheit",
        french: "Salut / Santé"
      },
      {
        malagasy: "vaovao",
        english: "news / new",
        german: "Nachrichten / neu",
        french: "nouvelles / nouveau"
      },
      {
        malagasy: "Fahasalamana",
        english: "health / How are you?",
        german: "Gesundheit / Wie geht's?",
        french: "santé / Comment allez-vous ?"
      },
      {
        malagasy: "Tsara",
        english: "good / OK",
        german: "gut / OK",
        french: "bien / OK"
      },
      {
        malagasy: "misaotra",
        english: "thank you",
        german: "danke",
        french: "merci"
      },
      {
        malagasy: "Tonga soa",
        english: "Welcome",
        german: "Willkommen",
        french: "Bienvenue"
      },
      {
        malagasy: "Veloma",
        english: "Goodbye",
        german: "Auf Wiedersehen",
        french: "Au revoir"
      },
      {
        malagasy: "Azafady",
        english: "Please / Sorry / Excuse me",
        german: "Bitte / Entschuldigung",
        french: "S'il vous plaît / Pardon"
      },
      {
        malagasy: "Miala tsiny",
        english: "Please / Sorry (formal)",
        german: "Bitte / Entschuldigung (formell)",
        french: "Pardon (formel)"
      },
      {
        malagasy: "olana",
        english: "problem",
        german: "Problem",
        french: "problème"
      },
      {
        malagasy: "Salama ohatran'ny",
        english: "Hello to you too",
        german: "Hallo auch an dich",
        french: "Bonjour à vous aussi"
      },
      {
        malagasy: "Manao ahoana",
        english: "How are you doing?",
        german: "Wie geht es dir?",
        french: "Comment allez-vous ?"
      },
      {
        malagasy: "Tsara be",
        english: "Very well",
        german: "Sehr gut",
        french: "Très bien"
      },
      {
        malagasy: "Tsy dia tsara",
        english: "Not so well",
        german: "Nicht so gut",
        french: "Pas très bien"
      },
      {
        malagasy: "Aza ny manahy",
        english: "Don't worry",
        german: "Keine Sorge",
        french: "Ne vous inquiétez pas"
      },
      {
        malagasy: "Sambatra",
        english: "Lucky / Blessed",
        german: "Glücklich / Gesegnet",
        french: "Chanceux / Béni"
      },
      {
        malagasy: "Miarahaba",
        english: "Greet / Salute",
        german: "Grüßen",
        french: "Saluer"
      },
      {
        malagasy: "Faly",
        english: "Happy / Glad",
        german: "Glücklich / Froh",
        french: "Heureux / Content"
      },
      {
        malagasy: "Tsy misy",
        english: "There is not / Nothing",
        german: "Es gibt nicht / Nichts",
        french: "Il n'y a pas / Rien"
      }
    ],
  },
  {
    id: "introductions",
    title: "Introductions",
    emoji: "🤝",
    category: "conversation",
    description: "Introducing yourself and asking about others.",
    cards: [
      {
        front: "What is your name?",
        back: "Iza no anaranao?",
        front_de: "What is your name?",
        front_fr: "What is your name?"
      },
      {
        front: "My name is ____, and yours?",
        back: "____ no anarako, ary ianao?",
        front_de: "My name is ____, and yours?",
        front_fr: "My name is ____, and yours?"
      },
      {
        front: "Happy to meet you!",
        back: "Faly mahalala anao!",
        front_de: "Happy to meet you!",
        front_fr: "Happy to meet you!"
      },
      {
        front: "Where are you from?",
        back: "Avy aiza ianao?",
        front_de: "Where are you from?",
        front_fr: "Where are you from?"
      },
      {
        front: "I am from USA.",
        back: "Avy any Etazonia aho.",
        front_de: "I am from USA.",
        front_fr: "I am from USA."
      },
      {
        front: "What is your job? / What do you do?",
        back: "Inona ny asanao?",
        front_de: "What is your job? / What do you do?",
        front_fr: "What is your job? / What do you do?"
      },
      {
        front: "I am a trainee.",
        back: "Mpiofana aho.",
        front_de: "I am a trainee.",
        front_fr: "I am a trainee."
      },
      {
        front: "I learn Malagasy.",
        back: "Mianatra teny Malagasy aho.",
        front_de: "I learn Malagasy.",
        front_fr: "I learn Malagasy."
      },
      {
        front: "Where will you stay?",
        back: "Hipetraka aiza ianao?",
        front_de: "Where will you stay?",
        front_fr: "Where will you stay?"
      },
      {
        front: "See you later!",
        back: "Mandrapihaona!",
        front_de: "See you later!",
        front_fr: "See you later!"
      }
    ],
    vocab: [
      {
        malagasy: "anarana",
        english: "name",
        german: "Name",
        french: "nom"
      },
      {
        malagasy: "avy aiza",
        english: "from where",
        german: "woher",
        french: "d'où"
      },
      {
        malagasy: "Etazonia",
        english: "USA",
        german: "USA",
        french: "États-Unis"
      },
      {
        malagasy: "asa",
        english: "work / job",
        german: "Arbeit / Beruf",
        french: "travail / métier"
      },
      {
        malagasy: "Mpiofana",
        english: "trainee",
        german: "Praktikant",
        french: "stagiaire"
      },
      {
        malagasy: "mianatra",
        english: "to learn",
        german: "lernen",
        french: "apprendre"
      },
      {
        malagasy: "mipetraka",
        english: "to live / to sit",
        german: "wohnen / sitzen",
        french: "habiter / s'asseoir"
      },
      {
        malagasy: "Mandrapihaona",
        english: "See you later",
        german: "Bis später",
        french: "À plus tard"
      },
      {
        malagasy: "Frantsay",
        english: "French",
        german: "Französisch",
        french: "Français"
      },
      {
        malagasy: "Anglisy",
        english: "English",
        german: "Englisch",
        french: "Anglais"
      },
      {
        malagasy: "teny",
        english: "language / word",
        german: "Sprache / Wort",
        french: "langue / mot"
      },
      {
        malagasy: "mpianatra",
        english: "student",
        german: "Student",
        french: "étudiant"
      },
      {
        malagasy: "mpampianatra",
        english: "teacher",
        german: "Lehrer",
        french: "professeur"
      },
      {
        malagasy: "dokotera",
        english: "doctor",
        german: "Arzt",
        french: "médecin"
      },
      {
        malagasy: "mpiasa",
        english: "worker",
        german: "Arbeiter",
        french: "travailleur"
      },
      {
        malagasy: "mpanjara",
        english: "volunteer",
        german: "Freiwilliger",
        french: "bénévole"
      },
      {
        malagasy: "mpitari-dalana",
        english: "tour guide",
        german: "Reiseführer",
        french: "guide touristique"
      },
      {
        malagasy: "tompon'asa",
        english: "employer",
        german: "Arbeitgeber",
        french: "employeur"
      },
      {
        malagasy: "mpiasa an-trano",
        english: "housekeeper",
        german: "Haushälter/in",
        french: "femme/homme de ménage"
      },
      {
        malagasy: "mpiambina",
        english: "guard",
        german: "Wächter",
        french: "gardien"
      },
      {
        malagasy: "sakaizana",
        english: "acquaintance",
        german: "Bekannter",
        french: "connaissance"
      }
    ],
  },
  {
    id: "family",
    title: "Family",
    emoji: "👨‍👩‍👧‍👦",
    category: "vocabulary",
    description: "Family members and relationships.",
    cards: [
      {
        front: "Family",
        back: "Fianakaviana",
        front_de: "Family",
        front_fr: "Family"
      },
      {
        front: "Father",
        back: "Dada",
        front_de: "Father",
        front_fr: "Father"
      },
      {
        front: "Mother",
        back: "Neny",
        front_de: "Mother",
        front_fr: "Mother"
      },
      {
        front: "Older siblings",
        back: "Zoky",
        front_de: "Older siblings",
        front_fr: "Older siblings"
      },
      {
        front: "Younger siblings",
        back: "Zandry",
        front_de: "Younger siblings",
        front_fr: "Younger siblings"
      },
      {
        front: "Grandfather",
        back: "Dadabe",
        front_de: "Grandfather",
        front_fr: "Grandfather"
      },
      {
        front: "Grandmother",
        back: "Nenibe",
        front_de: "Grandmother",
        front_fr: "Grandmother"
      },
      {
        front: "Children",
        back: "Zanaka",
        front_de: "Children",
        front_fr: "Children"
      },
      {
        front: "To be married",
        back: "Manam-bady",
        front_de: "To be married",
        front_fr: "To be married"
      },
      {
        front: "Single child",
        back: "Zaza tokana",
        front_de: "Single child",
        front_fr: "Single child"
      },
      {
        front: "Twins",
        back: "Kambana",
        front_de: "Twins",
        front_fr: "Twins"
      },
      {
        front: "Boy/girlfriend",
        back: "Sipa",
        front_de: "Boy/girlfriend",
        front_fr: "Boy/girlfriend"
      },
      {
        front: "Friend",
        back: "Namana",
        front_de: "Friend",
        front_fr: "Friend"
      },
      {
        front: "To be separated",
        back: "Nisaraka",
        front_de: "To be separated",
        front_fr: "To be separated"
      },
      {
        front: "To have",
        back: "Manana",
        front_de: "To have",
        front_fr: "To have"
      }
    ],
    vocab: [
      {
        malagasy: "Fianakaviana",
        english: "Family",
        german: "Familie",
        french: "Famille"
      },
      {
        malagasy: "Dada",
        english: "Father",
        german: "Vater",
        french: "Père"
      },
      {
        malagasy: "Neny",
        english: "Mother",
        german: "Mutter",
        french: "Mère"
      },
      {
        malagasy: "Zoky",
        english: "Older sibling",
        german: "älteres Geschwister",
        french: "frère/soeur aîné(e)"
      },
      {
        malagasy: "Zandry",
        english: "Younger sibling",
        german: "jüngeres Geschwister",
        french: "frère/soeur cadet(te)"
      },
      {
        malagasy: "Zanaka",
        english: "Child",
        german: "Kind",
        french: "Enfant"
      },
      {
        malagasy: "Namana",
        english: "Friend",
        german: "Freund",
        french: "Ami"
      },
      {
        malagasy: "Dadabe",
        english: "Grandfather",
        german: "Großvater",
        french: "Grand-père"
      },
      {
        malagasy: "Nenibe",
        english: "Grandmother",
        german: "Großmutter",
        french: "Grand-mère"
      },
      {
        malagasy: "Manam-bady",
        english: "To be married",
        german: "Verheiratet sein",
        french: "Être marié"
      },
      {
        malagasy: "Zaza tokana",
        english: "Single child",
        german: "Einzelkind",
        french: "Enfant unique"
      },
      {
        malagasy: "Kambana",
        english: "Twins",
        german: "Zwillinge",
        french: "Jumeaux"
      },
      {
        malagasy: "Sipa",
        english: "Boyfriend / Girlfriend",
        german: "Freund / Freundin",
        french: "Petit ami / Petite amie"
      },
      {
        malagasy: "Nisaraka",
        english: "To be separated",
        german: "Getrennt sein",
        french: "Être séparé"
      },
      {
        malagasy: "Manana",
        english: "To have",
        german: "Haben",
        french: "Avoir"
      },
      {
        malagasy: "Raimandreny",
        english: "Parents",
        german: "Eltern",
        french: "Parents"
      },
      {
        malagasy: "Anabavy",
        english: "Sister",
        german: "Schwester",
        french: "Soeur"
      },
      {
        malagasy: "Anadahy",
        english: "Brother",
        german: "Bruder",
        french: "Frère"
      },
      {
        malagasy: "Vavy",
        english: "Wife",
        german: "Ehefrau",
        french: "Femme / Épouse"
      },
      {
        malagasy: "Vady",
        english: "Husband / Spouse",
        german: "Ehemann / Ehepartner",
        french: "Mari / Époux"
      },
      {
        malagasy: "Zanaka vavy",
        english: "Daughter",
        german: "Tochter",
        french: "Fille"
      },
      {
        malagasy: "Zanaka lahy",
        english: "Son",
        german: "Sohn",
        french: "Fils"
      },
      {
        malagasy: "Menaky",
        english: "Cousin",
        german: "Cousin/Cousine",
        french: "Cousin(e)"
      },
      {
        malagasy: "Rafozanaka",
        english: "Nephew / Niece",
        german: "Neffe / Nichte",
        french: "Neveu / Nièce"
      },
      {
        malagasy: "Mpianakavy",
        english: "Household",
        german: "Haushalt",
        french: "Foyer"
      },
      {
        malagasy: "Mponina",
        english: "Resident / Inhabitant",
        german: "Bewohner / Einwohner",
        french: "Résident / Habitant"
      },
      {
        malagasy: "Tompokambana",
        english: "Twin sibling",
        german: "Zwillingsgeschwister",
        french: "Jumeau/Jumelle"
      },
      {
        malagasy: "Zokiolona",
        english: "Elder / Senior",
        german: "Älterer / Senior",
        french: "Aîné / Senior"
      },
      {
        malagasy: "Ankizy",
        english: "Kid / Young person",
        german: "Kind / Jugendlicher",
        french: "Enfant / Jeune"
      },
      {
        malagasy: "Mitaiza",
        english: "To raise (children)",
        german: "Kinder großziehen",
        french: "Élever (des enfants)"
      },
      {
        malagasy: "Miteraka",
        english: "To give birth",
        german: "Gebären",
        french: "Donner naissance"
      },
      {
        malagasy: "Teraka",
        english: "Born",
        german: "Geboren",
        french: "Né"
      },
      {
        malagasy: "Taona",
        english: "Age / Year",
        german: "Alter / Jahr",
        french: "Âge / Année"
      },
      {
        malagasy: "Miantrana",
        english: "To adopt",
        german: "Adoptieren",
        french: "Adopter"
      }
    ],
  },
  {
    id: "sentences",
    title: "Basic Sentence Structure",
    emoji: "📝",
    category: "grammar",
    description: "Learn VOS word order, pronouns, negation, and conjugation.",
    cards: [
      {
        front: "I / I am",
        back: "Pronoun: Aho",
        front_de: "I / I am",
        front_fr: "I / I am"
      },
      {
        front: "You / You are",
        back: "Pronoun: Ianao",
        front_de: "You / You are",
        front_fr: "You / You are"
      },
      {
        front: "He/She / He is/She is",
        back: "Pronoun: Izy",
        front_de: "He/She / He is/She is",
        front_fr: "He/She / He is/She is"
      },
      {
        front: "We (inclusive)",
        back: "Pronoun: Isika",
        front_de: "We (inclusive)",
        front_fr: "We (inclusive)"
      },
      {
        front: "We (exclusive)",
        back: "Pronoun: Izahay",
        front_de: "We (exclusive)",
        front_fr: "We (exclusive)"
      },
      {
        front: "You (plural)",
        back: "Pronoun: Ianareo",
        front_de: "You (plural)",
        front_fr: "You (plural)"
      },
      {
        front: "They",
        back: "Pronoun: Izireo",
        front_de: "They",
        front_fr: "They"
      },
      {
        front: "Mihinana vary aho = I eat rice",
        back: "Affirmative: Verb + Object + Subject",
        front_de: "Mihinana vary aho = I eat rice",
        front_fr: "Mihinana vary aho = I eat rice"
      },
      {
        front: "Mangatsiaka izy = He/she is cold",
        back: "Adjective + Subject",
        front_de: "Mangatsiaka izy = He/she is cold",
        front_fr: "Mangatsiaka izy = He/she is cold"
      },
      {
        front: "Tsy mihinana vary aho = I don't eat rice",
        back: "Negation: Tsy + ...",
        front_de: "Tsy mihinana vary aho = I don't eat rice",
        front_fr: "Tsy mihinana vary aho = I don't eat rice"
      },
      {
        front: "Mihinana = eat (now)",
        back: "Present tense",
        front_de: "Mihinana = eat (now)",
        front_fr: "Mihinana = eat (now)"
      },
      {
        front: "Hihinana = will eat",
        back: "Future tense",
        front_de: "Hihinana = will eat",
        front_fr: "Hihinana = will eat"
      },
      {
        front: "Nihinana = ate",
        back: "Past tense",
        front_de: "Nihinana = ate",
        front_fr: "Nihinana = ate"
      }
    ],
    vocab: [
      {
        malagasy: "Mihinana",
        english: "to eat (present)",
        german: "essen (Gegenwart)",
        french: "manger (présent)"
      },
      {
        malagasy: "Hihinana",
        english: "will eat (future)",
        german: "wird essen (Zukunft)",
        french: "mangera (futur)"
      },
      {
        malagasy: "Nihinana",
        english: "ate (past)",
        german: "aß (Vergangenheit)",
        french: "a mangé (passé)"
      },
      {
        malagasy: "vary",
        english: "rice",
        german: "Reis",
        french: "riz"
      },
      {
        malagasy: "Misotro",
        english: "to drink",
        german: "trinken",
        french: "boire"
      },
      {
        malagasy: "rano",
        english: "water",
        german: "Wasser",
        french: "eau"
      },
      {
        malagasy: "Tia",
        english: "to like",
        german: "mögen",
        french: "aimer"
      },
      {
        malagasy: "Tsy",
        english: "no / not",
        german: "nein / nicht",
        french: "non / ne pas"
      },
      {
        malagasy: "Aho",
        english: "I / I am",
        german: "ich / ich bin",
        french: "je / je suis"
      },
      {
        malagasy: "Ianao",
        english: "You / You are",
        german: "du / du bist",
        french: "tu / tu es"
      },
      {
        malagasy: "Izy",
        english: "He/She / He is/She is",
        german: "er/sie / er/sie ist",
        french: "il/elle / il/elle est"
      },
      {
        malagasy: "Isika",
        english: "We (inclusive)",
        german: "Wir (inklusiv)",
        french: "Nous (inclusif)"
      },
      {
        malagasy: "Izahay",
        english: "We (exclusive)",
        german: "Wir (exklusiv)",
        french: "Nous (exclusif)"
      },
      {
        malagasy: "Ianareo",
        english: "You (plural)",
        german: "Ihr (Plural)",
        french: "Vous (pluriel)"
      },
      {
        malagasy: "Izireo",
        english: "They",
        german: "Sie",
        french: "Ils/Elles"
      },
      {
        malagasy: "Misy",
        english: "there is / exists",
        german: "es gibt / existiert",
        french: "il y a / existe"
      },
      {
        malagasy: "Tsy misy",
        english: "there is not",
        german: "es gibt nicht",
        french: "il n'y a pas"
      },
      {
        malagasy: "Ity",
        english: "this",
        german: "dies",
        french: "ceci"
      },
      {
        malagasy: "Iry",
        english: "that",
        german: "that",
        french: "that"
      },
      {
        malagasy: "Ireo",
        english: "these / those",
        german: "diese / jene",
        french: "ceux-ci / ceux-là"
      },
      {
        malagasy: "Dia",
        english: "then / and (connector)",
        german: "dann / und (Verbinder)",
        french: "alors / et (connecteur)"
      },
      {
        malagasy: "Fa",
        english: "but",
        german: "aber",
        french: "mais"
      },
      {
        malagasy: "Satria",
        english: "because",
        german: "weil",
        french: "parce que"
      },
      {
        malagasy: "Raha",
        english: "if",
        german: "wenn/falls",
        french: "si"
      },
      {
        malagasy: "Na",
        english: "or",
        german: "oder",
        french: "ou"
      },
      {
        malagasy: "ary",
        english: "and",
        german: "und",
        french: "et"
      },
      {
        malagasy: "izany",
        english: "that / it",
        german: "das / es",
        french: "cela / il"
      },
      {
        malagasy: "koa",
        english: "too / also",
        german: "auch / ebenfalls",
        french: "aussi / également"
      },
      {
        malagasy: "ve",
        english: "question particle",
        german: "Fragepartikel",
        french: "particule de question"
      },
      {
        malagasy: "angaha",
        english: "question particle (polite)",
        german: "Fragepartikel (höflich)",
        french: "particule de question (polie)"
      }
    ],
  },
  {
    id: "needs",
    title: "Basic Needs",
    emoji: "🍽️",
    category: "conversation",
    description: "Expressing needs, feelings, and asking for things.",
    cards: [
      {
        front: "I am tired.",
        back: "Reraka aho.",
        front_de: "I am tired.",
        front_fr: "I am tired."
      },
      {
        front: "I am hungry.",
        back: "Noana aho.",
        front_de: "I am hungry.",
        front_fr: "I am hungry."
      },
      {
        front: "I am full.",
        back: "Voky aho.",
        front_de: "I am full.",
        front_fr: "I am full."
      },
      {
        front: "I am thirsty.",
        back: "Mangetaheta aho.",
        front_de: "I am thirsty.",
        front_fr: "I am thirsty."
      },
      {
        front: "Where is the toilet?",
        back: "Aiza ny kabone?",
        front_de: "Where is the toilet?",
        front_fr: "Where is the toilet?"
      },
      {
        front: "I want to drink water.",
        back: "Te hisotro rano aho.",
        front_de: "I want to drink water.",
        front_fr: "I want to drink water."
      },
      {
        front: "I want to sleep.",
        back: "Te hatory aho.",
        front_de: "I want to sleep.",
        front_fr: "I want to sleep."
      },
      {
        front: "I want to eat.",
        back: "Te hisakafo aho.",
        front_de: "I want to eat.",
        front_fr: "I want to eat."
      },
      {
        front: "I want to go out.",
        back: "Te hivoaka aho.",
        front_de: "I want to go out.",
        front_fr: "I want to go out."
      },
      {
        front: "I am hot.",
        back: "Mafana aho.",
        front_de: "I am hot.",
        front_fr: "I am hot."
      },
      {
        front: "I am cold.",
        back: "Mangatsiaka aho.",
        front_de: "I am cold.",
        front_fr: "I am cold."
      },
      {
        front: "I need ___ please.",
        back: "Mila ___ aho azafady.",
        front_de: "I need ___ please.",
        front_fr: "I need ___ please."
      },
      {
        front: "Give me ___ please.",
        back: "Omeo ___ aho azafady.",
        front_de: "Give me ___ please.",
        front_fr: "Give me ___ please."
      },
      {
        front: "Can I have ___ please?",
        back: "Afaka mahazo ___ ve aho azafady?",
        front_de: "Can I have ___ please?",
        front_fr: "Can I have ___ please?"
      }
    ],
    vocab: [
      {
        malagasy: "Reraka",
        english: "tired",
        german: "müde",
        french: "fatigué"
      },
      {
        malagasy: "Noana",
        english: "hungry",
        german: "hungrig",
        french: "affamé"
      },
      {
        malagasy: "Voky",
        english: "full",
        german: "voll / satt",
        french: "plein / rassasié"
      },
      {
        malagasy: "Mangetaheta",
        english: "thirsty",
        german: "durstig",
        french: "assoiffé"
      },
      {
        malagasy: "kabone",
        english: "toilet",
        german: "Toilette",
        french: "toilettes"
      },
      {
        malagasy: "Te",
        english: "want",
        german: "wollen",
        french: "vouloir"
      },
      {
        malagasy: "hatory",
        english: "to sleep",
        german: "schlafen",
        french: "dormir"
      },
      {
        malagasy: "hisakafo",
        english: "to eat (meal)",
        german: "essen (Mahlzeit)",
        french: "manger (repas)"
      },
      {
        malagasy: "hivoaka",
        english: "to go out",
        german: "ausgehen",
        french: "sortir"
      },
      {
        malagasy: "Mafana",
        english: "hot",
        german: "heiß",
        french: "chaud"
      },
      {
        malagasy: "Mangatsiaka",
        english: "cold",
        german: "kalt",
        french: "froid"
      },
      {
        malagasy: "Mila",
        english: "need",
        german: "brauchen",
        french: "besoin"
      },
      {
        malagasy: "Omeo",
        english: "give",
        german: "geben",
        french: "donner"
      },
      {
        malagasy: "Afaka",
        english: "can / able",
        german: "können / fähig",
        french: "pouvoir / capable"
      },
      {
        malagasy: "mahazo",
        english: "to get / receive",
        german: "bekommen / erhalten",
        french: "obtenir / recevoir"
      },
      {
        malagasy: "Azafady",
        english: "please / sorry",
        german: "bitte / Entschuldigung",
        french: "s'il vous plaît / pardon"
      },
      {
        malagasy: "Ampy",
        english: "enough",
        german: "genug",
        french: "assez"
      },
      {
        malagasy: "Ladosy",
        english: "shower",
        german: "Dusche",
        french: "douche"
      },
      {
        malagasy: "Po",
        english: "pee pot",
        german: "Nachttopf",
        french: "pot de chambre"
      },
      {
        malagasy: "Tsy tia hena",
        english: "I don't like meat",
        german: "Ich mag kein Fleisch",
        french: "Je n'aime pas la viande"
      },
      {
        malagasy: "Te-matory",
        english: "sleepy",
        german: "schläfrig",
        french: "somnolent"
      },
      {
        malagasy: "Matavy",
        english: "fat / overweight",
        german: "fett / übergewichtig",
        french: "gros / en surpoids"
      },
      {
        malagasy: "Mahia",
        english: "thin / slim",
        german: "dünn / schlank",
        french: "mince / svelte"
      },
      {
        malagasy: "Marary",
        english: "sick",
        german: "krank",
        french: "malade"
      },
      {
        malagasy: "Fahasalamana",
        english: "health",
        german: "Gesundheit",
        french: "santé"
      },
      {
        malagasy: "Clinika",
        english: "clinic",
        german: "Klinik",
        french: "clinique"
      },
      {
        malagasy: "Hopitaly",
        english: "hospital",
        german: "Krankenhaus",
        french: "hôpital"
      },
      {
        malagasy: "Fanafody",
        english: "medicine",
        german: "Medizin",
        french: "médicament"
      },
      {
        malagasy: "Dokotera",
        english: "doctor",
        german: "Arzt",
        french: "médecin"
      },
      {
        malagasy: "Nurse",
        english: "nurse",
        german: "Krankenschwester/Pfleger",
        french: "infirmier/ère"
      },
      {
        malagasy: "Mampahory",
        english: "to hurt",
        german: "weh tun",
        french: "faire mal"
      },
      {
        malagasy: "Mitsabo",
        english: "to heal / treat",
        german: "heilen / behandeln",
        french: "guérir / traiter"
      },
      {
        malagasy: "Vaksiny",
        english: "vaccine",
        german: "Impfstoff",
        french: "vaccin"
      },
      {
        malagasy: "Arety",
        english: "disease",
        german: "Krankheit",
        french: "maladie"
      },
      {
        malagasy: "Tazo",
        english: "fever",
        german: "Fieber",
        french: "fièvre"
      },
      {
        malagasy: "Mangatsiaka (tarehy)",
        english: "pale",
        german: "blass",
        french: "pâle"
      },
      {
        malagasy: "Mafana (tarehy)",
        english: "flushed",
        german: "gerötet",
        french: "rouge"
      }
    ],
  },
  {
    id: "questions",
    title: "Question Words",
    emoji: "❓",
    category: "grammar",
    description: "Essential question words and example sentences.",
    cards: [
      {
        front: "Yes or no question marker",
        back: "Ve?",
        front_de: "Yes or no question marker",
        front_fr: "Yes or no question marker"
      },
      {
        front: "Who?",
        back: "Iza?",
        front_de: "Who?",
        front_fr: "Who?"
      },
      {
        front: "Where?",
        back: "Aiza?",
        front_de: "Where?",
        front_fr: "Where?"
      },
      {
        front: "What?",
        back: "Inona?",
        front_de: "What?",
        front_fr: "What?"
      },
      {
        front: "How many?",
        back: "Firy?",
        front_de: "How many?",
        front_fr: "How many?"
      },
      {
        front: "What time?",
        back: "Amin'ny firy?",
        front_de: "What time?",
        front_fr: "What time?"
      },
      {
        front: "When? (questions only)",
        back: "Oviana?",
        front_de: "When? (questions only)",
        front_fr: "When? (questions only)"
      },
      {
        front: "How much?",
        back: "Hoatrinona?",
        front_de: "How much?",
        front_fr: "How much?"
      },
      {
        front: "Why?",
        back: "Fa maninona?",
        front_de: "Why?",
        front_fr: "Why?"
      },
      {
        front: "How?",
        back: "Ahoana?",
        front_de: "How?",
        front_fr: "How?"
      },
      {
        front: "Oviana = when (question). Rehefa = when (statement).",
        back: "Note: Oviana vs Rehefa",
        front_de: "Oviana = when (question). Rehefa = when (statement).",
        front_fr: "Oviana = when (question). Rehefa = when (statement)."
      }
    ],
    vocab: [
      {
        malagasy: "Ve",
        english: "Question marker (yes/no)",
        german: "Fragemarker (ja/nein)",
        french: "Marqueur de question (oui/non)"
      },
      {
        malagasy: "Iza",
        english: "Who",
        german: "Wer",
        french: "Qui"
      },
      {
        malagasy: "Aiza",
        english: "Where",
        german: "Wo",
        french: "Où"
      },
      {
        malagasy: "Inona",
        english: "What",
        german: "Was",
        french: "Quoi"
      },
      {
        malagasy: "Firy",
        english: "How many",
        german: "Wie viele",
        french: "Combien"
      },
      {
        malagasy: "Oviana",
        english: "When (question)",
        german: "Wann (Frage)",
        french: "Quand (question)"
      },
      {
        malagasy: "Rehefa",
        english: "When (statement)",
        german: "Wenn (Aussage)",
        french: "Quand (affirmation)"
      },
      {
        malagasy: "Ahoana",
        english: "How",
        german: "Wie",
        french: "Comment"
      },
      {
        malagasy: "Fa maninona",
        english: "Why",
        german: "Warum",
        french: "Pourquoi"
      },
      {
        malagasy: "Amin'ny firy",
        english: "What time",
        german: "Um wie viel Uhr",
        french: "Quelle heure"
      },
      {
        malagasy: "Hoatrinona",
        english: "How much",
        german: "Wie viel",
        french: "Combien"
      },
      {
        malagasy: "Aiza ny ...",
        english: "Where is the ...",
        german: "Wo ist der/die/das ...",
        french: "Où est le/la ..."
      },
      {
        malagasy: "Inona no ...",
        english: "What is the ...",
        german: "Was ist der/die/das ...",
        french: "Qu'est-ce que le/la ..."
      },
      {
        malagasy: "Iza no ...",
        english: "Who is the ...",
        german: "Wer ist der/die/das ...",
        french: "Qui est le/la ..."
      },
      {
        malagasy: "Firy ny ...",
        english: "How many ...",
        german: "Wie viele ...",
        french: "Combien de ..."
      },
      {
        malagasy: "Nahoana?",
        english: "How come?",
        german: "Wieso?",
        french: "Comment ça se fait ?"
      },
      {
        malagasy: "Inona no antony?",
        english: "What is the reason?",
        german: "Was ist der Grund?",
        french: "Quelle est la raison ?"
      },
      {
        malagasy: "Aiza no mety?",
        english: "Where is it suitable?",
        german: "Wo ist es geeignet?",
        french: "Où est-ce approprié ?"
      },
      {
        malagasy: "Ahoana no anaranao?",
        english: "What is your name? (alt)",
        german: "Wie ist dein Name? (alt)",
        french: "Quel est votre nom ? (alt)"
      },
      {
        malagasy: "Inona no tianao?",
        english: "What do you want?",
        german: "Was willst du?",
        french: "Que voulez-vous ?"
      },
      {
        malagasy: "Aiza no mipetraka ianao?",
        english: "Where do you live?",
        german: "Wo wohnst du?",
        french: "Où habitez-vous ?"
      },
      {
        malagasy: "Oviana no hianaranao?",
        english: "When will you study?",
        german: "Wann wirst du lernen?",
        french: "Quand étudierez-vous ?"
      },
      {
        malagasy: "Ahoana ny toetranao?",
        english: "How is your health?",
        german: "Wie ist deine Gesundheit?",
        french: "Comment va votre santé ?"
      },
      {
        malagasy: "Hoatrinona ny vidiny?",
        english: "What is the price?",
        german: "Was ist der Preis?",
        french: "Quel est le prix ?"
      },
      {
        malagasy: "Firy ny taonanao?",
        english: "How old are you?",
        german: "Wie alt bist du?",
        french: "Quel âge avez-vous ?"
      }
    ],
  },
  {
    id: "commands",
    title: "Commands & Requests",
    emoji: "🙏",
    category: "conversation",
    description: "Common commands, requests, and polite expressions.",
    cards: [
      {
        front: "Yes",
        back: "Eny",
        front_de: "Yes",
        front_fr: "Yes"
      },
      {
        front: "No",
        back: "Tsia",
        front_de: "No",
        front_fr: "No"
      },
      {
        front: "Come here!",
        back: "Avia aty!",
        front_de: "Come here!",
        front_fr: "Come here!"
      },
      {
        front: "Wait!",
        back: "Andraso!",
        front_de: "Wait!",
        front_fr: "Wait!"
      },
      {
        front: "Let's go / Come on!",
        back: "Ndao handeha!",
        front_de: "Let's go / Come on!",
        front_fr: "Let's go / Come on!"
      },
      {
        front: "False / Untrue",
        back: "Diso",
        front_de: "False / Untrue",
        front_fr: "False / Untrue"
      },
      {
        front: "True",
        back: "Marina",
        front_de: "True",
        front_fr: "True"
      },
      {
        front: "That is enough!",
        back: "Ampy izay!",
        front_de: "That is enough!",
        front_fr: "That is enough!"
      },
      {
        front: "Understand?",
        back: "Azo?",
        front_de: "Understand?",
        front_fr: "Understand?"
      },
      {
        front: "I need (coke) please.",
        back: "Mila (koka) aho azafady.",
        front_de: "I need (coke) please.",
        front_fr: "I need (coke) please."
      },
      {
        front: "Give me (water) please.",
        back: "Omeo (rano) aho azafady.",
        front_de: "Give me (water) please.",
        front_fr: "Give me (water) please."
      },
      {
        front: "Can I have (a glass) please?",
        back: "Afaka mahazo (vera) ve aho azafady?",
        front_de: "Can I have (a glass) please?",
        front_fr: "Can I have (a glass) please?"
      }
    ],
    vocab: [
      {
        malagasy: "Eny",
        english: "Yes",
        german: "Ja",
        french: "Oui"
      },
      {
        malagasy: "Tsia",
        english: "No",
        german: "Nein",
        french: "Non"
      },
      {
        malagasy: "Avia aty",
        english: "Come here",
        german: "Komm her",
        french: "Viens ici"
      },
      {
        malagasy: "Andraso",
        english: "Wait",
        german: "Warte",
        french: "Attends"
      },
      {
        malagasy: "Ndao handeha",
        english: "Let's go",
        german: "Lass uns gehen",
        french: "Allons-y"
      },
      {
        malagasy: "Diso",
        english: "False",
        german: "Falsch",
        french: "Faux"
      },
      {
        malagasy: "Marina",
        english: "True",
        german: "Wahr",
        french: "Vrai"
      },
      {
        malagasy: "Ampy izay",
        english: "That's enough",
        german: "Das reicht",
        french: "Ça suffit"
      },
      {
        malagasy: "Azonao atao ve?",
        english: "Can you do it?",
        german: "Kannst du es tun?",
        french: "Peux-tu le faire ?"
      },
      {
        malagasy: "Aleo",
        english: "Better / Rather",
        german: "Besser / Eher",
        french: "Mieux / Plutôt"
      },
      {
        malagasy: "Tsara",
        english: "Good / OK",
        german: "Gut / OK",
        french: "Bien / OK"
      },
      {
        malagasy: "Azafady miditra",
        english: "Please come in",
        german: "Bitte komm rein",
        french: "Entrez s'il vous plaît"
      },
      {
        malagasy: "Miala amin'ny",
        english: "Get away from",
        german: "Geh weg von",
        french: "Éloigne-toi de"
      },
      {
        malagasy: "Mijanona",
        english: "Stop",
        german: "Halt",
        french: "Arrête"
      },
      {
        malagasy: "Miverena",
        english: "Come back",
        german: "Komm zurück",
        french: "Reviens"
      },
      {
        malagasy: "Mandrosoa",
        english: "Go ahead",
        german: "Mach weiter",
        french: "Vas-y"
      },
      {
        malagasy: "Aza manao izany",
        english: "Don't do that",
        german: "Tu das nicht",
        french: "Ne fais pas ça"
      },
      {
        malagasy: "Manaova azafady",
        english: "Please do it",
        german: "Bitte tu es",
        french: "Fais-le s'il vous plaît"
      },
      {
        malagasy: "Mba omeo aho",
        english: "Please give me",
        german: "Bitte gib mir",
        french: "Donne-moi s'il te plaît"
      },
      {
        malagasy: "Afaka mijery ve?",
        english: "Can I see?",
        german: "Kann ich sehen?",
        french: "Puis-je voir ?"
      },
      {
        malagasy: "Alefaso",
        english: "Send it",
        german: "Schick es",
        french: "Envoie-le"
      },
      {
        malagasy: "Tadidio",
        english: "Remember",
        german: "Erinnere dich",
        french: "Souviens-toi"
      },
      {
        malagasy: "Aza hadinoina",
        english: "Don't forget",
        german: "Vergiss nicht",
        french: "N'oublie pas"
      },
      {
        malagasy: "Mianara tsara",
        english: "Study well",
        german: "Lern gut",
        french: "Étudie bien"
      },
      {
        malagasy: "Miandrasa kely",
        english: "Wait a moment",
        german: "Warte einen Moment",
        french: "Attends un moment"
      },
      {
        malagasy: "Mangatahana",
        english: "To request",
        german: "Bitten",
        french: "Demander"
      },
      {
        malagasy: "Manaiky aho",
        english: "I agree",
        german: "Ich stimme zu",
        french: "Je suis d'accord"
      },
      {
        malagasy: "Manao ahoana",
        english: "How are you?",
        german: "Wie geht's?",
        french: "Comment allez-vous ?"
      },
      {
        malagasy: "Veloma ianao",
        english: "Goodbye to you",
        german: "Auf Wiedersehen",
        french: "Au revoir à toi"
      }
    ],
  },
  {
    id: "numbers",
    title: "Numbers",
    emoji: "🔢",
    category: "vocabulary",
    description: "Counting in Malagasy — read from right to left!",
    cards: [
      {
        front: "One",
        back: "1 - Iray",
        front_de: "One",
        front_fr: "One"
      },
      {
        front: "Two",
        back: "2 - Roa",
        front_de: "Two",
        front_fr: "Two"
      },
      {
        front: "Three",
        back: "3 - Telo",
        front_de: "Three",
        front_fr: "Three"
      },
      {
        front: "Four",
        back: "4 - Efatra",
        front_de: "Four",
        front_fr: "Four"
      },
      {
        front: "Five",
        back: "5 - Dimy",
        front_de: "Five",
        front_fr: "Five"
      },
      {
        front: "Six",
        back: "6 - Enina",
        front_de: "Six",
        front_fr: "Six"
      },
      {
        front: "Seven",
        back: "7 - Fito",
        front_de: "Seven",
        front_fr: "Seven"
      },
      {
        front: "Eight",
        back: "8 - Valo",
        front_de: "Eight",
        front_fr: "Eight"
      },
      {
        front: "Nine",
        back: "9 - Sivy",
        front_de: "Nine",
        front_fr: "Nine"
      },
      {
        front: "Ten",
        back: "10 - Folo",
        front_de: "Ten",
        front_fr: "Ten"
      },
      {
        front: "Forty",
        back: "40 - Efapolo",
        front_de: "Forty",
        front_fr: "Forty"
      },
      {
        front: "Hundred",
        back: "100 - Zato",
        front_de: "Hundred",
        front_fr: "Hundred"
      },
      {
        front: "Thousand",
        back: "1,000 - Arivo",
        front_de: "Thousand",
        front_fr: "Thousand"
      },
      {
        front: "Ten thousand",
        back: "10,000 - Iray alina",
        front_de: "Ten thousand",
        front_fr: "Ten thousand"
      },
      {
        front: "Hundred thousand",
        back: "100,000 - Iray hetsy",
        front_de: "Hundred thousand",
        front_fr: "Hundred thousand"
      },
      {
        front: "Use 'amby' to connect up to 199. Use 'sy' after 199.",
        back: "Note: amby vs sy",
        front_de: "Use 'amby' to connect up to 199. Use 'sy' after 199.",
        front_fr: "Use 'amby' to connect up to 199. Use 'sy' after 199."
      }
    ],
    vocab: [
      {
        malagasy: "Iray",
        english: "One",
        german: "Eins",
        french: "Un"
      },
      {
        malagasy: "Roa",
        english: "Two",
        german: "Zwei",
        french: "Deux"
      },
      {
        malagasy: "Telo",
        english: "Three",
        german: "Drei",
        french: "Trois"
      },
      {
        malagasy: "Dimy",
        english: "Five",
        german: "Fünf",
        french: "Cinq"
      },
      {
        malagasy: "Folo",
        english: "Ten",
        german: "Zehn",
        french: "Dix"
      },
      {
        malagasy: "Zato",
        english: "Hundred",
        german: "Hundert",
        french: "Cent"
      },
      {
        malagasy: "Arivo",
        english: "Thousand",
        german: "Tausend",
        french: "Mille"
      },
      {
        malagasy: "Iray alina",
        english: "Ten thousand",
        german: "Zehntausend",
        french: "Dix mille"
      },
      {
        malagasy: "Iray hetsy",
        english: "Hundred thousand",
        german: "Hunderttausend",
        french: "Cent mille"
      },
      {
        malagasy: "Efatra",
        english: "Four",
        german: "Vier",
        french: "Quatre"
      },
      {
        malagasy: "Enina",
        english: "Six",
        german: "Sechs",
        french: "Six"
      },
      {
        malagasy: "Fito",
        english: "Seven",
        german: "Sieben",
        french: "Sept"
      },
      {
        malagasy: "Valo",
        english: "Eight",
        german: "Acht",
        french: "Huit"
      },
      {
        malagasy: "Sivy",
        english: "Nine",
        german: "Neun",
        french: "Neuf"
      },
      {
        malagasy: "Efapolo",
        english: "Forty",
        german: "Vierzig",
        french: "Quarante"
      },
      {
        malagasy: "Sivifolo",
        english: "Ninety",
        german: "Neunzig",
        french: "Quatre-vingt-dix"
      },
      {
        malagasy: "Telonjato",
        english: "Three hundred",
        german: "Dreihundert",
        french: "Trois cents"
      },
      {
        malagasy: "Sivinjato",
        english: "Nine hundred",
        german: "Neunhundert",
        french: "Neuf cents"
      },
      {
        malagasy: "Dimy arivo",
        english: "Five thousand",
        german: "Fünftausend",
        french: "Cinq mille"
      },
      {
        malagasy: "Fito arivo",
        english: "Seven thousand",
        german: "Siebentausend",
        french: "Sept mille"
      },
      {
        malagasy: "Roa alina",
        english: "Twenty thousand",
        german: "Zwanzigtausend",
        french: "Vingt mille"
      },
      {
        malagasy: "Enina alina",
        english: "Sixty thousand",
        german: "Sechzigtausend",
        french: "Soixante mille"
      },
      {
        malagasy: "Efatra hetsy",
        english: "Four hundred thousand",
        german: "Vierhunderttausend",
        french: "Quatre cent mille"
      },
      {
        malagasy: "Valo hetsy",
        english: "Eight hundred thousand",
        german: "Achthunderttausend",
        french: "Huit cent mille"
      },
      {
        malagasy: "amby",
        english: "and (for numbers up to 199)",
        german: "und (für Zahlen bis 199)",
        french: "et (pour les nombres jusqu'à 199)"
      },
      {
        malagasy: "sy",
        english: "and (for numbers after 199)",
        german: "und (für Zahlen nach 199)",
        french: "et (pour les nombres après 199)"
      },
      {
        malagasy: "Maro",
        english: "many",
        german: "viele",
        french: "beaucoup"
      },
      {
        malagasy: "Vitsy",
        english: "few",
        german: "wenige",
        french: "peu"
      },
      {
        malagasy: " rehetra",
        english: "all / every",
        german: "alle / jeder",
        french: "tout / chaque"
      },
      {
        malagasy: "Sasany",
        english: "some",
        german: "einige",
        french: "quelques"
      },
      {
        malagasy: "Tsiafa",
        english: "none / zero",
        german: "keine / null",
        french: "aucun / zéro"
      },
      {
        malagasy: "Voalohany",
        english: "First",
        german: "Erste",
        french: "Premier"
      },
      {
        malagasy: "Faharoa",
        english: "Second",
        german: "Sekunde",
        french: "Seconde"
      },
      {
        malagasy: "Fahatelo",
        english: "Third",
        german: "Dritte",
        french: "Troisième"
      },
      {
        malagasy: "Farany",
        english: "Last",
        german: "Letzte",
        french: "Dernier"
      },
      {
        malagasy: "Amin'ny",
        english: "At (time/number)",
        german: "Um (Zeit/Zahl)",
        french: "À (heure/nombre)"
      },
      {
        malagasy: "Firy",
        english: "How many",
        german: "Wie viele",
        french: "Combien"
      },
      {
        malagasy: "Hoatrinona",
        english: "How much (price)",
        german: "Wie viel (Preis)",
        french: "Combien (prix)"
      }
    ],
  },
  {
    id: "food",
    title: "Food & Drinks",
    emoji: "🍛",
    category: "vocabulary",
    description: "Essential food vocabulary for daily meals.",
    cards: [
      {
        front: "Food",
        back: "Sakafo",
        front_de: "Food",
        front_fr: "Food"
      },
      {
        front: "Rice",
        back: "Vary",
        front_de: "Rice",
        front_fr: "Rice"
      },
      {
        front: "Side-dishes",
        back: "Laoka",
        front_de: "Side-dishes",
        front_fr: "Side-dishes"
      },
      {
        front: "Bread",
        back: "Mofo",
        front_de: "Bread",
        front_fr: "Bread"
      },
      {
        front: "Meat",
        back: "Hena",
        front_de: "Meat",
        front_fr: "Meat"
      },
      {
        front: "Pork",
        back: "Henakisoa",
        front_de: "Pork",
        front_fr: "Pork"
      },
      {
        front: "Beef",
        back: "Henomby",
        front_de: "Beef",
        front_fr: "Beef"
      },
      {
        front: "Chicken",
        back: "Akoho",
        front_de: "Chicken",
        front_fr: "Chicken"
      },
      {
        front: "Fish",
        back: "Trondro",
        front_de: "Fish",
        front_fr: "Fish"
      },
      {
        front: "Eggs",
        back: "Atody",
        front_de: "Eggs",
        front_fr: "Eggs"
      },
      {
        front: "Vegetable",
        back: "Legioma",
        front_de: "Vegetable",
        front_fr: "Vegetable"
      },
      {
        front: "Greens",
        back: "Anana",
        front_de: "Greens",
        front_fr: "Greens"
      },
      {
        front: "Potatoes",
        back: "Ovy",
        front_de: "Potatoes",
        front_fr: "Potatoes"
      },
      {
        front: "Tomato",
        back: "Voatabia",
        front_de: "Tomato",
        front_fr: "Tomato"
      },
      {
        front: "Fruit",
        back: "Voankazo",
        front_de: "Fruit",
        front_fr: "Fruit"
      },
      {
        front: "Papaya",
        back: "Papay",
        front_de: "Papaya",
        front_fr: "Papaya"
      },
      {
        front: "Mango",
        back: "Manga",
        front_de: "Mango",
        front_fr: "Mango"
      },
      {
        front: "Orange",
        back: "Voasary",
        front_de: "Orange",
        front_fr: "Orange"
      },
      {
        front: "Water",
        back: "Rano",
        front_de: "Water",
        front_fr: "Water"
      },
      {
        front: "Coffee",
        back: "Kafe",
        front_de: "Coffee",
        front_fr: "Coffee"
      },
      {
        front: "Tea",
        back: "Dite",
        front_de: "Tea",
        front_fr: "Tea"
      },
      {
        front: "Milk",
        back: "Ronono",
        front_de: "Milk",
        front_fr: "Milk"
      }
    ],
    vocab: [
      {
        malagasy: "Vary",
        english: "Rice",
        german: "Reis",
        french: "Riz"
      },
      {
        malagasy: "Laoka",
        english: "Side-dish",
        german: "Beilage",
        french: "Accompagnement"
      },
      {
        malagasy: "Hena",
        english: "Meat",
        german: "Fleisch",
        french: "Viande"
      },
      {
        malagasy: "Henakisoa",
        english: "Pork",
        german: "Schweinefleisch",
        french: "Porc"
      },
      {
        malagasy: "Henomby",
        english: "Beef",
        german: "Rindfleisch",
        french: "Boeuf"
      },
      {
        malagasy: "Akoho",
        english: "Chicken",
        german: "Huhn",
        french: "Poulet"
      },
      {
        malagasy: "Trondro",
        english: "Fish",
        german: "Fisch",
        french: "Poisson"
      },
      {
        malagasy: "Atody",
        english: "Eggs",
        german: "Eier",
        french: "Oeufs"
      },
      {
        malagasy: "Voatabia",
        english: "Tomato",
        german: "Tomate",
        french: "Tomate"
      },
      {
        malagasy: "Kafe",
        english: "Coffee",
        german: "Kaffee",
        french: "Café"
      },
      {
        malagasy: "Sakafo",
        english: "Food",
        german: "Essen",
        french: "Nourriture"
      },
      {
        malagasy: "Mofo",
        english: "Bread",
        german: "Brot",
        french: "Pain"
      },
      {
        malagasy: "Legioma",
        english: "Vegetable",
        german: "Gemüse",
        french: "Légume"
      },
      {
        malagasy: "Anana",
        english: "Greens",
        german: "Blattgemüse",
        french: "Légumes verts"
      },
      {
        malagasy: "Ovy",
        english: "Potatoes",
        german: "Kartoffeln",
        french: "Pommes de terre"
      },
      {
        malagasy: "Voankazo",
        english: "Fruit",
        german: "Obst",
        french: "Fruit"
      },
      {
        malagasy: "Papay",
        english: "Papaya",
        german: "Papaya",
        french: "Papaye"
      },
      {
        malagasy: "Manga",
        english: "Mango",
        german: "Mango",
        french: "Mangue"
      },
      {
        malagasy: "Voasary",
        english: "Orange",
        german: "Orange",
        french: "Orange"
      },
      {
        malagasy: "Rano",
        english: "Water",
        german: "Wasser",
        french: "Eau"
      },
      {
        malagasy: "Dite",
        english: "Tea",
        german: "Tee",
        french: "Thé"
      },
      {
        malagasy: "Ronono",
        english: "Milk",
        german: "Milch",
        french: "Lait"
      },
      {
        malagasy: "Menaka",
        english: "Oil",
        german: "Öl",
        french: "Huile"
      },
      {
        malagasy: "Sira",
        english: "Salt",
        german: "Salz",
        french: "Sel"
      },
      {
        malagasy: "Sakay",
        english: "Chili",
        german: "Chili",
        french: "Piment"
      },
      {
        malagasy: "Siramamy",
        english: "Sugar",
        german: "Zucker",
        french: "Sucre"
      },
      {
        malagasy: "Poavra",
        english: "Pepper",
        german: "Pfeffer",
        french: "Poivre"
      },
      {
        malagasy: "Karoty",
        english: "Carrot",
        german: "Karotte",
        french: "Carotte"
      },
      {
        malagasy: "voanjobory",
        english: "Round beans",
        german: "Runde Bohnen",
        french: "Haricots ronds"
      },
      {
        malagasy: "Tsaramaso",
        english: "Beans",
        german: "Bohnen",
        french: "Haricots"
      },
      {
        malagasy: "Mananasy",
        english: "Pineapple",
        german: "Ananas",
        french: "Ananas"
      },
      {
        malagasy: "Jus",
        english: "Juice",
        german: "Saft",
        french: "Jus"
      },
      {
        malagasy: "Kôka",
        english: "Coca-cola",
        german: "Coca-Cola",
        french: "Coca-Cola"
      },
      {
        malagasy: "Limonady",
        english: "Lemonade",
        german: "Limonade",
        french: "Limonade"
      },
      {
        malagasy: "Ranon'ampango",
        english: "Rice-water",
        german: "Reiswasser",
        french: "Eau de riz"
      },
      {
        malagasy: "Haninkotrana",
        english: "Snack",
        german: "Snack",
        french: "Collation"
      },
      {
        malagasy: "Mangahazo",
        english: "Cassava",
        german: "Maniok",
        french: "Manioc"
      },
      {
        malagasy: "Katsaka",
        english: "Corn",
        german: "Mais",
        french: "Maïs"
      },
      {
        malagasy: "Vomanga",
        english: "Sweet potato",
        german: "Süßkartoffel",
        french: "Patate douce"
      },
      {
        malagasy: "Episy",
        english: "Spices",
        german: "Gewürze",
        french: "Épices"
      },
      {
        malagasy: "Mihinana",
        english: "To eat",
        german: "Essen",
        french: "Manger"
      },
      {
        malagasy: "Misotro",
        english: "To drink",
        german: "Trinken",
        french: "Boire"
      },
      {
        malagasy: "mankafy",
        english: "To enjoy (food)",
        german: "Genießen (Essen)",
        french: "Apprécier (nourriture)"
      },
      {
        malagasy: "manamboatra",
        english: "To prepare (food)",
        german: "Zubereiten (Essen)",
        french: "Préparer (nourriture)"
      },
      {
        malagasy: "mampangatsiaka",
        english: "To cool",
        german: "Abkühlen",
        french: "Refroidir"
      },
      {
        malagasy: "mangatsiaka",
        english: "Cold (drink)",
        german: "Kalt (Getränk)",
        french: "Froid (boisson)"
      },
      {
        malagasy: "mafana",
        english: "Hot (food)",
        german: "Heiß (Essen)",
        french: "Chaud (nourriture)"
      },
      {
        malagasy: "Matsiro",
        english: "Delicious",
        german: "Lecker",
        french: "Délicieux"
      },
      {
        malagasy: "tsy matsiro",
        english: "Not delicious",
        german: "Nicht lecker",
        french: "Pas délicieux"
      },
      {
        malagasy: "Voky",
        english: "Full (ate enough)",
        german: "Satt",
        french: "Rassasié"
      },
      {
        malagasy: "Noana",
        english: "Hungry",
        german: "Hungrig",
        french: "Affamé"
      },
      {
        malagasy: "Mangetaheta",
        english: "Thirsty",
        german: "Durstig",
        french: "Assoiffé"
      }
    ],
  },
  {
    id: "days",
    title: "Days & Time",
    emoji: "📅",
    category: "vocabulary",
    description: "Days of the week and parts of the day.",
    cards: [
      {
        front: "Monday",
        back: "Alatsinainy",
        front_de: "Monday",
        front_fr: "Monday"
      },
      {
        front: "Tuesday",
        back: "Talata",
        front_de: "Tuesday",
        front_fr: "Tuesday"
      },
      {
        front: "Wednesday",
        back: "Alarobia",
        front_de: "Wednesday",
        front_fr: "Wednesday"
      },
      {
        front: "Thursday",
        back: "Alakamisy",
        front_de: "Thursday",
        front_fr: "Thursday"
      },
      {
        front: "Friday",
        back: "Zoma",
        front_de: "Friday",
        front_fr: "Friday"
      },
      {
        front: "Saturday",
        back: "Sabotsy",
        front_de: "Saturday",
        front_fr: "Saturday"
      },
      {
        front: "Sunday",
        back: "Alahady",
        front_de: "Sunday",
        front_fr: "Sunday"
      },
      {
        front: "Yesterday",
        back: "Omaly",
        front_de: "Yesterday",
        front_fr: "Yesterday"
      },
      {
        front: "Today",
        back: "Androany",
        front_de: "Today",
        front_fr: "Today"
      },
      {
        front: "Tomorrow",
        back: "Rahampitso",
        front_de: "Tomorrow",
        front_fr: "Tomorrow"
      },
      {
        front: "Morning",
        back: "Maraina",
        front_de: "Morning",
        front_fr: "Morning"
      },
      {
        front: "Noon",
        back: "Atoandro",
        front_de: "Noon",
        front_fr: "Noon"
      },
      {
        front: "Afternoon",
        back: "Tolakandro",
        front_de: "Afternoon",
        front_fr: "Afternoon"
      },
      {
        front: "Evening",
        back: "Hariva",
        front_de: "Evening",
        front_fr: "Evening"
      },
      {
        front: "Night",
        back: "Alina",
        front_de: "Night",
        front_fr: "Night"
      }
    ],
    vocab: [
      {
        malagasy: "Alatsinainy",
        english: "Monday",
        german: "Montag",
        french: "Lundi"
      },
      {
        malagasy: "Talata",
        english: "Tuesday",
        german: "Dienstag",
        french: "Mardi"
      },
      {
        malagasy: "Alarobia",
        english: "Wednesday",
        german: "Mittwoch",
        french: "Mercredi"
      },
      {
        malagasy: "Alakamisy",
        english: "Thursday",
        german: "Donnerstag",
        french: "Jeudi"
      },
      {
        malagasy: "Zoma",
        english: "Friday",
        german: "Freitag",
        french: "Vendredi"
      },
      {
        malagasy: "Sabotsy",
        english: "Saturday",
        german: "Samstag",
        french: "Samedi"
      },
      {
        malagasy: "Alahady",
        english: "Sunday",
        german: "Sonntag",
        french: "Dimanche"
      },
      {
        malagasy: "Omaly",
        english: "Yesterday",
        german: "Gestern",
        french: "Hier"
      },
      {
        malagasy: "Androany",
        english: "Today",
        german: "Heute",
        french: "Aujourd'hui"
      },
      {
        malagasy: "Rahampitso",
        english: "Tomorrow",
        german: "Morgen",
        french: "Demain"
      },
      {
        malagasy: "Maraina",
        english: "Morning",
        german: "Morgen",
        french: "Matin"
      },
      {
        malagasy: "Atoandro",
        english: "Noon",
        german: "Mittag",
        french: "Midi"
      },
      {
        malagasy: "Tolakandro",
        english: "Afternoon",
        german: "Nachmittag",
        french: "Après-midi"
      },
      {
        malagasy: "Hariva",
        english: "Evening",
        german: "Abend",
        french: "Soir"
      },
      {
        malagasy: "Alina",
        english: "Night",
        german: "Nacht",
        french: "Nuit"
      },
      {
        malagasy: "Andro",
        english: "Day",
        german: "Tag",
        french: "Jour"
      },
      {
        malagasy: "Herinandro",
        english: "Week",
        german: "Woche",
        french: "Semaine"
      },
      {
        malagasy: "Volana",
        english: "Month",
        german: "Monat",
        french: "Mois"
      },
      {
        malagasy: "Taona",
        english: "Year",
        german: "Jahr",
        french: "Année"
      },
      {
        malagasy: "Amin'ny",
        english: "At (time)",
        german: "Um (Uhrzeit)",
        french: "À (heure)"
      },
      {
        malagasy: "maraina be",
        english: "Early morning",
        german: "Früher Morgen",
        french: "Tôt le matin"
      },
      {
        malagasy: "tapitrisanandro",
        english: "Midnight",
        german: "Mitternacht",
        french: "Minuit"
      },
      {
        malagasy: "Afaka",
        english: "Later / After",
        german: "Später / Nach",
        french: "Plus tard / Après"
      },
      {
        malagasy: "Taloha",
        english: "Before / Ago",
        german: "Vor / Vorher",
        french: "Avant / Il y a"
      },
      {
        malagasy: "Fotoana",
        english: "Time / Moment",
        german: "Zeit / Moment",
        french: "Temps / Moment"
      },
      {
        malagasy: "Famindrana",
        english: "Appointment",
        german: "Termin",
        french: "Rendez-vous"
      },
      {
        malagasy: "Fotoam-pihinanana",
        english: "Mealtime",
        german: "Essenszeit",
        french: "Heure du repas"
      },
      {
        malagasy: "Fotoam-piadiana",
        english: "Work time",
        german: "Arbeitszeit",
        french: "Heure de travail"
      },
      {
        malagasy: "Fialan-tsasatra",
        english: "Vacation / Holiday",
        german: "Urlaub / Feiertag",
        french: "Vacances / Jour férié"
      },
      {
        malagasy: "Andro fety",
        english: "Holiday / Festival day",
        german: "Feiertag / Festtag",
        french: "Jour férié / Fête"
      },
      {
        malagasy: "Trondro",
        english: "Fish",
        german: "Fisch",
        french: "Poisson"
      }
    ],
  },
  {
    id: "feelings",
    title: "Feelings & Emotions",
    emoji: "😊",
    category: "vocabulary",
    description: "Expressing emotions and reactions.",
    cards: [
      {
        front: "That makes me happy.",
        back: "Mahafaly ahy izany",
        front_de: "That makes me happy.",
        front_fr: "That makes me happy."
      },
      {
        front: "That's sad.",
        back: "Mampalahelo izany",
        front_de: "That's sad.",
        front_fr: "That's sad."
      },
      {
        front: "That's surprising.",
        back: "Mahagaga izany",
        front_de: "That's surprising.",
        front_fr: "That's surprising."
      },
      {
        front: "That's shocking!",
        back: "Mahasosotra izany",
        front_de: "That's shocking!",
        front_fr: "That's shocking!"
      },
      {
        front: "It's tiring.",
        back: "Mandreraka izany",
        front_de: "It's tiring.",
        front_fr: "It's tiring."
      },
      {
        front: "That's frightening!",
        back: "Mampatahotra izany",
        front_de: "That's frightening!",
        front_fr: "That's frightening!"
      },
      {
        front: "That's annoying!",
        back: "Mahakamo izany",
        front_de: "That's annoying!",
        front_fr: "That's annoying!"
      },
      {
        front: "That's doubtful.",
        back: "Mampiahiahy izany",
        front_de: "That's doubtful.",
        front_fr: "That's doubtful."
      },
      {
        front: "Amusing! Hilarious!",
        back: "Mampihomehy izany",
        front_de: "Amusing! Hilarious!",
        front_fr: "Amusing! Hilarious!"
      },
      {
        front: "He/She is happy.",
        back: "Faly izy.",
        front_de: "He/She is happy.",
        front_fr: "He/She is happy."
      },
      {
        front: "I am sad.",
        back: "Malahelo aho.",
        front_de: "I am sad.",
        front_fr: "I am sad."
      },
      {
        front: "They are afraid.",
        back: "Matahotra izireo.",
        front_de: "They are afraid.",
        front_fr: "They are afraid."
      }
    ],
    vocab: [
      {
        malagasy: "Faly",
        english: "happy",
        german: "glücklich",
        french: "heureux"
      },
      {
        malagasy: "Malahelo",
        english: "sad",
        german: "traurig",
        french: "triste"
      },
      {
        malagasy: "Gaga",
        english: "surprised",
        german: "überrascht",
        french: "surpris"
      },
      {
        malagasy: "Sosotra",
        english: "shocked / angry",
        german: "schockiert / wütend",
        french: "choqué / en colère"
      },
      {
        malagasy: "Matahotra",
        english: "afraid",
        german: "ängstlich",
        french: "effrayé"
      },
      {
        malagasy: "Kamo",
        english: "lazy",
        german: "faul",
        french: "paresseux"
      },
      {
        malagasy: "Matoky",
        english: "to trust",
        german: "vertrauen",
        french: "faire confiance"
      },
      {
        malagasy: "Halako",
        english: "I hate it",
        german: "Ich hasse es",
        french: "Je déteste ça"
      },
      {
        malagasy: "Reraka",
        english: "tired",
        german: "müde",
        french: "fatigué"
      },
      {
        malagasy: "Mafana",
        english: "hot (person)",
        german: "heiß (Person)",
        french: "chaud (personne)"
      },
      {
        malagasy: "Mangatsiaka",
        english: "cold (person)",
        german: "kalt (Person)",
        french: "froid (personne)"
      },
      {
        malagasy: "Tezitra",
        english: "angry",
        german: "wütend",
        french: "en colère"
      },
      {
        malagasy: "Manahy",
        english: "worried / anxious",
        german: "besorgt / ängstlich",
        french: "inquiet / anxieux"
      },
      {
        malagasy: "Maniry",
        english: "to desire / want",
        german: "wünschen / wollen",
        french: "désirer / vouloir"
      },
      {
        malagasy: "Matahotra",
        english: "scared",
        german: "erschrocken",
        french: "effrayé"
      },
      {
        malagasy: "Mahatsikaiky",
        english: "funny / amusing",
        german: "lustig / amüsant",
        french: "drôle / amusant"
      },
      {
        malagasy: "Mampalahelo",
        english: "regrettable",
        german: "bedauerlich",
        french: "regrettable"
      },
      {
        malagasy: "Mahagaga",
        english: "amazing",
        german: "erstaunlich",
        french: "incroyable"
      },
      {
        malagasy: "Mahafaly",
        english: "pleasant",
        german: "angenehm",
        french: "agréable"
      },
      {
        malagasy: "Mampiseho",
        english: "to show / express",
        german: "zeigen / ausdrücken",
        french: "montrer / exprimer"
      },
      {
        malagasy: "Manome",
        english: "to give",
        german: "to give",
        french: "to give"
      },
      {
        malagasy: "Mampianatra",
        english: "to teach",
        german: "lehren",
        french: "enseigner"
      },
      {
        malagasy: "Mianatra",
        english: "to learn",
        german: "lernen",
        french: "apprendre"
      },
      {
        malagasy: "Manome toky",
        english: "to reassure",
        german: "beruhigen",
        french: "rassurer"
      },
      {
        malagasy: "Mampahatsiahy",
        english: "to remind",
        german: "erinnern",
        french: "rappeler"
      },
      {
        malagasy: "Manadino",
        english: "to forget",
        german: "vergessen",
        french: "oublier"
      },
      {
        malagasy: "Mahatsiaro",
        english: "to remember",
        german: "sich erinnern",
        french: "se souvenir"
      },
      {
        malagasy: "Mankasitraka",
        english: "to appreciate",
        german: "schätzen",
        french: "apprécier"
      },
      {
        malagasy: "Maneho hevitra",
        english: "to give an opinion",
        german: "eine Meinung abgeben",
        french: "donner un avis"
      },
      {
        malagasy: "Manaiky",
        english: "to agree",
        german: "zustimmen",
        french: "être d'accord"
      },
      {
        malagasy: "Manda",
        english: "to refuse",
        german: "ablehnen",
        french: "refuser"
      },
      {
        malagasy: "Mahay",
        english: "to know how / can",
        german: "wissen wie / können",
        french: "savoir / pouvoir"
      },
      {
        malagasy: "Tsy mahay",
        english: "to not know / cannot",
        german: "nicht wissen / nicht können",
        french: "ne pas savoir / ne pas pouvoir"
      },
      {
        malagasy: "Mahazo",
        english: "to receive / get",
        german: "erhalten / bekommen",
        french: "recevoir / obtenir"
      },
      {
        malagasy: "Mandany",
        english: "to spend (time)",
        german: "Zeit verbringen",
        french: "passer (du temps)"
      },
      {
        malagasy: "Mijery",
        english: "to watch / look at",
        german: "anschauen / ansehen",
        french: "regarder"
      }
    ],
  },
  {
    id: "colors",
    title: "Colors",
    emoji: "🎨",
    category: "vocabulary",
    description: "Color vocabulary with shades.",
    cards: [
      {
        front: "Colors",
        back: "Loko",
        front_de: "Colors",
        front_fr: "Colors"
      },
      {
        front: "To be colored",
        back: "Miloko",
        front_de: "To be colored",
        front_fr: "To be colored"
      },
      {
        front: "Blue",
        back: "Manga",
        front_de: "Blue",
        front_fr: "Blue"
      },
      {
        front: "Bluish",
        back: "Mangamanga",
        front_de: "Bluish",
        front_fr: "Bluish"
      },
      {
        front: "Dark blue",
        back: "Manga antitra",
        front_de: "Dark blue",
        front_fr: "Dark blue"
      },
      {
        front: "Light blue",
        back: "Manga tanora",
        front_de: "Light blue",
        front_fr: "Light blue"
      },
      {
        front: "Red",
        back: "Mena",
        front_de: "Red",
        front_fr: "Red"
      },
      {
        front: "White",
        back: "Fotsy",
        front_de: "White",
        front_fr: "White"
      },
      {
        front: "Black",
        back: "Mainty",
        front_de: "Black",
        front_fr: "Black"
      },
      {
        front: "Green",
        back: "Maintso",
        front_de: "Green",
        front_fr: "Green"
      },
      {
        front: "Pink",
        back: "Mavokely",
        front_de: "Pink",
        front_fr: "Pink"
      },
      {
        front: "Yellow",
        back: "Mavo",
        front_de: "Yellow",
        front_fr: "Yellow"
      },
      {
        front: "Orange",
        back: "Volom-boasary",
        front_de: "Orange",
        front_fr: "Orange"
      },
      {
        front: "Brown",
        back: "Volon-tsokola",
        front_de: "Brown",
        front_fr: "Brown"
      },
      {
        front: "Grey",
        back: "Volon-davenona",
        front_de: "Grey",
        front_fr: "Grey"
      }
    ],
    vocab: [
      {
        malagasy: "Manga",
        english: "Blue",
        german: "Blau",
        french: "Bleu"
      },
      {
        malagasy: "Mena",
        english: "Red",
        german: "Rot",
        french: "Rouge"
      },
      {
        malagasy: "Fotsy",
        english: "White",
        german: "Weiß",
        french: "Blanc"
      },
      {
        malagasy: "Mainty",
        english: "Black",
        german: "Schwarz",
        french: "Noir"
      },
      {
        malagasy: "Maintso",
        english: "Green",
        german: "Grün",
        french: "Vert"
      },
      {
        malagasy: "Mavo",
        english: "Yellow",
        german: "Gelb",
        french: "Jaune"
      },
      {
        malagasy: "Mavokely",
        english: "Pink",
        german: "Rosa",
        french: "Rose"
      },
      {
        malagasy: "Loko",
        english: "Colors",
        german: "Farben",
        french: "Couleurs"
      },
      {
        malagasy: "Miloko",
        english: "To be colored",
        german: "Gefärbt sein",
        french: "Être coloré"
      },
      {
        malagasy: "Mangamanga",
        english: "Bluish",
        german: "Bläulich",
        french: "Bleuâtre"
      },
      {
        malagasy: "Manga antitra",
        english: "Dark blue",
        german: "Dunkelblau",
        french: "Bleu foncé"
      },
      {
        malagasy: "Manga tanora",
        english: "Light blue",
        german: "Hellblau",
        french: "Bleu clair"
      },
      {
        malagasy: "Volom-boasary",
        english: "Orange",
        german: "Orange",
        french: "Orange"
      },
      {
        malagasy: "Volon-tsokola",
        english: "Brown",
        german: "Braun",
        french: "Marron"
      },
      {
        malagasy: "Volon-davenona",
        english: "Grey",
        german: "Grau",
        french: "Gris"
      },
      {
        malagasy: "Mena-mena",
        english: "Reddish",
        german: "Rötlich",
        french: "Rougeâtre"
      },
      {
        malagasy: "Fotsy fotsy",
        english: "Very white",
        german: "Sehr weiß",
        french: "Très blanc"
      },
      {
        malagasy: "Mainty mainty",
        english: "Very black / pitch black",
        german: "Sehr schwarz / Pechschwarz",
        french: "Très noir"
      },
      {
        malagasy: "Mavo-mavo",
        english: "Yellowish",
        german: "Gelblich",
        french: "Jaunâtre"
      },
      {
        malagasy: "Maintso mainty",
        english: "Dark green",
        german: "Dunkelgrün",
        french: "Vert foncé"
      },
      {
        malagasy: "Maintso tanora",
        english: "Light green",
        german: "Hellgrün",
        french: "Vert clair"
      },
      {
        malagasy: "Loko anaty",
        english: "Color inside",
        german: "Farbe innen",
        french: "Couleur intérieure"
      },
      {
        malagasy: "Loko ivelany",
        english: "Color outside",
        german: "Farbe außen",
        french: "Couleur extérieure"
      }
    ],
  },
  {
    id: "furniture",
    title: "House & Furniture",
    emoji: "🏠",
    category: "vocabulary",
    description: "Items found in a typical home.",
    cards: [
      {
        front: "Chair",
        back: "Seza",
        front_de: "Chair",
        front_fr: "Chair"
      },
      {
        front: "Table",
        back: "Latabatra",
        front_de: "Table",
        front_fr: "Table"
      },
      {
        front: "Bed frame",
        back: "Farafara",
        front_de: "Bed frame",
        front_fr: "Bed frame"
      },
      {
        front: "Mattress",
        back: "Kidoro",
        front_de: "Mattress",
        front_fr: "Mattress"
      },
      {
        front: "Pillow",
        back: "Ondana",
        front_de: "Pillow",
        front_fr: "Pillow"
      },
      {
        front: "Blankets",
        back: "Bodofotsy",
        front_de: "Blankets",
        front_fr: "Blankets"
      },
      {
        front: "Towel",
        back: "Servieta",
        front_de: "Towel",
        front_fr: "Towel"
      },
      {
        front: "Light",
        back: "Jiro",
        front_de: "Light",
        front_fr: "Light"
      },
      {
        front: "Door",
        back: "Varavarana",
        front_de: "Door",
        front_fr: "Door"
      },
      {
        front: "Window",
        back: "Varavarankely",
        front_de: "Window",
        front_fr: "Window"
      },
      {
        front: "Mosquito net",
        back: "Lay",
        front_de: "Mosquito net",
        front_fr: "Mosquito net"
      },
      {
        front: "Plastic mug",
        back: "Zinga",
        front_de: "Plastic mug",
        front_fr: "Plastic mug"
      },
      {
        front: "Bucket",
        back: "Sio",
        front_de: "Bucket",
        front_fr: "Bucket"
      }
    ],
    vocab: [
      {
        malagasy: "Seza",
        english: "Chair",
        german: "Stuhl",
        french: "Chaise"
      },
      {
        malagasy: "Latabatra",
        english: "Table",
        german: "Tisch",
        french: "Table"
      },
      {
        malagasy: "Farafara",
        english: "Bed",
        german: "Bett",
        french: "Lit"
      },
      {
        malagasy: "Kidoro",
        english: "Mattress",
        german: "Matratze",
        french: "Matelas"
      },
      {
        malagasy: "Lay",
        english: "Mosquito net",
        german: "Moskitonetz",
        french: "Moustiquaire"
      },
      {
        malagasy: "Varavarankely",
        english: "Window",
        german: "Fenster",
        french: "Fenêtre"
      },
      {
        malagasy: "Varavarana",
        english: "Door",
        german: "Tür",
        french: "Porte"
      },
      {
        malagasy: "Ondana",
        english: "Pillow",
        german: "Kissen",
        french: "Oreiller"
      },
      {
        malagasy: "Bodofotsy",
        english: "Blankets",
        german: "Decken",
        french: "Couvertures"
      },
      {
        malagasy: "Servieta",
        english: "Towel",
        german: "Handtuch",
        french: "Serviette"
      },
      {
        malagasy: "Jiro",
        english: "Light",
        german: "Licht",
        french: "Lumière"
      },
      {
        malagasy: "Zinga",
        english: "Plastic mug",
        german: "Plastikbecher",
        french: "Gobelet en plastique"
      },
      {
        malagasy: "Sio",
        english: "Bucket",
        german: "Eimer",
        french: "Seau"
      },
      {
        malagasy: "Trano",
        english: "House",
        german: "Haus",
        french: "Maison"
      },
      {
        malagasy: "Trano fandraisam-bahiny",
        english: "Guest house / Hotel",
        german: "Gästehaus / Hotel",
        french: "Maison d'hôtes / Hôtel"
      },
      {
        malagasy: "Trano fidiovana",
        english: "Bathroom",
        german: "Badezimmer",
        french: "Salle de bain"
      },
      {
        malagasy: "Trano fihinanana",
        english: "Dining room",
        german: "Esszimmer",
        french: "Salle à manger"
      },
      {
        malagasy: "Trano fandraisana",
        english: "Living room",
        german: "Wohnzimmer",
        french: "Salon"
      },
      {
        malagasy: "Trano fambolena",
        english: "Farmhouse",
        german: "Bauernhaus",
        french: "Ferme"
      },
      {
        malagasy: "Tohatra",
        english: "Stairs",
        german: "Treppe",
        french: "Escaliers"
      },
      {
        malagasy: "Rindrina",
        english: "Wall",
        german: "Wand",
        french: "Mur"
      },
      {
        malagasy: "Tafotrano",
        english: "Roof",
        german: "Dach",
        french: "Toit"
      },
      {
        malagasy: "Tany",
        english: "Floor / Ground",
        german: "Boden / Erde",
        french: "Sol / Terre"
      },
      {
        malagasy: "Kodiarana",
        english: "Cement floor",
        german: "Zementboden",
        french: "Sol en ciment"
      },
      {
        malagasy: "Kitapo",
        english: "Bag / Suitcase",
        german: "Tasche / Koffer",
        french: "Sac / Valise"
      },
      {
        malagasy: "Sakafo",
        english: "Food",
        german: "Essen",
        french: "Nourriture"
      },
      {
        malagasy: "Fanaka",
        english: "Furniture / Equipment",
        german: "Möbel / Ausrüstung",
        french: "Meubles / Équipement"
      },
      {
        malagasy: "Fitaovana",
        english: "Tools / Appliances",
        german: "Werkzeuge / Geräte",
        french: "Outils / Appareils"
      },
      {
        malagasy: "Jiro vony",
        english: "Flashlight",
        german: "Taschenlampe",
        french: "Lampe torche"
      },
      {
        malagasy: "Famantaranandro",
        english: "Clock / Watch",
        german: "Uhr / Armbanduhr",
        french: "Horloge / Montre"
      },
      {
        malagasy: "Radio",
        english: "Radio",
        german: "Radio",
        french: "Radio"
      },
      {
        malagasy: "Serasera",
        english: "Fan",
        german: "Ventilator",
        french: "Ventilateur"
      },
      {
        malagasy: "Tapaka",
        english: "Cut / Broken",
        german: "Geschnitten / Kaputt",
        french: "Coupé / Cassé"
      },
      {
        malagasy: "Madio",
        english: "Clean",
        german: "Sauber",
        french: "Propre"
      },
      {
        malagasy: "Maloto",
        english: "Dirty",
        german: "Schmutzig",
        french: "Sale"
      },
      {
        malagasy: "Mangatsiaka (trano)",
        english: "Cool (house)",
        german: "Kühl (Haus)",
        french: "Frais (maison)"
      },
      {
        malagasy: "Mafana (trano)",
        english: "Warm (house)",
        german: "Warm (Haus)",
        french: "Chaud (maison)"
      }
    ],
  },
  {
    id: "verbs",
    title: "Verbs & Conjugation",
    emoji: "⚡",
    category: "grammar",
    description: "Master verb tenses and conjugation patterns in Malagasy.",
    cards: [
      {
        front: "Present tense: mi- prefix. Example: mihinana (to eat)",
        back: "Mihinana = eat (present)",
        front_de: "Present tense: mi- prefix. Example: mihinana (to eat)",
        front_fr: "Present tense: mi- prefix. Example: mihinana (to eat)"
      },
      {
        front: "Future tense: hi- prefix. Example: hihinana (will eat)",
        back: "Hihinana = will eat",
        front_de: "Future tense: hi- prefix. Example: hihinana (will eat)",
        front_fr: "Future tense: hi- prefix. Example: hihinana (will eat)"
      },
      {
        front: "Past tense: ni- prefix. Example: nihinana (ate)",
        back: "Nihinana = ate",
        front_de: "Past tense: ni- prefix. Example: nihinana (ate)",
        front_fr: "Past tense: ni- prefix. Example: nihinana (ate)"
      },
      {
        front: "Passive voice: voa- prefix. Example: voafetra (to be limited)",
        back: "Voafetra = to be limited",
        front_de: "Passive voice: voa- prefix. Example: voafetra (to be limited)",
        front_fr: "Passive voice: voa- prefix. Example: voafetra (to be limited)"
      },
      {
        front: "Causative: mamp- prefix. Example: mampihatra (to enforce)",
        back: "Mampihatra = to enforce",
        front_de: "Causative: mamp- prefix. Example: mampihatra (to enforce)",
        front_fr: "Causative: mamp- prefix. Example: mampihatra (to enforce)"
      },
      {
        front: "Reciprocal: mi- ... -ana suffix. Example: mifankahalana (to hate each other)",
        back: "Mifankahalana = to hate each other",
        front_de: "Reciprocal: mi- ... -ana suffix. Example: mifankahalana (to hate each other)",
        front_fr: "Reciprocal: mi- ... -ana suffix. Example: mifankahalana (to hate each other)"
      },
      {
        front: "mankafy = to enjoy / like",
        back: "Present: mankafy | Future: hankafy | Past: nankafy",
        front_de: "mankafy = to enjoy / like",
        front_fr: "mankafy = to enjoy / like"
      },
      {
        front: "mianatra = to learn",
        back: "Present: mianatra | Future: hianatra | Past: nianatra",
        front_de: "mianatra = to learn",
        front_fr: "mianatra = to learn"
      },
      {
        front: "mipetraka = to live / sit",
        back: "Present: mipetraka | Future: hipetraka | Past: nipetraka",
        front_de: "mipetraka = to live / sit",
        front_fr: "mipetraka = to live / sit"
      },
      {
        front: "mijery = to look at / watch",
        back: "Present: mijery | Future: hijery | Past: nijery",
        front_de: "mijery = to look at / watch",
        front_fr: "mijery = to look at / watch"
      },
      {
        front: "miteny = to speak",
        back: "Present: miteny | Future: hiteny | Past: niteny",
        front_de: "miteny = to speak",
        front_fr: "miteny = to speak"
      },
      {
        front: "manao = to do / make",
        back: "Present: manao | Future: hanao | Past: nanao",
        front_de: "manao = to do / make",
        front_fr: "manao = to do / make"
      },
      {
        front: "mividy = to buy",
        back: "Present: mividy | Future: hividy | Past: nividy",
        front_de: "mividy = to buy",
        front_fr: "mividy = to buy"
      },
      {
        front: "mamely = to hit",
        back: "Present: mamely | Future: hamely | Past: namely",
        front_de: "mamely = to hit",
        front_fr: "mamely = to hit"
      },
      {
        front: "mandeha = to go / walk",
        back: "Present: mandeha | Future: handeha | Past: nandeha",
        front_de: "mandeha = to go / walk",
        front_fr: "mandeha = to go / walk"
      },
      {
        front: "mitady = to search / look for",
        back: "Present: mitady | Future: hitady | Past: nitady",
        front_de: "mitady = to search / look for",
        front_fr: "mitady = to search / look for"
      },
      {
        front: "manome = to give",
        back: "Present: manome | Future: hanome | Past: nanome",
        front_de: "manome = to give",
        front_fr: "manome = to give"
      },
      {
        front: "manao ahoana = to do how (idiom for greeting)",
        back: "Manao ahoana? = How are you?",
        front_de: "manao ahoana = to do how (idiom for greeting)",
        front_fr: "manao ahoana = to do how (idiom for greeting)"
      },
      {
        front: "mampiasa = to use",
        back: "Present: mampiasa | Future: hampiasa | Past: nampiasa",
        front_de: "mampiasa = to use",
        front_fr: "mampiasa = to use"
      },
      {
        front: "mamorona = to create",
        back: "Present: mamorona | Future: hamorona | Past: namorona",
        front_de: "mamorona = to create",
        front_fr: "mamorona = to create"
      }
    ],
    vocab: [
      {
        malagasy: "mihinana",
        english: "to eat (present)",
        german: "essen (Gegenwart)",
        french: "manger (présent)"
      },
      {
        malagasy: "hihinana",
        english: "will eat (future)",
        german: "wird essen (Zukunft)",
        french: "mangera (futur)"
      },
      {
        malagasy: "nihinana",
        english: "ate (past)",
        german: "aß (Vergangenheit)",
        french: "a mangé (passé)"
      },
      {
        malagasy: "misotro",
        english: "to drink",
        german: "trinken",
        french: "boire"
      },
      {
        malagasy: "mandeha",
        english: "to go",
        german: "gehen",
        french: "aller"
      },
      {
        malagasy: "mitady",
        english: "to search",
        german: "suchen",
        french: "chercher"
      },
      {
        malagasy: "manome",
        english: "to give",
        german: "to give",
        french: "to give"
      },
      {
        malagasy: "mampiasa",
        english: "to use",
        german: "benutzen",
        french: "utiliser"
      },
      {
        malagasy: "mijery",
        english: "to look at",
        german: "anschauen",
        french: "regarder"
      },
      {
        malagasy: "miteny",
        english: "to speak",
        german: "sprechen",
        french: "parler"
      },
      {
        malagasy: "manao",
        english: "to do",
        german: "tun",
        french: "faire"
      },
      {
        malagasy: "mividy",
        english: "to buy",
        german: "kaufen",
        french: "acheter"
      },
      {
        malagasy: "mamely",
        english: "to hit",
        german: "schlagen",
        french: "frapper"
      },
      {
        malagasy: "mampihatra",
        english: "to enforce",
        german: "durchsetzen",
        french: "appliquer"
      },
      {
        malagasy: "voafetra",
        english: "to be limited",
        german: "begrenzt sein",
        french: "être limité"
      },
      {
        malagasy: "mifankahalana",
        english: "to hate each other",
        german: "sich hassen",
        french: "se détester"
      },
      {
        malagasy: "mankafy",
        english: "to enjoy",
        german: "genießen",
        french: "apprécier"
      },
      {
        malagasy: "mipetraka",
        english: "to live",
        german: "leben",
        french: "vivre"
      },
      {
        malagasy: "mianatra",
        english: "to learn",
        german: "lernen",
        french: "apprendre"
      },
      {
        malagasy: "mamorona",
        english: "to create",
        german: "erschaffen",
        french: "créer"
      },
      {
        malagasy: "mitady",
        english: "to search",
        german: "suchen",
        french: "chercher"
      },
      {
        malagasy: "mividy",
        english: "to buy",
        german: "kaufen",
        french: "acheter"
      },
      {
        malagasy: "manome",
        english: "to give",
        german: "to give",
        french: "to give"
      },
      {
        malagasy: "manao",
        english: "to do",
        german: "tun",
        french: "faire"
      },
      {
        malagasy: "mijery",
        english: "to look at",
        german: "anschauen",
        french: "regarder"
      }
    ],
  },
  {
    id: "pronouns",
    title: "Pronouns & Possession",
    emoji: "👤",
    category: "grammar",
    description: "Personal pronouns, demonstratives, and possession patterns.",
    cards: [
      {
        front: "Aho = I / I am",
        back: "First person singular",
        front_de: "Aho = I / I am",
        front_fr: "Aho = I / I am"
      },
      {
        front: "Ianao = You / You are",
        back: "Second person singular",
        front_de: "Ianao = You / You are",
        front_fr: "Ianao = You / You are"
      },
      {
        front: "Izy = He/She / He is/She is",
        back: "Third person singular",
        front_de: "Izy = He/She / He is/She is",
        front_fr: "Izy = He/She / He is/She is"
      },
      {
        front: "Isika = We (inclusive) — includes the person spoken to",
        back: "First person plural inclusive",
        front_de: "Isika = We (inclusive) — includes the person spoken to",
        front_fr: "Isika = We (inclusive) — includes the person spoken to"
      },
      {
        front: "Izahay = We (exclusive) — excludes the person spoken to",
        back: "First person plural exclusive",
        front_de: "Izahay = We (exclusive) — excludes the person spoken to",
        front_fr: "Izahay = We (exclusive) — excludes the person spoken to"
      },
      {
        front: "Ianareo = You (plural)",
        back: "Second person plural",
        front_de: "Ianareo = You (plural)",
        front_fr: "Ianareo = You (plural)"
      },
      {
        front: "Izireo = They",
        back: "Third person plural",
        front_de: "Izireo = They",
        front_fr: "Izireo = They"
      },
      {
        front: "Ity = This (near speaker)",
        back: "Demonstrative: close to speaker",
        front_de: "Ity = This (near speaker)",
        front_fr: "Ity = This (near speaker)"
      },
      {
        front: "Iry = That (far from speaker)",
        back: "Demonstrative: far from speaker",
        front_de: "Iry = That (far from speaker)",
        front_fr: "Iry = That (far from speaker)"
      },
      {
        front: "Ireo = These / Those (plural)",
        back: "Plural demonstrative",
        front_de: "Ireo = These / Those (plural)",
        front_fr: "Ireo = These / Those (plural)"
      },
      {
        front: "Possession: ny + noun. Example: ny boky = my book",
        back: "Possession uses 'ny' before the noun",
        front_de: "Possession: ny + noun. Example: ny boky = my book",
        front_fr: "Possession: ny + noun. Example: ny boky = my book"
      },
      {
        front: "Ankoatra = besides / except. Used for exclusion.",
        back: "Exclusion particle",
        front_de: "Ankoatra = besides / except. Used for exclusion.",
        front_fr: "Ankoatra = besides / except. Used for exclusion."
      },
      {
        front: "Samy = each / every. Example: samy olona = every person",
        back: "Distributive pronoun",
        front_de: "Samy = each / every. Example: samy olona = every person",
        front_fr: "Samy = each / every. Example: samy olona = every person"
      },
      {
        front: "Tsy misy = there is not / none",
        back: "Negative existential",
        front_de: "Tsy misy = there is not / none",
        front_fr: "Tsy misy = there is not / none"
      },
      {
        front: "Rehefa = when (statement, not question)",
        back: "Temporal conjunction",
        front_de: "Rehefa = when (statement, not question)",
        front_fr: "Rehefa = when (statement, not question)"
      },
      {
        front: "Raha = if",
        back: "Conditional conjunction",
        front_de: "Raha = if",
        front_fr: "Raha = if"
      },
      {
        front: "Satria = because",
        back: "Causal conjunction",
        front_de: "Satria = because",
        front_fr: "Satria = because"
      },
      {
        front: "Fa = but",
        back: "Contrast conjunction",
        front_de: "Fa = but",
        front_fr: "Fa = but"
      },
      {
        front: "Dia = then / and",
        back: "Sequential connector",
        front_de: "Dia = then / and",
        front_fr: "Dia = then / and"
      },
      {
        front: "Ary = and",
        back: "Additive conjunction",
        front_de: "Ary = and",
        front_fr: "Ary = and"
      }
    ],
    vocab: [
      {
        malagasy: "Aho",
        english: "I",
        german: "ich",
        french: "je"
      },
      {
        malagasy: "Ianao",
        english: "You",
        german: "Du / Sie",
        french: "Tu / Vous"
      },
      {
        malagasy: "Izy",
        english: "He/She",
        german: "Er/Sie",
        french: "Il/Elle"
      },
      {
        malagasy: "Isika",
        english: "We (inclusive)",
        german: "Wir (inklusiv)",
        french: "Nous (inclusif)"
      },
      {
        malagasy: "Izahay",
        english: "We (exclusive)",
        german: "Wir (exklusiv)",
        french: "Nous (exclusif)"
      },
      {
        malagasy: "Ianareo",
        english: "You (plural)",
        german: "Ihr (Plural)",
        french: "Vous (pluriel)"
      },
      {
        malagasy: "Izireo",
        english: "They",
        german: "Sie",
        french: "Ils/Elles"
      },
      {
        malagasy: "Ity",
        english: "This",
        german: "Dies",
        french: "Ceci"
      },
      {
        malagasy: "Iry",
        english: "That",
        german: "Das",
        french: "Cela"
      },
      {
        malagasy: "Ireo",
        english: "These/Those",
        german: "Diese/Jene",
        french: "Ceux-ci/Ceux-là"
      },
      {
        malagasy: "ny",
        english: "the / possession marker",
        german: "der/die/das / Besitzmarker",
        french: "le/la/les / marqueur de possession"
      },
      {
        malagasy: "Ankoatra",
        english: "besides / except",
        german: "außer / ausgenommen",
        french: "en plus de / sauf"
      },
      {
        malagasy: "Samy",
        english: "each / every",
        german: "jeder",
        french: "chaque"
      },
      {
        malagasy: "Rehefa",
        english: "when (statement)",
        german: "wenn (Aussage)",
        french: "quand (affirmation)"
      },
      {
        malagasy: "Raha",
        english: "if",
        german: "wenn/falls",
        french: "si"
      },
      {
        malagasy: "Satria",
        english: "because",
        german: "weil",
        french: "parce que"
      },
      {
        malagasy: "Fa",
        english: "but",
        german: "aber",
        french: "mais"
      },
      {
        malagasy: "Dia",
        english: "then / and",
        german: "dann / und",
        french: "alors / et"
      },
      {
        malagasy: "Ary",
        english: "and",
        german: "und",
        french: "et"
      },
      {
        malagasy: "Tsy misy",
        english: "there is not",
        german: "es gibt nicht",
        french: "il n'y a pas"
      },
      {
        malagasy: "ve",
        english: "question particle",
        german: "Fragepartikel",
        french: "particule de question"
      },
      {
        malagasy: "angaha",
        english: "polite question particle",
        german: "höfliche Fragepartikel",
        french: "particule de question polie"
      },
      {
        malagasy: "izany",
        english: "that / it",
        german: "das / es",
        french: "cela / il"
      },
      {
        malagasy: "koa",
        english: "too / also",
        german: "auch / ebenfalls",
        french: "aussi / également"
      }
    ],
  },
  {
    id: "adjectives",
    title: "Adjectives & Descriptions",
    emoji: "✨",
    category: "grammar",
    description: "How adjectives work in Malagasy — placement, intensifiers, and comparison.",
    cards: [
      {
        front: "Adjectives follow the noun. Example: trano lehibe = big house",
        back: "Adjective placement: after noun",
        front_de: "Adjectives follow the noun. Example: trano lehibe = big house",
        front_fr: "Adjectives follow the noun. Example: trano lehibe = big house"
      },
      {
        front: "No 'to be' verb — adjectives imply it. 'Manga izy' = Blue he/she = 'It is blue'",
        back: "Adjectives as predicates",
        front_de: "No 'to be' verb — adjectives imply it. 'Manga izy' = Blue he/she = 'It is blue'",
        front_fr: "No 'to be' verb — adjectives imply it. 'Manga izy' = Blue he/she = 'It is blue'"
      },
      {
        front: "Intensifier: be- prefix. Bevoka = very wet",
        back: "be- = very / intensifier",
        front_de: "Intensifier: be- prefix. Bevoka = very wet",
        front_fr: "Intensifier: be- prefix. Bevoka = very wet"
      },
      {
        front: "Comparison: kokoa = more. 'Lehibe kokoa' = bigger",
        back: "Comparative: kokoa",
        front_de: "Comparison: kokoa = more. 'Lehibe kokoa' = bigger",
        front_fr: "Comparison: kokoa = more. 'Lehibe kokoa' = bigger"
      },
      {
        front: "Superlative: indrindra = most. 'Tsara indrindra' = best",
        back: "Superlative: indrindra",
        front_de: "Superlative: indrindra = most. 'Tsara indrindra' = best",
        front_fr: "Superlative: indrindra = most. 'Tsara indrindra' = best"
      },
      {
        front: "Diminutive: -kely suffix. 'Zazakely' = small child",
        back: "-kely = small / diminutive",
        front_de: "Diminutive: -kely suffix. 'Zazakely' = small child",
        front_fr: "Diminutive: -kely suffix. 'Zazakely' = small child"
      },
      {
        front: "Augmentative: -be suffix. 'Tanabe' = big town",
        back: "-be = big / augmentative",
        front_de: "Augmentative: -be suffix. 'Tanabe' = big town",
        front_fr: "Augmentative: -be suffix. 'Tanabe' = big town"
      },
      {
        front: "Reduplication for emphasis: 'lava lava' = very long",
        back: "Reduplication = emphasis",
        front_de: "Reduplication for emphasis: 'lava lava' = very long",
        front_fr: "Reduplication for emphasis: 'lava lava' = very long"
      },
      {
        front: "Color + antitra = dark. 'Manga antitra' = dark blue",
        back: "antitra = dark (with colors)",
        front_de: "Color + antitra = dark. 'Manga antitra' = dark blue",
        front_fr: "Color + antitra = dark. 'Manga antitra' = dark blue"
      },
      {
        front: "Color + tanora = light. 'Manga tanora' = light blue",
        back: "tanora = light (with colors)",
        front_de: "Color + tanora = light. 'Manga tanora' = light blue",
        front_fr: "Color + tanora = light. 'Manga tanora' = light blue"
      },
      {
        front: "Tsy + adjective = negative. 'Tsy tsara' = not good",
        back: "Negation of adjectives",
        front_de: "Tsy + adjective = negative. 'Tsy tsara' = not good",
        front_fr: "Tsy + adjective = negative. 'Tsy tsara' = not good"
      },
      {
        front: "Maro = many / much. Vitsy = few / little",
        back: "Quantity adjectives",
        front_de: "Maro = many / much. Vitsy = few / little",
        front_fr: "Maro = many / much. Vitsy = few / little"
      },
      {
        front: "Rehetra = all / every. Sasany = some",
        back: "Universal / partial quantifiers",
        front_de: "Rehetra = all / every. Sasany = some",
        front_fr: "Rehetra = all / every. Sasany = some"
      },
      {
        front: "Hafa = different / other. Mitovy = same / equal",
        back: "Similarity / difference",
        front_de: "Hafa = different / other. Mitovy = same / equal",
        front_fr: "Hafa = different / other. Mitovy = same / equal"
      },
      {
        front: "Lava = long. Fohy = short",
        back: "Size adjectives",
        front_de: "Lava = long. Fohy = short",
        front_fr: "Lava = long. Fohy = short"
      },
      {
        front: "Lehibe = big. Kely = small",
        back: "Size opposites",
        front_de: "Lehibe = big. Kely = small",
        front_fr: "Lehibe = big. Kely = small"
      },
      {
        front: "Tsara = good / well. ratsy = bad",
        back: "Quality opposites",
        front_de: "Tsara = good / well. ratsy = bad",
        front_fr: "Tsara = good / well. ratsy = bad"
      },
      {
        front: "Mora = easy / cheap. Sarotra = difficult / expensive",
        back: "Difficulty / price",
        front_de: "Mora = easy / cheap. Sarotra = difficult / expensive",
        front_fr: "Mora = easy / cheap. Sarotra = difficult / expensive"
      },
      {
        front: "Vaovao = new. Taloha = old",
        back: "Age opposites",
        front_de: "Vaovao = new. Taloha = old",
        front_fr: "Vaovao = new. Taloha = old"
      },
      {
        front: "Madio = clean. Maloto = dirty",
        back: "Cleanliness opposites",
        front_de: "Madio = clean. Maloto = dirty",
        front_fr: "Madio = clean. Maloto = dirty"
      }
    ],
    vocab: [
      {
        malagasy: "lehibe",
        english: "big",
        german: "groß",
        french: "grand"
      },
      {
        malagasy: "kely",
        english: "small",
        german: "klein",
        french: "petit"
      },
      {
        malagasy: "lava",
        english: "long",
        german: "lang",
        french: "long"
      },
      {
        malagasy: "fohy",
        english: "short",
        german: "kurz",
        french: "court"
      },
      {
        malagasy: "tsara",
        english: "good",
        german: "gut",
        french: "bon"
      },
      {
        malagasy: "ratsy",
        english: "bad",
        german: "schlecht",
        french: "mauvais"
      },
      {
        malagasy: "vaovao",
        english: "new",
        german: "neu",
        french: "nouveau"
      },
      {
        malagasy: "taloha",
        english: "old",
        german: "alt",
        french: "vieux"
      },
      {
        malagasy: "mora",
        english: "easy / cheap",
        german: "einfach / billig",
        french: "facile / bon marché"
      },
      {
        malagasy: "sarotra",
        english: "difficult / expensive",
        german: "schwierig / teuer",
        french: "difficile / cher"
      },
      {
        malagasy: "madio",
        english: "clean",
        german: "sauber",
        french: "propre"
      },
      {
        malagasy: "maloto",
        english: "dirty",
        german: "schmutzig",
        french: "sale"
      },
      {
        malagasy: "maro",
        english: "many",
        german: "viele",
        french: "beaucoup"
      },
      {
        malagasy: "vitsy",
        english: "few",
        german: "wenige",
        french: "peu"
      },
      {
        malagasy: "rehetra",
        english: "all",
        german: "alle",
        french: "tout"
      },
      {
        malagasy: "sasany",
        english: "some",
        german: "einige",
        french: "quelques"
      },
      {
        malagasy: "hafa",
        english: "different",
        german: "verschieden",
        french: "différent"
      },
      {
        malagasy: "mitovy",
        english: "same",
        german: "gleich",
        french: "égal"
      },
      {
        malagasy: "kokoa",
        english: "more",
        german: "mehr",
        french: "plus"
      },
      {
        malagasy: "indrindra",
        english: "most / especially",
        german: "am meisten / besonders",
        french: "le plus / surtout"
      },
      {
        malagasy: "be-",
        english: "very (prefix)",
        german: "sehr (Präfix)",
        french: "très (préfixe)"
      },
      {
        malagasy: "-kely",
        english: "small (suffix)",
        german: "klein (Suffix)",
        french: "petit (suffixe)"
      },
      {
        malagasy: "-be",
        english: "big (suffix)",
        german: "groß (Suffix)",
        french: "grand (suffixe)"
      },
      {
        malagasy: "antitra",
        english: "dark (with colors)",
        german: "dunkel (bei Farben)",
        french: "foncé (avec couleurs)"
      },
      {
        malagasy: "tanora",
        english: "light (with colors)",
        german: "hell (bei Farben)",
        french: "clair (avec couleurs)"
      }
    ],
  },
  {
    id: "prepositions",
    title: "Prepositions & Location",
    emoji: "📍",
    category: "grammar",
    description: "Spatial and temporal prepositions for describing where and when things happen.",
    cards: [
      {
        front: "Amin'ny = at / in / on. General location marker.",
        back: "General preposition",
        front_de: "Amin'ny = at / in / on. General location marker.",
        front_fr: "Amin'ny = at / in / on. General location marker."
      },
      {
        front: "Any = there / in there. Remote location.",
        back: "Remote location",
        front_de: "Any = there / in there. Remote location.",
        front_fr: "Any = there / in there. Remote location."
      },
      {
        front: "Aty = here. Near speaker.",
        back: "Proximate location",
        front_de: "Aty = here. Near speaker.",
        front_fr: "Aty = here. Near speaker."
      },
      {
        front: "Ao = inside. Example: ao an-trano = inside the house",
        back: "Inside",
        front_de: "Ao = inside. Example: ao an-trano = inside the house",
        front_fr: "Ao = inside. Example: ao an-trano = inside the house"
      },
      {
        front: "Ivelany = outside. Example: ivelany = outside",
        back: "Outside",
        front_de: "Ivelany = outside. Example: ivelany = outside",
        front_fr: "Ivelany = outside. Example: ivelany = outside"
      },
      {
        front: "Amin'ny ala = in the forest",
        back: "Specific location example",
        front_de: "Amin'ny ala = in the forest",
        front_fr: "Amin'ny ala = in the forest"
      },
      {
        front: "Amin'ny tany = on the ground",
        back: "Specific location example",
        front_de: "Amin'ny tany = on the ground",
        front_fr: "Amin'ny tany = on the ground"
      },
      {
        front: "Any an-tampony = on top of it",
        back: "On top",
        front_de: "Any an-tampony = on top of it",
        front_fr: "Any an-tampony = on top of it"
      },
      {
        front: "Any ambany = underneath",
        back: "Underneath",
        front_de: "Any ambany = underneath",
        front_fr: "Any ambany = underneath"
      },
      {
        front: "Any akaiky = nearby / close",
        back: "Nearby",
        front_de: "Any akaiky = nearby / close",
        front_fr: "Any akaiky = nearby / close"
      },
      {
        front: "Any lavitra = far away",
        back: "Far away",
        front_de: "Any lavitra = far away",
        front_fr: "Any lavitra = far away"
      },
      {
        front: "Amin'ny soroka = at the corner",
        back: "At the corner",
        front_de: "Amin'ny soroka = at the corner",
        front_fr: "Amin'ny soroka = at the corner"
      },
      {
        front: "Amin'ny sisin'ny = at the edge of",
        back: "At the edge",
        front_de: "Amin'ny sisin'ny = at the edge of",
        front_fr: "Amin'ny sisin'ny = at the edge of"
      },
      {
        front: "Amin'ny afovoany = in the middle",
        back: "In the middle",
        front_de: "Amin'ny afovoany = in the middle",
        front_fr: "Amin'ny afovoany = in the middle"
      },
      {
        front: "Amin'ny farany = at the end",
        back: "At the end",
        front_de: "Amin'ny farany = at the end",
        front_fr: "Amin'ny farany = at the end"
      },
      {
        front: "Talohan'ny = before. Example: talohan'ny latabatra",
        back: "Before (time/space)",
        front_de: "Talohan'ny = before. Example: talohan'ny latabatra",
        front_fr: "Talohan'ny = before. Example: talohan'ny latabatra"
      },
      {
        front: "Aorian'ny = after. Example: aorian'ny latabatra",
        back: "After (time/space)",
        front_de: "Aorian'ny = after. Example: aorian'ny latabatra",
        front_fr: "Aorian'ny = after. Example: aorian'ny latabatra"
      },
      {
        front: "Miaraka amin'ny = with / together with",
        back: "Accompaniment",
        front_de: "Miaraka amin'ny = with / together with",
        front_fr: "Miaraka amin'ny = with / together with"
      },
      {
        front: "Tsy misy afa-tsy = except / apart from",
        back: "Exclusion",
        front_de: "Tsy misy afa-tsy = except / apart from",
        front_fr: "Tsy misy afa-tsy = except / apart from"
      },
      {
        front: "Manodidina = around. Example: manodidina ny trano",
        back: "Around",
        front_de: "Manodidina = around. Example: manodidina ny trano",
        front_fr: "Manodidina = around. Example: manodidina ny trano"
      }
    ],
    vocab: [
      {
        malagasy: "Amin'ny",
        english: "at / in / on",
        german: "an / in / auf",
        french: "à / dans / sur"
      },
      {
        malagasy: "Any",
        english: "there",
        german: "dort",
        french: "là"
      },
      {
        malagasy: "Aty",
        english: "here",
        german: "hier",
        french: "ici"
      },
      {
        malagasy: "Ao",
        english: "inside",
        german: "drinnen",
        french: "à l'intérieur"
      },
      {
        malagasy: "Ivelany",
        english: "outside",
        german: "draußen",
        french: "à l'extérieur"
      },
      {
        malagasy: "Tampony",
        english: "top",
        german: "oben / Spitze",
        french: "haut / sommet"
      },
      {
        malagasy: "Ambany",
        english: "underneath",
        german: "darunter",
        french: "en dessous"
      },
      {
        malagasy: "Akaiky",
        english: "nearby",
        german: "in der Nähe",
        french: "à proximité"
      },
      {
        malagasy: "Lavitra",
        english: "far",
        german: "weit",
        french: "loin"
      },
      {
        malagasy: "Soroka",
        english: "corner",
        german: "Ecke",
        french: "coin"
      },
      {
        malagasy: "Sisin'ny",
        english: "edge",
        german: "Rand",
        french: "bord"
      },
      {
        malagasy: "Afovoany",
        english: "middle",
        german: "Mitte",
        french: "milieu"
      },
      {
        malagasy: "Farany",
        english: "end",
        german: "Ende",
        french: "fin"
      },
      {
        malagasy: "Talohan'ny",
        english: "before",
        german: "vor",
        french: "avant"
      },
      {
        malagasy: "Aorian'ny",
        english: "after",
        german: "nach",
        french: "après"
      },
      {
        malagasy: "Miaraka amin'ny",
        english: "with",
        german: "mit",
        french: "avec"
      },
      {
        malagasy: "Manodidina",
        english: "around",
        german: "um",
        french: "autour"
      },
      {
        malagasy: "Amin'ny ala",
        english: "in the forest",
        german: "im Wald",
        french: "dans la forêt"
      },
      {
        malagasy: "Amin'ny tany",
        english: "on the ground",
        german: "auf dem Boden",
        french: "sur le sol"
      },
      {
        malagasy: "Amin'ny an-tampony",
        english: "on top",
        german: "oben drauf",
        french: "au-dessus"
      },
      {
        malagasy: "Amin'ny ambany",
        english: "underneath",
        german: "darunter",
        french: "en dessous"
      },
      {
        malagasy: "Tsy misy afa-tsy",
        english: "except",
        german: "außer",
        french: "sauf"
      },
      {
        malagasy: "Ao an-trano",
        english: "inside the house",
        german: "im Haus",
        french: "à l'intérieur de la maison"
      },
      {
        malagasy: "Ivelan'ny",
        english: "outside of",
        german: "außerhalb von",
        french: "en dehors de"
      },
      {
        malagasy: "Any an-tampony",
        english: "on top of it",
        german: "darauf",
        french: "dessus"
      }
    ],
  },
  {
    id: "negation",
    title: "Negation & Modifiers",
    emoji: "🚫",
    category: "grammar",
    description: "How to negate sentences, form questions, and use modifiers.",
    cards: [
      {
        front: "Tsy = no / not. Placed before the verb or adjective.",
        back: "Basic negation",
        front_de: "Tsy = no / not. Placed before the verb or adjective.",
        front_fr: "Tsy = no / not. Placed before the verb or adjective."
      },
      {
        front: "Tsy misy = there is not / none. Negative of 'misy'.",
        back: "Negative existence",
        front_de: "Tsy misy = there is not / none. Negative of 'misy'.",
        front_fr: "Tsy misy = there is not / none. Negative of 'misy'."
      },
      {
        front: "Tsy maintsy = must / have to. Example: Tsy maintsy mandeha aho.",
        back: "Obligation",
        front_de: "Tsy maintsy = must / have to. Example: Tsy maintsy mandeha aho.",
        front_fr: "Tsy maintsy = must / have to. Example: Tsy maintsy mandeha aho."
      },
      {
        front: "Tsy afaka = cannot. Example: Tsy afaka mianatra aho.",
        back: "Inability",
        front_de: "Tsy afaka = cannot. Example: Tsy afaka mianatra aho.",
        front_fr: "Tsy afaka = cannot. Example: Tsy afaka mianatra aho."
      },
      {
        front: "Tsy tia = do not like. Example: Tsy tia hena aho.",
        back: "Negative preference",
        front_de: "Tsy tia = do not like. Example: Tsy tia hena aho.",
        front_fr: "Tsy tia = do not like. Example: Tsy tia hena aho."
      },
      {
        front: "Aza = don't (imperative). Example: Aza manao izany!",
        back: "Negative command",
        front_de: "Aza = don't (imperative). Example: Aza manao izany!",
        front_fr: "Aza = don't (imperative). Example: Aza manao izany!"
      },
      {
        front: "Tsy azo atao = impossible / not allowed",
        back: "Prohibition",
        front_de: "Tsy azo atao = impossible / not allowed",
        front_fr: "Tsy azo atao = impossible / not allowed"
      },
      {
        front: "Ve = question particle for yes/no. Added at end.",
        back: "Yes/no question marker",
        front_de: "Ve = question particle for yes/no. Added at end.",
        front_fr: "Ve = question particle for yes/no. Added at end."
      },
      {
        front: "Angaha = polite question particle. Softer than 've'.",
        back: "Polite question marker",
        front_de: "Angaha = polite question particle. Softer than 've'.",
        front_fr: "Angaha = polite question particle. Softer than 've'."
      },
      {
        front: "Inona? = What?",
        back: "Content question",
        front_de: "Inona? = What?",
        front_fr: "Inona? = What?"
      },
      {
        front: "Iza? = Who?",
        back: "Person question",
        front_de: "Iza? = Who?",
        front_fr: "Iza? = Who?"
      },
      {
        front: "Aiza? = Where?",
        back: "Location question",
        front_de: "Aiza? = Where?",
        front_fr: "Aiza? = Where?"
      },
      {
        front: "Fa maninona? = Why?",
        back: "Reason question",
        front_de: "Fa maninona? = Why?",
        front_fr: "Fa maninona? = Why?"
      },
      {
        front: "Ahoana? = How?",
        back: "Manner question",
        front_de: "Ahoana? = How?",
        front_fr: "Ahoana? = How?"
      },
      {
        front: "Firy? = How many?",
        back: "Quantity question",
        front_de: "Firy? = How many?",
        front_fr: "Firy? = How many?"
      },
      {
        front: "Oviana? = When? (questions only)",
        back: "Temporal question",
        front_de: "Oviana? = When? (questions only)",
        front_fr: "Oviana? = When? (questions only)"
      },
      {
        front: "Hoatrinona? = How much?",
        back: "Price question",
        front_de: "Hoatrinona? = How much?",
        front_fr: "Hoatrinona? = How much?"
      },
      {
        front: "Mbola = still / yet. Example: Mbola tsara izy.",
        back: "Continuative",
        front_de: "Mbola = still / yet. Example: Mbola tsara izy.",
        front_fr: "Mbola = still / yet. Example: Mbola tsara izy."
      },
      {
        front: "Efa = already. Example: Efa tonga izy.",
        back: "Completive",
        front_de: "Efa = already. Example: Efa tonga izy.",
        front_fr: "Efa = already. Example: Efa tonga izy."
      },
      {
        front: "Vao = just / recently. Example: Vao niverena izy.",
        back: "Recent past",
        front_de: "Vao = just / recently. Example: Vao niverena izy.",
        front_fr: "Vao = just / recently. Example: Vao niverena izy."
      }
    ],
    vocab: [
      {
        malagasy: "Tsy",
        english: "no / not",
        german: "nein / nicht",
        french: "non / ne pas"
      },
      {
        malagasy: "Tsy misy",
        english: "there is not",
        german: "es gibt nicht",
        french: "il n'y a pas"
      },
      {
        malagasy: "Tsy maintsy",
        english: "must",
        german: "muss",
        french: "devoir"
      },
      {
        malagasy: "Tsy afaka",
        english: "cannot",
        german: "kann nicht",
        french: "ne peut pas"
      },
      {
        malagasy: "Tsy tia",
        english: "do not like",
        german: "mag nicht",
        french: "ne pas aimer"
      },
      {
        malagasy: "Aza",
        english: "don't",
        german: "nicht",
        french: "ne pas"
      },
      {
        malagasy: "Tsy azo atao",
        english: "impossible",
        german: "unmöglich",
        french: "impossible"
      },
      {
        malagasy: "Ve",
        english: "question particle",
        german: "Fragepartikel",
        french: "particule de question"
      },
      {
        malagasy: "Angaha",
        english: "polite question",
        german: "höfliche Frage",
        french: "question polie"
      },
      {
        malagasy: "Mbola",
        english: "still",
        german: "noch",
        french: "encore"
      },
      {
        malagasy: "Efa",
        english: "already",
        german: "schon",
        french: "déjà"
      },
      {
        malagasy: "Vao",
        english: "just / recently",
        german: "gerade / kürzlich",
        french: "juste / récemment"
      },
      {
        malagasy: "tsara",
        english: "good",
        german: "gut",
        french: "bon"
      },
      {
        malagasy: "tsy tsara",
        english: "not good",
        german: "nicht gut",
        french: "pas bon"
      },
      {
        malagasy: "misy",
        english: "there is",
        german: "es gibt",
        french: "il y a"
      },
      {
        malagasy: "tsy misy",
        english: "there is not",
        german: "es gibt nicht",
        french: "il n'y a pas"
      },
      {
        malagasy: "maintsy",
        english: "must",
        german: "muss",
        french: "devoir"
      },
      {
        malagasy: "afaka",
        english: "can",
        german: "can",
        french: "can"
      },
      {
        malagasy: "tsy afaka",
        english: "cannot",
        german: "kann nicht",
        french: "ne peut pas"
      },
      {
        malagasy: "tia",
        english: "to like",
        german: "mögen",
        french: "aimer"
      },
      {
        malagasy: "tsy tia",
        english: "to not like",
        german: "nicht mögen",
        french: "ne pas aimer"
      },
      {
        malagasy: "azo atao",
        english: "possible",
        german: "möglich",
        french: "possible"
      },
      {
        malagasy: "tsy azo atao",
        english: "impossible",
        german: "unmöglich",
        french: "impossible"
      },
      {
        malagasy: "maintsy mandeha",
        english: "must go",
        german: "muss gehen",
        french: "doit partir"
      },
      {
        malagasy: "efa tonga",
        english: "already arrived",
        german: "schon angekommen",
        french: "déjà arrivé"
      }
    ],
  },
  {
    id: "body",
    title: "Body Parts & Health",
    emoji: "🩺",
    category: "vocabulary",
    description: "Body parts, symptoms, and medical phrases for emergencies and doctor visits.",
    cards: [
      {
        front: "Head",
        back: "Loha",
        front_de: "Head",
        front_fr: "Head"
      },
      {
        front: "Face",
        back: "Tarehy",
        front_de: "Face",
        front_fr: "Face"
      },
      {
        front: "Eye",
        back: "Maso",
        front_de: "Eye",
        front_fr: "Eye"
      },
      {
        front: "Ear",
        back: "Sofina",
        front_de: "Ear",
        front_fr: "Ear"
      },
      {
        front: "Nose",
        back: "Orona",
        front_de: "Nose",
        front_fr: "Nose"
      },
      {
        front: "Mouth",
        back: "Vava",
        front_de: "Mouth",
        front_fr: "Mouth"
      },
      {
        front: "Tooth / Teeth",
        back: "Nify",
        front_de: "Tooth / Teeth",
        front_fr: "Tooth / Teeth"
      },
      {
        front: "Tongue",
        back: "Lela",
        front_de: "Tongue",
        front_fr: "Tongue"
      },
      {
        front: "Neck",
        back: "Vozona",
        front_de: "Neck",
        front_fr: "Neck"
      },
      {
        front: "Shoulder",
        back: "Soroka",
        front_de: "Shoulder",
        front_fr: "Shoulder"
      },
      {
        front: "Arm / Hand",
        back: "Tanana",
        front_de: "Arm / Hand",
        front_fr: "Arm / Hand"
      },
      {
        front: "Finger",
        back: "Rantsantanana",
        front_de: "Finger",
        front_fr: "Finger"
      },
      {
        front: "Chest",
        back: "Tratra",
        front_de: "Chest",
        front_fr: "Chest"
      },
      {
        front: "Stomach / Belly",
        back: "Kibo",
        front_de: "Stomach / Belly",
        front_fr: "Stomach / Belly"
      },
      {
        front: "Back",
        back: "Lamosina",
        front_de: "Back",
        front_fr: "Back"
      },
      {
        front: "Leg / Foot",
        back: "Tongotra",
        front_de: "Leg / Foot",
        front_fr: "Leg / Foot"
      },
      {
        front: "Knee",
        back: "Lohalika",
        front_de: "Knee",
        front_fr: "Knee"
      },
      {
        front: "Bone",
        back: "Taolana",
        front_de: "Bone",
        front_fr: "Bone"
      },
      {
        front: "Blood",
        back: "Ra",
        front_de: "Blood",
        front_fr: "Blood"
      },
      {
        front: "Skin",
        back: "Hoditra",
        front_de: "Skin",
        front_fr: "Skin"
      },
      {
        front: "Heart",
        back: "Fo",
        front_de: "Heart",
        front_fr: "Heart"
      },
      {
        front: "I am sick.",
        back: "Marary aho.",
        front_de: "I am sick.",
        front_fr: "I am sick."
      },
      {
        front: "It hurts here.",
        back: "Mampahory eto.",
        front_de: "It hurts here.",
        front_fr: "It hurts here."
      },
      {
        front: "I have a fever.",
        back: "Tazo aho.",
        front_de: "I have a fever.",
        front_fr: "I have a fever."
      },
      {
        front: "I need a doctor.",
        back: "Mila dokotera aho.",
        front_de: "I need a doctor.",
        front_fr: "I need a doctor."
      }
    ],
    vocab: [
      {
        malagasy: "Loha",
        english: "Head",
        german: "Kopf",
        french: "Tête"
      },
      {
        malagasy: "Tarehy",
        english: "Face",
        german: "Gesicht",
        french: "Visage"
      },
      {
        malagasy: "Maso",
        english: "Eye",
        german: "Auge",
        french: "Oeil"
      },
      {
        malagasy: "Sofina",
        english: "Ear",
        german: "Ohr",
        french: "Oreille"
      },
      {
        malagasy: "Orona",
        english: "Nose",
        german: "Nase",
        french: "Nez"
      },
      {
        malagasy: "Vava",
        english: "Mouth",
        german: "Mund",
        french: "Bouche"
      },
      {
        malagasy: "Nify",
        english: "Tooth / Teeth",
        german: "Zahn / Zähne",
        french: "Dent / Dents"
      },
      {
        malagasy: "Lela",
        english: "Tongue",
        german: "Zunge",
        french: "Langue"
      },
      {
        malagasy: "Vozona",
        english: "Neck",
        german: "Hals",
        french: "Cou"
      },
      {
        malagasy: "Soroka",
        english: "Shoulder",
        german: "Schulter",
        french: "Épaule"
      },
      {
        malagasy: "Tanana",
        english: "Arm / Hand",
        german: "Arm / Hand",
        french: "Bras / Main"
      },
      {
        malagasy: "Rantsantanana",
        english: "Finger",
        german: "Finger",
        french: "Doigt"
      },
      {
        malagasy: "Tratra",
        english: "Chest",
        german: "Brust",
        french: "Poitrine"
      },
      {
        malagasy: "Kibo",
        english: "Stomach / Belly",
        german: "Magen / Bauch",
        french: "Estomac / Ventre"
      },
      {
        malagasy: "Lamosina",
        english: "Back",
        german: "Rücken",
        french: "Dos"
      },
      {
        malagasy: "Tongotra",
        english: "Leg / Foot",
        german: "Bein / Fuß",
        french: "Jambe / Pied"
      },
      {
        malagasy: "Lohalika",
        english: "Knee",
        german: "Knie",
        french: "Genou"
      },
      {
        malagasy: "Taolana",
        english: "Bone",
        german: "Knochen",
        french: "Os"
      },
      {
        malagasy: "Ra",
        english: "Blood",
        german: "Blut",
        french: "Sang"
      },
      {
        malagasy: "Hoditra",
        english: "Skin",
        german: "Haut",
        french: "Peau"
      },
      {
        malagasy: "Fo",
        english: "Heart",
        german: "Herz",
        french: "Coeur"
      },
      {
        malagasy: "Marary",
        english: "Sick / Painful",
        german: "Krank / Schmerzhaft",
        french: "Malade / Douloureux"
      },
      {
        malagasy: "Mampahory",
        english: "To hurt",
        german: "Weh tun",
        french: "Faire mal"
      },
      {
        malagasy: "Tazo",
        english: "Fever",
        german: "Fieber",
        french: "Fièvre"
      },
      {
        malagasy: "Dokotera",
        english: "Doctor",
        german: "Arzt",
        french: "Médecin"
      },
      {
        malagasy: "Hopitaly",
        english: "Hospital",
        german: "Krankenhaus",
        french: "Hôpital"
      },
      {
        malagasy: "Fanafody",
        english: "Medicine",
        german: "Medizin",
        french: "Médicament"
      },
      {
        malagasy: "Mitsabo",
        english: "To heal / treat",
        german: "Heilen / Behandeln",
        french: "Guérir / Traiter"
      },
      {
        malagasy: "Marary andoha",
        english: "Headache",
        german: "Kopfschmerzen",
        french: "Mal de tête"
      },
      {
        malagasy: "Marary kibo",
        english: "Stomach ache",
        german: "Bauchschmerzen",
        french: "Mal de ventre"
      },
      {
        malagasy: "Mandoa",
        english: "To vomit",
        german: "Erbrechen",
        french: "Vomir"
      },
      {
        malagasy: "Arety",
        english: "Disease",
        german: "Krankheit",
        french: "Maladie"
      },
      {
        malagasy: "Tsindrona",
        english: "Injection / Shot",
        german: "Injektion / Spritze",
        french: "Injection / Piqûre"
      },
      {
        malagasy: "Fery",
        english: "Wound",
        german: "Wunde",
        french: "Blessure"
      },
      {
        malagasy: "Tapaka",
        english: "Broken (bone)",
        german: "Gebrochen (Knochen)",
        french: "Cassé (os)"
      }
    ]
  },
  {
    id: "shopping",
    title: "Shopping & Bargaining",
    emoji: "🛍️",
    category: "conversation",
    description: "Market phrases, prices, and bargaining — essential for Madagascar's markets.",
    cards: [
      {
        front: "How much is this?",
        back: "Ohatrinona ity?",
        front_de: "How much is this?",
        front_fr: "How much is this?"
      },
      {
        front: "How much does it cost?",
        back: "Ohatrinona ny vidiny?",
        front_de: "How much does it cost?",
        front_fr: "How much does it cost?"
      },
      {
        front: "It's too expensive!",
        back: "Lafo loatra!",
        front_de: "It's too expensive!",
        front_fr: "It's too expensive!"
      },
      {
        front: "Make it cheaper please.",
        back: "Ataovy mora kely azafady.",
        front_de: "Make it cheaper please.",
        front_fr: "Make it cheaper please."
      },
      {
        front: "I'll buy this.",
        back: "Hividy ity aho.",
        front_de: "I'll buy this.",
        front_fr: "I'll buy this."
      },
      {
        front: "Do you have ...?",
        back: "Manana ... ve ianao?",
        front_de: "Do you have ...?",
        front_fr: "Do you have ...?"
      },
      {
        front: "I want to buy ...",
        back: "Te hividy ... aho.",
        front_de: "I want to buy ...",
        front_fr: "I want to buy ..."
      },
      {
        front: "Can we negotiate?",
        back: "Afaka miady varotra ve?",
        front_de: "Can we negotiate?",
        front_fr: "Can we negotiate?"
      },
      {
        front: "What is the price?",
        back: "Ohatrinona ny vidiny?",
        front_de: "What is the price?",
        front_fr: "What is the price?"
      },
      {
        front: "That's cheap!",
        back: "Mora izany!",
        front_de: "That's cheap!",
        front_fr: "That's cheap!"
      },
      {
        front: "Give me a discount.",
        back: "Ataovy mora kokoa.",
        front_de: "Give me a discount.",
        front_fr: "Give me a discount."
      },
      {
        front: "I'm just looking.",
        back: "Mijery fotsiny aho.",
        front_de: "I'm just looking.",
        front_fr: "I'm just looking."
      },
      {
        front: "One kilo please.",
        back: "Iray kilao azafady.",
        front_de: "One kilo please.",
        front_fr: "One kilo please."
      },
      {
        front: "How much per kilo?",
        back: "Ohatrinona ny kilao?",
        front_de: "How much per kilo?",
        front_fr: "How much per kilo?"
      },
      {
        front: "I don't have enough money.",
        back: "Tsy ampy ny volako.",
        front_de: "I don't have enough money.",
        front_fr: "I don't have enough money."
      }
    ],
    vocab: [
      {
        malagasy: "Ohatrinona",
        english: "How much",
        german: "Wie viel",
        french: "Combien"
      },
      {
        malagasy: "Vidiny",
        english: "Price",
        german: "Preis",
        french: "Prix"
      },
      {
        malagasy: "Lafo",
        english: "Expensive",
        german: "Teuer",
        french: "Cher"
      },
      {
        malagasy: "Mora",
        english: "Cheap",
        german: "Billig",
        french: "Bon marché"
      },
      {
        malagasy: "Miady varotra",
        english: "To bargain / negotiate",
        german: "Feilschen / Verhandeln",
        french: "Marchander / Négocier"
      },
      {
        malagasy: "Hividy",
        english: "To buy",
        german: "Kaufen",
        french: "Acheter"
      },
      {
        malagasy: "Mivarotra",
        english: "To sell",
        german: "Verkaufen",
        french: "Vendre"
      },
      {
        malagasy: "Vola",
        english: "Money",
        german: "Geld",
        french: "Argent"
      },
      {
        malagasy: "Tsena",
        english: "Market",
        german: "Markt",
        french: "Marché"
      },
      {
        malagasy: "Fivarotana",
        english: "Shop / Store",
        german: "Laden / Geschäft",
        french: "Magasin / Boutique"
      },
      {
        malagasy: "Kilao",
        english: "Kilo",
        german: "Kilo",
        french: "Kilo"
      },
      {
        malagasy: "Antsasaky",
        english: "Half",
        german: "Hälfte",
        french: "Moitié"
      },
      {
        malagasy: "Iray",
        english: "One",
        german: "Eins",
        french: "Un"
      },
      {
        malagasy: "Roa",
        english: "Two",
        german: "Zwei",
        french: "Deux"
      },
      {
        malagasy: "Ariary",
        english: "Ariary (currency)",
        german: "Ariary (Währung)",
        french: "Ariary (monnaie)"
      },
      {
        malagasy: "Mpiasa",
        english: "Vendor / Worker",
        german: "Verkäufer / Arbeiter",
        french: "Vendeur / Travailleur"
      },
      {
        malagasy: "Mpividy",
        english: "Customer / Buyer",
        german: "Kunde / Käufer",
        french: "Client / Acheteur"
      },
      {
        malagasy: "Vokatra",
        english: "Product / Goods",
        german: "Produkt / Waren",
        french: "Produit / Marchandises"
      },
      {
        malagasy: "Mijery",
        english: "To look",
        german: "Schauen",
        french: "Regarder"
      },
      {
        malagasy: "Fotsiny",
        english: "Just / Only",
        german: "Nur / Bloß",
        french: "Juste / Seulement"
      },
      {
        malagasy: "Ampy",
        english: "Enough",
        german: "Genug",
        french: "Assez"
      },
      {
        malagasy: "Tsy ampy",
        english: "Not enough",
        german: "Nicht genug",
        french: "Pas assez"
      },
      {
        malagasy: "Mihena",
        english: "To reduce / lower",
        german: "Reduzieren / Senken",
        french: "Réduire / Baisser"
      },
      {
        malagasy: "Vidina",
        english: "To be bought",
        german: "Gekauft werden",
        french: "Être acheté"
      },
      {
        malagasy: "Varotra",
        english: "Trade / Commerce",
        german: "Handel",
        french: "Commerce"
      },
      {
        malagasy: "Tsenabe",
        english: "Big market",
        german: "Großer Markt",
        french: "Grand marché"
      },
      {
        malagasy: "Mpanjifa",
        english: "Customer",
        german: "Kunde",
        french: "Client"
      },
      {
        malagasy: "Famatsiana",
        english: "Supply / Stock",
        german: "Vorrat / Bestand",
        french: "Approvisionnement / Stock"
      },
      {
        malagasy: "Entana",
        english: "Merchandise",
        german: "Ware",
        french: "Marchandise"
      },
      {
        malagasy: "Mividy ampongany",
        english: "To buy wholesale",
        german: "Großhandel kaufen",
        french: "Acheter en gros"
      }
    ]
  },
  {
    id: "directions",
    title: "Directions & Transport",
    emoji: "🧭",
    category: "conversation",
    description: "Getting around Madagascar — directions, taxi-brousse, and asking where things are.",
    cards: [
      {
        front: "Where is ...?",
        back: "Aiza ny ...?",
        front_de: "Where is ...?",
        front_fr: "Where is ...?"
      },
      {
        front: "Turn left.",
        back: "Miankavia.",
        front_de: "Turn left.",
        front_fr: "Turn left."
      },
      {
        front: "Turn right.",
        back: "Miankavanana.",
        front_de: "Turn right.",
        front_fr: "Turn right."
      },
      {
        front: "Go straight.",
        back: "Mahitsy.",
        front_de: "Go straight.",
        front_fr: "Go straight."
      },
      {
        front: "It's near.",
        back: "Akaiky izy io.",
        front_de: "It's near.",
        front_fr: "It's near."
      },
      {
        front: "It's far.",
        back: "Lavitra izy io.",
        front_de: "It's far.",
        front_fr: "It's far."
      },
      {
        front: "Here",
        back: "Aty",
        front_de: "Here",
        front_fr: "Here"
      },
      {
        front: "There",
        back: "Any",
        front_de: "There",
        front_fr: "There"
      },
      {
        front: "Where is the taxi-brousse station?",
        back: "Aiza ny fiantsonan'ny taxi-brousse?",
        front_de: "Where is the taxi-brousse station?",
        front_fr: "Where is the taxi-brousse station?"
      },
      {
        front: "I want to go to ...",
        back: "Te handeha any ... aho.",
        front_de: "I want to go to ...",
        front_fr: "I want to go to ..."
      },
      {
        front: "How do I get to ...?",
        back: "Ahoana no ahatongavana any ...?",
        front_de: "How do I get to ...?",
        front_fr: "How do I get to ...?"
      },
      {
        front: "Stop here please.",
        back: "Mijanona aty azafady.",
        front_de: "Stop here please.",
        front_fr: "Stop here please."
      },
      {
        front: "How far is it?",
        back: "Hatraiza ny halavirany?",
        front_de: "How far is it?",
        front_fr: "How far is it?"
      },
      {
        front: "Is it walkable?",
        back: "Azo andehanana an-tongotra ve?",
        front_de: "Is it walkable?",
        front_fr: "Is it walkable?"
      },
      {
        front: "I am lost.",
        back: "Very aho.",
        front_de: "I am lost.",
        front_fr: "I am lost."
      }
    ],
    vocab: [
      {
        malagasy: "Miankavia",
        english: "Turn left",
        german: "Links abbiegen",
        french: "Tourner à gauche"
      },
      {
        malagasy: "Miankavanana",
        english: "Turn right",
        german: "Rechts abbiegen",
        french: "Tourner à droite"
      },
      {
        malagasy: "Mahitsy",
        english: "Straight",
        german: "Geradeaus",
        french: "Tout droit"
      },
      {
        malagasy: "Akaiky",
        english: "Near",
        german: "Nah",
        french: "Près"
      },
      {
        malagasy: "Lavitra",
        english: "Far",
        german: "Weit",
        french: "Loin"
      },
      {
        malagasy: "Aty",
        english: "Here",
        german: "Hier",
        french: "Ici"
      },
      {
        malagasy: "Any",
        english: "There",
        german: "Dort",
        french: "Là"
      },
      {
        malagasy: "Handeha",
        english: "To go",
        german: "Gehen",
        french: "Aller"
      },
      {
        malagasy: "Tonga",
        english: "To arrive",
        german: "Ankommen",
        french: "Arriver"
      },
      {
        malagasy: "Miverina",
        english: "To return",
        german: "Zurückkehren",
        french: "Revenir"
      },
      {
        malagasy: "Fiantsonana",
        english: "Station / Stop",
        german: "Station / Haltestelle",
        french: "Gare / Arrêt"
      },
      {
        malagasy: "Taxi-brousse",
        english: "Shared taxi / Bush taxi",
        german: "Sammeltaxi / Buschtaxi",
        french: "Taxi-brousse"
      },
      {
        malagasy: "Taxi-be",
        english: "Big shared taxi",
        german: "Großes Sammeltaxi",
        french: "Grand taxi collectif"
      },
      {
        malagasy: "Pousse-pousse",
        english: "Rickshaw",
        german: "Rikscha",
        french: "Pousse-pousse"
      },
      {
        malagasy: "Lalana",
        english: "Road / Path",
        german: "Straße / Weg",
        french: "Route / Chemin"
      },
      {
        malagasy: "Tetezana",
        english: "Bridge",
        german: "Brücke",
        french: "Pont"
      },
      {
        malagasy: "Sampanana",
        english: "Crossroads / Intersection",
        german: "Kreuzung",
        french: "Carrefour / Intersection"
      },
      {
        malagasy: "Tongotra",
        english: "On foot",
        german: "Zu Fuß",
        french: "À pied"
      },
      {
        malagasy: "Fiara",
        english: "Car / Vehicle",
        german: "Auto / Fahrzeug",
        french: "Voiture / Véhicule"
      },
      {
        malagasy: "Bus",
        english: "Bus",
        german: "Bus",
        french: "Bus"
      },
      {
        malagasy: "Seranam-piaramanidina",
        english: "Airport",
        german: "Flughafen",
        french: "Aéroport"
      },
      {
        malagasy: "Very",
        english: "Lost",
        german: "Verloren",
        french: "Perdu"
      },
      {
        malagasy: "Halavirana",
        english: "Distance",
        german: "Entfernung",
        french: "Distance"
      },
      {
        malagasy: "Avaratra",
        english: "North",
        german: "Norden",
        french: "Nord"
      },
      {
        malagasy: "Atsimo",
        english: "South",
        german: "Süden",
        french: "Sud"
      },
      {
        malagasy: "Atsinanana",
        english: "East",
        german: "Osten",
        french: "Est"
      },
      {
        malagasy: "Andrefana",
        english: "West",
        german: "Westen",
        french: "Ouest"
      },
      {
        malagasy: "Tanimbarotra",
        english: "Town square",
        german: "Dorfplatz",
        french: "Place du village"
      },
      {
        malagasy: "Toby",
        english: "Camp / Station",
        german: "Lager / Station",
        french: "Camp / Station"
      },
      {
        malagasy: "Sisin-dalana",
        english: "Roadside",
        german: "Straßenrand",
        french: "Bord de route"
      }
    ]
  },
  {
    id: "weather",
    title: "Weather & Seasons",
    emoji: "🌦️",
    category: "vocabulary",
    description: "Weather terms, seasons, and climate — important for planning in Madagascar.",
    cards: [
      {
        front: "It's hot.",
        back: "Mafana ny andro.",
        front_de: "It's hot.",
        front_fr: "It's hot."
      },
      {
        front: "It's cold.",
        back: "Mangatsiaka ny andro.",
        front_de: "It's cold.",
        front_fr: "It's cold."
      },
      {
        front: "It's raining.",
        back: "Misy orana.",
        front_de: "It's raining.",
        front_fr: "It's raining."
      },
      {
        front: "The sun is strong.",
        back: "Mafy ny masoandro.",
        front_de: "The sun is strong.",
        front_fr: "The sun is strong."
      },
      {
        front: "There is wind.",
        back: "Misy rivotra.",
        front_de: "There is wind.",
        front_fr: "There is wind."
      },
      {
        front: "It's cloudy.",
        back: "Misy rahona.",
        front_de: "It's cloudy.",
        front_fr: "It's cloudy."
      },
      {
        front: "Rainy season",
        back: "Fahavaratra",
        front_de: "Rainy season",
        front_fr: "Rainy season"
      },
      {
        front: "Dry season",
        back: "Ririnina",
        front_de: "Dry season",
        front_fr: "Dry season"
      },
      {
        front: "Cyclone is coming.",
        back: "Ho avy ny rivodoza.",
        front_de: "Cyclone is coming.",
        front_fr: "Cyclone is coming."
      },
      {
        front: "What's the weather like?",
        back: "Manao ahoana ny toetr'andro?",
        front_de: "What's the weather like?",
        front_fr: "What's the weather like?"
      },
      {
        front: "It will rain tomorrow.",
        back: "Ho avy ny orana rahampitso.",
        front_de: "It will rain tomorrow.",
        front_fr: "It will rain tomorrow."
      },
      {
        front: "The road is muddy.",
        back: "Fotaka ny lalana.",
        front_de: "The road is muddy.",
        front_fr: "The road is muddy."
      },
      {
        front: "It's humid.",
        back: "Mando ny andro.",
        front_de: "It's humid.",
        front_fr: "It's humid."
      },
      {
        front: "Lightning / Thunder",
        back: "Varatra / Kotroka",
        front_de: "Lightning / Thunder",
        front_fr: "Lightning / Thunder"
      },
      {
        front: "Rainbow",
        back: "Antsiben'ny andro",
        front_de: "Rainbow",
        front_fr: "Rainbow"
      }
    ],
    vocab: [
      {
        malagasy: "Toetr'andro",
        english: "Weather",
        german: "Wetter",
        french: "Météo"
      },
      {
        malagasy: "Mafana",
        english: "Hot",
        german: "Heiß",
        french: "Chaud"
      },
      {
        malagasy: "Mangatsiaka",
        english: "Cold",
        german: "Kalt",
        french: "Froid"
      },
      {
        malagasy: "Orana",
        english: "Rain",
        german: "Regen",
        french: "Pluie"
      },
      {
        malagasy: "Masoandro",
        english: "Sun",
        german: "Sonne",
        french: "Soleil"
      },
      {
        malagasy: "Rivotra",
        english: "Wind",
        german: "Wind",
        french: "Vent"
      },
      {
        malagasy: "Rahona",
        english: "Cloud",
        german: "Wolke",
        french: "Nuage"
      },
      {
        malagasy: "Fahavaratra",
        english: "Rainy season (summer)",
        german: "Regenzeit (Sommer)",
        french: "Saison des pluies (été)"
      },
      {
        malagasy: "Ririnina",
        english: "Dry season (winter)",
        german: "Trockenzeit (Winter)",
        french: "Saison sèche (hiver)"
      },
      {
        malagasy: "Rivodoza",
        english: "Cyclone",
        german: "Zyklon",
        french: "Cyclone"
      },
      {
        malagasy: "Fotaka",
        english: "Mud",
        german: "Schlamm",
        french: "Boue"
      },
      {
        malagasy: "Mando",
        english: "Wet / Humid",
        german: "Nass / Feucht",
        french: "Mouillé / Humide"
      },
      {
        malagasy: "Maina",
        english: "Dry",
        german: "Trocken",
        french: "Sec"
      },
      {
        malagasy: "Varatra",
        english: "Lightning",
        german: "Blitz",
        french: "Éclair"
      },
      {
        malagasy: "Kotroka",
        english: "Thunder",
        german: "Donner",
        french: "Tonnerre"
      },
      {
        malagasy: "Antsiben'ny andro",
        english: "Rainbow",
        german: "Regenbogen",
        french: "Arc-en-ciel"
      },
      {
        malagasy: "Andro",
        english: "Day / Weather",
        german: "Tag / Wetter",
        french: "Jour / Temps"
      },
      {
        malagasy: "Alina",
        english: "Night",
        german: "Nacht",
        french: "Nuit"
      },
      {
        malagasy: "Maraina",
        english: "Morning",
        german: "Morgen",
        french: "Matin"
      },
      {
        malagasy: "Hariva",
        english: "Evening",
        german: "Abend",
        french: "Soir"
      },
      {
        malagasy: "Hafanana",
        english: "Heat / Temperature",
        german: "Hitze / Temperatur",
        french: "Chaleur / Température"
      },
      {
        malagasy: "Hatsiaka",
        english: "Coldness",
        german: "Kälte",
        french: "Froid"
      },
      {
        malagasy: "Erika",
        english: "Drizzle",
        german: "Nieselregen",
        french: "Bruine"
      },
      {
        malagasy: "Ranomandry",
        english: "Ice / Frost",
        german: "Eis / Frost",
        french: "Glace / Gel"
      },
      {
        malagasy: "Zavona",
        english: "Fog / Mist",
        german: "Nebel",
        french: "Brouillard / Brume"
      },
      {
        malagasy: "Tselatra",
        english: "Flash (of lightning)",
        german: "Blitz",
        french: "Éclair"
      },
      {
        malagasy: "Tondra-drano",
        english: "Flood",
        german: "Überschwemmung",
        french: "Inondation"
      },
      {
        malagasy: "Main-tany",
        english: "Drought",
        german: "Dürre",
        french: "Sécheresse"
      },
      {
        malagasy: "Taom-pambolena",
        english: "Farming season",
        german: "Anbausaison",
        french: "Saison agricole"
      },
      {
        malagasy: "Taona",
        english: "Season / Year",
        german: "Jahreszeit / Jahr",
        french: "Saison / Année"
      }
    ]
  },
  {
    id: "clothing",
    title: "Clothing & Dress",
    emoji: "👕",
    category: "vocabulary",
    description: "Clothes, accessories, and the traditional Malagasy lamba.",
    cards: [
      {
        front: "Shirt",
        back: "Lobaka",
        front_de: "Shirt",
        front_fr: "Shirt"
      },
      {
        front: "Pants",
        back: "Pataloha",
        front_de: "Pants",
        front_fr: "Pants"
      },
      {
        front: "Dress",
        back: "Akanjo",
        front_de: "Dress",
        front_fr: "Dress"
      },
      {
        front: "Shoes",
        back: "Kiraro",
        front_de: "Shoes",
        front_fr: "Shoes"
      },
      {
        front: "Hat",
        back: "Satroka",
        front_de: "Hat",
        front_fr: "Hat"
      },
      {
        front: "Traditional wrap cloth",
        back: "Lamba",
        front_de: "Traditional wrap cloth",
        front_fr: "Traditional wrap cloth"
      },
      {
        front: "Skirt",
        back: "Zipo",
        front_de: "Skirt",
        front_fr: "Skirt"
      },
      {
        front: "Socks",
        back: "Ba kiraro",
        front_de: "Socks",
        front_fr: "Socks"
      },
      {
        front: "Jacket / Coat",
        back: "Palitao",
        front_de: "Jacket / Coat",
        front_fr: "Jacket / Coat"
      },
      {
        front: "Belt",
        back: "Fehikibo",
        front_de: "Belt",
        front_fr: "Belt"
      },
      {
        front: "Watch",
        back: "Famantaranandro",
        front_de: "Watch",
        front_fr: "Watch"
      },
      {
        front: "Glasses",
        back: "Solomaso",
        front_de: "Glasses",
        front_fr: "Glasses"
      },
      {
        front: "Ring",
        back: "Peratra",
        front_de: "Ring",
        front_fr: "Ring"
      },
      {
        front: "Necklace",
        back: "Rojo",
        front_de: "Necklace",
        front_fr: "Necklace"
      },
      {
        front: "I want to try this on.",
        back: "Te hanandrana ity aho.",
        front_de: "I want to try this on.",
        front_fr: "I want to try this on."
      }
    ],
    vocab: [
      {
        malagasy: "Lobaka",
        english: "Shirt",
        german: "Hemd",
        french: "Chemise"
      },
      {
        malagasy: "Pataloha",
        english: "Pants",
        german: "Hose",
        french: "Pantalon"
      },
      {
        malagasy: "Akanjo",
        english: "Dress / Clothing",
        german: "Kleid / Kleidung",
        french: "Robe / Vêtement"
      },
      {
        malagasy: "Kiraro",
        english: "Shoes",
        german: "Schuhe",
        french: "Chaussures"
      },
      {
        malagasy: "Satroka",
        english: "Hat",
        german: "Hut",
        french: "Chapeau"
      },
      {
        malagasy: "Lamba",
        english: "Traditional wrap cloth",
        german: "Traditionelles Wickeltuch",
        french: "Lamba traditionnel"
      },
      {
        malagasy: "Zipo",
        english: "Skirt",
        german: "Rock",
        french: "Jupe"
      },
      {
        malagasy: "Ba kiraro",
        english: "Socks",
        german: "Socken",
        french: "Chaussettes"
      },
      {
        malagasy: "Palitao",
        english: "Jacket / Coat",
        german: "Jacke / Mantel",
        french: "Veste / Manteau"
      },
      {
        malagasy: "Fehikibo",
        english: "Belt",
        german: "Gürtel",
        french: "Ceinture"
      },
      {
        malagasy: "Famantaranandro",
        english: "Watch / Clock",
        german: "Uhr",
        french: "Montre / Horloge"
      },
      {
        malagasy: "Solomaso",
        english: "Glasses",
        german: "Brille",
        french: "Lunettes"
      },
      {
        malagasy: "Peratra",
        english: "Ring",
        german: "Ring",
        french: "Bague"
      },
      {
        malagasy: "Rojo",
        english: "Necklace",
        german: "Halskette",
        french: "Collier"
      },
      {
        malagasy: "Kravaty",
        english: "Tie",
        german: "Krawatte",
        french: "Cravate"
      },
      {
        malagasy: "Akanjo ba",
        english: "Sweater",
        german: "Pullover",
        french: "Pull"
      },
      {
        malagasy: "Akanjo aro orana",
        english: "Raincoat",
        german: "Regenmantel",
        french: "Imperméable"
      },
      {
        malagasy: "Lambamena",
        english: "Silk burial shroud",
        german: "Seidenes Leichentuch",
        french: "Linceul en soie"
      },
      {
        malagasy: "Lamba landy",
        english: "Silk cloth",
        german: "Seidenstoff",
        french: "Tissu en soie"
      },
      {
        malagasy: "Tantely",
        english: "Honey-colored (cloth)",
        german: "Honigfarben (Stoff)",
        french: "Couleur miel (tissu)"
      },
      {
        malagasy: "Manjaitra",
        english: "To sew",
        german: "Nähen",
        french: "Coudre"
      },
      {
        malagasy: "Mpanjaitra",
        english: "Tailor",
        german: "Schneider",
        french: "Tailleur"
      },
      {
        malagasy: "Hanao",
        english: "To wear",
        german: "Tragen",
        french: "Porter"
      },
      {
        malagasy: "Manala",
        english: "To take off",
        german: "Ausziehen",
        french: "Enlever"
      },
      {
        malagasy: "Hanandrana",
        english: "To try on",
        german: "Anprobieren",
        french: "Essayer"
      },
      {
        malagasy: "Refy",
        english: "Size / Measurement",
        german: "Größe / Maß",
        french: "Taille / Mesure"
      },
      {
        malagasy: "Kely",
        english: "Small",
        german: "Klein",
        french: "Petit"
      },
      {
        malagasy: "Lehibe",
        english: "Large",
        german: "Groß",
        french: "Grand"
      },
      {
        malagasy: "Antony",
        english: "Medium",
        german: "Mittel",
        french: "Moyen"
      },
      {
        malagasy: "Loko",
        english: "Color",
        german: "Farbe",
        french: "Couleur"
      }
    ]
  },
  {
    id: "animals",
    title: "Animals & Nature",
    emoji: "🐒",
    category: "vocabulary",
    description: "Madagascar's unique wildlife, domestic animals, and nature vocabulary.",
    cards: [
      {
        front: "Lemur",
        back: "Maky / Gidro",
        front_de: "Lemur",
        front_fr: "Lemur"
      },
      {
        front: "Chameleon",
        back: "Tanalahy",
        front_de: "Chameleon",
        front_fr: "Chameleon"
      },
      {
        front: "Dog",
        back: "Alika",
        front_de: "Dog",
        front_fr: "Dog"
      },
      {
        front: "Cat",
        back: "Saka",
        front_de: "Cat",
        front_fr: "Cat"
      },
      {
        front: "Cow / Zebu",
        back: "Omby",
        front_de: "Cow / Zebu",
        front_fr: "Cow / Zebu"
      },
      {
        front: "Chicken",
        back: "Akoho",
        front_de: "Chicken",
        front_fr: "Chicken"
      },
      {
        front: "Bird",
        back: "Vorona",
        front_de: "Bird",
        front_fr: "Bird"
      },
      {
        front: "Fish",
        back: "Trondro",
        front_de: "Fish",
        front_fr: "Fish"
      },
      {
        front: "Snake",
        back: "Bibilava",
        front_de: "Snake",
        front_fr: "Snake"
      },
      {
        front: "Frog",
        back: "Sahona",
        front_de: "Frog",
        front_fr: "Frog"
      },
      {
        front: "Crocodile",
        back: "Voay",
        front_de: "Crocodile",
        front_fr: "Crocodile"
      },
      {
        front: "Tree",
        back: "Hazo",
        front_de: "Tree",
        front_fr: "Tree"
      },
      {
        front: "Forest",
        back: "Ala",
        front_de: "Forest",
        front_fr: "Forest"
      },
      {
        front: "River",
        back: "Renirano",
        front_de: "River",
        front_fr: "River"
      },
      {
        front: "Mountain",
        back: "Tendrombohitra",
        front_de: "Mountain",
        front_fr: "Mountain"
      },
      {
        front: "Baobab tree",
        back: "Reniala",
        front_de: "Baobab tree",
        front_fr: "Baobab tree"
      },
      {
        front: "Sea / Ocean",
        back: "Ranomasina",
        front_de: "Sea / Ocean",
        front_fr: "Sea / Ocean"
      },
      {
        front: "Flower",
        back: "Voninkazo",
        front_de: "Flower",
        front_fr: "Flower"
      },
      {
        front: "Rice field",
        back: "Tanimbary",
        front_de: "Rice field",
        front_fr: "Rice field"
      },
      {
        front: "Stone / Rock",
        back: "Vato",
        front_de: "Stone / Rock",
        front_fr: "Stone / Rock"
      }
    ],
    vocab: [
      {
        malagasy: "Maky",
        english: "Lemur (ring-tailed)",
        german: "Lemur (Katta)",
        french: "Lémur (à queue annelée)"
      },
      {
        malagasy: "Gidro",
        english: "Lemur (general)",
        german: "Lemur (allgemein)",
        french: "Lémur (général)"
      },
      {
        malagasy: "Sifaka",
        english: "Sifaka lemur",
        german: "Sifaka",
        french: "Sifaka"
      },
      {
        malagasy: "Indri",
        english: "Indri (largest lemur)",
        german: "Indri (größter Lemur)",
        french: "Indri (plus grand lémur)"
      },
      {
        malagasy: "Tanalahy",
        english: "Chameleon",
        german: "Chamäleon",
        french: "Caméléon"
      },
      {
        malagasy: "Alika",
        english: "Dog",
        german: "Hund",
        french: "Chien"
      },
      {
        malagasy: "Saka",
        english: "Cat",
        german: "Katze",
        french: "Chat"
      },
      {
        malagasy: "Omby",
        english: "Cow / Zebu",
        german: "Kuh / Zebu",
        french: "Vache / Zébu"
      },
      {
        malagasy: "Akoho",
        english: "Chicken",
        german: "Huhn",
        french: "Poulet"
      },
      {
        malagasy: "Vorona",
        english: "Bird",
        german: "Vogel",
        french: "Oiseau"
      },
      {
        malagasy: "Trondro",
        english: "Fish",
        german: "Fisch",
        french: "Poisson"
      },
      {
        malagasy: "Bibilava",
        english: "Snake",
        german: "Schlange",
        french: "Serpent"
      },
      {
        malagasy: "Sahona",
        english: "Frog",
        german: "Frosch",
        french: "Grenouille"
      },
      {
        malagasy: "Voay",
        english: "Crocodile",
        german: "Krokodil",
        french: "Crocodile"
      },
      {
        malagasy: "Biby",
        english: "Animal",
        german: "Tier",
        french: "Animal"
      },
      {
        malagasy: "Bibikely",
        english: "Insect",
        german: "Insekt",
        french: "Insecte"
      },
      {
        malagasy: "Tantely",
        english: "Bee / Honey",
        german: "Biene / Honig",
        french: "Abeille / Miel"
      },
      {
        malagasy: "Lalitra",
        english: "Fly",
        german: "Fliege",
        french: "Mouche"
      },
      {
        malagasy: "Moka",
        english: "Mosquito",
        german: "Mücke",
        french: "Moustique"
      },
      {
        malagasy: "Hazo",
        english: "Tree / Wood",
        german: "Baum / Holz",
        french: "Arbre / Bois"
      },
      {
        malagasy: "Ala",
        english: "Forest",
        german: "Wald",
        french: "Forêt"
      },
      {
        malagasy: "Renirano",
        english: "River",
        german: "Fluss",
        french: "Rivière"
      },
      {
        malagasy: "Tendrombohitra",
        english: "Mountain",
        german: "Berg",
        french: "Montagne"
      },
      {
        malagasy: "Reniala",
        english: "Baobab tree",
        german: "Baobab",
        french: "Baobab"
      },
      {
        malagasy: "Ranomasina",
        english: "Sea / Ocean",
        german: "Meer / Ozean",
        french: "Mer / Océan"
      },
      {
        malagasy: "Voninkazo",
        english: "Flower",
        german: "Blume",
        french: "Fleur"
      },
      {
        malagasy: "Tanimbary",
        english: "Rice field",
        german: "Reisfeld",
        french: "Rizière"
      },
      {
        malagasy: "Vato",
        english: "Stone / Rock",
        german: "Stein / Fels",
        french: "Pierre / Rocher"
      },
      {
        malagasy: "Fasika",
        english: "Sand",
        german: "Sand",
        french: "Sable"
      },
      {
        malagasy: "Farihy",
        english: "Lake",
        german: "See",
        french: "Lac"
      },
      {
        malagasy: "Riandriana",
        english: "Waterfall",
        german: "Wasserfall",
        french: "Cascade"
      },
      {
        malagasy: "Tany",
        english: "Earth / Soil",
        german: "Erde / Boden",
        french: "Terre / Sol"
      },
      {
        malagasy: "Ahitra",
        english: "Grass",
        german: "Gras",
        french: "Herbe"
      },
      {
        malagasy: "Ravina",
        english: "Leaf",
        german: "Blatt",
        french: "Feuille"
      },
      {
        malagasy: "Faka",
        english: "Root",
        german: "Wurzel",
        french: "Racine"
      }
    ]
  },
  {
    id: "money",
    title: "Money & Practical Numbers",
    emoji: "💵",
    category: "vocabulary",
    description: "Ariary currency, counting money, and practical number usage in daily life.",
    cards: [
      {
        front: "Money",
        back: "Vola",
        front_de: "Money",
        front_fr: "Money"
      },
      {
        front: "Ariary (currency)",
        back: "Ariary",
        front_de: "Ariary (currency)",
        front_fr: "Ariary (currency)"
      },
      {
        front: "How much is it?",
        back: "Ohatrinona izy?",
        front_de: "How much is it?",
        front_fr: "How much is it?"
      },
      {
        front: "It costs 5,000 Ariary.",
        back: "Dimy arivo ariary ny vidiny.",
        front_de: "It costs 5,000 Ariary.",
        front_fr: "It costs 5,000 Ariary."
      },
      {
        front: "Do you have change?",
        back: "Manana vola madinika ve ianao?",
        front_de: "Do you have change?",
        front_fr: "Do you have change?"
      },
      {
        front: "I only have a 10,000 note.",
        back: "Iray alina fotsiny no volako.",
        front_de: "I only have a 10,000 note.",
        front_fr: "I only have a 10,000 note."
      },
      {
        front: "Keep the change.",
        back: "Avelao ny ambiny.",
        front_de: "Keep the change.",
        front_fr: "Keep the change."
      },
      {
        front: "That's too expensive for me.",
        back: "Lafo loatra ho ahy izany.",
        front_de: "That's too expensive for me.",
        front_fr: "That's too expensive for me."
      },
      {
        front: "What is your best price?",
        back: "Ohatrinona ny vidiny farany?",
        front_de: "What is your best price?",
        front_fr: "What is your best price?"
      },
      {
        front: "I'll give you 2,000.",
        back: "Homeko roa arivo ianao.",
        front_de: "I'll give you 2,000.",
        front_fr: "I'll give you 2,000."
      },
      {
        front: "How much do I owe you?",
        back: "Ohatrinona ny trosako?",
        front_de: "How much do I owe you?",
        front_fr: "How much do I owe you?"
      },
      {
        front: "One hundred",
        back: "Zato",
        front_de: "One hundred",
        front_fr: "One hundred"
      },
      {
        front: "One thousand",
        back: "Arivo",
        front_de: "One thousand",
        front_fr: "One thousand"
      },
      {
        front: "Ten thousand",
        back: "Iray alina",
        front_de: "Ten thousand",
        front_fr: "Ten thousand"
      },
      {
        front: "One hundred thousand",
        back: "Iray hetsy",
        front_de: "One hundred thousand",
        front_fr: "One hundred thousand"
      }
    ],
    vocab: [
      {
        malagasy: "Vola",
        english: "Money",
        german: "Geld",
        french: "Argent"
      },
      {
        malagasy: "Ariary",
        english: "Ariary (MGA currency)",
        german: "Ariary (MGA Währung)",
        french: "Ariary (monnaie MGA)"
      },
      {
        malagasy: "Vola madinika",
        english: "Small change / Coins",
        german: "Kleingeld / Münzen",
        french: "Petite monnaie / Pièces"
      },
      {
        malagasy: "Vola taratasy",
        english: "Paper money / Bills",
        german: "Papiergeld / Scheine",
        french: "Billets"
      },
      {
        malagasy: "Ambiny",
        english: "Change (remainder)",
        german: "Wechselgeld",
        french: "Monnaie (reste)"
      },
      {
        malagasy: "Trosa",
        english: "Debt / What is owed",
        german: "Schulden",
        french: "Dette / Ce qui est dû"
      },
      {
        malagasy: "Mandoa",
        english: "To pay",
        german: "Bezahlen",
        french: "Payer"
      },
      {
        malagasy: "Mampindrana",
        english: "To lend",
        german: "Verleihen",
        french: "Prêter"
      },
      {
        malagasy: "Mindrana",
        english: "To borrow",
        german: "Ausleihen",
        french: "Emprunter"
      },
      {
        malagasy: "Mitsitsy",
        english: "To save (money)",
        german: "Sparen",
        french: "Économiser (argent)"
      },
      {
        malagasy: "Mandany",
        english: "To spend",
        german: "Ausgeben",
        french: "Dépenser"
      },
      {
        malagasy: "Banky",
        english: "Bank",
        german: "Bank",
        french: "Banque"
      },
      {
        malagasy: "Zato",
        english: "One hundred",
        german: "Einhundert",
        french: "Cent"
      },
      {
        malagasy: "Arivo",
        english: "One thousand",
        german: "Eintausend",
        french: "Mille"
      },
      {
        malagasy: "Iray alina",
        english: "Ten thousand",
        german: "Zehntausend",
        french: "Dix mille"
      },
      {
        malagasy: "Iray hetsy",
        english: "One hundred thousand",
        german: "Einhunderttausend",
        french: "Cent mille"
      },
      {
        malagasy: "Tapitrisa",
        english: "Million",
        german: "Million",
        french: "Million"
      },
      {
        malagasy: "Vidiny farany",
        english: "Final price",
        german: "Endpreis",
        french: "Prix final"
      },
      {
        malagasy: "Miady varotra",
        english: "To bargain",
        german: "Feilschen",
        french: "Marchander"
      },
      {
        malagasy: "Vidina",
        english: "To be bought / Cost",
        german: "Gekauft werden / Kosten",
        french: "Être acheté / Coûter"
      },
      {
        malagasy: "Mivarotra",
        english: "To sell",
        german: "Verkaufen",
        french: "Vendre"
      },
      {
        malagasy: "Varo-mpanjifa",
        english: "Retail",
        german: "Einzelhandel",
        french: "Détail"
      },
      {
        malagasy: "Varo-mpaninjara",
        english: "Wholesale",
        german: "Großhandel",
        french: "Gros"
      },
      {
        malagasy: "Fidiram-bola",
        english: "Income",
        german: "Einkommen",
        french: "Revenu"
      },
      {
        malagasy: "Fandaniana",
        english: "Expense",
        german: "Ausgabe",
        french: "Dépense"
      },
      {
        malagasy: "Karama",
        english: "Salary / Wage",
        german: "Gehalt / Lohn",
        french: "Salaire"
      },
      {
        malagasy: "Sarany",
        english: "Fee / Charge",
        german: "Gebühr",
        french: "Frais / Tarif"
      },
      {
        malagasy: "Maimaim-poana",
        english: "Free (no cost)",
        german: "Kostenlos",
        french: "Gratuit"
      },
      {
        malagasy: "Antony",
        english: "Reasonable (price)",
        german: "Angemessen (Preis)",
        french: "Raisonnable (prix)"
      },
      {
        malagasy: "Mirary",
        english: "Fair / Just (price)",
        german: "Fair / Gerecht (Preis)",
        french: "Juste (prix)"
      }
    ]
  },
  {
    id: "time",
    title: "Time & Scheduling",
    emoji: "🕐",
    category: "conversation",
    description: "Telling time, making appointments, and scheduling in Malagasy.",
    cards: [
      {
        front: "What time is it?",
        back: "Amin'ny firy izao?",
        front_de: "What time is it?",
        front_fr: "What time is it?"
      },
      {
        front: "It's 3 o'clock.",
        back: "Amin'ny telo izao.",
        front_de: "It's 3 o'clock.",
        front_fr: "It's 3 o'clock."
      },
      {
        front: "At what time?",
        back: "Amin'ny firy?",
        front_de: "At what time?",
        front_fr: "At what time?"
      },
      {
        front: "In the morning",
        back: "Amin'ny maraina",
        front_de: "In the morning",
        front_fr: "In the morning"
      },
      {
        front: "In the afternoon",
        back: "Amin'ny tolakandro",
        front_de: "In the afternoon",
        front_fr: "In the afternoon"
      },
      {
        front: "In the evening",
        back: "Amin'ny hariva",
        front_de: "In the evening",
        front_fr: "In the evening"
      },
      {
        front: "At night",
        back: "Amin'ny alina",
        front_de: "At night",
        front_fr: "At night"
      },
      {
        front: "Wait a moment.",
        back: "Andraso kely.",
        front_de: "Wait a moment.",
        front_fr: "Wait a moment."
      },
      {
        front: "I'll be back soon.",
        back: "Hiverina tsy ho ela aho.",
        front_de: "I'll be back soon.",
        front_fr: "I'll be back soon."
      },
      {
        front: "How long does it take?",
        back: "Hafiriana izany?",
        front_de: "How long does it take?",
        front_fr: "How long does it take?"
      },
      {
        front: "It takes one hour.",
        back: "Maharitra adiny iray.",
        front_de: "It takes one hour.",
        front_fr: "It takes one hour."
      },
      {
        front: "I am late.",
        back: "Tara aho.",
        front_de: "I am late.",
        front_fr: "I am late."
      },
      {
        front: "Be on time!",
        back: "Tonga ara-potoana!",
        front_de: "Be on time!",
        front_fr: "Be on time!"
      },
      {
        front: "See you tomorrow at 8.",
        back: "Mandrosoa rahampitso amin'ny valo.",
        front_de: "See you tomorrow at 8.",
        front_fr: "See you tomorrow at 8."
      },
      {
        front: "What day is today?",
        back: "Andro inona androany?",
        front_de: "What day is today?",
        front_fr: "What day is today?"
      }
    ],
    vocab: [
      {
        malagasy: "Amin'ny firy",
        english: "At what time",
        german: "Um wie viel Uhr",
        french: "À quelle heure"
      },
      {
        malagasy: "Ora",
        english: "Hour / Time",
        german: "Stunde / Zeit",
        french: "Heure / Temps"
      },
      {
        malagasy: "Minitra",
        english: "Minute",
        german: "Minute",
        french: "Minute"
      },
      {
        malagasy: "Segondra",
        english: "Second",
        german: "Sekunde",
        french: "Seconde"
      },
      {
        malagasy: "Adiny",
        english: "Hour (duration)",
        german: "Stunde (Dauer)",
        french: "Heure (durée)"
      },
      {
        malagasy: "Hafiriana",
        english: "How long",
        german: "Wie lange",
        french: "Combien de temps"
      },
      {
        malagasy: "Maharitra",
        english: "To last / take (time)",
        german: "Dauern",
        french: "Durer / Prendre (temps)"
      },
      {
        malagasy: "Tara",
        english: "Late",
        german: "Spät",
        french: "En retard"
      },
      {
        malagasy: "Aloha",
        english: "Early",
        german: "Früh",
        french: "Tôt"
      },
      {
        malagasy: "Ara-potoana",
        english: "On time",
        german: "Pünktlich",
        french: "À l'heure"
      },
      {
        malagasy: "Fotoana",
        english: "Time / Moment",
        german: "Zeit / Moment",
        french: "Temps / Moment"
      },
      {
        malagasy: "Famandrihana",
        english: "Appointment / Reservation",
        german: "Termin / Reservierung",
        french: "Rendez-vous / Réservation"
      },
      {
        malagasy: "Fivoriana",
        english: "Meeting",
        german: "Treffen",
        french: "Réunion"
      },
      {
        malagasy: "Manafika",
        english: "To set (a time)",
        german: "Festlegen (Zeit)",
        french: "Fixer (une heure)"
      },
      {
        malagasy: "Miandry",
        english: "To wait",
        german: "Warten",
        french: "Attendre"
      },
      {
        malagasy: "Andraso",
        english: "Wait!",
        german: "Warte!",
        french: "Attendez !"
      },
      {
        malagasy: "Hiverina",
        english: "To return",
        german: "Zurückkehren",
        french: "Revenir"
      },
      {
        malagasy: "Tsy ho ela",
        english: "Soon / Not long",
        german: "Bald / Nicht lang",
        french: "Bientôt / Pas longtemps"
      },
      {
        malagasy: "Amin'izao",
        english: "Now / At this moment",
        german: "Jetzt",
        french: "Maintenant"
      },
      {
        malagasy: "Aorian'izay",
        english: "After that / Later",
        german: "Danach / Später",
        french: "Après / Plus tard"
      },
      {
        malagasy: "Talohan'izay",
        english: "Before that",
        german: "Davor",
        french: "Avant cela"
      },
      {
        malagasy: "Isan'andro",
        english: "Daily / Every day",
        german: "Täglich",
        french: "Quotidien / Chaque jour"
      },
      {
        malagasy: "Isan-kerinandro",
        english: "Weekly",
        german: "Wöchentlich",
        french: "Hebdomadaire"
      },
      {
        malagasy: "Isam-bolana",
        english: "Monthly",
        german: "Monatlich",
        french: "Mensuel"
      },
      {
        malagasy: "Isan-taona",
        english: "Yearly",
        german: "Jährlich",
        french: "Annuel"
      },
      {
        malagasy: "Manaraka",
        english: "Next",
        german: "Nächste",
        french: "Prochain"
      },
      {
        malagasy: "Teo aloha",
        english: "Previous",
        german: "Vorherige",
        french: "Précédent"
      },
      {
        malagasy: "Amin'ny manaraka",
        english: "Next time",
        german: "Nächstes Mal",
        french: "La prochaine fois"
      },
      {
        malagasy: "Mialoha",
        english: "In advance",
        german: "Im Voraus",
        french: "À l'avance"
      },
      {
        malagasy: "Aoriana",
        english: "Afterwards",
        german: "Danach",
        french: "Ensuite"
      }
    ]
  },
  {
    id: "comparisons",
    title: "Comparisons & Superlatives",
    emoji: "⚖️",
    category: "grammar",
    description: "Comparing things — better/worse, cheaper/more expensive, biggest/smallest.",
    cards: [
      {
        front: "Bigger than",
        back: "Lehibe kokoa noho",
        front_de: "Bigger than",
        front_fr: "Bigger than"
      },
      {
        front: "Smaller than",
        back: "Kely kokoa noho",
        front_de: "Smaller than",
        front_fr: "Smaller than"
      },
      {
        front: "Better than",
        back: "Tsara kokoa noho",
        front_de: "Better than",
        front_fr: "Better than"
      },
      {
        front: "Worse than",
        back: "Ratsy kokoa noho",
        front_de: "Worse than",
        front_fr: "Worse than"
      },
      {
        front: "Cheaper than",
        back: "Mora kokoa noho",
        front_de: "Cheaper than",
        front_fr: "Cheaper than"
      },
      {
        front: "More expensive than",
        back: "Lafo kokoa noho",
        front_de: "More expensive than",
        front_fr: "More expensive than"
      },
      {
        front: "The biggest",
        back: "Lehibe indrindra",
        front_de: "The biggest",
        front_fr: "The biggest"
      },
      {
        front: "The smallest",
        back: "Kely indrindra",
        front_de: "The smallest",
        front_fr: "The smallest"
      },
      {
        front: "The best",
        back: "Tsara indrindra",
        front_de: "The best",
        front_fr: "The best"
      },
      {
        front: "The worst",
        back: "Ratsy indrindra",
        front_de: "The worst",
        front_fr: "The worst"
      },
      {
        front: "The cheapest",
        back: "Mora indrindra",
        front_de: "The cheapest",
        front_fr: "The cheapest"
      },
      {
        front: "The most expensive",
        back: "Lafo indrindra",
        front_de: "The most expensive",
        front_fr: "The most expensive"
      },
      {
        front: "This is better than that.",
        back: "Tsara kokoa noho izany ity.",
        front_de: "This is better than that.",
        front_fr: "This is better than that."
      },
      {
        front: "Same as",
        back: "Mitovy amin'ny",
        front_de: "Same as",
        front_fr: "Same as"
      },
      {
        front: "Different from",
        back: "Hafa noho",
        front_de: "Different from",
        front_fr: "Different from"
      },
      {
        front: "Too much / Too many",
        back: "Be loatra",
        front_de: "Too much / Too many",
        front_fr: "Too much / Too many"
      },
      {
        front: "More (quantity)",
        back: "Maro kokoa",
        front_de: "More (quantity)",
        front_fr: "More (quantity)"
      },
      {
        front: "Less (quantity)",
        back: "Vitsy kokoa",
        front_de: "Less (quantity)",
        front_fr: "Less (quantity)"
      },
      {
        front: "Almost the same",
        back: "Saika mitovy",
        front_de: "Almost the same",
        front_fr: "Almost the same"
      },
      {
        front: "Much better",
        back: "Tsara lavitra",
        front_de: "Much better",
        front_fr: "Much better"
      }
    ],
    vocab: [
      {
        malagasy: "Kokoa",
        english: "More (comparative)",
        german: "Mehr (Komparativ)",
        french: "Plus (comparatif)"
      },
      {
        malagasy: "Noho",
        english: "Than",
        german: "Als",
        french: "Que"
      },
      {
        malagasy: "Indrindra",
        english: "Most (superlative)",
        german: "Am meisten (Superlativ)",
        french: "Le plus (superlatif)"
      },
      {
        malagasy: "Mitovy",
        english: "Same / Equal",
        german: "Gleich",
        french: "Même / Égal"
      },
      {
        malagasy: "Hafa",
        english: "Different",
        german: "Verschieden",
        french: "Différent"
      },
      {
        malagasy: "Be loatra",
        english: "Too much / Excessive",
        german: "Zu viel / Übermäßig",
        french: "Trop / Excessif"
      },
      {
        malagasy: "Lehibe",
        english: "Big",
        german: "Groß",
        french: "Grand"
      },
      {
        malagasy: "Kely",
        english: "Small",
        german: "Klein",
        french: "Petit"
      },
      {
        malagasy: "Tsara",
        english: "Good",
        german: "Gut",
        french: "Bon"
      },
      {
        malagasy: "Ratsy",
        english: "Bad",
        german: "Schlecht",
        french: "Mauvais"
      },
      {
        malagasy: "Mora",
        english: "Cheap / Easy",
        german: "Billig / Einfach",
        french: "Bon marché / Facile"
      },
      {
        malagasy: "Lafo",
        english: "Expensive",
        german: "Teuer",
        french: "Cher"
      },
      {
        malagasy: "Maro",
        english: "Many",
        german: "Viele",
        french: "Beaucoup"
      },
      {
        malagasy: "Vitsy",
        english: "Few",
        german: "Wenige",
        french: "Peu"
      },
      {
        malagasy: "Lava",
        english: "Long / Tall",
        german: "Lang / Groß",
        french: "Long / Grand"
      },
      {
        malagasy: "Fohy",
        english: "Short",
        german: "Kurz",
        french: "Court"
      },
      {
        malagasy: "Haingana",
        english: "Fast",
        german: "Schnell",
        french: "Rapide"
      },
      {
        malagasy: "Miadana",
        english: "Slow",
        german: "Langsam",
        french: "Lent"
      },
      {
        malagasy: "Mavesatra",
        english: "Heavy",
        german: "Schwer",
        french: "Lourd"
      },
      {
        malagasy: "Maivana",
        english: "Light (weight)",
        german: "Leicht",
        french: "Léger"
      },
      {
        malagasy: "Vaovao",
        english: "New",
        german: "Neu",
        french: "Nouveau"
      },
      {
        malagasy: "Taloha",
        english: "Old",
        german: "Alt",
        french: "Vieux"
      },
      {
        malagasy: "Madio",
        english: "Clean",
        german: "Sauber",
        french: "Propre"
      },
      {
        malagasy: "Maloto",
        english: "Dirty",
        german: "Schmutzig",
        french: "Sale"
      },
      {
        malagasy: "Saika",
        english: "Almost",
        german: "Fast",
        french: "Presque"
      },
      {
        malagasy: "Lavitra",
        english: "Far / Much (intensifier)",
        german: "Weit / Viel (Verstärker)",
        french: "Loin / Beaucoup (intensifieur)"
      },
      {
        malagasy: "Somary",
        english: "Somewhat / A bit",
        german: "Etwas / Ein bisschen",
        french: "Un peu"
      },
      {
        malagasy: "Tena",
        english: "Really / Very",
        german: "Wirklich / Sehr",
        french: "Vraiment / Très"
      },
      {
        malagasy: "Mifanohitra",
        english: "Opposite",
        german: "Gegenteil",
        french: "Opposé"
      },
      {
        malagasy: "Mampitaha",
        english: "To compare",
        german: "Vergleichen",
        french: "Comparer"
      }
    ]
  }

];

// ============================================
// EXTENDING LESSONS — HOW TO
// ============================================
// Just append a new object to the LESSONS array above:
//
// {
//   id: "unique-id",
//   title: "Lesson Title",
//   emoji: "🔥",
//   category: "conversation|vocabulary|grammar|basics",
//   description: "Short description.",
//   cards: [
//     { front: "Malagasy phrase", back: "English meaning" },
//     ...
//   ],
//   vocab: [
//     { malagasy: "word", english: "translation" },
//     ...
//   ],
//   quiz: [
//     { question: "Question?", options: ["A","B","C","D"], correct: 0 },
//     ...
//   ]
// }
//
// The app auto-discovers new lessons on reload.
// ============================================

// Flatten all vocabulary for search
const ALL_VOCAB = (() => {
  const vocab = [];
  LESSONS.forEach(lesson => {
    if (lesson.vocab) {
      lesson.vocab.forEach(v => {
        vocab.push({
          malagasy: v.malagasy,
          english: v.english,
          lessonId: lesson.id,
          lessonTitle: lesson.title
        });
      });
    }
  });
  // deduplicate by malagasy word
  const seen = new Set();
  return vocab.filter(v => {
    if (seen.has(v.malagasy.toLowerCase())) return false;
    seen.add(v.malagasy.toLowerCase());
    return true;
  });
})();
