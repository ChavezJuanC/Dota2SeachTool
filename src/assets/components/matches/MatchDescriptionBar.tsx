function MatchDescriptionBar() {
    return (
        <div
            className="basic-card-centered-text"
            id="match-description-container"
        >
            <div className="match-description-wrapper">
                <h3 className="basic-info-label mobile-optional">Date -</h3>
                <h4 className="basic-info-label">00/00/00</h4>
            </div>
            <div className="match-description-wrapper">
                <h3 className="basic-info-label mobile-optional">Duration -</h3>
                <h4 className="basic-info-label">00:00:00</h4>
            </div>
            <div className="match-description-wrapper">
                <h3 className="basic-info-label mobile-optional">Team -</h3>
                <h4 className="basic-info-label">Radiant</h4>
            </div>
        </div>
    );
}

export default MatchDescriptionBar;
