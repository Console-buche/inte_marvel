
export type TAvailableHeroes = 'batman' | 'superman' | 'wonderwoman' | 'joker' | 'spiderman' | 'ironman'

export type THeroCard<T extends string> = {
    name: T
    description:string
}

export type THeroes<T extends string> = {[key in T] : THeroCard<key>}