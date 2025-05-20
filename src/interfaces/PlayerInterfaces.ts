export interface PlayerCardInterface {
    id: string;
}

export interface PlayerCardInfoInterface {
    solo_competitive_rank: number;
    competitive_rank: number;
    rank_tier: number | null;
    leaderboard_rank: number;
    profile: {
        account_id: number;
        personaname: string;
        name: string;
        plus: boolean;
        cheese: number;
        steamid: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
        profileurl: string;
        last_login: string;
        loccountrycode: string;
        is_contributor: boolean;
        is_subscriber: boolean;
    };
}

export interface PlayerWinLossInterface {
    win: string;
    lose: string;
}
