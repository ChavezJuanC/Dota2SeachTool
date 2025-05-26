import { useEffect, useState } from "react";
import type { MatchPlayerInterface } from "../../../interfaces/MatchInterfaces";
import { idToHeroName } from "../../../modules/helper/idtoheroconverteres";

interface PlayerGameStripInterface {
    playerDetails: MatchPlayerInterface;
}

function PlayerGameStrip({ playerDetails }: PlayerGameStripInterface) {
    const [heroName, setHeroName] = useState<string>();
    useEffect(() => {
        async function createHeroName() {
            const name = await idToHeroName(playerDetails.hero_id.toString());
            setHeroName(name.toLowerCase());
            console.log(name.toLowerCase());
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
            />

            <h3 className="banner-stats-text">
                {playerDetails.personaname
                    ? playerDetails.personaname
                    : "Anonymous"}
            </h3>
            <div id="lvl-kda-wrapper">
                <h3 className="mobile-optional banner-stats-text">
                    LVL {playerDetails.level}
                </h3>
                <h3 className="banner-stats-text">
                    {playerDetails.kills}/{playerDetails.deaths}/
                    {playerDetails.assists}
                </h3>
            </div>
        </div>
    );
}

export default PlayerGameStrip;
