import { AiOutlineTool } from "react-icons/ai";
import SearchBar from "./SearchBar";

function Hero() {
    return (
        <div id="hero-section-container">
            <div id="hero-section-text">
                <h1 id="hero-title">Dota 2</h1>
                <h2 id="hero-subtitle">Search Tool</h2>
                <AiOutlineTool id="tool-icon" />
            </div>
            <SearchBar />
        </div>
    );
}

export default Hero;
