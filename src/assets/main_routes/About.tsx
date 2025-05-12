import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="navbar-button"
                id="about-btn"
                onClick={() => navigate("/")}
            >
                Home
            </button>
        </div>
    );
}

export default About;
