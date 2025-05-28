import HeroFeedByWinRateCard from "./HeroFeedByWinRateCard";

function HeroFeedByWinRate() {
    return (
        <div id="hero-feed-by-win-rate-container">
            <h1 className="main-section-title" id="heroes-by-win-rate-title">
                Heroes By Win Rate
            </h1>
            <select name="filter-options" id="win-rate-filters">
                <option value="turbo">Turbo</option>
                <option value="progames">Pro Games</option>
            </select>
            {/*Create a drop down menu here to sort by turbo or pro win rate*/}
            <div id="hero-feed-by-win-rate-cards-wrapper">
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
                <HeroFeedByWinRateCard />
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
