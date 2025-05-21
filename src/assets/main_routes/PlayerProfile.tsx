import { useParams } from "react-router-dom";
import PlayerCard from "../components/player-profile/PlayerCard";
import BackHomeButton from "../components/general/BackHomeButton";
import GamesFeed from "../components/player-profile/GamesFeed";

function PlayerProfile() {
    const { id } = useParams<string>();
    return (
        <div>
            <BackHomeButton />
            <div id="player-card-container">
                {id ? (
                    <PlayerCard id={id} />
                ) : (
                    <h1>Errro Please provide player IDs</h1>
                )}
            </div>
            <div id="game-feed-container">
                <GamesFeed />
            </div>
        </div>
    );
}

export default PlayerProfile;
