const SkillFeats = (Feat) => SkillFeatTable[Feat] || "Density";
const SkillFeatTable = {
    "Acrobatic Performer": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Acrobatics",
       "Summary": "Use Acrobatics to Perform."
    },
    "Additional Lore": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Lore",
       "Summary": "Become trained in another Lore subcategory."
    },
    "Alchemical Crafting": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Crafting",
       "Summary": "Craft alchemical items."
    },
    "All of the Animal": {
       "Trait": "General, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "Trained in Survival",
       "Summary": "You know how to make the best and most efficient use of a hunted animal's carcass."
    },
    "Arcane Sense": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Arcana",
       "Summary": "Cast detect magic at will as an arcane innate spell."
    },
    "Armor Assist": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Athletics or Trained in Warfare Lore",
       "Summary": "Don armor more quickly."
    },
    "Assurance": {
       "Trait": "Fortune, General, Skill",
       "Level": 1,
       "Prerequisite": "trained in at least one skill",
       "Summary": "Receive a fixed result on a skill check."
    },
    "Bargain Hunter": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Diplomacy",
       "Summary": "Earn Income by searching for deals."
    },
    "Battle Medicine": {
       "Trait": "General, Healing, Manipulate, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Medicine",
       "Summary": "Heal yourself or an ally in battle."
    },
    "Bon Mot": {
       "Trait": "Auditory, Concentrate, Emotion, General, Linguistic, Mental, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Diplomacy",
       "Summary": "Distract a foe with a witty quip."
    },
    "Cat Fall": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Acrobatics",
       "Summary": "Treat falls as shorter than they are."
    },
    "Charlatan": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Deception",
       "Summary": "You�ve learned to mimic the abilities of spellcasters by studying their flourishes and words"
    },
    "Charming Liar": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Deception",
       "Summary": "Improve a target's attitude with your lies."
    },
    "Combat Climber": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Athletics",
       "Summary": "Fight more effectively as you Climb."
    },
    "Concealing Legerdemain": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Thievery",
       "Summary": "Conceal an Object using Thievery instead of Stealth."
    },
    "Contract Negotiator": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Legal Lore",
       "Summary": "Your experience with bargaining and deciding terms as part of Highhelm's guilds helps you make deals in other situations."
    },
    "Courtly Graces": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "Use Society to get along in noble society."
    },
    "Crafter's Appraisal": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Crafting",
       "Summary": "Use Crafting to identify magic items."
    },
    "Crystal Healing": {
       "Trait": "General, Healing, Manipulate, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "Trained in Occultism",
       "Summary": "You know how to stimulate a body's natural healing abilities through the application of resonant crystals."
    },
    "Deceptive Worship": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Occultism",
       "Summary": "Pass yourself off as a member of a religion."
    },
    "Dubious Knowledge": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "trained in a skill with the Recall Knowledge action",
       "Summary": "Learn true and erroneous knowledge on failed check."
    },
    "Experienced Professional": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Lore",
       "Summary": "Prevent critical failures when Earning Income."
    },
    "Experienced Smuggler": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Stealth",
       "Summary": "Conceal items from observers more effectively."
    },
    "Experienced Tracker": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Survival",
       "Summary": "Track at your full Speed at a �5 penalty."
    },
    "Express Rider": {
       "Trait": "Exploration, General, Move, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Nature",
       "Summary": "Increase your mount�s travel speed."
    },
    "Eye for Numbers": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "+2 to Decipher Writing about math and count items quickly."
    },
    "Fascinating Performance": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Performance",
       "Summary": "Perform to fascinate observers."
    },
    "Forager": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Survival",
       "Summary": "Forage for supplies to provide for multiple creatures."
    },
    "Forensic Acumen": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Medicine",
       "Summary": "Rapidly examine a body and Recall Knowledge about it."
    },
    "Glean Contents": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "Decipher Writing even when you can�t see the document well."
    },
    "Group Coercion": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Intimidation",
       "Summary": "Coerce multiple targets simultaneously."
    },
    "Group Impression": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Diplomacy",
       "Summary": "Make an Impression on multiple targets at once."
    },
    "Hefty Hauler": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Athletics",
       "Summary": "Increase your Bulk limits by 2."
    },
    "Hobnobber": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Diplomacy",
       "Summary": "Gather Information rapidly."
    },
    "Impressive Performance": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Performance",
       "Summary": "Make an Impression with Performance."
    },
    "Improvise Tool": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Crafting",
       "Summary": "Craft basic tools without a basic crafter�s book."
    },
    "Inoculation": {
       "Trait": "General, Healing, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Medicine",
       "Summary": "Grant patients +2 to saves against getting a disease again."
    },
    "Intimidating Glare": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Intimidation",
       "Summary": "Demoralize a creature without speaking."
    },
    "Lengthy Diversion": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Deception",
       "Summary": "Remain hidden after you Create a Diversion."
    },
    "Lie to Me": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Deception",
       "Summary": "Use Deception to detect lies."
    },
    "Medical Researcher": {
       "Trait": "General, Rare, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Medicine",
       "Summary": "Kassi has taught you not only how to apply medicines with your medical skills but how to craft them as well."
    },
    "Multilingual": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "Learn two new languages."
    },
    "Natural Medicine": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Nature",
       "Summary": "Use Nature to Treat Wounds."
    },
    "No Cause for Alarm": {
       "Trait": "Auditory, Concentrate, Emotion, General, Linguistic, Mental, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Diplomacy",
       "Summary": "Reduce creatures� frightened condition values."
    },
    "Oddity Identification": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Occultism",
       "Summary": "+2 to Occultism checks to Identify Magic with certain traits."
    },
    "Pickpocket": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Thievery",
       "Summary": "Steal or Palm an Object more effectively."
    },
    "Pilgrim's Token": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Religion",
       "Summary": "A religious token lets you act ?rst on a tie for initiative."
    },
    "Quick Coercion": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Intimidation",
       "Summary": "Coerce a creature quickly."
    },
    "Quick Identification": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "trained in Arcana, Nature, Occultism, or Religion",
       "Summary": "Identify Magic in 1 minute or less."
    },
    "Quick Jump": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Athletics",
       "Summary": "High Jump or Long Jump as a single action."
    },
    "Quick Repair": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Crafting",
       "Summary": "Repair items quickly."
    },
    "Quick Squeeze": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Acrobatics",
       "Summary": "Move swiftly as you Squeeze."
    },
    "Ravening's Desperation": {
       "Trait": "General, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "trained in Zevgavizeb Lore",
       "Summary": "Your study of the Beast of Gluttondark has taught you how to make do in the most trying of circumstances rather than succumb to weakness."
    },
    "Read Lips": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "Read the lips of people you can see."
    },
    "Read Psychometric Resonance": {
       "Trait": "Concentrate, Divination, Emotion, Exploration, General, Mental, Occult, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "Trained in Occultism",
       "Summary": "With a touch, you can read the psychic impressions left on objects by their previous owners."
    },
    "Recognize Spell": {
       "Trait": "General, Secret, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Arcana, Trained in Nature, Trained in Occultism, or Trained in Religion",
       "Summary": "Identify a spell as a reaction as it's being cast."
    },
    "Reveal True Name": {
       "Trait": "Auditory, Concentrate, Emotion, General, Mental, Rare, Skill, True Name",
       "Level": 1,
       "Prerequisite": "trained in Intimidation and at least one of Arcana, Nature, Occult, and Religion",
       "Summary": "You attempt to get a creature to do as you wish by threatening them with your knowledge of their true name."
    },
    "Risky Surgery": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Medicine",
       "Summary": "Deal damage to a patient to gain +2 to Treat Wounds."
    },
    "Root Magic": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Occultism",
       "Summary": "Create a token that grants a bonus against a spell or haunt."
    },
    "Schooled in Secrets": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Occultism",
       "Summary": "Gather Information about secret societies and mystery cults."
    },
    "Seasoned": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Alcohol Lore, Trained in Cooking Lore, or Trained in Crafting",
       "Summary": "+1 to Craft food and drink, including potions."
    },
    "Secret Speech": {
       "Trait": "General, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "Trained in Deception",
       "Summary": "Learn the secret language of a society."
    },
    "Sign Language": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "Learn sign languages."
    },
    "Skill Training": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Intelligence 12",
       "Summary": "Become trained in a skill."
    },
    "Snare Crafting": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Crafting",
       "Summary": "Craft snares."
    },
    "Specialty Crafting": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Crafting",
       "Summary": "Gain bonuses to Craft certain items."
    },
    "Steady Balance": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Acrobatics",
       "Summary": "Maintain your balance in adverse conditions."
    },
    "Stitch Flesh": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Medicine",
       "Summary": "You can use Treat Wounds to restore Hit Points to undead creatures, not just living ones."
    },
    "Streetwise": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Society",
       "Summary": "Use Society to Gather Information and Recall Knowledge."
    },
    "Student of the Canon": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Religion",
       "Summary": "More accurately recognize the tenets of your faith or philosophy."
    },
    "Subtle Theft": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Thievery",
       "Summary": "Your thefts are harder to notice."
    },
    "Survey Wildlife": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Survival",
       "Summary": "Identify nearby creatures through signs and clues."
    },
    "Tame Animal": {
       "Trait": "Exploration, General, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "Trained in Nature",
       "Summary": "Animals born and raised far from humanoid settlements rarely get along with two-legged beings, whom they assume to be dangerous predators."
    },
    "Terrain Expertise": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Survival",
       "Summary": "+1 to Survival checks in certain terrain."
    },
    "Terrain Stalker": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Stealth",
       "Summary": "Sneak in certain terrain without attempting a check."
    },
    "Titan Wrestler": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Athletics",
       "Summary": "Disarm, Grapple, Shove, or Trip larger creatures."
    },
    "Train Animal": {
       "Trait": "Downtime, General, Manipulate, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Nature",
       "Summary": "Teach an animal a trick."
    },
    "Trick Magic Item": {
       "Trait": "General, Manipulate, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Arcana, Trained in Nature, Trained in Occultism, or Trained in Religion",
       "Summary": "Activate a magic item you normally can't activate."
    },
    "Underwater Marauder": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Athletics",
       "Summary": "Fight more effectively underwater."
    },
    "Vicious Critique": {
       "Trait": "General, Skill, Uncommon",
       "Level": 1,
       "Prerequisite": "Trained in Crafting; Trained in Intimidation",
       "Summary": "You have an eye for detail and a mouth for pointing out flaws, which makes it all the easier to convince the merchants and crafters of King's Heart to help you."
    },
    "Virtuosic Performer": {
       "Trait": "General, Skill",
       "Level": 1,
       "Prerequisite": "Trained in Performance",
       "Summary": "+1 with a certain type of performance."
    },
    "Armored Stealth": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Stealth",
       "Summary": "Reduce the Stealth penalty of your armor."
    },
    "Assured Identification": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Arcana, Expert in Nature, Expert in Occultism, or Expert in Religion",
       "Summary": "Avoid misidentifying magic."
    },
    "Aura Sight": {
       "Trait": "Concentrate, Exploration, General, Secret, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Occultism",
       "Summary": "You've learned how to read the natural auras of other living creatures."
    },
    "Automatic Knowledge": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "expert in a skill with the Recall Knowledge action; Assurance in that skill",
       "Summary": "Recall Knowledge as a free action once per round."
    },
    "Automatic Writing": {
       "Trait": "Concentrate, Exploration, General, Manipulate, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Occultism",
       "Summary": "When confronted with the unknown, you can receive knowledge beyond your own experience via written messages delivered by your hand."
    },
    "Backup Disguise": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Deception",
       "Summary": "You have a specific disguise that you keep at the ready, worn underneath your outer garment."
    },
    "Battle Planner": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Warfare Lore",
       "Summary": "Make a battle plan and roll Warfare Lore for initiative."
    },
    "Bonded Animal": {
       "Trait": "Downtime, General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Nature",
       "Summary": "An animal becomes permanently helpful to you."
    },
    "Chromotherapy": {
       "Trait": "General, Healing, Manipulate, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Medicine",
       "Summary": "You firmly believe in the technique of strengthening one's life force, spiritual energies, and bodily fluids through the application of colored light."
    },
    "Confabulator": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Deception",
       "Summary": "Reduce the bonuses against your repeated lies."
    },
    "Connections": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Society; Courtly Graces",
       "Summary": "Leverage your connections for favors and meetings."
    },
    "Continual Recovery": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Medicine",
       "Summary": "Treat Wounds on a patient more often."
    },
    "Cooperative Crafting": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Crafting",
       "Summary": "You've learned to make the most of working with others on your crafting projects, a must when working with the various guilds of Highhelm."
    },
    "Criminal Connections": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Society; Streetwise",
       "Summary": "Leverage your underworld connections for favors from criminals."
    },
    "Discreet Inquiry": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Deception or Expert in Diplomacy",
       "Summary": "Gather Information without revealing your motive."
    },
    "Distracting Performance": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Performance",
       "Summary": "Create a Diversion for an ally."
    },
    "Embed Aeon Stone": {
       "Trait": "Archetype, Downtime, Skill",
       "Level": 2,
       "Prerequisite": "Runelord Dedication; Trained in Crafting",
       "Summary": "You discover the secrets to embedding aeon stones into your flesh."
    },
    "Encouraging Words": {
       "Trait": "Auditory, General, Linguistic, Mental, Skill, Stamina",
       "Level": 2,
       "Prerequisite": "Trained in Diplomacy",
       "Summary": "You give an ally a quick pep talk, helping them recover."
    },
    "Exhort the Faithful": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Religion; follower of a specific religion",
       "Summary": "+2 to Request something of or Coerce members of your own faith."
    },
    "Express Driver": {
       "Trait": "Archetype, Exploration, Skill",
       "Level": 2,
       "Prerequisite": "Trick Driver Dedication",
       "Summary": "You can optimize your vehicle's performance, coaxing extra speed and choosing paths to avoid slowdowns."
    },
    "Eye of the Arclords": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Arcana; Arcane Sense",
       "Summary": "The Arclords of Nex have achieved a unique mastery of magic."
    },
    "Eyes of the City": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Trained in Diplomacy or Trained in Society",
       "Summary": "You can track down targets with the help of locals."
    },
    "Familiar Oddities": {
       "Trait": "Archetype, Skill",
       "Level": 2,
       "Prerequisite": "Curse Maelstrom Dedication; Trained in Occultism or Trained in Curse Lore",
       "Summary": "Perhaps due to the curse within you, curses occasionally perceive you as an extension of themselves and readily reveal themselves to you."
    },
    "Fleeing Diversion": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Deception",
       "Summary": "You are quick to capitalize on your distractions."
    },
    "Fresh Ingredients": {
       "Trait": "Archetype, Skill",
       "Level": 2,
       "Prerequisite": "Herbalist Dedication; Expert in Nature",
       "Summary": "When using Natural Medicine to Treat Wounds, you can spend a batch of herbs to gain the +2 circumstance bonus from having fresh ingredients, even if not in wilderness."
    },
    "Glad-Hand": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Diplomacy",
       "Summary": "Make an Impression on a target you've just met."
    },
    "Godless Healing": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Battle Medicine; can't have a patron deity",
       "Summary": "With limited access to divine healing magic, Rahadoumi often become adept at using ordinary medicine for when dangerous situations arise."
    },
    "Half-Truths": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Deception; Expert in Diplomacy",
       "Summary": "You are able to weave your words in such a way that you never use actual lies, but still mislead people to certain conclusions."
    },
    "Intimidating Prowess": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Strength 16; Expert in Intimidation",
       "Summary": "Gain a bonus to physically Demoralize a target."
    },
    "Juggle": {
       "Trait": "Concentrate, General, Manipulate, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Dexterity 16; Trained in Performance",
       "Summary": "You can Juggle items and still use your hands between tosses."
    },
    "Lasting Coercion": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Intimidation",
       "Summary": "Coerce a target into helping you longer."
    },
    "Lead Climber": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Athletics",
       "Summary": "Make Climbing safer for allies who Follow the Expert."
    },
    "Magical Crafting": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Crafting",
       "Summary": "Craft magic items."
    },
    "Magical Shorthand": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Arcana, Expert in Nature, Expert in Occultism, or Expert in Religion",
       "Summary": "Learn spells quickly and at a reduced cost."
    },
    "Malleable Movement": {
       "Trait": "Archetype, Skill",
       "Level": 2,
       "Prerequisite": "Mind Smith Dedication",
       "Summary": "You shift the shape of your weapon to help you Leap farther and faster."
    },
    "Mortal Healing": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Godless Healing, you follow the Laws of Mortality",
       "Summary": "You grant greater healing when the gods don�t interfere"
    },
    "Nimble Crawl": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Acrobatics",
       "Summary": "Crawl at a faster rate."
    },
    "Powerful Leap": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Athletics",
       "Summary": "Jump farther and higher."
    },
    "Predict Weather": {
       "Trait": "General, Secret, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Trained in Survival",
       "Summary": "By observing often subtle indicators in the environment, you may try to predict the day's weather."
    },
    "Quick Contacts": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Society; Connections or Criminal Connections",
       "Summary": "Spend only 1 day to use Connections or Criminal Connections."
    },
    "Quick Disguise": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Deception",
       "Summary": "Set up a disguise in only half the time."
    },
    "Quiet Allies": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Stealth",
       "Summary": "Roll a single Stealth check when sneaking with allies."
    },
    "Rapid Mantel": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Athletics",
       "Summary": "Pull yourself onto ledges quickly."
    },
    "Robust Recovery": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Medicine",
       "Summary": "Greater benefits from Treat Disease and Treat Poison."
    },
    "Rolling Landing": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Cat Fall",
       "Summary": "You land with quick rolls that help you keep your momentum."
    },
    "Shadow Mark": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Stealth",
       "Summary": "Targets you�re following take a penalty to notice you."
    },
    "Slippery Prey": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Trained in Acrobatics or Trained in Athletics",
       "Summary": "You're able to escape bonds more easily than others."
    },
    "Sow Rumor": {
       "Trait": "General, Secret, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Deception",
       "Summary": "You spread rumors, which may or may not be true, about a specific subject."
    },
    "Spirit Speaker": {
       "Trait": "General, Necromancy, Secret, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Nature",
       "Summary": "You know that when an animal dies, its spirit lingers briefly before moving on."
    },
    "Tattoo Artist": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Trained in Crafting",
       "Summary": "You can craft tattoos, including magical tattoos."
    },
    "Terrifying Resistance": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Intimidation",
       "Summary": "+1 to spell saves from a creature you�ve Demoralized."
    },
    "Triumphant Boast": {
       "Trait": "General, Rare, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Performance",
       "Summary": "You relate a loud and impressive tale of your triumph over a formidable foe."
    },
    "Tweak Appearances": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Crafting",
       "Summary": "You can alter a creature's clothing to improve their social impact."
    },
    "Underground Network": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Society; Streetwise",
       "Summary": "Gather Information without drawing attention and gain a bonus to Recall Knowledge about that subject."
    },
    "Unmistakable Lore": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Lore",
       "Summary": "Recall Knowledge about your Lore more effectively."
    },
    "Ward Medic": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Medicine",
       "Summary": "Treat several patients at once."
    },
    "Wary Disarmament": {
       "Trait": "General, Skill",
       "Level": 2,
       "Prerequisite": "Expert in Thievery",
       "Summary": "+2 to AC or saves against devices or traps you trigger while disarming."
    },
    "Whats That up Your Sleeve?": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Gambling Lore",
       "Summary": "Whether as a dealer or player, you've learned to spot cheaters."
    },
    "Wilderness Spotter": {
       "Trait": "General, Skill, Uncommon",
       "Level": 2,
       "Prerequisite": "Expert in Survival",
       "Summary": "Use Survival for your Initiative when in a specific terrain."
    },
    "Folk Dowsing": {
       "Trait": "General, Skill, Uncommon",
       "Level": 3,
       "Prerequisite": "Trained in Survival",
       "Summary": "You can find what you're looking for using a dowsing rod or pendulum."
    },
    "Know the Beat": {
       "Trait": "Archetype, Skill",
       "Level": 3,
       "Prerequisite": "Zephyr Guard Dedication",
       "Summary": "You have been trained to investigate crimes."
    },
    "We're on the List": {
       "Trait": "Archetype, Skill, Uncommon",
       "Level": 3,
       "Prerequisite": "Alter Ego Dedication or Archaeologist Dedication; Trained in Society",
       "Summary": "Emulating Shensen whenever she arrives at a show, you share your knowledge of the region and drop a few important local names to make a good impression and help your allies do the same."
    },
    "Ambush Tactics": {
       "Trait": "General, Rare, Skill",
       "Level": 4,
       "Prerequisite": "trained in Lore about a specific terrain",
       "Summary": "You've made a study of the best practices for laying ambushes in terrains you've spent time learning about, be it the best way to ambush foes or the best methods of reacting to surprise attacks in those terrains."
    },
    "Blessed Medicine": {
       "Trait": "Archetype, Fortune, Skill",
       "Level": 4,
       "Prerequisite": "Undead Slayer Dedication",
       "Summary": "Your experience battling undead has uniquely prepared you to fight the diseases they inflict on the survivors, and you know that leaving these maladies untreated for long will eventually lead to more undead."
    },
    "Change of Face": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Alter Ego Dedication",
       "Summary": "You know that for the best disguise to work, one requires not only the right skills but also the right look�luckily you can copy both using special magical techniques."
    },
    "Dead Reckoning": {
       "Trait": "Archetype, Concentrate, Skill",
       "Level": 4,
       "Prerequisite": "Pathfinder Agent Dedication; Trained in Survival",
       "Summary": "You've trained yourself to maintain a strong sense of direction at all times, even when you can't use a compass or see the sky above."
    },
    "Diabolic Certitude": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Hellknight Armiger Dedication",
       "Summary": "Your Hellknight training drilled details of Hell�s denizens deep into your mind."
    },
    "Distracting Flattery": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Dandy Dedication; Expert in Deception",
       "Summary": "You know how to maintain a good impression and manage your image, even while keeping uncouth company."
    },
    "Eclipsed Vitality": {
       "Trait": "Archetype, Skill, Uncommon",
       "Level": 4,
       "Prerequisite": "Assassin Dedication or Scout Dedication; Master in Stealth",
       "Summary": "You shroud yourself in ashes that hide the vital essence sought by life-sensing undead."
    },
    "Efficient Explorer": {
       "Trait": "General, Rare, Skill",
       "Level": 4,
       "Prerequisite": "trained in Lore about a specific terrain",
       "Summary": "You are more efficient at exploring uncharted territories."
    },
    "Engine Bay": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Vehicle Mechanic Dedication; Expert in Crafting",
       "Summary": "You are practiced at working in vast garages of vehicles and can work on many machines at a time."
    },
    "Familiar Foe": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Lastwall Sentry Dedication; Expert in Religion or Expert in Undead Lore",
       "Summary": "You regularly face off against undead and can identify many with a glance."
    },
    "Fancy Moves": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Gladiator Dedication; Expert in Performance",
       "Summary": "You show off your fighting style to discourage your foes."
    },
    "Fane's Escape": {
       "Trait": "General, Skill, Uncommon",
       "Level": 4,
       "Prerequisite": "Expert in Stealth",
       "Summary": "A good getaway requires a good distraction."
    },
    "Final Rest": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Lastwall Sentry Dedication",
       "Summary": "As stubborn in death as you are in life, you vow you'll never aid your hated enemies."
    },
    "Gear Gnash": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Trapsmith Dedication; Expert in Crafting",
       "Summary": "Snares you create have complicated inner workings that are quite difficult to disable."
    },
    "Hidden Magic": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Expert in Arcana, Expert in Nature, Expert in Occultism, or Expert in Religion; Vigilante Dedication",
       "Summary": "You've learned to hide the magical auras of your gear."
    },
    "Hideous Ululation": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Oozemorph Dedication; Trained in Performance",
       "Summary": "Your throat has multiple separate chambers that can give your voice an eerie echo."
    },
    "In Plain Sight": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Alter Ego Dedication",
       "Summary": "People often only see what they want to see, a weakness you know how to take full advantage of."
    },
    "Kreighton's Cognitive Crossover": {
       "Trait": "General, Skill, Uncommon",
       "Level": 4,
       "Prerequisite": "",
       "Summary": "Kreighton teaches his students that an agile mind can glean clues leading to the truth, even from the most unlikely of sources."
    },
    "Minion Guise": {
       "Trait": "Archetype, Skill, Social",
       "Level": 4,
       "Prerequisite": "animal companion or familiar; Expert in Deception; Vigilante Dedication",
       "Summary": "When you are in your social identity, you can also grant a social identity to an animal companion, familiar, or other minion."
    },
    "Multilingual Cipher": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Linguist Dedication; Expert in Society",
       "Summary": "You use multiple languages to create and break codes."
    },
    "Named Artillery": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Trained in Crafting",
       "Summary": "It is a tradition among artillerists to name the siege weapon most important to them and closest to their heart�much as a sailor on a ship, the weapon is their livelihood."
    },
    "Orthographic Mastery": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Loremaster Dedication",
       "Summary": "You understand the principles that underlie all written words, allowing you to read nearly any text."
    },
    "Phonetic Training": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Linguist Dedication; Expert in Society",
       "Summary": "You can pronounce and repeat words with near-perfect accuracy even if you don't understand their meaning."
    },
    "Power Slide": {
       "Trait": "Archetype, Move, Reckless, Skill",
       "Level": 4,
       "Prerequisite": "Trick Driver Dedication",
       "Summary": "You throw the vehicle into a barely controlled skid, turning sharply to evade pursuit or bring your weapons to bear."
    },
    "Quick Mount": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Cavalier Dedication; Expert in Nature",
       "Summary": "You and your mount can spring into action at a moment's notice."
    },
    "Reverse Engineering": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Expert in Crafting; Scrounger Dedication",
       "Summary": "You are able to reverse engineer items into formulas more effectively than most."
    },
    "Rope Runner": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Trained in Acrobatics; Trained in Athletics; Pirate Dedication",
       "Summary": "You run and climb across ropes and rigging almost as easily as on the ground."
    },
    "Settlement Scholastics": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Archaeologist Dedication",
       "Summary": "Your studies open up new horizons."
    },
    "Sociable Vow": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Pactbinder Dedication",
       "Summary": "You can leverage your vow in more social interactions."
    },
    "Steel Skin": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Trained in Survival; Sentinel Dedication",
       "Summary": "You wear your armor like a second skin."
    },
    "Sure Foot": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Horizon Walker Dedication; Expert in Acrobatics; Expert in Athletics",
       "Summary": "You know the secrets of moving in your favored terrain."
    },
    "That's Not Natural!": {
       "Trait": "General, Rare, Skill",
       "Level": 4,
       "Prerequisite": "Expert in Survival",
       "Summary": "Your mastery at surviving in the wild has given you a sort of sixth-sense when it comes to noticing creatures that aren't part of the natural order."
    },
    "Thorough Reports": {
       "Trait": "Archetype, Skill",
       "Level": 4,
       "Prerequisite": "Pathfinder Agent Dedication",
       "Summary": "Recalling Knowledge adds creatures to your list, granting you bonuses to Recall in future encounters."
    },
    "Treat Condition": {
       "Trait": "Archetype, Healing, Manipulate, Skill",
       "Level": 4,
       "Prerequisite": "Medic Dedication",
       "Summary": "You treat an adjacent creature in an attempt to reduce the clumsy, enfeebled, or sickened condition."
    },
    "Cutting Flattery": {
       "Trait": "Archetype, Skill, Uncommon",
       "Level": 5,
       "Prerequisite": "Dandy Dedication or Pirate Dedication; Trained in Intimidation",
       "Summary": "Repeated entries in Firebrand bragging and flyting contests have taught you how to twist pretty words into concealed insults."
    },
    "Analyze Idiolect": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Linguist Dedication; Expert in Deception; Expert in Society",
       "Summary": "You break down a specific individual's idiolect, memorizing their speech mannerisms and habits."
    },
    "Craft Facsimile": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Expert in Crafting; Pathfinder Agent Dedication",
       "Summary": "You're renowned for your ability to recover important items and sometimes that requires creating a stand-in."
    },
    "Emerald Boughs Accustomation": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Magaambyan Attendant Dedication; Expert in Society",
       "Summary": "You are comfortable and socially capable in almost any cultural context."
    },
    "Forced Entry": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Expert in Athletics; Pathfinder Agent Dedication",
       "Summary": "You are trained to preserve the archaeological value of your location when entering."
    },
    "Holistic Care": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Trained in Diplomacy; Treat Condition",
       "Summary": "You provide emotional and spiritual care."
    },
    "Megafauna Veterinarian": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Mammoth Lord Dedication; Expert in Nature",
       "Summary": "By heeding the wise advice of elders in your following� and aided by your own experience�you've learned how to provide medical care to the megafauna of the Mammoth Lord followings."
    },
    "Resourceful Ritualist": {
       "Trait": "Archetype, Skill",
       "Level": 6,
       "Prerequisite": "Ritualist Dedication",
       "Summary": "You can cast difficult rituals that might otherwise be just beyond your skill."
    },
    "Say that Again!": {
       "Trait": "General, Rare, Skill",
       "Level": 6,
       "Prerequisite": "Expert in Athletics",
       "Summary": "The world is full of obnoxious weasels who think they can pull one over on you�put them in their place! When an adjacent creature attempts to Lie to you or to Demoralize you and gets a critical failure on the roll, you can use your reaction to make a Shove attempt against that opponent."
    },
    "Uzunjati Storytelling": {
       "Trait": "Archetype, Concentrate, Skill",
       "Level": 6,
       "Prerequisite": "Magaambyan Attendant Dedication; Uzunjati affiliation; master in a Recall Knowledge skill",
       "Summary": "You tell a quick story or begin telling a longer tale."
    },
    "Advanced First Aid": {
       "Trait": "General, Healing, Manipulate, Skill",
       "Level": 7,
       "Prerequisite": "Master in Medicine",
       "Summary": "Use First Aid to reduce frightened and sickened condition values."
    },
    "Aerobatics Mastery": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Acrobatics",
       "Summary": "Improve your ability to Maneuver in Flight."
    },
    "Ashen Veil": {
       "Trait": "Archetype, Manipulate, Skill",
       "Level": 7,
       "Prerequisite": "Knight Reclaimant Dedication; Expert in Religion; Master in Stealth",
       "Summary": "By smearing ash or tainted earth over your skin and armor, you shroud yourself from the dead."
    },
    "Battle Cry": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Intimidation",
       "Summary": "Demoralizes foes when you roll for initiative."
    },
    "Battle Prayer": {
       "Trait": "Divine, General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Religion; you follow a deity",
       "Summary": "Calling out to your deity, you recite scripture to harm a foe"
    },
    "Biographical Eye": {
       "Trait": "General, Secret, Skill",
       "Level": 7,
       "Prerequisite": "Master in Society",
       "Summary": "Intuit details about someone�s profession and residence."
    },
    "Bizarre Magic": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Occultism",
       "Summary": "Your magic becomes more difficult to identify."
    },
    "Bless Tonic": {
       "Trait": "General, Positive, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting; deity who grants heal divine font",
       "Summary": "You channel positive energy into restoratives that ward against harm"
    },
    "Bless Toxin": {
       "Trait": "General, Negative, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting; deity who grants harm divine font",
       "Summary": "You pour negative energy into toxins you create to further debilitate your targets"
    },
    "Chronocognizance": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Time Mage Dedication",
       "Summary": "The flows and ebbs of time are obvious to you, as are the tangles that form when it's distorted."
    },
    "Consult the Spirits": {
       "Trait": "General, Secret, Skill",
       "Level": 7,
       "Prerequisite": "Master in Nature, Master in Occultism, or Master in Religion",
       "Summary": "Learn about your environment from resident spirits."
    },
    "Disturbing Knowledge": {
       "Trait": "Emotion, Fear, General, Mental, Skill",
       "Level": 7,
       "Prerequisite": "Master in Occultism",
       "Summary": "Frighten foes with occult secrets."
    },
    "Doublespeak": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Deception",
       "Summary": "Pass a secret message to allies in your conversation."
    },
    "Efficient Controls": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Vehicle Mechanic Dedication; Master in Crafting",
       "Summary": "By reducing redundant systems and streamlining essential functions, you have made it easier for the vehicle to operate with fewer crew."
    },
    "Entourage": {
       "Trait": "General, Rare, Skill",
       "Level": 7,
       "Prerequisite": "Master in Diplomacy; Hobnobber",
       "Summary": "You have a small group of admirers who tend to follow you around while you�re in civilized settlements."
    },
    "Environmental Grace": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Survival; deity who grants the cold, fire, nature, or travel domain",
       "Summary": "You rapidly adapt to environments through a combination of skill, meditation, and divine grace"
    },
    "Evangelize": {
       "Trait": "Auditory, General, Linguistic, Mental, Skill",
       "Level": 7,
       "Prerequisite": "Master in Diplomacy; you follow a deity or philosophy",
       "Summary": "You point out a detail that incontrovertibly supports your faith, causing a listener�s mind to whirl"
    },
    "Expert Disassembler": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting; Scrounger Dedication",
       "Summary": "You can apply the same techniques you use to reverse engineer objects to disable them."
    },
    "Fabricated Connections": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Dandy Dedication; Master in Deception",
       "Summary": "You can lie about having taken an action so convincingly that you acquire all the tangible benefits of having successfully completed it."
    },
    "Foil Senses": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Stealth",
       "Summary": "Take precautions against special senses."
    },
    "Graceful Leaper": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Acrobat Dedication; Master in Acrobatics",
       "Summary": "Mass and muscle are meaningless when you leap; only grace and balance matter."
    },
    "Grudging Compliment": {
       "Trait": "Archetype, Linguistic, Skill, Uncommon",
       "Level": 7,
       "Prerequisite": "Celebrity Dedication",
       "Summary": "Every Firebrand can recognize the skill of others, but you've turned it into an art you can wield in combat."
    },
    "Impeccable Crafting": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting; Specialty Crafting",
       "Summary": "Craft items more efficiently."
    },
    "Influence Nature": {
       "Trait": "Downtime, General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Nature",
       "Summary": "Influence the behavior of certain animals in the area."
    },
    "Inventor": {
       "Trait": "Downtime, General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting",
       "Summary": "Use Crafting to create item formulas."
    },
    "Kip Up": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Acrobatics",
       "Summary": "Stand up for free without triggering reactions."
    },
    "Master of Apprentice": {
       "Trait": "General, Skill, Uncommon",
       "Level": 7,
       "Prerequisite": "",
       "Summary": "Teaching is a difficult art form, but you've gotten a pretty good handle on it."
    },
    "Morphic Manipulation": {
       "Trait": "Exploration, General, Necromancy, Positive, Primal, Skill, Uncommon",
       "Level": 7,
       "Prerequisite": "Master in Nature",
       "Summary": "You've attuned your natural aura to that of plant life, coaxing it to grow faster than normal."
    },
    "Muscle Mimicry": {
       "Trait": "Archetype, Concentrate, Skill",
       "Level": 7,
       "Prerequisite": "Alter Ego Dedication; Trained in Athletics; Master in Deception",
       "Summary": "Your study of another allows you to mirror their movements subtly, even in the heat of combat."
    },
    "Paragon Battle Medicine": {
       "Trait": "General, Rare, Skill",
       "Level": 7,
       "Prerequisite": "Battle Medicine; Master in Medicine",
       "Summary": "Kassi Aziril taught you her techniques that originated the modern use of Battle Medicine."
    },
    "Party Crasher": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Dandy Dedication; Master in Society",
       "Summary": "You attend all the fashionable society parties, no matter how exclusive they might be."
    },
    "Planar Survival": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Survival",
       "Summary": "Use Survival to Subsist on different planes."
    },
    "Prepare Papers": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Alkenstar Agent Dedication",
       "Summary": "You're practiced at creating forgeries that establish your outlaw credentials or augment your legal authority."
    },
    "Propeller Attachment": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Trapsmith Dedication; Master in Crafting",
       "Summary": "You've mastered attaching clockwork propellers to your daily quick-deploy snares that use gears."
    },
    "Push it": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Trick Driver Dedication; Master in Driving Lore",
       "Summary": "You can push your vehicle's performance beyond the limits envisioned by its makers."
    },
    "Quick Climb": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Athletics",
       "Summary": "Climb swiftly."
    },
    "Quick Recognition": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Arcana, Master in Nature, Master in Occultism, or Master in Religion; Recognize Spell",
       "Summary": "Identify spells as a free action."
    },
    "Quick Setup": {
       "Trait": "General, Rare, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting",
       "Summary": "You have learned to setup simple crafting jobs with ease."
    },
    "Quick Swim": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Athletics",
       "Summary": "Swim quickly."
    },
    "Quick Unlock": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Thievery",
       "Summary": "Pick a Lock with 1 action."
    },
    "Rapid Affixture": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Crafting",
       "Summary": "Af?x a Talisman in less time."
    },
    "Read Shibboleths": {
       "Trait": "Archetype, Linguistic, Skill",
       "Level": 7,
       "Prerequisite": "Linguist Dedication; Master in Society",
       "Summary": "All communication is filled with slight tells and signals."
    },
    "Sacred Defense": {
       "Trait": "Divine, General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Religion; you follow a deity",
       "Summary": "You call upon your deity to grant you their protective blessing"
    },
    "Sanctify Water": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Religion",
       "Summary": "You imbue water with your deity�s blessing"
    },
    "Scholastic Identification": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Archaeologist Dedication; Master in Society",
       "Summary": "You have the knowledge needed to understand ancient texts and cultural artifacts."
    },
    "Shameless Request": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Diplomacy",
       "Summary": "Make Requests of others with lesser consequences."
    },
    "Skeptic's Defense": {
       "Trait": "General, Skill, Uncommon",
       "Level": 7,
       "Prerequisite": "Master in Intimidation",
       "Summary": "You don't believe in any mental twaddle, and you're certainly not afraid of it."
    },
    "Slippery Secrets": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Deception",
       "Summary": "Evade attempts to uncover your true nature."
    },
    "Speech of the Mammoth Lords": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Mammoth Lord Dedication; Master in Diplomacy; Master in Intimidation",
       "Summary": "You've learned the ancient tongue spoken by the creatures of the far north."
    },
    "Subjective Truth": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Master in Deception; Vigilante Dedication",
       "Summary": "Your disparate identities allow you to defeat magic that detects lies."
    },
    "Swift Sneak": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Stealth",
       "Summary": "Move your full Speed while you Sneak."
    },
    "Terrified Retreat": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Intimidation",
       "Summary": "Cause foes you Demoralize to flee."
    },
    "That was a Close One, Huh?": {
       "Trait": "Archetype, Skill",
       "Level": 7,
       "Prerequisite": "Unexpected Sharpshooter Dedication; Master in Deception",
       "Summary": "You laugh innocently about the inexplicable luck of your last shot hitting its mark or how close the attack that just missed you came to taking your head off, causing your foes to second guess whether it's a good idea to oppose you in battle."
    },
    "Tumbling Theft": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Expert in Acrobatics; Expert in Thievery",
       "Summary": "You reach for an opponent's item as you move past a foe."
    },
    "Voice Cold as Death": {
       "Trait": "Archetype, Auditory, Concentrate, Emotion, Fear, Mental, Skill",
       "Level": 7,
       "Prerequisite": "Knight Reclaimant Dedication",
       "Summary": "Channeling the energy of the Crimson Oath into your voice, you pronounce a threat in a tone so icy it freezes the blood."
    },
    "Wall Jump": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Athletics",
       "Summary": "Jump off walls."
    },
    "Water Sprint": {
       "Trait": "General, Skill",
       "Level": 7,
       "Prerequisite": "Master in Athletics",
       "Summary": "Stride across the surface of a body of water."
    },
    "Diverse Recognition": {
       "Trait": "Archetype, Skill",
       "Level": 8,
       "Prerequisite": "Pathfinder Agent Dedication; master in a skill used to Recall Knowledge",
       "Summary": "Your Pathfinder training allows you to quickly size up numerous threats."
    },
    "Ilverani Purist": {
       "Trait": "Archetype, Skill",
       "Level": 8,
       "Prerequisite": "Twilight Speaker Dedication",
       "Summary": "All twilight speakers are trained to resist the alluring customs of younger peoples, but you have made it your mandate to keep the Ilverani way unchanged."
    },
    "Improvised Crafting": {
       "Trait": "Archetype, Exploration, Manipulate, Skill",
       "Level": 8,
       "Prerequisite": "Swordmaster Dedication; Expert in Crafting",
       "Summary": "You've learned to repair your equipment even in challenging circumstances, making use of what you have available."
    },
    "Insistent Command": {
       "Trait": "Archetype, Skill, Uncommon",
       "Level": 8,
       "Prerequisite": "Master in Nature; Animal Trainer Dedication",
       "Summary": "When you roll a success to Command an Animal, you get a critical success."
    },
    "Recognize Threat": {
       "Trait": "Archetype, Skill",
       "Level": 8,
       "Prerequisite": "master in a Recall Knowledge skill; Pathfinder Agent Dedication",
       "Summary": "You quickly assess the threat so you can relay the information to your team."
    },
    "Snap Out of It! (Pathfinder Agent)": {
       "Trait": "Archetype, Skill",
       "Level": 8,
       "Prerequisite": "Master in Medicine; Pathfinder Agent Dedication",
       "Summary": "Pathfinders are trained to help each other be safe and successful, and you know how to jolt your allies back to their senses."
    },
    "Unravel Mysteries": {
       "Trait": "Archetype, Skill",
       "Level": 8,
       "Prerequisite": "master in a Decipher Writing skill; Scrollmaster Dedication",
       "Summary": "You can understand the true meaning of texts quickly, and even when you get lost or hit a dead end, you aren�t discouraged from making further attempts to get to the bottom of things."
    },
    "Emissary of Peace": {
       "Trait": "Archetype, Skill",
       "Level": 10,
       "Prerequisite": "Knight Vigilant",
       "Summary": "Even when bloodshed is inevitable, you would rather see your foes surrender."
    },
    "Masterful Obfuscation": {
       "Trait": "Archetype, Skill",
       "Level": 10,
       "Prerequisite": "master in a skill with the Recall Knowledge action; Scrollmaster Dedication",
       "Summary": "You've mastered the art of deceiving others about your area of study."
    },
    "Uzunjati Recollection": {
       "Trait": "Archetype, Skill",
       "Level": 10,
       "Prerequisite": "Uzunjati Storytelling; master in a Recall Knowledge skill",
       "Summary": "You tell a story spontaneously from nearly forgotten facts, delving into your memory and entertaining your audience in the process."
    },
    "Emergency Medical Assistance": {
       "Trait": "Archetype, Manipulate, Skill",
       "Level": 12,
       "Prerequisite": "Swordmaster Dedication; Master in Medicine",
       "Summary": "You've learned a variety of methods for helping allies who are bleeding, burning, or otherwise suffering persistent damage, from brushing off acid to patting down fires."
    },
    "Recollect Studies": {
       "Trait": "Archetype, Skill",
       "Level": 12,
       "Prerequisite": "Swordmaster Dedication; expert in a skill used to Recall Knowledge",
       "Summary": "You paid attention during your studies and remember the right way to attack various creatures."
    },
    "Rugged Survivalist": {
       "Trait": "Archetype, Skill",
       "Level": 12,
       "Prerequisite": "Swordmaster Dedication; Master in Survival",
       "Summary": "You've studied survival skills with the School of Swords experts and are comfortable spending long periods of time in the wilderness."
    },
    "Too Angry to Die": {
       "Trait": "General, Rare, Skill",
       "Level": 12,
       "Prerequisite": "Master in Intimidation",
       "Summary": "You refuse to yield the battle, even after you've been knocked off your feet and nearly killed."
    },
    "Quick Spring": {
       "Trait": "Archetype, Skill, Uncommon",
       "Level": 13,
       "Prerequisite": "Acrobat Dedication",
       "Summary": "Ishii Bunji is a skilled tumbler, and learning his technique allows you to propel yourself across the battlefield faster than your enemies can react."
    },
    "Cloud Jump": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Athletics",
       "Summary": "Jump impossible distances."
    },
    "Craft Anything": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Crafting",
       "Summary": "Ignore most requirements for crafting items."
    },
    "Divine Guidance": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Religion",
       "Summary": "Find guidance in the writings of your faith."
    },
    "Legendary Codebreaker": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Society",
       "Summary": "Quickly Decipher Writing using Society."
    },
    "Legendary Guide": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Survival",
       "Summary": "Increase your party�s travel speed through wilderness terrain"
    },
    "Legendary Linguist": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Society; Multilingual",
       "Summary": "Create pidgin languages to communicate with anyone."
    },
    "Legendary Medic": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Medicine",
       "Summary": "Remove disease or the blinded, deafened, doomed, or drained condition."
    },
    "Legendary Negotiation": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Diplomacy",
       "Summary": "Quickly parley with foes."
    },
    "Legendary Performer": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Performance; Virtuosic Performer",
       "Summary": "Gain renown for your Performance Virtuosic Performer."
    },
    "Legendary Professional": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Lore",
       "Summary": "Gain renown for your Lore."
    },
    "Legendary Sneak": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Stealth; Swift Sneak",
       "Summary": "Hide and Sneak without cover or being concealed."
    },
    "Legendary Survivalist": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Survival",
       "Summary": "Survive extreme conditions."
    },
    "Legendary Tattoo Artist": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Tattoo Artist",
       "Summary": "Your craftsmanship at decorating flesh is unparalleled."
    },
    "Legendary Thief": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Thievery; Pickpocket",
       "Summary": "Steal what would normally be impossible to steal."
    },
    "Reveal Machinations": {
       "Trait": "General, Rare, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Deception",
       "Summary": "You convince a creature that you played a minor but recurring role in its life."
    },
    "Scare to Death": {
       "Trait": "Emotion, Fear, General, Incapacitation, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Intimidation",
       "Summary": "Scare a target so much, they might die."
    },
    "Unified Theory": {
       "Trait": "General, Skill",
       "Level": 15,
       "Prerequisite": "Legendary in Arcana",
       "Summary": "Use Arcana for checks for all magical traditions."
    }
 }