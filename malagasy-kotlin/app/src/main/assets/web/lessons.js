// ============================================
// MALAGASY LEARNING APP — LESSON DATA
// Easy to extend: just add a new object to the LESSONS array
// ============================================

const LESSONS = [
  {
    "id": "intro",
    "title": "Introduction to Malagasy",
    "emoji": "🇲🇬",
    "category": "basics",
    "description": "Overview of the language, its origins, and what makes it unique.",
    "cards": [
      {
        "front": "Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago.",
        "back": "Malagasy Origin",
        "front_de": "Austronesische Sprache aus Südostasien, die vor ~2.000 Jahren Madagaskar besiedelte.",
        "front_fr": "Langue austronésienne d'Asie du Sud-Est, qui a colonisé Madagascar il y a ~2 000 ans."
      },
      {
        "front": "Over 14 million speakers across Madagascar and Mayotte.",
        "back": "Speakers",
        "front_de": "Über 14 Millionen Sprecher in Madagaskar und Mayotte.",
        "front_fr": "Plus de 14 millions de locuteurs à Madagascar et à Mayotte."
      },
      {
        "front": "18 regional dialects. Standard = Merina (Antananarivo).",
        "back": "Dialects",
        "front_de": "18 regionale Dialekte. Standard = Merina (Antananarivo).",
        "front_fr": "18 dialectes régionaux. Standard = Merina (Antananarivo)."
      },
      {
        "front": "Latin alphabet. No C, Q, U, W, X. Pronunciation is phonetic.",
        "back": "Alphabet",
        "front_de": "Lateinisches Alphabet. Kein C, Q, U, W, X. Die Aussprache ist phonetisch.",
        "front_fr": "Alphabet latin. Pas de C, Q, U, W, X. La prononciation est phonétique."
      },
      {
        "front": "VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I.",
        "back": "Word Order",
        "front_de": "VOS — Verb-Objekt-Subjekt. z. B. 'Mihinana vary aho' = Iss Reis Ich.",
        "front_fr": "VOS — Verbe-Objet-Sujet. p. ex. 'Mihinana vary aho' = Manger du riz je."
      },
      {
        "front": "Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'.",
        "back": "No verb 'to be'",
        "front_de": "Adjektive schließen 'sein' ein. 'Mangatsiaka izy' = Kalt er/sie = 'Er ist kalt'.",
        "front_fr": "Les adjectifs impliquent 'être'. 'Mangatsiaka izy' = Froid il/elle = 'Il a froid'."
      }
    ],
    "vocab": [
      {
        "malagasy": "Malagasy",
        "english": "The Malagasy language",
        "german": "Die madagassische Sprache",
        "french": "La langue malgache"
      },
      {
        "malagasy": "Madagasikara",
        "english": "Madagascar",
        "german": "Madagaskar",
        "french": "Madagascar"
      },
      {
        "malagasy": "teny",
        "english": "language / words",
        "german": "Sprache / Wörter",
        "french": "langue / mots"
      }
    ]
  },
  {
    "id": "alphabet",
    "title": "The Alphabet & Sounds",
    "emoji": "🔤",
    "category": "basics",
    "description": "Learn the 4 vowel sounds and key consonant clusters.",
    "cards": [
      {
        "front": "Sounds like 'a' in Father. Examples: Salama, Manana",
        "back": "A [a]",
        "front_de": "Klingt wie 'a' in Vater. Beispiele: Salama, Manana",
        "front_fr": "Comme le 'a' dans Père. Exemples : Salama, Manana"
      },
      {
        "front": "Sounds like 'ay' in made/pay. Examples: Veloma, teny, enina",
        "back": "E [ei]",
        "front_de": "Klingt wie 'ay' in 'made/pay'. Beispiele: Veloma, teny, enina",
        "front_fr": "Comme 'ay' dans 'made/pay'. Exemples : Veloma, teny, enina"
      },
      {
        "front": "Sounds like 'ee' in keep. Examples: Misy, mipetraka, tsia",
        "back": "I / Y [i:]",
        "front_de": "Klingt wie 'ee' in keep. Beispiele: Misy, mipetraka, tsia",
        "front_fr": "Comme 'ee' dans keep. Exemples : Misy, mipetraka, tsia"
      },
      {
        "front": "Sounds like 'oo' in pool. Examples: Aho, Voky",
        "back": "O [o/u]",
        "front_de": "Klingt wie 'oo' in pool. Beispiele: Aho, Voky",
        "front_fr": "Comme 'oo' dans pool. Exemples : Aho, Voky"
      },
      {
        "front": "Difficult diphthong. Example: vaovao (new), tratra (chest)",
        "back": "ao",
        "front_de": "Schwieriger Diphthong. Beispiel: vaovao (neu), tratra (Brust)",
        "front_fr": "Diphtongue difficile. Exemple : vaovao (neuf), tratra (poitrine)"
      },
      {
        "front": "Difficult diphthong. Example: soa (good)",
        "back": "oa",
        "front_de": "Schwieriger Diphthong. Beispiel: soa (gut)",
        "front_fr": "Diphtongue difficile. Exemple : soa (bon)"
      },
      {
        "front": "Affricate. Example: tsotra (simple)",
        "back": "ts",
        "front_de": "Affrikate. Beispiel: tsotra (einfach)",
        "front_fr": "Affriquée. Exemple : tsotra (simple)"
      },
      {
        "front": "Pronounced together. Example: drafitra (draft)",
        "back": "dr",
        "front_de": "Zusammen ausgesprochen. Beispiel: drafitra (Entwurf)",
        "front_fr": "Prononcées ensemble. Exemple : drafitra (brouillon)"
      },
      {
        "front": "Example: Indrindra (especially)",
        "back": "ndr",
        "front_de": "Beispiel: Indrindra (insbesondere)",
        "front_fr": "Exemple : Indrindra (surtout)"
      },
      {
        "front": "Example: onja (wave)",
        "back": "nj",
        "front_de": "Beispiel: onja (Welle)",
        "front_fr": "Exemple : onja (vague)"
      }
    ],
    "vocab": [
      {
        "malagasy": "Salama",
        "english": "Hello",
        "german": "Hallo",
        "french": "Bonjour"
      },
      {
        "malagasy": "Manana",
        "english": "to have",
        "german": "haben",
        "french": "avoir"
      },
      {
        "malagasy": "Veloma",
        "english": "Bye!",
        "german": "Tschüss!",
        "french": "Au revoir !"
      },
      {
        "malagasy": "Misy",
        "english": "there is",
        "german": "es gibt",
        "french": "il y a"
      },
      {
        "malagasy": "Aho",
        "english": "I",
        "german": "ich",
        "french": "je"
      },
      {
        "malagasy": "Voky",
        "english": "full",
        "german": "voll / satt",
        "french": "plein / rassasié"
      },
      {
        "malagasy": "vaovao",
        "english": "new",
        "german": "neu",
        "french": "nouveau"
      },
      {
        "malagasy": "soa",
        "english": "good",
        "german": "gut",
        "french": "bon"
      },
      {
        "malagasy": "vaovao",
        "english": "new (news)",
        "german": "neu (Nachrichten)",
        "french": "nouveau (nouvelles)"
      },
      {
        "malagasy": "tratra",
        "english": "chest",
        "german": "Brust",
        "french": "poitrine"
      },
      {
        "malagasy": "tsotra",
        "english": "simple",
        "german": "einfach",
        "french": "simple"
      },
      {
        "malagasy": "Indrindra",
        "english": "especially",
        "german": "besonders",
        "french": "surtout"
      },
      {
        "malagasy": "onja",
        "english": "wave",
        "german": "Welle",
        "french": "vague"
      },
      {
        "malagasy": "drafitra",
        "english": "draft",
        "german": "Entwurf",
        "french": "brouillon"
      }
    ]
  },
  {
    "id": "greetings",
    "title": "Greetings",
    "emoji": "👋",
    "category": "conversation",
    "description": "Essential greetings and polite expressions.",
    "cards": [
      {
        "front": "Hello!",
        "back": "Manahoana?",
        "front_de": "Hallo!",
        "front_fr": "Bonjour !"
      },
      {
        "front": "Hi!",
        "back": "Salama!",
        "front_de": "Hi!",
        "front_fr": "Salut !"
      },
      {
        "front": "What's up?",
        "back": "Inona no vaovao?",
        "front_de": "Was geht?",
        "front_fr": "Quoi de neuf ?"
      },
      {
        "front": "Nothing special!",
        "back": "Tsy misy!",
        "front_de": "Nichts Besonderes!",
        "front_fr": "Rien de spécial !"
      },
      {
        "front": "How are you?",
        "back": "Fahasalamana?",
        "front_de": "Wie geht es dir?",
        "front_fr": "Comment ça va ?"
      },
      {
        "front": "I'm OK. Thanks.",
        "back": "Tsara fa misaotra!",
        "front_de": "Mir geht's gut. Danke.",
        "front_fr": "Ça va. Merci."
      },
      {
        "front": "Welcome!",
        "back": "Tonga soa!",
        "front_de": "Willkommen!",
        "front_fr": "Bienvenue !"
      },
      {
        "front": "Bye!",
        "back": "Veloma!",
        "front_de": "Tschüss!",
        "front_fr": "Au revoir !"
      },
      {
        "front": "Thanks!",
        "back": "Misaotra!",
        "front_de": "Danke!",
        "front_fr": "Merci !"
      },
      {
        "front": "Please / Sorry!",
        "back": "Azafady!",
        "front_de": "Bitte / Entschuldigung!",
        "front_fr": "S'il vous plaît / Pardon !"
      },
      {
        "front": "Please / Sorry! (formal)",
        "back": "Miala tsiny!",
        "front_de": "Bitte / Entschuldigung! (formell)",
        "front_fr": "S'il vous plaît / Pardon ! (formel)"
      },
      {
        "front": "No problem!",
        "back": "Tsy misy olana!",
        "front_de": "Kein Problem!",
        "front_fr": "Pas de problème !"
      }
    ],
    "vocab": [
      {
        "malagasy": "Manahoana",
        "english": "Hello",
        "german": "Hallo",
        "french": "Bonjour"
      },
      {
        "malagasy": "Salama",
        "english": "Hi / Health",
        "german": "Hi / Gesundheit",
        "french": "Salut / Santé"
      },
      {
        "malagasy": "vaovao",
        "english": "news / new",
        "german": "Nachrichten / neu",
        "french": "nouvelles / nouveau"
      },
      {
        "malagasy": "Fahasalamana",
        "english": "health / How are you?",
        "german": "Gesundheit / Wie geht's?",
        "french": "santé / Comment allez-vous ?"
      },
      {
        "malagasy": "Tsara",
        "english": "good / OK",
        "german": "gut / OK",
        "french": "bien / OK"
      },
      {
        "malagasy": "misaotra",
        "english": "thank you",
        "german": "danke",
        "french": "merci"
      },
      {
        "malagasy": "Tonga soa",
        "english": "Welcome",
        "german": "Willkommen",
        "french": "Bienvenue"
      },
      {
        "malagasy": "Veloma",
        "english": "Goodbye",
        "german": "Auf Wiedersehen",
        "french": "Au revoir"
      },
      {
        "malagasy": "Azafady",
        "english": "Please / Sorry / Excuse me",
        "german": "Bitte / Entschuldigung",
        "french": "S'il vous plaît / Pardon"
      },
      {
        "malagasy": "Miala tsiny",
        "english": "Please / Sorry (formal)",
        "german": "Bitte / Entschuldigung (formell)",
        "french": "Pardon (formel)"
      },
      {
        "malagasy": "olana",
        "english": "problem",
        "german": "Problem",
        "french": "problème"
      },
      {
        "malagasy": "Salama ohatran'ny",
        "english": "Hello to you too",
        "german": "Hallo auch an dich",
        "french": "Bonjour à vous aussi"
      },
      {
        "malagasy": "Manao ahoana",
        "english": "How are you doing?",
        "german": "Wie geht es dir?",
        "french": "Comment allez-vous ?"
      },
      {
        "malagasy": "Tsara be",
        "english": "Very well",
        "german": "Sehr gut",
        "french": "Très bien"
      },
      {
        "malagasy": "Tsy dia tsara",
        "english": "Not so well",
        "german": "Nicht so gut",
        "french": "Pas très bien"
      },
      {
        "malagasy": "Aza ny manahy",
        "english": "Don't worry",
        "german": "Keine Sorge",
        "french": "Ne vous inquiétez pas"
      },
      {
        "malagasy": "Sambatra",
        "english": "Lucky / Blessed",
        "german": "Glücklich / Gesegnet",
        "french": "Chanceux / Béni"
      },
      {
        "malagasy": "Miarahaba",
        "english": "Greet / Salute",
        "german": "Grüßen",
        "french": "Saluer"
      },
      {
        "malagasy": "Faly",
        "english": "Happy / Glad",
        "german": "Glücklich / Froh",
        "french": "Heureux / Content"
      },
      {
        "malagasy": "Tsy misy",
        "english": "There is not / Nothing",
        "german": "Es gibt nicht / Nichts",
        "french": "Il n'y a pas / Rien"
      }
    ]
  },
  {
    "id": "introductions",
    "title": "Introductions",
    "emoji": "🤝",
    "category": "conversation",
    "description": "Introducing yourself and asking about others.",
    "cards": [
      {
        "front": "What is your name?",
        "back": "Iza no anaranao?",
        "front_de": "Wie heißt du?",
        "front_fr": "Comment tu t'appelles ?"
      },
      {
        "front": "My name is ____, and yours?",
        "back": "____ no anarako, ary ianao?",
        "front_de": "Ich heiße ____, und du?",
        "front_fr": "Je m'appelle ____, et toi ?"
      },
      {
        "front": "Happy to meet you!",
        "back": "Faly mahalala anao!",
        "front_de": "Freut mich, dich kennenzulernen!",
        "front_fr": "Enchanté de te rencontrer !"
      },
      {
        "front": "Where are you from?",
        "back": "Avy aiza ianao?",
        "front_de": "Woher kommst du?",
        "front_fr": "D'où viens-tu ?"
      },
      {
        "front": "I am from USA.",
        "back": "Avy any Etazonia aho.",
        "front_de": "Ich komme aus den USA.",
        "front_fr": "Je viens des États-Unis."
      },
      {
        "front": "What is your job? / What do you do?",
        "back": "Inona ny asanao?",
        "front_de": "Was bist du von Beruf? / Was machst du?",
        "front_fr": "Quel est ton métier ? / Que fais-tu ?"
      },
      {
        "front": "I am a trainee.",
        "back": "Mpiofana aho.",
        "front_de": "Ich bin Praktikant.",
        "front_fr": "Je suis stagiaire."
      },
      {
        "front": "I learn Malagasy.",
        "back": "Mianatra teny Malagasy aho.",
        "front_de": "Ich lerne Malagasy.",
        "front_fr": "J'apprends le malgache."
      },
      {
        "front": "Where will you stay?",
        "back": "Hipetraka aiza ianao?",
        "front_de": "Wo wirst du übernachten?",
        "front_fr": "Où vas-tu loger ?"
      },
      {
        "front": "See you later!",
        "back": "Mandrapihaona!",
        "front_de": "Bis später!",
        "front_fr": "À plus tard !"
      }
    ],
    "vocab": [
      {
        "malagasy": "anarana",
        "english": "name",
        "german": "Name",
        "french": "nom"
      },
      {
        "malagasy": "avy aiza",
        "english": "from where",
        "german": "woher",
        "french": "d'où"
      },
      {
        "malagasy": "Etazonia",
        "english": "USA",
        "german": "USA",
        "french": "États-Unis"
      },
      {
        "malagasy": "asa",
        "english": "work / job",
        "german": "Arbeit / Beruf",
        "french": "travail / métier"
      },
      {
        "malagasy": "Mpiofana",
        "english": "trainee",
        "german": "Praktikant",
        "french": "stagiaire"
      },
      {
        "malagasy": "mianatra",
        "english": "to learn",
        "german": "lernen",
        "french": "apprendre"
      },
      {
        "malagasy": "mipetraka",
        "english": "to live / to sit",
        "german": "wohnen / sitzen",
        "french": "habiter / s'asseoir"
      },
      {
        "malagasy": "Mandrapihaona",
        "english": "See you later",
        "german": "Bis später",
        "french": "À plus tard"
      },
      {
        "malagasy": "Frantsay",
        "english": "French",
        "german": "Französisch",
        "french": "Français"
      },
      {
        "malagasy": "Anglisy",
        "english": "English",
        "german": "Englisch",
        "french": "Anglais"
      },
      {
        "malagasy": "teny",
        "english": "language / word",
        "german": "Sprache / Wort",
        "french": "langue / mot"
      },
      {
        "malagasy": "mpianatra",
        "english": "student",
        "german": "Student",
        "french": "étudiant"
      },
      {
        "malagasy": "mpampianatra",
        "english": "teacher",
        "german": "Lehrer",
        "french": "professeur"
      },
      {
        "malagasy": "dokotera",
        "english": "doctor",
        "german": "Arzt",
        "french": "médecin"
      },
      {
        "malagasy": "mpiasa",
        "english": "worker",
        "german": "Arbeiter",
        "french": "travailleur"
      },
      {
        "malagasy": "mpanjara",
        "english": "volunteer",
        "german": "Freiwilliger",
        "french": "bénévole"
      },
      {
        "malagasy": "mpitari-dalana",
        "english": "tour guide",
        "german": "Reiseführer",
        "french": "guide touristique"
      },
      {
        "malagasy": "tompon'asa",
        "english": "employer",
        "german": "Arbeitgeber",
        "french": "employeur"
      },
      {
        "malagasy": "mpiasa an-trano",
        "english": "housekeeper",
        "german": "Haushälter/in",
        "french": "femme/homme de ménage"
      },
      {
        "malagasy": "mpiambina",
        "english": "guard",
        "german": "Wächter",
        "french": "gardien"
      },
      {
        "malagasy": "sakaizana",
        "english": "acquaintance",
        "german": "Bekannter",
        "french": "connaissance"
      }
    ]
  },
  {
    "id": "family",
    "title": "Family",
    "emoji": "👨‍👩‍👧‍👦",
    "category": "vocabulary",
    "description": "Family members and relationships.",
    "cards": [
      {
        "front": "Family",
        "back": "Fianakaviana",
        "front_de": "Familie",
        "front_fr": "Famille"
      },
      {
        "front": "Father",
        "back": "Dada",
        "front_de": "Vater",
        "front_fr": "Père"
      },
      {
        "front": "Mother",
        "back": "Neny",
        "front_de": "Mutter",
        "front_fr": "Mère"
      },
      {
        "front": "Older siblings",
        "back": "Zoky",
        "front_de": "Ältere Geschwister",
        "front_fr": "Frères et sœurs aînés"
      },
      {
        "front": "Younger siblings",
        "back": "Zandry",
        "front_de": "Jüngere Geschwister",
        "front_fr": "Frères et sœurs cadets"
      },
      {
        "front": "Grandfather",
        "back": "Dadabe",
        "front_de": "Großvater",
        "front_fr": "Grand-père"
      },
      {
        "front": "Grandmother",
        "back": "Nenibe",
        "front_de": "Großmutter",
        "front_fr": "Grand-mère"
      },
      {
        "front": "Children",
        "back": "Zanaka",
        "front_de": "Kinder",
        "front_fr": "Enfants"
      },
      {
        "front": "To be married",
        "back": "Manam-bady",
        "front_de": "Verheiratet sein",
        "front_fr": "Être marié"
      },
      {
        "front": "Single child",
        "back": "Zaza tokana",
        "front_de": "Einziges Kind",
        "front_fr": "Enfant unique"
      },
      {
        "front": "Twins",
        "back": "Kambana",
        "front_de": "Zwillinge",
        "front_fr": "Jumeaux"
      },
      {
        "front": "Boy/girlfriend",
        "back": "Sipa",
        "front_de": "Freund/Freundin",
        "front_fr": "Petit ami / petite amie"
      },
      {
        "front": "Friend",
        "back": "Namana",
        "front_de": "Freund",
        "front_fr": "Ami"
      },
      {
        "front": "To be separated",
        "back": "Nisaraka",
        "front_de": "Getrennt sein",
        "front_fr": "Être séparé"
      },
      {
        "front": "To have",
        "back": "Manana",
        "front_de": "Haben",
        "front_fr": "Avoir"
      }
    ],
    "vocab": [
      {
        "malagasy": "Fianakaviana",
        "english": "Family",
        "german": "Familie",
        "french": "Famille"
      },
      {
        "malagasy": "Dada",
        "english": "Father",
        "german": "Vater",
        "french": "Père"
      },
      {
        "malagasy": "Neny",
        "english": "Mother",
        "german": "Mutter",
        "french": "Mère"
      },
      {
        "malagasy": "Zoky",
        "english": "Older sibling",
        "german": "älteres Geschwister",
        "french": "frère/soeur aîné(e)"
      },
      {
        "malagasy": "Zandry",
        "english": "Younger sibling",
        "german": "jüngeres Geschwister",
        "french": "frère/soeur cadet(te)"
      },
      {
        "malagasy": "Zanaka",
        "english": "Child",
        "german": "Kind",
        "french": "Enfant"
      },
      {
        "malagasy": "Namana",
        "english": "Friend",
        "german": "Freund",
        "french": "Ami"
      },
      {
        "malagasy": "Dadabe",
        "english": "Grandfather",
        "german": "Großvater",
        "french": "Grand-père"
      },
      {
        "malagasy": "Nenibe",
        "english": "Grandmother",
        "german": "Großmutter",
        "french": "Grand-mère"
      },
      {
        "malagasy": "Manam-bady",
        "english": "To be married",
        "german": "Verheiratet sein",
        "french": "Être marié"
      },
      {
        "malagasy": "Zaza tokana",
        "english": "Single child",
        "german": "Einzelkind",
        "french": "Enfant unique"
      },
      {
        "malagasy": "Kambana",
        "english": "Twins",
        "german": "Zwillinge",
        "french": "Jumeaux"
      },
      {
        "malagasy": "Sipa",
        "english": "Boyfriend / Girlfriend",
        "german": "Freund / Freundin",
        "french": "Petit ami / Petite amie"
      },
      {
        "malagasy": "Nisaraka",
        "english": "To be separated",
        "german": "Getrennt sein",
        "french": "Être séparé"
      },
      {
        "malagasy": "Manana",
        "english": "To have",
        "german": "Haben",
        "french": "Avoir"
      },
      {
        "malagasy": "Raimandreny",
        "english": "Parents",
        "german": "Eltern",
        "french": "Parents"
      },
      {
        "malagasy": "Anabavy",
        "english": "Sister",
        "german": "Schwester",
        "french": "Soeur"
      },
      {
        "malagasy": "Anadahy",
        "english": "Brother",
        "german": "Bruder",
        "french": "Frère"
      },
      {
        "malagasy": "Vavy",
        "english": "Wife",
        "german": "Ehefrau",
        "french": "Femme / Épouse"
      },
      {
        "malagasy": "Vady",
        "english": "Husband / Spouse",
        "german": "Ehemann / Ehepartner",
        "french": "Mari / Époux"
      },
      {
        "malagasy": "Zanaka vavy",
        "english": "Daughter",
        "german": "Tochter",
        "french": "Fille"
      },
      {
        "malagasy": "Zanaka lahy",
        "english": "Son",
        "german": "Sohn",
        "french": "Fils"
      },
      {
        "malagasy": "Menaky",
        "english": "Cousin",
        "german": "Cousin/Cousine",
        "french": "Cousin(e)"
      },
      {
        "malagasy": "Rafozanaka",
        "english": "Nephew / Niece",
        "german": "Neffe / Nichte",
        "french": "Neveu / Nièce"
      },
      {
        "malagasy": "Mpianakavy",
        "english": "Household",
        "german": "Haushalt",
        "french": "Foyer"
      },
      {
        "malagasy": "Mponina",
        "english": "Resident / Inhabitant",
        "german": "Bewohner / Einwohner",
        "french": "Résident / Habitant"
      },
      {
        "malagasy": "Tompokambana",
        "english": "Twin sibling",
        "german": "Zwillingsgeschwister",
        "french": "Jumeau/Jumelle"
      },
      {
        "malagasy": "Zokiolona",
        "english": "Elder / Senior",
        "german": "Älterer / Senior",
        "french": "Aîné / Senior"
      },
      {
        "malagasy": "Ankizy",
        "english": "Kid / Young person",
        "german": "Kind / Jugendlicher",
        "french": "Enfant / Jeune"
      },
      {
        "malagasy": "Mitaiza",
        "english": "To raise (children)",
        "german": "Kinder großziehen",
        "french": "Élever (des enfants)"
      },
      {
        "malagasy": "Miteraka",
        "english": "To give birth",
        "german": "Gebären",
        "french": "Donner naissance"
      },
      {
        "malagasy": "Teraka",
        "english": "Born",
        "german": "Geboren",
        "french": "Né"
      },
      {
        "malagasy": "Taona",
        "english": "Age / Year",
        "german": "Alter / Jahr",
        "french": "Âge / Année"
      },
      {
        "malagasy": "Miantrana",
        "english": "To adopt",
        "german": "Adoptieren",
        "french": "Adopter"
      }
    ]
  },
  {
    "id": "sentences",
    "title": "Basic Sentence Structure",
    "emoji": "📝",
    "category": "grammar",
    "description": "Learn VOS word order, pronouns, negation, and conjugation.",
    "cards": [
      {
        "front": "I / I am",
        "back": "Pronoun: Aho",
        "front_de": "Ich / Ich bin",
        "front_fr": "Je / Je suis"
      },
      {
        "front": "You / You are",
        "back": "Pronoun: Ianao",
        "front_de": "Du / Du bist",
        "front_fr": "Tu / Tu es"
      },
      {
        "front": "He/She / He is/She is",
        "back": "Pronoun: Izy",
        "front_de": "Er/Sie / Er ist/Sie ist",
        "front_fr": "Il/Elle / Il est/Elle est"
      },
      {
        "front": "We (inclusive)",
        "back": "Pronoun: Isika",
        "front_de": "Wir (inklusiv)",
        "front_fr": "Nous (inclusif)"
      },
      {
        "front": "We (exclusive)",
        "back": "Pronoun: Izahay",
        "front_de": "Wir (exklusiv)",
        "front_fr": "Nous (exclusif)"
      },
      {
        "front": "You (plural)",
        "back": "Pronoun: Ianareo",
        "front_de": "Ihr",
        "front_fr": "Vous (pluriel)"
      },
      {
        "front": "They",
        "back": "Pronoun: Izireo",
        "front_de": "Sie",
        "front_fr": "Ils/Elles"
      },
      {
        "front": "Mihinana vary aho = I eat rice",
        "back": "Affirmative: Verb + Object + Subject",
        "front_de": "Mihinana vary aho = Ich esse Reis",
        "front_fr": "Mihinana vary aho = Je mange du riz"
      },
      {
        "front": "Mangatsiaka izy = He/she is cold",
        "back": "Adjective + Subject",
        "front_de": "Mangatsiaka izy = Er/sie friert",
        "front_fr": "Mangatsiaka izy = Il/elle a froid"
      },
      {
        "front": "Tsy mihinana vary aho = I don't eat rice",
        "back": "Negation: Tsy + ...",
        "front_de": "Tsy mihinana vary aho = Ich esse keinen Reis",
        "front_fr": "Tsy mihinana vary aho = Je ne mange pas de riz"
      },
      {
        "front": "Mihinana = eat (now)",
        "back": "Present tense",
        "front_de": "Mihinana = essen (jetzt)",
        "front_fr": "Mihinana = manger (maintenant)"
      },
      {
        "front": "Hihinana = will eat",
        "back": "Future tense",
        "front_de": "Hihinana = wird essen",
        "front_fr": "Hihinana = mangera"
      },
      {
        "front": "Nihinana = ate",
        "back": "Past tense",
        "front_de": "Nihinana = aß",
        "front_fr": "Nihinana = a mangé"
      }
    ],
    "vocab": [
      {
        "malagasy": "Mihinana",
        "english": "to eat (present)",
        "german": "essen (Gegenwart)",
        "french": "manger (présent)"
      },
      {
        "malagasy": "Hihinana",
        "english": "will eat (future)",
        "german": "wird essen (Zukunft)",
        "french": "mangera (futur)"
      },
      {
        "malagasy": "Nihinana",
        "english": "ate (past)",
        "german": "aß (Vergangenheit)",
        "french": "a mangé (passé)"
      },
      {
        "malagasy": "vary",
        "english": "rice",
        "german": "Reis",
        "french": "riz"
      },
      {
        "malagasy": "Misotro",
        "english": "to drink",
        "german": "trinken",
        "french": "boire"
      },
      {
        "malagasy": "rano",
        "english": "water",
        "german": "Wasser",
        "french": "eau"
      },
      {
        "malagasy": "Tia",
        "english": "to like",
        "german": "mögen",
        "french": "aimer"
      },
      {
        "malagasy": "Tsy",
        "english": "no / not",
        "german": "nein / nicht",
        "french": "non / ne pas"
      },
      {
        "malagasy": "Aho",
        "english": "I / I am",
        "german": "ich / ich bin",
        "french": "je / je suis"
      },
      {
        "malagasy": "Ianao",
        "english": "You / You are",
        "german": "du / du bist",
        "french": "tu / tu es"
      },
      {
        "malagasy": "Izy",
        "english": "He/She / He is/She is",
        "german": "er/sie / er/sie ist",
        "french": "il/elle / il/elle est"
      },
      {
        "malagasy": "Isika",
        "english": "We (inclusive)",
        "german": "Wir (inklusiv)",
        "french": "Nous (inclusif)"
      },
      {
        "malagasy": "Izahay",
        "english": "We (exclusive)",
        "german": "Wir (exklusiv)",
        "french": "Nous (exclusif)"
      },
      {
        "malagasy": "Ianareo",
        "english": "You (plural)",
        "german": "Ihr (Plural)",
        "french": "Vous (pluriel)"
      },
      {
        "malagasy": "Izireo",
        "english": "They",
        "german": "Sie",
        "french": "Ils/Elles"
      },
      {
        "malagasy": "Misy",
        "english": "there is / exists",
        "german": "es gibt / existiert",
        "french": "il y a / existe"
      },
      {
        "malagasy": "Tsy misy",
        "english": "there is not",
        "german": "es gibt nicht",
        "french": "il n'y a pas"
      },
      {
        "malagasy": "Ity",
        "english": "this",
        "german": "dies",
        "french": "ceci"
      },
      {
        "malagasy": "Iry",
        "english": "that",
        "german": "das",
        "french": "cela"
      },
      {
        "malagasy": "Ireo",
        "english": "these / those",
        "german": "diese / jene",
        "french": "ceux-ci / ceux-là"
      },
      {
        "malagasy": "Dia",
        "english": "then / and (connector)",
        "german": "dann / und (Verbinder)",
        "french": "alors / et (connecteur)"
      },
      {
        "malagasy": "Fa",
        "english": "but",
        "german": "aber",
        "french": "mais"
      },
      {
        "malagasy": "Satria",
        "english": "because",
        "german": "weil",
        "french": "parce que"
      },
      {
        "malagasy": "Raha",
        "english": "if",
        "german": "wenn/falls",
        "french": "si"
      },
      {
        "malagasy": "Na",
        "english": "or",
        "german": "oder",
        "french": "ou"
      },
      {
        "malagasy": "ary",
        "english": "and",
        "german": "und",
        "french": "et"
      },
      {
        "malagasy": "izany",
        "english": "that / it",
        "german": "das / es",
        "french": "cela / il"
      },
      {
        "malagasy": "koa",
        "english": "too / also",
        "german": "auch / ebenfalls",
        "french": "aussi / également"
      },
      {
        "malagasy": "ve",
        "english": "question particle",
        "german": "Fragepartikel",
        "french": "particule de question"
      },
      {
        "malagasy": "angaha",
        "english": "question particle (polite)",
        "german": "Fragepartikel (höflich)",
        "french": "particule de question (polie)"
      }
    ]
  },
  {
    "id": "needs",
    "title": "Basic Needs",
    "emoji": "🍽️",
    "category": "conversation",
    "description": "Expressing needs, feelings, and asking for things.",
    "cards": [
      {
        "front": "I am tired.",
        "back": "Reraka aho.",
        "front_de": "Ich bin müde.",
        "front_fr": "Je suis fatigué."
      },
      {
        "front": "I am hungry.",
        "back": "Noana aho.",
        "front_de": "Ich habe Hunger.",
        "front_fr": "J'ai faim."
      },
      {
        "front": "I am full.",
        "back": "Voky aho.",
        "front_de": "Ich bin satt.",
        "front_fr": "Je suis rassasié."
      },
      {
        "front": "I am thirsty.",
        "back": "Mangetaheta aho.",
        "front_de": "Ich habe Durst.",
        "front_fr": "J'ai soif."
      },
      {
        "front": "Where is the toilet?",
        "back": "Aiza ny kabone?",
        "front_de": "Wo ist die Toilette?",
        "front_fr": "Où sont les toilettes ?"
      },
      {
        "front": "I want to drink water.",
        "back": "Te hisotro rano aho.",
        "front_de": "Ich möchte Wasser trinken.",
        "front_fr": "Je veux boire de l'eau."
      },
      {
        "front": "I want to sleep.",
        "back": "Te hatory aho.",
        "front_de": "Ich möchte schlafen.",
        "front_fr": "Je veux dormir."
      },
      {
        "front": "I want to eat.",
        "back": "Te hisakafo aho.",
        "front_de": "Ich möchte essen.",
        "front_fr": "Je veux manger."
      },
      {
        "front": "I want to go out.",
        "back": "Te hivoaka aho.",
        "front_de": "Ich möchte hinausgehen.",
        "front_fr": "Je veux sortir."
      },
      {
        "front": "I am hot.",
        "back": "Mafana aho.",
        "front_de": "Mir ist heiß.",
        "front_fr": "J'ai chaud."
      },
      {
        "front": "I am cold.",
        "back": "Mangatsiaka aho.",
        "front_de": "Mir ist kalt.",
        "front_fr": "J'ai froid."
      },
      {
        "front": "I need ___ please.",
        "back": "Mila ___ aho azafady.",
        "front_de": "Ich brauche ___ bitte.",
        "front_fr": "J'ai besoin de ___ s'il vous plaît."
      },
      {
        "front": "Give me ___ please.",
        "back": "Omeo ___ aho azafady.",
        "front_de": "Gib mir ___ bitte.",
        "front_fr": "Donnez-moi ___ s'il vous plaît."
      },
      {
        "front": "Can I have ___ please?",
        "back": "Afaka mahazo ___ ve aho azafady?",
        "front_de": "Kann ich ___ haben bitte?",
        "front_fr": "Puis-je avoir ___ s'il vous plaît ?"
      }
    ],
    "vocab": [
      {
        "malagasy": "Reraka",
        "english": "tired",
        "german": "müde",
        "french": "fatigué"
      },
      {
        "malagasy": "Noana",
        "english": "hungry",
        "german": "hungrig",
        "french": "affamé"
      },
      {
        "malagasy": "Voky",
        "english": "full",
        "german": "voll / satt",
        "french": "plein / rassasié"
      },
      {
        "malagasy": "Mangetaheta",
        "english": "thirsty",
        "german": "durstig",
        "french": "assoiffé"
      },
      {
        "malagasy": "kabone",
        "english": "toilet",
        "german": "Toilette",
        "french": "toilettes"
      },
      {
        "malagasy": "Te",
        "english": "want",
        "german": "wollen",
        "french": "vouloir"
      },
      {
        "malagasy": "hatory",
        "english": "to sleep",
        "german": "schlafen",
        "french": "dormir"
      },
      {
        "malagasy": "hisakafo",
        "english": "to eat (meal)",
        "german": "essen (Mahlzeit)",
        "french": "manger (repas)"
      },
      {
        "malagasy": "hivoaka",
        "english": "to go out",
        "german": "ausgehen",
        "french": "sortir"
      },
      {
        "malagasy": "Mafana",
        "english": "hot",
        "german": "heiß",
        "french": "chaud"
      },
      {
        "malagasy": "Mangatsiaka",
        "english": "cold",
        "german": "kalt",
        "french": "froid"
      },
      {
        "malagasy": "Mila",
        "english": "need",
        "german": "brauchen",
        "french": "besoin"
      },
      {
        "malagasy": "Omeo",
        "english": "give",
        "german": "geben",
        "french": "donner"
      },
      {
        "malagasy": "Afaka",
        "english": "can / able",
        "german": "können / fähig",
        "french": "pouvoir / capable"
      },
      {
        "malagasy": "mahazo",
        "english": "to get / receive",
        "german": "bekommen / erhalten",
        "french": "obtenir / recevoir"
      },
      {
        "malagasy": "Azafady",
        "english": "please / sorry",
        "german": "bitte / Entschuldigung",
        "french": "s'il vous plaît / pardon"
      },
      {
        "malagasy": "Ampy",
        "english": "enough",
        "german": "genug",
        "french": "assez"
      },
      {
        "malagasy": "Ladosy",
        "english": "shower",
        "german": "Dusche",
        "french": "douche"
      },
      {
        "malagasy": "Po",
        "english": "pee pot",
        "german": "Nachttopf",
        "french": "pot de chambre"
      },
      {
        "malagasy": "Tsy tia hena",
        "english": "I don't like meat",
        "german": "Ich mag kein Fleisch",
        "french": "Je n'aime pas la viande"
      },
      {
        "malagasy": "Te-matory",
        "english": "sleepy",
        "german": "schläfrig",
        "french": "somnolent"
      },
      {
        "malagasy": "Matavy",
        "english": "fat / overweight",
        "german": "fett / übergewichtig",
        "french": "gros / en surpoids"
      },
      {
        "malagasy": "Mahia",
        "english": "thin / slim",
        "german": "dünn / schlank",
        "french": "mince / svelte"
      },
      {
        "malagasy": "Marary",
        "english": "sick",
        "german": "krank",
        "french": "malade"
      },
      {
        "malagasy": "Fahasalamana",
        "english": "health",
        "german": "Gesundheit",
        "french": "santé"
      },
      {
        "malagasy": "Clinika",
        "english": "clinic",
        "german": "Klinik",
        "french": "clinique"
      },
      {
        "malagasy": "Hopitaly",
        "english": "hospital",
        "german": "Krankenhaus",
        "french": "hôpital"
      },
      {
        "malagasy": "Fanafody",
        "english": "medicine",
        "german": "Medizin",
        "french": "médicament"
      },
      {
        "malagasy": "Dokotera",
        "english": "doctor",
        "german": "Arzt",
        "french": "médecin"
      },
      {
        "malagasy": "Nurse",
        "english": "nurse",
        "german": "Krankenschwester/Pfleger",
        "french": "infirmier/ère"
      },
      {
        "malagasy": "Mampahory",
        "english": "to hurt",
        "german": "weh tun",
        "french": "faire mal"
      },
      {
        "malagasy": "Mitsabo",
        "english": "to heal / treat",
        "german": "heilen / behandeln",
        "french": "guérir / traiter"
      },
      {
        "malagasy": "Vaksiny",
        "english": "vaccine",
        "german": "Impfstoff",
        "french": "vaccin"
      },
      {
        "malagasy": "Arety",
        "english": "disease",
        "german": "Krankheit",
        "french": "maladie"
      },
      {
        "malagasy": "Tazo",
        "english": "fever",
        "german": "Fieber",
        "french": "fièvre"
      },
      {
        "malagasy": "Mangatsiaka (tarehy)",
        "english": "pale",
        "german": "blass",
        "french": "pâle"
      },
      {
        "malagasy": "Mafana (tarehy)",
        "english": "flushed",
        "german": "gerötet",
        "french": "rouge"
      }
    ]
  },
  {
    "id": "questions",
    "title": "Question Words",
    "emoji": "❓",
    "category": "grammar",
    "description": "Essential question words and example sentences.",
    "cards": [
      {
        "front": "Yes or no question marker",
        "back": "Ve?",
        "front_de": "Ja-oder-Nein-Frage-Markierung",
        "front_fr": "Marqueur de question oui/non"
      },
      {
        "front": "Who?",
        "back": "Iza?",
        "front_de": "Wer?",
        "front_fr": "Qui ?"
      },
      {
        "front": "Where?",
        "back": "Aiza?",
        "front_de": "Wo?",
        "front_fr": "Où ?"
      },
      {
        "front": "What?",
        "back": "Inona?",
        "front_de": "Was?",
        "front_fr": "Quoi ?"
      },
      {
        "front": "How many?",
        "back": "Firy?",
        "front_de": "Wie viele?",
        "front_fr": "Combien ?"
      },
      {
        "front": "What time?",
        "back": "Amin'ny firy?",
        "front_de": "Wie spät?",
        "front_fr": "Quelle heure ?"
      },
      {
        "front": "When? (questions only)",
        "back": "Oviana?",
        "front_de": "Wann? (nur Fragen)",
        "front_fr": "Quand ? (questions seulement)"
      },
      {
        "front": "How much?",
        "back": "Hoatrinona?",
        "front_de": "Wie viel?",
        "front_fr": "Combien ?"
      },
      {
        "front": "Why?",
        "back": "Fa maninona?",
        "front_de": "Warum?",
        "front_fr": "Pourquoi ?"
      },
      {
        "front": "How?",
        "back": "Ahoana?",
        "front_de": "Wie?",
        "front_fr": "Comment ?"
      },
      {
        "front": "Oviana = when (question). Rehefa = when (statement).",
        "back": "Note: Oviana vs Rehefa",
        "front_de": "Oviana = wann (Frage). Rehefa = wenn (Aussage).",
        "front_fr": "Oviana = quand (question). Rehefa = quand (affirmation)."
      }
    ],
    "vocab": [
      {
        "malagasy": "Ve",
        "english": "Question marker (yes/no)",
        "german": "Fragemarker (ja/nein)",
        "french": "Marqueur de question (oui/non)"
      },
      {
        "malagasy": "Iza",
        "english": "Who",
        "german": "Wer",
        "french": "Qui"
      },
      {
        "malagasy": "Aiza",
        "english": "Where",
        "german": "Wo",
        "french": "Où"
      },
      {
        "malagasy": "Inona",
        "english": "What",
        "german": "Was",
        "french": "Quoi"
      },
      {
        "malagasy": "Firy",
        "english": "How many",
        "german": "Wie viele",
        "french": "Combien"
      },
      {
        "malagasy": "Oviana",
        "english": "When (question)",
        "german": "Wann (Frage)",
        "french": "Quand (question)"
      },
      {
        "malagasy": "Rehefa",
        "english": "When (statement)",
        "german": "Wenn (Aussage)",
        "french": "Quand (affirmation)"
      },
      {
        "malagasy": "Ahoana",
        "english": "How",
        "german": "Wie",
        "french": "Comment"
      },
      {
        "malagasy": "Fa maninona",
        "english": "Why",
        "german": "Warum",
        "french": "Pourquoi"
      },
      {
        "malagasy": "Amin'ny firy",
        "english": "What time",
        "german": "Um wie viel Uhr",
        "french": "Quelle heure"
      },
      {
        "malagasy": "Hoatrinona",
        "english": "How much",
        "german": "Wie viel",
        "french": "Combien"
      },
      {
        "malagasy": "Aiza ny ...",
        "english": "Where is the ...",
        "german": "Wo ist der/die/das ...",
        "french": "Où est le/la ..."
      },
      {
        "malagasy": "Inona no ...",
        "english": "What is the ...",
        "german": "Was ist der/die/das ...",
        "french": "Qu'est-ce que le/la ..."
      },
      {
        "malagasy": "Iza no ...",
        "english": "Who is the ...",
        "german": "Wer ist der/die/das ...",
        "french": "Qui est le/la ..."
      },
      {
        "malagasy": "Firy ny ...",
        "english": "How many ...",
        "german": "Wie viele ...",
        "french": "Combien de ..."
      },
      {
        "malagasy": "Nahoana?",
        "english": "How come?",
        "german": "Wieso?",
        "french": "Comment ça se fait ?"
      },
      {
        "malagasy": "Inona no antony?",
        "english": "What is the reason?",
        "german": "Was ist der Grund?",
        "french": "Quelle est la raison ?"
      },
      {
        "malagasy": "Aiza no mety?",
        "english": "Where is it suitable?",
        "german": "Wo ist es geeignet?",
        "french": "Où est-ce approprié ?"
      },
      {
        "malagasy": "Ahoana no anaranao?",
        "english": "What is your name? (alt)",
        "german": "Wie ist dein Name? (alt)",
        "french": "Quel est votre nom ? (alt)"
      },
      {
        "malagasy": "Inona no tianao?",
        "english": "What do you want?",
        "german": "Was willst du?",
        "french": "Que voulez-vous ?"
      },
      {
        "malagasy": "Aiza no mipetraka ianao?",
        "english": "Where do you live?",
        "german": "Wo wohnst du?",
        "french": "Où habitez-vous ?"
      },
      {
        "malagasy": "Oviana no hianaranao?",
        "english": "When will you study?",
        "german": "Wann wirst du lernen?",
        "french": "Quand étudierez-vous ?"
      },
      {
        "malagasy": "Ahoana ny toetranao?",
        "english": "How is your health?",
        "german": "Wie ist deine Gesundheit?",
        "french": "Comment va votre santé ?"
      },
      {
        "malagasy": "Hoatrinona ny vidiny?",
        "english": "What is the price?",
        "german": "Was ist der Preis?",
        "french": "Quel est le prix ?"
      },
      {
        "malagasy": "Firy ny taonanao?",
        "english": "How old are you?",
        "german": "Wie alt bist du?",
        "french": "Quel âge avez-vous ?"
      }
    ]
  },
  {
    "id": "commands",
    "title": "Commands & Requests",
    "emoji": "🙏",
    "category": "conversation",
    "description": "Common commands, requests, and polite expressions.",
    "cards": [
      {
        "front": "Yes",
        "back": "Eny",
        "front_de": "Ja",
        "front_fr": "Oui"
      },
      {
        "front": "No",
        "back": "Tsia",
        "front_de": "Nein",
        "front_fr": "Non"
      },
      {
        "front": "Come here!",
        "back": "Avia aty!",
        "front_de": "Komm her!",
        "front_fr": "Viens ici !"
      },
      {
        "front": "Wait!",
        "back": "Andraso!",
        "front_de": "Warte!",
        "front_fr": "Attends !"
      },
      {
        "front": "Let's go / Come on!",
        "back": "Ndao handeha!",
        "front_de": "Los! / Komm schon!",
        "front_fr": "On y va / Allez !"
      },
      {
        "front": "False / Untrue",
        "back": "Diso",
        "front_de": "Falsch / Unwahr",
        "front_fr": "Faux / Inexact"
      },
      {
        "front": "True",
        "back": "Marina",
        "front_de": "Wahr",
        "front_fr": "Vrai"
      },
      {
        "front": "That is enough!",
        "back": "Ampy izay!",
        "front_de": "Das reicht!",
        "front_fr": "Ça suffit !"
      },
      {
        "front": "Understand?",
        "back": "Azo?",
        "front_de": "Verstanden?",
        "front_fr": "Compris ?"
      },
      {
        "front": "I need (coke) please.",
        "back": "Mila (koka) aho azafady.",
        "front_de": "Ich brauche (Cola) bitte.",
        "front_fr": "J'ai besoin de (coca) s'il vous plaît."
      },
      {
        "front": "Give me (water) please.",
        "back": "Omeo (rano) aho azafady.",
        "front_de": "Gib mir (Wasser) bitte.",
        "front_fr": "Donnez-moi (de l'eau) s'il vous plaît."
      },
      {
        "front": "Can I have (a glass) please?",
        "back": "Afaka mahazo (vera) ve aho azafady?",
        "front_de": "Kann ich (ein Glas) haben bitte?",
        "front_fr": "Puis-je avoir (un verre) s'il vous plaît ?"
      }
    ],
    "vocab": [
      {
        "malagasy": "Eny",
        "english": "Yes",
        "german": "Ja",
        "french": "Oui"
      },
      {
        "malagasy": "Tsia",
        "english": "No",
        "german": "Nein",
        "french": "Non"
      },
      {
        "malagasy": "Avia aty",
        "english": "Come here",
        "german": "Komm her",
        "french": "Viens ici"
      },
      {
        "malagasy": "Andraso",
        "english": "Wait",
        "german": "Warte",
        "french": "Attends"
      },
      {
        "malagasy": "Ndao handeha",
        "english": "Let's go",
        "german": "Lass uns gehen",
        "french": "Allons-y"
      },
      {
        "malagasy": "Diso",
        "english": "False",
        "german": "Falsch",
        "french": "Faux"
      },
      {
        "malagasy": "Marina",
        "english": "True",
        "german": "Wahr",
        "french": "Vrai"
      },
      {
        "malagasy": "Ampy izay",
        "english": "That's enough",
        "german": "Das reicht",
        "french": "Ça suffit"
      },
      {
        "malagasy": "Azonao atao ve?",
        "english": "Can you do it?",
        "german": "Kannst du es tun?",
        "french": "Peux-tu le faire ?"
      },
      {
        "malagasy": "Aleo",
        "english": "Better / Rather",
        "german": "Besser / Eher",
        "french": "Mieux / Plutôt"
      },
      {
        "malagasy": "Tsara",
        "english": "Good / OK",
        "german": "Gut / OK",
        "french": "Bien / OK"
      },
      {
        "malagasy": "Azafady miditra",
        "english": "Please come in",
        "german": "Bitte komm rein",
        "french": "Entrez s'il vous plaît"
      },
      {
        "malagasy": "Miala amin'ny",
        "english": "Get away from",
        "german": "Geh weg von",
        "french": "Éloigne-toi de"
      },
      {
        "malagasy": "Mijanona",
        "english": "Stop",
        "german": "Halt",
        "french": "Arrête"
      },
      {
        "malagasy": "Miverena",
        "english": "Come back",
        "german": "Komm zurück",
        "french": "Reviens"
      },
      {
        "malagasy": "Mandrosoa",
        "english": "Go ahead",
        "german": "Mach weiter",
        "french": "Vas-y"
      },
      {
        "malagasy": "Aza manao izany",
        "english": "Don't do that",
        "german": "Tu das nicht",
        "french": "Ne fais pas ça"
      },
      {
        "malagasy": "Manaova azafady",
        "english": "Please do it",
        "german": "Bitte tu es",
        "french": "Fais-le s'il vous plaît"
      },
      {
        "malagasy": "Mba omeo aho",
        "english": "Please give me",
        "german": "Bitte gib mir",
        "french": "Donne-moi s'il te plaît"
      },
      {
        "malagasy": "Afaka mijery ve?",
        "english": "Can I see?",
        "german": "Kann ich sehen?",
        "french": "Puis-je voir ?"
      },
      {
        "malagasy": "Alefaso",
        "english": "Send it",
        "german": "Schick es",
        "french": "Envoie-le"
      },
      {
        "malagasy": "Tadidio",
        "english": "Remember",
        "german": "Erinnere dich",
        "french": "Souviens-toi"
      },
      {
        "malagasy": "Aza hadinoina",
        "english": "Don't forget",
        "german": "Vergiss nicht",
        "french": "N'oublie pas"
      },
      {
        "malagasy": "Mianara tsara",
        "english": "Study well",
        "german": "Lern gut",
        "french": "Étudie bien"
      },
      {
        "malagasy": "Miandrasa kely",
        "english": "Wait a moment",
        "german": "Warte einen Moment",
        "french": "Attends un moment"
      },
      {
        "malagasy": "Mangatahana",
        "english": "To request",
        "german": "Bitten",
        "french": "Demander"
      },
      {
        "malagasy": "Manaiky aho",
        "english": "I agree",
        "german": "Ich stimme zu",
        "french": "Je suis d'accord"
      },
      {
        "malagasy": "Manao ahoana",
        "english": "How are you?",
        "german": "Wie geht's?",
        "french": "Comment allez-vous ?"
      },
      {
        "malagasy": "Veloma ianao",
        "english": "Goodbye to you",
        "german": "Auf Wiedersehen",
        "french": "Au revoir à toi"
      }
    ]
  },
  {
    "id": "numbers",
    "title": "Numbers",
    "emoji": "🔢",
    "category": "vocabulary",
    "description": "Counting in Malagasy — read from right to left!",
    "cards": [
      {
        "front": "One",
        "back": "1 - Iray",
        "front_de": "Eins",
        "front_fr": "Un"
      },
      {
        "front": "Two",
        "back": "2 - Roa",
        "front_de": "Zwei",
        "front_fr": "Deux"
      },
      {
        "front": "Three",
        "back": "3 - Telo",
        "front_de": "Drei",
        "front_fr": "Trois"
      },
      {
        "front": "Four",
        "back": "4 - Efatra",
        "front_de": "Vier",
        "front_fr": "Quatre"
      },
      {
        "front": "Five",
        "back": "5 - Dimy",
        "front_de": "Fünf",
        "front_fr": "Cinq"
      },
      {
        "front": "Six",
        "back": "6 - Enina",
        "front_de": "Sechs",
        "front_fr": "Six"
      },
      {
        "front": "Seven",
        "back": "7 - Fito",
        "front_de": "Sieben",
        "front_fr": "Sept"
      },
      {
        "front": "Eight",
        "back": "8 - Valo",
        "front_de": "Acht",
        "front_fr": "Huit"
      },
      {
        "front": "Nine",
        "back": "9 - Sivy",
        "front_de": "Neun",
        "front_fr": "Neuf"
      },
      {
        "front": "Ten",
        "back": "10 - Folo",
        "front_de": "Zehn",
        "front_fr": "Dix"
      },
      {
        "front": "Forty",
        "back": "40 - Efapolo",
        "front_de": "Vierzig",
        "front_fr": "Quarante"
      },
      {
        "front": "Hundred",
        "back": "100 - Zato",
        "front_de": "Hundert",
        "front_fr": "Cent"
      },
      {
        "front": "Thousand",
        "back": "1,000 - Arivo",
        "front_de": "Tausend",
        "front_fr": "Mille"
      },
      {
        "front": "Ten thousand",
        "back": "10,000 - Iray alina",
        "front_de": "Zehntausend",
        "front_fr": "Dix mille"
      },
      {
        "front": "Hundred thousand",
        "back": "100,000 - Iray hetsy",
        "front_de": "Hunderttausend",
        "front_fr": "Cent mille"
      },
      {
        "front": "Use 'amby' to connect up to 199. Use 'sy' after 199.",
        "back": "Note: amby vs sy",
        "front_de": "Verwende 'amby' zum Verbinden bis 199. Verwende 'sy' nach 199.",
        "front_fr": "Utilisez 'amby' pour relier jusqu'à 199. Utilisez 'sy' après 199."
      }
    ],
    "vocab": [
      {
        "malagasy": "Iray",
        "english": "One",
        "german": "Eins",
        "french": "Un"
      },
      {
        "malagasy": "Roa",
        "english": "Two",
        "german": "Zwei",
        "french": "Deux"
      },
      {
        "malagasy": "Telo",
        "english": "Three",
        "german": "Drei",
        "french": "Trois"
      },
      {
        "malagasy": "Dimy",
        "english": "Five",
        "german": "Fünf",
        "french": "Cinq"
      },
      {
        "malagasy": "Folo",
        "english": "Ten",
        "german": "Zehn",
        "french": "Dix"
      },
      {
        "malagasy": "Zato",
        "english": "Hundred",
        "german": "Hundert",
        "french": "Cent"
      },
      {
        "malagasy": "Arivo",
        "english": "Thousand",
        "german": "Tausend",
        "french": "Mille"
      },
      {
        "malagasy": "Iray alina",
        "english": "Ten thousand",
        "german": "Zehntausend",
        "french": "Dix mille"
      },
      {
        "malagasy": "Iray hetsy",
        "english": "Hundred thousand",
        "german": "Hunderttausend",
        "french": "Cent mille"
      },
      {
        "malagasy": "Efatra",
        "english": "Four",
        "german": "Vier",
        "french": "Quatre"
      },
      {
        "malagasy": "Enina",
        "english": "Six",
        "german": "Sechs",
        "french": "Six"
      },
      {
        "malagasy": "Fito",
        "english": "Seven",
        "german": "Sieben",
        "french": "Sept"
      },
      {
        "malagasy": "Valo",
        "english": "Eight",
        "german": "Acht",
        "french": "Huit"
      },
      {
        "malagasy": "Sivy",
        "english": "Nine",
        "german": "Neun",
        "french": "Neuf"
      },
      {
        "malagasy": "Efapolo",
        "english": "Forty",
        "german": "Vierzig",
        "french": "Quarante"
      },
      {
        "malagasy": "Sivifolo",
        "english": "Ninety",
        "german": "Neunzig",
        "french": "Quatre-vingt-dix"
      },
      {
        "malagasy": "Telonjato",
        "english": "Three hundred",
        "german": "Dreihundert",
        "french": "Trois cents"
      },
      {
        "malagasy": "Sivinjato",
        "english": "Nine hundred",
        "german": "Neunhundert",
        "french": "Neuf cents"
      },
      {
        "malagasy": "Dimy arivo",
        "english": "Five thousand",
        "german": "Fünftausend",
        "french": "Cinq mille"
      },
      {
        "malagasy": "Fito arivo",
        "english": "Seven thousand",
        "german": "Siebentausend",
        "french": "Sept mille"
      },
      {
        "malagasy": "Roa alina",
        "english": "Twenty thousand",
        "german": "Zwanzigtausend",
        "french": "Vingt mille"
      },
      {
        "malagasy": "Enina alina",
        "english": "Sixty thousand",
        "german": "Sechzigtausend",
        "french": "Soixante mille"
      },
      {
        "malagasy": "Efatra hetsy",
        "english": "Four hundred thousand",
        "german": "Vierhunderttausend",
        "french": "Quatre cent mille"
      },
      {
        "malagasy": "Valo hetsy",
        "english": "Eight hundred thousand",
        "german": "Achthunderttausend",
        "french": "Huit cent mille"
      },
      {
        "malagasy": "amby",
        "english": "and (for numbers up to 199)",
        "german": "und (für Zahlen bis 199)",
        "french": "et (pour les nombres jusqu'à 199)"
      },
      {
        "malagasy": "sy",
        "english": "and (for numbers after 199)",
        "german": "und (für Zahlen nach 199)",
        "french": "et (pour les nombres après 199)"
      },
      {
        "malagasy": "Maro",
        "english": "many",
        "german": "viele",
        "french": "beaucoup"
      },
      {
        "malagasy": "Vitsy",
        "english": "few",
        "german": "wenige",
        "french": "peu"
      },
      {
        "malagasy": " rehetra",
        "english": "all / every",
        "german": "alle / jeder",
        "french": "tout / chaque"
      },
      {
        "malagasy": "Sasany",
        "english": "some",
        "german": "einige",
        "french": "quelques"
      },
      {
        "malagasy": "Tsiafa",
        "english": "none / zero",
        "german": "keine / null",
        "french": "aucun / zéro"
      },
      {
        "malagasy": "Voalohany",
        "english": "First",
        "german": "Erste",
        "french": "Premier"
      },
      {
        "malagasy": "Faharoa",
        "english": "Second",
        "german": "Sekunde",
        "french": "Seconde"
      },
      {
        "malagasy": "Fahatelo",
        "english": "Third",
        "german": "Dritte",
        "french": "Troisième"
      },
      {
        "malagasy": "Farany",
        "english": "Last",
        "german": "Letzte",
        "french": "Dernier"
      },
      {
        "malagasy": "Amin'ny",
        "english": "At (time/number)",
        "german": "Um (Zeit/Zahl)",
        "french": "À (heure/nombre)"
      },
      {
        "malagasy": "Firy",
        "english": "How many",
        "german": "Wie viele",
        "french": "Combien"
      },
      {
        "malagasy": "Hoatrinona",
        "english": "How much (price)",
        "german": "Wie viel (Preis)",
        "french": "Combien (prix)"
      }
    ]
  },
  {
    "id": "food",
    "title": "Food & Drinks",
    "emoji": "🍛",
    "category": "vocabulary",
    "description": "Essential food vocabulary for daily meals.",
    "cards": [
      {
        "front": "Food",
        "back": "Sakafo",
        "front_de": "Essen",
        "front_fr": "Nourriture"
      },
      {
        "front": "Rice",
        "back": "Vary",
        "front_de": "Reis",
        "front_fr": "Riz"
      },
      {
        "front": "Side-dishes",
        "back": "Laoka",
        "front_de": "Beilagen",
        "front_fr": "Accompagnements"
      },
      {
        "front": "Bread",
        "back": "Mofo",
        "front_de": "Brot",
        "front_fr": "Pain"
      },
      {
        "front": "Meat",
        "back": "Hena",
        "front_de": "Fleisch",
        "front_fr": "Viande"
      },
      {
        "front": "Pork",
        "back": "Henakisoa",
        "front_de": "Schweinefleisch",
        "front_fr": "Porc"
      },
      {
        "front": "Beef",
        "back": "Henomby",
        "front_de": "Rindfleisch",
        "front_fr": "Bœuf"
      },
      {
        "front": "Chicken",
        "back": "Akoho",
        "front_de": "Hähnchen",
        "front_fr": "Poulet"
      },
      {
        "front": "Fish",
        "back": "Trondro",
        "front_de": "Fisch",
        "front_fr": "Poisson"
      },
      {
        "front": "Eggs",
        "back": "Atody",
        "front_de": "Eier",
        "front_fr": "Œufs"
      },
      {
        "front": "Vegetable",
        "back": "Legioma",
        "front_de": "Gemüse",
        "front_fr": "Légume"
      },
      {
        "front": "Greens",
        "back": "Anana",
        "front_de": "Blattgemüse",
        "front_fr": "Légumes verts"
      },
      {
        "front": "Potatoes",
        "back": "Ovy",
        "front_de": "Kartoffeln",
        "front_fr": "Pommes de terre"
      },
      {
        "front": "Tomato",
        "back": "Voatabia",
        "front_de": "Tomate",
        "front_fr": "Tomate"
      },
      {
        "front": "Fruit",
        "back": "Voankazo",
        "front_de": "Obst",
        "front_fr": "Fruit"
      },
      {
        "front": "Papaya",
        "back": "Papay",
        "front_de": "Papaya",
        "front_fr": "Papaye"
      },
      {
        "front": "Mango",
        "back": "Manga",
        "front_de": "Mango",
        "front_fr": "Mangue"
      },
      {
        "front": "Orange",
        "back": "Voasary",
        "front_de": "Orange",
        "front_fr": "Orange"
      },
      {
        "front": "Water",
        "back": "Rano",
        "front_de": "Wasser",
        "front_fr": "Eau"
      },
      {
        "front": "Coffee",
        "back": "Kafe",
        "front_de": "Kaffee",
        "front_fr": "Café"
      },
      {
        "front": "Tea",
        "back": "Dite",
        "front_de": "Tee",
        "front_fr": "Thé"
      },
      {
        "front": "Milk",
        "back": "Ronono",
        "front_de": "Milch",
        "front_fr": "Lait"
      }
    ],
    "vocab": [
      {
        "malagasy": "Vary",
        "english": "Rice",
        "german": "Reis",
        "french": "Riz"
      },
      {
        "malagasy": "Laoka",
        "english": "Side-dish",
        "german": "Beilage",
        "french": "Accompagnement"
      },
      {
        "malagasy": "Hena",
        "english": "Meat",
        "german": "Fleisch",
        "french": "Viande"
      },
      {
        "malagasy": "Henakisoa",
        "english": "Pork",
        "german": "Schweinefleisch",
        "french": "Porc"
      },
      {
        "malagasy": "Henomby",
        "english": "Beef",
        "german": "Rindfleisch",
        "french": "Boeuf"
      },
      {
        "malagasy": "Akoho",
        "english": "Chicken",
        "german": "Huhn",
        "french": "Poulet"
      },
      {
        "malagasy": "Trondro",
        "english": "Fish",
        "german": "Fisch",
        "french": "Poisson"
      },
      {
        "malagasy": "Atody",
        "english": "Eggs",
        "german": "Eier",
        "french": "Oeufs"
      },
      {
        "malagasy": "Voatabia",
        "english": "Tomato",
        "german": "Tomate",
        "french": "Tomate"
      },
      {
        "malagasy": "Kafe",
        "english": "Coffee",
        "german": "Kaffee",
        "french": "Café"
      },
      {
        "malagasy": "Sakafo",
        "english": "Food",
        "german": "Essen",
        "french": "Nourriture"
      },
      {
        "malagasy": "Mofo",
        "english": "Bread",
        "german": "Brot",
        "french": "Pain"
      },
      {
        "malagasy": "Legioma",
        "english": "Vegetable",
        "german": "Gemüse",
        "french": "Légume"
      },
      {
        "malagasy": "Anana",
        "english": "Greens",
        "german": "Blattgemüse",
        "french": "Légumes verts"
      },
      {
        "malagasy": "Ovy",
        "english": "Potatoes",
        "german": "Kartoffeln",
        "french": "Pommes de terre"
      },
      {
        "malagasy": "Voankazo",
        "english": "Fruit",
        "german": "Obst",
        "french": "Fruit"
      },
      {
        "malagasy": "Papay",
        "english": "Papaya",
        "german": "Papaya",
        "french": "Papaye"
      },
      {
        "malagasy": "Manga",
        "english": "Mango",
        "german": "Mango",
        "french": "Mangue"
      },
      {
        "malagasy": "Voasary",
        "english": "Orange",
        "german": "Orange",
        "french": "Orange"
      },
      {
        "malagasy": "Rano",
        "english": "Water",
        "german": "Wasser",
        "french": "Eau"
      },
      {
        "malagasy": "Dite",
        "english": "Tea",
        "german": "Tee",
        "french": "Thé"
      },
      {
        "malagasy": "Ronono",
        "english": "Milk",
        "german": "Milch",
        "french": "Lait"
      },
      {
        "malagasy": "Menaka",
        "english": "Oil",
        "german": "Öl",
        "french": "Huile"
      },
      {
        "malagasy": "Sira",
        "english": "Salt",
        "german": "Salz",
        "french": "Sel"
      },
      {
        "malagasy": "Sakay",
        "english": "Chili",
        "german": "Chili",
        "french": "Piment"
      },
      {
        "malagasy": "Siramamy",
        "english": "Sugar",
        "german": "Zucker",
        "french": "Sucre"
      },
      {
        "malagasy": "Poavra",
        "english": "Pepper",
        "german": "Pfeffer",
        "french": "Poivre"
      },
      {
        "malagasy": "Karoty",
        "english": "Carrot",
        "german": "Karotte",
        "french": "Carotte"
      },
      {
        "malagasy": "voanjobory",
        "english": "Round beans",
        "german": "Runde Bohnen",
        "french": "Haricots ronds"
      },
      {
        "malagasy": "Tsaramaso",
        "english": "Beans",
        "german": "Bohnen",
        "french": "Haricots"
      },
      {
        "malagasy": "Mananasy",
        "english": "Pineapple",
        "german": "Ananas",
        "french": "Ananas"
      },
      {
        "malagasy": "Jus",
        "english": "Juice",
        "german": "Saft",
        "french": "Jus"
      },
      {
        "malagasy": "Kôka",
        "english": "Coca-cola",
        "german": "Coca-Cola",
        "french": "Coca-Cola"
      },
      {
        "malagasy": "Limonady",
        "english": "Lemonade",
        "german": "Limonade",
        "french": "Limonade"
      },
      {
        "malagasy": "Ranon'ampango",
        "english": "Rice-water",
        "german": "Reiswasser",
        "french": "Eau de riz"
      },
      {
        "malagasy": "Haninkotrana",
        "english": "Snack",
        "german": "Snack",
        "french": "Collation"
      },
      {
        "malagasy": "Mangahazo",
        "english": "Cassava",
        "german": "Maniok",
        "french": "Manioc"
      },
      {
        "malagasy": "Katsaka",
        "english": "Corn",
        "german": "Mais",
        "french": "Maïs"
      },
      {
        "malagasy": "Vomanga",
        "english": "Sweet potato",
        "german": "Süßkartoffel",
        "french": "Patate douce"
      },
      {
        "malagasy": "Episy",
        "english": "Spices",
        "german": "Gewürze",
        "french": "Épices"
      },
      {
        "malagasy": "Mihinana",
        "english": "To eat",
        "german": "Essen",
        "french": "Manger"
      },
      {
        "malagasy": "Misotro",
        "english": "To drink",
        "german": "Trinken",
        "french": "Boire"
      },
      {
        "malagasy": "mankafy",
        "english": "To enjoy (food)",
        "german": "Genießen (Essen)",
        "french": "Apprécier (nourriture)"
      },
      {
        "malagasy": "manamboatra",
        "english": "To prepare (food)",
        "german": "Zubereiten (Essen)",
        "french": "Préparer (nourriture)"
      },
      {
        "malagasy": "mampangatsiaka",
        "english": "To cool",
        "german": "Abkühlen",
        "french": "Refroidir"
      },
      {
        "malagasy": "mangatsiaka",
        "english": "Cold (drink)",
        "german": "Kalt (Getränk)",
        "french": "Froid (boisson)"
      },
      {
        "malagasy": "mafana",
        "english": "Hot (food)",
        "german": "Heiß (Essen)",
        "french": "Chaud (nourriture)"
      },
      {
        "malagasy": "Matsiro",
        "english": "Delicious",
        "german": "Lecker",
        "french": "Délicieux"
      },
      {
        "malagasy": "tsy matsiro",
        "english": "Not delicious",
        "german": "Nicht lecker",
        "french": "Pas délicieux"
      },
      {
        "malagasy": "Voky",
        "english": "Full (ate enough)",
        "german": "Satt",
        "french": "Rassasié"
      },
      {
        "malagasy": "Noana",
        "english": "Hungry",
        "german": "Hungrig",
        "french": "Affamé"
      },
      {
        "malagasy": "Mangetaheta",
        "english": "Thirsty",
        "german": "Durstig",
        "french": "Assoiffé"
      }
    ]
  },
  {
    "id": "days",
    "title": "Days & Time",
    "emoji": "📅",
    "category": "vocabulary",
    "description": "Days of the week and parts of the day.",
    "cards": [
      {
        "front": "Monday",
        "back": "Alatsinainy",
        "front_de": "Montag",
        "front_fr": "Lundi"
      },
      {
        "front": "Tuesday",
        "back": "Talata",
        "front_de": "Dienstag",
        "front_fr": "Mardi"
      },
      {
        "front": "Wednesday",
        "back": "Alarobia",
        "front_de": "Mittwoch",
        "front_fr": "Mercredi"
      },
      {
        "front": "Thursday",
        "back": "Alakamisy",
        "front_de": "Donnerstag",
        "front_fr": "Jeudi"
      },
      {
        "front": "Friday",
        "back": "Zoma",
        "front_de": "Freitag",
        "front_fr": "Vendredi"
      },
      {
        "front": "Saturday",
        "back": "Sabotsy",
        "front_de": "Samstag",
        "front_fr": "Samedi"
      },
      {
        "front": "Sunday",
        "back": "Alahady",
        "front_de": "Sonntag",
        "front_fr": "Dimanche"
      },
      {
        "front": "Yesterday",
        "back": "Omaly",
        "front_de": "Gestern",
        "front_fr": "Hier"
      },
      {
        "front": "Today",
        "back": "Androany",
        "front_de": "Heute",
        "front_fr": "Aujourd'hui"
      },
      {
        "front": "Tomorrow",
        "back": "Rahampitso",
        "front_de": "morgen",
        "front_fr": "Demain"
      },
      {
        "front": "Morning",
        "back": "Maraina",
        "front_de": "Morgen",
        "front_fr": "Matin"
      },
      {
        "front": "Noon",
        "back": "Atoandro",
        "front_de": "Mittag",
        "front_fr": "Midi"
      },
      {
        "front": "Afternoon",
        "back": "Tolakandro",
        "front_de": "Nachmittag",
        "front_fr": "Après-midi"
      },
      {
        "front": "Evening",
        "back": "Hariva",
        "front_de": "Abend",
        "front_fr": "Soir"
      },
      {
        "front": "Night",
        "back": "Alina",
        "front_de": "Nacht",
        "front_fr": "Nuit"
      }
    ],
    "vocab": [
      {
        "malagasy": "Alatsinainy",
        "english": "Monday",
        "german": "Montag",
        "french": "Lundi"
      },
      {
        "malagasy": "Talata",
        "english": "Tuesday",
        "german": "Dienstag",
        "french": "Mardi"
      },
      {
        "malagasy": "Alarobia",
        "english": "Wednesday",
        "german": "Mittwoch",
        "french": "Mercredi"
      },
      {
        "malagasy": "Alakamisy",
        "english": "Thursday",
        "german": "Donnerstag",
        "french": "Jeudi"
      },
      {
        "malagasy": "Zoma",
        "english": "Friday",
        "german": "Freitag",
        "french": "Vendredi"
      },
      {
        "malagasy": "Sabotsy",
        "english": "Saturday",
        "german": "Samstag",
        "french": "Samedi"
      },
      {
        "malagasy": "Alahady",
        "english": "Sunday",
        "german": "Sonntag",
        "french": "Dimanche"
      },
      {
        "malagasy": "Omaly",
        "english": "Yesterday",
        "german": "Gestern",
        "french": "Hier"
      },
      {
        "malagasy": "Androany",
        "english": "Today",
        "german": "Heute",
        "french": "Aujourd'hui"
      },
      {
        "malagasy": "Rahampitso",
        "english": "Tomorrow",
        "german": "Morgen",
        "french": "Demain"
      },
      {
        "malagasy": "Maraina",
        "english": "Morning",
        "german": "Morgen",
        "french": "Matin"
      },
      {
        "malagasy": "Atoandro",
        "english": "Noon",
        "german": "Mittag",
        "french": "Midi"
      },
      {
        "malagasy": "Tolakandro",
        "english": "Afternoon",
        "german": "Nachmittag",
        "french": "Après-midi"
      },
      {
        "malagasy": "Hariva",
        "english": "Evening",
        "german": "Abend",
        "french": "Soir"
      },
      {
        "malagasy": "Alina",
        "english": "Night",
        "german": "Nacht",
        "french": "Nuit"
      },
      {
        "malagasy": "Andro",
        "english": "Day",
        "german": "Tag",
        "french": "Jour"
      },
      {
        "malagasy": "Herinandro",
        "english": "Week",
        "german": "Woche",
        "french": "Semaine"
      },
      {
        "malagasy": "Volana",
        "english": "Month",
        "german": "Monat",
        "french": "Mois"
      },
      {
        "malagasy": "Taona",
        "english": "Year",
        "german": "Jahr",
        "french": "Année"
      },
      {
        "malagasy": "Amin'ny",
        "english": "At (time)",
        "german": "Um (Uhrzeit)",
        "french": "À (heure)"
      },
      {
        "malagasy": "maraina be",
        "english": "Early morning",
        "german": "Früher Morgen",
        "french": "Tôt le matin"
      },
      {
        "malagasy": "tapitrisanandro",
        "english": "Midnight",
        "german": "Mitternacht",
        "french": "Minuit"
      },
      {
        "malagasy": "Afaka",
        "english": "Later / After",
        "german": "Später / Nach",
        "french": "Plus tard / Après"
      },
      {
        "malagasy": "Taloha",
        "english": "Before / Ago",
        "german": "Vor / Vorher",
        "french": "Avant / Il y a"
      },
      {
        "malagasy": "Fotoana",
        "english": "Time / Moment",
        "german": "Zeit / Moment",
        "french": "Temps / Moment"
      },
      {
        "malagasy": "Famindrana",
        "english": "Appointment",
        "german": "Termin",
        "french": "Rendez-vous"
      },
      {
        "malagasy": "Fotoam-pihinanana",
        "english": "Mealtime",
        "german": "Essenszeit",
        "french": "Heure du repas"
      },
      {
        "malagasy": "Fotoam-piadiana",
        "english": "Work time",
        "german": "Arbeitszeit",
        "french": "Heure de travail"
      },
      {
        "malagasy": "Fialan-tsasatra",
        "english": "Vacation / Holiday",
        "german": "Urlaub / Feiertag",
        "french": "Vacances / Jour férié"
      },
      {
        "malagasy": "Andro fety",
        "english": "Holiday / Festival day",
        "german": "Feiertag / Festtag",
        "french": "Jour férié / Fête"
      },
      {
        "malagasy": "Trondro",
        "english": "Fish",
        "german": "Fisch",
        "french": "Poisson"
      }
    ]
  },
  {
    "id": "feelings",
    "title": "Feelings & Emotions",
    "emoji": "😊",
    "category": "vocabulary",
    "description": "Expressing emotions and reactions.",
    "cards": [
      {
        "front": "That makes me happy.",
        "back": "Mahafaly ahy izany",
        "front_de": "Das macht mich glücklich.",
        "front_fr": "Ça me rend heureux."
      },
      {
        "front": "That's sad.",
        "back": "Mampalahelo izany",
        "front_de": "Das ist traurig.",
        "front_fr": "C'est triste."
      },
      {
        "front": "That's surprising.",
        "back": "Mahagaga izany",
        "front_de": "Das ist überraschend.",
        "front_fr": "C'est surprenant."
      },
      {
        "front": "That's shocking!",
        "back": "Mahasosotra izany",
        "front_de": "Das ist schockierend!",
        "front_fr": "C'est choquant!"
      },
      {
        "front": "It's tiring.",
        "back": "Mandreraka izany",
        "front_de": "Es ist ermüdend.",
        "front_fr": "C'est fatigant."
      },
      {
        "front": "That's frightening!",
        "back": "Mampatahotra izany",
        "front_de": "Das ist erschreckend!",
        "front_fr": "C'est effrayant!"
      },
      {
        "front": "That's annoying!",
        "back": "Mahakamo izany",
        "front_de": "Das ist ärgerlich!",
        "front_fr": "C'est énervant!"
      },
      {
        "front": "That's doubtful.",
        "back": "Mampiahiahy izany",
        "front_de": "Das ist zweifelhaft.",
        "front_fr": "C'est douteux."
      },
      {
        "front": "Amusing! Hilarious!",
        "back": "Mampihomehy izany",
        "front_de": "Lustig! Heiter!",
        "front_fr": "Amusant! Hilarant!"
      },
      {
        "front": "He/She is happy.",
        "back": "Faly izy.",
        "front_de": "Er/Sie ist glücklich.",
        "front_fr": "Il/Elle est heureux."
      },
      {
        "front": "I am sad.",
        "back": "Malahelo aho.",
        "front_de": "Ich bin traurig.",
        "front_fr": "Je suis triste."
      },
      {
        "front": "They are afraid.",
        "back": "Matahotra izireo.",
        "front_de": "Sie haben Angst.",
        "front_fr": "Ils ont peur."
      }
    ],
    "vocab": [
      {
        "malagasy": "Faly",
        "english": "happy",
        "german": "glücklich",
        "french": "heureux"
      },
      {
        "malagasy": "Malahelo",
        "english": "sad",
        "german": "traurig",
        "french": "triste"
      },
      {
        "malagasy": "Gaga",
        "english": "surprised",
        "german": "überrascht",
        "french": "surpris"
      },
      {
        "malagasy": "Sosotra",
        "english": "shocked / angry",
        "german": "schockiert / wütend",
        "french": "choqué / en colère"
      },
      {
        "malagasy": "Matahotra",
        "english": "afraid",
        "german": "ängstlich",
        "french": "effrayé"
      },
      {
        "malagasy": "Kamo",
        "english": "lazy",
        "german": "faul",
        "french": "paresseux"
      },
      {
        "malagasy": "Matoky",
        "english": "to trust",
        "german": "vertrauen",
        "french": "faire confiance"
      },
      {
        "malagasy": "Halako",
        "english": "I hate it",
        "german": "Ich hasse es",
        "french": "Je déteste ça"
      },
      {
        "malagasy": "Reraka",
        "english": "tired",
        "german": "müde",
        "french": "fatigué"
      },
      {
        "malagasy": "Mafana",
        "english": "hot (person)",
        "german": "heiß (Person)",
        "french": "chaud (personne)"
      },
      {
        "malagasy": "Mangatsiaka",
        "english": "cold (person)",
        "german": "kalt (Person)",
        "french": "froid (personne)"
      },
      {
        "malagasy": "Tezitra",
        "english": "angry",
        "german": "wütend",
        "french": "en colère"
      },
      {
        "malagasy": "Manahy",
        "english": "worried / anxious",
        "german": "besorgt / ängstlich",
        "french": "inquiet / anxieux"
      },
      {
        "malagasy": "Maniry",
        "english": "to desire / want",
        "german": "wünschen / wollen",
        "french": "désirer / vouloir"
      },
      {
        "malagasy": "Matahotra",
        "english": "scared",
        "german": "erschrocken",
        "french": "effrayé"
      },
      {
        "malagasy": "Mahatsikaiky",
        "english": "funny / amusing",
        "german": "lustig / amüsant",
        "french": "drôle / amusant"
      },
      {
        "malagasy": "Mampalahelo",
        "english": "regrettable",
        "german": "bedauerlich",
        "french": "regrettable"
      },
      {
        "malagasy": "Mahagaga",
        "english": "amazing",
        "german": "erstaunlich",
        "french": "incroyable"
      },
      {
        "malagasy": "Mahafaly",
        "english": "pleasant",
        "german": "angenehm",
        "french": "agréable"
      },
      {
        "malagasy": "Mampiseho",
        "english": "to show / express",
        "german": "zeigen / ausdrücken",
        "french": "montrer / exprimer"
      },
      {
        "malagasy": "Manome",
        "english": "to give",
        "german": "geben",
        "french": "donner"
      },
      {
        "malagasy": "Mampianatra",
        "english": "to teach",
        "german": "lehren",
        "french": "enseigner"
      },
      {
        "malagasy": "Mianatra",
        "english": "to learn",
        "german": "lernen",
        "french": "apprendre"
      },
      {
        "malagasy": "Manome toky",
        "english": "to reassure",
        "german": "beruhigen",
        "french": "rassurer"
      },
      {
        "malagasy": "Mampahatsiahy",
        "english": "to remind",
        "german": "erinnern",
        "french": "rappeler"
      },
      {
        "malagasy": "Manadino",
        "english": "to forget",
        "german": "vergessen",
        "french": "oublier"
      },
      {
        "malagasy": "Mahatsiaro",
        "english": "to remember",
        "german": "sich erinnern",
        "french": "se souvenir"
      },
      {
        "malagasy": "Mankasitraka",
        "english": "to appreciate",
        "german": "schätzen",
        "french": "apprécier"
      },
      {
        "malagasy": "Maneho hevitra",
        "english": "to give an opinion",
        "german": "eine Meinung abgeben",
        "french": "donner un avis"
      },
      {
        "malagasy": "Manaiky",
        "english": "to agree",
        "german": "zustimmen",
        "french": "être d'accord"
      },
      {
        "malagasy": "Manda",
        "english": "to refuse",
        "german": "ablehnen",
        "french": "refuser"
      },
      {
        "malagasy": "Mahay",
        "english": "to know how / can",
        "german": "wissen wie / können",
        "french": "savoir / pouvoir"
      },
      {
        "malagasy": "Tsy mahay",
        "english": "to not know / cannot",
        "german": "nicht wissen / nicht können",
        "french": "ne pas savoir / ne pas pouvoir"
      },
      {
        "malagasy": "Mahazo",
        "english": "to receive / get",
        "german": "erhalten / bekommen",
        "french": "recevoir / obtenir"
      },
      {
        "malagasy": "Mandany",
        "english": "to spend (time)",
        "german": "Zeit verbringen",
        "french": "passer (du temps)"
      },
      {
        "malagasy": "Mijery",
        "english": "to watch / look at",
        "german": "anschauen / ansehen",
        "french": "regarder"
      }
    ]
  },
  {
    "id": "colors",
    "title": "Colors",
    "emoji": "🎨",
    "category": "vocabulary",
    "description": "Color vocabulary with shades.",
    "cards": [
      {
        "front": "Colors",
        "back": "Loko",
        "front_de": "Farben",
        "front_fr": "Couleurs"
      },
      {
        "front": "To be colored",
        "back": "Miloko",
        "front_de": "Farbig sein",
        "front_fr": "Être coloré"
      },
      {
        "front": "Blue",
        "back": "Manga",
        "front_de": "Blau",
        "front_fr": "Bleu"
      },
      {
        "front": "Bluish",
        "back": "Mangamanga",
        "front_de": "Bläulich",
        "front_fr": "Bleuté"
      },
      {
        "front": "Dark blue",
        "back": "Manga antitra",
        "front_de": "Dunkelblau",
        "front_fr": "Bleu foncé"
      },
      {
        "front": "Light blue",
        "back": "Manga tanora",
        "front_de": "Hellblau",
        "front_fr": "Bleu clair"
      },
      {
        "front": "Red",
        "back": "Mena",
        "front_de": "Rot",
        "front_fr": "Rouge"
      },
      {
        "front": "White",
        "back": "Fotsy",
        "front_de": "Weiß",
        "front_fr": "Blanc"
      },
      {
        "front": "Black",
        "back": "Mainty",
        "front_de": "Schwarz",
        "front_fr": "Noir"
      },
      {
        "front": "Green",
        "back": "Maintso",
        "front_de": "Grün",
        "front_fr": "Vert"
      },
      {
        "front": "Pink",
        "back": "Mavokely",
        "front_de": "Rosa",
        "front_fr": "Rose"
      },
      {
        "front": "Yellow",
        "back": "Mavo",
        "front_de": "Gelb",
        "front_fr": "Jaune"
      },
      {
        "front": "Orange",
        "back": "Volom-boasary",
        "front_de": "Orange",
        "front_fr": "Orange"
      },
      {
        "front": "Brown",
        "back": "Volon-tsokola",
        "front_de": "Braun",
        "front_fr": "Marron"
      },
      {
        "front": "Grey",
        "back": "Volon-davenona",
        "front_de": "Grau",
        "front_fr": "Gris"
      }
    ],
    "vocab": [
      {
        "malagasy": "Manga",
        "english": "Blue",
        "german": "Blau",
        "french": "Bleu"
      },
      {
        "malagasy": "Mena",
        "english": "Red",
        "german": "Rot",
        "french": "Rouge"
      },
      {
        "malagasy": "Fotsy",
        "english": "White",
        "german": "Weiß",
        "french": "Blanc"
      },
      {
        "malagasy": "Mainty",
        "english": "Black",
        "german": "Schwarz",
        "french": "Noir"
      },
      {
        "malagasy": "Maintso",
        "english": "Green",
        "german": "Grün",
        "french": "Vert"
      },
      {
        "malagasy": "Mavo",
        "english": "Yellow",
        "german": "Gelb",
        "french": "Jaune"
      },
      {
        "malagasy": "Mavokely",
        "english": "Pink",
        "german": "Rosa",
        "french": "Rose"
      },
      {
        "malagasy": "Loko",
        "english": "Colors",
        "german": "Farben",
        "french": "Couleurs"
      },
      {
        "malagasy": "Miloko",
        "english": "To be colored",
        "german": "Gefärbt sein",
        "french": "Être coloré"
      },
      {
        "malagasy": "Mangamanga",
        "english": "Bluish",
        "german": "Bläulich",
        "french": "Bleuâtre"
      },
      {
        "malagasy": "Manga antitra",
        "english": "Dark blue",
        "german": "Dunkelblau",
        "french": "Bleu foncé"
      },
      {
        "malagasy": "Manga tanora",
        "english": "Light blue",
        "german": "Hellblau",
        "french": "Bleu clair"
      },
      {
        "malagasy": "Volom-boasary",
        "english": "Orange",
        "german": "Orange",
        "french": "Orange"
      },
      {
        "malagasy": "Volon-tsokola",
        "english": "Brown",
        "german": "Braun",
        "french": "Marron"
      },
      {
        "malagasy": "Volon-davenona",
        "english": "Grey",
        "german": "Grau",
        "french": "Gris"
      },
      {
        "malagasy": "Mena-mena",
        "english": "Reddish",
        "german": "Rötlich",
        "french": "Rougeâtre"
      },
      {
        "malagasy": "Fotsy fotsy",
        "english": "Very white",
        "german": "Sehr weiß",
        "french": "Très blanc"
      },
      {
        "malagasy": "Mainty mainty",
        "english": "Very black / pitch black",
        "german": "Sehr schwarz / Pechschwarz",
        "french": "Très noir"
      },
      {
        "malagasy": "Mavo-mavo",
        "english": "Yellowish",
        "german": "Gelblich",
        "french": "Jaunâtre"
      },
      {
        "malagasy": "Maintso mainty",
        "english": "Dark green",
        "german": "Dunkelgrün",
        "french": "Vert foncé"
      },
      {
        "malagasy": "Maintso tanora",
        "english": "Light green",
        "german": "Hellgrün",
        "french": "Vert clair"
      },
      {
        "malagasy": "Loko anaty",
        "english": "Color inside",
        "german": "Farbe innen",
        "french": "Couleur intérieure"
      },
      {
        "malagasy": "Loko ivelany",
        "english": "Color outside",
        "german": "Farbe außen",
        "french": "Couleur extérieure"
      }
    ]
  },
  {
    "id": "furniture",
    "title": "House & Furniture",
    "emoji": "🏠",
    "category": "vocabulary",
    "description": "Items found in a typical home.",
    "cards": [
      {
        "front": "Chair",
        "back": "Seza",
        "front_de": "Stuhl",
        "front_fr": "Chaise"
      },
      {
        "front": "Table",
        "back": "Latabatra",
        "front_de": "Tisch",
        "front_fr": "Table"
      },
      {
        "front": "Bed frame",
        "back": "Farafara",
        "front_de": "Bettgestell",
        "front_fr": "Cadre de lit"
      },
      {
        "front": "Mattress",
        "back": "Kidoro",
        "front_de": "Matratze",
        "front_fr": "Matelas"
      },
      {
        "front": "Pillow",
        "back": "Ondana",
        "front_de": "Kissen",
        "front_fr": "Oreiller"
      },
      {
        "front": "Blankets",
        "back": "Bodofotsy",
        "front_de": "Decken",
        "front_fr": "Couvertures"
      },
      {
        "front": "Towel",
        "back": "Servieta",
        "front_de": "Handtuch",
        "front_fr": "Serviette"
      },
      {
        "front": "Light",
        "back": "Jiro",
        "front_de": "Licht",
        "front_fr": "Lumière"
      },
      {
        "front": "Door",
        "back": "Varavarana",
        "front_de": "Tür",
        "front_fr": "Porte"
      },
      {
        "front": "Window",
        "back": "Varavarankely",
        "front_de": "Fenster",
        "front_fr": "Fenêtre"
      },
      {
        "front": "Mosquito net",
        "back": "Lay",
        "front_de": "Moskitonetz",
        "front_fr": "Moustiquaire"
      },
      {
        "front": "Plastic mug",
        "back": "Zinga",
        "front_de": "Plastikbecher",
        "front_fr": "Gobelet en plastique"
      },
      {
        "front": "Bucket",
        "back": "Sio",
        "front_de": "Eimer",
        "front_fr": "Seau"
      }
    ],
    "vocab": [
      {
        "malagasy": "Seza",
        "english": "Chair",
        "german": "Stuhl",
        "french": "Chaise"
      },
      {
        "malagasy": "Latabatra",
        "english": "Table",
        "german": "Tisch",
        "french": "Table"
      },
      {
        "malagasy": "Farafara",
        "english": "Bed",
        "german": "Bett",
        "french": "Lit"
      },
      {
        "malagasy": "Kidoro",
        "english": "Mattress",
        "german": "Matratze",
        "french": "Matelas"
      },
      {
        "malagasy": "Lay",
        "english": "Mosquito net",
        "german": "Moskitonetz",
        "french": "Moustiquaire"
      },
      {
        "malagasy": "Varavarankely",
        "english": "Window",
        "german": "Fenster",
        "french": "Fenêtre"
      },
      {
        "malagasy": "Varavarana",
        "english": "Door",
        "german": "Tür",
        "french": "Porte"
      },
      {
        "malagasy": "Ondana",
        "english": "Pillow",
        "german": "Kissen",
        "french": "Oreiller"
      },
      {
        "malagasy": "Bodofotsy",
        "english": "Blankets",
        "german": "Decken",
        "french": "Couvertures"
      },
      {
        "malagasy": "Servieta",
        "english": "Towel",
        "german": "Handtuch",
        "french": "Serviette"
      },
      {
        "malagasy": "Jiro",
        "english": "Light",
        "german": "Licht",
        "french": "Lumière"
      },
      {
        "malagasy": "Zinga",
        "english": "Plastic mug",
        "german": "Plastikbecher",
        "french": "Gobelet en plastique"
      },
      {
        "malagasy": "Sio",
        "english": "Bucket",
        "german": "Eimer",
        "french": "Seau"
      },
      {
        "malagasy": "Trano",
        "english": "House",
        "german": "Haus",
        "french": "Maison"
      },
      {
        "malagasy": "Trano fandraisam-bahiny",
        "english": "Guest house / Hotel",
        "german": "Gästehaus / Hotel",
        "french": "Maison d'hôtes / Hôtel"
      },
      {
        "malagasy": "Trano fidiovana",
        "english": "Bathroom",
        "german": "Badezimmer",
        "french": "Salle de bain"
      },
      {
        "malagasy": "Trano fihinanana",
        "english": "Dining room",
        "german": "Esszimmer",
        "french": "Salle à manger"
      },
      {
        "malagasy": "Trano fandraisana",
        "english": "Living room",
        "german": "Wohnzimmer",
        "french": "Salon"
      },
      {
        "malagasy": "Trano fambolena",
        "english": "Farmhouse",
        "german": "Bauernhaus",
        "french": "Ferme"
      },
      {
        "malagasy": "Tohatra",
        "english": "Stairs",
        "german": "Treppe",
        "french": "Escaliers"
      },
      {
        "malagasy": "Rindrina",
        "english": "Wall",
        "german": "Wand",
        "french": "Mur"
      },
      {
        "malagasy": "Tafotrano",
        "english": "Roof",
        "german": "Dach",
        "french": "Toit"
      },
      {
        "malagasy": "Tany",
        "english": "Floor / Ground",
        "german": "Boden / Erde",
        "french": "Sol / Terre"
      },
      {
        "malagasy": "Kodiarana",
        "english": "Cement floor",
        "german": "Zementboden",
        "french": "Sol en ciment"
      },
      {
        "malagasy": "Kitapo",
        "english": "Bag / Suitcase",
        "german": "Tasche / Koffer",
        "french": "Sac / Valise"
      },
      {
        "malagasy": "Sakafo",
        "english": "Food",
        "german": "Essen",
        "french": "Nourriture"
      },
      {
        "malagasy": "Fanaka",
        "english": "Furniture / Equipment",
        "german": "Möbel / Ausrüstung",
        "french": "Meubles / Équipement"
      },
      {
        "malagasy": "Fitaovana",
        "english": "Tools / Appliances",
        "german": "Werkzeuge / Geräte",
        "french": "Outils / Appareils"
      },
      {
        "malagasy": "Jiro vony",
        "english": "Flashlight",
        "german": "Taschenlampe",
        "french": "Lampe torche"
      },
      {
        "malagasy": "Famantaranandro",
        "english": "Clock / Watch",
        "german": "Uhr / Armbanduhr",
        "french": "Horloge / Montre"
      },
      {
        "malagasy": "Radio",
        "english": "Radio",
        "german": "Radio",
        "french": "Radio"
      },
      {
        "malagasy": "Serasera",
        "english": "Fan",
        "german": "Ventilator",
        "french": "Ventilateur"
      },
      {
        "malagasy": "Tapaka",
        "english": "Cut / Broken",
        "german": "Geschnitten / Kaputt",
        "french": "Coupé / Cassé"
      },
      {
        "malagasy": "Madio",
        "english": "Clean",
        "german": "Sauber",
        "french": "Propre"
      },
      {
        "malagasy": "Maloto",
        "english": "Dirty",
        "german": "Schmutzig",
        "french": "Sale"
      },
      {
        "malagasy": "Mangatsiaka (trano)",
        "english": "Cool (house)",
        "german": "Kühl (Haus)",
        "french": "Frais (maison)"
      },
      {
        "malagasy": "Mafana (trano)",
        "english": "Warm (house)",
        "german": "Warm (Haus)",
        "french": "Chaud (maison)"
      }
    ]
  },
  {
    "id": "verbs",
    "title": "Verbs & Conjugation",
    "emoji": "⚡",
    "category": "grammar",
    "description": "Master verb tenses and conjugation patterns in Malagasy.",
    "cards": [
      {
        "front": "Present tense: mi- prefix. Example: mihinana (to eat)",
        "back": "Mihinana = eat (present)",
        "front_de": "Präsens: mi- Präfix. Beispiel: mihinana (essen)",
        "front_fr": "Présent: préfixe mi-. Exemple: mihinana (manger)"
      },
      {
        "front": "Future tense: hi- prefix. Example: hihinana (will eat)",
        "back": "Hihinana = will eat",
        "front_de": "Zukunft: hi- Präfix. Beispiel: hihinana (wird essen)",
        "front_fr": "Futur: préfixe hi-. Exemple: hihinana (mangera)"
      },
      {
        "front": "Past tense: ni- prefix. Example: nihinana (ate)",
        "back": "Nihinana = ate",
        "front_de": "Vergangenheit: ni- Präfix. Beispiel: nihinana (aß)",
        "front_fr": "Passé: préfixe ni-. Exemple: nihinana (a mangé)"
      },
      {
        "front": "Passive voice: voa- prefix. Example: voafetra (to be limited)",
        "back": "Voafetra = to be limited",
        "front_de": "Passiv: voa- Präfix. Beispiel: voafetra (beschränkt werden)",
        "front_fr": "Voix passive: préfixe voa-. Exemple: voafetra (être limité)"
      },
      {
        "front": "Causative: mamp- prefix. Example: mampihatra (to enforce)",
        "back": "Mampihatra = to enforce",
        "front_de": "Kausativ: mamp- Präfix. Beispiel: mampihatra (durchsetzen)",
        "front_fr": "Causatif: préfixe mamp-. Exemple: mampihatra (appliquer)"
      },
      {
        "front": "Reciprocal: mi- ... -ana suffix. Example: mifankahalana (to hate each other)",
        "back": "Mifankahalana = to hate each other",
        "front_de": "Reziprok: mi- ... -ana Suffix. Beispiel: mifankahalana (sich hassen)",
        "front_fr": "Réciproque: suffixe mi- ... -ana. Exemple: mifankahalana (se haïr)"
      },
      {
        "front": "mankafy = to enjoy / like",
        "back": "Present: mankafy | Future: hankafy | Past: nankafy",
        "front_de": "mankafy = genießen / mögen",
        "front_fr": "mankafy = apprécier / aimer"
      },
      {
        "front": "mianatra = to learn",
        "back": "Present: mianatra | Future: hianatra | Past: nianatra",
        "front_de": "mianatra = lernen",
        "front_fr": "mianatra = apprendre"
      },
      {
        "front": "mipetraka = to live / sit",
        "back": "Present: mipetraka | Future: hipetraka | Past: nipetraka",
        "front_de": "mipetraka = leben / sitzen",
        "front_fr": "mipetraka = vivre / s'asseoir"
      },
      {
        "front": "mijery = to look at / watch",
        "back": "Present: mijery | Future: hijery | Past: nijery",
        "front_de": "mijery = ansehen / beobachten",
        "front_fr": "mijery = regarder"
      },
      {
        "front": "miteny = to speak",
        "back": "Present: miteny | Future: hiteny | Past: niteny",
        "front_de": "miteny = sprechen",
        "front_fr": "miteny = parler"
      },
      {
        "front": "manao = to do / make",
        "back": "Present: manao | Future: hanao | Past: nanao",
        "front_de": "manao = tun / machen",
        "front_fr": "manao = faire"
      },
      {
        "front": "mividy = to buy",
        "back": "Present: mividy | Future: hividy | Past: nividy",
        "front_de": "mividy = kaufen",
        "front_fr": "mividy = acheter"
      },
      {
        "front": "mamely = to hit",
        "back": "Present: mamely | Future: hamely | Past: namely",
        "front_de": "mamely = schlagen",
        "front_fr": "mamely = frapper"
      },
      {
        "front": "mandeha = to go / walk",
        "back": "Present: mandeha | Future: handeha | Past: nandeha",
        "front_de": "mandeha = gehen / laufen",
        "front_fr": "mandeha = aller / marcher"
      },
      {
        "front": "mitady = to search / look for",
        "back": "Present: mitady | Future: hitady | Past: nitady",
        "front_de": "mitady = suchen",
        "front_fr": "mitady = chercher"
      },
      {
        "front": "manome = to give",
        "back": "Present: manome | Future: hanome | Past: nanome",
        "front_de": "manome = geben",
        "front_fr": "manome = donner"
      },
      {
        "front": "manao ahoana = to do how (idiom for greeting)",
        "back": "Manao ahoana? = How are you?",
        "front_de": "manao ahoana = wie machen (Redewendung zur Begrüßung)",
        "front_fr": "manao ahoana = comment faire (idiome de salutation)"
      },
      {
        "front": "mampiasa = to use",
        "back": "Present: mampiasa | Future: hampiasa | Past: nampiasa",
        "front_de": "mampiasa = benutzen",
        "front_fr": "mampiasa = utiliser"
      },
      {
        "front": "mamorona = to create",
        "back": "Present: mamorona | Future: hamorona | Past: namorona",
        "front_de": "mamorona = erschaffen",
        "front_fr": "mamorona = créer"
      }
    ],
    "vocab": [
      {
        "malagasy": "mihinana",
        "english": "to eat (present)",
        "german": "essen (Gegenwart)",
        "french": "manger (présent)"
      },
      {
        "malagasy": "hihinana",
        "english": "will eat (future)",
        "german": "wird essen (Zukunft)",
        "french": "mangera (futur)"
      },
      {
        "malagasy": "nihinana",
        "english": "ate (past)",
        "german": "aß (Vergangenheit)",
        "french": "a mangé (passé)"
      },
      {
        "malagasy": "misotro",
        "english": "to drink",
        "german": "trinken",
        "french": "boire"
      },
      {
        "malagasy": "mandeha",
        "english": "to go",
        "german": "gehen",
        "french": "aller"
      },
      {
        "malagasy": "mitady",
        "english": "to search",
        "german": "suchen",
        "french": "chercher"
      },
      {
        "malagasy": "manome",
        "english": "to give",
        "german": "geben",
        "french": "donner"
      },
      {
        "malagasy": "mampiasa",
        "english": "to use",
        "german": "benutzen",
        "french": "utiliser"
      },
      {
        "malagasy": "mijery",
        "english": "to look at",
        "german": "anschauen",
        "french": "regarder"
      },
      {
        "malagasy": "miteny",
        "english": "to speak",
        "german": "sprechen",
        "french": "parler"
      },
      {
        "malagasy": "manao",
        "english": "to do",
        "german": "tun",
        "french": "faire"
      },
      {
        "malagasy": "mividy",
        "english": "to buy",
        "german": "kaufen",
        "french": "acheter"
      },
      {
        "malagasy": "mamely",
        "english": "to hit",
        "german": "schlagen",
        "french": "frapper"
      },
      {
        "malagasy": "mampihatra",
        "english": "to enforce",
        "german": "durchsetzen",
        "french": "appliquer"
      },
      {
        "malagasy": "voafetra",
        "english": "to be limited",
        "german": "begrenzt sein",
        "french": "être limité"
      },
      {
        "malagasy": "mifankahalana",
        "english": "to hate each other",
        "german": "sich hassen",
        "french": "se détester"
      },
      {
        "malagasy": "mankafy",
        "english": "to enjoy",
        "german": "genießen",
        "french": "apprécier"
      },
      {
        "malagasy": "mipetraka",
        "english": "to live",
        "german": "leben",
        "french": "vivre"
      },
      {
        "malagasy": "mianatra",
        "english": "to learn",
        "german": "lernen",
        "french": "apprendre"
      },
      {
        "malagasy": "mamorona",
        "english": "to create",
        "german": "erschaffen",
        "french": "créer"
      },
      {
        "malagasy": "mitady",
        "english": "to search",
        "german": "suchen",
        "french": "chercher"
      },
      {
        "malagasy": "mividy",
        "english": "to buy",
        "german": "kaufen",
        "french": "acheter"
      },
      {
        "malagasy": "manome",
        "english": "to give",
        "german": "geben",
        "french": "donner"
      },
      {
        "malagasy": "manao",
        "english": "to do",
        "german": "tun",
        "french": "faire"
      },
      {
        "malagasy": "mijery",
        "english": "to look at",
        "german": "anschauen",
        "french": "regarder"
      }
    ]
  },
  {
    "id": "pronouns",
    "title": "Pronouns & Possession",
    "emoji": "👤",
    "category": "grammar",
    "description": "Personal pronouns, demonstratives, and possession patterns.",
    "cards": [
      {
        "front": "Aho = I / I am",
        "back": "First person singular",
        "front_de": "Aho = ich / ich bin",
        "front_fr": "Aho = je / je suis"
      },
      {
        "front": "Ianao = You / You are",
        "back": "Second person singular",
        "front_de": "Ianao = du / du bist",
        "front_fr": "Ianao = tu / tu es"
      },
      {
        "front": "Izy = He/She / He is/She is",
        "back": "Third person singular",
        "front_de": "Izy = er/sie / er ist/sie ist",
        "front_fr": "Izy = il/elle / il est/elle est"
      },
      {
        "front": "Isika = We (inclusive) — includes the person spoken to",
        "back": "First person plural inclusive",
        "front_de": "Isika = wir (inklusiv) — schließt die angesprochene Person ein",
        "front_fr": "Isika = nous (inclusif) — inclut la personne à qui l'on parle"
      },
      {
        "front": "Izahay = We (exclusive) — excludes the person spoken to",
        "back": "First person plural exclusive",
        "front_de": "Izahay = wir (exklusiv) — schließt die angesprochene Person aus",
        "front_fr": "Izahay = nous (exclusif) — exclut la personne à qui l'on parle"
      },
      {
        "front": "Ianareo = You (plural)",
        "back": "Second person plural",
        "front_de": "Ianareo = ihr (Plural)",
        "front_fr": "Ianareo = vous (pluriel)"
      },
      {
        "front": "Izireo = They",
        "back": "Third person plural",
        "front_de": "Izireo = sie",
        "front_fr": "Izireo = ils/elles"
      },
      {
        "front": "Ity = This (near speaker)",
        "back": "Demonstrative: close to speaker",
        "front_de": "Ity = dies (nah beim Sprecher)",
        "front_fr": "Ity = ceci (près du locuteur)"
      },
      {
        "front": "Iry = That (far from speaker)",
        "back": "Demonstrative: far from speaker",
        "front_de": "Iry = das (fern vom Sprecher)",
        "front_fr": "Iry = cela (loin du locuteur)"
      },
      {
        "front": "Ireo = These / Those (plural)",
        "back": "Plural demonstrative",
        "front_de": "Ireo = diese / jene (Plural)",
        "front_fr": "Ireo = ceux-ci / ceux-là (pluriel)"
      },
      {
        "front": "Possession: ny + noun. Example: ny boky = my book",
        "back": "Possession uses 'ny' before the noun",
        "front_de": "Besitz: ny + Nomen. Beispiel: ny boky = mein Buch",
        "front_fr": "Possession: ny + nom. Exemple: ny boky = mon livre"
      },
      {
        "front": "Ankoatra = besides / except. Used for exclusion.",
        "back": "Exclusion particle",
        "front_de": "Ankoatra = außerdem / außer. Wird für Ausschluss verwendet.",
        "front_fr": "Ankoatra = à part / sauf. Utilisé pour l'exclusion."
      },
      {
        "front": "Samy = each / every. Example: samy olona = every person",
        "back": "Distributive pronoun",
        "front_de": "Samy = jeder / jede. Beispiel: samy olona = jede Person",
        "front_fr": "Samy = chaque / tout. Exemple: samy olona = chaque personne"
      },
      {
        "front": "Tsy misy = there is not / none",
        "back": "Negative existential",
        "front_de": "Tsy misy = es gibt nicht / keiner",
        "front_fr": "Tsy misy = il n'y a pas / aucun"
      },
      {
        "front": "Rehefa = when (statement, not question)",
        "back": "Temporal conjunction",
        "front_de": "Rehefa = wenn (Aussage, keine Frage)",
        "front_fr": "Rehefa = quand (affirmation, pas question)"
      },
      {
        "front": "Raha = if",
        "back": "Conditional conjunction",
        "front_de": "Raha = wenn",
        "front_fr": "Raha = si"
      },
      {
        "front": "Satria = because",
        "back": "Causal conjunction",
        "front_de": "Satria = weil",
        "front_fr": "Satria = parce que"
      },
      {
        "front": "Fa = but",
        "back": "Contrast conjunction",
        "front_de": "Fa = aber",
        "front_fr": "Fa = mais"
      },
      {
        "front": "Dia = then / and",
        "back": "Sequential connector",
        "front_de": "Dia = dann / und",
        "front_fr": "Dia = alors / et"
      },
      {
        "front": "Ary = and",
        "back": "Additive conjunction",
        "front_de": "Ary = und",
        "front_fr": "Ary = et"
      }
    ],
    "vocab": [
      {
        "malagasy": "Aho",
        "english": "I",
        "german": "ich",
        "french": "je"
      },
      {
        "malagasy": "Ianao",
        "english": "You",
        "german": "Du / Sie",
        "french": "Tu / Vous"
      },
      {
        "malagasy": "Izy",
        "english": "He/She",
        "german": "Er/Sie",
        "french": "Il/Elle"
      },
      {
        "malagasy": "Isika",
        "english": "We (inclusive)",
        "german": "Wir (inklusiv)",
        "french": "Nous (inclusif)"
      },
      {
        "malagasy": "Izahay",
        "english": "We (exclusive)",
        "german": "Wir (exklusiv)",
        "french": "Nous (exclusif)"
      },
      {
        "malagasy": "Ianareo",
        "english": "You (plural)",
        "german": "Ihr (Plural)",
        "french": "Vous (pluriel)"
      },
      {
        "malagasy": "Izireo",
        "english": "They",
        "german": "Sie",
        "french": "Ils/Elles"
      },
      {
        "malagasy": "Ity",
        "english": "This",
        "german": "Dies",
        "french": "Ceci"
      },
      {
        "malagasy": "Iry",
        "english": "That",
        "german": "Das",
        "french": "Cela"
      },
      {
        "malagasy": "Ireo",
        "english": "These/Those",
        "german": "Diese/Jene",
        "french": "Ceux-ci/Ceux-là"
      },
      {
        "malagasy": "ny",
        "english": "the / possession marker",
        "german": "der/die/das / Besitzmarker",
        "french": "le/la/les / marqueur de possession"
      },
      {
        "malagasy": "Ankoatra",
        "english": "besides / except",
        "german": "außer / ausgenommen",
        "french": "en plus de / sauf"
      },
      {
        "malagasy": "Samy",
        "english": "each / every",
        "german": "jeder",
        "french": "chaque"
      },
      {
        "malagasy": "Rehefa",
        "english": "when (statement)",
        "german": "wenn (Aussage)",
        "french": "quand (affirmation)"
      },
      {
        "malagasy": "Raha",
        "english": "if",
        "german": "wenn/falls",
        "french": "si"
      },
      {
        "malagasy": "Satria",
        "english": "because",
        "german": "weil",
        "french": "parce que"
      },
      {
        "malagasy": "Fa",
        "english": "but",
        "german": "aber",
        "french": "mais"
      },
      {
        "malagasy": "Dia",
        "english": "then / and",
        "german": "dann / und",
        "french": "alors / et"
      },
      {
        "malagasy": "Ary",
        "english": "and",
        "german": "und",
        "french": "et"
      },
      {
        "malagasy": "Tsy misy",
        "english": "there is not",
        "german": "es gibt nicht",
        "french": "il n'y a pas"
      },
      {
        "malagasy": "ve",
        "english": "question particle",
        "german": "Fragepartikel",
        "french": "particule de question"
      },
      {
        "malagasy": "angaha",
        "english": "polite question particle",
        "german": "höfliche Fragepartikel",
        "french": "particule de question polie"
      },
      {
        "malagasy": "izany",
        "english": "that / it",
        "german": "das / es",
        "french": "cela / il"
      },
      {
        "malagasy": "koa",
        "english": "too / also",
        "german": "auch / ebenfalls",
        "french": "aussi / également"
      }
    ]
  },
  {
    "id": "adjectives",
    "title": "Adjectives & Descriptions",
    "emoji": "✨",
    "category": "grammar",
    "description": "How adjectives work in Malagasy — placement, intensifiers, and comparison.",
    "cards": [
      {
        "front": "Adjectives follow the noun. Example: trano lehibe = big house",
        "back": "Adjective placement: after noun",
        "front_de": "Adjektive folgen dem Nomen. Beispiel: trano lehibe = großes Haus",
        "front_fr": "Les adjectifs suivent le nom. Exemple: trano lehibe = grande maison"
      },
      {
        "front": "No 'to be' verb — adjectives imply it. 'Manga izy' = Blue he/she = 'It is blue'",
        "back": "Adjectives as predicates",
        "front_de": "Kein 'sein'-Verb — Adjektive implizieren es. 'Manga izy' = Blau er/sie = 'Es ist blau'",
        "front_fr": "Pas de verbe 'être' — les adjectifs l'impliquent. 'Manga izy' = Bleu il/elle = 'C'est bleu'"
      },
      {
        "front": "Intensifier: be- prefix. Bevoka = very wet",
        "back": "be- = very / intensifier",
        "front_de": "Intensivierer: be- Präfix. Bevoka = sehr nass",
        "front_fr": "Intensificateur: préfixe be-. Bevoka = très mouillé"
      },
      {
        "front": "Comparison: kokoa = more. 'Lehibe kokoa' = bigger",
        "back": "Comparative: kokoa",
        "front_de": "Vergleich: kokoa = mehr. 'Lehibe kokoa' = größer",
        "front_fr": "Comparaison: kokoa = plus. 'Lehibe kokoa' = plus grand"
      },
      {
        "front": "Superlative: indrindra = most. 'Tsara indrindra' = best",
        "back": "Superlative: indrindra",
        "front_de": "Superlativ: indrindra = am meisten. 'Tsara indrindra' = am besten",
        "front_fr": "Superlatif: indrindra = le plus. 'Tsara indrindra' = le meilleur"
      },
      {
        "front": "Diminutive: -kely suffix. 'Zazakely' = small child",
        "back": "-kely = small / diminutive",
        "front_de": "Diminutiv: -kely Suffix. 'Zazakely' = kleines Kind",
        "front_fr": "Diminutif: suffixe -kely. 'Zazakely' = petit enfant"
      },
      {
        "front": "Augmentative: -be suffix. 'Tanabe' = big town",
        "back": "-be = big / augmentative",
        "front_de": "Augmentativ: -be Suffix. 'Tanabe' = große Stadt",
        "front_fr": "Augmentatif: suffixe -be. 'Tanabe' = grande ville"
      },
      {
        "front": "Reduplication for emphasis: 'lava lava' = very long",
        "back": "Reduplication = emphasis",
        "front_de": "Reduplikation zur Verstärkung: 'lava lava' = sehr lang",
        "front_fr": "Réduplication pour l'emphase: 'lava lava' = très long"
      },
      {
        "front": "Color + antitra = dark. 'Manga antitra' = dark blue",
        "back": "antitra = dark (with colors)",
        "front_de": "Farbe + antitra = dunkel. 'Manga antitra' = dunkelblau",
        "front_fr": "Couleur + antitra = foncé. 'Manga antitra' = bleu foncé"
      },
      {
        "front": "Color + tanora = light. 'Manga tanora' = light blue",
        "back": "tanora = light (with colors)",
        "front_de": "Farbe + tanora = hell. 'Manga tanora' = hellblau",
        "front_fr": "Couleur + tanora = clair. 'Manga tanora' = bleu clair"
      },
      {
        "front": "Tsy + adjective = negative. 'Tsy tsara' = not good",
        "back": "Negation of adjectives",
        "front_de": "Tsy + Adjektiv = Negation. 'Tsy tsara' = nicht gut",
        "front_fr": "Tsy + adjectif = négation. 'Tsy tsara' = pas bon"
      },
      {
        "front": "Maro = many / much. Vitsy = few / little",
        "back": "Quantity adjectives",
        "front_de": "Maro = viele / viel. Vitsy = wenige / wenig",
        "front_fr": "Maro = beaucoup. Vitsy = peu"
      },
      {
        "front": "Rehetra = all / every. Sasany = some",
        "back": "Universal / partial quantifiers",
        "front_de": "Rehetra = alle / jeder. Sasany = einige",
        "front_fr": "Rehetra = tout / chaque. Sasany = quelques"
      },
      {
        "front": "Hafa = different / other. Mitovy = same / equal",
        "back": "Similarity / difference",
        "front_de": "Hafa = verschieden / andere. Mitovy = gleich / gleichwertig",
        "front_fr": "Hafa = différent / autre. Mitovy = même / égal"
      },
      {
        "front": "Lava = long. Fohy = short",
        "back": "Size adjectives",
        "front_de": "Lava = lang. Fohy = kurz",
        "front_fr": "Lava = long. Fohy = court"
      },
      {
        "front": "Lehibe = big. Kely = small",
        "back": "Size opposites",
        "front_de": "Lehibe = groß. Kely = klein",
        "front_fr": "Lehibe = grand. Kely = petit"
      },
      {
        "front": "Tsara = good / well. ratsy = bad",
        "back": "Quality opposites",
        "front_de": "Tsara = gut / wohl. ratsy = schlecht",
        "front_fr": "Tsara = bon / bien. ratsy = mauvais"
      },
      {
        "front": "Mora = easy / cheap. Sarotra = difficult / expensive",
        "back": "Difficulty / price",
        "front_de": "Mora = einfach / billig. Sarotra = schwer / teuer",
        "front_fr": "Mora = facile / bon marché. Sarotra = difficile / cher"
      },
      {
        "front": "Vaovao = new. Taloha = old",
        "back": "Age opposites",
        "front_de": "Vaovao = neu. Taloha = alt",
        "front_fr": "Vaovao = nouveau. Taloha = vieux"
      },
      {
        "front": "Madio = clean. Maloto = dirty",
        "back": "Cleanliness opposites",
        "front_de": "Madio = sauber. Maloto = schmutzig",
        "front_fr": "Madio = propre. Maloto = sale"
      }
    ],
    "vocab": [
      {
        "malagasy": "lehibe",
        "english": "big",
        "german": "groß",
        "french": "grand"
      },
      {
        "malagasy": "kely",
        "english": "small",
        "german": "klein",
        "french": "petit"
      },
      {
        "malagasy": "lava",
        "english": "long",
        "german": "lang",
        "french": "long"
      },
      {
        "malagasy": "fohy",
        "english": "short",
        "german": "kurz",
        "french": "court"
      },
      {
        "malagasy": "tsara",
        "english": "good",
        "german": "gut",
        "french": "bon"
      },
      {
        "malagasy": "ratsy",
        "english": "bad",
        "german": "schlecht",
        "french": "mauvais"
      },
      {
        "malagasy": "vaovao",
        "english": "new",
        "german": "neu",
        "french": "nouveau"
      },
      {
        "malagasy": "taloha",
        "english": "old",
        "german": "alt",
        "french": "vieux"
      },
      {
        "malagasy": "mora",
        "english": "easy / cheap",
        "german": "einfach / billig",
        "french": "facile / bon marché"
      },
      {
        "malagasy": "sarotra",
        "english": "difficult / expensive",
        "german": "schwierig / teuer",
        "french": "difficile / cher"
      },
      {
        "malagasy": "madio",
        "english": "clean",
        "german": "sauber",
        "french": "propre"
      },
      {
        "malagasy": "maloto",
        "english": "dirty",
        "german": "schmutzig",
        "french": "sale"
      },
      {
        "malagasy": "maro",
        "english": "many",
        "german": "viele",
        "french": "beaucoup"
      },
      {
        "malagasy": "vitsy",
        "english": "few",
        "german": "wenige",
        "french": "peu"
      },
      {
        "malagasy": "rehetra",
        "english": "all",
        "german": "alle",
        "french": "tout"
      },
      {
        "malagasy": "sasany",
        "english": "some",
        "german": "einige",
        "french": "quelques"
      },
      {
        "malagasy": "hafa",
        "english": "different",
        "german": "verschieden",
        "french": "différent"
      },
      {
        "malagasy": "mitovy",
        "english": "same",
        "german": "gleich",
        "french": "égal"
      },
      {
        "malagasy": "kokoa",
        "english": "more",
        "german": "mehr",
        "french": "plus"
      },
      {
        "malagasy": "indrindra",
        "english": "most / especially",
        "german": "am meisten / besonders",
        "french": "le plus / surtout"
      },
      {
        "malagasy": "be-",
        "english": "very (prefix)",
        "german": "sehr (Präfix)",
        "french": "très (préfixe)"
      },
      {
        "malagasy": "-kely",
        "english": "small (suffix)",
        "german": "klein (Suffix)",
        "french": "petit (suffixe)"
      },
      {
        "malagasy": "-be",
        "english": "big (suffix)",
        "german": "groß (Suffix)",
        "french": "grand (suffixe)"
      },
      {
        "malagasy": "antitra",
        "english": "dark (with colors)",
        "german": "dunkel (bei Farben)",
        "french": "foncé (avec couleurs)"
      },
      {
        "malagasy": "tanora",
        "english": "light (with colors)",
        "german": "hell (bei Farben)",
        "french": "clair (avec couleurs)"
      }
    ]
  },
  {
    "id": "prepositions",
    "title": "Prepositions & Location",
    "emoji": "📍",
    "category": "grammar",
    "description": "Spatial and temporal prepositions for describing where and when things happen.",
    "cards": [
      {
        "front": "Amin'ny = at / in / on. General location marker.",
        "back": "General preposition",
        "front_de": "Amin'ny = bei / in / auf. Allgemeine Ortsmarkierung.",
        "front_fr": "Amin'ny = à / dans / sur. Marqueur de lieu général."
      },
      {
        "front": "Any = there / in there. Remote location.",
        "back": "Remote location",
        "front_de": "Any = dort / dorthin. Entfernter Ort.",
        "front_fr": "Any = là / là-bas. Lieu éloigné."
      },
      {
        "front": "Aty = here. Near speaker.",
        "back": "Proximate location",
        "front_de": "Aty = hier. In der Nähe des Sprechers.",
        "front_fr": "Aty = ici. Près du locuteur."
      },
      {
        "front": "Ao = inside. Example: ao an-trano = inside the house",
        "back": "Inside",
        "front_de": "Ao = innen. Beispiel: ao an-trano = im Haus",
        "front_fr": "Ao = à l'intérieur. Exemple : ao an-trano = dans la maison"
      },
      {
        "front": "Ivelany = outside. Example: ivelany = outside",
        "back": "Outside",
        "front_de": "Ivelany = außen. Beispiel: ivelany = draußen",
        "front_fr": "Ivelany = dehors. Exemple : ivelany = à l'extérieur"
      },
      {
        "front": "Amin'ny ala = in the forest",
        "back": "Specific location example",
        "front_de": "Amin'ny ala = im Wald",
        "front_fr": "Amin'ny ala = dans la forêt"
      },
      {
        "front": "Amin'ny tany = on the ground",
        "back": "Specific location example",
        "front_de": "Amin'ny tany = auf dem Boden",
        "front_fr": "Amin'ny tany = sur le sol"
      },
      {
        "front": "Any an-tampony = on top of it",
        "back": "On top",
        "front_de": "Any an-tampony = oben darauf",
        "front_fr": "Any an-tampony = au sommet / par-dessus"
      },
      {
        "front": "Any ambany = underneath",
        "back": "Underneath",
        "front_de": "Any ambany = darunter",
        "front_fr": "Any ambany = en dessous"
      },
      {
        "front": "Any akaiky = nearby / close",
        "back": "Nearby",
        "front_de": "Any akaiky = in der Nähe / nah",
        "front_fr": "Any akaiky = à proximité / près"
      },
      {
        "front": "Any lavitra = far away",
        "back": "Far away",
        "front_de": "Any lavitra = weit weg",
        "front_fr": "Any lavitra = loin"
      },
      {
        "front": "Amin'ny soroka = at the corner",
        "back": "At the corner",
        "front_de": "Amin'ny soroka = an der Ecke",
        "front_fr": "Amin'ny soroka = au coin"
      },
      {
        "front": "Amin'ny sisin'ny = at the edge of",
        "back": "At the edge",
        "front_de": "Amin'ny sisin'ny = am Rand von",
        "front_fr": "Amin'ny sisin'ny = au bord de"
      },
      {
        "front": "Amin'ny afovoany = in the middle",
        "back": "In the middle",
        "front_de": "Amin'ny afovoany = in der Mitte",
        "front_fr": "Amin'ny afovoany = au milieu"
      },
      {
        "front": "Amin'ny farany = at the end",
        "back": "At the end",
        "front_de": "Amin'ny farany = am Ende",
        "front_fr": "Amin'ny farany = à la fin"
      },
      {
        "front": "Talohan'ny = before. Example: talohan'ny latabatra",
        "back": "Before (time/space)",
        "front_de": "Talohan'ny = vor. Beispiel: talohan'ny latabatra",
        "front_fr": "Talohan'ny = avant. Exemple : talohan'ny latabatra"
      },
      {
        "front": "Aorian'ny = after. Example: aorian'ny latabatra",
        "back": "After (time/space)",
        "front_de": "Aorian'ny = nach. Beispiel: aorian'ny latabatra",
        "front_fr": "Aorian'ny = après. Exemple : aorian'ny latabatra"
      },
      {
        "front": "Miaraka amin'ny = with / together with",
        "back": "Accompaniment",
        "front_de": "Miaraka amin'ny = mit / zusammen mit",
        "front_fr": "Miaraka amin'ny = avec / ensemble avec"
      },
      {
        "front": "Tsy misy afa-tsy = except / apart from",
        "back": "Exclusion",
        "front_de": "Tsy misy afa-tsy = außer / abgesehen von",
        "front_fr": "Tsy misy afa-tsy = sauf / à part"
      },
      {
        "front": "Manodidina = around. Example: manodidina ny trano",
        "back": "Around",
        "front_de": "Manodidina = um … herum. Beispiel: manodidina ny trano",
        "front_fr": "Manodidina = autour de. Exemple : manodidina ny trano"
      }
    ],
    "vocab": [
      {
        "malagasy": "Amin'ny",
        "english": "at / in / on",
        "german": "an / in / auf",
        "french": "à / dans / sur"
      },
      {
        "malagasy": "Any",
        "english": "there",
        "german": "dort",
        "french": "là"
      },
      {
        "malagasy": "Aty",
        "english": "here",
        "german": "hier",
        "french": "ici"
      },
      {
        "malagasy": "Ao",
        "english": "inside",
        "german": "drinnen",
        "french": "à l'intérieur"
      },
      {
        "malagasy": "Ivelany",
        "english": "outside",
        "german": "draußen",
        "french": "à l'extérieur"
      },
      {
        "malagasy": "Tampony",
        "english": "top",
        "german": "oben / Spitze",
        "french": "haut / sommet"
      },
      {
        "malagasy": "Ambany",
        "english": "underneath",
        "german": "darunter",
        "french": "en dessous"
      },
      {
        "malagasy": "Akaiky",
        "english": "nearby",
        "german": "in der Nähe",
        "french": "à proximité"
      },
      {
        "malagasy": "Lavitra",
        "english": "far",
        "german": "weit",
        "french": "loin"
      },
      {
        "malagasy": "Soroka",
        "english": "corner",
        "german": "Ecke",
        "french": "coin"
      },
      {
        "malagasy": "Sisin'ny",
        "english": "edge",
        "german": "Rand",
        "french": "bord"
      },
      {
        "malagasy": "Afovoany",
        "english": "middle",
        "german": "Mitte",
        "french": "milieu"
      },
      {
        "malagasy": "Farany",
        "english": "end",
        "german": "Ende",
        "french": "fin"
      },
      {
        "malagasy": "Talohan'ny",
        "english": "before",
        "german": "vor",
        "french": "avant"
      },
      {
        "malagasy": "Aorian'ny",
        "english": "after",
        "german": "nach",
        "french": "après"
      },
      {
        "malagasy": "Miaraka amin'ny",
        "english": "with",
        "german": "mit",
        "french": "avec"
      },
      {
        "malagasy": "Manodidina",
        "english": "around",
        "german": "um",
        "french": "autour"
      },
      {
        "malagasy": "Amin'ny ala",
        "english": "in the forest",
        "german": "im Wald",
        "french": "dans la forêt"
      },
      {
        "malagasy": "Amin'ny tany",
        "english": "on the ground",
        "german": "auf dem Boden",
        "french": "sur le sol"
      },
      {
        "malagasy": "Amin'ny an-tampony",
        "english": "on top",
        "german": "oben drauf",
        "french": "au-dessus"
      },
      {
        "malagasy": "Amin'ny ambany",
        "english": "underneath",
        "german": "darunter",
        "french": "en dessous"
      },
      {
        "malagasy": "Tsy misy afa-tsy",
        "english": "except",
        "german": "außer",
        "french": "sauf"
      },
      {
        "malagasy": "Ao an-trano",
        "english": "inside the house",
        "german": "im Haus",
        "french": "à l'intérieur de la maison"
      },
      {
        "malagasy": "Ivelan'ny",
        "english": "outside of",
        "german": "außerhalb von",
        "french": "en dehors de"
      },
      {
        "malagasy": "Any an-tampony",
        "english": "on top of it",
        "german": "darauf",
        "french": "dessus"
      }
    ]
  },
  {
    "id": "negation",
    "title": "Negation & Modifiers",
    "emoji": "🚫",
    "category": "grammar",
    "description": "How to negate sentences, form questions, and use modifiers.",
    "cards": [
      {
        "front": "Tsy = no / not. Placed before the verb or adjective.",
        "back": "Basic negation",
        "front_de": "Tsy = nein / nicht. Wird vor das Verb oder Adjektiv gesetzt.",
        "front_fr": "Tsy = non / pas. Placé avant le verbe ou l'adjectif."
      },
      {
        "front": "Tsy misy = there is not / none. Negative of 'misy'.",
        "back": "Negative existence",
        "front_de": "Tsy misy = es gibt nicht / keiner. Verneinung von „misy“.",
        "front_fr": "Tsy misy = il n'y a pas / aucun. Négation de « misy »."
      },
      {
        "front": "Tsy maintsy = must / have to. Example: Tsy maintsy mandeha aho.",
        "back": "Obligation",
        "front_de": "Tsy maintsy = müssen. Beispiel: Tsy maintsy mandeha aho.",
        "front_fr": "Tsy maintsy = devoir. Exemple : Tsy maintsy mandeha aho."
      },
      {
        "front": "Tsy afaka = cannot. Example: Tsy afaka mianatra aho.",
        "back": "Inability",
        "front_de": "Tsy afaka = nicht können. Beispiel: Tsy afaka mianatra aho.",
        "front_fr": "Tsy afaka = ne pas pouvoir. Exemple : Tsy afaka mianatra aho."
      },
      {
        "front": "Tsy tia = do not like. Example: Tsy tia hena aho.",
        "back": "Negative preference",
        "front_de": "Tsy tia = nicht mögen. Beispiel: Tsy tia hena aho.",
        "front_fr": "Tsy tia = ne pas aimer. Exemple : Tsy tia hena aho."
      },
      {
        "front": "Aza = don't (imperative). Example: Aza manao izany!",
        "back": "Negative command",
        "front_de": "Aza = nicht (Imperativ). Beispiel: Aza manao izany!",
        "front_fr": "Aza = ne pas (impératif). Exemple : Aza manao izany !"
      },
      {
        "front": "Tsy azo atao = impossible / not allowed",
        "back": "Prohibition",
        "front_de": "Tsy azo atao = unmöglich / nicht erlaubt",
        "front_fr": "Tsy azo atao = impossible / interdit"
      },
      {
        "front": "Ve = question particle for yes/no. Added at end.",
        "back": "Yes/no question marker",
        "front_de": "Ve = Fragepartikel für Ja/Nein. Wird am Ende angefügt.",
        "front_fr": "Ve = particule de question pour oui/non. Ajouté à la fin."
      },
      {
        "front": "Angaha = polite question particle. Softer than 've'.",
        "back": "Polite question marker",
        "front_de": "Angaha = höfliche Fragepartikel. Sanfter als „ve“.",
        "front_fr": "Angaha = particule de question polie. Plus doux que « ve »."
      },
      {
        "front": "Inona? = What?",
        "back": "Content question",
        "front_de": "Inona? = Was?",
        "front_fr": "Inona? = Quoi ? / Qu'est-ce que ?"
      },
      {
        "front": "Iza? = Who?",
        "back": "Person question",
        "front_de": "Iza? = Wer?",
        "front_fr": "Iza? = Qui ?"
      },
      {
        "front": "Aiza? = Where?",
        "back": "Location question",
        "front_de": "Aiza? = Wo?",
        "front_fr": "Aiza? = Où ?"
      },
      {
        "front": "Fa maninona? = Why?",
        "back": "Reason question",
        "front_de": "Fa maninona? = Warum?",
        "front_fr": "Fa maninona? = Pourquoi ?"
      },
      {
        "front": "Ahoana? = How?",
        "back": "Manner question",
        "front_de": "Ahoana? = Wie?",
        "front_fr": "Ahoana? = Comment ?"
      },
      {
        "front": "Firy? = How many?",
        "back": "Quantity question",
        "front_de": "Firy? = Wie viele?",
        "front_fr": "Firy? = Combien ?"
      },
      {
        "front": "Oviana? = When? (questions only)",
        "back": "Temporal question",
        "front_de": "Oviana? = Wann? (nur in Fragen)",
        "front_fr": "Oviana? = Quand ? (questions seulement)"
      },
      {
        "front": "Hoatrinona? = How much?",
        "back": "Price question",
        "front_de": "Hoatrinona? = Wie viel?",
        "front_fr": "Hoatrinona? = Combien ?"
      },
      {
        "front": "Mbola = still / yet. Example: Mbola tsara izy.",
        "back": "Continuative",
        "front_de": "Mbola = noch. Beispiel: Mbola tsara izy.",
        "front_fr": "Mbola = encore. Exemple : Mbola tsara izy."
      },
      {
        "front": "Efa = already. Example: Efa tonga izy.",
        "back": "Completive",
        "front_de": "Efa = schon. Beispiel: Efa tonga izy.",
        "front_fr": "Efa = déjà. Exemple : Efa tonga izy."
      },
      {
        "front": "Vao = just / recently. Example: Vao niverena izy.",
        "back": "Recent past",
        "front_de": "Vao = gerade / kürzlich. Beispiel: Vao niverena izy.",
        "front_fr": "Vao = juste / récemment. Exemple : Vao niverena izy."
      }
    ],
    "vocab": [
      {
        "malagasy": "Tsy",
        "english": "no / not",
        "german": "nein / nicht",
        "french": "non / ne pas"
      },
      {
        "malagasy": "Tsy misy",
        "english": "there is not",
        "german": "es gibt nicht",
        "french": "il n'y a pas"
      },
      {
        "malagasy": "Tsy maintsy",
        "english": "must",
        "german": "muss",
        "french": "devoir"
      },
      {
        "malagasy": "Tsy afaka",
        "english": "cannot",
        "german": "kann nicht",
        "french": "ne peut pas"
      },
      {
        "malagasy": "Tsy tia",
        "english": "do not like",
        "german": "mag nicht",
        "french": "ne pas aimer"
      },
      {
        "malagasy": "Aza",
        "english": "don't",
        "german": "nicht",
        "french": "ne pas"
      },
      {
        "malagasy": "Tsy azo atao",
        "english": "impossible",
        "german": "unmöglich",
        "french": "impossible"
      },
      {
        "malagasy": "Ve",
        "english": "question particle",
        "german": "Fragepartikel",
        "french": "particule de question"
      },
      {
        "malagasy": "Angaha",
        "english": "polite question",
        "german": "höfliche Frage",
        "french": "question polie"
      },
      {
        "malagasy": "Mbola",
        "english": "still",
        "german": "noch",
        "french": "encore"
      },
      {
        "malagasy": "Efa",
        "english": "already",
        "german": "schon",
        "french": "déjà"
      },
      {
        "malagasy": "Vao",
        "english": "just / recently",
        "german": "gerade / kürzlich",
        "french": "juste / récemment"
      },
      {
        "malagasy": "tsara",
        "english": "good",
        "german": "gut",
        "french": "bon"
      },
      {
        "malagasy": "tsy tsara",
        "english": "not good",
        "german": "nicht gut",
        "french": "pas bon"
      },
      {
        "malagasy": "misy",
        "english": "there is",
        "german": "es gibt",
        "french": "il y a"
      },
      {
        "malagasy": "tsy misy",
        "english": "there is not",
        "german": "es gibt nicht",
        "french": "il n'y a pas"
      },
      {
        "malagasy": "maintsy",
        "english": "must",
        "german": "muss",
        "french": "devoir"
      },
      {
        "malagasy": "afaka",
        "english": "can",
        "german": "können",
        "french": "pouvoir"
      },
      {
        "malagasy": "tsy afaka",
        "english": "cannot",
        "german": "kann nicht",
        "french": "ne peut pas"
      },
      {
        "malagasy": "tia",
        "english": "to like",
        "german": "mögen",
        "french": "aimer"
      },
      {
        "malagasy": "tsy tia",
        "english": "to not like",
        "german": "nicht mögen",
        "french": "ne pas aimer"
      },
      {
        "malagasy": "azo atao",
        "english": "possible",
        "german": "möglich",
        "french": "possible"
      },
      {
        "malagasy": "tsy azo atao",
        "english": "impossible",
        "german": "unmöglich",
        "french": "impossible"
      },
      {
        "malagasy": "maintsy mandeha",
        "english": "must go",
        "german": "muss gehen",
        "french": "doit partir"
      },
      {
        "malagasy": "efa tonga",
        "english": "already arrived",
        "german": "schon angekommen",
        "french": "déjà arrivé"
      }
    ]
  },
  {
    "id": "body",
    "title": "Body Parts & Health",
    "emoji": "🩺",
    "category": "vocabulary",
    "description": "Body parts, symptoms, and medical phrases for emergencies and doctor visits.",
    "cards": [
      {
        "front": "Head",
        "back": "Loha",
        "front_de": "Kopf",
        "front_fr": "Tête"
      },
      {
        "front": "Face",
        "back": "Tarehy",
        "front_de": "Gesicht",
        "front_fr": "Visage"
      },
      {
        "front": "Eye",
        "back": "Maso",
        "front_de": "Auge",
        "front_fr": "Œil"
      },
      {
        "front": "Ear",
        "back": "Sofina",
        "front_de": "Ohr",
        "front_fr": "Oreille"
      },
      {
        "front": "Nose",
        "back": "Orona",
        "front_de": "Nase",
        "front_fr": "Nez"
      },
      {
        "front": "Mouth",
        "back": "Vava",
        "front_de": "Mund",
        "front_fr": "Bouche"
      },
      {
        "front": "Tooth / Teeth",
        "back": "Nify",
        "front_de": "Zahn / Zähne",
        "front_fr": "Dent / Dents"
      },
      {
        "front": "Tongue",
        "back": "Lela",
        "front_de": "Zunge",
        "front_fr": "Langue"
      },
      {
        "front": "Neck",
        "back": "Vozona",
        "front_de": "Nacken",
        "front_fr": "Cou"
      },
      {
        "front": "Shoulder",
        "back": "Soroka",
        "front_de": "Schulter",
        "front_fr": "Épaule"
      },
      {
        "front": "Arm / Hand",
        "back": "Tanana",
        "front_de": "Arm / Hand",
        "front_fr": "Bras / Main"
      },
      {
        "front": "Finger",
        "back": "Rantsantanana",
        "front_de": "Finger",
        "front_fr": "Doigt"
      },
      {
        "front": "Chest",
        "back": "Tratra",
        "front_de": "Brust",
        "front_fr": "Poitrine"
      },
      {
        "front": "Stomach / Belly",
        "back": "Kibo",
        "front_de": "Bauch",
        "front_fr": "Ventre / Estomac"
      },
      {
        "front": "Back",
        "back": "Lamosina",
        "front_de": "Rücken",
        "front_fr": "Dos"
      },
      {
        "front": "Leg / Foot",
        "back": "Tongotra",
        "front_de": "Bein / Fuß",
        "front_fr": "Jambe / Pied"
      },
      {
        "front": "Knee",
        "back": "Lohalika",
        "front_de": "Knie",
        "front_fr": "Genou"
      },
      {
        "front": "Bone",
        "back": "Taolana",
        "front_de": "Knochen",
        "front_fr": "Os"
      },
      {
        "front": "Blood",
        "back": "Ra",
        "front_de": "Blut",
        "front_fr": "Sang"
      },
      {
        "front": "Skin",
        "back": "Hoditra",
        "front_de": "Haut",
        "front_fr": "Peau"
      },
      {
        "front": "Heart",
        "back": "Fo",
        "front_de": "Herz",
        "front_fr": "Cœur"
      },
      {
        "front": "I am sick.",
        "back": "Marary aho.",
        "front_de": "Ich bin krank.",
        "front_fr": "Je suis malade."
      },
      {
        "front": "It hurts here.",
        "back": "Mampahory eto.",
        "front_de": "Hier tut es weh.",
        "front_fr": "Ça fait mal ici."
      },
      {
        "front": "I have a fever.",
        "back": "Tazo aho.",
        "front_de": "Ich habe Fieber.",
        "front_fr": "J'ai de la fièvre."
      },
      {
        "front": "I need a doctor.",
        "back": "Mila dokotera aho.",
        "front_de": "Ich brauche einen Arzt.",
        "front_fr": "J'ai besoin d'un médecin."
      }
    ],
    "vocab": [
      {
        "malagasy": "Loha",
        "english": "Head",
        "german": "Kopf",
        "french": "Tête"
      },
      {
        "malagasy": "Tarehy",
        "english": "Face",
        "german": "Gesicht",
        "french": "Visage"
      },
      {
        "malagasy": "Maso",
        "english": "Eye",
        "german": "Auge",
        "french": "Oeil"
      },
      {
        "malagasy": "Sofina",
        "english": "Ear",
        "german": "Ohr",
        "french": "Oreille"
      },
      {
        "malagasy": "Orona",
        "english": "Nose",
        "german": "Nase",
        "french": "Nez"
      },
      {
        "malagasy": "Vava",
        "english": "Mouth",
        "german": "Mund",
        "french": "Bouche"
      },
      {
        "malagasy": "Nify",
        "english": "Tooth / Teeth",
        "german": "Zahn / Zähne",
        "french": "Dent / Dents"
      },
      {
        "malagasy": "Lela",
        "english": "Tongue",
        "german": "Zunge",
        "french": "Langue"
      },
      {
        "malagasy": "Vozona",
        "english": "Neck",
        "german": "Hals",
        "french": "Cou"
      },
      {
        "malagasy": "Soroka",
        "english": "Shoulder",
        "german": "Schulter",
        "french": "Épaule"
      },
      {
        "malagasy": "Tanana",
        "english": "Arm / Hand",
        "german": "Arm / Hand",
        "french": "Bras / Main"
      },
      {
        "malagasy": "Rantsantanana",
        "english": "Finger",
        "german": "Finger",
        "french": "Doigt"
      },
      {
        "malagasy": "Tratra",
        "english": "Chest",
        "german": "Brust",
        "french": "Poitrine"
      },
      {
        "malagasy": "Kibo",
        "english": "Stomach / Belly",
        "german": "Magen / Bauch",
        "french": "Estomac / Ventre"
      },
      {
        "malagasy": "Lamosina",
        "english": "Back",
        "german": "Rücken",
        "french": "Dos"
      },
      {
        "malagasy": "Tongotra",
        "english": "Leg / Foot",
        "german": "Bein / Fuß",
        "french": "Jambe / Pied"
      },
      {
        "malagasy": "Lohalika",
        "english": "Knee",
        "german": "Knie",
        "french": "Genou"
      },
      {
        "malagasy": "Taolana",
        "english": "Bone",
        "german": "Knochen",
        "french": "Os"
      },
      {
        "malagasy": "Ra",
        "english": "Blood",
        "german": "Blut",
        "french": "Sang"
      },
      {
        "malagasy": "Hoditra",
        "english": "Skin",
        "german": "Haut",
        "french": "Peau"
      },
      {
        "malagasy": "Fo",
        "english": "Heart",
        "german": "Herz",
        "french": "Coeur"
      },
      {
        "malagasy": "Marary",
        "english": "Sick / Painful",
        "german": "Krank / Schmerzhaft",
        "french": "Malade / Douloureux"
      },
      {
        "malagasy": "Mampahory",
        "english": "To hurt",
        "german": "Weh tun",
        "french": "Faire mal"
      },
      {
        "malagasy": "Tazo",
        "english": "Fever",
        "german": "Fieber",
        "french": "Fièvre"
      },
      {
        "malagasy": "Dokotera",
        "english": "Doctor",
        "german": "Arzt",
        "french": "Médecin"
      },
      {
        "malagasy": "Hopitaly",
        "english": "Hospital",
        "german": "Krankenhaus",
        "french": "Hôpital"
      },
      {
        "malagasy": "Fanafody",
        "english": "Medicine",
        "german": "Medizin",
        "french": "Médicament"
      },
      {
        "malagasy": "Mitsabo",
        "english": "To heal / treat",
        "german": "Heilen / Behandeln",
        "french": "Guérir / Traiter"
      },
      {
        "malagasy": "Marary andoha",
        "english": "Headache",
        "german": "Kopfschmerzen",
        "french": "Mal de tête"
      },
      {
        "malagasy": "Marary kibo",
        "english": "Stomach ache",
        "german": "Bauchschmerzen",
        "french": "Mal de ventre"
      },
      {
        "malagasy": "Mandoa",
        "english": "To vomit",
        "german": "Erbrechen",
        "french": "Vomir"
      },
      {
        "malagasy": "Arety",
        "english": "Disease",
        "german": "Krankheit",
        "french": "Maladie"
      },
      {
        "malagasy": "Tsindrona",
        "english": "Injection / Shot",
        "german": "Injektion / Spritze",
        "french": "Injection / Piqûre"
      },
      {
        "malagasy": "Fery",
        "english": "Wound",
        "german": "Wunde",
        "french": "Blessure"
      },
      {
        "malagasy": "Tapaka",
        "english": "Broken (bone)",
        "german": "Gebrochen (Knochen)",
        "french": "Cassé (os)"
      }
    ]
  },
  {
    "id": "shopping",
    "title": "Shopping & Bargaining",
    "emoji": "🛍️",
    "category": "conversation",
    "description": "Market phrases, prices, and bargaining — essential for Madagascar's markets.",
    "cards": [
      {
        "front": "How much is this?",
        "back": "Ohatrinona ity?",
        "front_de": "Wie viel kostet das?",
        "front_fr": "Combien ça coûte ?"
      },
      {
        "front": "How much does it cost?",
        "back": "Ohatrinona ny vidiny?",
        "front_de": "Wie viel kostet es?",
        "front_fr": "Combien ça coûte ?"
      },
      {
        "front": "It's too expensive!",
        "back": "Lafo loatra!",
        "front_de": "Das ist zu teuer!",
        "front_fr": "C'est trop cher !"
      },
      {
        "front": "Make it cheaper please.",
        "back": "Ataovy mora kely azafady.",
        "front_de": "Machen Sie es bitte billiger.",
        "front_fr": "Faites-le moins cher s'il vous plaît."
      },
      {
        "front": "I'll buy this.",
        "back": "Hividy ity aho.",
        "front_de": "Ich nehme das.",
        "front_fr": "Je prends ça."
      },
      {
        "front": "Do you have ...?",
        "back": "Manana ... ve ianao?",
        "front_de": "Haben Sie …?",
        "front_fr": "Avez-vous … ?"
      },
      {
        "front": "I want to buy ...",
        "back": "Te hividy ... aho.",
        "front_de": "Ich möchte … kaufen.",
        "front_fr": "Je veux acheter …"
      },
      {
        "front": "Can we negotiate?",
        "back": "Afaka miady varotra ve?",
        "front_de": "Können wir verhandeln?",
        "front_fr": "Peut-on négocier ?"
      },
      {
        "front": "What is the price?",
        "back": "Ohatrinona ny vidiny?",
        "front_de": "Wie ist der Preis?",
        "front_fr": "Quel est le prix ?"
      },
      {
        "front": "That's cheap!",
        "back": "Mora izany!",
        "front_de": "Das ist billig!",
        "front_fr": "C'est bon marché !"
      },
      {
        "front": "Give me a discount.",
        "back": "Ataovy mora kokoa.",
        "front_de": "Geben Sie mir einen Rabatt.",
        "front_fr": "Faites-moi une réduction."
      },
      {
        "front": "I'm just looking.",
        "back": "Mijery fotsiny aho.",
        "front_de": "Ich schaue nur.",
        "front_fr": "Je regarde seulement."
      },
      {
        "front": "One kilo please.",
        "back": "Iray kilao azafady.",
        "front_de": "Ein Kilo bitte.",
        "front_fr": "Un kilo s'il vous plaît."
      },
      {
        "front": "How much per kilo?",
        "back": "Ohatrinona ny kilao?",
        "front_de": "Wie viel pro Kilo?",
        "front_fr": "Combien le kilo ?"
      },
      {
        "front": "I don't have enough money.",
        "back": "Tsy ampy ny volako.",
        "front_de": "Ich habe nicht genug Geld.",
        "front_fr": "Je n'ai pas assez d'argent."
      }
    ],
    "vocab": [
      {
        "malagasy": "Ohatrinona",
        "english": "How much",
        "german": "Wie viel",
        "french": "Combien"
      },
      {
        "malagasy": "Vidiny",
        "english": "Price",
        "german": "Preis",
        "french": "Prix"
      },
      {
        "malagasy": "Lafo",
        "english": "Expensive",
        "german": "Teuer",
        "french": "Cher"
      },
      {
        "malagasy": "Mora",
        "english": "Cheap",
        "german": "Billig",
        "french": "Bon marché"
      },
      {
        "malagasy": "Miady varotra",
        "english": "To bargain / negotiate",
        "german": "Feilschen / Verhandeln",
        "french": "Marchander / Négocier"
      },
      {
        "malagasy": "Hividy",
        "english": "To buy",
        "german": "Kaufen",
        "french": "Acheter"
      },
      {
        "malagasy": "Mivarotra",
        "english": "To sell",
        "german": "Verkaufen",
        "french": "Vendre"
      },
      {
        "malagasy": "Vola",
        "english": "Money",
        "german": "Geld",
        "french": "Argent"
      },
      {
        "malagasy": "Tsena",
        "english": "Market",
        "german": "Markt",
        "french": "Marché"
      },
      {
        "malagasy": "Fivarotana",
        "english": "Shop / Store",
        "german": "Laden / Geschäft",
        "french": "Magasin / Boutique"
      },
      {
        "malagasy": "Kilao",
        "english": "Kilo",
        "german": "Kilo",
        "french": "Kilo"
      },
      {
        "malagasy": "Antsasaky",
        "english": "Half",
        "german": "Hälfte",
        "french": "Moitié"
      },
      {
        "malagasy": "Iray",
        "english": "One",
        "german": "Eins",
        "french": "Un"
      },
      {
        "malagasy": "Roa",
        "english": "Two",
        "german": "Zwei",
        "french": "Deux"
      },
      {
        "malagasy": "Ariary",
        "english": "Ariary (currency)",
        "german": "Ariary (Währung)",
        "french": "Ariary (monnaie)"
      },
      {
        "malagasy": "Mpiasa",
        "english": "Vendor / Worker",
        "german": "Verkäufer / Arbeiter",
        "french": "Vendeur / Travailleur"
      },
      {
        "malagasy": "Mpividy",
        "english": "Customer / Buyer",
        "german": "Kunde / Käufer",
        "french": "Client / Acheteur"
      },
      {
        "malagasy": "Vokatra",
        "english": "Product / Goods",
        "german": "Produkt / Waren",
        "french": "Produit / Marchandises"
      },
      {
        "malagasy": "Mijery",
        "english": "To look",
        "german": "Schauen",
        "french": "Regarder"
      },
      {
        "malagasy": "Fotsiny",
        "english": "Just / Only",
        "german": "Nur / Bloß",
        "french": "Juste / Seulement"
      },
      {
        "malagasy": "Ampy",
        "english": "Enough",
        "german": "Genug",
        "french": "Assez"
      },
      {
        "malagasy": "Tsy ampy",
        "english": "Not enough",
        "german": "Nicht genug",
        "french": "Pas assez"
      },
      {
        "malagasy": "Mihena",
        "english": "To reduce / lower",
        "german": "Reduzieren / Senken",
        "french": "Réduire / Baisser"
      },
      {
        "malagasy": "Vidina",
        "english": "To be bought",
        "german": "Gekauft werden",
        "french": "Être acheté"
      },
      {
        "malagasy": "Varotra",
        "english": "Trade / Commerce",
        "german": "Handel",
        "french": "Commerce"
      },
      {
        "malagasy": "Tsenabe",
        "english": "Big market",
        "german": "Großer Markt",
        "french": "Grand marché"
      },
      {
        "malagasy": "Mpanjifa",
        "english": "Customer",
        "german": "Kunde",
        "french": "Client"
      },
      {
        "malagasy": "Famatsiana",
        "english": "Supply / Stock",
        "german": "Vorrat / Bestand",
        "french": "Approvisionnement / Stock"
      },
      {
        "malagasy": "Entana",
        "english": "Merchandise",
        "german": "Ware",
        "french": "Marchandise"
      },
      {
        "malagasy": "Mividy ampongany",
        "english": "To buy wholesale",
        "german": "Großhandel kaufen",
        "french": "Acheter en gros"
      }
    ]
  },
  {
    "id": "directions",
    "title": "Directions & Transport",
    "emoji": "🧭",
    "category": "conversation",
    "description": "Getting around Madagascar — directions, taxi-brousse, and asking where things are.",
    "cards": [
      {
        "front": "Where is ...?",
        "back": "Aiza ny ...?",
        "front_de": "Wo ist …?",
        "front_fr": "Où est … ?"
      },
      {
        "front": "Turn left.",
        "back": "Miankavia.",
        "front_de": "Biegen Sie links ab.",
        "front_fr": "Tournez à gauche."
      },
      {
        "front": "Turn right.",
        "back": "Miankavanana.",
        "front_de": "Biegen Sie rechts ab.",
        "front_fr": "Tournez à droite."
      },
      {
        "front": "Go straight.",
        "back": "Mahitsy.",
        "front_de": "Gehen Sie geradeaus.",
        "front_fr": "Allez tout droit."
      },
      {
        "front": "It's near.",
        "back": "Akaiky izy io.",
        "front_de": "Es ist nah.",
        "front_fr": "C'est près."
      },
      {
        "front": "It's far.",
        "back": "Lavitra izy io.",
        "front_de": "Es ist weit.",
        "front_fr": "C'est loin."
      },
      {
        "front": "Here",
        "back": "Aty",
        "front_de": "Hier",
        "front_fr": "Ici"
      },
      {
        "front": "There",
        "back": "Any",
        "front_de": "Dort",
        "front_fr": "Là"
      },
      {
        "front": "Where is the taxi-brousse station?",
        "back": "Aiza ny fiantsonan'ny taxi-brousse?",
        "front_de": "Wo ist die Taxi-Brousse-Station?",
        "front_fr": "Où est la station de taxi-brousse ?"
      },
      {
        "front": "I want to go to ...",
        "back": "Te handeha any ... aho.",
        "front_de": "Ich möchte nach …",
        "front_fr": "Je veux aller à …"
      },
      {
        "front": "How do I get to ...?",
        "back": "Ahoana no ahatongavana any ...?",
        "front_de": "Wie komme ich nach …?",
        "front_fr": "Comment puis-je aller à … ?"
      },
      {
        "front": "Stop here please.",
        "back": "Mijanona aty azafady.",
        "front_de": "Halten Sie hier bitte.",
        "front_fr": "Arrêtez ici s'il vous plaît."
      },
      {
        "front": "How far is it?",
        "back": "Hatraiza ny halavirany?",
        "front_de": "Wie weit ist es?",
        "front_fr": "C'est à quelle distance ?"
      },
      {
        "front": "Is it walkable?",
        "back": "Azo andehanana an-tongotra ve?",
        "front_de": "Kann man zu Fuß gehen?",
        "front_fr": "Est-ce faisable à pied ?"
      },
      {
        "front": "I am lost.",
        "back": "Very aho.",
        "front_de": "Ich habe mich verlaufen.",
        "front_fr": "Je suis perdu."
      }
    ],
    "vocab": [
      {
        "malagasy": "Miankavia",
        "english": "Turn left",
        "german": "Links abbiegen",
        "french": "Tourner à gauche"
      },
      {
        "malagasy": "Miankavanana",
        "english": "Turn right",
        "german": "Rechts abbiegen",
        "french": "Tourner à droite"
      },
      {
        "malagasy": "Mahitsy",
        "english": "Straight",
        "german": "Geradeaus",
        "french": "Tout droit"
      },
      {
        "malagasy": "Akaiky",
        "english": "Near",
        "german": "Nah",
        "french": "Près"
      },
      {
        "malagasy": "Lavitra",
        "english": "Far",
        "german": "Weit",
        "french": "Loin"
      },
      {
        "malagasy": "Aty",
        "english": "Here",
        "german": "Hier",
        "french": "Ici"
      },
      {
        "malagasy": "Any",
        "english": "There",
        "german": "Dort",
        "french": "Là"
      },
      {
        "malagasy": "Handeha",
        "english": "To go",
        "german": "Gehen",
        "french": "Aller"
      },
      {
        "malagasy": "Tonga",
        "english": "To arrive",
        "german": "Ankommen",
        "french": "Arriver"
      },
      {
        "malagasy": "Miverina",
        "english": "To return",
        "german": "Zurückkehren",
        "french": "Revenir"
      },
      {
        "malagasy": "Fiantsonana",
        "english": "Station / Stop",
        "german": "Station / Haltestelle",
        "french": "Gare / Arrêt"
      },
      {
        "malagasy": "Taxi-brousse",
        "english": "Shared taxi / Bush taxi",
        "german": "Sammeltaxi / Buschtaxi",
        "french": "Taxi-brousse"
      },
      {
        "malagasy": "Taxi-be",
        "english": "Big shared taxi",
        "german": "Großes Sammeltaxi",
        "french": "Grand taxi collectif"
      },
      {
        "malagasy": "Pousse-pousse",
        "english": "Rickshaw",
        "german": "Rikscha",
        "french": "Pousse-pousse"
      },
      {
        "malagasy": "Lalana",
        "english": "Road / Path",
        "german": "Straße / Weg",
        "french": "Route / Chemin"
      },
      {
        "malagasy": "Tetezana",
        "english": "Bridge",
        "german": "Brücke",
        "french": "Pont"
      },
      {
        "malagasy": "Sampanana",
        "english": "Crossroads / Intersection",
        "german": "Kreuzung",
        "french": "Carrefour / Intersection"
      },
      {
        "malagasy": "Tongotra",
        "english": "On foot",
        "german": "Zu Fuß",
        "french": "À pied"
      },
      {
        "malagasy": "Fiara",
        "english": "Car / Vehicle",
        "german": "Auto / Fahrzeug",
        "french": "Voiture / Véhicule"
      },
      {
        "malagasy": "Bus",
        "english": "Bus",
        "german": "Bus",
        "french": "Bus"
      },
      {
        "malagasy": "Seranam-piaramanidina",
        "english": "Airport",
        "german": "Flughafen",
        "french": "Aéroport"
      },
      {
        "malagasy": "Very",
        "english": "Lost",
        "german": "Verloren",
        "french": "Perdu"
      },
      {
        "malagasy": "Halavirana",
        "english": "Distance",
        "german": "Entfernung",
        "french": "Distance"
      },
      {
        "malagasy": "Avaratra",
        "english": "North",
        "german": "Norden",
        "french": "Nord"
      },
      {
        "malagasy": "Atsimo",
        "english": "South",
        "german": "Süden",
        "french": "Sud"
      },
      {
        "malagasy": "Atsinanana",
        "english": "East",
        "german": "Osten",
        "french": "Est"
      },
      {
        "malagasy": "Andrefana",
        "english": "West",
        "german": "Westen",
        "french": "Ouest"
      },
      {
        "malagasy": "Tanimbarotra",
        "english": "Town square",
        "german": "Dorfplatz",
        "french": "Place du village"
      },
      {
        "malagasy": "Toby",
        "english": "Camp / Station",
        "german": "Lager / Station",
        "french": "Camp / Station"
      },
      {
        "malagasy": "Sisin-dalana",
        "english": "Roadside",
        "german": "Straßenrand",
        "french": "Bord de route"
      }
    ]
  },
  {
    "id": "weather",
    "title": "Weather & Seasons",
    "emoji": "🌦️",
    "category": "vocabulary",
    "description": "Weather terms, seasons, and climate — important for planning in Madagascar.",
    "cards": [
      {
        "front": "It's hot.",
        "back": "Mafana ny andro.",
        "front_de": "Es ist heiß.",
        "front_fr": "Il fait chaud."
      },
      {
        "front": "It's cold.",
        "back": "Mangatsiaka ny andro.",
        "front_de": "Es ist kalt.",
        "front_fr": "Il fait froid."
      },
      {
        "front": "It's raining.",
        "back": "Misy orana.",
        "front_de": "Es regnet.",
        "front_fr": "Il pleut."
      },
      {
        "front": "The sun is strong.",
        "back": "Mafy ny masoandro.",
        "front_de": "Die Sonne ist stark.",
        "front_fr": "Le soleil est fort."
      },
      {
        "front": "There is wind.",
        "back": "Misy rivotra.",
        "front_de": "Es gibt Wind.",
        "front_fr": "Il y a du vent."
      },
      {
        "front": "It's cloudy.",
        "back": "Misy rahona.",
        "front_de": "Es ist bewölkt.",
        "front_fr": "C'est nuageux."
      },
      {
        "front": "Rainy season",
        "back": "Fahavaratra",
        "front_de": "Regenzeit",
        "front_fr": "Saison des pluies"
      },
      {
        "front": "Dry season",
        "back": "Ririnina",
        "front_de": "Trockenzeit",
        "front_fr": "Saison sèche"
      },
      {
        "front": "Cyclone is coming.",
        "back": "Ho avy ny rivodoza.",
        "front_de": "Ein Zyklon kommt.",
        "front_fr": "Un cyclone arrive."
      },
      {
        "front": "What's the weather like?",
        "back": "Manao ahoana ny toetr'andro?",
        "front_de": "Wie ist das Wetter?",
        "front_fr": "Quel temps fait-il ?"
      },
      {
        "front": "It will rain tomorrow.",
        "back": "Ho avy ny orana rahampitso.",
        "front_de": "Morgen wird es regnen.",
        "front_fr": "Il pleuvra demain."
      },
      {
        "front": "The road is muddy.",
        "back": "Fotaka ny lalana.",
        "front_de": "Die Straße ist schlammig.",
        "front_fr": "La route est boueuse."
      },
      {
        "front": "It's humid.",
        "back": "Mando ny andro.",
        "front_de": "Es ist schwül.",
        "front_fr": "C'est humide."
      },
      {
        "front": "Lightning / Thunder",
        "back": "Varatra / Kotroka",
        "front_de": "Blitz / Donner",
        "front_fr": "Éclair / Tonnerre"
      },
      {
        "front": "Rainbow",
        "back": "Antsiben'ny andro",
        "front_de": "Regenbogen",
        "front_fr": "Arc-en-ciel"
      }
    ],
    "vocab": [
      {
        "malagasy": "Toetr'andro",
        "english": "Weather",
        "german": "Wetter",
        "french": "Météo"
      },
      {
        "malagasy": "Mafana",
        "english": "Hot",
        "german": "Heiß",
        "french": "Chaud"
      },
      {
        "malagasy": "Mangatsiaka",
        "english": "Cold",
        "german": "Kalt",
        "french": "Froid"
      },
      {
        "malagasy": "Orana",
        "english": "Rain",
        "german": "Regen",
        "french": "Pluie"
      },
      {
        "malagasy": "Masoandro",
        "english": "Sun",
        "german": "Sonne",
        "french": "Soleil"
      },
      {
        "malagasy": "Rivotra",
        "english": "Wind",
        "german": "Wind",
        "french": "Vent"
      },
      {
        "malagasy": "Rahona",
        "english": "Cloud",
        "german": "Wolke",
        "french": "Nuage"
      },
      {
        "malagasy": "Fahavaratra",
        "english": "Rainy season (summer)",
        "german": "Regenzeit (Sommer)",
        "french": "Saison des pluies (été)"
      },
      {
        "malagasy": "Ririnina",
        "english": "Dry season (winter)",
        "german": "Trockenzeit (Winter)",
        "french": "Saison sèche (hiver)"
      },
      {
        "malagasy": "Rivodoza",
        "english": "Cyclone",
        "german": "Zyklon",
        "french": "Cyclone"
      },
      {
        "malagasy": "Fotaka",
        "english": "Mud",
        "german": "Schlamm",
        "french": "Boue"
      },
      {
        "malagasy": "Mando",
        "english": "Wet / Humid",
        "german": "Nass / Feucht",
        "french": "Mouillé / Humide"
      },
      {
        "malagasy": "Maina",
        "english": "Dry",
        "german": "Trocken",
        "french": "Sec"
      },
      {
        "malagasy": "Varatra",
        "english": "Lightning",
        "german": "Blitz",
        "french": "Éclair"
      },
      {
        "malagasy": "Kotroka",
        "english": "Thunder",
        "german": "Donner",
        "french": "Tonnerre"
      },
      {
        "malagasy": "Antsiben'ny andro",
        "english": "Rainbow",
        "german": "Regenbogen",
        "french": "Arc-en-ciel"
      },
      {
        "malagasy": "Andro",
        "english": "Day / Weather",
        "german": "Tag / Wetter",
        "french": "Jour / Temps"
      },
      {
        "malagasy": "Alina",
        "english": "Night",
        "german": "Nacht",
        "french": "Nuit"
      },
      {
        "malagasy": "Maraina",
        "english": "Morning",
        "german": "Morgen",
        "french": "Matin"
      },
      {
        "malagasy": "Hariva",
        "english": "Evening",
        "german": "Abend",
        "french": "Soir"
      },
      {
        "malagasy": "Hafanana",
        "english": "Heat / Temperature",
        "german": "Hitze / Temperatur",
        "french": "Chaleur / Température"
      },
      {
        "malagasy": "Hatsiaka",
        "english": "Coldness",
        "german": "Kälte",
        "french": "Froid"
      },
      {
        "malagasy": "Erika",
        "english": "Drizzle",
        "german": "Nieselregen",
        "french": "Bruine"
      },
      {
        "malagasy": "Ranomandry",
        "english": "Ice / Frost",
        "german": "Eis / Frost",
        "french": "Glace / Gel"
      },
      {
        "malagasy": "Zavona",
        "english": "Fog / Mist",
        "german": "Nebel",
        "french": "Brouillard / Brume"
      },
      {
        "malagasy": "Tselatra",
        "english": "Flash (of lightning)",
        "german": "Blitz",
        "french": "Éclair"
      },
      {
        "malagasy": "Tondra-drano",
        "english": "Flood",
        "german": "Überschwemmung",
        "french": "Inondation"
      },
      {
        "malagasy": "Main-tany",
        "english": "Drought",
        "german": "Dürre",
        "french": "Sécheresse"
      },
      {
        "malagasy": "Taom-pambolena",
        "english": "Farming season",
        "german": "Anbausaison",
        "french": "Saison agricole"
      },
      {
        "malagasy": "Taona",
        "english": "Season / Year",
        "german": "Jahreszeit / Jahr",
        "french": "Saison / Année"
      }
    ]
  },
  {
    "id": "clothing",
    "title": "Clothing & Dress",
    "emoji": "👕",
    "category": "vocabulary",
    "description": "Clothes, accessories, and the traditional Malagasy lamba.",
    "cards": [
      {
        "front": "Shirt",
        "back": "Lobaka",
        "front_de": "Hemd",
        "front_fr": "Chemise"
      },
      {
        "front": "Pants",
        "back": "Pataloha",
        "front_de": "Hose",
        "front_fr": "Pantalon"
      },
      {
        "front": "Dress",
        "back": "Akanjo",
        "front_de": "Kleid",
        "front_fr": "Robe"
      },
      {
        "front": "Shoes",
        "back": "Kiraro",
        "front_de": "Schuhe",
        "front_fr": "Chaussures"
      },
      {
        "front": "Hat",
        "back": "Satroka",
        "front_de": "Hut",
        "front_fr": "Chapeau"
      },
      {
        "front": "Traditional wrap cloth",
        "back": "Lamba",
        "front_de": "Traditioneller Wickelstoff",
        "front_fr": "Étoffe traditionnelle"
      },
      {
        "front": "Skirt",
        "back": "Zipo",
        "front_de": "Rock",
        "front_fr": "Jupe"
      },
      {
        "front": "Socks",
        "back": "Ba kiraro",
        "front_de": "Socken",
        "front_fr": "Chaussettes"
      },
      {
        "front": "Jacket / Coat",
        "back": "Palitao",
        "front_de": "Jacke / Mantel",
        "front_fr": "Veste / Manteau"
      },
      {
        "front": "Belt",
        "back": "Fehikibo",
        "front_de": "Gürtel",
        "front_fr": "Ceinture"
      },
      {
        "front": "Watch",
        "back": "Famantaranandro",
        "front_de": "Uhr",
        "front_fr": "Montre"
      },
      {
        "front": "Glasses",
        "back": "Solomaso",
        "front_de": "Brille",
        "front_fr": "Lunettes"
      },
      {
        "front": "Ring",
        "back": "Peratra",
        "front_de": "Ring",
        "front_fr": "Bague"
      },
      {
        "front": "Necklace",
        "back": "Rojo",
        "front_de": "Halskette",
        "front_fr": "Collier"
      },
      {
        "front": "I want to try this on.",
        "back": "Te hanandrana ity aho.",
        "front_de": "Ich möchte das anprobieren.",
        "front_fr": "Je veux l'essayer."
      }
    ],
    "vocab": [
      {
        "malagasy": "Lobaka",
        "english": "Shirt",
        "german": "Hemd",
        "french": "Chemise"
      },
      {
        "malagasy": "Pataloha",
        "english": "Pants",
        "german": "Hose",
        "french": "Pantalon"
      },
      {
        "malagasy": "Akanjo",
        "english": "Dress / Clothing",
        "german": "Kleid / Kleidung",
        "french": "Robe / Vêtement"
      },
      {
        "malagasy": "Kiraro",
        "english": "Shoes",
        "german": "Schuhe",
        "french": "Chaussures"
      },
      {
        "malagasy": "Satroka",
        "english": "Hat",
        "german": "Hut",
        "french": "Chapeau"
      },
      {
        "malagasy": "Lamba",
        "english": "Traditional wrap cloth",
        "german": "Traditionelles Wickeltuch",
        "french": "Lamba traditionnel"
      },
      {
        "malagasy": "Zipo",
        "english": "Skirt",
        "german": "Rock",
        "french": "Jupe"
      },
      {
        "malagasy": "Ba kiraro",
        "english": "Socks",
        "german": "Socken",
        "french": "Chaussettes"
      },
      {
        "malagasy": "Palitao",
        "english": "Jacket / Coat",
        "german": "Jacke / Mantel",
        "french": "Veste / Manteau"
      },
      {
        "malagasy": "Fehikibo",
        "english": "Belt",
        "german": "Gürtel",
        "french": "Ceinture"
      },
      {
        "malagasy": "Famantaranandro",
        "english": "Watch / Clock",
        "german": "Uhr",
        "french": "Montre / Horloge"
      },
      {
        "malagasy": "Solomaso",
        "english": "Glasses",
        "german": "Brille",
        "french": "Lunettes"
      },
      {
        "malagasy": "Peratra",
        "english": "Ring",
        "german": "Ring",
        "french": "Bague"
      },
      {
        "malagasy": "Rojo",
        "english": "Necklace",
        "german": "Halskette",
        "french": "Collier"
      },
      {
        "malagasy": "Kravaty",
        "english": "Tie",
        "german": "Krawatte",
        "french": "Cravate"
      },
      {
        "malagasy": "Akanjo ba",
        "english": "Sweater",
        "german": "Pullover",
        "french": "Pull"
      },
      {
        "malagasy": "Akanjo aro orana",
        "english": "Raincoat",
        "german": "Regenmantel",
        "french": "Imperméable"
      },
      {
        "malagasy": "Lambamena",
        "english": "Silk burial shroud",
        "german": "Seidenes Leichentuch",
        "french": "Linceul en soie"
      },
      {
        "malagasy": "Lamba landy",
        "english": "Silk cloth",
        "german": "Seidenstoff",
        "french": "Tissu en soie"
      },
      {
        "malagasy": "Tantely",
        "english": "Honey-colored (cloth)",
        "german": "Honigfarben (Stoff)",
        "french": "Couleur miel (tissu)"
      },
      {
        "malagasy": "Manjaitra",
        "english": "To sew",
        "german": "Nähen",
        "french": "Coudre"
      },
      {
        "malagasy": "Mpanjaitra",
        "english": "Tailor",
        "german": "Schneider",
        "french": "Tailleur"
      },
      {
        "malagasy": "Hanao",
        "english": "To wear",
        "german": "Tragen",
        "french": "Porter"
      },
      {
        "malagasy": "Manala",
        "english": "To take off",
        "german": "Ausziehen",
        "french": "Enlever"
      },
      {
        "malagasy": "Hanandrana",
        "english": "To try on",
        "german": "Anprobieren",
        "french": "Essayer"
      },
      {
        "malagasy": "Refy",
        "english": "Size / Measurement",
        "german": "Größe / Maß",
        "french": "Taille / Mesure"
      },
      {
        "malagasy": "Kely",
        "english": "Small",
        "german": "Klein",
        "french": "Petit"
      },
      {
        "malagasy": "Lehibe",
        "english": "Large",
        "german": "Groß",
        "french": "Grand"
      },
      {
        "malagasy": "Antony",
        "english": "Medium",
        "german": "Mittel",
        "french": "Moyen"
      },
      {
        "malagasy": "Loko",
        "english": "Color",
        "german": "Farbe",
        "french": "Couleur"
      }
    ]
  },
  {
    "id": "animals",
    "title": "Animals & Nature",
    "emoji": "🐒",
    "category": "vocabulary",
    "description": "Madagascar's unique wildlife, domestic animals, and nature vocabulary.",
    "cards": [
      {
        "front": "Lemur",
        "back": "Maky / Gidro",
        "front_de": "Lemur",
        "front_fr": "Lémur"
      },
      {
        "front": "Chameleon",
        "back": "Tanalahy",
        "front_de": "Chamäleon",
        "front_fr": "Caméléon"
      },
      {
        "front": "Dog",
        "back": "Alika",
        "front_de": "Hund",
        "front_fr": "Chien"
      },
      {
        "front": "Cat",
        "back": "Saka",
        "front_de": "Katze",
        "front_fr": "Chat"
      },
      {
        "front": "Cow / Zebu",
        "back": "Omby",
        "front_de": "Kuh / Zebu",
        "front_fr": "Vache / Zébu"
      },
      {
        "front": "Chicken",
        "back": "Akoho",
        "front_de": "Huhn",
        "front_fr": "Poulet"
      },
      {
        "front": "Bird",
        "back": "Vorona",
        "front_de": "Vogel",
        "front_fr": "Oiseau"
      },
      {
        "front": "Fish",
        "back": "Trondro",
        "front_de": "Fisch",
        "front_fr": "Poisson"
      },
      {
        "front": "Snake",
        "back": "Bibilava",
        "front_de": "Schlange",
        "front_fr": "Serpent"
      },
      {
        "front": "Frog",
        "back": "Sahona",
        "front_de": "Frosch",
        "front_fr": "Grenouille"
      },
      {
        "front": "Crocodile",
        "back": "Voay",
        "front_de": "Krokodil",
        "front_fr": "Crocodile"
      },
      {
        "front": "Tree",
        "back": "Hazo",
        "front_de": "Baum",
        "front_fr": "Arbre"
      },
      {
        "front": "Forest",
        "back": "Ala",
        "front_de": "Wald",
        "front_fr": "Forêt"
      },
      {
        "front": "River",
        "back": "Renirano",
        "front_de": "Fluss",
        "front_fr": "Rivière"
      },
      {
        "front": "Mountain",
        "back": "Tendrombohitra",
        "front_de": "Berg",
        "front_fr": "Montagne"
      },
      {
        "front": "Baobab tree",
        "back": "Reniala",
        "front_de": "Baobab-Baum",
        "front_fr": "Arbre baobab"
      },
      {
        "front": "Sea / Ocean",
        "back": "Ranomasina",
        "front_de": "Meer / Ozean",
        "front_fr": "Mer / Océan"
      },
      {
        "front": "Flower",
        "back": "Voninkazo",
        "front_de": "Blume",
        "front_fr": "Fleur"
      },
      {
        "front": "Rice field",
        "back": "Tanimbary",
        "front_de": "Reisfeld",
        "front_fr": "Rizière"
      },
      {
        "front": "Stone / Rock",
        "back": "Vato",
        "front_de": "Stein / Fels",
        "front_fr": "Pierre / Roche"
      }
    ],
    "vocab": [
      {
        "malagasy": "Maky",
        "english": "Lemur (ring-tailed)",
        "german": "Lemur (Katta)",
        "french": "Lémur (à queue annelée)"
      },
      {
        "malagasy": "Gidro",
        "english": "Lemur (general)",
        "german": "Lemur (allgemein)",
        "french": "Lémur (général)"
      },
      {
        "malagasy": "Sifaka",
        "english": "Sifaka lemur",
        "german": "Sifaka",
        "french": "Sifaka"
      },
      {
        "malagasy": "Indri",
        "english": "Indri (largest lemur)",
        "german": "Indri (größter Lemur)",
        "french": "Indri (plus grand lémur)"
      },
      {
        "malagasy": "Tanalahy",
        "english": "Chameleon",
        "german": "Chamäleon",
        "french": "Caméléon"
      },
      {
        "malagasy": "Alika",
        "english": "Dog",
        "german": "Hund",
        "french": "Chien"
      },
      {
        "malagasy": "Saka",
        "english": "Cat",
        "german": "Katze",
        "french": "Chat"
      },
      {
        "malagasy": "Omby",
        "english": "Cow / Zebu",
        "german": "Kuh / Zebu",
        "french": "Vache / Zébu"
      },
      {
        "malagasy": "Akoho",
        "english": "Chicken",
        "german": "Huhn",
        "french": "Poulet"
      },
      {
        "malagasy": "Vorona",
        "english": "Bird",
        "german": "Vogel",
        "french": "Oiseau"
      },
      {
        "malagasy": "Trondro",
        "english": "Fish",
        "german": "Fisch",
        "french": "Poisson"
      },
      {
        "malagasy": "Bibilava",
        "english": "Snake",
        "german": "Schlange",
        "french": "Serpent"
      },
      {
        "malagasy": "Sahona",
        "english": "Frog",
        "german": "Frosch",
        "french": "Grenouille"
      },
      {
        "malagasy": "Voay",
        "english": "Crocodile",
        "german": "Krokodil",
        "french": "Crocodile"
      },
      {
        "malagasy": "Biby",
        "english": "Animal",
        "german": "Tier",
        "french": "Animal"
      },
      {
        "malagasy": "Bibikely",
        "english": "Insect",
        "german": "Insekt",
        "french": "Insecte"
      },
      {
        "malagasy": "Tantely",
        "english": "Bee / Honey",
        "german": "Biene / Honig",
        "french": "Abeille / Miel"
      },
      {
        "malagasy": "Lalitra",
        "english": "Fly",
        "german": "Fliege",
        "french": "Mouche"
      },
      {
        "malagasy": "Moka",
        "english": "Mosquito",
        "german": "Mücke",
        "french": "Moustique"
      },
      {
        "malagasy": "Hazo",
        "english": "Tree / Wood",
        "german": "Baum / Holz",
        "french": "Arbre / Bois"
      },
      {
        "malagasy": "Ala",
        "english": "Forest",
        "german": "Wald",
        "french": "Forêt"
      },
      {
        "malagasy": "Renirano",
        "english": "River",
        "german": "Fluss",
        "french": "Rivière"
      },
      {
        "malagasy": "Tendrombohitra",
        "english": "Mountain",
        "german": "Berg",
        "french": "Montagne"
      },
      {
        "malagasy": "Reniala",
        "english": "Baobab tree",
        "german": "Baobab",
        "french": "Baobab"
      },
      {
        "malagasy": "Ranomasina",
        "english": "Sea / Ocean",
        "german": "Meer / Ozean",
        "french": "Mer / Océan"
      },
      {
        "malagasy": "Voninkazo",
        "english": "Flower",
        "german": "Blume",
        "french": "Fleur"
      },
      {
        "malagasy": "Tanimbary",
        "english": "Rice field",
        "german": "Reisfeld",
        "french": "Rizière"
      },
      {
        "malagasy": "Vato",
        "english": "Stone / Rock",
        "german": "Stein / Fels",
        "french": "Pierre / Rocher"
      },
      {
        "malagasy": "Fasika",
        "english": "Sand",
        "german": "Sand",
        "french": "Sable"
      },
      {
        "malagasy": "Farihy",
        "english": "Lake",
        "german": "See",
        "french": "Lac"
      },
      {
        "malagasy": "Riandriana",
        "english": "Waterfall",
        "german": "Wasserfall",
        "french": "Cascade"
      },
      {
        "malagasy": "Tany",
        "english": "Earth / Soil",
        "german": "Erde / Boden",
        "french": "Terre / Sol"
      },
      {
        "malagasy": "Ahitra",
        "english": "Grass",
        "german": "Gras",
        "french": "Herbe"
      },
      {
        "malagasy": "Ravina",
        "english": "Leaf",
        "german": "Blatt",
        "french": "Feuille"
      },
      {
        "malagasy": "Faka",
        "english": "Root",
        "german": "Wurzel",
        "french": "Racine"
      }
    ]
  },
  {
    "id": "money",
    "title": "Money & Practical Numbers",
    "emoji": "💵",
    "category": "vocabulary",
    "description": "Ariary currency, counting money, and practical number usage in daily life.",
    "cards": [
      {
        "front": "Money",
        "back": "Vola",
        "front_de": "Geld",
        "front_fr": "Argent"
      },
      {
        "front": "Ariary (currency)",
        "back": "Ariary",
        "front_de": "Ariary (Währung)",
        "front_fr": "Ariary (monnaie)"
      },
      {
        "front": "How much is it?",
        "back": "Ohatrinona izy?",
        "front_de": "Wie viel kostet es?",
        "front_fr": "Combien ça coûte ?"
      },
      {
        "front": "It costs 5,000 Ariary.",
        "back": "Dimy arivo ariary ny vidiny.",
        "front_de": "Es kostet 5.000 Ariary.",
        "front_fr": "Ça coûte 5 000 Ariary."
      },
      {
        "front": "Do you have change?",
        "back": "Manana vola madinika ve ianao?",
        "front_de": "Haben Sie Wechselgeld?",
        "front_fr": "Avez-vous de la monnaie ?"
      },
      {
        "front": "I only have a 10,000 note.",
        "back": "Iray alina fotsiny no volako.",
        "front_de": "Ich habe nur einen 10.000er-Schein.",
        "front_fr": "Je n'ai qu'un billet de 10 000."
      },
      {
        "front": "Keep the change.",
        "back": "Avelao ny ambiny.",
        "front_de": "Behalten Sie das Wechselgeld.",
        "front_fr": "Gardez la monnaie."
      },
      {
        "front": "That's too expensive for me.",
        "back": "Lafo loatra ho ahy izany.",
        "front_de": "Das ist mir zu teuer.",
        "front_fr": "C'est trop cher pour moi."
      },
      {
        "front": "What is your best price?",
        "back": "Ohatrinona ny vidiny farany?",
        "front_de": "Was ist Ihr bester Preis?",
        "front_fr": "Quel est votre meilleur prix ?"
      },
      {
        "front": "I'll give you 2,000.",
        "back": "Homeko roa arivo ianao.",
        "front_de": "Ich gebe Ihnen 2.000.",
        "front_fr": "Je vous donne 2 000."
      },
      {
        "front": "How much do I owe you?",
        "back": "Ohatrinona ny trosako?",
        "front_de": "Wie viel schulde ich Ihnen?",
        "front_fr": "Combien je vous dois ?"
      },
      {
        "front": "One hundred",
        "back": "Zato",
        "front_de": "Einhundert",
        "front_fr": "Cent"
      },
      {
        "front": "One thousand",
        "back": "Arivo",
        "front_de": "Eintausend",
        "front_fr": "Mille"
      },
      {
        "front": "Ten thousand",
        "back": "Iray alina",
        "front_de": "Zehntausend",
        "front_fr": "Dix mille"
      },
      {
        "front": "One hundred thousand",
        "back": "Iray hetsy",
        "front_de": "Einhunderttausend",
        "front_fr": "Cent mille"
      }
    ],
    "vocab": [
      {
        "malagasy": "Vola",
        "english": "Money",
        "german": "Geld",
        "french": "Argent"
      },
      {
        "malagasy": "Ariary",
        "english": "Ariary (MGA currency)",
        "german": "Ariary (MGA Währung)",
        "french": "Ariary (monnaie MGA)"
      },
      {
        "malagasy": "Vola madinika",
        "english": "Small change / Coins",
        "german": "Kleingeld / Münzen",
        "french": "Petite monnaie / Pièces"
      },
      {
        "malagasy": "Vola taratasy",
        "english": "Paper money / Bills",
        "german": "Papiergeld / Scheine",
        "french": "Billets"
      },
      {
        "malagasy": "Ambiny",
        "english": "Change (remainder)",
        "german": "Wechselgeld",
        "french": "Monnaie (reste)"
      },
      {
        "malagasy": "Trosa",
        "english": "Debt / What is owed",
        "german": "Schulden",
        "french": "Dette / Ce qui est dû"
      },
      {
        "malagasy": "Mandoa",
        "english": "To pay",
        "german": "Bezahlen",
        "french": "Payer"
      },
      {
        "malagasy": "Mampindrana",
        "english": "To lend",
        "german": "Verleihen",
        "french": "Prêter"
      },
      {
        "malagasy": "Mindrana",
        "english": "To borrow",
        "german": "Ausleihen",
        "french": "Emprunter"
      },
      {
        "malagasy": "Mitsitsy",
        "english": "To save (money)",
        "german": "Sparen",
        "french": "Économiser (argent)"
      },
      {
        "malagasy": "Mandany",
        "english": "To spend",
        "german": "Ausgeben",
        "french": "Dépenser"
      },
      {
        "malagasy": "Banky",
        "english": "Bank",
        "german": "Bank",
        "french": "Banque"
      },
      {
        "malagasy": "Zato",
        "english": "One hundred",
        "german": "Einhundert",
        "french": "Cent"
      },
      {
        "malagasy": "Arivo",
        "english": "One thousand",
        "german": "Eintausend",
        "french": "Mille"
      },
      {
        "malagasy": "Iray alina",
        "english": "Ten thousand",
        "german": "Zehntausend",
        "french": "Dix mille"
      },
      {
        "malagasy": "Iray hetsy",
        "english": "One hundred thousand",
        "german": "Einhunderttausend",
        "french": "Cent mille"
      },
      {
        "malagasy": "Tapitrisa",
        "english": "Million",
        "german": "Million",
        "french": "Million"
      },
      {
        "malagasy": "Vidiny farany",
        "english": "Final price",
        "german": "Endpreis",
        "french": "Prix final"
      },
      {
        "malagasy": "Miady varotra",
        "english": "To bargain",
        "german": "Feilschen",
        "french": "Marchander"
      },
      {
        "malagasy": "Vidina",
        "english": "To be bought / Cost",
        "german": "Gekauft werden / Kosten",
        "french": "Être acheté / Coûter"
      },
      {
        "malagasy": "Mivarotra",
        "english": "To sell",
        "german": "Verkaufen",
        "french": "Vendre"
      },
      {
        "malagasy": "Varo-mpanjifa",
        "english": "Retail",
        "german": "Einzelhandel",
        "french": "Détail"
      },
      {
        "malagasy": "Varo-mpaninjara",
        "english": "Wholesale",
        "german": "Großhandel",
        "french": "Gros"
      },
      {
        "malagasy": "Fidiram-bola",
        "english": "Income",
        "german": "Einkommen",
        "french": "Revenu"
      },
      {
        "malagasy": "Fandaniana",
        "english": "Expense",
        "german": "Ausgabe",
        "french": "Dépense"
      },
      {
        "malagasy": "Karama",
        "english": "Salary / Wage",
        "german": "Gehalt / Lohn",
        "french": "Salaire"
      },
      {
        "malagasy": "Sarany",
        "english": "Fee / Charge",
        "german": "Gebühr",
        "french": "Frais / Tarif"
      },
      {
        "malagasy": "Maimaim-poana",
        "english": "Free (no cost)",
        "german": "Kostenlos",
        "french": "Gratuit"
      },
      {
        "malagasy": "Antony",
        "english": "Reasonable (price)",
        "german": "Angemessen (Preis)",
        "french": "Raisonnable (prix)"
      },
      {
        "malagasy": "Mirary",
        "english": "Fair / Just (price)",
        "german": "Fair / Gerecht (Preis)",
        "french": "Juste (prix)"
      }
    ]
  },
  {
    "id": "time",
    "title": "Time & Scheduling",
    "emoji": "🕐",
    "category": "conversation",
    "description": "Telling time, making appointments, and scheduling in Malagasy.",
    "cards": [
      {
        "front": "What time is it?",
        "back": "Amin'ny firy izao?",
        "front_de": "Wie spät ist es?",
        "front_fr": "Quelle heure est-il ?"
      },
      {
        "front": "It's 3 o'clock.",
        "back": "Amin'ny telo izao.",
        "front_de": "Es ist 3 Uhr.",
        "front_fr": "Il est 3 heures."
      },
      {
        "front": "At what time?",
        "back": "Amin'ny firy?",
        "front_de": "Um wie viel Uhr?",
        "front_fr": "À quelle heure ?"
      },
      {
        "front": "In the morning",
        "back": "Amin'ny maraina",
        "front_de": "Am Morgen",
        "front_fr": "Le matin"
      },
      {
        "front": "In the afternoon",
        "back": "Amin'ny tolakandro",
        "front_de": "Am Nachmittag",
        "front_fr": "L'après-midi"
      },
      {
        "front": "In the evening",
        "back": "Amin'ny hariva",
        "front_de": "Am Abend",
        "front_fr": "Le soir"
      },
      {
        "front": "At night",
        "back": "Amin'ny alina",
        "front_de": "In der Nacht",
        "front_fr": "La nuit"
      },
      {
        "front": "Wait a moment.",
        "back": "Andraso kely.",
        "front_de": "Warten Sie einen Moment.",
        "front_fr": "Attendez un moment."
      },
      {
        "front": "I'll be back soon.",
        "back": "Hiverina tsy ho ela aho.",
        "front_de": "Ich bin bald zurück.",
        "front_fr": "Je reviens bientôt."
      },
      {
        "front": "How long does it take?",
        "back": "Hafiriana izany?",
        "front_de": "Wie lange dauert es?",
        "front_fr": "Combien de temps ça prend ?"
      },
      {
        "front": "It takes one hour.",
        "back": "Maharitra adiny iray.",
        "front_de": "Es dauert eine Stunde.",
        "front_fr": "Ça prend une heure."
      },
      {
        "front": "I am late.",
        "back": "Tara aho.",
        "front_de": "Ich bin spät.",
        "front_fr": "Je suis en retard."
      },
      {
        "front": "Be on time!",
        "back": "Tonga ara-potoana!",
        "front_de": "Seien Sie pünktlich!",
        "front_fr": "Soyez à l'heure !"
      },
      {
        "front": "See you tomorrow at 8.",
        "back": "Mandrosoa rahampitso amin'ny valo.",
        "front_de": "Bis morgen um 8.",
        "front_fr": "À demain à 8 heures."
      },
      {
        "front": "What day is today?",
        "back": "Andro inona androany?",
        "front_de": "Welcher Tag ist heute?",
        "front_fr": "Quel jour sommes-nous aujourd'hui ?"
      }
    ],
    "vocab": [
      {
        "malagasy": "Amin'ny firy",
        "english": "At what time",
        "german": "Um wie viel Uhr",
        "french": "À quelle heure"
      },
      {
        "malagasy": "Ora",
        "english": "Hour / Time",
        "german": "Stunde / Zeit",
        "french": "Heure / Temps"
      },
      {
        "malagasy": "Minitra",
        "english": "Minute",
        "german": "Minute",
        "french": "Minute"
      },
      {
        "malagasy": "Segondra",
        "english": "Second",
        "german": "Sekunde",
        "french": "Seconde"
      },
      {
        "malagasy": "Adiny",
        "english": "Hour (duration)",
        "german": "Stunde (Dauer)",
        "french": "Heure (durée)"
      },
      {
        "malagasy": "Hafiriana",
        "english": "How long",
        "german": "Wie lange",
        "french": "Combien de temps"
      },
      {
        "malagasy": "Maharitra",
        "english": "To last / take (time)",
        "german": "Dauern",
        "french": "Durer / Prendre (temps)"
      },
      {
        "malagasy": "Tara",
        "english": "Late",
        "german": "Spät",
        "french": "En retard"
      },
      {
        "malagasy": "Aloha",
        "english": "Early",
        "german": "Früh",
        "french": "Tôt"
      },
      {
        "malagasy": "Ara-potoana",
        "english": "On time",
        "german": "Pünktlich",
        "french": "À l'heure"
      },
      {
        "malagasy": "Fotoana",
        "english": "Time / Moment",
        "german": "Zeit / Moment",
        "french": "Temps / Moment"
      },
      {
        "malagasy": "Famandrihana",
        "english": "Appointment / Reservation",
        "german": "Termin / Reservierung",
        "french": "Rendez-vous / Réservation"
      },
      {
        "malagasy": "Fivoriana",
        "english": "Meeting",
        "german": "Treffen",
        "french": "Réunion"
      },
      {
        "malagasy": "Manafika",
        "english": "To set (a time)",
        "german": "Festlegen (Zeit)",
        "french": "Fixer (une heure)"
      },
      {
        "malagasy": "Miandry",
        "english": "To wait",
        "german": "Warten",
        "french": "Attendre"
      },
      {
        "malagasy": "Andraso",
        "english": "Wait!",
        "german": "Warte!",
        "french": "Attendez !"
      },
      {
        "malagasy": "Hiverina",
        "english": "To return",
        "german": "Zurückkehren",
        "french": "Revenir"
      },
      {
        "malagasy": "Tsy ho ela",
        "english": "Soon / Not long",
        "german": "Bald / Nicht lang",
        "french": "Bientôt / Pas longtemps"
      },
      {
        "malagasy": "Amin'izao",
        "english": "Now / At this moment",
        "german": "Jetzt",
        "french": "Maintenant"
      },
      {
        "malagasy": "Aorian'izay",
        "english": "After that / Later",
        "german": "Danach / Später",
        "french": "Après / Plus tard"
      },
      {
        "malagasy": "Talohan'izay",
        "english": "Before that",
        "german": "Davor",
        "french": "Avant cela"
      },
      {
        "malagasy": "Isan'andro",
        "english": "Daily / Every day",
        "german": "Täglich",
        "french": "Quotidien / Chaque jour"
      },
      {
        "malagasy": "Isan-kerinandro",
        "english": "Weekly",
        "german": "Wöchentlich",
        "french": "Hebdomadaire"
      },
      {
        "malagasy": "Isam-bolana",
        "english": "Monthly",
        "german": "Monatlich",
        "french": "Mensuel"
      },
      {
        "malagasy": "Isan-taona",
        "english": "Yearly",
        "german": "Jährlich",
        "french": "Annuel"
      },
      {
        "malagasy": "Manaraka",
        "english": "Next",
        "german": "Nächste",
        "french": "Prochain"
      },
      {
        "malagasy": "Teo aloha",
        "english": "Previous",
        "german": "Vorherige",
        "french": "Précédent"
      },
      {
        "malagasy": "Amin'ny manaraka",
        "english": "Next time",
        "german": "Nächstes Mal",
        "french": "La prochaine fois"
      },
      {
        "malagasy": "Mialoha",
        "english": "In advance",
        "german": "Im Voraus",
        "french": "À l'avance"
      },
      {
        "malagasy": "Aoriana",
        "english": "Afterwards",
        "german": "Danach",
        "french": "Ensuite"
      }
    ]
  },
  {
    "id": "comparisons",
    "title": "Comparisons & Superlatives",
    "emoji": "⚖️",
    "category": "grammar",
    "description": "Comparing things — better/worse, cheaper/more expensive, biggest/smallest.",
    "cards": [
      {
        "front": "Bigger than",
        "back": "Lehibe kokoa noho",
        "front_de": "Größer als",
        "front_fr": "Plus grand que"
      },
      {
        "front": "Smaller than",
        "back": "Kely kokoa noho",
        "front_de": "Kleiner als",
        "front_fr": "Plus petit que"
      },
      {
        "front": "Better than",
        "back": "Tsara kokoa noho",
        "front_de": "Besser als",
        "front_fr": "Meilleur que"
      },
      {
        "front": "Worse than",
        "back": "Ratsy kokoa noho",
        "front_de": "Schlechter als",
        "front_fr": "Pire que"
      },
      {
        "front": "Cheaper than",
        "back": "Mora kokoa noho",
        "front_de": "Billiger als",
        "front_fr": "Moins cher que"
      },
      {
        "front": "More expensive than",
        "back": "Lafo kokoa noho",
        "front_de": "Teurer als",
        "front_fr": "Plus cher que"
      },
      {
        "front": "The biggest",
        "back": "Lehibe indrindra",
        "front_de": "Am größten",
        "front_fr": "Le plus grand"
      },
      {
        "front": "The smallest",
        "back": "Kely indrindra",
        "front_de": "Am kleinsten",
        "front_fr": "Le plus petit"
      },
      {
        "front": "The best",
        "back": "Tsara indrindra",
        "front_de": "Am besten",
        "front_fr": "Le meilleur"
      },
      {
        "front": "The worst",
        "back": "Ratsy indrindra",
        "front_de": "Am schlechtesten",
        "front_fr": "Le pire"
      },
      {
        "front": "The cheapest",
        "back": "Mora indrindra",
        "front_de": "Am billigsten",
        "front_fr": "Le moins cher"
      },
      {
        "front": "The most expensive",
        "back": "Lafo indrindra",
        "front_de": "Am teuersten",
        "front_fr": "Le plus cher"
      },
      {
        "front": "This is better than that.",
        "back": "Tsara kokoa noho izany ity.",
        "front_de": "Das ist besser als das.",
        "front_fr": "Ceci est meilleur que cela."
      },
      {
        "front": "Same as",
        "back": "Mitovy amin'ny",
        "front_de": "Gleich wie",
        "front_fr": "Même que"
      },
      {
        "front": "Different from",
        "back": "Hafa noho",
        "front_de": "Anders als / Verschieden von",
        "front_fr": "Différent de"
      },
      {
        "front": "Too much / Too many",
        "back": "Be loatra",
        "front_de": "Zu viel / Zu viele",
        "front_fr": "Trop"
      },
      {
        "front": "More (quantity)",
        "back": "Maro kokoa",
        "front_de": "Mehr (Menge)",
        "front_fr": "Plus (quantité)"
      },
      {
        "front": "Less (quantity)",
        "back": "Vitsy kokoa",
        "front_de": "Weniger (Menge)",
        "front_fr": "Moins (quantité)"
      },
      {
        "front": "Almost the same",
        "back": "Saika mitovy",
        "front_de": "Fast das Gleiche",
        "front_fr": "Presque pareil"
      },
      {
        "front": "Much better",
        "back": "Tsara lavitra",
        "front_de": "Viel besser",
        "front_fr": "Beaucoup mieux"
      }
    ],
    "vocab": [
      {
        "malagasy": "Kokoa",
        "english": "More (comparative)",
        "german": "Mehr (Komparativ)",
        "french": "Plus (comparatif)"
      },
      {
        "malagasy": "Noho",
        "english": "Than",
        "german": "Als",
        "french": "Que"
      },
      {
        "malagasy": "Indrindra",
        "english": "Most (superlative)",
        "german": "Am meisten (Superlativ)",
        "french": "Le plus (superlatif)"
      },
      {
        "malagasy": "Mitovy",
        "english": "Same / Equal",
        "german": "Gleich",
        "french": "Même / Égal"
      },
      {
        "malagasy": "Hafa",
        "english": "Different",
        "german": "Verschieden",
        "french": "Différent"
      },
      {
        "malagasy": "Be loatra",
        "english": "Too much / Excessive",
        "german": "Zu viel / Übermäßig",
        "french": "Trop / Excessif"
      },
      {
        "malagasy": "Lehibe",
        "english": "Big",
        "german": "Groß",
        "french": "Grand"
      },
      {
        "malagasy": "Kely",
        "english": "Small",
        "german": "Klein",
        "french": "Petit"
      },
      {
        "malagasy": "Tsara",
        "english": "Good",
        "german": "Gut",
        "french": "Bon"
      },
      {
        "malagasy": "Ratsy",
        "english": "Bad",
        "german": "Schlecht",
        "french": "Mauvais"
      },
      {
        "malagasy": "Mora",
        "english": "Cheap / Easy",
        "german": "Billig / Einfach",
        "french": "Bon marché / Facile"
      },
      {
        "malagasy": "Lafo",
        "english": "Expensive",
        "german": "Teuer",
        "french": "Cher"
      },
      {
        "malagasy": "Maro",
        "english": "Many",
        "german": "Viele",
        "french": "Beaucoup"
      },
      {
        "malagasy": "Vitsy",
        "english": "Few",
        "german": "Wenige",
        "french": "Peu"
      },
      {
        "malagasy": "Lava",
        "english": "Long / Tall",
        "german": "Lang / Groß",
        "french": "Long / Grand"
      },
      {
        "malagasy": "Fohy",
        "english": "Short",
        "german": "Kurz",
        "french": "Court"
      },
      {
        "malagasy": "Haingana",
        "english": "Fast",
        "german": "Schnell",
        "french": "Rapide"
      },
      {
        "malagasy": "Miadana",
        "english": "Slow",
        "german": "Langsam",
        "french": "Lent"
      },
      {
        "malagasy": "Mavesatra",
        "english": "Heavy",
        "german": "Schwer",
        "french": "Lourd"
      },
      {
        "malagasy": "Maivana",
        "english": "Light (weight)",
        "german": "Leicht",
        "french": "Léger"
      },
      {
        "malagasy": "Vaovao",
        "english": "New",
        "german": "Neu",
        "french": "Nouveau"
      },
      {
        "malagasy": "Taloha",
        "english": "Old",
        "german": "Alt",
        "french": "Vieux"
      },
      {
        "malagasy": "Madio",
        "english": "Clean",
        "german": "Sauber",
        "french": "Propre"
      },
      {
        "malagasy": "Maloto",
        "english": "Dirty",
        "german": "Schmutzig",
        "french": "Sale"
      },
      {
        "malagasy": "Saika",
        "english": "Almost",
        "german": "Fast",
        "french": "Presque"
      },
      {
        "malagasy": "Lavitra",
        "english": "Far / Much (intensifier)",
        "german": "Weit / Viel (Verstärker)",
        "french": "Loin / Beaucoup (intensifieur)"
      },
      {
        "malagasy": "Somary",
        "english": "Somewhat / A bit",
        "german": "Etwas / Ein bisschen",
        "french": "Un peu"
      },
      {
        "malagasy": "Tena",
        "english": "Really / Very",
        "german": "Wirklich / Sehr",
        "french": "Vraiment / Très"
      },
      {
        "malagasy": "Mifanohitra",
        "english": "Opposite",
        "german": "Gegenteil",
        "french": "Opposé"
      },
      {
        "malagasy": "Mampitaha",
        "english": "To compare",
        "german": "Vergleichen",
        "french": "Comparer"
      }
    ]
  }
];
