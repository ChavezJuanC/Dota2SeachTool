import { useEffect, useState } from "react";
import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface HeroInfoCardHelperInterface {
    heroStats: HeroStatsInterface;
}

function HeroInfoCard({ heroStats }: HeroInfoCardHelperInterface) {
    const [heroName, setHeroName] = useState<string>();

    useEffect(() => {
        async function getHeroName() {
            const name = await idToHeroName(heroStats.id.toString());
            setHeroName(name.toLowerCase());
        }

        getHeroName();
    }, []);

    return (
        <div id="hero-info-card">
            <div id="hero-info-card-left-side">
                <img
                    src={`/Hero_Photos/${heroName}.png`}
                    alt=""
                    id="hero-info-image"
                />
                <div id="hero-info-win-rates-wrapper">
                    <div className="hero-win-rate-wrapper" id="pro-win-rate">
                        <h3 className="basic-info-label-2">PWR:</h3>
                        <h3 className="banner-stats-text">00.00%</h3>
                    </div>
                    <div className="hero-win-rate-wrapper" id="turbo-win-rate">
                        <h3 className="basic-info-label-2">TWR:</h3>
                        <h3 className="banner-stats-text">00.00%</h3>
                    </div>
                </div>
            </div>
            <div id="hero-info-card-right-side">
                <h3 id="hero-info-name" className="basic-info-label-2">
                    {heroStats.hero_id}
                </h3>
                <h3 id="hero-info-attack-type" className="basic-info-label-2">
                    {heroStats.attack_type.toUpperCase()}
                </h3>
                <h3 id="hero-info-primary-attr" className="basic-info-label-2">
                    {heroStats.primary_attr == "all"
                        ? "GLOBAL"
                        : heroStats.primary_attr}
                </h3>
                <h3 id="hero-info-roles" className="basic-info-label-2">
                    ROLES
                    <ul id="hero-info-roles-list">
                        <li
                            id="hero-info-roles-list-itmes"
                            className="banner-stats-text"
                        >
                            Carry
                        </li>
                        <li
                            id="hero-info-roles-list-itmes"
                            className="banner-stats-text"
                        >
                            Tank
                        </li>
                        <li
                            id="hero-info-roles-list-items"
                            className="banner-stats-text"
                        >
                            Support
                        </li>
                    </ul>
                </h3>
            </div>
        </div>
    );
}

export default HeroInfoCard;
