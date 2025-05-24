import { useEffect, useState } from "react";
import type { MatchSummaryInterface } from "../../../interfaces/PlayerInterfaces";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface MatchSummaryHelperInterce {
    matchData: MatchSummaryInterface;
}

function GameCard({ matchData }: MatchSummaryHelperInterce) {
    const [heroName, setHeroName] = useState<string>("");

    useEffect(() => {
        async function getHeroName() {
            const name = await idToHeroName(matchData.hero_id.toString());
            if (name) {
                const lowerCaseName = name.toLowerCase();
                setHeroName(lowerCaseName);
            }
        }

        getHeroName();
    }, []);

    return (
        <div id="game-card" className="basic-card">
            <div id="hero-info-wrapper" className="hero-info-wrapper">
                <img src={`/Hero_Photos/${heroName}.png`} id="hero-image" className="hero-image"/>
                <h3 className="banner-stats-text mobile-optional">Hero Name</h3>
            </div>
            <h3 className="banner-stats-text" id="game-stats-win">
                {(matchData.player_slot < 128 && matchData.radiant_win) ||
                (matchData.player_slot >= 128 && !matchData.radiant_win)
                    ? "Win"
                    : "Loss"}
            </h3>
            <h3 className="banner-stats-text" id="game-stats-kda">
                {matchData.kills} / {matchData.deaths} / {matchData.assists}
            </h3>
            <h3
                className="banner-stats-text mobile-optional"
                id="game-stats-game-duration"
            >
                59:00
            </h3>
            <h3
                className="banner-stats-text mobile-optional"
                id="game-stats-patch"
            >
                7.35
            </h3>
        </div>
    );
}

export default GameCard;
