export interface MatchPlayerInterface {
    match_id: number;
    player_slot: number;
    ability_upgrades_arr: number[];
    ability_uses: Record<string, number>;
    ability_targets: Record<string, Record<string, number>>;
    damage_targets: Record<string, Record<string, number>>;
    account_id: number;
    actions: Record<string, number>;
    additional_units: Record<string, any>[];
    assists: number;
    backpack_0: number;
    backpack_1: number;
    backpack_2: number;
    buyback_log: {
        time: number;
        slot: number;
        player_slot: number;
    }[];
    camps_stacked: number;
    connection_log: {
        time: number;
        event: string;
        player_slot: number;
    }[];
    creeps_stacked: number;
    damage: Record<string, number>;
    damage_inflictor: Record<string, number>;
    damage_inflictor_received: Record<string, number>;
    damage_taken: Record<string, number>;
    deaths: number;
    denies: number;
    dn_t: number[];
    gold: number;
    gold_per_min: number;
    gold_reasons: Record<string, number>;
    gold_spent: number;
    gold_t: number[];
    hero_damage: number;
    hero_healing: number;
    hero_hits: Record<string, number>;
    hero_id: number;
    item_0: number;
    item_1: number;
    item_2: number;
    item_3: number;
    item_4: number;
    item_5: number;
    item_uses: Record<string, number>;
    kill_streaks: Record<string, number>;
    killed: Record<string, number>;
    killed_by: Record<string, number>;
    kills: number;
    kills_log: {
        time: number;
        key: string;
    }[];
    lane_pos: Record<string, Record<string, number>>;
    last_hits: number;
    leaver_status: number;
    level: number;
    lh_t: number[];
    life_state: Record<string, number>;
    max_hero_hit: Record<string, any>;
    multi_kills: Record<string, number>;
    obs: Record<string, any>;
    obs_left_log: Record<string, any>[];
    obs_log: Record<string, any>[];
    obs_placed: number;
    party_id: number;
    permanent_buffs: Record<string, any>[];
    hero_variant: number;
    pings: number;
    purchase: Record<string, number>;
    purchase_log: {
        time: number;
        key: string;
        charges: number;
    }[];
    rune_pickups: number;
    runes: Record<string, number>;
    runes_log: {
        time: number;
        key: number;
    }[];
    sen: Record<string, any>;
    sen_left_log: Record<string, any>[];
    sen_log: Record<string, any>[];
    sen_placed: number;
    stuns: number;
    times: number[];
    tower_damage: number;
    xp_per_min: number;
    xp_reasons: Record<string, number>;
    xp_t: number[];
    personaname: string;
    name: string;
    last_login: string;
    radiant_win: boolean;
    start_time: number;
    duration: number;
    cluster: number;
    lobby_type: number;
    game_mode: number;
    patch: number;
    region: number;
    isRadiant: boolean;
    win: number;
    lose: number;
    total_gold: number;
    total_xp: number;
    kills_per_min: number;
    kda: number;
    abandons: number;
    neutral_kills: number;
    tower_kills: number;
    courier_kills: number;
    lane_kills: number;
    hero_kills: number;
    observer_kills: number;
    sentry_kills: number;
    roshan_kills: number;
    necronomicon_kills: number;
    ancient_kills: number;
    buyback_count: number;
    observer_uses: number;
    sentry_uses: number;
    lane_efficiency: number;
    lane_efficiency_pct: number;
    lane: number;
    lane_role: number;
    is_roaming: boolean;
    purchase_time: Record<string, number>;
    first_purchase_time: Record<string, number>;
    item_win: Record<string, number>;
    item_usage: Record<string, number>;
    purchase_tpscroll: number;
    actions_per_min: number;
    life_state_dead: number;
    rank_tier: number;
    cosmetics: {
        item_id: number;
        name: string;
        prefab: string;
        creation_date: string;
        image_inventory: string;
        image_path: string;
        item_description: string;
        item_name: string;
        item_rarity: string;
        item_type_name: string;
        used_by_heroes: string;
    }[];
    benchmarks: Record<string, any>;
    neutral_tokens_log: {
        time: number;
        key: string;
    }[];
    neutral_item_history: {
        time: number;
        item_neutral: string;
        item_neutral_enhancement: string;
    }[];
}

export interface MatchDetailsInterface {
    match_id: number;
    barracks_status_dire: number;
    barracks_status_radiant: number;
    chat: {
        time: number;
        unit: string;
        key: string;
        slot: number;
        player_slot: number;
    }[];
    cluster: number;
    cosmetics: Record<string, number>;
    dire_score: number;
    draft_timings: {
        order: number;
        pick: boolean;
        active_team: number;
        hero_id: number;
        player_slot: number;
        extra_time: number;
        total_time_taken: number;
    }[];
    duration: number;
    engine: number;
    first_blood_time: number;
    game_mode: number;
    human_players: number;
    leagueid: number;
    lobby_type: number;
    match_seq_num: number;
    negative_votes: number;
    objectives: Record<string, any>[];
    picks_bans: {
        is_pick: boolean;
        hero_id: number;
        team: number;
        order: number;
    }[];
    positive_votes: number;
    radiant_gold_adv: number[];
    radiant_score: number;
    radiant_win: boolean;
    radiant_xp_adv: number[];
    start_time: number;
    teamfights: Record<string, any>[];
    tower_status_dire: number;
    tower_status_radiant: number;
    version: number;
    replay_salt: number;
    series_id: number;
    series_type: number;
    radiant_team: Record<string, any>;
    dire_team: Record<string, any>;
    league: Record<string, any>;
    skill: number;
    players: MatchPlayerInterface[];
    patch: number;
    region: number;
    all_word_counts: Record<string, number>;
    my_word_counts: Record<string, number>;
    throw: number;
    comeback: number;
    loss: number;
    win: number;
    replay_url: string;
}
