// tweaked for ApplYances

import "./NavBar.css"
import { AdminNav } from "./AdminNav"
import { FamilyNav } from "./FamilyNav"


// Tickets link and logout link + event listener
export const NavBar = () => {

        // get apply user object out of local storage
        const localApplyUser = localStorage.getItem("apply_user") // a string
        const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and admin)
    
        if (applyUserObject.admin) {
            // return admin views
            return <AdminNav />
        }
        else {
            // return family views
            return <FamilyNav />
        }

}

