import BackHomeButton from "../components/general/BackHomeButton";
import MatchDescriptionBar from "../components/matches/MatchDescriptionBar";
import MatchScoreDetails from "../components/matches/MatchScoreDetails";
import TeamGameFeed from "../components/matches/TeamGameFeed";
import type { MatchDetailsInterface } from "../../interfaces/MatchInterfaces";
import { useEffect, useState } from "react";
import { getMatchData } from "../../modules/api_interactions/main";
import { useParams } from "react-router-dom";

function MatchDetails() {
    //fetch the full game here
    const { id } = useParams<string>();

    const [matchDetails, setMatchDeatils] = useState<MatchDetailsInterface>();

    useEffect(() => {
        async function getMatchDetails() {
            const data = await getMatchData(id ?? "");
            setMatchDeatils(data);
            console.log(data);
        }

        getMatchDetails();
    }, []);

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
                <MatchDescriptionBar />
            </div>
            <div id="basic-match-deatails-bottom-wrapper">
                <TeamGameFeed />
                <TeamGameFeed />
            </div>
            <div id="bottom-space">{/* SPACER*/}</div>
        </div>
    );
}

export default MatchDetails;
