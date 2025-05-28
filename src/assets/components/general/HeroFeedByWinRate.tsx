import HeroFeedByWinRateCard from "./HeroFeedByWinRateCard";

function HeroFeedByWinRate() {
    return (
        <div id="hero-feed-by-win-rate-container">
            <h1 className="main-section-title" id="heroes-by-win-rate-little">
                Heroes By Win Rate
            </h1>
            {/*Create a drop down menu here to sort by turbo or pro win rate*/}
            <div id="hero-feed-by-win-rate-cards-wrapper">
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
            </div>
        </div>
    );
}

export default HeroFeedByWinRate;
