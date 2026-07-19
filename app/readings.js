// ============================================
// MALAGASY LEARNING APP — READING TEXTS
// Original beginner texts using vocabulary from the
// app's lessons. Each text has a Malagasy passage,
// EN/DE/FR translations, a glossary, and a comprehension quiz.
// ============================================

const READINGS = [
  {
    "id": "reading-1",
    "title": "Salama! Manao ahoana?",
    "emoji": "👋",
    "level": "A1",
    "description": "A short greeting exchange on the street.",
    "text": {
      "mg": "Salama! Manahoana? Fahasalamana?\nTsara fa misaotra. Manao ahoana ianao?\nTsy dia tsara. Noana aho. Te hisakafo aho.\nAvia aty! Mihinana isika. Tonga soa!",
      "en": "Hello! How are you? How is your health?\nI'm OK, thanks. How are you?\nNot so well. I am hungry. I want to eat.\nCome here! We eat together. Welcome!",
      "de": "Hallo! Wie geht's? Wie ist deine Gesundheit?\nMir geht's gut, danke. Wie geht es dir?\nNicht so gut. Ich bin hungrig. Ich möchte essen.\nKomm her! Wir essen zusammen. Willkommen!",
      "fr": "Bonjour ! Comment ça va ? Comment va ta santé ?\nÇa va bien, merci. Comment vas-tu ?\nPas trop bien. J'ai faim. Je veux manger.\nViens ici ! On mange ensemble. Bienvenue !"
    },
    "glossary": [
      { "mg": "Salama", "en": "Hello", "de": "Hallo", "fr": "Bonjour" },
      { "mg": "Manahoana", "en": "How are you", "de": "Wie geht's", "fr": "Comment ça va" },
      { "mg": "Fahasalamana", "en": "Health / How are you?", "de": "Gesundheit / Wie geht's?", "fr": "Santé / Comment ça va ?" },
      { "mg": "Tsara fa misaotra", "en": "OK, thanks", "de": "Gut, danke", "fr": "Ça va, merci" },
      { "mg": "Tsy dia tsara", "en": "Not so well", "de": "Nicht so gut", "fr": "Pas trop bien" },
      { "mg": "Noana", "en": "Hungry", "de": "Hungrig", "fr": "Avoir faim" },
      { "mg": "Te hisakafo", "en": "Want to eat", "de": "Möchte essen", "fr": "Vouloir manger" },
      { "mg": "Avia aty", "en": "Come here", "de": "Komm her", "fr": "Viens ici" },
      { "mg": "Mihinana isika", "en": "We eat (together)", "de": "Wir essen (zusammen)", "fr": "On mange (ensemble)" },
      { "mg": "Tonga soa", "en": "Welcome", "de": "Willkommen", "fr": "Bienvenue" }
    ],
    "quiz": [
      {
        "question": "How does the first speaker ask about health?",
        "question_de": "Wie fragt der erste Sprecher nach der Gesundheit?",
        "question_fr": "Comment le premier locuteur demande-t-il des nouvelles de la santé ?",
        "options": ["Inona no vaovao?", "Fahasalamana?", "Aiza ny kabone?", "Manao inona ianao?"],
        "options_de": ["Was gibt's Neues?", "Wie ist deine Gesundheit?", "Wo ist die Toilette?", "Was machst du?"],
        "options_fr": ["Quoi de neuf ?", "Comment va ta santé ?", "Où sont les toilettes ?", "Que fais-tu ?"],
        "correct": 1
      },
      {
        "question": "How is the second speaker feeling?",
        "question_de": "Wie fühlt sich der zweite Sprecher?",
        "question_fr": "Comment se sent le deuxième locuteur ?",
        "options": ["Tsara be", "Tsy dia tsara", "Sambatra", "Reraka"],
        "options_de": ["Sehr gut", "Nicht so gut", "Glücklich", "Müde"],
        "options_fr": ["Très bien", "Pas trop bien", "Heureux", "Fatigué"],
        "correct": 1
      },
      {
        "question": "What does the second speaker want to do?",
        "question_de": "Was möchte der zweite Sprecher tun?",
        "question_fr": "Que veut faire le deuxième locuteur ?",
        "options": ["Te hatory", "Te hivoaka", "Te hisakafo", "Te misotro rano"],
        "options_de": ["Schlafen", "Hinausgehen", "Essen", "Wasser trinken"],
        "options_fr": ["Dormir", "Sortir", "Manger", "Boire de l'eau"],
        "correct": 2
      },
      {
        "question": "What does the first speaker say at the end?",
        "question_de": "Was sagt der erste Sprecher am Ende?",
        "question_fr": "Que dit le premier locuteur à la fin ?",
        "options": ["Veloma!", "Misaotra!", "Tonga soa!", "Mandrapihaona!"],
        "options_de": ["Tschüss!", "Danke!", "Willkommen!", "Bis bald!"],
        "options_fr": ["Au revoir !", "Merci !", "Bienvenue !", "À bientôt !"],
        "correct": 2
      }
    ]
  },
  {
    "id": "reading-2",
    "title": "Iza no anaranao?",
    "emoji": "🪪",
    "level": "A1",
    "description": "Meeting someone new and introducing yourself.",
    "text": {
      "mg": "Manahoana! Iza no anaranao?\nRakoto no anarako, ary ianao?\nFaly mahalala anao! Avy aiza ianao?\nAvy any Etazonia aho. Mpiofana aho.\nInona ny asanao?\nMianatra teny Malagasy aho. Mampianatra aho koa.",
      "en": "Hello! What is your name?\nMy name is Rakoto, and you?\nHappy to meet you! Where are you from?\nI am from the USA. I am a trainee.\nWhat is your job?\nI am learning Malagasy. I also teach.",
      "de": "Hallo! Wie heißt du?\nIch heiße Rakoto, und du?\nSchön, dich kennenzulernen! Woher kommst du?\nIch komme aus den USA. Ich bin Praktikant.\nWas ist dein Beruf?\nIch lerne Malagasy. Ich unterrichte auch.",
      "fr": "Bonjour ! Comment t'appelles-tu ?\nJe m'appelle Rakoto, et toi ?\nEnchanté ! D'où viens-tu ?\nJe viens des États-Unis. Je suis stagiaire.\nQuel est ton métier ?\nJ'apprends le malgache. J'enseigne aussi."
    },
    "glossary": [
      { "mg": "Iza no anaranao", "en": "What is your name?", "de": "Wie heißt du?", "fr": "Comment t'appelles-tu ?" },
      { "mg": "anarana", "en": "name", "de": "Name", "fr": "nom" },
      { "mg": "Faly mahalala anao", "en": "Happy to meet you", "de": "Schön, dich kennenzulernen", "fr": "Enchanté" },
      { "mg": "Avy aiza ianao", "en": "Where are you from?", "de": "Woher kommst du?", "fr": "D'où viens-tu ?" },
      { "mg": "Avy any Etazonia", "en": "From the USA", "de": "Aus den USA", "fr": "Des États-Unis" },
      { "mg": "Mpiofana", "en": "trainee", "de": "Praktikant", "fr": "stagiaire" },
      { "mg": "Inona ny asanao", "en": "What is your job?", "de": "Was ist dein Beruf?", "fr": "Quel est ton métier ?" },
      { "mg": "Mianatra", "en": "to learn", "de": "lernen", "fr": "apprendre" },
      { "mg": "Mampianatra", "en": "to teach", "de": "unterrichten", "fr": "enseigner" },
      { "mg": "koa", "en": "also / too", "de": "auch", "fr": "aussi" }
    ],
    "quiz": [
      {
        "question": "What is the first speaker's name?",
        "question_de": "Wie heißt der erste Sprecher?",
        "question_fr": "Comment s'appelle le premier locuteur ?",
        "options": ["Etazonia", "Rakoto", "Mpiofana", "Salama"],
        "options_de": ["USA", "Rakoto", "Praktikant", "Hallo"],
        "options_fr": ["États-Unis", "Rakoto", "Stagiaire", "Bonjour"],
        "correct": 1
      },
      {
        "question": "Where is the second speaker from?",
        "question_de": "Woher kommt der zweite Sprecher?",
        "question_fr": "D'où vient le deuxième locuteur ?",
        "options": ["Madagasikara", "Frantsay", "Etazonia", "Antananarivo"],
        "options_de": ["Madagaskar", "Frankreich", "USA", "Antananarivo"],
        "options_fr": ["Madagascar", "France", "États-Unis", "Antananarivo"],
        "correct": 2
      },
      {
        "question": "What does the second speaker do?",
        "question_de": "Was macht der zweite Sprecher?",
        "question_fr": "Que fait le deuxième locuteur ?",
        "options": ["Dokotera", "Mpiofana", "Mpampianatra", "Mpitari-dalana"],
        "options_de": ["Arzt", "Praktikant", "Lehrer", "Reiseleiter"],
        "options_fr": ["Médecin", "Stagiaire", "Professeur", "Guide"],
        "correct": 1
      },
      {
        "question": "What is the second speaker learning?",
        "question_de": "Was lernt der zweite Sprecher?",
        "question_fr": "Qu'apprend le deuxième locuteur ?",
        "options": ["teny Frantsay", "teny Anglisy", "teny Malagasy", "asa"],
        "options_de": ["Französisch", "Englisch", "Malagasy", "Arbeit"],
        "options_fr": ["Français", "Anglais", "Malgache", "Travail"],
        "correct": 2
      },
      {
        "question": "What does the second speaker also do?",
        "question_de": "Was macht der zweite Sprecher außerdem?",
        "question_fr": "Que fait aussi le deuxième locuteur ?",
        "options": ["Mampianatra", "Mihinana", "Mandeha", "Matory"],
        "options_de": ["Unterrichten", "Essen", "Gehen", "Schlafen"],
        "options_fr": ["Enseigner", "Manger", "Aller", "Dormir"],
        "correct": 0
      }
    ]
  },
  {
    "id": "reading-3",
    "title": "Ny fianakaviana",
    "emoji": "👨‍👩‍👧",
    "level": "A1",
    "description": "Rakoto talks about his family.",
    "text": {
      "mg": "Ity ny fianakavianako. Dada sy neny. Manana zanaka roa izy ireo: zoky sy zandry.\nIzy no zoky. Aho no zandry.\nManana dadabe sy nenibe koa izahay.\nManana namana maro aho. Faly aho.",
      "en": "This is my family. Father and mother. They have two children: an older sibling and a younger sibling.\nHe is the older sibling. I am the younger sibling.\nWe also have a grandfather and a grandmother.\nI have many friends. I am happy.",
      "de": "Das ist meine Familie. Vater und Mutter. Sie haben zwei Kinder: ein älteres Geschwister und ein jüngeres Geschwister.\nEr ist das ältere Geschwister. Ich bin das jüngere Geschwister.\nWir haben auch einen Großvater und eine Großmutter.\nIch habe viele Freunde. Ich bin glücklich.",
      "fr": "Voici ma famille. Père et mère. Ils ont deux enfants : un aîné et un cadet.\nLui est l'aîné. Je suis le cadet.\nNous avons aussi un grand-père et une grand-mère.\nJ'ai beaucoup d'amis. Je suis heureux."
    },
    "glossary": [
      { "mg": "fianakaviana", "en": "family", "de": "Familie", "fr": "famille" },
      { "mg": "Dada", "en": "Father", "de": "Vater", "fr": "Père" },
      { "mg": "Neny", "en": "Mother", "de": "Mutter", "fr": "Mère" },
      { "mg": "Manana", "en": "to have", "de": "haben", "fr": "avoir" },
      { "mg": "Zanaka", "en": "child", "de": "Kind", "fr": "enfant" },
      { "mg": "Zoky", "en": "older sibling", "de": "älteres Geschwister", "fr": "aîné" },
      { "mg": "Zandry", "en": "younger sibling", "de": "jüngeres Geschwister", "fr": "cadet" },
      { "mg": "Dadabe", "en": "grandfather", "de": "Großvater", "fr": "grand-père" },
      { "mg": "Nenibe", "en": "grandmother", "de": "Großmutter", "fr": "grand-mère" },
      { "mg": "namana", "en": "friend", "de": "Freund", "fr": "ami" },
      { "mg": "maro", "en": "many", "de": "viele", "fr": "beaucoup" },
      { "mg": "Faly", "en": "happy", "de": "glücklich", "fr": "heureux" }
    ],
    "quiz": [
      {
        "question": "How many children do the parents have?",
        "question_de": "Wie viele Kinder haben die Eltern?",
        "question_fr": "Combien d'enfants ont les parents ?",
        "options": ["iray", "roa", "telo", "efatra"],
        "options_de": ["eins", "zwei", "drei", "vier"],
        "options_fr": ["un", "deux", "trois", "quatre"],
        "correct": 1
      },
      {
        "question": "Who is the older sibling?",
        "question_de": "Wer ist das ältere Geschwister?",
        "question_fr": "Qui est l'aîné ?",
        "options": ["Aho (I)", "Izy (He)", "Neny", "Dada"],
        "options_de": ["Ich", "Er", "Mutter", "Vater"],
        "options_fr": ["Moi", "Lui", "Mère", "Père"],
        "correct": 1
      },
      {
        "question": "What does the family also have?",
        "question_de": "Was hat die Familie außerdem?",
        "question_fr": "Qu'est-ce que la famille a aussi ?",
        "options": ["Namana", "Dadabe sy nenibe", "Sipa", "Kambana"],
        "options_de": ["Freunde", "Großvater und Großmutter", "Freund/in", "Zwillinge"],
        "options_fr": ["Amis", "Grand-père et grand-mère", "Petit(e) ami(e)", "Jumeaux"],
        "correct": 1
      },
      {
        "question": "How does the speaker feel at the end?",
        "question_de": "Wie fühlt sich der Sprecher am Ende?",
        "question_fr": "Comment se sent le locuteur à la fin ?",
        "options": ["Reraka", "Faly", "Tezitra", "Marary"],
        "options_de": ["Müde", "Glücklich", "Wütend", "Krank"],
        "options_fr": ["Fatigué", "Heureux", "En colère", "Malade"],
        "correct": 1
      }
    ]
  },
  {
    "id": "reading-4",
    "title": "Sakafo maraina",
    "emoji": "🍚",
    "level": "A1",
    "description": "Breakfast time — what people eat and drink.",
    "text": {
      "mg": "Maraina. Sakafo maraina izao.\nNoana aho sy mangetaheta aho.\nMihinana vary sy mofo aho. Misotro rano aho.\nTia kafe koa aho, fa tsy tia dite.\nManana akoho sy atody izahay. Matsiro!",
      "en": "Morning. It is breakfast now.\nI am hungry and I am thirsty.\nI eat rice and bread. I drink water.\nI also like coffee, but I don't like tea.\nWe have chicken and eggs. Delicious!",
      "de": "Morgen. Es ist jetzt Frühstück.\nIch bin hungrig und ich bin durstig.\nIch esse Reis und Brot. Ich trinke Wasser.\nIch mag auch Kaffee, aber ich mag keinen Tee.\nWir haben Huhn und Eier. Lecker!",
      "fr": "Matin. C'est le petit-déjeuner maintenant.\nJ'ai faim et j'ai soif.\nJe mange du riz et du pain. Je bois de l'eau.\nJ'aime aussi le café, mais je n'aime pas le thé.\nNous avons du poulet et des œufs. Délicieux !"
    },
    "glossary": [
      { "mg": "Maraina", "en": "Morning", "de": "Morgen", "fr": "Matin" },
      { "mg": "Sakafo", "en": "food / meal", "de": "Essen / Mahlzeit", "fr": "repas" },
      { "mg": "Noana", "en": "hungry", "de": "hungrig", "fr": "avoir faim" },
      { "mg": "Mangetaheta", "en": "thirsty", "de": "durstig", "fr": "avoir soif" },
      { "mg": "Mihinana", "en": "to eat", "de": "essen", "fr": "manger" },
      { "mg": "vary", "en": "rice", "de": "Reis", "fr": "riz" },
      { "mg": "mofo", "en": "bread", "de": "Brot", "fr": "pain" },
      { "mg": "Misotro", "en": "to drink", "de": "trinken", "fr": "boire" },
      { "mg": "rano", "en": "water", "de": "Wasser", "fr": "eau" },
      { "mg": "Tia", "en": "to like", "de": "mögen", "fr": "aimer" },
      { "mg": "kafe", "en": "coffee", "de": "Kaffee", "fr": "café" },
      { "mg": "dite", "en": "tea", "de": "Tee", "fr": "thé" },
      { "mg": "akoho", "en": "chicken", "de": "Huhn", "fr": "poulet" },
      { "mg": "atody", "en": "egg(s)", "de": "Ei(er)", "fr": "œuf(s)" },
      { "mg": "Matsiro", "en": "delicious", "de": "lecker", "fr": "délicieux" }
    ],
    "quiz": [
      {
        "question": "What time of day is it?",
        "question_de": "Welche Tageszeit ist es?",
        "question_fr": "Quel moment de la journée est-il ?",
        "options": ["Hariva", "Alina", "Maraina", "Tolakandro"],
        "options_de": ["Abend", "Nacht", "Morgen", "Nachmittag"],
        "options_fr": ["Soir", "Nuit", "Matin", "Après-midi"],
        "correct": 2
      },
      {
        "question": "What does the speaker eat?",
        "question_de": "Was isst der Sprecher?",
        "question_fr": "Que mange le locuteur ?",
        "options": ["Hena sy voankazo", "Vary sy mofo", "Trondro sy sira", "Akoho sy vary"],
        "options_de": ["Fleisch und Obst", "Reis und Brot", "Fisch und Salz", "Huhn und Reis"],
        "options_fr": ["Viande et fruits", "Riz et pain", "Poisson et sel", "Poulet et riz"],
        "correct": 1
      },
      {
        "question": "What does the speaker drink?",
        "question_de": "Was trinkt der Sprecher?",
        "question_fr": "Que boit le locuteur ?",
        "options": ["Dite", "Kafe", "Ranon'ampango", "Rano"],
        "options_de": ["Tee", "Kaffee", "Reiswasser", "Wasser"],
        "options_fr": ["Thé", "Café", "Eau de riz", "Eau"],
        "correct": 3
      },
      {
        "question": "What does the speaker NOT like?",
        "question_de": "Was mag der Sprecher NICHT?",
        "question_fr": "Qu'est-ce que le locuteur N'AIME PAS ?",
        "options": ["Kafe", "Dite", "Vary", "Mofo"],
        "options_de": ["Kaffee", "Tee", "Reis", "Brot"],
        "options_fr": ["Café", "Thé", "Riz", "Pain"],
        "correct": 1
      },
      {
        "question": "What does the family have that is delicious?",
        "question_de": "Was hat die Familie, das lecker ist?",
        "question_fr": "Qu'est-ce que la famille a qui est délicieux ?",
        "options": ["Akoho sy atody", "Voankazo", "Henakisoa", "Legioma"],
        "options_de": ["Huhn und Eier", "Obst", "Schweinefleisch", "Gemüse"],
        "options_fr": ["Poulet et œufs", "Fruits", "Porc", "Légumes"],
        "correct": 0
      }
    ]
  },
  {
    "id": "reading-5",
    "title": "Tonga soa eto Madagasikara",
    "emoji": "🇲🇬",
    "level": "A2",
    "description": "Arriving in Madagascar — a slightly longer narrative.",
    "text": {
      "mg": "Tonga soa eto Madagasikara!\nMaraina androany. Tsara ny andro.\nAvy any Etazonia aho. Mpiofana aho.\nMipetraka ato aho. Te hianatra teny Malagasy aho.\nManahoana! Salama! Faly mahalala anareo!\nMisaotra tompoko. Tsara be eto.\nInona no vaovao? Tsy misy!\nMihinana vary isika androany. Matsiro ny vary.",
      "en": "Welcome to Madagascar!\nMorning today. The day is good.\nI am from the USA. I am a trainee.\nI live here. I want to learn Malagasy.\nHello! Hi! Happy to meet you all!\nThank you, sir/madam. It is very good here.\nWhat's up? Nothing special!\nWe eat rice today. The rice is delicious.",
      "de": "Willkommen auf Madagaskar!\nHeute Morgen. Der Tag ist schön.\nIch komme aus den USA. Ich bin Praktikant.\nIch wohne hier. Ich möchte Malagasy lernen.\nHallo! Hi! Schön, euch alle kennenzulernen!\nDanke, Herr/Frau. Es ist sehr schön hier.\nWas gibt's Neues? Nichts Besonderes!\nWir essen heute Reis. Der Reis ist lecker.",
      "fr": "Bienvenue à Madagascar !\nCe matin. La journée est belle.\nJe viens des États-Unis. Je suis stagiaire.\nJ'habite ici. Je veux apprendre le malgache.\nBonjour ! Salut ! Enchanté de vous rencontrer tous !\nMerci, monsieur/madame. C'est très bien ici.\nQuoi de neuf ? Rien de spécial !\nNous mangeons du riz aujourd'hui. Le riz est délicieux."
    },
    "glossary": [
      { "mg": "Tonga soa", "en": "Welcome", "de": "Willkommen", "fr": "Bienvenue" },
      { "mg": "eto", "en": "here", "de": "hier", "fr": "ici" },
      { "mg": "androany", "en": "today", "de": "heute", "fr": "aujourd'hui" },
      { "mg": "Tsara", "en": "good", "de": "schön/gut", "fr": "beau/bon" },
      { "mg": "Mipetraka", "en": "to live / to sit", "de": "wohnen / sitzen", "fr": "habiter / s'asseoir" },
      { "mg": "ato", "en": "here", "de": "hier", "fr": "ici" },
      { "mg": "Te hianatra", "en": "want to learn", "de": "möchte lernen", "fr": "vouloir apprendre" },
      { "mg": "anareo", "en": "you (plural)", "de": "euch (Plural)", "fr": "vous (pluriel)" },
      { "mg": "Misaotra tompoko", "en": "Thank you, sir/madam", "de": "Danke, Herr/Frau", "fr": "Merci, monsieur/madame" },
      { "mg": "Tsara be", "en": "very good", "de": "sehr gut", "fr": "très bien" },
      { "mg": "Inona no vaovao", "en": "What's up?", "de": "Was gibt's Neues?", "fr": "Quoi de neuf ?" },
      { "mg": "Tsy misy", "en": "Nothing / there is not", "de": "Nichts / es gibt nicht", "fr": "Rien / il n'y a pas" },
      { "mg": "androany", "en": "today", "de": "heute", "fr": "aujourd'hui" },
      { "mg": "Matsiro", "en": "delicious", "de": "lecker", "fr": "délicieux" }
    ],
    "quiz": [
      {
        "question": "Where does the speaker arrive?",
        "question_de": "Wo kommt der Sprecher an?",
        "question_fr": "Où arrive le locuteur ?",
        "options": ["Etazonia", "Antananarivo", "Madagasikara", "Frantsay"],
        "options_de": ["USA", "Antananarivo", "Madagaskar", "Frankreich"],
        "options_fr": ["États-Unis", "Antananarivo", "Madagascar", "France"],
        "correct": 2
      },
      {
        "question": "What is the weather/day like?",
        "question_de": "Wie ist der Tag?",
        "question_fr": "Comment est la journée ?",
        "options": ["Tsy dia tsara", "Tsara", "Reraka", "Mangatsiaka"],
        "options_de": ["Nicht so gut", "Schön", "Müde", "Kalt"],
        "options_fr": ["Pas très bien", "Belle", "Fatigué", "Froid"],
        "correct": 1
      },
      {
        "question": "Where is the speaker from?",
        "question_de": "Woher kommt der Sprecher?",
        "question_fr": "D'où vient le locuteur ?",
        "options": ["Madagasikara", "Etazonia", "Frantsay", "Antananarivo"],
        "options_de": ["Madagaskar", "USA", "Frankreich", "Antananarivo"],
        "options_fr": ["Madagascar", "États-Unis", "France", "Antananarivo"],
        "correct": 1
      },
      {
        "question": "What does the speaker want to do?",
        "question_de": "Was möchte der Sprecher tun?",
        "question_fr": "Que veut faire le locuteur ?",
        "options": ["Te hatory", "Te hianatra teny Malagasy", "Te hivoaka", "Te misotro rano"],
        "options_de": ["Schlafen", "Malagasy lernen", "Hinausgehen", "Wasser trinken"],
        "options_fr": ["Dormir", "Apprendre le malgache", "Sortir", "Boire de l'eau"],
        "correct": 1
      },
      {
        "question": "What do they eat today?",
        "question_de": "Was essen sie heute?",
        "question_fr": "Que mangent-ils aujourd'hui ?",
        "options": ["Mofo", "Akoho", "Vary", "Voankazo"],
        "options_de": ["Brot", "Huhn", "Reis", "Obst"],
        "options_fr": ["Pain", "Poulet", "Riz", "Fruits"],
        "correct": 2
      },
      {
        "question": "How is the rice?",
        "question_de": "Wie ist der Reis?",
        "question_fr": "Comment est le riz ?",
        "options": ["Matsiro", "Tsy matsiro", "Mangatsiaka", "Mafana"],
        "options_de": ["Lecker", "Nicht lecker", "Kalt", "Heiß"],
        "options_fr": ["Délicieux", "Pas délicieux", "Froid", "Chaud"],
        "correct": 0
      }
    ]
  }
];