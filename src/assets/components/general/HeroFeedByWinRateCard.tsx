import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";
import { useEffect, useState } from "react";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";
import { useNavigate } from "react-router-dom";

interface HeroFeedByWinHelperInterface {
    heroStats: HeroStatsInterface;
}

function HeroFeedByWinRateCard({ heroStats }: HeroFeedByWinHelperInterface) {
    const [heroName, setHeroName] = useState<string>();

    const navigate = useNavigate();

    useEffect(() => {
        const name = idToHeroName(heroStats.id.toString());
        setHeroName(name);
    }, []);

    return (
        <div id="hero-by-win-rate-feed-wrapper" className="basic-card">
            <div id="hero-by-winrate-card">
                <div
                    className="hero-info-wrapper"
                    onClick={() => {
                        navigate(`/hero/${heroStats.id}`);
                    }}
                >
                    <img
                        src={`/Hero_Photos/${heroName?.toLowerCase()}.png`}
                        alt=""
                        className="hero-image"
                    />
                    <h3 className="basic-info-label mobile-optional clickable-text">
                        {heroName?.replace("_", " ")}
                    </h3>
                </div>
            </div>
            <div id="hero-win-rates-wrapper">
                <div className="hero-info-wrapper">
                    <h3 className="basic-info-label">Turbo:</h3>
                    <h3 className="banner-stats-text">
                        {((heroStats.turbo_wins / heroStats.turbo_picks) * 100)
                            .toFixed(2)
                            .toString()
                            .padEnd(2, "0")}
                        %
                    </h3>
                </div>
                <div className="hero-info-wrapper">
                    <h3 className="basic-info-label mini-screen-optional">
                        Pro Games:
                    </h3>
                    <h3 className="banner-stats-text mini-screen-optional">
                        {((heroStats.pro_win / heroStats.pro_pick) * 100)
                            .toFixed(2)
                            .toString()
                            .padEnd(2, "0")}
                        %
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default HeroFeedByWinRateCard;
