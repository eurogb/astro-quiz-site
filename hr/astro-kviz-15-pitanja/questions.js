const allQuizSets = {
  firstSet: {
    glad: [
    {
      question: "Što prvo tražiš kad si gladan?",
      answers: [
        { text: "Nešto slatko", sign: "Vaga" },
        { text: "Toplu juhu", sign: "Rak" },
        { text: "Meso i ništa drugo", sign: "Ovan" },
        { text: "Nešto egzotično", sign: "Strijelac" }
      ]
    },
    {
      question: "Koju hranu nikad ne bi odbio?",
      answers: [
        { text: "Pizza", sign: "Lav" },
        { text: "Čokolada", sign: "Vaga" },
        { text: "Riblji specijalitet", sign: "Ribe" },
        { text: "Roštilj", sign: "Ovan" }
      ]
    },
    {
      question: "Kako se ponašaš kad si jako gladan?",
      answers: [
        { text: "Tiho patim", sign: "Ribe" },
        { text: "Postajem nervozan", sign: "Jarac" },
        { text: "Zbijam šale", sign: "Blizanci" },
        { text: "Tražim hranu odmah", sign: "Lav" }
      ]
    }
  ],

  strpljenje: [
    {
      question: "Kako reagiraš kad moraš čekati?",
      answers: [
        { text: "Strpljivo, ali nervozno", sign: "Jarac" },
        { text: "Zabavljam se dok čekam", sign: "Blizanci" },
        { text: "Ne volim čekati", sign: "Ovan" },
        { text: "Zamišljam nešto lijepo", sign: "Ribe" }
      ]
    },
    {
      question: "Što radiš kad netko kasni?",
      answers: [
        { text: "Pišem poruku", sign: "Lav" },
        { text: "Odlazim", sign: "Strijelac" },
        { text: "Čekam u tišini", sign: "Rak" },
        { text: "Zovem ih odmah", sign: "Jarac" }
      ]
    },
    {
      question: "Kako se nosiš s dosadom?",
      answers: [
        { text: "Tražim nešto novo", sign: "Blizanci" },
        { text: "Meditiram", sign: "Ribe" },
        { text: "Planiram sljedeći korak", sign: "Jarac" },
        { text: "Gubim strpljenje", sign: "Ovan" }
      ]
    }
  ],

  sukob: [
    {
      question: "Kako rješavaš sukobe?",
      answers: [
        { text: "Direktno i brzo", sign: "Ovan" },
        { text: "Diplomatski", sign: "Vaga" },
        { text: "Povlačim se", sign: "Ribe" },
        { text: "Zbijam šale", sign: "Blizanci" }
      ]
    },
    {
      question: "Tvoja reakcija na kritiku?",
      answers: [
        { text: "Branim se", sign: "Lav" },
        { text: "Razmislim o tome", sign: "Jarac" },
        { text: "Ignoriram", sign: "Strijelac" },
        { text: "Pitam za detalje", sign: "Rak" }
      ]
    },
    {
      question: "Kad se posvađaš, što radiš?",
      answers: [
        { text: "Isključim se", sign: "Ribe" },
        { text: "Tražim pomirenje", sign: "Vaga" },
        { text: "Odlazim", sign: "Strijelac" },
        { text: "Borim se do kraja", sign: "Ovan" }
      ]
    }
  ],

  ljubav: [
    {
      question: "Tvoj ljubavni stil?",
      answers: [
        { text: "Strastven i direktan", sign: "Ovan" },
        { text: "Nježan i pažljiv", sign: "Rak" },
        { text: "Zabavan i nepredvidiv", sign: "Blizanci" },
        { text: "Romantičan i elegantan", sign: "Vaga" }
      ]
    },
    {
      question: "Što te najviše privlači?",
      answers: [
        { text: "Samopouzdanje", sign: "Lav" },
        { text: "Dubina emocija", sign: "Ribe" },
        { text: "Pamet i humor", sign: "Jarac" },
        { text: "Sloboda i spontanost", sign: "Strijelac" }
      ]
    },
    {
      question: "Kako pokazuješ ljubav?",
      answers: [
        { text: "Poklonima", sign: "Lav" },
        { text: "Zagrljajima", sign: "Rak" },
        { text: "Riječima", sign: "Blizanci" },
        { text: "Gestama", sign: "Vaga" }
      ]
    }
  ],

  avantura: [
    {
      question: "Tvoj idealan vikend?",
      answers: [
        { text: "Planinarenje", sign: "Strijelac" },
        { text: "Spa i opuštanje", sign: "Rak" },
        { text: "Istraživanje grada", sign: "Blizanci" },
        { text: "Zabava s ekipom", sign: "Lav" }
      ]
    },
    {
      question: "Kako biraš destinaciju?",
      answers: [
        { text: "Spontano", sign: "Ovan" },
        { text: "Prema recenzijama", sign: "Jarac" },
        { text: "Prema osjećaju", sign: "Ribe" },
        { text: "Prema estetici", sign: "Vaga" }
      ]
    },
    {
      question: "Što te najviše uzbuđuje?",
      answers: [
        { text: "Nepoznato", sign: "Strijelac" },
        { text: "Luksuz", sign: "Lav" },
        { text: "Priroda", sign: "Rak" },
        { text: "Ljudi", sign: "Blizanci" }
      ]
    }
  ]
  },


  secondSet: {
 glad: [
      {
        question: "Kojim jelom započinješ dan?",
        answers: [
          { text: "Kava i ništa drugo", sign: "Jarac" },
          { text: "Voćni smoothie", sign: "Ribe" },
          { text: "Jaja i tost", sign: "Ovan" },
          { text: "Nešto slatko", sign: "Vaga" }
        ]
      },
      {
        question: "Što ti je najvažnije u obroku?",
        answers: [
          { text: "Okus", sign: "Lav" },
          { text: "Nutritivna vrijednost", sign: "Jarac" },
          { text: "Estetika", sign: "Vaga" },
          { text: "Količina", sign: "Ovan" }
        ]
      },
      {
        question: "Kako biraš restoran?",
        answers: [
          { text: "Preporuke", sign: "Strijelac" },
          { text: "Instagram izgled", sign: "Vaga" },
          { text: "Blizina", sign: "Blizanci" },
          { text: "Cijena", sign: "Jarac" }
        ]
      }
    ],
    strpljenje: [
      {
        question: "Kako se ponašaš u redu čekanja?",
        answers: [
          { text: "Razgovaram s ljudima", sign: "Blizanci" },
          { text: "Stojim tiho", sign: "Rak" },
          { text: "Provjeravam telefon", sign: "Jarac" },
          { text: "Odlazim", sign: "Ovan" }
        ]
      },
      {
        question: "Kako reagiraš na prometnu gužvu?",
        answers: [
          { text: "Pjevam u autu", sign: "Lav" },
          { text: "Planiram alternativu", sign: "Jarac" },
          { text: "Gubim živce", sign: "Ovan" },
          { text: "Zamišljam da sam negdje drugdje", sign: "Ribe" }
        ]
      },
      {
        question: "Što radiš kad ti netko kasni?",
        answers: [
          { text: "Zovem ih", sign: "Jarac" },
          { text: "Pišem poruku", sign: "Lav" },
          { text: "Odlazim", sign: "Strijelac" },
          { text: "Čekam u tišini", sign: "Rak" }
        ]
      }
    ],
    sukob: [
      {
        question: "Kako reagiraš kad se netko ne slaže s tobom?",
        answers: [
          { text: "Branim svoje mišljenje", sign: "Ovan" },
          { text: "Slušam i analiziram", sign: "Jarac" },
          { text: "Zbijam šale", sign: "Blizanci" },
          { text: "Ignoriram", sign: "Strijelac" }
        ]
      },
      {
        question: "Kako se ponašaš u grupnoj raspravi?",
        answers: [
          { text: "Preuzimam vodstvo", sign: "Lav" },
          { text: "Pokušavam pomiriti strane", sign: "Vaga" },
          { text: "Povlačim se", sign: "Ribe" },
          { text: "Postavljam pitanja", sign: "Rak" }
        ]
      },
      {
        question: "Kako rješavaš nesporazume?",
        answers: [
          { text: "Direktno", sign: "Ovan" },
          { text: "Diplomatski", sign: "Vaga" },
          { text: "S analizom", sign: "Jarac" },
          { text: "S humorom", sign: "Blizanci" }
        ]
      }
    ],
    ljubav: [
      {
        question: "Kako flertuješ?",
        answers: [
          { text: "Pogledom", sign: "Vaga" },
          { text: "Šalama", sign: "Blizanci" },
          { text: "Direktno", sign: "Ovan" },
          { text: "Pažnjom", sign: "Rak" }
        ]
      },
      {
        question: "Koji je tvoj idealan spoj?",
        answers: [
          { text: "Večera uz svijeće", sign: "Vaga" },
          { text: "Avantura u prirodi", sign: "Strijelac" },
          { text: "Filmska večer", sign: "Rak" },
          { text: "Nešto spontano", sign: "Blizanci" }
        ]
      },
      {
        question: "Kako pokazuješ osjećaje?",
        answers: [
          { text: "Riječima", sign: "Blizanci" },
          { text: "Djelima", sign: "Jarac" },
          { text: "Zagrljajima", sign: "Rak" },
          { text: "Poklonima", sign: "Lav" }
        ]
      }
    ],
    avantura: [
      {
        question: "Koji je tvoj stil putovanja?",
        answers: [
          { text: "Backpacking", sign: "Strijelac" },
          { text: "Luksuzni hoteli", sign: "Lav" },
          { text: "Kampiranje", sign: "Rak" },
          { text: "City break", sign: "Blizanci" }
        ]
      },
      {
        question: "Što te najviše privlači u destinaciji?",
        answers: [
          { text: "Kultura", sign: "Jarac" },
          { text: "Hrana", sign: "Rak" },
          { text: "Ljudi", sign: "Blizanci" },
          { text: "Priroda", sign: "Strijelac" }
        ]
      },
      {
        question: "Kako se ponašaš na putovanju?",
        answers: [
          { text: "Planiram sve", sign: "Jarac" },
          { text: "Pratim intuiciju", sign: "Ribe" },
          { text: "Tražim zabavu", sign: "Lav" },
          { text: "Istražujem lokalno", sign: "Strijelac" }
        ]
      }
    ]
  },

  thirdSet: {
   glad: [
    {
      question: "Što jedeš kad si pod stresom?",
      answers: [
        { text: "Slatkiše", sign: "Vaga" },
        { text: "Ne jedem ništa", sign: "Jarac" },
        { text: "Sve što nađem", sign: "Ovan" },
        { text: "Nešto toplo", sign: "Rak" }
      ]
    },
    {
      question: "Tvoj comfort food?",
      answers: [
        { text: "Čokolada", sign: "Vaga" },
        { text: "Juha", sign: "Rak" },
        { text: "Pizza", sign: "Lav" },
        { text: "Roštilj", sign: "Ovan" }
      ]
    },
    {
      question: "Kako se ponašaš kad si gladan?",
      answers: [
        { text: "Postajem nervozan", sign: "Jarac" },
        { text: "Zbijam šale", sign: "Blizanci" },
        { text: "Tiho patim", sign: "Ribe" },
        { text: "Tražim hranu odmah", sign: "Lav" }
      ]
    }
  ],
  strpljenje: [
    {
      question: "Kako se nosiš s čekanjem?",
      answers: [
        { text: "Planiram", sign: "Jarac" },
        { text: "Zamišljam", sign: "Ribe" },
        { text: "Zabavljam se", sign: "Blizanci" },
        { text: "Gubim živce", sign: "Ovan" }
      ]
    },
    {
      question: "Što radiš kad ti netko kasni?",
      answers: [
        { text: "Zovem ih", sign: "Jarac" },
        { text: "Odlazim", sign: "Strijelac" },
        { text: "Čekam u tišini", sign: "Rak" },
        { text: "Pišem poruku", sign: "Lav" }
      ]
    },
    {
      question: "Kako se ponašaš u dosadi?",
      answers: [
        { text: "Tražim zabavu", sign: "Blizanci" },
        { text: "Meditiram", sign: "Ribe" },
        { text: "Planiram", sign: "Jarac" },
        { text: "Gubim fokus", sign: "Ovan" }
      ]
    }
  ],
  sukob: [
    {
      question: "Kako rješavaš sukobe?",
      answers: [
        { text: "Direktno", sign: "Ovan" },
        { text: "Diplomatski", sign: "Vaga" },
        { text: "Povlačim se", sign: "Ribe" },
        { text: "Zbijam šale", sign: "Blizanci" }
      ]
    },
    {
      question: "Tvoja reakcija na kritiku?",
      answers: [
        { text: "Branim se", sign: "Lav" },
        { text: "Razmislim", sign: "Jarac" },
        { text: "Ignoriram", sign: "Strijelac" },
        { text: "Pitam za detalje", sign: "Rak" }
      ]
    },
    {
      question: "Kad se posvađaš, što radiš?",
      answers: [
        { text: "Isključim se", sign: "Ribe" },
        { text: "Tražim pomirenje", sign: "Vaga" },
        { text: "Odlazim", sign: "Strijelac" },
        { text: "Borim se", sign: "Ovan" }
      ]
    }
  ],
  ljubav: [
    {
      question: "Kako pokazuješ ljubav?",
      answers: [
        { text: "Riječima", sign: "Blizanci" },
        { text: "Zagrljajima", sign: "Rak" },
        { text: "Poklonima", sign: "Lav" },
        { text: "Djelima", sign: "Jarac" }
      ]
    },
    {
      question: "Tvoj idealan spoj?",
      answers: [
        { text: "Romantična večera", sign: "Vaga" },
        { text: "Planinarenje", sign: "Strijelac" },
        { text: "Filmska večer", sign: "Rak" },
        { text: "Spontano druženje", sign: "Blizanci" }
      ]
    },
    {
      question: "Kako flertuješ?",
      answers: [
        { text: "Pogledom", sign: "Vaga" },
        { text: "Šalama", sign: "Blizanci" },
        { text: "Direktno", sign: "Ovan" },
        { text: "Pažnjom", sign: "Rak" }
      ]
    }
  ],
  avantura: [
    {
      question: "Tvoj stil putovanja?",
      answers: [
        { text: "Backpacking", sign: "Strijelac" },
        { text: "Luksuz", sign: "Lav" },
        { text: "Kampiranje", sign: "Rak" },
        { text: "City break", sign: "Blizanci" }
      ]
    },
    {
      question: "Što te najviše privlači?",
      answers: [
        { text: "Kultura", sign: "Jarac" },
        { text: "Hrana", sign: "Rak" },
        { text: "Ljudi", sign: "Blizanci" },
        { text: "Priroda", sign: "Strijelac" }
      ]
    },
    {
      question: "Kako se ponašaš na putovanju?",
      answers: [
        { text: "Planiram sve", sign: "Jarac" },
        { text: "Pratim intuiciju", sign: "Ribe" },
        { text: "Tražim zabavu", sign: "Lav" },
        { text: "Istražujem lokalno", sign: "Strijelac" }
      ]
    }
  ]
  },





  fourthSet: {
    glad: [
    {
      question: "Što ti je najvažnije kad jedeš vani?",
      answers: [
        { text: "Ambijent", sign: "Vaga" },
        { text: "Brzina usluge", sign: "Ovan" },
        { text: "Kvaliteta hrane", sign: "Jarac" },
        { text: "Društvo", sign: "Blizanci" }
      ]
    },
    {
      question: "Tvoj guilty pleasure snack?",
      answers: [
        { text: "Čips", sign: "Lav" },
        { text: "Sladoled", sign: "Rak" },
        { text: "Čokolada", sign: "Vaga" },
        { text: "Sendvič", sign: "Ovan" }
      ]
    },
    {
      question: "Kada najviše uživaš u hrani?",
      answers: [
        { text: "Kad sam sam", sign: "Jarac" },
        { text: "U društvu", sign: "Blizanci" },
        { text: "Na odmoru", sign: "Strijelac" },
        { text: "Kod kuće", sign: "Rak" }
      ]
    }
  ],
  strpljenje: [
    {
      question: "Kako se ponašaš kad moraš čekati?",
      answers: [
        { text: "Razmišljam o nečem drugom", sign: "Ribe" },
        { text: "Zabavljam se", sign: "Blizanci" },
        { text: "Gubim strpljenje", sign: "Ovan" },
        { text: "Planiram", sign: "Jarac" }
      ]
    },
    {
      question: "Kako reagiraš na tehničke poteškoće?",
      answers: [
        { text: "Smireno", sign: "Rak" },
        { text: "Frustrirano", sign: "Ovan" },
        { text: "Tražim rješenje", sign: "Jarac" },
        { text: "Zbijam šale", sign: "Blizanci" }
      ]
    },
    {
      question: "Kako se nosiš s dosadom?",
      answers: [
        { text: "Tražim nešto novo", sign: "Strijelac" },
        { text: "Zamišljam", sign: "Ribe" },
        { text: "Radim nešto korisno", sign: "Jarac" },
        { text: "Gledam memeove", sign: "Blizanci" }
      ]
    }
  ],
  sukob: [
    {
      question: "Kako se ponašaš u raspravi?",
      answers: [
        { text: "Branim svoje", sign: "Ovan" },
        { text: "Pokušavam pomiriti", sign: "Vaga" },
        { text: "Ignoriram", sign: "Strijelac" },
        { text: "Slušam pažljivo", sign: "Rak" }
      ]
    },
    {
      question: "Kako reagiraš na nepravdu?",
      answers: [
        { text: "Borim se", sign: "Ovan" },
        { text: "Pišem o tome", sign: "Jarac" },
        { text: "Dijelim na društvenim mrežama", sign: "Blizanci" },
        { text: "Pokušavam razumjeti", sign: "Ribe" }
      ]
    },
    {
      question: "Kako rješavaš sukobe s prijateljima?",
      answers: [
        { text: "Direktno razgovaram", sign: "Ovan" },
        { text: "Čekam da prođe", sign: "Ribe" },
        { text: "Zbijam šale", sign: "Blizanci" },
        { text: "Pišem poruku", sign: "Vaga" }
      ]
    }
  ],
  ljubav: [
    {
      question: "Kako pokazuješ ljubav?",
      answers: [
        { text: "Poklonima", sign: "Lav" },
        { text: "Zagrljajima", sign: "Rak" },
        { text: "Riječima", sign: "Blizanci" },
        { text: "Djelima", sign: "Jarac" }
      ]
    },
    {
      question: "Tvoj idealan partner je...",
      answers: [
        { text: "Zabavan", sign: "Blizanci" },
        { text: "Pažljiv", sign: "Rak" },
        { text: "Strastven", sign: "Ovan" },
        { text: "Romantičan", sign: "Vaga" }
      ]
    },
    {
      question: "Kako flertuješ?",
      answers: [
        { text: "Pogledom", sign: "Vaga" },
        { text: "Šalama", sign: "Blizanci" },
        { text: "Direktno", sign: "Ovan" },
        { text: "Pažnjom", sign: "Rak" }
      ]
    }
  ],
  avantura: [
    {
      question: "Tvoj stil putovanja?",
      answers: [
        { text: "Backpacking", sign: "Strijelac" },
        { text: "Luksuz", sign: "Lav" },
        { text: "Kampiranje", sign: "Rak" },
        { text: "City break", sign: "Blizanci" }
      ]
    },
    {
      question: "Što te najviše privlači?",
      answers: [
        { text: "Kultura", sign: "Jarac" },
        { text: "Hrana", sign: "Rak" },
        { text: "Ljudi", sign: "Blizanci" },
        { text: "Priroda", sign: "Strijelac" }
      ]
    },
    {
      question: "Kako se ponašaš na putovanju?",
      answers: [
        { text: "Planiram sve", sign: "Jarac" },
        { text: "Pratim intuiciju", sign: "Ribe" },
        { text: "Tražim zabavu", sign: "Lav" },
        { text: "Istražujem lokalno", sign: "Strijelac" }
      ]
    }
  ]
  },

  fifthSet: {
    glad: [
    {
      question: "Što jedeš kad si tužan?",
      answers: [
        { text: "Sladoled", sign: "Rak" },
        { text: "Čokoladu", sign: "Vaga" },
        { text: "Ne jedem", sign: "Jarac" },
        { text: "Sve što nađem", sign: "Ovan" }
      ]
    },
    {
      question: "Tvoj idealan doručak?",
      answers: [
        { text: "Kava i kroasan", sign: "Vaga" },
        { text: "Smoothie bowl", sign: "Ribe" },
        { text: "Jaja i tost", sign: "Ovan" },
        { text: "Ne jedem doručak", sign: "Jarac" }
      ]
    },
    {
      question: "Kako se ponašaš kad si gladan?",
      answers: [
        { text: "Postajem nervozan", sign: "Ovan" },
        { text: "Zbijam šale", sign: "Blizanci" },
        { text: "Tiho patim", sign: "Ribe" },
        { text: "Tražim hranu odmah", sign: "Lav" }
      ]
    }
  ],
  strpljenje: [
    {
      question: "Kako se ponašaš u redu?",
      answers: [
        { text: "Razgovaram", sign: "Blizanci" },
        { text: "Stojim tiho", sign: "Rak" },
        { text: "Provjeravam telefon", sign: "Jarac" },
        { text: "Odlazim", sign: "Ovan" }
      ]
    },
    {
      question: "Kako reagiraš na kašnjenje?",
      answers: [
        { text: "Zovem", sign: "Jarac" },
        { text: "Odlazim", sign: "Strijelac" },
        { text: "Čekam", sign: "Rak" },
        { text: "Pišem poruku", sign: "Lav" }
      ]
    },
    {
      question: "Kako se nosiš s dosadom?",
      answers: [
        { text: "Tražim nešto novo", sign: "Strijelac" },
        { text: "Zamišljam", sign: "Ribe" },
        { text: "Radim nešto korisno", sign: "Jarac" },
        { text: "Gledam memeove", sign: "Blizanci" }
      ]
    }
  ],
  sukob: [
    {
      question: "Kako reagiraš kad te netko prekine?",
      answers: [
        { text: "Prekidam i ja", sign: "Ovan" },
        { text: "Ignoriram", sign: "Strijelac" },
        { text: "Zbijam šalu", sign: "Blizanci" },
        { text: "Smireno nastavim", sign: "Rak" }
      ]
    },
    {
      question: "Kako se ponašaš u raspravi?",
      answers: [
        { text: "Branim svoje", sign: "Ovan" },
        { text: "Pokušavam pomiriti", sign: "Vaga" },
        { text: "Ignoriram", sign: "Strijelac" },
        { text: "Slušam pažljivo", sign: "Rak" }
      ]
    },
    {
      question: "Kako rješavaš sukobe s prijateljima?",
      answers: [
        { text: "Direktno razgovaram", sign: "Ovan" },
        { text: "Čekam da prođe", sign: "Ribe" },
        { text: "Zbijam šale", sign: "Blizanci" },
        { text: "Pišem poruku", sign: "Vaga" }
      ]
    }
  ],
  ljubav: [
    {
      question: "Kako pokazuješ ljubav?",
      answers: [
        { text: "Poklonima", sign: "Lav" },
        { text: "Zagrljajima", sign: "Rak" },
        { text: "Riječima", sign: "Blizanci" },
        { text: "Djelima", sign: "Jarac" }
      ]
    },
    {
      question: "Tvoj idealan partner je...",
      answers: [
        { text: "Zabavan", sign: "Blizanci" },
        { text: "Pažljiv", sign: "Rak" },
        { text: "Strastven", sign: "Ovan" },
        { text: "Romantičan", sign: "Vaga" }
      ]
    },
    {
      question: "Kako flertuješ?",
      answers: [
        { text: "Pogledom", sign: "Vaga" },
        { text: "Šalama", sign: "Blizanci" },
        { text: "Direktno", sign: "Ovan" },
        { text: "Pažnjom", sign: "Rak" }
      ]
    }
  ],
  avantura: [
    {
      question: "Tvoj stil putovanja?",
      answers: [
        { text: "Backpacking", sign: "Strijelac" },
        { text: "Luksuz", sign: "Lav" },
        { text: "Kampiranje", sign: "Rak" },
        { text: "City break", sign: "Blizanci" }
      ]
    },
    {
      question: "Što te najviše privlači?",
      answers: [
        { text: "Kultura", sign: "Jarac" },
        { text: "Hrana", sign: "Rak" },
        { text: "Ljudi", sign: "Blizanci" },
        { text: "Priroda", sign: "Strijelac" }
      ]
    },
    {
      question: "Kako se ponašaš na putovanju?",
      answers: [
        { text: "Planiram sve", sign: "Jarac" },
        { text: "Pratim intuiciju", sign: "Ribe" },
        { text: "Tražim zabavu", sign: "Lav" },
        { text: "Istražujem lokalno", sign: "Strijelac" }
      ]
    }
  ]
  }
};
