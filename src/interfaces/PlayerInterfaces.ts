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

export interface MatchSummaryInterface {
    match_id: number;
    player_slot: number;
    radiant_win: boolean;
    assists: number;
    average_rank: number;
    cluster: number;
    deaths: number;
    duration: number;
    game_mode: number;
    gold_per_min: number;
    hero_damage: number;
    hero_healing: number;
    hero_id: number;
    hero_variant: number;
    is_roaming: boolean | null;
    kills: number;
    lane: number | null;
    lane_role: number | null;
    last_hits: number;
    leaver_status: number;
    lobby_type: number;
    party_size: number | null;
    start_time: number;
    tower_damage: number;
    version: number | null;
    xp_per_min: number;
}
