//  updated for Applyances
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { AdminNavBar } from "./AdminNavBar"
import { UserNavBar } from "./UserNavBar"

export const NavBar = () => {


    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    if (applyUserObject.admin) {
        return <AdminNavBar />
    }
    else {
        return <UserNavBar />
    }
}