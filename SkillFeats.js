const SkillFeats = (Feat) => SkillFeatTable[Feat] || "Density";
const SkillFeatTable = {
   "Acrobatic Performer": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Use Acrobatics to Perform.",
      "Prerequisite": "Trained:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Additional Lore": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Become trained in another Lore subcategory.",
      "Prerequisite": "Trained:Lore",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Alchemical Crafting": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Craft alchemical items.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "All of the Animal": {
      "Level": 1,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You know how to make the best and most efficient use of a hunted animal's carcass.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Arcane Sense": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Cast detect magic at will as an arcane innate spell.",
      "Prerequisite": "Trained:Arcana",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Armor Assist": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Don armor more quickly.",
      "Prerequisite": "Trained:Athletics|Trained:Warfare Lore",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Assurance": {
      "Level": 1,
      "Trait": "Fortune, General, Skill",
      "Summary": "Receive a fixed result on a skill check.",
      "Prerequisite": "",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Bargain Hunter": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Earn Income by searching for deals.",
      "Prerequisite": "Trained:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Battle Medicine": {
      "Level": 1,
      "Trait": "General, Healing, Manipulate, Skill",
      "Summary": "Heal yourself or an ally in battle.",
      "Prerequisite": "Trained:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Bon Mot": {
      "Level": 1,
      "Trait": "Auditory, Concentrate, Emotion, General, Linguistic, Mental, Skill",
      "Summary": "Distract a foe with a witty quip.",
      "Prerequisite": "Trained:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Cat Fall": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Treat falls as shorter than they are.",
      "Prerequisite": "Trained:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Charlatan": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "You�ve learned to mimic the abilities of spellcasters by studying their flourishes and words",
      "Prerequisite": "Trained:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Charming Liar": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Improve a target's attitude with your lies.",
      "Prerequisite": "Trained:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Combat Climber": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Fight more effectively as you Climb.",
      "Prerequisite": "Trained:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Concealing Legerdemain": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Conceal an Object using Thievery instead of Stealth.",
      "Prerequisite": "Trained:Thievery",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Contract Negotiator": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Your experience with bargaining and deciding terms as part of Highhelm's guilds helps you make deals in other situations.",
      "Prerequisite": "Trained:Legal Lore",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Courtly Graces": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Use Society to get along in noble society.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Crafter's Appraisal": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Use Crafting to identify magic items.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Crystal Healing": {
      "Level": 1,
      "Trait": "General, Healing, Manipulate, Skill, Uncommon",
      "Summary": "You know how to stimulate a body's natural healing abilities through the application of resonant crystals.",
      "Prerequisite": "Trained:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Deceptive Worship": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Pass yourself off as a member of a religion.",
      "Prerequisite": "Trained:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Experienced Professional": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Prevent critical failures when Earning Income.",
      "Prerequisite": "Trained:Lore",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Experienced Smuggler": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Conceal items from observers more effectively.",
      "Prerequisite": "Trained:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Experienced Tracker": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Track at your full Speed at a �5 penalty.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Express Rider": {
      "Level": 1,
      "Trait": "Exploration, General, Move, Skill",
      "Summary": "Increase your mount�s travel speed.",
      "Prerequisite": "Trained:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Eye for Numbers": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "+2 to Decipher Writing about math and count items quickly.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Fascinating Performance": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Perform to fascinate observers.",
      "Prerequisite": "Trained:Performance",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Forager": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Forage for supplies to provide for multiple creatures.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Forensic Acumen": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Rapidly examine a body and Recall Knowledge about it.",
      "Prerequisite": "Trained:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Glean Contents": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Decipher Writing even when you can�t see the document well.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Group Coercion": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Coerce multiple targets simultaneously.",
      "Prerequisite": "Trained:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Group Impression": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Make an Impression on multiple targets at once.",
      "Prerequisite": "Trained:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Hefty Hauler": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Increase your Bulk limits by 2.",
      "Prerequisite": "Trained:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Hobnobber": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Gather Information rapidly.",
      "Prerequisite": "Trained:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Impressive Performance": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Make an Impression with Performance.",
      "Prerequisite": "Trained:Performance",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Improvise Tool": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Craft basic tools without a basic crafter�s book.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Inoculation": {
      "Level": 1,
      "Trait": "General, Healing, Skill",
      "Summary": "Grant patients +2 to saves against getting a disease again.",
      "Prerequisite": "Trained:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Intimidating Glare": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Demoralize a creature without speaking.",
      "Prerequisite": "Trained:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Lengthy Diversion": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Remain hidden after you Create a Diversion.",
      "Prerequisite": "Trained:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Lie to Me": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Use Deception to detect lies.",
      "Prerequisite": "Trained:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Medical Researcher": {
      "Level": 1,
      "Trait": "General, Rare, Skill",
      "Summary": "Kassi has taught you not only how to apply medicines with your medical skills but how to craft them as well.",
      "Prerequisite": "Trained:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Multilingual": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Learn two new languages.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Natural Medicine": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Use Nature to Treat Wounds.",
      "Prerequisite": "Trained:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "No Cause for Alarm": {
      "Level": 1,
      "Trait": "Auditory, Concentrate, Emotion, General, Linguistic, Mental, Skill",
      "Summary": "Reduce creatures� frightened condition values.",
      "Prerequisite": "Trained:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Oddity Identification": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "+2 to Occultism checks to Identify Magic with certain traits.",
      "Prerequisite": "Trained:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Pickpocket": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Steal or Palm an Object more effectively.",
      "Prerequisite": "Trained:Thievery",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Pilgrim's Token": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "A religious token lets you act ?rst on a tie for initiative.",
      "Prerequisite": "Trained:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Coercion": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Coerce a creature quickly.",
      "Prerequisite": "Trained:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Identification": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Identify Magic in 1 minute or less.",
      "Prerequisite": "Trained:Arcana|Trained:Nature|Trained:Occultism|Trained:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Jump": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "High Jump or Long Jump as a single action.",
      "Prerequisite": "Trained:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Repair": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Repair items quickly.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Squeeze": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Move swiftly as you Squeeze.",
      "Prerequisite": "Trained:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Read Lips": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Read the lips of people you can see.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Read Psychometric Resonance": {
      "Level": 1,
      "Trait": "Concentrate, Divination, Emotion, Exploration, General, Mental, Occult, Skill, Uncommon",
      "Summary": "With a touch, you can read the psychic impressions left on objects by their previous owners.",
      "Prerequisite": "Trained:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Recognize Spell": {
      "Level": 1,
      "Trait": "General, Secret, Skill",
      "Summary": "Identify a spell as a reaction as it's being cast.",
      "Prerequisite": "Trained:Arcana|Trained:Nature|Trained:Occultism|Trained:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Reveal True Name": {
      "Level": 1,
      "Trait": "Auditory, Concentrate, Emotion, General, Mental, Rare, Skill, True Name",
      "Summary": "You attempt to get a creature to do as you wish by threatening them with your knowledge of their true name.",
      "Prerequisite": "Trained:Intimidation&Trained:Arcana|Trained:Nature|Trained:Occult|Trained:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Risky Surgery": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Deal damage to a patient to gain +2 to Treat Wounds.",
      "Prerequisite": "Trained:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Root Magic": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Create a token that grants a bonus against a spell or haunt.",
      "Prerequisite": "Trained:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Schooled in Secrets": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Gather Information about secret societies and mystery cults.",
      "Prerequisite": "Trained:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Seasoned": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "+1 to Craft food and drink, including potions.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Secret Speech": {
      "Level": 1,
      "Trait": "General, Skill, Uncommon",
      "Summary": "Learn the secret language of a society.",
      "Prerequisite": "Trained:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Sign Language": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Learn sign languages.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Skill Training": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Become trained in a skill.",
      "Prerequisite": "",
      "FeatPrereq": "",
      "AbilityPrereq": "Intelligence 12"
   },
   "Snare Crafting": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Craft snares.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Specialty Crafting": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Gain bonuses to Craft certain items.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Steady Balance": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Maintain your balance in adverse conditions.",
      "Prerequisite": "Trained:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Stitch Flesh": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "You can use Treat Wounds to restore Hit Points to undead creatures, not just living ones.",
      "Prerequisite": "Trained:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Streetwise": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Use Society to Gather Information and Recall Knowledge.",
      "Prerequisite": "Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Student of the Canon": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "More accurately recognize the tenets of your faith or philosophy.",
      "Prerequisite": "Trained:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Subtle Theft": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Your thefts are harder to notice.",
      "Prerequisite": "Trained:Thievery",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Survey Wildlife": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Identify nearby creatures through signs and clues.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Tame Animal": {
      "Level": 1,
      "Trait": "Exploration, General, Skill, Uncommon",
      "Summary": "Animals born and raised far from humanoid settlements rarely get along with two-legged beings, whom they assume to be dangerous predators.",
      "Prerequisite": "Trained:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Terrain Expertise": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "+1 to Survival checks in certain terrain.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Terrain Stalker": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Sneak in certain terrain without attempting a check.",
      "Prerequisite": "Trained:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Titan Wrestler": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Disarm, Grapple, Shove, or Trip larger creatures.",
      "Prerequisite": "Trained:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Train Animal": {
      "Level": 1,
      "Trait": "Downtime, General, Manipulate, Skill",
      "Summary": "Teach an animal a trick.",
      "Prerequisite": "Trained:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Trick Magic Item": {
      "Level": 1,
      "Trait": "General, Manipulate, Skill",
      "Summary": "Activate a magic item you normally can't activate.",
      "Prerequisite": "Trained:Arcana|Trained:Nature|Trained:Occultism|Trained:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Underwater Marauder": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "Fight more effectively underwater.",
      "Prerequisite": "Trained:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Vicious Critique": {
      "Level": 1,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You have an eye for detail and a mouth for pointing out flaws, which makes it all the easier to convince the merchants and crafters of King's Heart to help you.",
      "Prerequisite": "Trained:Crafting|Trained:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Virtuosic Performer": {
      "Level": 1,
      "Trait": "General, Skill",
      "Summary": "+1 with a certain type of performance.",
      "Prerequisite": "Trained:Performance",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Armored Stealth": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Reduce the Stealth penalty of your armor.",
      "Prerequisite": "Expert:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Assured Identification": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Avoid misidentifying magic.",
      "Prerequisite": "Expert:Arcana|Expert:Nature|Expert:Occultism|Expert:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Aura Sight": {
      "Level": 2,
      "Trait": "Concentrate, Exploration, General, Secret, Skill, Uncommon",
      "Summary": "You've learned how to read the natural auras of other living creatures.",
      "Prerequisite": "Expert:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Automatic Knowledge": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Recall Knowledge as a free action once per round.",
      "Prerequisite": "",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Automatic Writing": {
      "Level": 2,
      "Trait": "Concentrate, Exploration, General, Manipulate, Skill, Uncommon",
      "Summary": "When confronted with the unknown, you can receive knowledge beyond your own experience via written messages delivered by your hand.",
      "Prerequisite": "Expert:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Backup Disguise": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You have a specific disguise that you keep at the ready, worn underneath your outer garment.",
      "Prerequisite": "Expert:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Bonded Animal": {
      "Level": 2,
      "Trait": "Downtime, General, Skill",
      "Summary": "An animal becomes permanently helpful to you.",
      "Prerequisite": "Expert:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Chromotherapy": {
      "Level": 2,
      "Trait": "General, Healing, Manipulate, Skill, Uncommon",
      "Summary": "You firmly believe in the technique of strengthening one's life force, spiritual energies, and bodily fluids through the application of colored light.",
      "Prerequisite": "Expert:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Confabulator": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Reduce the bonuses against your repeated lies.",
      "Prerequisite": "Expert:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Connections": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "Leverage your connections for favors and meetings.",
      "Prerequisite": "Expert:Society",
      "FeatPrereq": " Courtly Graces",
      "AbilityPrereq": ""
   },
   "Continual Recovery": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Treat Wounds on a patient more often.",
      "Prerequisite": "Expert:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Cooperative Crafting": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You've learned to make the most of working with others on your crafting projects, a must when working with the various guilds of Highhelm.",
      "Prerequisite": "Expert:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Criminal Connections": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "Leverage your underworld connections for favors from criminals.",
      "Prerequisite": "Expert:Society ",
      "FeatPrereq": "Streetwise",
      "AbilityPrereq": ""
   },
   "Discreet Inquiry": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Gather Information without revealing your motive.",
      "Prerequisite": "Expert:Deception|Expert:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Distracting Performance": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Create a Diversion for an ally.",
      "Prerequisite": "Expert:Performance",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Encouraging Words": {
      "Level": 2,
      "Trait": "Auditory, General, Linguistic, Mental, Skill, Stamina",
      "Summary": "You give an ally a quick pep talk, helping them recover.",
      "Prerequisite": "Trained:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Exhort the Faithful": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "+2 to Request something of or Coerce members of your own faith.",
      "Prerequisite": "Expert:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Eye of the Arclords": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "The Arclords of Nex have achieved a unique mastery of magic.",
      "Prerequisite": "Expert:Arcana",
      "FeatPrereq": " Arcane Sense",
      "AbilityPrereq": ""
   },
   "Eyes of the City": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You can track down targets with the help of locals.",
      "Prerequisite": "Trained:Diplomacy|Trained:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Fleeing Diversion": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You are quick to capitalize on your distractions.",
      "Prerequisite": "Expert:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Glad-Hand": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Make an Impression on a target you've just met.",
      "Prerequisite": "Expert:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Godless Healing": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "With limited access to divine healing magic, Rahadoumi often become adept at using ordinary medicine for when dangerous situations arise.",
      "Prerequisite": "",
      "FeatPrereq": "Battle Medicine",
      "AbilityPrereq": ""
   },
   "Half-Truths": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You are able to weave your words in such a way that you never use actual lies, but still mislead people to certain conclusions.",
      "Prerequisite": "Expert:Deception|Expert:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Intimidating Prowess": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Gain a bonus to physically Demoralize a target.",
      "Prerequisite": "Expert:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": "Strength 16"
   },
   "Juggle": {
      "Level": 2,
      "Trait": "Concentrate, General, Manipulate, Skill, Uncommon",
      "Summary": "You can Juggle items and still use your hands between tosses.",
      "Prerequisite": "Trained:Performance",
      "FeatPrereq": "",
      "AbilityPrereq": "Dexterity 16 "
   },
   "Lasting Coercion": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Coerce a target into helping you longer.",
      "Prerequisite": "Expert:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Lead Climber": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Make Climbing safer for allies who Follow the Expert.",
      "Prerequisite": "Expert:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Magical Crafting": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Craft magic items.",
      "Prerequisite": "Expert:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Magical Shorthand": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Learn spells quickly and at a reduced cost.",
      "Prerequisite": "Expert:Arcana|Expert:Nature|Expert:Occultism|Expert:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Mortal Healing": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You grant greater healing when the gods don�t interfere",
      "Prerequisite": "",
      "FeatPrereq": "Godless Healing",
      "AbilityPrereq": ""
   },
   "Nimble Crawl": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Crawl at a faster rate.",
      "Prerequisite": "Expert:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Powerful Leap": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Jump farther and higher.",
      "Prerequisite": "Expert:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Predict Weather": {
      "Level": 2,
      "Trait": "General, Secret, Skill, Uncommon",
      "Summary": "By observing often subtle indicators in the environment, you may try to predict the day's weather.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Contacts": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Spend only 1 day to use Connections or Criminal Connections.",
      "Prerequisite": "Expert:Society",
      "FeatPrereq": " Connections|Criminal Connections",
      "AbilityPrereq": ""
   },
   "Quick Disguise": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Set up a disguise in only half the time.",
      "Prerequisite": "Expert:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quiet Allies": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Roll a single Stealth check when sneaking with allies.",
      "Prerequisite": "Expert:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Rapid Mantel": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Pull yourself onto ledges quickly.",
      "Prerequisite": "Expert:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Robust Recovery": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Greater benefits from Treat Disease and Treat Poison.",
      "Prerequisite": "Expert:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Rolling Landing": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You land with quick rolls that help you keep your momentum.",
      "Prerequisite": "",
      "FeatPrereq": "Cat Fall",
      "AbilityPrereq": ""
   },
   "Shadow Mark": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Targets you�re following take a penalty to notice you.",
      "Prerequisite": "Expert:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Slippery Prey": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You're able to escape bonds more easily than others.",
      "Prerequisite": "Trained:Acrobatics|Trained:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Sow Rumor": {
      "Level": 2,
      "Trait": "General, Secret, Skill, Uncommon",
      "Summary": "You spread rumors, which may or may not be true, about a specific subject.",
      "Prerequisite": "Expert:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Spirit Speaker": {
      "Level": 2,
      "Trait": "General, Necromancy, Secret, Skill, Uncommon",
      "Summary": "You know that when an animal dies, its spirit lingers briefly before moving on.",
      "Prerequisite": "Expert:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Tattoo Artist": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "You can craft tattoos, including magical tattoos.",
      "Prerequisite": "Trained:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Terrifying Resistance": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "+1 to spell saves from a creature you�ve Demoralized.",
      "Prerequisite": "Expert:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Triumphant Boast": {
      "Level": 2,
      "Trait": "General, Rare, Skill",
      "Summary": "You relate a loud and impressive tale of your triumph over a formidable foe.",
      "Prerequisite": "Expert:Performance",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Tweak Appearances": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You can alter a creature's clothing to improve their social impact.",
      "Prerequisite": "Expert:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Underground Network": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "Gather Information without drawing attention and gain a bonus to Recall Knowledge about that subject.",
      "Prerequisite": "Expert:Society ",
      "FeatPrereq": "Streetwise",
      "AbilityPrereq": ""
   },
   "Unmistakable Lore": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Recall Knowledge about your Lore more effectively.",
      "Prerequisite": "Expert:Lore",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Ward Medic": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "Treat several patients at once.",
      "Prerequisite": "Expert:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Wary Disarmament": {
      "Level": 2,
      "Trait": "General, Skill",
      "Summary": "+2 to AC or saves against devices or traps you trigger while disarming.",
      "Prerequisite": "Expert:Thievery",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Wilderness Spotter": {
      "Level": 2,
      "Trait": "General, Skill, Uncommon",
      "Summary": "Use Survival for your Initiative when in a specific terrain.",
      "Prerequisite": "Expert:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Folk Dowsing": {
      "Level": 3,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You can find what you're looking for using a dowsing rod or pendulum.",
      "Prerequisite": "Trained:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Ambush Tactics": {
      "Level": 4,
      "Trait": "General, Rare, Skill",
      "Summary": "You've made a study of the best practices for laying ambushes in terrains you've spent time learning about, be it the best way to ambush foes or the best methods of reacting to surprise attacks in those terrains.",
      "Prerequisite": "",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Fane's Escape": {
      "Level": 4,
      "Trait": "General, Skill, Uncommon",
      "Summary": "A good getaway requires a good distraction.",
      "Prerequisite": "Expert:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "That's Not Natural!": {
      "Level": 4,
      "Trait": "General, Rare, Skill",
      "Summary": "Your mastery at surviving in the wild has given you a sort of sixth-sense when it comes to noticing creatures that aren't part of the natural order.",
      "Prerequisite": "Expert:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Say that Again!": {
      "Level": 6,
      "Trait": "General, Rare, Skill",
      "Summary": "The world is full of obnoxious weasels who think they can pull one over on you�put them in their place! When an adjacent creature attempts to Lie to you or to Demoralize you and gets a critical failure on the roll, you can use your reaction to make a Shove attempt against that opponent.",
      "Prerequisite": "Expert:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Advanced First Aid": {
      "Level": 7,
      "Trait": "General, Healing, Manipulate, Skill",
      "Summary": "Use First Aid to reduce frightened and sickened condition values.",
      "Prerequisite": "Master:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Aerobatics Mastery": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Improve your ability to Maneuver in Flight.",
      "Prerequisite": "Master:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Battle Cry": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Demoralizes foes when you roll for initiative.",
      "Prerequisite": "Master:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Battle Prayer": {
      "Level": 7,
      "Trait": "Divine, General, Skill",
      "Summary": "Calling out to your deity, you recite scripture to harm a foe",
      "Prerequisite": "Master:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Biographical Eye": {
      "Level": 7,
      "Trait": "General, Secret, Skill",
      "Summary": "Intuit details about someone�s profession and residence.",
      "Prerequisite": "Master:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Bizarre Magic": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Your magic becomes more difficult to identify.",
      "Prerequisite": "Master:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Consult the Spirits": {
      "Level": 7,
      "Trait": "General, Secret, Skill",
      "Summary": "Learn about your environment from resident spirits.",
      "Prerequisite": "Master:Nature|Master:Occultism|Master:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Disturbing Knowledge": {
      "Level": 7,
      "Trait": "Emotion, Fear, General, Mental, Skill",
      "Summary": "Frighten foes with occult secrets.",
      "Prerequisite": "Master:Occultism",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Doublespeak": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Pass a secret message to allies in your conversation.",
      "Prerequisite": "Master:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Entourage": {
      "Level": 7,
      "Trait": "General, Rare, Skill",
      "Summary": "You have a small group of admirers who tend to follow you around while you�re in civilized settlements.",
      "Prerequisite": "Master:Diplomacy Hobnobber",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Foil Senses": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Take precautions against special senses.",
      "Prerequisite": "Master:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Impeccable Crafting": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Craft items more efficiently.",
      "Prerequisite": "Master:Crafting",
      "FeatPrereq": " Specialty Crafting",
      "AbilityPrereq": ""
   },
   "Influence Nature": {
      "Level": 7,
      "Trait": "Downtime, General, Skill",
      "Summary": "Influence the behavior of certain animals in the area.",
      "Prerequisite": "Master:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Inventor": {
      "Level": 7,
      "Trait": "Downtime, General, Skill",
      "Summary": "Use Crafting to create item formulas.",
      "Prerequisite": "Master:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Kip Up": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Stand up for free without triggering reactions.",
      "Prerequisite": "Master:Acrobatics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Master of Apprentice": {
      "Level": 7,
      "Trait": "General, Skill, Uncommon",
      "Summary": "Teaching is a difficult art form, but you've gotten a pretty good handle on it.",
      "Prerequisite": "",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Morphic Manipulation": {
      "Level": 7,
      "Trait": "Exploration, General, Necromancy, Positive, Primal, Skill, Uncommon",
      "Summary": "You've attuned your natural aura to that of plant life, coaxing it to grow faster than normal.",
      "Prerequisite": "Master:Nature",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Paragon Battle Medicine": {
      "Level": 7,
      "Trait": "General, Rare, Skill",
      "Summary": "Kassi Aziril taught you her techniques that originated the modern use of Battle Medicine.",
      "Prerequisite": "Master:Medicine",
      "FeatPrereq": "Battle Medicine ",
      "AbilityPrereq": ""
   },
   "Planar Survival": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Use Survival to Subsist on different planes.",
      "Prerequisite": "Master:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Climb": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Climb swiftly.",
      "Prerequisite": "Master:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Recognition": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Identify spells as a free action.",
      "Prerequisite": "Master:Arcana|Master:Nature|Master:Occultism|Master:Religion",
      "FeatPrereq": " Recognize Spell",
      "AbilityPrereq": ""
   },
   "Quick Setup": {
      "Level": 7,
      "Trait": "General, Rare, Skill",
      "Summary": "You have learned to setup simple crafting jobs with ease.",
      "Prerequisite": "Master:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Swim": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Swim quickly.",
      "Prerequisite": "Master:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Quick Unlock": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Pick a Lock with 1 action.",
      "Prerequisite": "Master:Thievery",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Rapid Affixture": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Af?x a Talisman in less time.",
      "Prerequisite": "Master:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Sacred Defense": {
      "Level": 7,
      "Trait": "Divine, General, Skill",
      "Summary": "You call upon your deity to grant you their protective blessing",
      "Prerequisite": "Master:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Sanctify Water": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "You imbue water with your deity�s blessing",
      "Prerequisite": "Master:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Shameless Request": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Make Requests of others with lesser consequences.",
      "Prerequisite": "Master:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Skeptic's Defense": {
      "Level": 7,
      "Trait": "General, Skill, Uncommon",
      "Summary": "You don't believe in any mental twaddle, and you're certainly not afraid of it.",
      "Prerequisite": "Master:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Slippery Secrets": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Evade attempts to uncover your true nature.",
      "Prerequisite": "Master:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Swift Sneak": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Move your full Speed while you Sneak.",
      "Prerequisite": "Master:Stealth",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Terrified Retreat": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Cause foes you Demoralize to flee.",
      "Prerequisite": "Master:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Tumbling Theft": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "You reach for an opponent's item as you move past a foe.",
      "Prerequisite": "Expert:Acrobatics&Expert:Thievery",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Wall Jump": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Jump off walls.",
      "Prerequisite": "Master:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Water Sprint": {
      "Level": 7,
      "Trait": "General, Skill",
      "Summary": "Stride across the surface of a body of water.",
      "Prerequisite": "Master:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Too Angry to Die": {
      "Level": 12,
      "Trait": "General, Rare, Skill",
      "Summary": "You refuse to yield the battle, even after you've been knocked off your feet and nearly killed.",
      "Prerequisite": "Master:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Cloud Jump": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Jump impossible distances.",
      "Prerequisite": "Legendary:Athletics",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Craft Anything": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Ignore most requirements for crafting items.",
      "Prerequisite": "Legendary:Crafting",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Divine Guidance": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Find guidance in the writings of your faith.",
      "Prerequisite": "Legendary:Religion",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Codebreaker": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Quickly Decipher Writing using Society.",
      "Prerequisite": "Legendary:Society",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Guide": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Increase your party�s travel speed through wilderness terrain",
      "Prerequisite": "Legendary:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Linguist": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Create pidgin languages to communicate with anyone.",
      "Prerequisite": "Legendary:Society",
      "FeatPrereq": " Multilingual",
      "AbilityPrereq": ""
   },
   "Legendary Medic": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Remove disease or the blinded, deafened, doomed, or drained condition.",
      "Prerequisite": "Legendary:Medicine",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Negotiation": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Quickly parley with foes.",
      "Prerequisite": "Legendary:Diplomacy",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Performer": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Gain renown for your Performance Virtuosic Performer.",
      "Prerequisite": "Legendary:Performance ",
      "FeatPrereq": "Virtuosic Performer",
      "AbilityPrereq": ""
   },
   "Legendary Professional": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Gain renown for your Lore.",
      "Prerequisite": "Legendary:Lore",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Sneak": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Hide and Sneak without cover or being concealed.",
      "Prerequisite": "Legendary:Stealth",
      "FeatPrereq": " Swift Sneak",
      "AbilityPrereq": ""
   },
   "Legendary Survivalist": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Survive extreme conditions.",
      "Prerequisite": "Legendary:Survival",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Legendary Tattoo Artist": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Your craftsmanship at decorating flesh is unparalleled.",
      "Prerequisite": "",
      "FeatPrereq": "Tattoo Artist",
      "AbilityPrereq": ""
   },
   "Legendary Thief": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Steal what would normally be impossible to steal.",
      "Prerequisite": "Legendary:Thievery",
      "FeatPrereq": " Pickpocket",
      "AbilityPrereq": ""
   },
   "Reveal Machinations": {
      "Level": 15,
      "Trait": "General, Rare, Skill",
      "Summary": "You convince a creature that you played a minor but recurring role in its life.",
      "Prerequisite": "Legendary:Deception",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Scare to Death": {
      "Level": 15,
      "Trait": "Emotion, Fear, General, Incapacitation, Skill",
      "Summary": "Scare a target so much, they might die.",
      "Prerequisite": "Legendary:Intimidation",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   },
   "Unified Theory": {
      "Level": 15,
      "Trait": "General, Skill",
      "Summary": "Use Arcana for checks for all magical traditions.",
      "Prerequisite": "Legendary:Arcana",
      "FeatPrereq": "",
      "AbilityPrereq": ""
   }
}