import { Link } from "react-router-dom"
import "./Applyances.css"

// get apply user object out of local storage
const localApplyUser = localStorage.getItem("apply_user") // a string
const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)



export const Applyance = ({ id, makeModel, picture, manual, userId }) => {



    return     <section className="applyanceSection">
        <header>
            <Link to={`/all-applyances/${id}`}>{makeModel}</Link>
        </header>
        <div className="picture">
            <img src={picture} />
        </div>
        <div className="manualLink">
            <Link to={manual}>Link to Manual</Link>
        </div>
   
    </section>
}