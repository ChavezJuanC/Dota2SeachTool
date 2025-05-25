interface MatchScoreDetailsHelperInterface {
    radiantScore: number;
    direScore: number;
    isRadiantWin: Boolean;
}

interface MatchScoreInterface {
    scoreDetails: MatchScoreDetailsHelperInterface;
}

function MatchScoreDetails({ scoreDetails }: MatchScoreInterface) {
    return (
        <div id="match-score-details-wrapper">
            <h1 id="match-score">
                {scoreDetails.radiantScore} - {scoreDetails.direScore}
            </h1>
            <h3 id="winning-team-label">
                {scoreDetails.isRadiantWin
                    ? "Radiant Victory"
                    : "Dire Vicotory"}
            </h3>
        </div>
    );
}

export default MatchScoreDetails;
