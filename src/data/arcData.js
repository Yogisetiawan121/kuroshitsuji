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
      { url: '/img/Lawrence%20Bluewer/Lawrence%20Bluewer.webp', caption: 'Sapphire Owl Dormitory - Lawrence Bluewer' },
      { url: '/img/Herman%20Greenhill/Herman%20Greenhill.webp', caption: 'Green Lion Dormitory - Herman Greenhill' },
      { url: '/img/Gregory%20Violet/Gregory%20Violet.webp', caption: 'Purple Wolf Dormitory - Gregory Violet' }
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
  },

  NOAHS_ARK: {
    id: 'NOAHS_ARK',
    title: 'NOAH\'S ARK CIRCUS INFILTRATION',
    subtitle: 'BOOK OF CIRCUS // SPRING, 1889',
    location: 'Traveling throughout England; Baron Kelvin\'s Estate, London outskirts',
    time: 'Spring, 1889',
    classification: 'ENTERTAINMENT FRONT / CHILD ABDUCTION RING / RITUAL RECONSTRUCTION',
    badgeColor: '#5C1A1B',

    missionBrief: 'Children are vanishing from the capital\'s workhouses. The trail leads to a traveling circus of extraordinary performers. Ciel and Sebastian infiltrate as "Smile" (a disabled orphan) and "Black" (his caretaker) to uncover the connection between the circus and the kidnappings.',

    performers: [
      {
        id: 'joker',
        name: 'JOKER',
        role: 'Ringmaster (First Tier Leader)',
        limb: 'Artificial Right Arm',
        trait: 'Charismatic, desperate, pathologically loyal to Baron Kelvin. Conceals a scythe-blade in his prosthetic arm.',
        image: '/img/Joker/Joker.webp',
        altImage: '/img/Joker/Joker%202.webp',
        stats: { strength: 82, agility: 90, artificiality: 78 }
      },
      {
        id: 'beast',
        name: 'BEAST',
        role: 'Beast Tamer',
        limb: 'Artificial Right Leg',
        trait: 'Fierce, independent, secretly in love with Joker. Commands ferocious tigers with a cracked whip.',
        image: '/img/Beast/Beast.webp',
        stats: { strength: 88, agility: 85, artificiality: 70 }
      },
      {
        id: 'dagger',
        name: 'DAGGER',
        role: 'Knife Thrower',
        limb: 'Artificial Hands',
        trait: 'Bombastic, affectionate, devoted to Beast. Throws knives with inhuman acrobatic precision.',
        image: '/img/Dagger/Dagger.webp',
        altImage: '/img/Dagger/Dagger%202.webp',
        stats: { strength: 75, agility: 96, artificiality: 85 }
      },
      {
        id: 'doll',
        name: 'DOLL',
        role: 'Tightrope Walker',
        limb: 'Artificial Left Arm & Leg',
        trait: 'Youngest and most innocent. Befriends "Smile" (Ciel) without knowing his identity. Scarred face hidden under greasepaint makeup.',
        image: '/img/Doll/Doll.jpg',
        altImage: '/img/Doll/Doll%202.webp',
        stats: { strength: 65, agility: 98, artificiality: 92 }
      },
      {
        id: 'snake',
        name: 'SNAKE',
        role: 'Snake Charmer',
        limb: 'Unmodified (Organic)',
        trait: 'Speaks through his serpents (Emily, Oscar, Wordsworth). Socially isolated, eerily gentle. Sole survivor of the circus.',
        image: '/img/Snake/Snake.webp',
        altImage: '/img/Snake/Snake%202.jpg',
        stats: { strength: 70, agility: 80, artificiality: 0 },
        serpentWhisper: 'Says Emily: "We don\'t trust humans who smile too brightly."'
      },
      {
        id: 'jumbo_twins',
        name: 'JUMBO & THE TWINS (PETER/WENDY)',
        role: 'Strongman & Trapeze Aerialists',
        limb: 'Modified Skeletal / Skeletal Augment',
        trait: 'Loyal muscle and aerialists. Modified by Doctor for impossible physical feats and flight-like agility.',
        image: '/img/Doctor/Doctor.webp',
        stats: { strength: 95, agility: 94, artificiality: 88 }
      }
    ],

    masterminds: [
      {
        id: 'baron_kelvin',
        name: 'BARON KELVIN',
        role: 'Circus Benefactor / Cult Fanatic',
        image: '/img/Baron%20Kelvin/Baron%20Kelvin.webp',
        altImage: '/img/Baron%20Kelvin/Baron%20Kelvin%202.jpg',
        description: 'Obsessed with the dark cult ritual where Ciel was sacrificed. Seeks to recreate the ritual using modified children as stand-ins to summon a demon and gain the same "privilege".'
      },
      {
        id: 'doctor',
        name: 'THE DOCTOR',
        role: 'Prosthetic Engineer & Vivisectionist',
        image: '/img/Doctor/Doctor.webp',
        description: 'Grafts mechanical limbs onto kidnapped workhouse children, using bone-china alloys and synthetic tendons. Views the children as raw clay for art.'
      }
    ],

    kelvinHorror: {
      title: 'THE KELVIN ESTATE RITUAL & BURNING',
      subtitle: 'Commodification of Suffering & Total Annihilation',
      details: 'When Ciel discovers the workhouse children have already been mutilated or murdered to build prosthetics and stage the ritual, he orders Sebastian to incinerate the entire estate. Joker dies defending Kelvin. Ciel walks away without a smile.',
      quote: '"Burn it all down. Leave not a single ash of this monstrosity behind."'
    },

    tacticalSpecs: [
      { label: 'CIEL INFILTRATION ALIAS', value: 'SMILE (DISABLED ORPHAN)' },
      { label: 'SEBASTIAN ALIAS', value: 'BLACK (HOUSEHOLD CARETAKER)' },
      { label: 'CIRCUS TIERS', value: 'FIRST TIER (MODIFIED PERFORMERS)' },
      { label: 'PROSTHETIC COMPOSITION', value: 'BONE-CHINA & ARTIFICIAL STEEL' },
      { label: 'PRIMARY LOCATION', value: 'BARON KELVIN MANOR' },
      { label: 'SOLE SURVIVOR', value: 'SNAKE (RECRUITED TO MANOR)' }
    ],

    mysteries: [
      { title: 'Workhouse Children Disappearances', status: 'RESOLVED - ABDUCTED FOR PROSTHETICS' },
      { title: 'Baron Kelvin\'s Cult Obsession', status: 'EXPOSED & INCINERATED' },
      { title: 'Snake\'s Allegiance', status: 'RECRUITED TO PHANTOMHIVE HOUSEHOLD' }
    ],

    images: [
      { url: '/img/Joker/Joker.webp', caption: 'First Tier Leader - Joker' },
      { url: '/img/Joker/Joker%202.webp', caption: 'Ringmaster Joker - Performance Attire' },
      { url: '/img/Beast/Beast.webp', caption: 'Beast Tamer - Beast' },
      { url: '/img/Dagger/Dagger.webp', caption: 'Knife Thrower - Dagger' },
      { url: '/img/Doll/Doll.jpg', caption: 'Tightrope Walker - Doll' },
      { url: '/img/Snake/Snake.webp', caption: 'Snake Charmer - Snake' },
      { url: '/img/Baron%20Kelvin/Baron%20Kelvin.webp', caption: 'Estate Master - Baron Kelvin' },
      { url: '/img/Doctor/Doctor.webp', caption: 'Prosthetic Creator - The Doctor' }
    ]
  },

  MANOR_MURDERS: {
    id: 'MANOR_MURDERS',
    title: 'PHANTOMHIVE MANOR MURDER INVESTIGATION',
    subtitle: 'BOOK OF MURDER // WINTER, 1889',
    location: 'Phantomhive Manor, London outskirts',
    time: 'Winter, 1889',
    classification: 'LOCKED-ROOM MYSTERY / ENTRAPMENT OPERATION / SOCIAL EXPERIMENT',
    badgeColor: '#3E0000',

    missionBrief: 'Ciel hosts a private dinner party under the guise of a business negotiation. His true objective: to identify and expose a criminal hiding among his guests. The method is extreme. The game is deadly. And the butler is already dead.',

    guestList: [
      {
        id: 'siemens',
        name: 'GEORG VON SIEMENS',
        role: 'German Investor & Target Victim',
        status: 'FIRST VICTIM (POISONED)',
        description: 'Loud, abrasive German investor secretly embezzling railway funds. Poisoned in a locked room during dinner.',
        image: '/img/Georg%20von%20Siemens/Georg%20von%20Siemens.webp'
      },
      {
        id: 'woodley',
        name: 'KARL WOODLEY',
        role: 'Railway Director & True Target',
        status: 'CULPRIT / EXPOSED',
        description: 'Director of the railway company and blackmailer. Murdered Siemens to cover up corruption. Exposed by Jeremy Rathbone.',
        image: '/img/Karl%20Woodley/Karl%20Woodley.webp'
      },
      {
        id: 'jeremy',
        name: 'JEREMY RATHBONE',
        role: 'Consulting Detective (Sebastian in Disguise)',
        status: 'INVESTIGATOR / ARCHITECT',
        description: 'Deerstalker-wearing eccentric detective who solves the case. In truth, Sebastian faking his death using a prosthetic weapon and theatrical makeup.',
        image: '/img/Jeremy%20Rathbone/Jeremy%20Rathbone.webp'
      },
      {
        id: 'arthur',
        name: 'ARTHUR CONAN DOYLE',
        role: 'Aspiring Physician & Impartial Witness',
        status: 'OBSERVER / AUTHOR',
        description: 'Invited as an impartial witness. Realizes he witnessed a staged performance of justice and departs haunted to write detective fiction.',
        image: '/img/Arthur%20Conan%20Doyle/Arthur%20Conan%20Doyle.webp'
      },
      {
        id: 'phelps',
        name: 'PATRICK PHELPS',
        role: 'Phantomhive Relative',
        status: 'SECOND VICTIM',
        description: 'Naive relative used as unwitting bait. Murdered in Ciel\'s bed behind a locked door by Snake\'s serpent venom.',
        image: '/img/Snake/Snake.webp'
      }
    ],

    crimes: [
      {
        no: '01',
        victim: 'GEORG VON SIEMENS',
        location: 'Guest Chamber (Locked Room)',
        method: 'Tetrodotoxin Poisoning',
        note: 'Found dead behind a deadbolted door during the banquet storm.'
      },
      {
        no: '02',
        victim: 'PATRICK PHELPS',
        location: 'Earl\'s Private Quarters',
        method: 'Viper Envenomation',
        note: 'Swapped rooms with Ciel. Struck through the keyhole by Snake seeking revenge for the circus.'
      },
      {
        no: '03',
        victim: 'SEBASTIAN MICHAELIS',
        location: 'Servant Quarters / Garden',
        method: 'Staged Chest Piercing',
        note: 'Apparent death designed to isolate guests and allow Sebastian to operate in disguise as Jeremy Rathbone.'
      }
    ],

    philosophicalCore: {
      title: 'JUSTICE AS THEATER',
      subtitle: 'The Impotence of Law & The Staged Execution',
      text: 'The arc asks whether ends justify means when the legal system is impotent. Ciel does not solve crimes — he stages them. Conan Doyle leaves realizing Ciel is not a victim seeking truth, but a mastermind writing his own dark narratives.'
    },

    tacticalSpecs: [
      { label: 'OPERATION TYPE', value: 'LOCKED-ROOM ENTRAPMENT' },
      { label: 'PRIMARY CULPRIT', value: 'KARL WOODLEY (RAILWAY DIRECTOR)' },
      { label: 'DISGUISE IDENTITY', value: 'JEREMY RATHBONE (DEERSTALKER)' },
      { label: 'KEY EVIDENCE', value: 'UNEXPLORED DUPLICATE KEY & POISON VIAL' },
      { label: 'WITNESS OF RECORD', value: 'DR. ARTHUR CONAN DOYLE' },
      { label: 'VERDICT', value: 'WOODLEY ARRESTED // TRUTH SUPPRESSED' }
    ],

    mysteries: [
      { title: 'Sebastian\'s Staged Death', status: 'RESOLVED - DEMONIC RESURRECTION' },
      { title: 'The Locked Room Poisoning', status: 'EXPOSED - KARL WOODLEY CONSPIRACY' },
      { title: 'Arthur\'s Deductions', status: 'DOCUMENTED IN SHERLOCK MYTHOS' }
    ],

    images: [
      { url: '/img/Jeremy%20Rathbone/Jeremy%20Rathbone.webp', caption: 'Consulting Detective - Jeremy Rathbone' },
      { url: '/img/Arthur%20Conan%20Doyle/Arthur%20Conan%20Doyle.webp', caption: 'Observer & Author - Dr. Arthur Conan Doyle' },
      { url: '/img/Georg%20von%20Siemens/Georg%20von%20Siemens.webp', caption: 'German Guest - Georg von Siemens' },
      { url: '/img/Karl%20Woodley/Karl%20Woodley.webp', caption: 'Railway Director - Karl Woodley' },
      { url: '/img/Sebastian%20Michaelis/Sebastian-Michaelis-Book-Of-Murder.avif', caption: 'Staged Crime Scene Investigation' }
    ]
  },

  THE_CAMPANIA: {
    id: 'THE_CAMPANIA',
    title: 'THE CAMPANIA INCIDENT',
    subtitle: 'BOOK OF ATLANTIC // APRIL, 1889',
    location: 'RMS Campania, Atlantic Ocean (Southampton to New York)',
    time: 'April, 1889',
    classification: 'BIOLOGICAL WARFARE / ROGUE REAPER ACTIVITY / MARITIME DISASTER',
    badgeColor: '#0F1C2E',

    missionBrief: 'The Aurora Society, a secret scientific fraternity, claims to have conquered death. Aboard the luxury liner RMS Campania, they demonstrate "The Salvation" to wealthy elites. Ciel and Sebastian board as guests to investigate rumors that the Society\'s miracle is a weapon of mass destruction.',

    figures: [
      {
        id: 'undertaker',
        name: 'THE UNDERTAKER',
        role: 'Defected Grim Reaper & Miracle Mastermind',
        status: 'PRIMARY ADVERSARY',
        description: 'Reinserted tampered cinematic records into dead bodies to create Bizarre Dolls. Believes death is meaningless and treats Ciel as a prized survivor.',
        image: '/img/Undertaker/Undertaker.webp',
        altImage: '/img/Undertaker/Undertaker%202.jpg'
      },
      {
        id: 'elizabeth',
        name: 'ELIZABETH MIDFORD',
        role: 'Fiancée & Master Swordswoman',
        status: 'PRODIGY UNVEILED',
        description: 'Reveals her true lifelong mastery of dual-sword fencing to protect Ciel from hordes of Bizarre Dolls, shredding corpses in her pink gown.',
        image: '/img/Elizabeth%20Midford/Elizabeth%20Midford.jpg',
        altImage: '/img/Elizabeth%20Midford/Elizabeth%20Midford%202.webp'
      },
      {
        id: 'stoker',
        name: 'RIAN STOKER',
        role: 'Aurora Society Founder',
        status: 'PAWN / SCIENTIST',
        description: 'Leader of the Aurora Society. Believes he is healing humanity through "The Phoenix" gesture, unaware he is Undertaker\'s puppet.',
        image: '/img/Rian%20Stoker/Rian%20Stoker.webp'
      },
      {
        id: 'reapers',
        name: 'GRELLE SUTCLIFF & RONALD KNOX',
        role: 'Dispatch Reaper Officers',
        status: 'NEUTRAL / DISPATCH',
        description: 'Sent by the Reaper Dispatch Society to investigate illegal record tampering and confiscate defected Death Scythes.',
        image: '/img/Grelle%20Sutcliff/Grelle%20Sutcliff.webp',
        altImage: '/img/Ronald%20Knox/Ronald%20Knox.webp'
      }
    ],

    bizarreDolls: {
      title: 'THE BIZARRE DOLL ANOMALY',
      subtitle: 'Cinematic Records Without a Soul',
      text: 'The resurrected are not alive. They are corpses animated by cinematic records — memories implanted into dead flesh giving the illusion of purpose. Lacking souls, they attack the living to consume what they lack.'
    },

    sinkingDetails: {
      title: 'THE ATLANTIC MARITIME COLLISION',
      subtitle: 'Sinking of the RMS Campania',
      text: 'Sabotaged from within and damaged by icebergs, the luxury liner takes on water and snaps in two. Sebastian, Grelle, and Ronald fight Undertaker on the rising stern as seawater floods the ballroom.'
    },

    tacticalSpecs: [
      { label: 'VESSEL', value: 'RMS CAMPANIA (LUXURY LINER)' },
      { label: 'CULT FRONT', value: 'AURORA SOCIETY ("THE PHOENIX")' },
      { label: 'BIOLOGICAL THREAT', value: 'BIZARRE DOLLS (RECORD REANIMATION)' },
      { label: 'KEY REVEAL', value: 'UNDERTAKER = DEFECTED GRIM REAPER' },
      { label: 'COMBAT HIGHLIGHT', value: 'ELIZABETH MIDFORD DUAL SWORDS' },
      { label: 'VESSEL STATUS', value: 'FOUNDERED IN NORTH ATLANTIC' }
    ],

    mysteries: [
      { title: 'The Salvation Miracle', status: 'EXPOSED AS UNDEAD WARFARE' },
      { title: 'Undertaker\'s Identity', status: 'REVEALED - LEGENDARY RETIRED REAPER' },
      { title: 'Preserved Coffin Recovery', status: 'ESCAPED WITH UNDERTAKER' }
    ],

    images: [
      { url: '/img/Undertaker/Undertaker.webp', caption: 'Defected Reaper - Undertaker' },
      { url: '/img/Undertaker/Undertaker%202.jpg', caption: 'Undertaker Unveiled - Golden Reaper Eyes' },
      { url: '/img/Elizabeth%20Midford/Elizabeth%20Midford.jpg', caption: 'Elizabeth Midford - Dual Sword Stance' },
      { url: '/img/Elizabeth%20Midford/Elizabeth%20Midford%202.webp', caption: 'Elizabeth Midford - Prodigy Swordswoman' },
      { url: '/img/Rian%20Stoker/Rian%20Stoker.webp', caption: 'Aurora Society Leader - Rian Stoker' },
      { url: '/img/Grelle%20Sutcliff/Grelle%20Sutcliff.webp', caption: 'Death Reaper - Grelle Sutcliff' },
      { url: '/img/Ronald%20Knox/Ronald%20Knox.webp', caption: 'Dispatch Reaper - Ronald Knox' }
    ]
  }
};
