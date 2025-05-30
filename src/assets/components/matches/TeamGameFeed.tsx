import type { MatchPlayerInterface } from "../../../interfaces/MatchInterfaces";
import PlayerGameStrip from "./PlayerGameStrip";

interface TeamGameFeedInterface {
    playersList: Array<MatchPlayerInterface>;
    teamName : string;
}

function TeamGameFeed({ playersList, teamName}: TeamGameFeedInterface) {
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
                {teamName}
            </h2>
            <div id="player-game-strips-container">
                {createPlayerGameStrips()}
            </div>
        </div>
    );
}

export default TeamGameFeed;
