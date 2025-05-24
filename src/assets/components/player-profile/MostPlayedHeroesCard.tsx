import type { MostPlayedHeroesInterface } from "../../../interfaces/HeroInterfaces";
import { useState, useEffect } from "react";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface MostPlayedHeroesCardInterface {
    heroData: MostPlayedHeroesInterface;
}

function MostPlayedHeroesCard({ heroData }: MostPlayedHeroesCardInterface) {
    const [heroName, setHeroName] = useState<string>("");

    useEffect(() => {
        async function getHeroName() {
            const name = await idToHeroName(heroData.hero_id.toString());
            if (name) {
                const lowerCaseName = name.toLowerCase();
                setHeroName(lowerCaseName);
            }
            console.log(name);
        }

        getHeroName();
    }, []);

    return (
        <div id="most-played-heroes-card" className="basic-card">
            <div className="hero-info-wrapper" id="hero-info-wrapper2">
                <img
                    src={`/Hero_Photos/${heroName}.png`}
                    id="hero-image2"
                    className="hero-image"
                />
                <h3 className="banner-stats-text mobile-optional">
                    {heroData.hero_id}
                </h3>
            </div>
            <h3 className="banner-stats-text" id="win-rate-with-peer">
                {"Win Rate: " +
                    ((heroData.with_games / heroData.with_win) * 100)
                        .toFixed(2)
                        .toString() +
                    "%"}
            </h3>
            <h3 className="banner-stats-text" id="total-games-with-peer">
                {`${heroData.with_games} Games`}
            </h3>
        </div>
    );
}

export default MostPlayedHeroesCard;
