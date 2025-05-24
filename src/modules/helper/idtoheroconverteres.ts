import { getAllHeros } from "../api_interactions/main";
import type { BasicHero } from "../../interfaces/HeroInterfaces";

//fetch heros for reference...

let heroList: Array<BasicHero>;

export async function idToHeroName(id: string): Promise<string> {
    //this fucntion cant be call every time... it causes issues..
    //Maybe have it check of X var is empty.. if it is run the list.. but if its not than fetch the list..
    //Maybe fetch the full list 1 time a day
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

//match id to hero
//return hero name formated for img
