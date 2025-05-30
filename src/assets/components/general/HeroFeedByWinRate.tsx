import { useEffect, useState } from "react";
import HeroFeedByWinRateCard from "./HeroFeedByWinRateCard";
import type { HeroStatsInterface } from "../../../interfaces/HeroInterfaces";
import { getAllHeroStats } from "../../../modules/api_interactions/main";

function HeroFeedByWinRate() {
    const [heroStats, setHeroStats] = useState<Array<HeroStatsInterface>>([]);
    const [heroCards, setHeroCards] = useState<React.ReactElement[]>([]);
    const [gameTypeFilter, setGameTypeFilter] = useState<string>("turbo");

    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setGameTypeFilter(event.target.value);
        console.log("Filtering by: ", event.target.value);
    };

    useEffect(() => {
        async function getStats() {
            const statsList: Array<HeroStatsInterface> =
                await getAllHeroStats();
            setHeroStats(statsList);
            createHeroStatCards(statsList);
        }

        getStats();
    }, []);

    useEffect(() => {
        createHeroStatCards(heroStats ?? []);
    }, [gameTypeFilter]);

    function createHeroStatCards(statsList: Array<HeroStatsInterface>) {
        //IF statement here//!!!
        if (gameTypeFilter == "turbo") {
            //verify win rates -? fix algorithms
            statsList.sort(
                (cardA, cardB) =>
                    (cardB.turbo_wins / cardB.turbo_picks) * 100 -
                    (cardA.turbo_wins / cardA.turbo_picks) * 100
            );
        } else {
            statsList.sort(
                (cardA, cardB) =>
                    (cardB.pro_win / cardB.pro_pick) * 100 -
                    (cardA.pro_win / cardA.pro_pick) * 100
            );
        }

        const cards = statsList.map((statsChuck: HeroStatsInterface) => (
            <HeroFeedByWinRateCard heroStats={statsChuck} key={statsChuck.id} />
        ));

        setHeroCards(cards);
    }

    return (
        <div id="hero-feed-by-win-rate-container">
            <h1 className="main-section-title" id="heroes-by-win-rate-title">
                Heroes By Win Rate
            </h1>
            <select
                name="filter-options"
                id="win-rate-filters"
                onChange={(e) => handleFilterChange(e)}
            >
                <option value="turbo">Turbo</option>
                <option value="progames">Pro Games</option>
            </select>
            {/*Create a drop down menu here to sort by turbo or pro win rate*/}
            <div id="hero-feed-by-win-rate-cards-wrapper">{heroCards}</div>
        </div>
    );
}

export default HeroFeedByWinRate;
