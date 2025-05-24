import { getAllHeros } from "../api_interactions/main";
import type { BasicHero } from "../../interfaces/HeroInterfaces";

//fetch heros for reference...

let heroList: Array<BasicHero>;

export async function idToHeroName(id: string): Promise<string> {
    //if 24hrs have passed since last fetch... fetch.. else use ref list
    if (heroList === undefined) {
        heroList = await getAllHeros();
    }

    const hero = heroList.find((hero) => hero.id.toString() == id);

    if (!hero || !hero.localized_name) {
        throw new Error(`Hero with id ${id} not found.`);
    }

    //This format matchers img fetching.. if needed will write logic for different outputs..
    const heroName: string = hero?.localized_name.replace(/[- ]/g, "_");

    return heroName;
}
