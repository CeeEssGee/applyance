import { Outlet, Route, Routes } from "react-router-dom"
import { ApplianceList } from "../appliances/ApplianceList"

export const AdminViews = () => {    
    return (
        <Routes>
            <Route path="/" element={
                <>
                <h1 className="title--main">ApplYances</h1>
                <div>Everything you need (and some of what you don't) for any appliance and electronic device you take the time to enter into the database</div>
                <p></p>
                <Outlet />
                </>
            }>

                {/* All ApplYances Page */}
                <Route path="all-appliances" element={ <ApplianceList /> } />

            </Route>
        </Routes>
    )
}