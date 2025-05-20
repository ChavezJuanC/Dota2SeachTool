import { API_KEY, API_URL } from "../../constants/main";
import type { BasicHero } from "../../interfaces/HeroInterfaces";
import type { PlayerWinLossInterface } from "../../interfaces/PlayerInterfaces";

// fetch player profile by id
export async function getPlayerById(id: string): Promise<any> {
    const res = await fetch(`${API_URL}/players/${id}?${API_KEY}`);

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error("Data not found. Please validate player ID");
        } else {
            throw new Error("An error occurred while fetching the player data");
        }
    }

    const data: Promise<any> = await res.json();
    return data;
}

// fetch player win-loss ratio
export async function getPlayersWinLossRatio(
    id: string
): Promise<PlayerWinLossInterface> {
    const res = await fetch(
        `${API_URL}/players/${id}/wl/?significant=0?${API_KEY}`
    );
    if (!res.ok) {
        if (res.status === 400) {
            throw new Error("Data not found. Please validate player ID");
        } else {
            throw new Error("An error occured while fetching W:L data");
        }
    }

    const data: Promise<any> = await res.json();
    return data;
}

//fetch last 10 games
export async function getLastTenGames(id: string): Promise<any> {
    const res = await fetch(
        `${API_URL}/players/${id}/matches/?significant=0?${API_KEY}`
    );

    if (!res.ok) {
        if (res.status === 400) {
            throw new Error("Data not found. Please validate player ID");
        } else {
            throw new Error("Error fecthing games hisotry data");
        }
    }

    const data: Promise<any> = await res.json();
    return data;
}

//fetch next 10 games
export async function getNextTenGames(
    id: string,
    offset: string
): Promise<any> {
    const res = await fetch(
        `${API_URL}/players/${id}/matches/?significant=0&offset=${offset}?${API_KEY}`
    );

    if (!res.ok) {
        if (res.status === 400) {
            throw new Error("Data not found. Please validate player ID");
        } else {
            throw new Error("Error fecthing games hisotry data");
        }
    }

    const data: Promise<any> = await res.json();
    return data;
}

//fetch most played heros
export async function getPlayerMostPlayedHeros(id: string): Promise<any> {
    const res = await fetch(
        `${API_URL}/players/${id}/heroes/?significant=0?${API_KEY}`
    );

    if (!res.ok) {
        if (res.status === 400) {
            throw new Error("Data not found. Please validate player ID");
        } else {
            throw new Error("Error fecthing heroes data");
        }
    }

    const data = await res.json();
    const dataSortedByGames = await data.sort(
        (a: any, b: any) => b.games - a.games
    );

    return dataSortedByGames;
}

//fetch player peers
export async function getPlayersPeers(id: string): Promise<any> {
    const res = await fetch(`${API_URL}/players/${id}/peers?${API_KEY}`);

    if (!res.ok) {
        if (res.status === 400) {
            throw new Error("Data not found. Please validate player ID");
        } else {
            throw new Error("Error fecthing peer data");
        }
    }

    const data = await res.json();
    const dataSortedByGames = await data.sort(
        (a: any, b: any) => b.with_games - a.with_games
    );
    return dataSortedByGames;
}

export async function getMatchData(id: string): Promise<any> {
    const res = await fetch(`${API_URL}/matches/${id}?${API_KEY}`);

    if (!res.ok) {
        if (res.status == 400) {
            throw new Error("Match not found. Please validate ID");
        } else {
            throw new Error("Error fetching match data");
        }
    }

    const matchData: Promise<any> = await res.json();
    return matchData;
}

//improve this function to remove _ from the string //result = str.replaceAll("l", ""); //

export async function getHeroByName(heroName: string): Promise<BasicHero> {
    const res = await fetch(`${API_URL}/heroes/?${API_KEY}`);

    if (!res.ok) {
        if (res.status == 400) {
            throw new Error("Hero not found, verify name");
        } else {
            throw new Error("Error searching for hero");
        }
    }

    const allHeroData = await res.json();

    const heroFound: BasicHero = allHeroData.find(
        (hero: BasicHero) =>
            hero.localized_name.trim().toLowerCase().replace(" ", "") ==
            heroName.trim().toLowerCase().replace(" ", "")
    );

    if (heroFound != undefined) {
        return heroFound;
    } else {
        throw new Error("Hero does not exist");
    }
}

//https://api.opendota.com/api/players/{account_id}/heroes
