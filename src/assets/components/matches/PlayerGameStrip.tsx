import { useEffect, useState } from "react";
import type { MatchPlayerInterface } from "../../../interfaces/MatchInterfaces";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";
import { useNavigate } from "react-router-dom";

interface PlayerGameStripInterface {
    playerDetails: MatchPlayerInterface;
}

function PlayerGameStrip({ playerDetails }: PlayerGameStripInterface) {
    const [heroName, setHeroName] = useState<string>();

    const navigate = useNavigate();

    useEffect(() => {
        async function createHeroName() {
            const name = await idToHeroName(playerDetails.hero_id.toString());
            setHeroName(name.toLowerCase());
        }

        createHeroName();
    });

    return (
        <div id="player-game-strip" className="basic-card">
            <img
                src={`/Hero_Photos/${heroName}.png`}
                alt=""
                className="hero-image"
                id="hero-img-game-strip"
                onClick={() => {
                    navigate(`/hero/${playerDetails.hero_id}`);
                }}
            />
            <h3
                className="banner-stats-text clickable-text"
                onClick={() => {
                    if (playerDetails.personaname) {
                        navigate(`/player-profile/${playerDetails.account_id}`);
                    }
                }}
            >
                {playerDetails.personaname
                    ? playerDetails.personaname
                    : "Anonymous"}
            </h3>
            <div id="lvl-kda-wrapper">
                <h3 className="mobile-optional banner-stats-text">
                    LVL {playerDetails.level}
                </h3>
                <h3 className="banner-stats-text">
                    {playerDetails.kills.toString().padStart(2, "0")}/
                    {playerDetails.deaths.toString().padStart(2, "0")}/
                    {playerDetails.assists.toString().padStart(2, "0")}
                </h3>
            </div>
        </div>
    );
}

export default PlayerGameStrip;
