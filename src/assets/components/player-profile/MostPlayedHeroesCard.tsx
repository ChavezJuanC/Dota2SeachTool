import type { MostPlayedHeroesInterface } from "../../../interfaces/HeroInterfaces";
import { useState, useEffect } from "react";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface MostPlayedHeroesCardInterface {
    heroData: MostPlayedHeroesInterface;
}

function MostPlayedHeroesCard({ heroData }: MostPlayedHeroesCardInterface) {
    const [heroName, setHeroName] = useState<string>("");

    useEffect(() => {
        function getHeroName() {
            const name = idToHeroName(heroData.hero_id.toString());
            if (name) {
                const lowerCaseName = name.toLowerCase();
                setHeroName(lowerCaseName);
            }
        }

        getHeroName();
    }, []);

    return (
        <div id="most-played-heroes-card" className="basic-card">
            <div className="hero-info-wrapper-2">
                <img
                    src={`/Hero_Photos/${heroName}.png`}
                    id="hero-image2"
                    className="hero-image"
                />
                <h3
                    className="banner-stats-text mini-screen-optional"
                    id="hero-name-most-played-heroes"
                >
                    {heroName.toUpperCase().replace(/_/g, " ")}
                </h3>
            </div>
            <div id="left-text-wrapper">
                <h3 className="banner-stats-text" id="win-rate-with-peer">
                    {+((heroData.win / heroData.games) * 100)
                        .toFixed(2)
                        .toString() + "%"}
                </h3>
                <h3
                    className="banner-stats-text mobile-optional"
                    id="total-games-with-peer"
                >
                    {heroData.with_games}
                    {" Games"}
                </h3>
            </div>
        </div>
    );
}

export default MostPlayedHeroesCard;
