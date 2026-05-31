import {
  SentenceBuilderQuestion,
  FillInBlankQuestion,
  QuizQuestion,
  VocabItem,
  SerEstarHayQuestion,
  TranslationQuestion,
  GameInfo
} from './types';

export const gamesList: GameInfo[] = [
  {
    id: 1,
    title: "Բառերի դասավորում",
    description: "Դասավորե՛ք իսպաներեն բառերը ճիշտ հերթականությամբ",
    instructions: "Կարդացեք հայերեն նախադասությունը և կտտացրեք իսպաներեն բառերին՝ դրանք ճիշտ քերականական հերթականությամբ (S + V + C) դասավորելու համար։",
    iconName: "LayoutGrid"
  },
  {
    id: 2,
    title: "Բաց թողնված բառ",
    description: "Լրացրե՛ք նախադասության դատարկ հատվածը ճիշտ բայով",
    instructions: "Կարդացեք նախադասությունը և ընտրեք համապատասխան խոնարհված բայը կամ բառը՝ ըստ նախադասության ենթակայի։",
    iconName: "FileInput"
  },
  {
    id: 3,
    title: "Քերականական վիկտորինա",
    description: "Ստուգե՛ք A1 կանոնների ձեր տեսական գիտելիքները",
    instructions: "Պատասխանեք իսպաներեն պարզ նախադասությունների կառուցվածքի մասին հարցերին՝ ամրապնդելու համար տեսությունը։",
    iconName: "HelpCircle"
  },
  {
    id: 4,
    title: "Բառերի համընկնում",
    description: "Գտե՛ք իսպաներեն բառերի հայերեն համապատասխանությունները",
    instructions: "Կտտացրեք իսպաներեն բառին, այնուհետև դրա ճիշտ հայերեն թարգմանությանը։ Մաքրեք բոլոր քարտերը հնարավորինս արագ։",
    iconName: "Layers"
  },
  {
    id: 5,
    title: "SER, ESTAR թե HAY",
    description: "Ընտրե՛ք ճիշտ բայը լիարժեք նախադասության համար",
    instructions: "Իսպաներենի սիրտը սա է։ Ընտրեք Ser-ի, Estar-ի կամ Hay-ի ճիշտ ձևը՝ հիմնվելով նախադասության իմաստի վրա (ով է/որտեղ է/կա)։",
    iconName: "Activity"
  },
  {
    id: 6,
    title: "Թարգմանության մարտահրավեր",
    description: "Թարգմանե՛ք հայերեն նախադասությունները իսպաներեն",
    instructions: "Ձեզ տրված է հայերեն նախադասություն, ընտրեք դրա քերականորեն անթերի իսպաներեն թարգմանությունը։",
    iconName: "Languages"
  }
];

export const sentenceBuilderQuestions: SentenceBuilderQuestion[] = [
  {
    id: "sb1",
    armenianSentence: "Ես գիրք եմ կարդում։",
    correctSpanishWords: ["Yo", "leo", "un", "libro."],
    shuffledWords: ["un", "Yo", "libro.", "leo"]
  },
  {
    id: "sb2",
    armenianSentence: "Կառլոսը ջուր է խմում։",
    correctSpanishWords: ["Carlos", "bebe", "agua."],
    shuffledWords: ["bebe", "agua.", "Carlos"]
  },
  {
    id: "sb3",
    armenianSentence: "Մենք սովորում ենք իսպաներեն։",
    correctSpanishWords: ["Nosotros", "estudiamos", "español."],
    shuffledWords: ["español.", "estudiamos", "Nosotros"]
  },
  {
    id: "sb4",
    armenianSentence: "Նրանք ֆուտբոլ են խաղում։",
    correctSpanishWords: ["Ellos", "juegan", "al", "fútbol."],
    shuffledWords: ["juegan", "fútbol.", "Ellos", "al"]
  },
  {
    id: "sb5",
    armenianSentence: "Ես իսպաներեն եմ սովորում տանը առավոտյան։",
    correctSpanishWords: ["Yo", "estudio", "español", "en", "casa", "por", "la", "mañana."],
    shuffledWords: ["español", "mañana.", "en", "estudio", "por", "casa", "Yo", "la"]
  }
];

