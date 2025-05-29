import { useEffect, useState } from "react";
import HeroFeedByWinRateCard from "./HeroFeedByWinRateCard";
import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";
import { getAllHeroStats } from "../../../modules/api_interactions/main";

function HeroFeedByWinRate() {
    const [heroStats, setHeroStats] = useState<Array<HeroStatsInterface>>();

    useEffect(() => {
        async function getStats() {
            const statsList: Array<HeroStatsInterface> =
                await getAllHeroStats();
            setHeroStats(statsList);
        }

        getStats();
    }, []);

    function createHeroStatCards(statsList: Array<HeroStatsInterface>) {
        const cards = statsList.map((statsChuck: HeroStatsInterface) => (
            <HeroFeedByWinRateCard heroStats={statsChuck} key={statsChuck.id} />
        ));

        return cards;
    }

    return (
        <div id="hero-feed-by-win-rate-container">
            <h1 className="main-section-title" id="heroes-by-win-rate-title">
                Heroes By Win Rate
            </h1>
            <select name="filter-options" id="win-rate-filters">
                <option value="turbo">Turbo</option>
                <option value="progames">Pro Games</option>
            </select>
            {/*Create a drop down menu here to sort by turbo or pro win rate*/}
            <div id="hero-feed-by-win-rate-cards-wrapper">
                {heroStats && createHeroStatCards(heroStats)}
            </div>
        </div>
    );
}

export default HeroFeedByWinRate;
