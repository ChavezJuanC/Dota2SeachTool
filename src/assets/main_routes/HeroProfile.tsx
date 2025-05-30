import { useEffect, useState } from "react";
import BackHomeButton from "../components/general/BackHomeButton";
import HeroInfoCard from "../components/hero-profile/HeroInfoCard";
import type { HeroStatsInterface } from "../../interfaces/HeroInterfaces";
import { getHeroStatsById } from "../../modules/api_interactions/main";
import { useParams } from "react-router-dom";
import HeroFeedByWinRate from "../components/general/HeroFeedByWinRate";

function HeroProfile() {
    const { id } = useParams<string>();

    //fetch heroStatsHere...
    const [heroStats, setHeroStats] = useState<HeroStatsInterface>();

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getHeroStats() {
            const stats = await getHeroStatsById(id ?? "");
            setHeroStats(stats);
        }
        getHeroStats();
    }, [id]);

    return (
        <div>
            <BackHomeButton />
            <div id="hero-info-card-container">
                {heroStats && <HeroInfoCard heroStats={heroStats} />}
            </div>
            <div id="hero-win-rate-hero-profile-container">
                <HeroFeedByWinRate />
            </div>
        </div>
    );
}

export default HeroProfile;
