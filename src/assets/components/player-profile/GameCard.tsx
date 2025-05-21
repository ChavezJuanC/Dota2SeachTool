function GameCard() {
    return (
        <div id="game-card">
            <div id="hero-info-wrapper">
                <img
                    src="https://placehold.co/600x400"
                    alt=""
                    id="hero-image"
                />
                <h3 className="banner-stats-text">Hero Name</h3>
            </div>
            <h3 className="banner-stats-text">Win</h3>
            <h3 className="banner-stats-text">K / D / A</h3>
            <h3 className="banner-stats-text">59:00</h3>
            <h3 className="banner-stats-text">7.35</h3>
        </div>
    );
}

export default GameCard;
