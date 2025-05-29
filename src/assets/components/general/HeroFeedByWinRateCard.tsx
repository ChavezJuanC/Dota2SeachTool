import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";
import { useEffect, useState } from "react";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface HeroFeedByWinHelperInterface {
    heroStats: HeroStatsInterface;
}

function HeroFeedByWinRateCard({ heroStats }: HeroFeedByWinHelperInterface) {
    const [heroName, setHeroName] = useState<string>();

    useEffect(() => {
        const name = idToHeroName(heroStats.id.toString());
        setHeroName(name);
        console.log(name);
    }, []);

    return (
        <div id="hero-by-win-rate-feed-wrapper" className="basic-card">
            <div id="hero-by-winrate-card">
                <div className="hero-info-wrapper">
                    <img
                        src={`/Hero_Photos/${heroName}.png`}
                        alt=""
                        className="hero-image"
                    />
                    <h3 className="basic-info-label mobile-optional" id="">
                        {heroName?.replace("_", " ")}
                    </h3>
                </div>
            </div>
            <div id="hero-win-rates-wrapper">
                <div className="hero-info-wrapper">
                    <h3 className="basic-info-label">Turbo:</h3>
                    <h3 className="banner-stats-text">99.99%</h3>
                </div>
                <div className="hero-info-wrapper">
                    <h3 className="basic-info-label mini-screen-optional">
                        Pro Games:{" "}
                    </h3>
                    <h3 className="banner-stats-text mini-screen-optional">
                        99.99%
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default HeroFeedByWinRateCard;
