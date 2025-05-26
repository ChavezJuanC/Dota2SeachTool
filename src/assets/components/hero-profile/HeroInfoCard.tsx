function HeroInfoCard() {
    return (
        <div id="hero-info-card">
            <div id="hero-info-card-left-side">
                <h3 id="hero-info-name">HeroNameHere</h3>
                <h3 id="hero-info-attack-type">Ranged</h3>
                <h3 id="hero-info-roles">
                    Roles
                    <ul id="hero-info-roles-list">
                        <li id="hero-info-roles-list-itmes">Carry</li>
                        <li id="hero-info-roles-list-itmes">Tank</li>
                        <li id="hero-info-roles-list-items">Support</li>
                    </ul>
                </h3>
            </div>
            <div id="hero-info-card-right-side">
                <img src="https://placehold.co/600x400" alt="" id="hero-info-image"/>
                <div id="hero-info-win-rates-wrapper">
                    <h3>PWR: 00.00%</h3>
                    <h3>TWR: 00.00%</h3>
                </div>
            </div>
        </div>
    );
}



/*

Make sure hero card component is dynamic for all screen sizes
feed it dynamically

*/
export default HeroInfoCard;
