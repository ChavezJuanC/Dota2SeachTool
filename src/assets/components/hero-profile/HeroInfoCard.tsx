import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";

interface HeroInfoCardHelperInterface {
    heroStats: HeroStatsInterface;
}

function HeroInfoCard({ heroStats }: HeroInfoCardHelperInterface) {
    return (
        <div id="hero-info-card">
            <div id="hero-info-card-left-side">
                <img
                    src="https://placehold.co/600x400"
                    alt=""
                    id="hero-info-image"
                />
                <div id="hero-info-win-rates-wrapper">
                    <h3 id="pro-win-rate" className="basic-info-label-2">
                        PWR: 00.00%
                    </h3>
                    <h3 id="turbo-win-rate" className="basic-info-label-2">
                        TWR: 00.00%
                    </h3>
                </div>
            </div>
            <div id="hero-info-card-right-side">
                <h3 id="hero-info-name" className="basic-info-label-2">
                    {heroStats.hero_id}
                </h3>
                <h3 id="hero-info-attack-type" className="basic-info-label-2">
                    {heroStats.attack_type}
                </h3>
                <h3 id="hero-info-roles" className="basic-info-label-2">
                    Roles
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

/*

Make sure hero card component is dynamic for all screen sizes
feed it dynamically

*/
export default HeroInfoCard;
