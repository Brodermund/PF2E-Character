const AncestryFeats = (Feat) => AncestryFeatTable[Feat] || "Density";
const AncestryFeatTable = {
    "Adapted Cantrip": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "spellcasting class feature",
       "Summary": "Through study of multiple magical traditions, you've altered a spell to suit your spellcasting style."
    },
    "Ancestral Linguistics": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "at least 100 years old",
       "Summary": "Over your extensive lifespan, you've studied many languages."
    },
    "Ancestral Longevity": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "at least 100 years old",
       "Summary": "You have accumulated a vast array of lived knowledge over the years."
    },
    "Arcane Tattoos": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You have tattoos on your body corresponding to one of the ancient Thassilonian schools of magic."
    },
    "Cooperative Nature": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "The short human life span lends perspective and has taught you from a young age to set aside differences and work with others to achieve greatness."
    },
    "Courteous Comeback": {
       "Trait": "Fortune, Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You grew up in the proud Padishah Empire, where even insults have a certain poetic wit."
    },
    "Demonbane Warrior": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against demons."
    },
    "Devil's Advocate": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You know more about the habits of devils than is entirely safe."
    },
    "Dragon Spit": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "Tian-Dan ethnicity",
       "Summary": "Many Tian-Dan claim to have dragon blood in their veins, and in your case, this is true�you can spit energy, and you might have an especially visible sign of your draconic heritage."
    },
    "Earned Glory": {
       "Trait": "Half-Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Elves are often skeptical of their half-elven kin, and you are experienced at telling stories of your accomplishments to gain their respect."
    },
    "Elemental Wrath": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You are so attuned to the land that you can call forth a bolt of energy from your surroundings."
    },
    "Elf Atavism": {
       "Trait": "Half-Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your elven blood runs particularly strong, granting you features far more elven than those of a typical half-elf."
    },
    "Elven Aloofness": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "As much as you might care for them, you've come to terms with the ephemeral nature of non-elves, and it makes their threats feel less troublesome."
    },
    "Elven Lore": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You�ve studied in traditional elven arts, learning about arcane magic and the world around you."
    },
    "Elven Verve": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "While all elves are immune to the paralyzing touch of ghouls, you can shake off flesh-numbing magic of all kinds."
    },
    "Elven Weapon Familiarity": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You favor bows and other elegant weapons."
    },
    "Forlorn": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Watching your friends age and die fills you with moroseness that protects you against harmful emotions."
    },
    "General Training": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your adaptability manifests in your mastery of a range of useful abilities."
    },
    "Gloomseer": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "Nidalese ethnicity",
       "Summary": "Gloom holds few terrors for you, and the pall of darkness over Nidal has made you comfortable in dim light."
    },
    "Haughty Obstinacy": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your powerful ego makes it harder for others to order you around."
    },
    "Keep Up Appearances": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Taldan pride means you never show weakness."
    },
    "Know Oneself": {
       "Trait": "Fortune, Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You center yourself and call to mind the Vudrani monastic ideals of mindfulness and self-knowledge."
    },
    "Know Your Own": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You've spent countless hours studying the history of elves on your world and beyond and are a studied expert in your people's ways."
    },
    "Natural Ambition": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field."
    },
    "Natural Skill": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your ingenuity allows you to learn a wide variety of skills."
    },
    "Nimble Elf": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your muscles are tightly honed."
    },
    "Otherworldly Magic": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your elven magic manifests as a simple arcane spell, even if you aren�t formally trained in magic."
    },
    "Quah Bond": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You grew up among the Shoanti tribes, with the spirits watching over you, and they offer you guidance."
    },
    "Round Ears": {
       "Trait": "Half-Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your elven lineage is subtle enough that you look barely different from other humans, and you�ve learned to use that to your advantage."
    },
    "Saoc Astrology": {
       "Trait": "Concentrate, Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "The ancient Saoc Brethren were the masters of astrology, and while your knowledge may be but a pale shadow of their wisdom, it still comes in handy."
    },
    "Share Thoughts": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "Mualijae ethnicity, Ilverani ethnicity, or Vourinoi ethnicity",
       "Summary": "You have an uncanny knack of communicating with other elves without speaking, though this habit that is often uncomfortable to observers."
    },
    "Sociable": {
       "Trait": "Half-Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You�re extremely extroverted, and you often spend your time carousing or otherwise socializing."
    },
    "Tupilaq Carver": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "You have a spellcasting class feature with the divine or primal tradition",
       "Summary": "You know the truth behind old stories that tell of sending a fetish of bone and sinew to seek vengeance."
    },
    "Unconventional Weaponry": {
       "Trait": "Human",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You�ve familiarized yourself with a particular weapon, potentially from another ancestry or culture."
    },
    "Unwavering Mien": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "Your mystic control and meditations allow you to resist external influences upon your consciousness."
    },
    "Viking Shieldbearer": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You trained with shields and weapons as soon as you were old enough to hold them, eager to win honor and glory for yourself."
    },
    "Wildborn Magic": {
       "Trait": "Elf, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You have learned to access the old magic of wild places."
    },
    "Witch Warden": {
       "Trait": "Human, Uncommon",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You and your family have fought long and hard against witches, particularly the winter witches of Irrisen, and you�ve learned to be wary of their curses and the otherworldly powers their patrons grant."
    },
    "Woodcraft": {
       "Trait": "Elf",
       "Level": 1,
       "Prerequisite": "",
       "Summary": "You have a innate familiarity with forested areas."
    },
    "Adaptive Adept": {
       "Trait": "Human",
       "Level": 5,
       "Prerequisite": "Adapted Cantrip; can cast 3rd-level spells",
       "Summary": "You�ve continued adapting your magic to blend your class�s tradition with your adapted tradition."
    },
    "Ageless Patience": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "You work at a pace born from longevity that enhances your thoroughness."
    },
    "Ancestral Suspicion": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "Long-lived elves have seen civilizations rise and fall, often at the hands of outside forces."
    },
    "Clever Improviser": {
       "Trait": "Human",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "You�ve learned how to handle situations when you�re out of your depth."
    },
    "Darkseer": {
       "Trait": "Human",
       "Level": 5,
       "Prerequisite": "Gloomseer",
       "Summary": "Zon-Kuthon smiles upon you�even if you curse his name�granting you pitch-black eyes that allow you to see in shadows and darkness."
    },
    "Defiance Unto Death": {
       "Trait": "Elf, Uncommon",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "You loathe the alghollthus and their mind magic, and you�ve been trained to be willing to die rather than give into mental manipulation."
    },
    "Elven Instincts": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "Your senses let you react rapidly."
    },
    "Elven Weapon Elegance": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "Elven Weapon Familiarity",
       "Summary": "You are attuned to the weapons of your elven ancestors and are particularly deadly when using them."
    },
    "Fey Influence": {
       "Trait": "All Ancestries, Rare",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "Your exposure to fey influence has given you some primal magic"
    },
    "Forest Stealth": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "Expert in Stealth",
       "Summary": "You are skilled at quickly hiding behind bits of underbrush or foliage."
    },
    "Inspire Imitation": {
       "Trait": "Half-Elf",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "Your own actions inspire your allies to great achievements."
    },
    "Martial Experience": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "You've crossed blades with a wide variety of foes wielding a wide variety of weapons, and you've learned the basics of fighting with nearly any of them."
    },
    "Ornate Tattoo": {
       "Trait": "Human",
       "Level": 5,
       "Prerequisite": "Arcane Tattoos",
       "Summary": "You expand your tattoos to encompass greater magic."
    },
    "Sense Allies": {
       "Trait": "Human",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "Like many humans raised in a close-knit community, you have always been strongly attuned to the presence of others."
    },
    "Supernatural Charm": {
       "Trait": "Half-Elf",
       "Level": 5,
       "Prerequisite": "",
       "Summary": "The elven magic in your blood manifests as a force you can use to become more appealing or alluring."
    },
    "Wavetouched Paragon": {
       "Trait": "Human",
       "Level": 5,
       "Prerequisite": "Bonuwat ethnicity",
       "Summary": "You have been blessed by the sea, granting you the ability to swim like a fish."
    },
    "Wildborn Adept": {
       "Trait": "Elf",
       "Level": 5,
       "Prerequisite": "Wildborn Magic",
       "Summary": "The whispers of the jungle grant you more diverse access to simple primal magic."
    },
    "Brightness Seeker": {
       "Trait": "Elf",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "Once per day, you can spend 10 minutes studying your surroundings in search of omens related to a particular course of action to cast augury as an innate divine spell."
    },
    "Cooperative Soul": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "Cooperative Nature",
       "Summary": "You have developed a soul-deep bond with your comrades and maintain an even greater degree of cooperation with them."
    },
    "Dragon Prince": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "Dragon Spit",
       "Summary": "The blood of the Dragon Kings runs strong in your veins."
    },
    "Drain Emotion": {
       "Trait": "All Ancestries, Enchantment, Mental, Rare",
       "Level": 9,
       "Prerequisite": "Fey Influence",
       "Summary": "You touch an adjacent creature and attempt to draw out its excess emotion."
    },
    "Elf Step": {
       "Trait": "Elf",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "You move in a graceful dance, and even your steps are broad."
    },
    "Expert Longevity": {
       "Trait": "Elf",
       "Level": 9,
       "Prerequisite": "Ancestral Longevity",
       "Summary": "You�ve continued to refine the knowledge and skills you�ve gained through your life."
    },
    "Fey Ascension": {
       "Trait": "All Ancestries, Rare",
       "Level": 9,
       "Prerequisite": "Fey Influence",
       "Summary": "The fey influence on your form and features grows even more powerful and notable."
    },
    "Group Aid": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "Your upbringing emphasized teamwork and helping your allies comes naturally to you."
    },
    "Hardy Traveler": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "There's no journey too far or burden too heavy when your friends are at your side."
    },
    "Heir of the Saoc": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "Saoc Astrology",
       "Summary": "In the past, you would have been a proud initiate of the Saoc Brethren."
    },
    "Incredible Improvisation": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "Clever Improviser",
       "Summary": "A stroke of brilliance gives you a major advantage with a skill despite your inexperience."
    },
    "Multitalented": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "You�ve learned to split your focus between multiple classes with ease."
    },
    "Otherworldly Acumen": {
       "Trait": "Elf",
       "Level": 9,
       "Prerequisite": "at least one innate spell gained from an elf ancestry feat",
       "Summary": "The arcane magic you possess grows in power and complexity."
    },
    "Pinch Time": {
       "Trait": "Half-Elf",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "One of your parents has a human life span and another an elven life span, with your own somewhere between."
    },
    "Sense Thoughts": {
       "Trait": "Elf, Uncommon",
       "Level": 9,
       "Prerequisite": "Share Thoughts",
       "Summary": "You have an even stranger knack for knowing what other people are thinking."
    },
    "Shory Aeromancer": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "Garundi ethnicity, Mauxi ethnicity, or Tian-Yae ethnicity",
       "Summary": "Your ancestors hailed from the flying cities of the Shory, and a few simple tricks have come down through the ages to you."
    },
    "Tree Climber (Elf)": {
       "Trait": "Elf",
       "Level": 9,
       "Prerequisite": "",
       "Summary": "You've spent much of your life among the treetops and have become an expert at quickly and safely climbing them."
    },
    "Virtue-Forged Tattoos": {
       "Trait": "Human",
       "Level": 9,
       "Prerequisite": "Ornate Tattoo",
       "Summary": "Your tattoos are a work of eldritch genius, a masterpiece of art, magic, and skin."
    },
    "Advanced General Training": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "",
       "Summary": "Over the course of adventuring, your adaptability has let you pick up numerous useful abilities."
    },
    "Avenge Ally": {
       "Trait": "Elf, Fortune",
       "Level": 13,
       "Prerequisite": "",
       "Summary": "Though you know that you will eventually outlive your companions, seeing them at death's door brings clarity to your attacks."
    },
    "Bounce Back": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "",
       "Summary": "You recover from near-death experiences with astounding resilience."
    },
    "Cannibalize Magic": {
       "Trait": "All Ancestries, Rare",
       "Level": 13,
       "Prerequisite": "Fey Influence",
       "Summary": "The fey magic inside of you is a vital part of your body, and you can steal other sources of magic to replenish yours."
    },
    "Eldritch Calm": {
       "Trait": "All Ancestries, Rare",
       "Level": 13,
       "Prerequisite": "Fey Influence",
       "Summary": "Your fey heritage has altered your mindset to more resemble the uncanny perspective of the fey."
    },
    "Elven Weapon Expertise": {
       "Trait": "Elf",
       "Level": 13,
       "Prerequisite": "Elven Weapon Familiarity",
       "Summary": "Your elven affinity blends with your class training, granting you great skill with elven weapons."
    },
    "Glamour": {
       "Trait": "All Ancestries, Rare",
       "Level": 13,
       "Prerequisite": "Fey Influence",
       "Summary": "You unlock a new level of fey power and can manipulate the perceptions of others using a font of First World magic."
    },
    "Irriseni Ice-Witch": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "Jadwiga ethnicity; Wintertouched Human heritage",
       "Summary": "You can trace your direct descent from one of the Queens of Irrisen and thus from Baba Yaga herself."
    },
    "Shadow Pact": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "Nidalese ethnicity",
       "Summary": "Thousands of years ago, your ancestors made a pact with Zon-Kuthon."
    },
    "Shory Aerialist": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "Garundi ethnicity, Mauxi ethnicity, or Tian-Yae ethnicity; Shory Aeromancer or ability to cast fly",
       "Summary": "Unique in Golarion's history, the Shory people developed fighting styles dedicated to combat in the air."
    },
    "Stubborn Persistence": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "",
       "Summary": "Humans are renowned for their ability to persist through the most grueling of trials."
    },
    "Unconventional Expertise": {
       "Trait": "Human",
       "Level": 13,
       "Prerequisite": "Unconventional Weaponry; trained in the weapon you chose for Unconventional Weaponry",
       "Summary": "You�ve continued to advance your powers using your unconventional weapon."
    },
    "Universal Longevity": {
       "Trait": "Elf",
       "Level": 13,
       "Prerequisite": "Expert Longevity",
       "Summary": "You�ve perfected your ability to keep up with all the skills you've learned over your long life."
    },
    "Wandering Heart": {
       "Trait": "Elf",
       "Level": 13,
       "Prerequisite": "Arctic Elf, Cavern Elf, Desert Elf, Woodland Elf, or any other elf heritage based on adapting to an environment",
       "Summary": "While all elves adapt to their environments over time, you have traveled so widely and become attuned to so many environs that your body now changes more rapidly than other elves."
    },
    "Fey Transcendence": {
       "Trait": "All Ancestries, Rare",
       "Level": 17,
       "Prerequisite": "Fey Influence",
       "Summary": "You become a powerful fey creature, gaining strengths tied to the First World but also some of the weakness against which all fey must contend."
    },
    "Heroic Presence": {
       "Trait": "Emotion, Human, Mental",
       "Level": 17,
       "Prerequisite": "",
       "Summary": "The blood of heroes courses through your veins, and you inspire your allies to dig deep and find a new level of resolve."
    },
    "Magic Rider": {
       "Trait": "Elf",
       "Level": 17,
       "Prerequisite": "",
       "Summary": "Your people used powerful magic to travel between distant worlds, and the remnants of that magic make such transportation easier for you."
    }
 }