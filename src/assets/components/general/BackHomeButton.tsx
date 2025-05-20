import { useNavigate } from "react-router-dom";

function BackHomeButton() {
    const navigate = useNavigate();
    return (
        <button
            className="navbar-button"
            id="about-btn"
            onClick={() => navigate("/")}
        >
            Home
        </button>
    );
}

export default BackHomeButton;
