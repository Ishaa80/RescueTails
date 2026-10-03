import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
    <>
    <header className="navbarr">
        <div className="container">
            <div className="header-name">
                <NavLink to="/"><b>RESCUETAILS </b></NavLink>
            </div>
            <nav className="main_nav">
                <ul>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Report</NavLink></li>
                    <li><NavLink to="/animalupdate">Update</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
    )
};