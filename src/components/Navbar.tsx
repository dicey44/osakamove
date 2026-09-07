import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg px-4">
            <NavLink className="navbar-brand fw-bold" to="/">
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
                    <NavHashLink className="nav-link" to="/">
                        ホーム
                    </NavHashLink>

                    <NavHashLink className="nav-link" smooth to="/#search">
                        物件を探す
                    </NavHashLink>
                </div>
            </div>
        </nav>
    )
    
    
}
