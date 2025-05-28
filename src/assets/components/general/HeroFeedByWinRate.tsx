function HeroFeedByWinRate() {
    const scrollToSection = (sectionId: string) => {
        console.log("SCROLLING ROLLING ROLLINGGG");
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="hero-feed-by-win-rate-container">
            <div id="scroll-down-to-heroes-btn">
                <button
                    id="heroes-by-win-rate-button"
                    onClick={() =>
                        scrollToSection("hero-by-win-rate-feed-wrapper")
                    }
                >
                    Heroes By Win Rate
                </button>
            </div>
            <h1 className="main-section-title">Heroes By Win Rate</h1>
            <div id="hero-by-win-rate-feed-wrapper" className="basic-card">
                <div id="hero-by-winrate-card">
                    <div className="hero-info-wrapper">
                        <img
                            src="https://placehold.co/600x400"
                            alt=""
                            className="hero-image"
                        />
                        <h3 className="basic-info-label" id="">
                            HERONAME
                        </h3>
                    </div>
                </div>
                <div className="hero-info-wrapper">
                    <h3 className="basic-info-label ">Turbo:</h3>
                    <h3 className="banner-stats-text">99.99%</h3>
                </div>
                <div className="hero-info-wrapper">
                    <h3 className="basic-info-label ">Pro Games: </h3>
                    <h3 className="banner-stats-text">99.99%</h3>
                </div>
            </div>
        </div>
    );
}

export default HeroFeedByWinRate;
