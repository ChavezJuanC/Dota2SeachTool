import { useEffect, useState } from "react";
import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface HeroInfoCardHelperInterface {
    heroStats: HeroStatsInterface;
}

function HeroInfoCard({ heroStats }: HeroInfoCardHelperInterface) {
    const [heroName, setHeroName] = useState<string>();
    const [heroPrimaryAttr, setHeroPrimaryAttribute] = useState<string>();

    const heroRoleList = (roles: string[]) => {
        return (
            <ul id="hero-info-roles-list">
                {roles.map((role) => (
                    <li
                        id="hero-info-roles-list-itmes"
                        className="banner-stats-text"
                    >
                        {role}
                    </li>
                ))}
            </ul>
        );
    };

    function convertAttribute(shortAttr: string) {
        let attributeName = "";

        switch (shortAttr) {
            case "all":
                attributeName = "GLOBAL";
                break;
            case "str":
                attributeName = "STRENGTH";
                break;

            case "agi":
                attributeName = "AGILITY";
                break;

            case "int":
                attributeName = "INTELLIGENCE";
                break;

            default:
                attributeName = "Unknown";
                break;
        }

        console.log(attributeName);
        setHeroPrimaryAttribute(attributeName);
    }

    useEffect(() => {
        async function getHeroName() {
            const name = await idToHeroName(heroStats.id.toString());
            setHeroName(name.toLowerCase());
        }

        getHeroName();
        convertAttribute(heroStats.primary_attr);
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
                        <h3 className="banner-stats-text">
                            {(
                                (heroStats.pro_win / heroStats.pro_pick) *
                                100
                            ).toFixed(2)}
                            {"%"}
                        </h3>
                    </div>
                    <div className="hero-win-rate-wrapper" id="turbo-win-rate">
                        <h3 className="basic-info-label-2">TWR:</h3>
                        <h3 className="banner-stats-text">                            {(
                                (heroStats.turbo_wins/ heroStats.turbo_picks) *
                                100
                            ).toFixed(2)}
                            {"%"}</h3>
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
                    {heroPrimaryAttr}
                </h3>
                <h3 id="hero-info-roles" className="basic-info-label-2">
                    ROLES
                    {heroRoleList(heroStats.roles)}
                </h3>
            </div>
        </div>
    );
}

export default HeroInfoCard;
