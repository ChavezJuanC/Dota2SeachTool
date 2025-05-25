import PlayerGameStrip from "./PlayerGameStrip";

function TeamGameFeed() {
    return (
        <div id="team-game-feed">
            <h2 id="team-name" className="sub-section-title">
                Radiant
            </h2>
            <div id="player-game-strips-container">
                <PlayerGameStrip />
                <PlayerGameStrip />
                <PlayerGameStrip />
                <PlayerGameStrip />
                <PlayerGameStrip />
            </div>
        </div>
    );
}

export default TeamGameFeed;