export const fillInBlankQuestions: FillInBlankQuestion[] = [
  {
    id: "fib1",
    sentenceBefore: "Yo",
    sentenceAfter: "español.",
    correctAnswer: "estudio",
    options: ["estudio", "estudias", "estudian"],
    armenianTranslation: "Ես սովորում եմ իսպաներեն։"
  },
  {
    id: "fib2",
    sentenceBefore: "Carlos no",
    sentenceAfter: "hoy.",
    correctAnswer: "estudia",
    options: ["estudio", "estudia", "estudias"],
    armenianTranslation: "Կառլոսը այսօր չի սովորում։"
  },
  {
    id: "fib3",
    sentenceBefore: "Nosotros",
    sentenceAfter: "en casa.",
    correctAnswer: "comemos",
    options: ["como", "comen", "comemos"],
    armenianTranslation: "Մենք ուտում ենք տանը։"
  },
  {
    id: "fib4",
    sentenceBefore: "Yo no",
    sentenceAfter: "francés.",
    correctAnswer: "hablo",
    options: ["hablas", "hablo", "hablan"],
    armenianTranslation: "Ես ֆրանսերեն չեմ խոսում։"
  },
  {
    id: "fib5",
    sentenceBefore: "Ella",
    sentenceAfter: "en una escuela.",
    correctAnswer: "trabaja",
    options: ["trabajo", "trabaja", "trabajas"],
    armenianTranslation: "Նա աշխատում է դպրոցում։"
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Որտե՞ղ է դրվում ժխտական «no» մասնիկը իսպաներենում։",
    options: [
      "Բայից անմիջապես հետո",
      "Բայից անմիջապես առաջ",
      "Նախադասության վերջում",
      "Նախադասության սկզբում (ենթակայից առաջ)"
    ],
    correctIndex: 1,
    explanation: "Կանոն 4-ի համաձայն՝ ժխտելու համար «no» մասնիկը միշտ դրվում է բայից անմիջապես առաջ։ Օրինակ՝ «No estudio» (չեմ սովորում)։"
  },
  {
    id: "q2",
    question: "Ինչպե՞ս է իսպաներենում սովորաբար դասավորվում Ածականը գոյականի նկատմամբ։",
    options: [
      "Միշտ գոյականից առաջ",
      "Սովորաբար գոյականից հետո",
      "Միայն նախադասության վերջում",
      "Ածականի դիրքը կարևոր չէ"
    ],
    correctIndex: 1,
    explanation: "Կանոն 11-ի համաձայն՝ իսպաներենում ածականը սովորաբար դրվում է գոյականից հետո, օրինակ՝ «una casa bonita» (գեղեցիկ տուն)։"
  },
  {
    id: "q3",
    question: "Եթե նախադասության մեջ ունենք և՛ ժամանակ (ե՞րբ), և՛ վայր (որտե՞ղ), ո՞րն է առավել բնական հերթականությունը բայից հետո։",
    options: [
      "Նախ ժամանակը, հետո վայրը (S + V + երբ + որտեղ)",
      "Նախ վայրը, հետո ժամանակը (S + V + որտեղ + երբ)",
      "Երկուսն էլ պարտադիր պետք է լինեն նախադասության սկզբում",
      "Իսպաներենում վայր և ժամանակ միաժամանակ չեն օգտագործվում"
    ],
    correctIndex: 1,
    explanation: "Կանոն 10-ի համաձայն՝ շատ բնական հերթականություն է՝ Ով + բայ + ինչ + որտեղ + երբ։ Օրինակ՝ «Yo estudio español en casa por la mañana»։"
  },
  {
    id: "q4",
    question: "Իսպաներենում հարցական նախադասությունների սկզբում և վերջում ի՞նչ նշաններ են դրվում։",
    options: [
      "Սկզբում՝ ոչինչ, վերջում՝ հարցական նշան (?)",
      "Սկզբում՝ շրջված հարցական նշան (¿), վերջում՝ սովորական հարցական նշան (?)",
      "Երկու կողմերում էլ շրջված հարցական նշաններ (¿ ... ¿)",
      "Նախադասության մեջ միայն հատուկ բացականչական նշաններ (¡ ... !)"
    ],
    correctIndex: 1,
    explanation: "Կանոն 5-ի համաձայն՝ հարց սարքելիս նախադասության սկզբում դնում ենք շրջված հարցական նշան (¿), իսկ վերջում` սովորական (?)։"
  },
  {
    id: "q5",
    question: "Ինչու՞ է իսպաներենում թույլատրելի բաց թողնել անձնական դերանունները (Yo, Tú...)։",
    options: [
      "Որովհետև դերանունները շատ բարդ են արտասանել",
      "Որովհետև բայի վերջավորությունն արդեն հստակ ցույց է տալիս, թե ով է կատարում գործողությունը",
      "Դա թույլատրելի է միայն ժխտական նախադասություններում",
      "Դերանունները բաց թողնելը քերականական սխալ է"
    ],
    correctIndex: 1,
    explanation: "Կանոն 2-ի համաձայն՝ քանի որ բայը փոխվում է ըստ անձի (խոնարհվում է), բայի վերջավորությունն արդեն իսկ հստակեցնում է ենթական, ուստի դերանունը հաճախ բաց է թողնվում։"
  }
];

