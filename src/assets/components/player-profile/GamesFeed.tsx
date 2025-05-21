import GameCard from "./GameCard";

function GamesFeed() {
    return (
        <div>
            <div id="recent-games-title-container">
                <h1 id="recent-games-title" className="main-section-title">
                    Recent Games
                </h1>
            </div>
            <div id="game-history-container">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
        </div>
    );
}

export default GamesFeed;

/*
Next Steps

- Make game card component dynamic
- Feed actual data from game to fetch to game cards array
*/
