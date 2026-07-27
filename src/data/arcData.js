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
      { url: '/img/Gregory%20Violet/Gregory%20Violet%203.jpg', caption: 'Purple Wolf Dormitory - Gregory Violet'}
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
    location: 'Traveling Circus / Baron Kelvin\'s Estate, London',
    time: 'Spring, 1889',
    classification: 'ENTERTAINMENT FRONT / CHILD ABDUCTION RING',
    badgeColor: '#8B0000',
    themeColors: {
      burgundy: '#5C1A1B',
      gold: '#B8954F',
      greasepaint: '#F5F5F5',
      steel: '#A0A0A0'
    },

    missionBrief: 'Children are vanishing from the capital\'s workhouses. The trail leads to a traveling circus of extraordinary performers. Ciel and Sebastian infiltrate as "Smile" (a disabled orphan) and "Black" (his caretaker) to uncover the connection between the circus and the kidnappings.',

    firstTier: [
      {
        id: 'joker',
        name: 'JOKER',
        role: 'Ringmaster & Leader',
        limb: 'Artificial Right Arm (Blade Concealed)',
        color: '#B8954F',
        image: '/img/Joker/Joker.webp',
        desc: 'Leader of the First Tier. Charismatic, desperate, and pathologically loyal to Baron Kelvin who gave him purpose.'
      },
      {
        id: 'beast',
        name: 'BEAST',
        role: 'Beast Tamer',
        limb: 'Artificial Right Leg',
        color: '#8B0000',
        image: '/img/Beast/Beast.webp',
        desc: 'Fierce, independent, secretly in love with Joker. Commands giant tigers with a cracked whip.'
      },
      {
        id: 'dagger',
        name: 'DAGGER',
        role: 'Knife Thrower',
        limb: 'Artificial Both Hands',
        color: '#D4A373',
        image: '/img/Dagger/Dagger.webp',
        desc: 'Bombastic, affectionate, devoted to Beast. Throws daggers with inhuman supernatural precision.'
      },
      {
        id: 'doll',
        name: 'DOLL',
        role: 'Tightrope Walker',
        limb: 'Artificial Left Arm & Leg',
        color: '#A0A0A0',
        image: '/img/Doll/Doll.jpg',
        desc: 'The youngest and most innocent. Befriends "Smile" (Ciel) without knowing his true Earl identity. Face hidden by makeup.'
      },
      {
        id: 'snake',
        name: 'SNAKE',
        role: 'Snake Charmer',
        limb: 'Unmodified (Scales & Serpent Speech)',
        color: '#1B4D3E',
        image: '/img/Snake/Snake.webp',
        desc: 'Speaks through his serpents (Emily, Oscar, Wordsworth). Socially isolated, eerily gentle. Sole survivor of the arc.'
      },
      {
        id: 'kelvin',
        name: 'BARON KELVIN & DOCTOR',
        role: 'Mastermind & Surgeon',
        limb: 'Prosthetic Bone Grafts',
        color: '#5C1A1B',
        image: '/img/Baron%20Kelvin/Baron%20Kelvin.webp',
        desc: 'Obsessed with the day Ciel was sacrificed by the cult. Seeks to recreate the ritual using modified children.'
      }
    ],

    evidenceTickets: [
      { id: 't1', title: 'WORKHOUSE ABDUCTION LOG', detail: '12 Children Vanished from East London' },
      { id: 't2', title: 'CIRCUS VIP TICKET #004', detail: 'Private Performance at Baron Kelvin Manor' },
      { id: 't3', title: 'PROSTHETIC BONE SCHEMATICS', detail: 'Doctor\'s Surgical Experimentation Notes' }
    ],

    curtains: [
      {
        id: 'workhouse',
        title: 'THE WORKHOUSE TRUTH',
        text: 'The children were never saved. They were brought to Baron Kelvin\'s estate to be used as raw material for Doctor\'s prosthetic bone experiments, or slain in cult ritual recreations.'
      },
      {
        id: 'ritual',
        title: 'THE RITUAL CHAMBER BURNING',
        text: 'Ciel discovers the horror and orders Sebastian to burn the entire estate to ashes. Joker dies defending Kelvin. Ciel walks away into the night without a smile.'
      }
    ],

    tacticalSpecs: [
      { label: 'PRIMARY FRONT', value: 'NOAH\'S ARK TRAVELING CIRCUS' },
      { label: 'CIEL ALIAS', value: 'SMILE // TENT HAND' },
      { label: 'SEBASTIAN ALIAS', value: 'BLACK // ACROBAT BUTLER' },
      { label: 'SURGICAL CREATOR', value: 'THE DOCTOR' },
      { label: 'CULPRIT', value: 'BARON KELVIN' },
      { label: 'SOLE SURVIVOR', value: 'SNAKE (RECRUITED TO MANOR)' }
    ],

    mysteries: [
      { title: 'Workhouse Kidnappings', status: 'RESOLVED - ESTATE BURNED' },
      { title: 'First Tier Performers', status: 'DECEASED EXCEPT SNAKE' },
      { title: 'Baron Kelvin Obsession', status: 'TERMINATED BY SEBASTIAN' }
    ],

    images: [
      { url: '/img/Joker/Joker.webp', caption: 'Joker — Ringmaster of the First Tier' },
      { url: '/img/Joker/Joker%202.webp', caption: 'Joker — Prosthetic Arm Concealed Blade' },
      { url: '/img/Beast/Beast.webp', caption: 'Beast — Fierce Beast Tamer' },
      { url: '/img/Dagger/Dagger.webp', caption: 'Dagger — Master Knife Thrower' },
      { url: '/img/Dagger/Dagger%202.webp', caption: 'Dagger — Inhuman Precision' },
      { url: '/img/Doll/Doll.jpg', caption: 'Doll — Tightrope Walker' },
      { url: '/img/Doll/Doll%202.webp', caption: 'Doll — Unmasked Performance' },
      { url: '/img/Snake/Snake.webp', caption: 'Snake — Serpent Speaker' },
      { url: '/img/Snake/Snake%202.jpg', caption: 'Snake — Sole Survivor' },
      { url: '/img/Baron%20Kelvin/Baron%20Kelvin.webp', caption: 'Baron Kelvin — Obsessive Aristocrat' },
      { url: '/img/Baron%20Kelvin/Baron%20Kelvin%202.jpg', caption: 'Baron Kelvin — Estate Ritual Ground' },
      { url: '/img/Doctor/Doctor.webp', caption: 'The Doctor — Prosthetic Surgeon' }
    ]
  },

  MANOR_MURDERS: {
    id: 'MANOR_MURDERS',
    title: 'PHANTOMHIVE MANOR MURDERS',
    subtitle: 'BOOK OF MURDER // WINTER, 1889',
    location: 'Phantomhive Manor, London Outskirts',
    time: 'Winter, 1889',
    classification: 'LOCKED-ROOM MYSTERY / ENTRAPMENT OPERATION',
    badgeColor: '#3E0000',
    themeColors: {
      blood: '#3E0000',
      smoke: '#6B7280',
      amber: '#D4A373',
      ivory: '#F5F5DC',
      mahogany: '#3E2723',
      poison: '#2E5A4C'
    },

    missionBrief: 'Ciel hosts a private dinner party under the guise of a business negotiation. His true objective: to identify and expose a criminal hiding among his guests. The method is extreme. The game is deadly. And the butler is already dead.',

    guests: [
      { id: 'siemens', name: 'GEORG VON SIEMENS', role: 'German Investor', status: 'Deceased (Poisoned)', image: '/img/Georg%20von%20Siemens/Georg%20von%20Siemens.webp', desc: 'Abrasive German financier secretly embezzling railway funds. Found dead in a locked room.' },
      { id: 'woodley', name: 'KARL WOODLEY', role: 'Railway Director', status: 'Exposed & Arrested', image: '/img/Karl%20Woodley/Karl%20Woodley.webp', desc: 'The true target. Blackmailer and murderer who covered his tracks through legal loopholes.' },
      { id: 'doyle', name: 'ARTHUR CONAN DOYLE', role: 'Physician & Writer', status: 'Impartial Witness', image: '/img/Arthur%20Conan%20Doyle/Arthur%20Conan%20Doyle.webp', desc: 'Invited as witness. Later documents the case, shaken by the realization that Ciel staged justice.' },
      { id: 'jeremy', name: 'JEREMY RATHBONE', role: 'Consulting Detective', status: 'Sebastian in Disguise', image: '/img/Jeremy%20Rathbone/Jeremy%20Rathbone.webp', desc: 'Eccentric pipe-smoking detective who arrives unbidden. In truth, Sebastian Michaelis faking his death.' },
      { id: 'sebastian', name: 'SEBASTIAN MICHAELIS', role: 'Head Butler', status: 'Staged Corpse / Disguised', image: '/img/Sebastian%20Michaelis/Sebastian-Michaelis-Book-Of-Murder.avif', desc: 'Found stabbed in his quarters. Orchestrates the theatrical investigation from behind the scenes.' }
    ],

    crimes: [
      { no: 1, victim: 'Georg von Siemens', room: 'Locked Guest Bedroom', method: 'Tetrodotoxin Poisoning during dinner' },
      { no: 2, victim: 'Patrick Phelps', room: 'Earl Ciel\'s Bedroom', method: 'Strangled in Ciel\'s bed behind locked door' },
      { no: 3, victim: 'Sebastian Michaelis', room: 'Butler Quarters', method: 'Staged fatal chest wound by prosthetic blade' }
    ],

    doyleNotes: [
      { title: 'ENTRY #01 — THE DINNER PARTY', text: 'The weather is treacherous. Storm seals the estate. Lord Siemens collapsed after consuming his wine.' },
      { title: 'ENTRY #02 — THE BUTLER\'S BODY', text: 'Michaelis is dead. No pulse. Yet Detective Rathbone\'s deductions seem suspiciously precise.' },
      { title: 'ENTRY #03 — THE DEMON IN SILK', text: 'Justice was not served here tonight — it was performed. Young Phantomhive is not a victim, but a playwright of death.' }
    ],

    tacticalSpecs: [
      { label: 'LOCATION', value: 'PHANTOMHIVE MANOR ESTATE' },
      { label: 'INCIDENT TYPE', value: 'THREE LOCKED-ROOM MURDERS' },
      { label: 'TRUE TARGET', value: 'KARL WOODLEY (RAILWAY CRIMES)' },
      { label: 'DETECTIVE ALIAS', value: 'JEREMY RATHBONE' },
      { label: 'WITNESS', value: 'DR. ARTHUR CONAN DOYLE' },
      { label: 'FINAL CASE STATUS', value: 'SOLVED & WOODLEY ARRESTED' }
    ],

    mysteries: [
      { title: 'Siemens Poisoning', status: 'EXPOSED AS WOODLEY PLOT' },
      { title: 'Sebastian "Death"', status: 'STAGED THEATRICAL DISGUISE' },
      { title: 'Locked Room Mystery', status: 'SOLVED BY DETECTIVE RATHBONE' }
    ],

    images: [
      { url: '/img/Jeremy%20Rathbone/Jeremy%20Rathbone.webp', caption: 'Jeremy Rathbone — Consulting Detective' },
      { url: '/img/Arthur%20Conan%20Doyle/Arthur%20Conan%20Doyle.webp', caption: 'Dr. Arthur Conan Doyle — Impartial Witness' },
      { url: '/img/Georg%20von%20Siemens/Georg%20von%20Siemens.webp', caption: 'Georg von Siemens — German Investor' },
      { url: '/img/Karl%20Woodley/Karl%20Woodley.webp', caption: 'Karl Woodley — Blackmailer & Target' },
      { url: '/img/Sebastian%20Michaelis/Sebastian-Michaelis-Book-Of-Murder.avif', caption: 'Sebastian Michaelis — Book of Murder Dossier' }
    ]
  },

  THE_CAMPANIA: {
    id: 'THE_CAMPANIA',
    title: 'THE CAMPANIA INCIDENT',
    subtitle: 'BOOK OF ATLANTIC // APRIL, 1889',
    location: 'RMS Campania, Atlantic Ocean',
    time: 'April, 1889',
    classification: 'BIOLOGICAL WARFARE / ROGUE REAPER ACTIVITY',
    badgeColor: '#0F1C2E',
    themeColors: {
      abyss: '#0F1C2E',
      brass: '#8B7355',
      zombie: '#C8D6AF',
      silver: '#C0C0C0',
      pink: '#D4A5A5',
      sepia: '#704214'
    },

    missionBrief: 'The Aurora Society, a secret scientific fraternity, claims to have conquered death. Aboard the luxury liner RMS Campania, they demonstrate "The Salvation" to wealthy elites. Ciel and Sebastian board as guests to investigate rumors that the miracle is an undead weapon of mass destruction.',

    keyEntities: [
      {
        id: 'undertaker',
        name: 'THE UNDERTAKER',
        title: 'DEFECTED GRIM REAPER & MASTERMIND',
        image: '/img/Undertaker/Undertaker.webp',
        details: 'A legendary defected Grim Reaper who extracts and reinserts altered cinematic records into preserved corpses to create Bizarre Dolls. Knew Vincent Phantomhive and views Ciel with sinister fondness.',
        color: '#C0C0C0'
      },
      {
        id: 'elizabeth',
        name: 'ELIZABETH MIDFORD',
        title: 'PRODIGY SWORDSWOMAN & CIEL\'S FIANCÉE',
        image: '/img/Elizabeth%20Midford/Elizabeth%20Midford.jpg',
        details: 'Hidden her terrifying genius with twin blades for years to remain "delicate" for Ciel. When Bizarre Dolls attack, she unsheathes her swords and cuts down the undead in a flurry of pink silk and blood.',
        color: '#D4A5A5'
      },
      {
        id: 'grelle',
        name: 'GRELLE SUTCLIFF',
        title: 'SENIOR GRIM REAPER DISPATCH',
        image: '/img/Grelle%20Sutcliff/Grelle%20Sutcliff.webp',
        details: 'Dramatic senior Grim Reaper equipped with a custom chainsaw death scythe. Dispatched by the Reaper Society to investigate illegal soul retention aboard the Campania.',
        color: '#8B0000'
      },
      {
        id: 'ronald',
        name: 'RONALD KNOX',
        title: 'JUNIOR GRIM REAPER DISPATCH',
        image: '/img/Ronald%20Knox/Ronald%20Knox.webp',
        details: 'Easygoing junior Grim Reaper who wields a lawnmower death scythe. Partners with Grelle to collect souls and purge Bizarre Dolls.',
        color: '#D4A373'
      },
      {
        id: 'stoker',
        name: 'DR. RIAN STOKER',
        title: 'AURORA SOCIETY LEADER',
        image: '/img/Rian%20Stoker/Rian%20Stoker.webp',
        details: 'Leader of the Aurora Society. Believes he is curing death with "The Phoenix" ceremony, unaware he is Undertaker\'s pawn.',
        color: '#8B7355'
      }
    ],

    decks: [
      { id: 'first_class', name: 'FIRST CLASS BALLROOM', risk: 'CRITICAL', status: 'Bizarre Dolls Unleashed' },
      { id: 'engine_room', name: 'ENGINE ROOM & CARGO HOLD', risk: 'EXTREME', status: 'Sabotaged & Flooding' },
      { id: 'stern_deck', name: 'STERN DECK & PROMENADE', risk: 'FATAL', status: 'Reaper Battleground' }
    ],

    records: [
      { title: 'RECORD #001 — THE PHOENIX SALVATION', text: 'Implanted memories into dead brain cells force corpse muscles to reanimate without a soul.' },
      { title: 'RECORD #002 — SWORDSWOMAN UNLEASHED', text: 'Elizabeth Midford slays 30 undead in 45 seconds using dual rapier technique.' },
      { title: 'RECORD #003 — UNDERTAKER\'S COFFIN', text: 'Undertaker escapes into the icy Atlantic carrying a preserved coffin of immense significance.' }
    ],

    tacticalSpecs: [
      { label: 'VESSEL', value: 'RMS CAMPANIA LUXURY LINER' },
      { label: 'LOCATION', value: 'MID-ATLANTIC OCEAN' },
      { label: 'THREAT CLASS', value: 'BIZARRE DOLL UNDEAD OUTBREAK' },
      { label: 'CREATOR', value: 'DEFECTED REAPER UNDERTAKER' },
      { label: 'SWORDSMANSHIP', value: 'LADY ELIZABETH MIDFORD' },
      { label: 'SHIP STATUS', value: 'SUNK TO OCEAN FLOOR' }
    ],

    mysteries: [
      { title: 'Bizarre Doll Plague', status: 'SUNK WITH THE SHIP' },
      { title: 'Elizabeth True Skill', status: 'REVEALED TO CIEL' },
      { title: 'Undertaker Secret Coffin', status: 'RECOVERED & ESCAPED' }
    ],

    images: [
      { url: '/img/Undertaker/Undertaker.webp', caption: 'The Undertaker — Master Reaper' },
      { url: '/img/Undertaker/Undertaker%202.jpg', caption: 'The Undertaker — Unmasked Death Scythe' },
      { url: '/img/Elizabeth%20Midford/Elizabeth%20Midford.jpg', caption: 'Elizabeth Midford — Dual Blade Master' },
      { url: '/img/Elizabeth%20Midford/Elizabeth%20Midford%202.webp', caption: 'Elizabeth Midford — Battle Attire' },
      { url: '/img/Grelle%20Sutcliff/Grelle%20Sutcliff.webp', caption: 'Grelle Sutcliff — Death Reaper Dispatch' },
      { url: '/img/Grelle%20Sutcliff/Grelle%20Sutcliff%202.jpg', caption: 'Grelle Sutcliff — Chainsaw Scythe' },
      { url: '/img/Ronald%20Knox/Ronald%20Knox.webp', caption: 'Ronald Knox — Junior Reaper' },
      { url: '/img/Ronald%20Knox/Ronald%20Knox%202.jpg', caption: 'Ronald Knox — Lawn Mower Scythe' },
      { url: '/img/Rian%20Stoker/Rian%20Stoker.webp', caption: 'Dr. Rian Stoker — Aurora Society Leader' }
    ]
  }
};