export const vocabPool: VocabItem[] = [
  { id: "v1", spanish: "coche rojo", armenian: "կարմիր մեքենա" },
  { id: "v2", spanish: "casa bonita", armenian: "գեղեցիկ տուն" },
  { id: "v3", spanish: "chica alta", armenian: "բարձրահասակ աղջիկ" },
  { id: "v4", spanish: "libro interesante", armenian: "հետաքրքիր գիրք" },
  { id: "v5", spanish: "hoy", armenian: "այսօր" },
  { id: "v6", spanish: "mañana", armenian: "վաղը" },
  { id: "v7", spanish: "estudiante", armenian: "ուսանող" },
  { id: "v8", spanish: "escuela", armenian: "դպրոց" },
  { id: "v9", spanish: "mochila", armenian: "պայուսակ" },
  { id: "v10", spanish: "silla", armenian: "աթոռ" },
  { id: "v11", spanish: "agua", armenian: "ջուր" },
  { id: "v12", spanish: "fútbol", armenian: "ֆուտբոլ" }
];

export const serEstarHayQuestions: SerEstarHayQuestion[] = [
  {
    id: "seh1",
    sentence: "Lucía ___ en casa.",
    correctAnswer: "está",
    explanation: "ESTAR բայն օգտագործվում է գտնվելու վայրը ցույց տալու համար։",
    armenianTranslation: "Լուսիան տանն է։"
  },
  {
    id: "seh2",
    sentence: "Lucía ___ estudiante.",
    correctAnswer: "es",
    explanation: "SER բայն օգտագործվում է մասնագիտությունը կամ ինքնությունը նկարագրելու համար։",
    armenianTranslation: "Լուսիան ուսանող է։"
  },
  {
    id: "seh3",
    sentence: "___ un libro en la mesa.",
    correctAnswer: "hay",
    explanation: "HAY բառն օգտագործվում է որևէ առարկայի գոյությունը նշելու համար («կա/կան»)։",
    armenianTranslation: "Սեղանի վրա մի գիրք կա։"
  },
  {
    id: "seh4",
    sentence: "El libro ___ sobre la mesa.",
    correctAnswer: "está",
    explanation: "ESTAR-ն օգտագործվում է որոշակի առարկայի (El libro) գտնվելու տեղը նշելու համար։",
    armenianTranslation: "Գիրքը սեղանի վրա է։"
  },
  {
    id: "seh5",
    sentence: "La casa ___ bonita.",
    correctAnswer: "es",
    explanation: "SER բայն օգտագործվում է բնութագիր, մշտական կամ որակական հատկանիշ նկարագրելու համար («գեղեցիկ է»)։",
    armenianTranslation: "Տունը գեղեցիկ է։"
  },
  {
    id: "seh6",
    sentence: "___ tres estudiantes en la clase.",
    correctAnswer: "hay",
    explanation: "HAY-ը ցույց է տալիս գոյություն, հատկապես թավային կամ քանակական արտահայտությունների հետ («կան երեք ուսանողներ»):",
    armenianTranslation: "Դասարանում երեք ուսանող կա։"
  }
];

export const translationQuestions: TranslationQuestion[] = [
  {
    id: "tr1",
    armenian: "Ես ֆրանսերեն չեմ խոսում։",
    options: [
      "Yo no hablo francés.",
      "Yo no estudio francés.",
      "Yo hablo francés no.",
      "Hablo francés no."
    ],
    correctAnswer: "Yo no hablo francés."
  },
  {
    id: "tr2",
    armenian: "Սեղանի վրա գիրք կա։",
    options: [
      "El libro está sobre la mesa.",
      "Hay un libro en la mesa.",
      "Un libro es sobre la mesa.",
      "La mesa tiene libro."
    ],
    correctAnswer: "Hay un libro en la mesa."
  },
  {
    id: "tr3",
    armenian: "Առավոտյան ես իսպաներեն եմ սովորում տանը։",
    options: [
      "Por la mañana estudio español en casa.",
      "Estudio español hoy en casa.",
      "Yo estudio español por la mañana.",
      "Estudias español en la school mañana."
    ],
    correctAnswer: "Por la mañana estudio español en casa."
  },
  {
    id: "tr4",
    armenian: "Դու իսպաներեն սովորո՞ւմ ես։",
    options: [
      "¿Tú estudias español?",
      "¿Qué estudias?",
      "¿Estudias español no?",
      "¿Estudias francés?"
    ],
    correctAnswer: "¿Tú estudias spanish?"
  },
  {
    id: "tr5",
    armenian: "կարմիր մեքենա",
    options: [
      "un rojo coche",
      "un coche rojo",
      "una coche roja",
      "el coche es rojo"
    ],
    correctAnswer: "un coche rojo"
  }
];
