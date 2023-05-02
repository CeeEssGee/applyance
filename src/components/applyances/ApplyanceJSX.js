// child of Applyance and MyApplyance (JSX code for both)
import { Link } from "react-router-dom"

export const ApplyanceJSX = ({ id, makeModel, location, manual, picture, editButton, deleteButton }) => {

    return (
        <>
        
        <section className="applyanceSection">
            <div>
                <header>
                    <Link to={`/all-applyances/${id}`}>{makeModel}</Link>
                </header>
                <div className="tag">{location}</div>
                <div className="manualLink">
                    <Link to={manual}>Link to Manual</Link>
                </div>
            </div>

            <div className="picture">
                <img className="img" src={picture} alt="appliance"/>
            </div>

            <footer>
                {editButton()}
                {deleteButton()}
            </footer>

        </section>
    
        </>
    )
}