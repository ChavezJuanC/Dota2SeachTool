function HeroFeedByWinRateCard() {
    return (
        <div id="hero-by-win-rate-feed-wrapper" className="basic-card">
            <div id="hero-by-winrate-card">
                <div className="hero-info-wrapper">
                    <img
                        src="https://placehold.co/600x400"
                        alt=""
                        className="hero-image"
                    />
                    <h3 className="basic-info-label mobile-optional" id="">
                        HERONAME
                    </h3>
                </div>
            </div>
            <div className="hero-info-wrapper">
                <h3 className="basic-info-label">Turbo:</h3>
                <h3 className="banner-stats-text">99.99%</h3>
            </div>
            <div className="hero-info-wrapper">
                <h3 className="basic-info-label mini-screen-optional">Pro Games: </h3>
                <h3 className="banner-stats-text mini-screen-optional">99.99%</h3>
            </div>
        </div>
    );
}

export default HeroFeedByWinRateCard;
