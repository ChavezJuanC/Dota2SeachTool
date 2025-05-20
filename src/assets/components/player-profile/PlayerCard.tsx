import { useEffect, useState } from "react";
import type {
    PlayerCardInfoInterface,
    PlayerCardInterface,
    PlayerWinLossInterface,
} from "../../../interfaces/PlayerInterfaces";
import {
    getPlayerById,
    getPlayersWinLossRatio,
} from "../../../modules/api_interactions/main";

function PlayerCard({ id }: PlayerCardInterface) {
    //Fetching Player Data
    const [playerData, setPlayerData] = useState<PlayerCardInfoInterface>();
    const [winLossRatio, setWinLossRatio] = useState<PlayerWinLossInterface>();

    useEffect(() => {
        async function setData() {
            try {
                const playerData = await getPlayerById(id);
                setPlayerData(playerData);
                const playerWLRatio = await getPlayersWinLossRatio(id);
                setWinLossRatio(playerWLRatio);
            } catch (error) {
                console.log(error);
            }
        }
        setData();
    }, []);

    console.log(id);
    return (
        <div id="player-card-info-container">
            <div id="basic-info-wrapper">
                <img
                    src={playerData?.profile.avatarfull}
                    alt=""
                    id="player-photo"
                />
                <div id="rank-name-section">
                    <img
                        src={`/Ranks/rank_icon_${
                            playerData?.rank_tier?.toString().slice(0, 1) || "0"
                        }.png`}
                        alt=""
                        id="rank-photo"
                    />
                    <h5 id="player-name-label" className="basic-info-label">
                        {playerData?.profile.personaname}
                    </h5>
                </div>
            </div>
            <div id="basic-info-stats">
                <h4 id="first-game-label" className="basic-info-label">
                    Win Rate
                </h4>
                <h4 id="first-game-info" className="basic-info-text">
                    {(
                        (Number(winLossRatio?.win) /
                            (Number(winLossRatio?.win) +
                                Number(winLossRatio?.lose))) *
                        100
                    )
                        .toString()
                        .slice(0, 5)}
                    %
                </h4>
                <h4 id="win-loss-label" className="basic-info-label">
                    Win/Loss Ratio
                </h4>
                <h4 id="win-loss-info" className="basic-info-text">
                    {winLossRatio?.win}:{winLossRatio?.lose}
                </h4>
            </div>
        </div>
    );
}

export default PlayerCard;
