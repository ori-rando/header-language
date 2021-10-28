import { ItemVariant } from "../item";

export enum BonusUpgradeVariant {
    rapidHammer = 0,
    rapidSword = 1,
    blazeEfficiency = 2,
    spikeEfficiency = 3,
    shurikenEfficiency = 4,
    sentryEfficiency = 5,
    bowEfficiency = 6,
    regenerationEfficiency = 7,
    flashEfficiency = 8,
    grenadeEfficiency = 9,
    explodingSpike = 45,
    shockSmash = 46,
    staticStar = 47,
    chargeBlaze = 48,
    rapidSentry = 49,
}
export interface BonusUpgrade {
    id: ItemVariant.bonusUpgrade,
    variant: BonusUpgradeVariant,
}
