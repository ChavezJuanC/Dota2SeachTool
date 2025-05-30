import { useEffect } from "react";
import BackHomeButton from "../components/general/BackHomeButton";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <BackHomeButton />
            <div id="about-section">
                <h1 className="main-section-title">About</h1>
                <h3 id="about-text">
                    Welcome to my Dota 2 stats page — a simple, clean, and
                    minimalistic tool for checking your most essential in-game
                    stats.
                    <br />
                    <br />
                    This project is heavily inspired by OpenDota.com, a powerful
                    and comprehensive platform for Dota 2 players. My version is
                    a more lightweight alternative, focused on the basics —
                    perfect for casual or less competitive players who just want
                    quick insights without the extra complexity.
                    <br />
                    <br />
                    Special thanks to the creators and maintainers of the Dota 2
                    API and the OpenDota API. This project wouldn’t be possible
                    without their work and dedication to making Dota 2 data
                    accessible to everyone.
                </h3>
            </div>
        </div>
    );
}

export default About;
