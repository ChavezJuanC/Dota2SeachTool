import Header from "../components/general/Header";
import Hero from "../components/home/Hero";
import HeroFeedByWinRate from "../components/general/HeroFeedByWinRate";

function Home() {
    return (
        <div>
            <Header />
            <div>
                <Hero />
            </div>
            <div>
                <HeroFeedByWinRate />
            </div>
        </div>
    );
}

export default Home;
