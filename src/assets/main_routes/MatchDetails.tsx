import BackHomeButton from "../components/general/BackHomeButton";
import MatchDescriptionBar from "../components/matches/MatchDescriptionBar";
import MatchScoreDetails from "../components/matches/MatchScoreDetails";
import TeamGameFeed from "../components/matches/TeamGameFeed";
import type {
    MatchDetailsInterface,
    MatchPlayerInterface,
} from "../../interfaces/MatchInterfaces";
import { useEffect, useState } from "react";
import { getMatchData } from "../../modules/api_interactions/main";
import { useParams } from "react-router-dom";

function MatchDetails() {
    //fetch the full game here
    const { id } = useParams<string>();
    const [teamsData, setTeamsData] =
        useState<Array<Array<MatchPlayerInterface>>>();

    const [matchDetails, setMatchDeatils] = useState<MatchDetailsInterface>();

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getMatchDetails() {
            const data: MatchDetailsInterface = await getMatchData(id ?? "");
            setMatchDeatils(data);
            setTeamsData(splitTeamData(data.players));
        }

        getMatchDetails();
    }, [id]);

    function splitTeamData(
        playersArray: Array<MatchPlayerInterface>
    ): Array<Array<MatchPlayerInterface>> {
        const team1: Array<MatchPlayerInterface> = [];
        const team2: Array<MatchPlayerInterface> = [];

        for (let i = 0; i < playersArray.length; i++) {
            if (playersArray[i].player_slot < 128) {
                team1.push(playersArray[i]);
            } else {
                team2.push(playersArray[i]);
            }
        }

        //[0]Radiant [1]Dire
        const teams: Array<Array<MatchPlayerInterface>> = [team1, team2];

        return teams;
    }
    return (
        <div>
            <BackHomeButton />
            <div id="basic-match-details-top-wrapper">
                <MatchScoreDetails
                    scoreDetails={{
                        radiantScore: matchDetails?.radiant_score ?? 0,
                        direScore: matchDetails?.dire_score ?? 0,
                        isRadiantWin: matchDetails?.radiant_win ?? false,
                    }}
                />
                <MatchDescriptionBar
                    descriptionBarData={{
                        gameStartTime: matchDetails?.start_time ?? 0,
                        gameDuration: matchDetails?.duration ?? 0,
                        gameMode: matchDetails?.game_mode ?? 0,
                    }}
                />
            </div>
            <div id="basic-match-deatails-bottom-wrapper">
                <TeamGameFeed
                    playersList={teamsData?.[0] ?? []}
                    teamName="Radiant"
                />
                <TeamGameFeed
                    playersList={teamsData?.[1] ?? []}
                    teamName="Dire"
                />
            </div>
            <div id="bottom-space">{/* SPACER*/}</div>
        </div>
    );
}

export default MatchDetails;
