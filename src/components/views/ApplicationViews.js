import { AdminViews } from "./AdminViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {


    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    if (applyUserObject.admin) {
        // return admin view
        return <AdminViews />
    } else {
        // return user view
        return <UserViews />
    }
}

