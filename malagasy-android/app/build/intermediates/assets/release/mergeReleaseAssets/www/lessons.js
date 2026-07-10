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
      { front: "Malagasy Origin", back: "Austronesian language from Southeast Asia, settled Madagascar ~2,000 years ago." },
      { front: "Speakers", back: "Over 14 million speakers across Madagascar and Mayotte." },
      { front: "Dialects", back: "18 regional dialects. Standard = Merina (Antananarivo)." },
      { front: "Alphabet", back: "Latin alphabet. No C, Q, U, W, X. Pronunciation is phonetic." },
      { front: "Word Order", back: "VOS — Verb-Object-Subject. e.g. 'Mihinana vary aho' = Eat rice I." },
      { front: "No verb 'to be'", back: "Adjectives imply 'to be'. 'Mangatsiaka izy' = Cold he/she = 'He is cold'." },
    ],
    vocab: [
      { malagasy: "Malagasy", english: "The Malagasy language" },
      { malagasy: "Madagasikara", english: "Madagascar" },
      { malagasy: "teny", english: "language / words" },
    ],
    quiz: [
      { question: "What language family does Malagasy belong to?", options: ["Bantu", "Austronesian", "Semitic", "Indo-European"], correct: 1 },
      { question: "How many dialects are spoken in Madagascar?", options: ["5", "10", "18", "25"], correct: 2 },
      { question: "What is the standard dialect?", options: ["Sakalava", "Merina", "Betsileo", "Antandroy"], correct: 1 },
      { question: "What word order does Malagasy use?", options: ["SVO", "SOV", "VOS", "OSV"], correct: 2 },
    ]
  },
  {
    id: "alphabet",
    title: "The Alphabet & Sounds",
    emoji: "🔤",
    category: "basics",
    description: "Learn the 4 vowel sounds and key consonant clusters.",
    cards: [
      { front: "A [a]", back: "Sounds like 'a' in Father. Examples: Salama, Manana" },
      { front: "E [ei]", back: "Sounds like 'ay' in made/pay. Examples: Veloma, teny, enina" },
      { front: "I / Y [i:]", back: "Sounds like 'ee' in keep. Examples: Misy, mipetraka, tsia" },
      { front: "O [o/u]", back: "Sounds like 'oo' in pool. Examples: Aho, Voky" },
      { front: "ao", back: "Difficult diphthong. Example: vaovao (new), tratra (chest)" },
      { front: "oa", back: "Difficult diphthong. Example: soa (good)" },
      { front: "ts", back: "Affricate. Example: tsotra (simple)" },
      { front: "dr", back: "Pronounced together. Example: drafitra (draft)" },
      { front: "ndr", back: "Example: Indrindra (especially)" },
      { front: "nj", back: "Example: onja (wave)" },
    ],
    vocab: [
      { malagasy: "Salama", english: "Hello" },
      { malagasy: "Manana", english: "to have" },
      { malagasy: "Veloma", english: "Bye!" },
      { malagasy: "Misy", english: "there is" },
      { malagasy: "Aho", english: "I" },
      { malagasy: "Voky", english: "full" },
      { malagasy: "vaovao", english: "new" },
      { malagasy: "soa", english: "good" },
    ],
    quiz: [
      { question: "How many vowel sounds does Malagasy have?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "Which English sound is closest to Malagasy 'E'?", options: ["eh", "ay", "ee", "oh"], correct: 1 },
      { question: "Which letters do NOT exist in Malagasy?", options: ["a, b, c", "c, q, u, w, x", "j, k, l, m", "p, r, s, t"], correct: 1 },
    ]
  },
  {
    id: "greetings",
    title: "Greetings",
    emoji: "👋",
    category: "conversation",
    description: "Essential greetings and polite expressions.",
    cards: [
      { front: "Manahoana?", back: "Hello!" },
      { front: "Salama!", back: "Hi!" },
      { front: "Inona no vaovao?", back: "What's up?" },
      { front: "Tsy misy!", back: "Nothing special!" },
      { front: "Fahasalamana?", back: "How are you?" },
      { front: "Tsara fa misaotra!", back: "I'm OK. Thanks." },
      { front: "Tonga soa!", back: "Welcome!" },
      { front: "Veloma!", back: "Bye!" },
      { front: "Misaotra!", back: "Thanks!" },
      { front: "Azafady!", back: "Please / Sorry!" },
      { front: "Miala tsiny!", back: "Please / Sorry! (formal)" },
      { front: "Tsy misy olana!", back: "No problem!" },
    ],
    vocab: [
      { malagasy: "Manahoana", english: "Hello" },
      { malagasy: "Salama", english: "Hi" },
      { malagasy: "vaovao", english: "news / new" },
      { malagasy: "Fahasalamana", english: "health / How are you?" },
      { malagasy: "Tsara", english: "good / OK" },
      { malagasy: "misaotra", english: "thank you" },
      { malagasy: "Tonga soa", english: "Welcome" },
      { malagasy: "Veloma", english: "Goodbye" },
      { malagasy: "Azafady", english: "Please / Sorry / Excuse me" },
      { malagasy: "olana", english: "problem" },
    ],
    quiz: [
      { question: "What does 'Manahoana?' mean?", options: ["Goodbye", "Hello", "Thank you", "Please"], correct: 1 },
      { question: "How do you say 'How are you?'?", options: ["Salama", "Fahasalamana?", "Veloma", "Misaotra"], correct: 1 },
      { question: "What does 'Azafady' mean?", options: ["Goodbye", "Please / Sorry", "Welcome", "No"], correct: 1 },
      { question: "What does 'Tsy misy olana!' mean?", options: ["You're welcome", "No problem", "Good morning", "Excuse me"], correct: 1 },
    ]
  },
  {
    id: "introductions",
    title: "Introductions",
    emoji: "🤝",
    category: "conversation",
    description: "Introducing yourself and asking about others.",
    cards: [
      { front: "Iza no anaranao?", back: "What is your name?" },
      { front: "____ no anarako, ary ianao?", back: "My name is ____, and yours?" },
      { front: "Faly mahalala anao!", back: "Happy to meet you!" },
      { front: "Avy aiza ianao?", back: "Where are you from?" },
      { front: "Avy any Etazonia aho.", back: "I am from USA." },
      { front: "Inona ny asanao?", back: "What is your job? / What do you do?" },
      { front: "Mpiofana aho.", back: "I am a trainee." },
      { front: "Mianatra teny Malagasy aho.", back: "I learn Malagasy." },
      { front: "Hipetraka aiza ianao?", back: "Where will you stay?" },
      { front: "Mandrapihaona!", back: "See you later!" },
    ],
    vocab: [
      { malagasy: "anarana", english: "name" },
      { malagasy: "avy aiza", english: "from where" },
      { malagasy: "Etazonia", english: "USA" },
      { malagasy: "asa", english: "work / job" },
      { malagasy: "Mpiofana", english: "trainee" },
      { malagasy: "mianatra", english: "to learn" },
      { malagasy: "mipetraka", english: "to live / to sit" },
      { malagasy: "Mandrapihaona", english: "See you later" },
    ],
    quiz: [
      { question: "How do you ask someone's name?", options: ["Avy aiza ianao?", "Iza no anaranao?", "Inona ny asanao?", "Faly mahalala anao!"], correct: 1 },
      { question: "What does 'Mianatra teny Malagasy aho.' mean?", options: ["I speak Malagasy", "I learn Malagasy", "I love Malagasy", "I teach Malagasy"], correct: 1 },
      { question: "How do you say 'See you later!'?", options: ["Veloma", "Mandrapihaona", "Tonga soa", "Salama"], correct: 1 },
    ]
  },
  {
    id: "family",
    title: "Family",
    emoji: "👨‍👩‍👧‍👦",
    category: "vocabulary",
    description: "Family members and relationships.",
    cards: [
      { front: "Fianakaviana", back: "Family" },
      { front: "Dada", back: "Father" },
      { front: "Neny", back: "Mother" },
      { front: "Zoky", back: "Older siblings" },
      { front: "Zandry", back: "Younger siblings" },
      { front: "Dadabe", back: "Grandfather" },
      { front: "Nenibe", back: "Grandmother" },
      { front: "Zanaka", back: "Children" },
      { front: "Manam-bady", back: "To be married" },
      { front: "Zaza tokana", back: "Single child" },
      { front: "Kambana", back: "Twins" },
      { front: "Sipa", back: "Boy/girlfriend" },
      { front: "Namana", back: "Friend" },
      { front: "Nisaraka", back: "To be separated" },
      { front: "Manana", back: "To have" },
    ],
    vocab: [
      { malagasy: "Fianakaviana", english: "Family" },
      { malagasy: "Dada", english: "Father" },
      { malagasy: "Neny", english: "Mother" },
      { malagasy: "Zoky", english: "Older sibling" },
      { malagasy: "Zandry", english: "Younger sibling" },
      { malagasy: "Zanaka", english: "Child" },
      { malagasy: "Namana", english: "Friend" },
    ],
    quiz: [
      { question: "What does 'Zoky' mean?", options: ["Younger sibling", "Older sibling", "Parent", "Child"], correct: 1 },
      { question: "How do you say 'Mother'?", options: ["Dada", "Neny", "Nenibe", "Dadabe"], correct: 1 },
      { question: "What does 'Kambana' mean?", options: ["Single child", "Twins", "Married", "Friend"], correct: 1 },
    ]
  },
  {
    id: "sentences",
    title: "Basic Sentence Structure",
    emoji: "📝",
    category: "grammar",
    description: "Learn VOS word order, pronouns, negation, and conjugation.",
    cards: [
      { front: "Pronoun: Aho", back: "I / I am" },
      { front: "Pronoun: Ianao", back: "You / You are" },
      { front: "Pronoun: Izy", back: "He/She / He is/She is" },
      { front: "Pronoun: Isika", back: "We (inclusive)" },
      { front: "Pronoun: Izahay", back: "We (exclusive)" },
      { front: "Pronoun: Ianareo", back: "You (plural)" },
      { front: "Pronoun: Izireo", back: "They" },
      { front: "Affirmative: Verb + Object + Subject", back: "Mihinana vary aho = I eat rice" },
      { front: "Adjective + Subject", back: "Mangatsiaka izy = He/she is cold" },
      { front: "Negation: Tsy + ...", back: "Tsy mihinana vary aho = I don't eat rice" },
      { front: "Present tense", back: "Mihinana = eat (now)" },
      { front: "Future tense", back: "Hihinana = will eat" },
      { front: "Past tense", back: "Nihinana = ate" },
    ],
    vocab: [
      { malagasy: "Mihinana", english: "to eat (present)" },
      { malagasy: "Hihinana", english: "will eat (future)" },
      { malagasy: "Nihinana", english: "ate (past)" },
      { malagasy: "vary", english: "rice" },
      { malagasy: "Misotro", english: "to drink" },
      { malagasy: "rano", english: "water" },
      { malagasy: "Tia", english: "to like" },
      { malagasy: "Tsy", english: "no / not" },
    ],
    quiz: [
      { question: "What is the word order in Malagasy?", options: ["SVO", "VOS", "SOV", "OVS"], correct: 1 },
      { question: "How do you say 'I don't eat rice'?", options: ["Mihinana vary aho", "Tsy mihinana vary aho", "Tsy vary mihinana aho", "Vary tsy mihinana aho"], correct: 1 },
      { question: "What does the prefix 'h-' indicate?", options: ["Past", "Present", "Future", "Negative"], correct: 2 },
      { question: "What does the prefix 'n-' indicate?", options: ["Past", "Future", "Negative", "Question"], correct: 0 },
    ]
  },
  {
    id: "needs",
    title: "Basic Needs",
    emoji: "🍽️",
    category: "conversation",
    description: "Expressing needs, feelings, and asking for things.",
    cards: [
      { front: "Reraka aho.", back: "I am tired." },
      { front: "Noana aho.", back: "I am hungry." },
      { front: "Voky aho.", back: "I am full." },
      { front: "Mangetaheta aho.", back: "I am thirsty." },
      { front: "Aiza ny kabone?", back: "Where is the toilet?" },
      { front: "Te hisotro rano aho.", back: "I want to drink water." },
      { front: "Te hatory aho.", back: "I want to sleep." },
      { front: "Te hisakafo aho.", back: "I want to eat." },
      { front: "Te hivoaka aho.", back: "I want to go out." },
      { front: "Mafana aho.", back: "I am hot." },
      { front: "Mangatsiaka aho.", back: "I am cold." },
      { front: "Mila ___ aho azafady.", back: "I need ___ please." },
      { front: "Omeo ___ aho azafady.", back: "Give me ___ please." },
      { front: "Afaka mahazo ___ ve aho azafady?", back: "Can I have ___ please?" },
    ],
    vocab: [
      { malagasy: "Reraka", english: "tired" },
      { malagasy: "Noana", english: "hungry" },
      { malagasy: "Voky", english: "full" },
      { malagasy: "Mangetaheta", english: "thirsty" },
      { malagasy: "kabone", english: "toilet" },
      { malagasy: "Te", english: "want" },
      { malagasy: "hatory", english: "to sleep" },
      { malagasy: "hisakafo", english: "to eat (meal)" },
      { malagasy: "hivoaka", english: "to go out" },
      { malagasy: "Mafana", english: "hot" },
      { malagasy: "Mila", english: "need" },
      { malagasy: "Omeo", english: "give" },
    ],
    quiz: [
      { question: "How do you say 'I am hungry'?", options: ["Voky aho", "Noana aho", "Reraka aho", "Mafana aho"], correct: 1 },
      { question: "What does 'Te hatory aho.' mean?", options: ["I want to eat", "I want to sleep", "I want to drink", "I want to go"], correct: 1 },
      { question: "How do you ask 'Where is the toilet?'?", options: ["Aiza ny rano?", "Aiza ny kabone?", "Aiza ny vary?", "Aiza ny mofo?"], correct: 1 },
    ]
  },
  {
    id: "questions",
    title: "Question Words",
    emoji: "❓",
    category: "grammar",
    description: "Essential question words and example sentences.",
    cards: [
      { front: "Ve?", back: "Yes or no question marker" },
      { front: "Iza?", back: "Who?" },
      { front: "Aiza?", back: "Where?" },
      { front: "Inona?", back: "What?" },
      { front: "Firy?", back: "How many?" },
      { front: "Amin'ny firy?", back: "What time?" },
      { front: "Oviana?", back: "When? (questions only)" },
      { front: "Hoatrinona?", back: "How much?" },
      { front: "Fa maninona?", back: "Why?" },
      { front: "Ahoana?", back: "How?" },
      { front: "Note: Oviana vs Rehefa", back: "Oviana = when (question). Rehefa = when (statement)." },
    ],
    vocab: [
      { malagasy: "Ve", english: "Question marker (yes/no)" },
      { malagasy: "Iza", english: "Who" },
      { malagasy: "Aiza", english: "Where" },
      { malagasy: "Inona", english: "What" },
      { malagasy: "Firy", english: "How many" },
      { malagasy: "Oviana", english: "When (question)" },
      { malagasy: "Rehefa", english: "When (statement)" },
      { malagasy: "Ahoana", english: "How" },
      { malagasy: "Fa maninona", english: "Why" },
    ],
    quiz: [
      { question: "What does 'Aiza?' mean?", options: ["Who", "Where", "What", "When"], correct: 1 },
      { question: "Which word is used for 'when' in statements (not questions)?", options: ["Oviana", "Rehefa", "Ahoana", "Aiza"], correct: 1 },
      { question: "How do you ask 'How much'?", options: ["Firy", "Hoatrinona", "Inona", "Ahoana"], correct: 1 },
    ]
  },
  {
    id: "commands",
    title: "Commands & Requests",
    emoji: "🙏",
    category: "conversation",
    description: "Common commands, requests, and polite expressions.",
    cards: [
      { front: "Eny", back: "Yes" },
      { front: "Tsia", back: "No" },
      { front: "Avia aty!", back: "Come here!" },
      { front: "Andraso!", back: "Wait!" },
      { front: "Ndao handeha!", back: "Let's go / Come on!" },
      { front: "Diso", back: "False / Untrue" },
      { front: "Marina", back: "True" },
      { front: "Ampy izay!", back: "That is enough!" },
      { front: "Azo?", back: "Understand?" },
      { front: "Mila (koka) aho azafady.", back: "I need (coke) please." },
      { front: "Omeo (rano) aho azafady.", back: "Give me (water) please." },
      { front: "Afaka mahazo (vera) ve aho azafady?", back: "Can I have (a glass) please?" },
    ],
    vocab: [
      { malagasy: "Eny", english: "Yes" },
      { malagasy: "Tsia", english: "No" },
      { malagasy: "Avia aty", english: "Come here" },
      { malagasy: "Andraso", english: "Wait" },
      { malagasy: "Ndao handeha", english: "Let's go" },
      { malagasy: "Diso", english: "False" },
      { malagasy: "Marina", english: "True" },
      { malagasy: "Ampy izay", english: "That's enough" },
    ],
    quiz: [
      { question: "What does 'Avia aty!' mean?", options: ["Go away", "Come here", "Wait", "Let's go"], correct: 1 },
      { question: "How do you say 'No'?", options: ["Eny", "Tsia", "Diso", "Marina"], correct: 1 },
      { question: "What does 'Ampy izay!' mean?", options: ["More please", "That's enough", "I understand", "Wait"], correct: 1 },
    ]
  },
  {
    id: "numbers",
    title: "Numbers",
    emoji: "🔢",
    category: "vocabulary",
    description: "Counting in Malagasy — read from right to left!",
    cards: [
      { front: "1 - Iray", back: "One" },
      { front: "2 - Roa", back: "Two" },
      { front: "3 - Telo", back: "Three" },
      { front: "4 - Efatra", back: "Four" },
      { front: "5 - Dimy", back: "Five" },
      { front: "6 - Enina", back: "Six" },
      { front: "7 - Fito", back: "Seven" },
      { front: "8 - Valo", back: "Eight" },
      { front: "9 - Sivy", back: "Nine" },
      { front: "10 - Folo", back: "Ten" },
      { front: "40 - Efapolo", back: "Forty" },
      { front: "100 - Zato", back: "Hundred" },
      { front: "1,000 - Arivo", back: "Thousand" },
      { front: "10,000 - Iray alina", back: "Ten thousand" },
      { front: "100,000 - Iray hetsy", back: "Hundred thousand" },
      { front: "Note: amby vs sy", back: "Use 'amby' to connect up to 199. Use 'sy' after 199." },
    ],
    vocab: [
      { malagasy: "Iray", english: "One" },
      { malagasy: "Roa", english: "Two" },
      { malagasy: "Telo", english: "Three" },
      { malagasy: "Dimy", english: "Five" },
      { malagasy: "Folo", english: "Ten" },
      { malagasy: "Zato", english: "Hundred" },
      { malagasy: "Arivo", english: "Thousand" },
    ],
    quiz: [
      { question: "What does 'Enina' mean?", options: ["5", "6", "7", "8"], correct: 1 },
      { question: "How do you say 100?", options: ["Folo", "Zato", "Arivo", "Alina"], correct: 1 },
      { question: "What does 'Arivo' mean?", options: ["100", "1,000", "10,000", "100,000"], correct: 1 },
    ]
  },
  {
    id: "food",
    title: "Food & Drinks",
    emoji: "🍛",
    category: "vocabulary",
    description: "Essential food vocabulary for daily meals.",
    cards: [
      { front: "Sakafo", back: "Food" },
      { front: "Vary", back: "Rice" },
      { front: "Laoka", back: "Side-dishes" },
      { front: "Mofo", back: "Bread" },
      { front: "Hena", back: "Meat" },
      { front: "Henakisoa", back: "Pork" },
      { front: "Henomby", back: "Beef" },
      { front: "Akoho", back: "Chicken" },
      { front: "Trondro", back: "Fish" },
      { front: "Atody", back: "Eggs" },
      { front: "Legioma", back: "Vegetable" },
      { front: "Anana", back: "Greens" },
      { front: "Ovy", back: "Potatoes" },
      { front: "Voatabia", back: "Tomato" },
      { front: "Voankazo", back: "Fruit" },
      { front: "Papay", back: "Papaya" },
      { front: "Manga", back: "Mango" },
      { front: "Voasary", back: "Orange" },
      { front: "Rano", back: "Water" },
      { front: "Kafe", back: "Coffee" },
      { front: "Dite", back: "Tea" },
      { front: "Ronono", back: "Milk" },
    ],
    vocab: [
      { malagasy: "Vary", english: "Rice" },
      { malagasy: "Laoka", english: "Side-dish" },
      { malagasy: "Hena", english: "Meat" },
      { malagasy: "Henakisoa", english: "Pork" },
      { malagasy: "Akoho", english: "Chicken" },
      { malagasy: "Trondro", english: "Fish" },
      { malagasy: "Atody", english: "Eggs" },
      { malagasy: "Voatabia", english: "Tomato" },
      { malagasy: "Kafe", english: "Coffee" },
    ],
    quiz: [
      { question: "What is the staple food in Madagascar?", options: ["Mofo", "Vary", "Hena", "Voankazo"], correct: 1 },
      { question: "What does 'Laoka' mean?", options: ["Rice", "Side-dishes", "Meat", "Fruit"], correct: 1 },
      { question: "What does 'Henakisoa' mean?", options: ["Beef", "Pork", "Chicken", "Fish"], correct: 1 },
    ]
  },
  {
    id: "days",
    title: "Days & Time",
    emoji: "📅",
    category: "vocabulary",
    description: "Days of the week and parts of the day.",
    cards: [
      { front: "Alatsinainy", back: "Monday" },
      { front: "Talata", back: "Tuesday" },
      { front: "Alarobia", back: "Wednesday" },
      { front: "Alakamisy", back: "Thursday" },
      { front: "Zoma", back: "Friday" },
      { front: "Sabotsy", back: "Saturday" },
      { front: "Alahady", back: "Sunday" },
      { front: "Omaly", back: "Yesterday" },
      { front: "Androany", back: "Today" },
      { front: "Rahampitso", back: "Tomorrow" },
      { front: "Maraina", back: "Morning" },
      { front: "Atoandro", back: "Noon" },
      { front: "Tolakandro", back: "Afternoon" },
      { front: "Hariva", back: "Evening" },
      { front: "Alina", back: "Night" },
    ],
    vocab: [
      { malagasy: "Alatsinainy", english: "Monday" },
      { malagasy: "Talata", english: "Tuesday" },
      { malagasy: "Alarobia", english: "Wednesday" },
      { malagasy: "Zoma", english: "Friday" },
      { malagasy: "Alahady", english: "Sunday" },
      { malagasy: "Maraina", english: "Morning" },
      { malagasy: "Atoandro", english: "Noon" },
      { malagasy: "Alina", english: "Night" },
    ],
    quiz: [
      { question: "What day is 'Alakamisy'?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correct: 2 },
      { question: "What does 'Androany' mean?", options: ["Yesterday", "Today", "Tomorrow", "Now"], correct: 1 },
      { question: "What does 'Hariva' mean?", options: ["Morning", "Noon", "Afternoon", "Evening"], correct: 3 },
    ]
  },
  {
    id: "feelings",
    title: "Feelings & Emotions",
    emoji: "😊",
    category: "vocabulary",
    description: "Expressing emotions and reactions.",
    cards: [
      { front: "Mahafaly ahy izany", back: "That makes me happy." },
      { front: "Mampalahelo izany", back: "That's sad." },
      { front: "Mahagaga izany", back: "That's surprising." },
      { front: "Mahasosotra izany", back: "That's shocking!" },
      { front: "Mandreraka izany", back: "It's tiring." },
      { front: "Mampatahotra izany", back: "That's frightening!" },
      { front: "Mahakamo izany", back: "That's annoying!" },
      { front: "Mampiahiahy izany", back: "That's doubtful." },
      { front: "Mampihomehy izany", back: "Amusing! Hilarious!" },
      { front: "Faly izy.", back: "He/She is happy." },
      { front: "Malahelo aho.", back: "I am sad." },
      { front: "Matahotra izireo.", back: "They are afraid." },
    ],
    vocab: [
      { malagasy: "Faly", english: "happy" },
      { malagasy: "Malahelo", english: "sad" },
      { malagasy: "Gaga", english: "surprised" },
      { malagasy: "Sosotra", english: "shocked / angry" },
      { malagasy: "Matahotra", english: "afraid" },
      { malagasy: "Kamo", english: "lazy" },
      { malagasy: "Matoky", english: "to trust" },
      { malagasy: "Halako", english: "I hate it" },
    ],
    quiz: [
      { question: "What does 'Malahelo aho.' mean?", options: ["I am happy", "I am sad", "I am tired", "I am surprised"], correct: 1 },
      { question: "What does 'Matahotra' mean?", options: ["Angry", "Afraid", "Happy", "Tired"], correct: 1 },
      { question: "What does 'Mahagaga izany' mean?", options: ["That's sad", "That's surprising", "That's funny", "That's enough"], correct: 1 },
    ]
  },
  {
    id: "colors",
    title: "Colors",
    emoji: "🎨",
    category: "vocabulary",
    description: "Color vocabulary with shades.",
    cards: [
      { front: "Loko", back: "Colors" },
      { front: "Miloko", back: "To be colored" },
      { front: "Manga", back: "Blue" },
      { front: "Mangamanga", back: "Bluish" },
      { front: "Manga antitra", back: "Dark blue" },
      { front: "Manga tanora", back: "Light blue" },
      { front: "Mena", back: "Red" },
      { front: "Fotsy", back: "White" },
      { front: "Mainty", back: "Black" },
      { front: "Maintso", back: "Green" },
      { front: "Mavokely", back: "Pink" },
      { front: "Mavo", back: "Yellow" },
      { front: "Volom-boasary", back: "Orange" },
      { front: "Volon-tsokola", back: "Brown" },
      { front: "Volon-davenona", back: "Grey" },
    ],
    vocab: [
      { malagasy: "Manga", english: "Blue" },
      { malagasy: "Mena", english: "Red" },
      { malagasy: "Fotsy", english: "White" },
      { malagasy: "Mainty", english: "Black" },
      { malagasy: "Maintso", english: "Green" },
      { malagasy: "Mavo", english: "Yellow" },
      { malagasy: "Mavokely", english: "Pink" },
    ],
    quiz: [
      { question: "What does 'Maintso' mean?", options: ["Blue", "Green", "Yellow", "Red"], correct: 1 },
      { front: "What does 'Fotsy' mean?", options: ["Black", "White", "Grey", "Red"], correct: 1 },
    ]
  },
  {
    id: "furniture",
    title: "House & Furniture",
    emoji: "🏠",
    category: "vocabulary",
    description: "Items found in a typical home.",
    cards: [
      { front: "Seza", back: "Chair" },
      { front: "Latabatra", back: "Table" },
      { front: "Farafara", back: "Bed frame" },
      { front: "Kidoro", back: "Mattress" },
      { front: "Ondana", back: "Pillow" },
      { front: "Bodofotsy", back: "Blankets" },
      { front: "Servieta", back: "Towel" },
      { front: "Jiro", back: "Light" },
      { front: "Varavarana", back: "Door" },
      { front: "Varavarankely", back: "Window" },
      { front: "Lay", back: "Mosquito net" },
      { front: "Zinga", back: "Plastic mug" },
      { front: "Sio", back: "Bucket" },
    ],
    vocab: [
      { malagasy: "Seza", english: "Chair" },
      { malagasy: "Latabatra", english: "Table" },
      { malagasy: "Farafara", english: "Bed" },
      { malagasy: "Kidoro", english: "Mattress" },
      { malagasy: "Lay", english: "Mosquito net" },
      { malagasy: "Varavarankely", english: "Window" },
    ],
    quiz: [
      { question: "What does 'Lay' mean?", options: ["Pillow", "Blanket", "Mosquito net", "Bucket"], correct: 2 },
      { question: "What does 'Zinga' mean?", options: ["Chair", "Table", "Plastic mug", "Door"], correct: 2 },
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
