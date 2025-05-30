import Header from "../components/general/Header";
import Hero from "../components/home/Hero";
import HeroFeedByWinRate from "../components/general/HeroFeedByWinRate";
import ScrollButton from "../components/general/ScrollButton";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <div>
                <Hero />
            </div>
            <div>
                <ScrollButton />
                <div id="hero-win-rate-home-container">
                    <HeroFeedByWinRate />
                </div>
            </div>
        </div>
    );
}

export default Home;
