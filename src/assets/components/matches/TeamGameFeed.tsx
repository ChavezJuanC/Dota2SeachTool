import type { MatchPlayerInterface } from "../../../interfaces/MatchInterfaces";
import PlayerGameStrip from "./PlayerGameStrip";

interface TeamGameFeedInterface {
    playersList: Array<MatchPlayerInterface>;
}

function TeamGameFeed({ playersList }: TeamGameFeedInterface) {
    //create PlayerGameStrip components from playerList data
    function createPlayerGameStrips() {
        const strips = playersList.map((strip: MatchPlayerInterface) => (
            <PlayerGameStrip playerDetails={strip} />
        ));

        return strips;
    }

    return (
        <div id="team-game-feed">
            <h2 id="team-name" className="sub-section-title">
                Radiant
            </h2>
            <div id="player-game-strips-container">
                {createPlayerGameStrips()}
            </div>
        </div>
    );
}

export default TeamGameFeed;
