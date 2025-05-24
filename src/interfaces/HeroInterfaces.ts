//Interface for basic hero
export interface BasicHero {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: Array<string>;
}

export interface MostPlayedHeroesInterface {
    hero_id: number;
    last_played: number;
    games: number;
    win: number;
    with_games: number;
    with_win: number;
    against_games: number;
    against_win: number;
}
