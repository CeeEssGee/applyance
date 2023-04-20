import { Outlet, Route, Routes } from "react-router-dom"
import { ApplyanceForm } from "../applyances/ApplyanceForm"
import { ApplyanceContainer } from "../applyances/ApplyanceContainer"
import { MyApplyanceContainer } from "../applyances/MyApplyanceContainer"
import { HomePage } from "../home/HomePage"

export const UserViews = () => {

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

                <Route path="home" element={<HomePage />} />


                {/* All ApplYances Page */}
                <Route path="all-applyances" element={<ApplyanceContainer />} />


                {/* My ApplYances Page */}
                <Route path="my-applyances" element={<MyApplyanceContainer />} />
                <Route path="my-applyances/:myApplyanceId" element={<MyApplyanceContainer />} />

                {/* Add New ApplYance Page */}
                <Route path="new-applyances" element={<ApplyanceForm />} />

            </Route>
        </Routes>
    )
}