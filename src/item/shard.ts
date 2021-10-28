import { ItemVariant } from "../item";

export enum ShardVariant {
    overcharge = 1,
    tripleJump = 2,
    wingclip = 3,
    bounty = 4,
    swap = 5,
    magnet = 8,
    splinter = 9,
    reckless = 13,
    quickshot = 14,
    resilience = 18,
    lightHarvest = 19,
    vitality = 22,
    lifeHarvest = 23,
    energyHarvest = 25,
    energy = 26,
    lifePact = 27,
    lastStand = 28,
    secret = 30,
    ultraBash = 32,
    ultraGrapple = 33,
    overflow = 34,
    thorn = 35,
    catalyst = 36,
    turmoil = 38,
    sticky = 39,
    finesse = 40,
    spiritSurge = 41,
    lifeforce = 43,
    deflector = 44,
    fracture = 46,
    arcing = 47,
}
export interface Shard {
    id: ItemVariant.shard,
    variant: ShardVariant,
    remove: boolean,
}
