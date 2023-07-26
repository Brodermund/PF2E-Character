const RogueLevel = (Level) => RogueLevelTable[Level] || "Density";
const RogueLevelTable = {
    "1": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": true,
       "SneakAttack": "1d6",
       "Other": "initial proficiencies, rogue's racket, surprise attack"
    },
    "2": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": true,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "1d6",
       "Other": ""
    },
    "3": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "1d6",
       "Other": "Deny advantage"
    },
    "4": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "1d6",
       "Other": ""
    },
    "5": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": true,
       "AncestryFeat": true,
       "SneakAttack": "2d6",
       "Other": "weapon tricks"
    },
    "6": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "2d6",
       "Other": ""
    },
    "7": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": true,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "2d6",
       "Other": "Evasion, vigilant senses, weapon specialization"
    },
    "8": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "2d6",
       "Other": ""
    },
    "9": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": true,
       "SneakAttack": "2d6",
       "Other": "debilitating strike, great fortitude"
    },
    "10": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": true,
       "AncestryFeat": false,
       "SneakAttack": "2d6",
       "Other": ""
    },
    "11": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": true,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "3d6",
       "Other": "rogue expertise"
    },
    "12": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "3d6",
       "Other": ""
    },
    "13": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": true,
       "SneakAttack": "3d6",
       "Other": "improved evasion, incredible senses, light armor expertise, master tricks"
    },
    "14": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "3d6",
       "Other": ""
    },
    "15": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": true,
       "SkillIncrease": true,
       "Abilityboost": true,
       "AncestryFeat": false,
       "SneakAttack": "3d6",
       "Other": " double debilitation, greater weapon specialization"
    },
    "16": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "3d6",
       "Other": ""
    },
    "17": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": true,
       "SneakAttack": "4d6",
       "Other": "slippery mind"
    },
    "18": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "4d6",
       "Other": ""
    },
    "19": {
       "RogueFeat": false,
       "SkillFeat": true,
       "GeneralFeat": true,
       "SkillIncrease": true,
       "Abilityboost": false,
       "AncestryFeat": false,
       "SneakAttack": "4d6",
       "Other": "light armor mastery, master strike"
    },
    "20": {
       "RogueFeat": true,
       "SkillFeat": true,
       "GeneralFeat": false,
       "SkillIncrease": true,
       "Abilityboost": true,
       "AncestryFeat": false,
       "SneakAttack": "4d6",
       "Other": ""
    }
 }