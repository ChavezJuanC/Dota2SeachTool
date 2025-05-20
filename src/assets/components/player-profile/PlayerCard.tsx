import type { PlayerCardInterface } from "../../../interfaces/PlayerInterfaces";

function PlayerCard({ id }: PlayerCardInterface) {
    console.log(id);
    return (
        <div id="player-card-info-container">
            <div id="basic-info-wrapper">
                <img
                    src="https://placehold.co/600x400"
                    alt=""
                    id="player-photo"
                />
                <div id="rank-name-section">
                    <img
                        src="https://placehold.co/600x400"
                        alt=""
                        id="rank-photo"
                    />
                    <h5 id="player-name-label" className="basic-info-label">
                        PlayerName
                    </h5>
                </div>
            </div>
            <div id="basic-info-stats">
                <h4 id="first-game-label" className="basic-info-label">
                    First Game
                </h4>
                <h4 id="first-game-info" className="basic-info-text">
                    00/00/0000
                </h4>
                <h4 id="win-loss-label" className="basic-info-label">
                    Win/Loss Ratio
                </h4>
                <h4 id="win-loss-info" className="basic-info-text">
                    100:100
                </h4>
            </div>
        </div>
    );
}

export default PlayerCard;
