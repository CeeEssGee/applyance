import { AdminViews } from "./AdminViews"
import { FamilyViews } from "./FamilyViews"

export const ApplicationViews = () => {
// if statement for admin or family to route them to the admin versus family view

    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    if (applyUserObject.staff) {
        // return admin views
        return <AdminViews />
    }
    else {
        // return family views
        return <FamilyViews />
    }


}



