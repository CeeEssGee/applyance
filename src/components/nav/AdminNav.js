// tweaked for ApplYances
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


// Logout link + event listener
// export const NavBar = () => {
export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/applyances">All Applyances</Link>
            </li>

{/* update when user's page is ready */}     
            {/* <li className="navbar__item active">       
                <Link className="navbar__link" to="/customers">My ApplYances</Link>
            </li> */}

{/* update when add new form is ready */}
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/create">Add New ApplYance</Link>
            </li> */}

            {
                localStorage.getItem("apply_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("apply_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

