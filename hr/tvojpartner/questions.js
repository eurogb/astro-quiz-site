 // 📦 Quiz data — insert your full allQuizSets object here
const allQuizSets = {
  idealPartnerSet: {
"Emocionalna Kemija": [
    {
      question: "Što ti daje osjećaj sigurnosti u vezi?",
      answers: [
        { text: "Iskreni razgovori", sign: "Rak" },
        { text: "Rutina i predvidljivost", sign: "Bik" },
        { text: "Zajednički ciljevi", sign: "Ribe" },
        { text: "Duboka emocionalna povezanost", sign: "Škorpion" }
      ]
    },
    {
      question: "Kako reagiraš kad partner pokaže ranjivost?",
      answers: [
        { text: "Grlim i slušam", sign: "Rak" },
        { text: "Pokušavam riješiti problem", sign: "Djevica" },
        { text: "Pružam prostor", sign: "Vodenjak" },
        { text: "Postajem još bliži", sign: "Ribe" }
      ]
    },
    {
      question: "Koja gesta ti najbrže otopi srce?",
      answers: [
        { text: "Ručna poruka", sign: "Ribe" },
        { text: "Neočekivani zagrljaj", sign: "Rak" },
        { text: "Pažljiv poklon", sign: "Lav" },
        { text: "Zajednički trenutak u tišini", sign: "Bik" }
      ]
    }
  ],

  "Fizicka Privlacnost": [
    {
      question: "Kakav spoj ti najviše odgovara?",
      answers: [
        { text: "Večera uz svijeće", sign: "Bik" },
        { text: "Ples i zabava", sign: "Lav" },
        { text: "Spontana avantura", sign: "Ovan" },
        { text: "Filmska večer kod kuće", sign: "Rak" }
      ]
    },
    {
      question: "Koji oblik nježnosti ti najviše odgovara?",
      answers: [
        { text: "Nježni dodiri", sign: "Rak" },
        { text: "Strastveni poljupci", sign: "Škorpion" },
        { text: "Zaigrano zadirkivanje", sign: "Blizanci" },
        { text: "Zagrljaji bez riječi", sign: "Bik" }
      ]
    },
    {
      question: "Koliko ti je važna kemija na prvi pogled?",
      answers: [
        { text: "Presudna je", sign: "Strijelac" },
        { text: "Razvija se s vremenom", sign: "Jarac" },
        { text: "Bitna, ali nije sve", sign: "Vodenjak" },
        { text: "Važna je samo ako je obostrana", sign: "Vaga" }
      ]
    }
  ],

  "Mentalna Uskladjenost": [
    {
      question: "Kakvi razgovori te najviše privlače?",
      answers: [
        { text: "Filozofski i duboki", sign: "Vodenjak" },
        { text: "Zabavni i duhoviti", sign: "Blizanci" },
        { text: "Inspirativni i motivacijski", sign: "Strijelac" },
        { text: "Praktični i konkretni", sign: "Djevica" }
      ]
    },
    {
      question: "Kako najradije provodiš slobodno vrijeme?",
      answers: [
        { text: "Čitam i učim", sign: "Djevica" },
        { text: "Putujem i istražujem", sign: "Strijelac" },
        { text: "Opuštam se s partnerom", sign: "Rak" },
        { text: "Radim na osobnim projektima", sign: "Jarac" }
      ]
    },
    {
      question: "Što za tebe znači 'moćan par'?",
      answers: [
        { text: "Zajedno gradimo karijeru", sign: "Jarac" },
        { text: "Stvaramo ljepotu i umjetnost", sign: "Vaga" },
        { text: "Putujemo svijetom", sign: "Strijelac" },
        { text: "Pomažemo drugima", sign: "Ribe" }
      ]
    }
  ],

  "Dugorocna Veza": [
    {
      question: "Što ti je najvažnije u vezi?",
      answers: [
        { text: "Strast", sign: "Ovan" },
        { text: "Stabilnost", sign: "Bik" },
        { text: "Zajednički rast", sign: "Jarac" },
        { text: "Sloboda i razumijevanje", sign: "Vodenjak" }
      ]
    },
    {
      question: "Kako dijeliš odgovornosti u vezi?",
      answers: [
        { text: "Ravnomjerno", sign: "Vaga" },
        { text: "Preuzimam inicijativu", sign: "Lav" },
        { text: "Podržavam iz pozadine", sign: "Djevica" },
        { text: "Dogovaramo sve zajedno", sign: "Rak" }
      ]
    },
    {
      question: "Kako izgleda tvoja vizija 'zauvijek'?",
      answers: [
        { text: "Topli dom i obitelj", sign: "Rak" },
        { text: "Zajednički uspjeh", sign: "Jarac" },
        { text: "Životna avantura", sign: "Strijelac" },
        { text: "Veza puna razumijevanja", sign: "Vodenjak" }
      ]
    }
  ],

  tajnaPrivlacnost: [
    {
      question: "Kakav te partner potajno privlači?",
      answers: [
        { text: "Hrabar i nepredvidiv", sign: "Ovan" },
        { text: "Tajanstven i intenzivan", sign: "Škorpion" },
        { text: "Distanciran ali intrigantan", sign: "Vodenjak" },
        { text: "Zabavan i neuhvatljiv", sign: "Blizanci" }
      ]
    },
    {
      question: "Koja je tvoja ljubavna slabost?",
      answers: [
        { text: "Drama i strast", sign: "Lav" },
        { text: "Tajno obožavanje", sign: "Ribe" },
        { text: "Igre moći", sign: "Škorpion" },
        { text: "Nezavisni partneri", sign: "Strijelac" }
      ]
    },
    {
      question: "Koju osobinu potajno obožavaš?",
      answers: [
        { text: "Samopouzdanje", sign: "Lav" },
        { text: "Emocionalna dubina", sign: "Rak" },
        { text: "Buntovni duh", sign: "Vodenjak" },
        { text: "Analitičnost", sign: "Djevica" }
      ]
    }
  ]
},


astroPovezanostSet: {
  Komunikacija: [
    {
      question: "Kako započinješ razgovor s nekim tko ti se sviđa?",
      answers: [
        { text: "Direktno i iskreno", sign: "Ovan" },
        { text: "Zabavnom dosjetkom", sign: "Blizanci" },
        { text: "Pažljivim pitanjem", sign: "Rak" },
        { text: "Zagonetnom rečenicom", sign: "Škorpion" }
      ]
    },
    {
      question: "Što ti je najvažnije u komunikaciji?",
      answers: [
        { text: "Iskrenost", sign: "Strijelac" },
        { text: "Dubina", sign: "Ribe" },
        { text: "Ravnoteža", sign: "Vaga" },
        { text: "Brzina i jasnoća", sign: "Djevica" }
      ]
    },
    {
      question: "Kako reagiraš na tišinu u vezi?",
      answers: [
        { text: "Zabrinem se", sign: "Rak" },
        { text: "Uživam u miru", sign: "Bik" },
        { text: "Pokušavam razbiti tišinu", sign: "Blizanci" },
        { text: "Analiziram situaciju", sign: "Jarac" }
      ]
    }
  ],

  energija: [
    {
      question: "Kako se ponašaš kad si zaljubljen/a?",
      answers: [
        { text: "Ne mogu mirno sjediti", sign: "Ovan" },
        { text: "Postajem nježan/na", sign: "Rak" },
        { text: "Zračim samopouzdanjem", sign: "Lav" },
        { text: "Povučem se i promatram", sign: "Škorpion" }
      ]
    },
    {
      question: "Koja energija te najviše privlači?",
      answers: [
        { text: "Strastvena", sign: "Ovan" },
        { text: "Smirena", sign: "Bik" },
        { text: "Zagonetna", sign: "Škorpion" },
        { text: "Zabavna", sign: "Blizanci" }
      ]
    },
    {
      question: "Kako se puniš energijom?",
      answers: [
        { text: "Kroz fizičku aktivnost", sign: "Strijelac" },
        { text: "Kroz umjetnost", sign: "Ribe" },
        { text: "Kroz razgovore", sign: "Vodenjak" },
        { text: "Kroz samoću", sign: "Jarac" }
      ]
    }
  ],

  intuicija: [
    {
      question: "Kako znaš da ti se netko sviđa?",
      answers: [
        { text: "Osjećam to odmah", sign: "Ribe" },
        { text: "Primjećujem sitnice", sign: "Djevica" },
        { text: "Povežem se kroz pogled", sign: "Škorpion" },
        { text: "Zanima me njihova energija", sign: "Vodenjak" }
      ]
    },
    {
      question: "Vjeruješ li svojoj intuiciji?",
      answers: [
        { text: "Uvijek", sign: "Ribe" },
        { text: "Samo kad je jako snažna", sign: "Rak" },
        { text: "Radije se oslanjam na logiku", sign: "Jarac" },
        { text: "Intuicija mi je vodič", sign: "Škorpion" }
      ]
    },
    {
      question: "Kako donosiš važne odluke u vezi?",
      answers: [
        { text: "Prema osjećaju", sign: "Ribe" },
        { text: "Prema iskustvu", sign: "Jarac" },
        { text: "Prema razgovoru", sign: "Vaga" },
        { text: "Prema instinktu", sign: "Ovan" }
      ]
    }
  ],

  ravnoteza: [
    {
      question: "Kako održavaš ravnotežu u vezi?",
      answers: [
        { text: "Otvorenim razgovorom", sign: "Vaga" },
        { text: "Zajedničkim aktivnostima", sign: "Blizanci" },
        { text: "Poštivanjem prostora", sign: "Vodenjak" },
        { text: "Rutinskim navikama", sign: "Bik" }
      ]
    },
    {
      question: "Što ti pomaže da se osjećaš stabilno?",
      answers: [
        { text: "Partnerova prisutnost", sign: "Rak" },
        { text: "Zajednički ciljevi", sign: "Jarac" },
        { text: "Sloboda izražavanja", sign: "Strijelac" },
        { text: "Emocionalna sigurnost", sign: "Ribe" }
      ]
    },
    {
      question: "Kako reagiraš kad se ravnoteža naruši?",
      answers: [
        { text: "Pokušavam vratiti mir", sign: "Vaga" },
        { text: "Povlačim se", sign: "Škorpion" },
        { text: "Postajem nervozan/na", sign: "Jarac" },
        { text: "Tražim rješenje odmah", sign: "Ovan" }
      ]
    }
  ],

  kompatibilnost: [
    {
      question: "Što ti je najvažnije kod idealnog partnera?",
      answers: [
        { text: "Da me razumije", sign: "Rak" },
        { text: "Da me izaziva", sign: "Ovan" },
        { text: "Da me inspirira", sign: "Strijelac" },
        { text: "Da me smiruje", sign: "Bik" }
      ]
    },
    {
      question: "Koja osobina ti je neodoljiva?",
      answers: [
        { text: "Samopouzdanje", sign: "Lav" },
        { text: "Dubina", sign: "Škorpion" },
        { text: "Humor", sign: "Blizanci" },
        { text: "Inteligencija", sign: "Djevica" }
      ]
    },
    {
      question: "Kako znaš da ste kompatibilni?",
      answers: [
        { text: "Imamo slične vrijednosti", sign: "Jarac" },
        { text: "Razumijemo se bez riječi", sign: "Ribe" },
        { text: "Imamo dobru komunikaciju", sign: "Vaga" },
        { text: "Imamo sličan ritam", sign: "Bik" }
      ]
    }
  ]
}
,

  astroIzborSet: {
  "Prvi Dojam": [
    {
      question: "Što te prvo privuče kod osobe?",
      answers: [
        { text: "Oči", sign: "Ribe" },
        { text: "Stav", sign: "Lav" },
        { text: "Smijeh", sign: "Blizanci" },
        { text: "Mirnoća", sign: "Bik" }
      ]
    },
    {
      question: "Kako se ponašaš kad ti se netko svidi?",
      answers: [
        { text: "Flertujem otvoreno", sign: "Ovan" },
        { text: "Ponašam se misteriozno", sign: "Škorpion" },
        { text: "Zbijam šale", sign: "Blizanci" },
        { text: "Pomažem im", sign: "Djevica" }
      ]
    },
    {
      question: "Što te odbija na prvi pogled?",
      answers: [
        { text: "Arogancija", sign: "Vaga" },
        { text: "Neurednost", sign: "Jarac" },
        { text: "Previše pričanja", sign: "Rak" },
        { text: "Nedostatak strasti", sign: "Ovan" }
      ]
    }
  ],

  "Izbor Partnera": [
    {
      question: "Kako biraš idealnog partnera?",
      answers: [
        { text: "Prema osjećaju", sign: "Ribe" },
        { text: "Prema kompatibilnosti", sign: "Jarac" },
        { text: "Prema energiji", sign: "Strijelac" },
        { text: "Prema izgledu", sign: "Lav" }
      ]
    },
    {
      question: "Što ti je najvažnije u vezi?",
      answers: [
        { text: "Zabava", sign: "Blizanci" },
        { text: "Sigurnost", sign: "Rak" },
        { text: "Strast", sign: "Škorpion" },
        { text: "Razumijevanje", sign: "Vodenjak" }
      ]
    },
    {
      question: "Kako znaš da je netko 'onaj pravi'?",
      answers: [
        { text: "Osjećam to u srcu", sign: "Ribe" },
        { text: "Imamo slične ciljeve", sign: "Jarac" },
        { text: "Ne mogu prestati misliti na njih", sign: "Lav" },
        { text: "Razumijemo se bez riječi", sign: "Vaga" }
      ]
    }
  ],

  privlacnost: [
    {
      question: "Koja osobina ti je najprivlačnija?",
      answers: [
        { text: "Samopouzdanje", sign: "Lav" },
        { text: "Inteligencija", sign: "Djevica" },
        { text: "Empatija", sign: "Rak" },
        { text: "Humor", sign: "Blizanci" }
      ]
    },
    {
      question: "Što te najviše uzbuđuje kod partnera?",
      answers: [
        { text: "Strast", sign: "Škorpion" },
        { text: "Spontanost", sign: "Ovan" },
        { text: "Zagonetnost", sign: "Vodenjak" },
        { text: "Toplina", sign: "Bik" }
      ]
    },
    {
      question: "Koji stil zavođenja ti najviše odgovara?",
      answers: [
        { text: "Direktan", sign: "Ovan" },
        { text: "Zagonetan", sign: "Škorpion" },
        { text: "Zabavan", sign: "Blizanci" },
        { text: "Romantičan", sign: "Rak" }
      ]
    }
  ],

  instinkt: [
    {
      question: "Kako reagiraš kad ti intuicija kaže da nešto nije u redu?",
      answers: [
        { text: "Odmah djelujem", sign: "Ovan" },
        { text: "Povlačim se", sign: "Ribe" },
        { text: "Tražim potvrdu", sign: "Jarac" },
        { text: "Ignoriram osjećaj", sign: "Strijelac" }
      ]
    },
    {
      question: "Kada najviše slušaš svoj instinkt?",
      answers: [
        { text: "U ljubavi", sign: "Rak" },
        { text: "U kriznim situacijama", sign: "Škorpion" },
        { text: "Kad biram ljude", sign: "Vodenjak" },
        { text: "U svakodnevnim odlukama", sign: "Djevica" }
      ]
    },
    {
      question: "Kako znaš da ti netko nije dobar za tebe?",
      answers: [
        { text: "Osjećam nelagodu", sign: "Ribe" },
        { text: "Ne mogu biti svoj/a", sign: "Vodenjak" },
        { text: "Stalno se svađamo", sign: "Ovan" },
        { text: "Ne dijelimo iste vrijednosti", sign: "Jarac" }
      ]
    }
  ],

  odluka: [
    {
      question: "Kako donosiš ljubavne odluke?",
      answers: [
        { text: "Prema srcu", sign: "Ribe" },
        { text: "Prema razumu", sign: "Jarac" },
        { text: "Prema trenutku", sign: "Strijelac" },
        { text: "Prema intuiciji", sign: "Škorpion" }
      ]
    },
    {
      question: "Što te najviše vodi u vezi?",
      answers: [
        { text: "Emocije", sign: "Rak" },
        { text: "Strast", sign: "Ovan" },
        { text: "Razumijevanje", sign: "Vaga" },
        { text: "Zajednički ciljevi", sign: "Jarac" }
      ]
    },
    {
      question: "Kako znaš da je vrijeme za prekid?",
      answers: [
        { text: "Kad nestane strasti", sign: "Lav" },
        { text: "Kad se osjećam zanemareno", sign: "Rak" },
        { text: "Kad više ne dijelimo iste snove", sign: "Jarac" },
        { text: "Kad intuicija kaže 'gotovo'", sign: "Ribe" }
      ]
    }
  ]
}
,





 astroDubinaSet: {
  vrijednosti: [
    {
      question: "Koja ti je najvažnija vrijednost u vezi?",
      answers: [
        { text: "Iskrenost", sign: "Strijelac" },
        { text: "Odanost", sign: "Rak" },
        { text: "Sloboda", sign: "Vodenjak" },
        { text: "Stabilnost", sign: "Bik" }
      ]
    },
    {
      question: "Što nikada ne bi tolerirao/la u vezi?",
      answers: [
        { text: "Laži", sign: "Jarac" },
        { text: "Manipulaciju", sign: "Škorpion" },
        { text: "Ignoriranje", sign: "Lav" },
        { text: "Nepoštovanje", sign: "Vaga" }
      ]
    },
    {
      question: "Kako pokazuješ svoje vrijednosti?",
      answers: [
        { text: "Djelima", sign: "Jarac" },
        { text: "Riječima", sign: "Blizanci" },
        { text: "Stavom", sign: "Lav" },
        { text: "Empatijom", sign: "Ribe" }
      ]
    }
  ],

  granice: [
    {
      question: "Kako postavljaš granice u vezi?",
      answers: [
        { text: "Otvoreno i jasno", sign: "Ovan" },
        { text: "Tiho i suptilno", sign: "Ribe" },
        { text: "Razgovorom", sign: "Vaga" },
        { text: "Ponašanjem", sign: "Jarac" }
      ]
    },
    {
      question: "Što radiš kad netko prijeđe tvoje granice?",
      answers: [
        { text: "Upozorim ih", sign: "Lav" },
        { text: "Povučem se", sign: "Škorpion" },
        { text: "Pokušam razumjeti zašto", sign: "Rak" },
        { text: "Postavim čvršće granice", sign: "Jarac" }
      ]
    },
    {
      question: "Koja granica ti je najvažnija?",
      answers: [
        { text: "Emocionalna", sign: "Ribe" },
        { text: "Fizička", sign: "Bik" },
        { text: "Mentalna", sign: "Vodenjak" },
        { text: "Vrijednosna", sign: "Jarac" }
      ]
    }
  ],

  ranjivost: [
    {
      question: "Kako pokazuješ ranjivost?",
      answers: [
        { text: "Otvoreno govorim o osjećajima", sign: "Rak" },
        { text: "Samo kad se osjećam sigurno", sign: "Ribe" },
        { text: "Kroz umjetnost ili kreativnost", sign: "Vodenjak" },
        { text: "Rijetko, ali iskreno", sign: "Škorpion" }
      ]
    },
    {
      question: "Što ti pomaže da se otvoriš?",
      answers: [
        { text: "Toplina i strpljenje", sign: "Bik" },
        { text: "Duboki razgovori", sign: "Vaga" },
        { text: "Zajednički trenuci", sign: "Rak" },
        { text: "Povjerenje kroz vrijeme", sign: "Jarac" }
      ]
    },
    {
      question: "Kako reagiraš kad ti netko pokaže ranjivost?",
      answers: [
        { text: "Pružam podršku", sign: "Rak" },
        { text: "Postajem zaštitnički nastrojen/a", sign: "Lav" },
        { text: "Pokušavam razumjeti", sign: "Djevica" },
        { text: "Otvaram se zauzvrat", sign: "Ribe" }
      ]
    }
  ],

  "Duboka Povezanost": [
    {
      question: "Što za tebe znači duboka povezanost?",
      answers: [
        { text: "Razumijevanje bez riječi", sign: "Ribe" },
        { text: "Zajednički rast", sign: "Jarac" },
        { text: "Emocionalna sigurnost", sign: "Rak" },
        { text: "Mentalna stimulacija", sign: "Vodenjak" }
      ]
    },
    {
      question: "Kako znaš da si duboko povezan/a s nekim?",
      answers: [
        { text: "Osjećam mir", sign: "Bik" },
        { text: "Imamo slične vrijednosti", sign: "Jarac" },
        { text: "Razumijemo se bez objašnjenja", sign: "Ribe" },
        { text: "Imamo snažnu kemiju", sign: "Škorpion" }
      ]
    },
    {
      question: "Što ti je potrebno za duboku vezu?",
      answers: [
        { text: "Povjerenje", sign: "Rak" },
        { text: "Otvorenost", sign: "Vaga" },
        { text: "Zajednički ciljevi", sign: "Jarac" },
        { text: "Emocionalna iskrenost", sign: "Ribe" }
      ]
    }
  ],

  "Emocionalna Snaga": [
    {
      question: "Kako se nosiš s teškim emocijama?",
      answers: [
        { text: "Razgovaram s nekim", sign: "Vaga" },
        { text: "Pišem ili stvaram", sign: "Ribe" },
        { text: "Povučem se", sign: "Škorpion" },
        { text: "Analiziram ih", sign: "Djevica" }
      ]
    },
    {
      question: "Što ti pomaže da se emocionalno obnoviš?",
      answers: [
        { text: "Priroda", sign: "Bik" },
        { text: "Glazba", sign: "Ribe" },
        { text: "Razgovor s bliskom osobom", sign: "Rak" },
        { text: "Samorefleksija", sign: "Jarac" }
      ]
    },
    {
      question: "Kako pokazuješ emocionalnu snagu?",
      answers: [
        { text: "Ostajem smiren/a", sign: "Jarac" },
        { text: "Pomažem drugima", sign: "Rak" },
        { text: "Ne odustajem", sign: "Ovan" },
        { text: "Izražavam osjećaje bez straha", sign: "Lav" }
      ]
    }
  ]
}
,









 astroFantazijaSet: {
  "LJubavni San": [
    {
      question: "Kako izgleda tvoj idealan ljubavni scenarij?",
      answers: [
        { text: "Strastvena veza puna uzbuđenja", sign: "Ovan" },
        { text: "Nježna romansa uz more", sign: "Rak" },
        { text: "Zajedničko putovanje svijetom", sign: "Strijelac" },
        { text: "Veza puna umjetnosti i inspiracije", sign: "Ribe" }
      ]
    },
    {
      question: "Koji filmski ljubavni par ti je najbliži?",
      answers: [
        { text: "Bonnie i Clyde", sign: "Škorpion" },
        { text: "Noah i Allie (Notebook)", sign: "Rak" },
        { text: "Mr. & Mrs. Smith", sign: "Ovan" },
        { text: "Jesse i Céline (Before Sunrise)", sign: "Vodenjak" }
      ]
    },
    {
      question: "Koji kraj ljubavne priče ti je najljepši?",
      answers: [
        { text: "Zajedno do kraja života", sign: "Jarac" },
        { text: "Strast koja nikad ne prestaje", sign: "Lav" },
        { text: "Neočekivano pomirenje", sign: "Ribe" },
        { text: "Sloboda i ljubav u ravnoteži", sign: "Vodenjak" }
      ]
    }
  ],

  "Arhetip Partnera": [
    {
      question: "Koji tip partnera te najviše privlači?",
      answers: [
        { text: "Zaštitnik", sign: "Lav" },
        { text: "Umjetnik", sign: "Ribe" },
        { text: "Vodič", sign: "Strijelac" },
        { text: "Vizionar", sign: "Vodenjak" }
      ]
    },
    {
      question: "Koji partner ti najviše odgovara u snovima?",
      answers: [
        { text: "Tajanstveni zavodnik", sign: "Škorpion" },
        { text: "Romantični pjesnik", sign: "Ribe" },
        { text: "Neustrašivi avanturist", sign: "Ovan" },
        { text: "Smireni mudrac", sign: "Jarac" }
      ]
    },
    {
      question: "Koji arhetip ti je najbliži?",
      answers: [
        { text: "Ljubavnik", sign: "Lav" },
        { text: "Iscjelitelj", sign: "Rak" },
        { text: "Putnik", sign: "Strijelac" },
        { text: "Mističar", sign: "Škorpion" }
      ]
    }
  ],

  fantazija: [
    {
      question: "Koji ljubavni scenarij ti je najuzbudljiviji?",
      answers: [
        { text: "Zabranjena ljubav", sign: "Škorpion" },
        { text: "Ljubav na prvi pogled", sign: "Lav" },
        { text: "Veza iznenadnog susreta", sign: "Blizanci" },
        { text: "Ljubav koja se razvija godinama", sign: "Jarac" }
      ]
    },
    {
      question: "Koji ljubavni klišej ti se zapravo sviđa?",
      answers: [
        { text: "Spašavanje u zadnji trenutak", sign: "Ovan" },
        { text: "Pisma iz daljine", sign: "Ribe" },
        { text: "Zajednički ples na kiši", sign: "Rak" },
        { text: "Neočekivana iskra među suprotnostima", sign: "Vodenjak" }
      ]
    },
    {
      question: "Što ti je najvažnije u ljubavnoj fantaziji?",
      answers: [
        { text: "Strast", sign: "Ovan" },
        { text: "Duboka povezanost", sign: "Ribe" },
        { text: "Zajednička avantura", sign: "Strijelac" },
        { text: "Nezavisnost unutar veze", sign: "Vodenjak" }
      ]
    }
  ],

  snovi: [
    {
      question: "Kakav je tvoj ljubavni san?",
      answers: [
        { text: "Zajednički život u prirodi", sign: "Bik" },
        { text: "Putovanje bez kraja", sign: "Strijelac" },
        { text: "Umjetnički studio za dvoje", sign: "Ribe" },
        { text: "Minimalistički stan pun knjiga", sign: "Djevica" }
      ]
    },
    {
      question: "Kako izgleda tvoj idealan dan s partnerom?",
      answers: [
        { text: "Opuštanje i nježnost", sign: "Rak" },
        { text: "Adrenalinska avantura", sign: "Ovan" },
        { text: "Razgovori do kasno u noć", sign: "Vodenjak" },
        { text: "Zajedničko stvaranje nečeg novog", sign: "Jarac" }
      ]
    },
    {
      question: "Koji san o ljubavi te najviše motivira?",
      answers: [
        { text: "Ljubav koja mijenja svijet", sign: "Vodenjak" },
        { text: "Ljubav koja liječi", sign: "Rak" },
        { text: "Ljubav koja inspirira", sign: "Lav" },
        { text: "Ljubav koja traje", sign: "Jarac" }
      ]
    }
  ],

  mašta: [
    {
      question: "Kako zamišljaš savršenog partnera?",
      answers: [
        { text: "Kreativan i nježan", sign: "Ribe" },
        { text: "Strastven i odvažan", sign: "Ovan" },
        { text: "Smiren i pouzdan", sign: "Bik" },
        { text: "Zabavan i nepredvidiv", sign: "Blizanci" }
      ]
    },
    {
      question: "Koji imaginarni scenarij ti je najprivlačniji?",
      answers: [
        { text: "Ljubav u paralelnom svijetu", sign: "Vodenjak" },
        { text: "Tajna veza u velikom gradu", sign: "Škorpion" },
        { text: "Romansa na otoku", sign: "Rak" },
        { text: "Ljubav u vremenskom putovanju", sign: "Strijelac" }
      ]
    },
    {
      question: "Kako koristiš maštu u ljubavi?",
      answers: [
        { text: "Zamišljam budućnost", sign: "Jarac" },
        { text: "Pišem ili crtam", sign: "Ribe" },
        { text: "Stvaram scenarije u glavi", sign: "Vodenjak" },
        { text: "Maštam o idealnim trenucima", sign: "Rak" }
      ]
    }
  ]
  }
};

