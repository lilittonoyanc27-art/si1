import { Rule } from './types';

export const theoryRules: Rule[] = [
  {
    id: 1,
    title: "Նախադասության հիմնական կառուցվածքը",
    subtitle: "Sujeto + Verbo + Complemento",
    formula: "Ով + ինչ է անում + ինչ / որտեղ / երբ",
    description: "Իսպաներենում պարզ նախադասությունը սովորաբար կազմվում է շատ հստակ հերթականությամբ։ Հատկապես սկզբնական (A1) փուլում այս կաղապարը ճիշտ խոսելու ձեր լավագույն ուղեցույցն է։",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Yo estudio español.",
        armenian: "Ես սովորում եմ իսպաներեն։",
        breakdown: "Yo (Ենթակա/ես) + estudio (Բայ/սովորում եմ) + español (Լրացում/իսպաներեն)"
      },
      {
        spanish: "Yo leo un libro.",
        armenian: "Ես գիրք եմ կարդում։",
        breakdown: "Yo + leo (կարդում եմ) + un libro (մի գիրք)"
      },
      {
        spanish: "Carlos bebe agua.",
        armenian: "Կառլոսը ջուր է խմում։",
        breakdown: "Carlos + bebe (խմում է) + agua (ջուր)"
      },
      {
        spanish: "Nosotros estudiamos español.",
        armenian: "Մենք սովորում ենք իսպաներեն։"
      }
    ]
  },
  {
    id: 2,
    title: "Իսպաներենում բայը շատ կարևոր է",
    subtitle: "Անձնական դերանունների բացթողումը",
    description: "Իսպաներենում բայերը խոնարհվում են (փոխվում են) ըստ դեմքերի։ Քանի որ յուրաքանչյուր դեմքի համար բայն ունի իրեն բնորոշ վերջավորությունը, անձնական դերանունները (ես, դու, նա...) հաճախ կարելի է բաց թողնել։",
    category: "verbs",
    notes: [
      "Իսպաներենում Yo hablo և Hablo արտահայտությունները լիովին համարժեք են։",
      "Բայի վերջավորությունն արդեն հստակ ցույց է տալիս, թե ով է գործողություն կատարողը։"
    ],
    examples: [
      {
        spanish: "hablar (խոսել)",
        armenian: "Բայի խոնարհման օրինակը",
        breakdown: "Yo hablo (ես խոսում եմ) • Tú hablas (դու խոսում ես) • Él/Ella habla (նա խոսում է) • Nosotros hablamos (մենք խոսում ենք) • Ellos/Ellas hablan (նրանք խոսում են)"
      },
      {
        spanish: "Yo hablo español.",
        armenian: "Ես խոսում եմ իսպաներեն։"
      },
      {
        spanish: "Hablo español.",
        armenian: "Ես խոսում եմ իսպաներեն (առանց դերանվան)։"
      }
    ]
  },
  {
    id: 3,
    title: "Պարզ հաստատական նախադասություն",
    subtitle: "Ենթակա + Բայ + Լրացում",
    description: "Ահա մի քանի դասական դրական նախադասություններ A1 մակարդակի համար, որոնք ցույց են տալիս հիմնական կառուցվածքի կիրառությունը ամենօրյա իրավիճակներում:",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Yo vivo en Armenia.",
        armenian: "Ես ապրում եմ Հայաստանում։"
      },
      {
        spanish: "Tú estudias español.",
        armenian: "Դու սովորում ես իսպաներեն։"
      },
      {
        spanish: "Ella trabaja en una escuela.",
        armenian: "Նա աշխատում է դպրոցում։"
      },
      {
        spanish: "Nosotros comemos en casa.",
        armenian: "Մենք ուտում ենք տանը։"
      },
      {
        spanish: "Ellos juegan al fútbol.",
        armenian: "Նրանք ֆուտբոլ են խաղում։"
      }
    ]
  },
  {
    id: 4,
    title: "Ժխտական նախադասություն",
    subtitle: "Ժխտական 'no' մասնիկի կիրառումը",
    formula: "Ենթակա + no + բայ + լրացում",
    description: "Իսպաներենում նախադասությունը ժխտելու համար բայից ԱՆՄԻՋԱՊԵՍ առաջ դրվում է «no» մասնիկը։ Սա բացարձակ կանոն է։",
    category: "sentence-structure",
    notes: [
      "No-ն երբեք չի կարող դրվել բայից հետո։",
      "Ճիշտ տարբերակ՝ 'No estudio' (Չեմ սովորում)։ Սխալ տարբերակ՝ 'Estudio no'։"
    ],
    examples: [
      {
        spanish: "Yo no hablo francés.",
        armenian: "Ես ֆրանսերեն չեմ խոսում։"
      },
      {
        spanish: "Lucía no come carne.",
        armenian: "Լուսիան միս չի ուտում։"
      },
      {
        spanish: "Carlos no estudia hoy.",
        armenian: "Կառլոսը այսօր չի սովորում։"
      },
      {
        spanish: "Nosotros no vivimos en España.",
        armenian: "Մենք Իսպանիայում չենք ապրում։"
      }
    ]
  },
  {
    id: 5,
    title: "Հարցական նախադասություն",
    subtitle: "Հակադարձ հարցական նշանի կանոնը (¿ ... ?)",
    formula: "¿ + Նախադասություն + ?",
    description: "Իսպաներենում պարզ հարց կազմելը շատ հեշտ է։ Շատ դեպքերում բառերի հերթականությունը բացարձակապես չի փոխվում։ Մենք պարզապես փոխում ենք արտասանության տոնը և նախադասության երկու կողմերում դնում հարցական նշաններ՝ սկզբում շրջված (¿), իսկ վերջում՝ սովորական (?)։",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Tú estudias español.",
        armenian: "Դու սովորում ես իսպաներեն։ (Հաստատական)"
      },
      {
        spanish: "¿Tú estudias español?",
        armenian: "Դու իսպաներեն սովորո՞ւմ ես։ (Հարցական)"
      },
      {
        spanish: "¿Estudias español?",
        armenian: "Իսպաներեն սովորո՞ւմ ես։ (Կարճ ձև՝ առանց դերանվան)"
      }
    ]
  },
  {
    id: 6,
    title: "Ինչպես պատասխանել հարցերին",
    subtitle: "Այո (Sí) և Ոչ (No-ի կրկնապատկումը)",
    description: "Երբ մեզ հարց են տալիս, մենք պատասխանում ենք «Sí» (այո) կամ «No» (ոչ)։ Ուշադրություն դարձրեք, որ ժխտական պատասխաններում «no»-ն հաճախ օգտագործվում է երկու անգամ՝ սկզբում որպես ընդհանուր մերժում, իսկ երկրորդ անգամ բայից առաջ՝ որպես ժխտում։",
    category: "sentence-structure",
    notes: [
      "Առաջին 'No'-ն նշանակում է 'Ոչ' (որպես ստորակետով բաժանված պատասխան)։",
      "Երկրորդ 'no'-ն նշանակում է 'չեմ/չի/չունեմ' և դրվում է բայի կողքին։"
    ],
    examples: [
      {
        spanish: "Sí, estudio español.",
        armenian: "Այո, ես սովորում եմ իսպաներեն։"
      },
      {
        spanish: "No, no estudio español.",
        armenian: "Ոչ, ես իսպաներեն չեմ սովորում։"
      },
      {
        spanish: "No, no tengo clase.",
        armenian: "Ոչ, ես դաս չունեմ։"
      }
    ]
  },
  {
    id: 7,
    title: "Հարցական բառերով հարցեր",
    subtitle: "Գլխավոր հարցական բառերը A1-ում",
    description: "Իսպաներենում հատուկ հարցական բառերը (ի՞նչ, որտե՞ղ, ե՞րբ...) միշտ ունեն շեշտի նշան (tilde) և գրվում են նախադասության ամենասկզբում՝ ¿ նշանից անմիջապես հետո։",
    category: "sentence-structure",
    examples: [
      {
        spanish: "¿Qué estudias? — Estudio español.",
        armenian: "Ի՞նչ ես սովորում։ — Ես իսպաներեն եմ սովորում։",
        breakdown: "¿Qué? — ի՞նչ"
      },
      {
        spanish: "¿Dónde vives? — Vivo en Armenia.",
        armenian: "Որտե՞ղ ես ապրում։ — Ես ապրում եմ Հայաստանում։",
        breakdown: "¿Dónde? — որտե՞ղ"
      },
      {
        spanish: "¿Cuándo estudias? — Estudio por la tarde.",
        armenian: "Ե՞րբ ես սովորում։ — Ես սովորում եմ կեսօրից հետո։",
        breakdown: "¿Cuándo? — ե՞րբ"
      },
      {
        spanish: "¿Quién es ella? — Ella es Lucía.",
        armenian: "Ո՞վ է նա։ — Նա Լուսիան է։",
        breakdown: "¿Quién? — ո՞վ"
      },
      {
        spanish: "¿Cómo estás? — Estoy bien.",
        armenian: "Ինչպե՞ս ես։ — Լավ եմ։",
        breakdown: "¿Cómo? — ինչպե՞ս"
      },
      {
        spanish: "¿Cuántos años tienes? — Tengo doce years / años.",
        armenian: "Քանի՞ տարեկան ես։ — Ես տասներկու տարեկան եմ (tengo doce años)։",
        breakdown: "¿Cuánto? / ¿Cuántos? — ինչքա՞ն / քանի՞"
      }
    ]
  },
  {
    id: 8,
    title: "Որտե՞ղ դնել ժամանակը",
    subtitle: "Hoy, Mañana-ի դիրքը նախադասության մեջ",
    description: "Ժամանակ արտահայտող բառերը (օրինակ՝ Hoy - այսօր, Mañana - վաղը) կարող են դրվել նախադասության սկզբում կամ վերջում։ Սկսնակների համար ամենապարզն ու հարմարը դրանք սկզբում օգտագործելն է։",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Hoy estudio español.",
        armenian: "Այսօր ես իսպաներեն եմ սովորում։ (Սկզբում)"
      },
      {
        spanish: "Estudio español hoy.",
        armenian: "Ես իսպաներեն եմ սովորում այսօր։ (Վերջում)"
      },
      {
        spanish: "Mañana descanso.",
        armenian: "Վաղը հանգստանում եմ։"
      },
      {
        spanish: "Voy al parque mañana.",
        armenian: "Ես գնում եմ այգի վաղը։"
      }
    ]
  },
  {
    id: 9,
    title: "Որտե՞ղ դնել վայրը",
    subtitle: "Գործողության կատարման վայրը",
    description: "Ի տարբերություն ժամանակի, վայր արտահայտող լրացումը (որտեղ...) սովորաբար դրվում է բայից հետո։",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Yo vivo en Ereván.",
        armenian: "Ես ապրում եմ Երևանում։"
      },
      {
        spanish: "Lucía está en casa.",
        armenian: "Լուսիան տանն է։"
      },
      {
        spanish: "Carlos estudia en la escuela.",
        armenian: "Կառլոսը սովորում է դպրոցում։"
      },
      {
        spanish: "El libro está sobre la mesa.",
        armenian: "Գիրքը սեղանի վրա է։"
      }
    ]
  },
  {
    id: 10,
    title: "Եթե նախադասության մեջ կա և՛ ժամանակ, և՛ վայր",
    subtitle: "Բարդ լրացումների հերթականությունը",
    formula: "Ով + բայ + ինչ + որտեղ + երբ",
    description: "Երբ նախադասության մեջ պետք է նշել և՛ վայրը, և՛ ժամանակը, ամենաբնական հերթականությունն է՝ նախ վայրը, հետո ժամանակը։ Սակայն, ժամանակը կարելի է տանել նաև նախադասության ամենասկիզբ:",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Yo estudio español en casa por la mañana.",
        armenian: "Ես իսպաներեն եմ սովորում տանը առավոտյան։",
        breakdown: "en casa (տանը - վայր) + por la mañana (առավոտյան - ժամանակ)"
      },
      {
        spanish: "Por la mañana estudio español en casa.",
        armenian: "Առավոտյան ես իսպաներեն եմ սովորում տանը։ (Ժամանակը սկզբում)"
      },
      {
        spanish: "Carlos juega al fútbol en el parque los sábados.",
        armenian: "Կառլոսը ֆուտբոլ է խաղում այգում շաբաթ օրերին։"
      }
    ]
  },
  {
    id: 11,
    title: "Ածականի դիրքը նախադասության մեջ",
    subtitle: "Գոյական + Ածական տարբերությունը",
    description: "Իսպաներենում ածականը (որպիսությունը ցույց տվող բառը) սովորաբար դրվում է գոյականից ՀԵՏՈ։ Սա հակառակն է հայերենի, որտեղ մենք սկզբում ասում ենք ածականը, հետո՝ գոյականը։",
    category: "nouns-adjectives",
    notes: [
      "Հայերեն՝ «գեղեցիկ տուն»",
      "Իսպաներեն՝ «casa bonita» (բառացի՝ տուն գեղեցիկ)",
      "Բայց եթե ասում ենք «Տունը գեղեցիկ է» (նախադասություն), օգտագործում ենք 'ser' բայը՝ 'La casa es bonita.'"
    ],
    examples: [
      {
        spanish: "una casa bonita",
        armenian: "գեղեցիկ տուն"
      },
      {
        spanish: "un coche rojo",
        armenian: "կարմիր մեքենա"
      },
      {
        spanish: "una chica alta",
        armenian: "բարձրահասակ աղջիկ"
      },
      {
        spanish: "un libro interesante",
        armenian: "հետաքրքիր գիրք"
      },
      {
        spanish: "La casa es bonita.",
        armenian: "Տունը գեղեցիկ է։"
      },
      {
        spanish: "El coche es rojo.",
        armenian: "Մեքենան կարմիր է։"
      }
    ]
  },
  {
    id: 12,
    title: "Որոշյալ և անորոշ հոդեր",
    subtitle: "Հոդի դիրքը գոյականից առաջ",
    description: "Իսպաներենում գոյականների գերակշիռ մասից առաջ պետք է դրվի համապատասխան հոդը՝ ըստ սեռի (արական/իգական) և թվի (եզակի/հոգնակի)։ Հոդը միշտ դրվում է գոյականից ԱՌԱԶ։",
    category: "nouns-adjectives",
    notes: [
      "el — արական սեռ, եզակի թիվ (որոշյալ)",
      "la — իգական սեռ, եզակի թիվ (որոշյալ)",
      "un — արական սեռ, եզակի թիվ (անորոշ՝ «մի»)",
      "una — իգական սեռ, եզակի թիվ (անորոշ՝ «մի»)"
    ],
    examples: [
      {
        spanish: "el libro",
        armenian: "գիրքը"
      },
      {
        spanish: "la mesa",
        armenian: "սեղանը"
      },
      {
        spanish: "un coche",
        armenian: "մի մեքենա"
      },
      {
        spanish: "una casa",
        armenian: "մի տուն"
      },
      {
        spanish: "El libro está sobre la mesa.",
        armenian: "Գիրքը սեղանի վրա է։"
      },
      {
        spanish: "Una chica estudia español.",
        armenian: "Մի աղջիկ սովորում է իսպաներեն։"
      }
    ]
  },
  {
    id: 13,
    title: "Ամենակարևոր տարբերությունը՝ SER / ESTAR / HAY",
    subtitle: "Իսպաներենի երեք տարբեր «լինել/կալ» բայերը",
    description: "Սա իսպաներենի ամենակարևոր թեմաներից է A1-ում։ Մենք ունենք երեք տարբեր բառ, որոնք հայերենում կարող են թարգմանվել նույն կերպ, բայց օգտագործվում են տարբեր նշանակությամբ:",
    category: "essential-verbs",
    notes: [
      "Ser — ով է / ինչ է / ծագումով որտեղից է / ինչպիսին է (մշտական կամ բնութագրող հատկանիշ)",
      "Estar — որտեղ է (գտնվելու վայր) / ինչպես է (ժամանակավոր վիճակ, առողջություն կամ տրամադրություն)",
      "Hay — կա / կան (անձև «կա» գոյություն ունենալու իմաստով)"
    ],
    examples: [
      {
        spanish: "Lucía es estudiante. / Carlos es simpático.",
        armenian: "Լուսիան ուսանող է (մասնագիտություն)։ / Կառլոսը հաճելի է (բնավորություն)։",
        breakdown: "SER-ի կիրառություն"
      },
      {
        spanish: "La casa es bonita.",
        armenian: "Տունը գեղեցիկ է (բնութագիր)։",
        breakdown: "SER-ի կիրառություն"
      },
      {
        spanish: "Lucía está en casa. / Estoy cansada.",
        armenian: "Լուսիան տանն է (վայր)։ / Ես հոգնած եմ (ժամանակավոր ֆիզիկական վիճակ)։",
        breakdown: "ESTAR-ի կիրառություն"
      },
      {
        spanish: "El libro está sobre la mesa.",
        armenian: "Գիրքը սեղանի վրա է (գտնվելու վայր)։",
        breakdown: "ESTAR-ի կիրառություն"
      },
      {
        spanish: "Hay un libro en la mesa.",
        armenian: "Սեղանի վրա գիրք կա (գոյություն, անորոշ առարկա` un libro)։",
        breakdown: "HAY-ի կիրառություն"
      },
      {
        spanish: "Hay tres estudiantes en la clase. / Hay una tienda cerca.",
        armenian: "Դասարանում երեք ուսանող կա։ / Մոտակայքում խանութ կա։",
        breakdown: "HAY-ի կիրառություն"
      }
    ]
  },
  {
    id: 14,
    title: "Ամենապարզ դասական կաղապարները",
    subtitle: "A1 մակարդակի խոսակցական հիմքեր",
    description: "Սկսնակների համար կան մի քանի «ոսկե» նախադասության կաղապարներ, որոնցում բավական է միայն բառերը փոխել՝ հարյուրավոր նոր նախադասություններ ստանալու համար։",
    category: "sentence-structure",
    examples: [
      {
        spanish: "Yo + բայ + ինչ (Yo estudio español / Yo bebo agua)",
        armenian: "Ես + ինչ-որ բան եմ անում (Ես սովորում եմ իսպաներեն / Ես ջուր եմ խմում)"
      },
      {
        spanish: "Yo + բայ + որտեղ (Yo vivo en Armenia / Yo estudio en casa / Yo trabajo en una escuela)",
        armenian: "Ես + գործողություն + տեղանուն (Ես ապրում եմ Հայաստանում / Ես սովորում եմ տանը / Ես աշխատում եմ դպրոցում)"
      },
      {
        spanish: "Yo + բայ + երբ (Yo estudio hoy / Yo descanso mañana / Yo trabajo por la mañana)",
        armenian: "Ես + գործողություն + ժամանակ (Ես սովորում եմ այսօր / Ես հանգստանում եմ վաղը / Ես աշխատում եմ առավոտյան)"
      },
      {
        spanish: "Yo + բայ + ինչ + որտեղ + երբ (Yo estudio español en casa por la tarde.)",
        armenian: "Ես իսպաներեն եմ սովորում տանը կեսօրից հետո։"
      }
    ]
  },
  {
    id: 15,
    title: "Պարզ խոսակցական նախակաղապարներ A1",
    subtitle: "Ավելի շատ պարզ օրինակներ",
    description: "Ամփոփենք A1 մակարդակի կարևորագույն պարզ արտահայտությունները, որոնք կազմված են վերոնշյալ բոլոր կանոնների համաձայն։",
    category: "essential-verbs",
    examples: [
      {
        spanish: "Hoy es lunes. / Mañana es martes.",
        armenian: "Այսօր երկուշաբթի է։ / Վաղը երեքշաբթի է։"
      },
      {
        spanish: "Yo tengo clase hoy. / No tengo clase mañana.",
        armenian: "Ես այսօր դաս ունեմ։ / Ես վաղը դաս չունեմ։"
      },
      {
        spanish: "Lucía vive en España. / Carlos estudia español.",
        armenian: "Լուսիան ապրում է Իսպանիայում։ / Կառլոսը իսպաներեն է սովորում։"
      },
      {
        spanish: "El libro está en la mesa. / Hay una mochila en la silla.",
        armenian: "Գիրքը սեղանի վրա է։ / Աթոռի վրա պայուսակ (mochila) կա։"
      }
    ]
  }
];
