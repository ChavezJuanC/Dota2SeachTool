import BackHomeButton from "../components/general/BackHomeButton";
import MatchDescriptionBar from "../components/matches/MatchDescriptionBar";
import MatchScoreDetails from "../components/matches/MatchScoreDetails";

function MatchDetails() {
    return (
        <div>
            <BackHomeButton />
            <div id="basic-match-details-top-wrapper">
                <MatchScoreDetails />
                <MatchDescriptionBar />
            </div>
            <div id="basic-match-deatails-bottom-wrapper"></div>
        </div>
    );
}

export default MatchDetails;
