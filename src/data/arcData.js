export const ARCS_DATA = {
  WESTON_COLLEGE: {
    id: 'WESTON_COLLEGE',
    title: 'WESTON COLLEGE INFILTRATION',
    subtitle: 'PUBLIC SCHOOL ARC // MICHAELMAS TERM, 1889',
    location: 'Weston College, Oxfordshire, United Kingdom',
    time: 'Michaelmas Term, 1889',
    classification: 'EDUCATIONAL INSTITUTION / CRIME SCENE',
    badgeColor: '#7A1F1F',

    missionBrief: 'Ciel Phantomhive is dispatched by Queen Victoria to investigate the disappearance of several students from the prestigious all-boys boarding school, Weston College. Under the alias "Cipher" (or covertly using his title), Ciel enrolls in Sapphire Owl dormitory — the house of scholarship and tacticians. Sebastian assumes the identity of a schoolmaster.',

    p4Houses: [
      {
        id: 'redmond',
        name: 'EDGAR REDMOND',
        house: 'Scarlet Fox (Red House)',
        traits: 'Athletics & Aristocratic Lineage',
        description: 'Redmond is charismatic, effeminate, and obsessed with beauty. Leads the Scarlet Fox dormitory.',
        color: '#7A1F1F',
        symbol: 'Fox',
        image: '/img/Edgar%20Redmon/Edgar%20Redmon.webp'
      },
      {
        id: 'bluewer',
        name: 'LAWRENCE BLUEWER',
        house: 'Sapphire Owl (Blue House)',
        traits: 'Scholars & Strategists',
        description: 'Bluewer is severe, duty-bound, and harbors a complex about his commoner origins. Leads the Sapphire Owl dormitory where Ciel enrolls.',
        color: '#2C3E6B',
        symbol: 'Owl',
        image: '/img/Lawrence%20Bluewer/Lawrence%20Bluewer.webp'
      },
      {
        id: 'greenhill',
        name: 'HERMAN GREENHILL',
        house: 'Green Lion (Green House)',
        traits: 'Warriors & Sportsmen',
        description: 'Greenhill is honorable to a fault, with a rigid moral compass. Leads the Green Lion dormitory.',
        color: '#2F4F2F',
        symbol: 'Lion',
        image: '/img/Herman%20Greenhill/Herman%20Greenhill.webp'
      },
      {
        id: 'violet',
        name: 'GREGORY VIOLET',
        house: 'Purple Wolf (Purple House)',
        traits: 'Artists & Eccentrics',
        description: 'Violet is reclusive, speaks in riddles, and seems to perceive more than he reveals. Leads the Purple Wolf dormitory.',
        color: '#4B2C5E',
        symbol: 'Wolf',
        image: '/img/Gregory%20Violet/Gregory%20Violet.webp'
      }
    ],

    conspiracy: {
      title: 'THE DERRICK ARDEN CONSPIRACY',
      subtitle: 'The Rot Beneath Institutional Perfection',
      text: 'The missing student, Derrick Arden, was not kidnapped. He was killed — accidentally bludgeoned by the P4 during a confrontation over his systematic abuse of younger students (the "fag" system). The prefects, believing no one would believe the truth, buried him beneath the cricket pavilion and covered it up to protect the school\'s honor. The "changed" students were merely traumatized witnesses.'
    },

    cricketMatch: {
      title: 'THE ANNUAL CRICKET TOURNAMENT',
      subtitle: 'Tactical Battlefield of Class & Honor',
      text: 'The arc culminates in the annual cricket tournament. Ciel transforms the game into a battlefield of strategy, using Sebastian\'s supernatural abilities covertly to secure victory while extracting confessions. The match becomes a metaphor for class warfare, honor, and institutional rot.'
    },

    tacticalSpecs: [
      { label: 'PRIMARY TARGET', value: 'DERRICK ARDEN & THE P4 PREFECTS' },
      { label: 'CIEL ALIAS', value: 'CIPHER // SAPPHIRE OWL STUDENT' },
      { label: 'SEBASTIAN ALIAS', value: 'HOUSEMASTER MICHAELIS' },
      { label: 'BURIAL LOCATION', value: 'CRICKET PAVILION PITCH' },
      { label: 'KEY INCIDENT', value: 'HOMICIDE COVERED AS TRANSFERS' },
      { label: 'FINAL OUTCOME', value: 'P4 DISGRACED & EXPOSED' }
    ],

    mysteries: [
      { title: 'Derrick Arden Disappearance', status: 'RESOLVED - BLUDGEONED BY P4' },
      { title: 'The "Fag" System Abuse', status: 'EXPOSED & DISMANTLED' },
      { title: 'Headmaster\'s Absence', status: 'MANIPULATED BY UNDERTAKER' }
    ],

    images: [
      { url: '/img/Weston%20College/Weston%20College.webp', caption: 'Weston College Quadrangle' },
      { url: '/img/Cricket%20Area/Cricket%20Area.jpg', caption: 'Cricket Tournament Pavilion Ground' },
      { url: '/img/Edgar%20Redmon/Edgar%20Redmon.webp', caption: 'Scarlet Fox Dormitory - Edgar Redmond' },
      { url: '/img/Edgar%20Redmon/Edgar%20Redmon%202.webp', caption: 'Scarlet Fox Dormitory - Edgar Redmond'},
      { url: '/img/Edgar%20Redmon/Edgar%20Redmon%203.jpg', caption: 'Scarlet Fox Dormitory - Edgar Redmond'},
      { url: '/img/Lawrence%20Bluewer/Lawrence%20Bluewer%202.jpg', caption: 'Sapphire Owl Dormitory - Lawrence Bluewer'},
      { url: '/img/Lawrence%20Bluewer/Lawrence%20Bluewer.webp', caption: 'Sapphire Owl Dormitory - Lawrence Bluewer' },
      { url: '/img/Herman%20Greenhill/Herman%20Greenhill%202.jpg', caption: 'Green Lion Dormitory - Herman Greenhill'},
      { url: '/img/Herman%20Greenhill/Herman%20Greenhill.webp', caption: 'Green Lion Dormitory - Herman Greenhill' },
      { url: '/img/Gregory%20Violet/Gregory%20Violet%202.webp', caption: 'Purple Wolf Dormitory - Gregory Violet'},
      { url: '/img/Gregory%20Violet/Gregory%20Violet.webp', caption: 'Purple Wolf Dormitory - Gregory Violet' },
      { url: '/img/Gregory%20Violet/Gregory%20Violet%203.jpg', caption: 'Purple Wolf Dormitory - Gregory Violet'},
    ]
  },

  WOLFS_GORGE: {
    id: 'WOLFS_GORGE',
    title: 'OPERATION WOLF\'S GORGE',
    subtitle: 'EMERALD WITCH ARC // WINTER, 1889',
    location: 'Wolfsschlucht, Black Forest, Germany',
    time: 'Winter, 1889',
    classification: 'INTERNATIONAL INCIDENT / BIOLOGICAL WEAPONRY',
    badgeColor: '#1B4D3E',

    missionBrief: 'Ciel and Sebastian travel to a remote German village sealed by superstition. The villagers believe a witch and her werewolf servants curse anyone who enters the forest. The Queen suspects a political conspiracy involving German military innovation.',

    keyCharacters: [
      {
        id: 'sieglinde',
        name: 'SIEGLINDE SULLIVAN',
        title: 'THE EMERALD WITCH / SCIENTIFIC PRODIGY',
        image: '/img/Sieglinde%20Sullivan/Sieglinde%20Sullivan.webp',
        details: 'A thirteen-year-old girl raised in isolation within a giant tree-mansion. She believes herself to be the last of a line of witches, tasked by her "mother" (the Great Witch) to protect the village through ancient magic. In truth, she is a scientific prodigy gaslit into creating mass destruction weapons.',
        sulfurGarden: 'Developed the "Sulfur Garden" — a formula for a lethal, undetectable poison gas capable of mass destruction.'
      },
      {
        id: 'wolfram',
        name: 'WOLFRAM GELZER',
        title: 'MILITARY GUARD & DEVOTED BUTLER',
        image: '/img/Wolfram%20Glezer/Wolfram%20Glezer%20.jpg',
        details: 'Sieglinde\'s devoted butler and bodyguard. Unlike Sebastian, his servitude is born of genuine affection and guilt. He knows the truth but protects Sieglinde from it, creating a tragic mirror to the Ciel-Sebastian dynamic.'
      }
    ],

    horrorReveal: {
      title: 'THE HORROR REVEAL & CHEMICAL WARFARE FACILITY',
      subtitle: 'Deception Behind the Werewolf Myth',
      points: [
        'The forest is littered with the corpses of "cursed" villagers — actually test subjects of the poison gas.',
        'The werewolf "transformations" are soldiers donning hydraulic wolf-masks and claw-gloves.',
        'The witch\'s treehouse mansion is a state-of-the-art military research facility in disguise.',
        'Sieglinde is the "Ultimate Weapon," kept captive and gaslit into believing she serves a fairy-tale destiny.'
      ]
    },

    resolution: {
      title: 'MISSION RESOLUTION & EXTRACTION',
      subtitle: 'From Weapon to Ward',
      text: 'Ciel exposes the conspiracy, destroys the facility, and extracts Sieglinde. She is brought to Phantomhive Estate as a ward/refugee, where she later becomes a trusted ally and scientific consultant for the Watchdog.'
    },

    tacticalSpecs: [
      { label: 'PRIMARY SUBJECT', value: 'SIEGLINDE SULLIVAN (AGE 13)' },
      { label: 'WEAPON CODENAME', value: 'SULFUR GARDEN POISON GAS' },
      { label: 'OPPOSITION', value: 'GERMAN MECHANIZED WEREWOLVES' },
      { label: 'SUIT MECHANISM', value: 'HYDRAULIC CLAW & WOLF MASK' },
      { label: 'MILITARY HANDLER', value: 'PROFESSOR SULLIVAN ("MOTHER")' },
      { label: 'CURRENT STATUS', value: 'PHANTOMHIVE WARD & CONSULTANT' }
    ],

    mysteries: [
      { title: 'The Werewolf Curse', status: 'DEBUNKED - POISON GAS & SOLDIERS' },
      { title: 'Sulfur Garden Formula', status: 'SABOTAGED BY WATCHDOG' },
      { title: 'Sieglinde Safety', status: 'EXTRACTED TO ENGLAND' }
    ],

    images: [
      { url: '/img/Wolfsschlucht%20Forrest/wolfsschlucht%20forrest.png', caption: 'Wolfsschlucht Forest - The Cursed Realm' },
      { url: '/img/Sieglinde%20Sullivan/Sieglinde%20Sullivan%202.webp', caption: 'Sieglinde Sullivan - Scientific Genius' },
      { url: '/img/Wolfram%20Glezer/Wolfram%20Glezer%20.jpg', caption: 'Wolfram Gelzer - Devoted Bodyguard' },
      { url: '/img/Wolfram%20Glezer/Wolfram%20Glezer%202.jpg', caption: 'Wolfram Gelzer - Military Combat Specialist' }
    ]
  }
};
