import { Link } from "react-router-dom"
import "./Applyances.css"


export const MyApplyance = ({ id, makeModel, picture, manual }) => {
    return <section className="applyanceSection">
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