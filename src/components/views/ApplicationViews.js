import { Outlet, Route, Routes, Link } from "react-router-dom"
import { ApplyanceForm } from "../applyances/ApplyanceForm"
import { ApplyanceContainer } from "../applyances/ApplyanceContainer"
import { ApplyanceDetails } from "../applyances/ApplyanceDetails"
import { HomePage } from "../home/HomePage"
import { MyApplyanceContainer } from "../myApplyances/MyApplyanceContainer"
import { MyApplyanceDetails } from "../myApplyances/MyApplyanceDetails"
import { ApplyanceEdit } from "../applyances/ApplyanceEdit"


export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                {/* shows on all pages */}
                    <h1 className="title--main">
                        <Link to={`all-applyances`}><img src="/images/ApplYances.jpg" alt="appliance"/></Link>
                        </h1>
                    <div>Everything you need (and some of what you don't) for any appliance and electronic device you take the time to enter into the database</div>
                    <p></p>
                    <Outlet />
                </>
            }>
                {/* Home Page */}
                <Route path="home" element={<HomePage />} />

                {/* All ApplYances Page */}
                <Route path="all-applyances" element={<ApplyanceContainer />} />
                <Route path="all-applyances/:applyanceId" element={<ApplyanceDetails />} />
                <Route path="all-applyances-edit/:applyanceId" element={<ApplyanceEdit />} />

                {/* My ApplYances Page */}
                <Route path="my-applyances" element={<MyApplyanceContainer />} />
                <Route path="my-applyances/:myApplyanceId" element={ <MyApplyanceDetails /> } />
                <Route path="all-applyances-edit/:myApplyanceId" element={<ApplyanceEdit />} />

                {/* Add New ApplYance Page */}
                <Route path="new-applyance" element={<ApplyanceForm />} />

            </Route>
        </Routes>
    )
}

