import { useEffect, useState } from "react";
import type { MatchSummaryInterface } from "../../../interfaces/PlayerInterfaces";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";
import { useNavigate } from "react-router-dom";

interface MatchSummaryHelperInterce {
    matchData: MatchSummaryInterface;
}

function GameCard({ matchData }: MatchSummaryHelperInterce) {
    const [heroName, setHeroName] = useState<string>("");

    const navigate = useNavigate();

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
            <div
                id="hero-info-wrapper"
                className="hero-info-wrapper"
                onClick={() => {
                    navigate(`/hero/${matchData.hero_id}`);
                }}
            >
                <img
                    src={`/Hero_Photos/${heroName}.png`}
                    id="hero-image"
                    className="hero-image"
                />
                <h3 className="banner-stats-text mobile-optional clickable-text">
                    {heroName.toUpperCase().replace("_", " ")}
                </h3>
            </div>
            <div className="hero-info-wrapper-2">
                <h3 className="banner-stats-text" id="game-stats-win">
                    {(matchData.player_slot < 128 && matchData.radiant_win) ||
                    (matchData.player_slot >= 128 && !matchData.radiant_win)
                        ? "Win"
                        : "Loss"}
                </h3>
                <h3 className="banner-stats-text" id="game-stats-kda">
                    {matchData.kills.toString().padStart(2, "0")} /{" "}
                    {matchData.deaths.toString().padStart(2, "0")} /{" "}
                    {matchData.assists.toString().padStart(2, "0")}
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
        </div>
    );
}

export default GameCard;
