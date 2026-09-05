import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">
                <i className="bi bi-house-heart-fill"> </i>
                    NipponMove
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
                        <NavLink className="nav-link" to="/">
                            ホーム
                        </NavLink>

                        <NavLink className="nav-link" to="/search">
                            物件を探す
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
    
    
}
