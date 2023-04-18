import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const UserNavBar = () => {
    const navigate = useNavigate()



    return (
        <ul className="navbar">
            <li className="navbar__item navbar__home">
                <Link className="navbar__link" to="/">Home</Link>
            </li>

            <li className="navbar__item navbar__all">
                <Link className="navbar__link" to="/">All ApplYances</Link>
            </li>

            <li className="navbar__item navbar__my">
                <Link className="navbar__link" to="/">My ApplYances</Link>
            </li>

            <li className="navbar__item navbar__add">
                <Link className="navbar__link" to="/">Add New ApplYance</Link>
            </li>

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("apply_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}

