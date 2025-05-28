import { useEffect, useState } from "react";
import BackHomeButton from "../components/general/BackHomeButton";
import HeroInfoCard from "../components/hero-profile/HeroInfoCard";
import type { HeroStatsInterface } from "../../interfaces/HeroInterfaces";
import { getHeroStatsById } from "../../modules/api_interactions/main";
import { useParams } from "react-router-dom";

function HeroProfile() {
    const { id } = useParams<string>();

    //fetch heroStatsHere...
    const [heroStats, setHeroStats] = useState<HeroStatsInterface>();

    useEffect(() => {
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
        </div>
    );
}

export default HeroProfile;

/*  

To-Do

HeroInfoCard ready for fetch

FIX FOR DOUBLE FETCHING ROUTES
-if hero/match/etc doesnt exist on useEffect for route.. navigate back to home and toast.. 


*/
