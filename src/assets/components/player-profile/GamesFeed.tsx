import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { getLastTwentyGames } from "../../../modules/api_interactions/main";
import type {
    PlayerCardInterface,
    MatchSummaryInterface,
} from "../../../interfaces/PlayerInterfaces";

function GamesFeed({ id }: PlayerCardInterface) {
    //Fetch data for gameCardsData Array
    const [gameCardData, setCardGameData] =
        useState<Array<MatchSummaryInterface>>();

    function createRecentGameCards(data: Array<MatchSummaryInterface>) {
        const cards = data.map((card) => (
            <GameCard key={card.match_id} matchData={card} />
        ));

        return cards;
    }

    useEffect(() => {
        async function fetchData() {
            const data: Array<MatchSummaryInterface> = await getLastTwentyGames(
                id
            );
            setCardGameData(data);
            console.log(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <div id="recent-games-title-container">
                <h1 id="recent-games-title" className="main-section-title">
                    Recent Games
                </h1>
            </div>
            <div id="game-history-container">
                {gameCardData && createRecentGameCards(gameCardData)}
            </div>
        </div>
    );
}

export default GamesFeed;
