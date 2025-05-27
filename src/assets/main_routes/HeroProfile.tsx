import { useEffect, useState } from "react";
import BackHomeButton from "../components/general/BackHomeButton";
import HeroInfoCard from "../components/hero-profile/HeroInfoCard";
import type { HeroStatsInterface } from "../../interfaces/HeroInterfaces";

function HeroProfile() {
    //fetch heroStatsHere...
    const [heroStats, setHeroStats] = useState<HeroStatsInterface>();

    useEffect(() => {}, []);

    return (
        <div>
            <BackHomeButton />
            <div id="hero-info-card-container">
                <HeroInfoCard />
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
