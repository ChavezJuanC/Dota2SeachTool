import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <nav id="nav">
            <button
                className="navbar-button"
                id="about-btn"
                onClick={() => navigate("/about")}
            >
                About
            </button>
        </nav>
    );
}

export default Header;
<i></i>;
