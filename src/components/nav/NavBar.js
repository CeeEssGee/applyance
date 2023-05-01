import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">

            {/* Home Link */}
            <li className="navbar__item navbar__home">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>

            {/* All ApplYances Link */}
            <li className="navbar__item navbar__all">
                <Link className="navbar__link" to="/all-applyances">All ApplYances</Link>
            </li>

            {/* My ApplYances Link */}
            <li className="navbar__item navbar__my">
                <Link className="navbar__link" to="/my-applyances">My ApplYances</Link>
            </li>

            {/* New ApplYance Form */}
            <li className="navbar__item navbar__add">
                <Link className="navbar__link" to="/new-applyance">Add New ApplYance</Link>
            </li>


            {/* Logout Link and removes user info from local storage*/}
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("apply_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}

