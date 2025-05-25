function PlayerGameStrip() {
    return (
        <div id="player-game-strip" className="basic-card">
            <img
                src="https://placehold.co/600x400"
                alt=""
                className="hero-image"
                id="hero-img-game-strip"
            />

            <h3 className="banner-stats-text">PlayeNameHere</h3>
            <h3 className="mobile-optional banner-stats-text">LVL 30</h3>
            <h3 className="banner-stats-text">00/00/00</h3>
        </div>
    );
}

export default PlayerGameStrip;
