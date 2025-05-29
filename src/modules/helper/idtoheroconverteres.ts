import { HeroIdConstants } from "../../constants/heroConstants";
import type { BasicHero } from "../../interfaces/HeroInterfaces";

export function idToHeroName(id: string): string {
    const hero = HeroIdConstants.find(
        (hero: BasicHero) => hero.id.toString() == id
    );

    if (!hero) {
        throw new Error(`Hero with id ${id} not found.`);
    }

    //This format matchers img fetching.. if needed will write logic for different outputs..
    let heroName: string = hero?.localized_name.replace(/[- ]/g, "_");

    return heroName;
}
