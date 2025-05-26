import BackHomeButton from "../components/general/BackHomeButton";
import HeroInfoCard from "../components/hero-profile/HeroInfoCard";

function HeroProfile() {
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
