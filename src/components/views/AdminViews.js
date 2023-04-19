import { Outlet, Route, Routes } from "react-router-dom"
import { ApplyanceList } from "../applyances/ApplyanceList"
import { MyApplyanceList } from "../applyances/MyApplyanceList"
import { ApplyanceForm } from "../applyances/ApplyanceForm"

export const AdminViews = () => {    
    return (
        <Routes>
            <Route path="/" element={
                <>
                <h1 className="title--main">ApplYances</h1>
                <div>Everything you need (and some of what you don't) for any applYance and electronic device you take the time to enter into the database</div>
                <p></p>
                <Outlet />
                </>
            }>

                {/* All ApplYances Page */}
                <Route path="all-applyances" element={ <ApplyanceList /> } />

                {/* My ApplYances Page */}
                <Route path="my-applyances" element={ <MyApplyanceList /> } />

                {/* Add New ApplYance Page */}
                <Route path="new-applyance" element={ <ApplyanceForm /> } />                

            </Route>
        </Routes>
    )
}