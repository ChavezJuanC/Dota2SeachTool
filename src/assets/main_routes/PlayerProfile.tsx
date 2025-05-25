import { useParams } from "react-router-dom";
import PlayerCard from "../components/player-profile/PlayerCard";
import BackHomeButton from "../components/general/BackHomeButton";
import GamesFeed from "../components/player-profile/GamesFeed";
import PlayerPeerFeed from "../components/player-profile/PlayerPeerFeed";
import MostPlayedHeroesFeed from "../components/player-profile/MostPlayedHeroesFeed";

function PlayerProfile() {
    const { id } = useParams<string>();

    return (
        <div className="full-page-wrapper">
            <BackHomeButton />
            <div id="player-card-container">
                {id ? (
                    <PlayerCard id={id} />
                ) : (
                    <h1>Errro Please provide player IDs</h1>
                )}
            </div>
            <div id="game-feed-container">
                <GamesFeed id={id ?? ""} />
            </div>
            <div id="bottom-section-wrapper">
                <div id="mostplayed-heroes-container">
                    <h1
                        id="mostplayed-heroes-title"
                        className="main-section-title"
                    >
                        Most Played Heroes
                    </h1>
                    <div id="mostplayed-heroes-shadow-box">
                        <MostPlayedHeroesFeed id={id ?? ""} />
                    </div>
                </div>
                <div id="peers-container">
                    <h1 id="peers-title" className="main-section-title">
                        Friends
                    </h1>
                    <div id="peers-shadow-box">
                        <PlayerPeerFeed id={id ?? ""} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerProfile;
