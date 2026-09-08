import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchClick = () => {
        if (location.pathname === "/osakamove") {
            document.getElementById("search")?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            navigate("/osakamove#search");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg px-4">
            <NavLink className="navbar-brand fw-bold" to="/osakamove">
            <i className="bi bi-house-heart-fill"> </i>
                OsakaMove
            </NavLink>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ms-auto">
                    <NavLink className="nav-link" to="/osakamove">
                        ホーム
                    </NavLink>

                    <button className="nav-link" onClick={handleSearchClick}>
                        物件を探す
                    </button>
                </div>
            </div>
        </nav>
    )
    
    
}
