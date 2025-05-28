function ScrollButton() {
    const scrollToSection = (sectionId: string) => {
        console.log("SCROLLING ROLLING ROLLINGGG");
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="scroll-down-to-heroes-btn">
            <button
                id="heroes-by-win-rate-button"
                onClick={() => scrollToSection("hero-by-win-rate-feed-wrapper")}
            >
                <img src="/Icons/arrow-down.svg" className="icon-svg" />
                Win Rates
                <img src="/Icons/arrow-down.svg" className="icon-svg" />
            </button>
        </div>
    );
}

export default ScrollButton;
