interface MatchDescriptionBarHelperInterface {
    gameStartTime: number;
    gameDuration: number;
    gameMode: number;
}

interface MatchDescriptionBarInterface {
    descriptionBarData: MatchDescriptionBarHelperInterface;
}

interface GameModeInterface {
    id: number;
    name: string;
}

//verify interface and use

function MatchDescriptionBar({
    descriptionBarData,
}: MatchDescriptionBarInterface) {
    function timeToDate(seconds: number): Date {
        const date = new Date(seconds * 1000);
        return date;
    }

    const gameModes: Array<GameModeInterface> = [
        { id: 0, name: "Unknown" },
        { id: 1, name: "All Pick" },
        { id: 2, name: "Captains Mode" },
        { id: 3, name: "Random Draft" },
        { id: 4, name: "Single Draft" },
        { id: 5, name: "All Random" },
        { id: 6, name: "Intro" },
        { id: 7, name: "Diretide" },
        { id: 8, name: "Reverse Captains Mode" },
        { id: 9, name: "Greeviling" },
        { id: 10, name: "Tutorial" },
        { id: 11, name: "Mid Only" },
        { id: 12, name: "Least Played" },
        { id: 13, name: "Limited Heroes" },
        { id: 14, name: "Compendium Matchmaking" },
        { id: 15, name: "Custom" },
        { id: 16, name: "Captains Draft" },
        { id: 17, name: "Balanced Draft" },
        { id: 18, name: "Ability Draft" },
        { id: 19, name: "Event" },
        { id: 20, name: "All Random Death Match" },
        { id: 21, name: "1v1 Mid" },
        { id: 22, name: "All Draft" },
        { id: 23, name: "Turbo" },
        { id: 24, name: "Mutation" },
        { id: 25, name: "Coaches Challenge" },
    ];

    function idToGameMode(id: number, modesList: Array<GameModeInterface>) {
        const gameMode = modesList.find((element) => element.id == id);
        return gameMode;
    }

    return (
        <div
            className="basic-card-centered-text"
            id="match-description-container"
        >
            <div className="match-description-wrapper">
                <h3 className="basic-info-label mobile-optional">Date -</h3>
                <h4 className="basic-info-label">
                    {timeToDate(
                        descriptionBarData.gameStartTime
                    ).toDateString()}
                </h4>
            </div>
            <div className="match-description-wrapper">
                <h3 className="basic-info-label mobile-optional">Duration -</h3>
                <h4 className="basic-info-label">
                    {(descriptionBarData.gameDuration / 60).toFixed(2)}mins
                </h4>
            </div>
            <div className="match-description-wrapper">
                <h3 className="basic-info-label mobile-optional">Mode -</h3>
                <h4 className="basic-info-label mobile-optional">
                    {idToGameMode(descriptionBarData.gameMode, gameModes)?.name}
                </h4>
            </div>
        </div>
    );
}

export default MatchDescriptionBar;
