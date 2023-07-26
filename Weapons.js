const WeaponsMapper = (Weapon) => WeaponsTable[Weapon] || "Density";
const WeaponsTable = {
    "Fist": {
       "Weapon Type": "Unarmed",
       "Trait": "Agile, Finesse, Nonlethal, Unarmed",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Battle Lute": {
       "Weapon Type": "Simple",
       "Trait": "Shove, Two-Hand 1d8, Uncommon",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Clan Dagger": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Dwarf, Parry, Uncommon, Versatile B",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Club": {
       "Weapon Type": "Simple",
       "Trait": "Thrown 10 ft.",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Corset Knife": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Concealable, Finesse, Thrown 10 ft.",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Dagger": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Finesse, Thrown 10 ft., Versatile S",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Forked Bipod": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Deadly d6, Finesse",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Frying Pan": {
       "Weapon Type": "Simple",
       "Trait": "Fatal d8, Halfling",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Gauntlet": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Free-Hand",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Juggling Club": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Nonlethal, Thrown 20 ft., Uncommon",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Katar": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Deadly d6, Monk, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Knuckle Duster": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Free-Hand, Monk",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Light Mace": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Finesse, Shove",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Longspear": {
       "Weapon Type": "Simple",
       "Trait": "Reach",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Mace": {
       "Weapon Type": "Simple",
       "Trait": "Shove",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Morningstar": {
       "Weapon Type": "Simple",
       "Trait": "Versatile P",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Nightstick": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Finesse, Nonlethal, Parry, Uncommon",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Poi": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Backswing, Finesse, Nonlethal, Uncommon",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Reinforced Frame": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Attached, Free-Hand",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Shears": {
       "Weapon Type": "Simple",
       "Trait": "Deadly d8, Finesse, Uncommon, Versatile P",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Sickle": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Finesse, Trip",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Spear": {
       "Weapon Type": "Simple",
       "Trait": "Thrown 20 ft.",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Spiked Gauntlet": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Free-Hand",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Staff": {
       "Weapon Type": "Simple",
       "Trait": "Two-Hand 1d8",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Stiletto Pen": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Concealable, Finesse, Thrown 10 ft., Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Throwing Knife": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Finesse, Thrown 20 ft.",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Thundermace": {
       "Weapon Type": "Simple",
       "Trait": "Backswing, Uncommon",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Tri-Bladed Katar": {
       "Weapon Type": "Simple",
       "Trait": "Disarm, Fatal d8, Monk, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Wheel Blades": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Attached, Free-Hand",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Wheel Spikes": {
       "Weapon Type": "Simple",
       "Trait": "Agile, Attached, Free-Hand",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Adze": {
       "Weapon Type": "Martial",
       "Trait": "Forceful, Grippli, Sweep",
       "Damage": "1d10",
       "Damage Type": "S"
    },
    "Asp Coil": {
       "Weapon Type": "Martial",
       "Trait": "Reach, Uncommon, Versatile P",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Axe Musket": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Sweep, Combination, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Bastard Sword": {
       "Weapon Type": "Martial",
       "Trait": "Two-Hand 1d12",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Battle Axe": {
       "Weapon Type": "Martial",
       "Trait": "Sweep",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Battle Saddle": {
       "Weapon Type": "Martial",
       "Trait": "Parry, Sweep, Vehicular",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Bayonet": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Attached to crossbow or firearm, Finesse",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Bec de Corbin": {
       "Weapon Type": "Martial",
       "Trait": "Razing, Reach, Shove, Versatile B",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Black Powder Knuckle Dusters": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Critical Fusion, Combination, Uncommon",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Bladed Scarf": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Reach, Sweep, Trip, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Bo Staff": {
       "Weapon Type": "Martial",
       "Trait": "Monk, Parry, Reach, Trip",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Boarding Axe": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Azarketi, Climbing, Uncommon, Versatile P",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Boarding Pike": {
       "Weapon Type": "Martial",
       "Trait": "Reach, Shove, Uncommon",
       "Damage": "1d10",
       "Damage Type": "P"
    },
    "Bow Staff": {
       "Weapon Type": "Martial",
       "Trait": "Finesse, Monk, Parry, Sweep, Combination",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Breaching Pike": {
       "Weapon Type": "Martial",
       "Trait": "Hobgoblin, Razing, Reach, Uncommon",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Buugeng": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Conrasu, Sweep, Twin, Uncommon",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Cane Pistol": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Thrown 10 ft., Combination, Uncommon",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Claw Blade": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Catfolk, Deadly d8, Disarm, Finesse, Uncommon, Versatile P",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Combat Grapnel": {
       "Weapon Type": "Martial",
       "Trait": "Finesse, Grapple, Tethered, Thrown 20 ft., Uncommon",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Combat Lure": {
       "Weapon Type": "Martial",
       "Trait": "Finesse, Tethered, Thrown 20 ft., Training, Uncommon",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Crescent Cross": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Parry, Combination",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Dagger Pistol": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Critical Fusion, Finesse, Thrown 10 ft., Versatile P, Combination, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Dancer's Spear": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Finesse, Reach, Sweep, Versatile B",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Dandpatta": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Twin, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Dogslicer": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Backstabber, Finesse, Goblin, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Dueling Spear": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Uncommon, Versatile S",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Earthbreaker": {
       "Weapon Type": "Martial",
       "Trait": "Razing, Shove, Two-Hand d10, Versatile P",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Elven Branched Spear": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Elf, Finesse, Reach, Uncommon",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Elven Curve Blade": {
       "Weapon Type": "Martial",
       "Trait": "Elf, Finesse, Forceful, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Exquisite Sword Cane": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Concealable, Finesse, Parry, Twin (Sheath)",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Exquisite Sword Cane Sheath": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Finesse, Parry, Twin (Sword)",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Falchion": {
       "Weapon Type": "Martial",
       "Trait": "Forceful, Sweep",
       "Damage": "1d10",
       "Damage Type": "S"
    },
    "Fangwire": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Backstabber, Deadly d8, Finesse, Grapple, Kobold, Uncommon",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Fauchard": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Reach, Sweep, Trip",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Fighting Fan": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Backstabber, Deadly d6, Finesse, Monk, Uncommon",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Fighting Stick": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Halfling, Nonlethal, Shove, Uncommon",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Filcher's Fork": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Backstabber, Deadly d6, Finesse, Halfling, Thrown 20 ft., Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Flail": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Sweep, Trip",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Flyssa": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Finesse, Versatile P",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Gaff": {
       "Weapon Type": "Martial",
       "Trait": "Trip, Versatile P",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Gill Hook": {
       "Weapon Type": "Martial",
       "Trait": "Azarketi, Grapple, Reach, Uncommon",
       "Damage": "1d10",
       "Damage Type": "P"
    },
    "Glaive": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Forceful, Reach",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Gnome Amalgam Musket": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Gnome, Trip, Versatile P, Combination, Uncommon",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Gnome Hooked Hammer": {
       "Weapon Type": "Martial",
       "Trait": "Gnome, Trip, Two-Hand 1d10, Uncommon, Versatile P",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Greataxe": {
       "Weapon Type": "Martial",
       "Trait": "Sweep",
       "Damage": "1d12",
       "Damage Type": "S"
    },
    "Greatclub": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Shove",
       "Damage": "1d10",
       "Damage Type": "B"
    },
    "Greatpick": {
       "Weapon Type": "Martial",
       "Trait": "Fatal 1d12",
       "Damage": "1d10",
       "Damage Type": "P"
    },
    "Greatsword": {
       "Weapon Type": "Martial",
       "Trait": "Versatile P",
       "Damage": "1d12",
       "Damage Type": "S"
    },
    "Griffon Cane": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Two-Hand d10",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Guisarme": {
       "Weapon Type": "Martial",
       "Trait": "Reach, Trip",
       "Damage": "1d10",
       "Damage Type": "S"
    },
    "Gun Sword": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Versatile P, Combination, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Halberd": {
       "Weapon Type": "Martial",
       "Trait": "Reach, Versatile S",
       "Damage": "1d10",
       "Damage Type": "P"
    },
    "Hammer Gun": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Shove, Combination, Uncommon",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Hand Adze": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Forceful, Grippli, Sweep, Thrown 10 ft.",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Hatchet": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Sweep, Thrown  10 ft.",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Horsechopper": {
       "Weapon Type": "Martial",
       "Trait": "Goblin, Reach, Trip, Uncommon, Versatile P",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Injection Spear": {
       "Weapon Type": "Martial",
       "Trait": "Injection, Reach, Uncommon",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Jiu Huan Dao": {
       "Weapon Type": "Martial",
       "Trait": "Sweep, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Kama": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Monk, Trip, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Katana": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Two-Hand 1d10, Uncommon, Versatile P",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Khakkara": {
       "Weapon Type": "Martial",
       "Trait": "Shove, Two-Hand 1d10, Uncommon, Versatile P",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Khopesh": {
       "Weapon Type": "Martial",
       "Trait": "Trip, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Kris": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Deadly d8, Finesse",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Kukri": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Finesse, Trip, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Kusarigama": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Monk, Reach, Trip, Uncommon, Versatile B",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Lance": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Jousting 1d6, Reach",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Lancer": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Reach, Combination",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Leiomano": {
       "Weapon Type": "Martial",
       "Trait": "Fatal d10, Uncommon, Versatile S",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Light Hammer": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Thrown 20 ft.",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Light Pick": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Fatal 1d8",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Lion Scythe": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Finesse, Trip, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Long Hammer": {
       "Weapon Type": "Martial",
       "Trait": "Brace, Dwarf, Reach, Trip, Versatile P",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Longsword": {
       "Weapon Type": "Martial",
       "Trait": "Versatile P",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Mace Multipistol": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Shove, Combination, Uncommon",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Machete": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Sweep",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Main-gauche": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Parry, Versatile S",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Mambele": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Disarm, Thrown 20 ft., Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Maul": {
       "Weapon Type": "Martial",
       "Trait": "Shove",
       "Damage": "1d12",
       "Damage Type": "B"
    },
    "Meteor Hammer": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Disarm, Reach, Trip",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Mikazuki": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Disarm, Monk, Parry, Combination",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Monkey's Fist": {
       "Weapon Type": "Martial",
       "Trait": "Finesse, Monk, Nonlethal",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Naginata": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Reach, Uncommon, Versatile P",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Nunchaku": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Disarm, Finesse, Monk, Uncommon",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Ogre Hook": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d10, Trip, Uncommon",
       "Damage": "1d10",
       "Damage Type": "P"
    },
    "Orc Knuckle Dagger": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Orc, Uncommon",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Panabas": {
       "Weapon Type": "Martial",
       "Trait": "Forceful, Sweep, Two-Hand d10",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Pantograph Gauntlet": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d6, Monk, Reach, Shove, Uncommon",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Pick": {
       "Weapon Type": "Martial",
       "Trait": "Fatal 1d10",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Piercing Wind": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Finesse, Forceful, Sweep, Combination, Uncommon",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Piranha Kiss": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Probing Cane": {
       "Weapon Type": "Martial",
       "Trait": "Finesse, Sweep",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Ranseur": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Reach",
       "Damage": "1d10",
       "Damage Type": "P"
    },
    "Rapier": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Disarm, Finesse",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Rapier Pistol": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Deadly d8, Disarm, Finesse, Combination, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Rope Dart": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Sweep, Tethered, Thrown 20 ft., Trip, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Rungu": {
       "Weapon Type": "Martial",
       "Trait": "Grippli, Shove, Thrown 30 ft.",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Sai": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Monk, Uncommon, Versatile B",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Sansetsukon": {
       "Weapon Type": "Martial",
       "Trait": "Backswing, Disarm, Monk, Parry, Uncommon",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Sap": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Nonlethal",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Scimitar": {
       "Weapon Type": "Martial",
       "Trait": "Forceful, Sweep",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Scizore": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Parry",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Scorpion Whip": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Reach, Trip, Uncommon",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Scourge": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Nonlethal, Sweep",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Scythe": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d10, Trip",
       "Damage": "1d10",
       "Damage Type": "S"
    },
    "Shauth Blade": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Deadly d8, Finesse, Uncommon, Versatile P",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Shield Bash": {
       "Weapon Type": "Martial",
       "Trait": "",
       "Damage": "1d4",
       "Damage Type": "B"
    },
    "Shield Boss": {
       "Weapon Type": "Martial",
       "Trait": "Attached to Shield",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Shield Spikes": {
       "Weapon Type": "Martial",
       "Trait": "Attached to Shield",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Shortsword": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Finesse, Versatile S",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Spiked Chain": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Trip, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Starknife": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Deadly d6, Finesse, Thrown 20 ft., Versatile S",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Sword Cane": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Concealable, Finesse",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Talwar": {
       "Weapon Type": "Martial",
       "Trait": "Forceful, Two-Hand d10, Versatile P",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Tekko-Kagi": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Free-Hand, Monk, Parry, Uncommon",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Temple Sword": {
       "Weapon Type": "Martial",
       "Trait": "Monk, Trip, Uncommon",
       "Damage": "1d8",
       "Damage Type": "S"
    },
    "Tengu Gale Blade": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Tengu, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Thorn Whip": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Ghoran, Reach, Trip, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Three Peaked Tree": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Elf, Tethered, Thrown 20 ft., Combination, Uncommon",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Trident": {
       "Weapon Type": "Martial",
       "Trait": "Thrown 20 ft.",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "Triggerbrand": {
       "Weapon Type": "Martial",
       "Trait": "Critical Fusion, Finesse, Versatile S, Combination, Uncommon",
       "Damage": "1d6",
       "Damage Type": "P"
    },
    "Umbrella Injector": {
       "Weapon Type": "Martial",
       "Trait": "Concealable, Finesse, Injection, Parry, Uncommon",
       "Damage": "1d4",
       "Damage Type": "P"
    },
    "Urumi": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d10, Sweep, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Wakizashi": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Deadly d8, Finesse, Uncommon, Versatile P",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "War Flail": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Sweep, Trip",
       "Damage": "1d10",
       "Damage Type": "B"
    },
    "War Lance": {
       "Weapon Type": "Martial",
       "Trait": "Deadly d8, Jousting d6, Parry, Shove, Uncommon",
       "Damage": "1d8",
       "Damage Type": "P"
    },
    "War Razor": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Backstabber, Deadly d8, Finesse",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Warhammer": {
       "Weapon Type": "Martial",
       "Trait": "Shove",
       "Damage": "1d8",
       "Damage Type": "B"
    },
    "Whip": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Finesse, Nonlethal, Reach, Trip",
       "Damage": "1d4",
       "Damage Type": "S"
    },
    "Whipstaff": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Finesse, Monk, Parry, Sweep, Uncommon",
       "Damage": "1d6",
       "Damage Type": "B"
    },
    "Wish Blade": {
       "Weapon Type": "Martial",
       "Trait": "Disarm, Geniekin, Resonant, Two-Hand 1d10, Uncommon",
       "Damage": "1d6",
       "Damage Type": "S"
    },
    "Wish Knife": {
       "Weapon Type": "Martial",
       "Trait": "Agile, Disarm, Finesse, Geniekin, Resonant, Uncommon, Versatile S",
       "Damage": "1d4",
       "Damage Type": "P"
    }
 }