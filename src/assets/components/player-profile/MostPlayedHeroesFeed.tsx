import { useEffect, useState } from "react";
import type { MostPlayedHeroesInterface } from "../../../interfaces/HeroInterfaces";
import { getPlayerMostPlayedHeroes } from "../../../modules/api_interactions/main";
import type { PlayerCardInterface } from "../../../interfaces/PlayerInterfaces";
import MostPlayedHeroesCard from "./MostPlayedHeroesCard";

function MostPlayedHeroesFeed({ id }: PlayerCardInterface) {
    //fetch most played heroes
    const [mostPlayedHeroes, setMostPlayedHeroes] =
        useState<Array<MostPlayedHeroesInterface>>();

    function createMostPlayedHeroesCards() {
        const cards = mostPlayedHeroes?.map((hero) => (
            <MostPlayedHeroesCard key={hero.hero_id} heroData={hero} />
        ));

        return cards;
    }

    useEffect(() => {
        async function fetchHeroesData() {
            const data: Array<MostPlayedHeroesInterface> =
                await getPlayerMostPlayedHeroes(id);
            setMostPlayedHeroes(data);
            console.log(data);
        }

        fetchHeroesData();
    }, []);

    return <div>{createMostPlayedHeroesCards()}</div>;
}

export default MostPlayedHeroesFeed;
