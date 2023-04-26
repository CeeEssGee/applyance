// Child of ApplyanceList.js
import { Link } from "react-router-dom"
import "./Applyances.css"

// Receives several props from ApplianceList.js
export const Applyance = ({ id, makeModel, picture, manual, userId, getAllApplyances, applyanceObject, location }) => {

    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    // If the current user is the "owner" of the appliance, they can see the edit button and are given permission to edit the appliance
    const editButton = () => {
        if (applyUserObject.id === applyanceObject.userId || applyUserObject.admin === true) {
            return <>
                <footer><Link to={`/all-applyances-edit/${applyanceObject.id}`}><button>
                    Edit ApplYance
                </button></Link></footer>
            </>
        } else {
            return ""
        }
    }

    // If the current user is the "owner" of the appliance, they can see the delete button are given permission to delete the appliance. 
    const deleteButton = () => {
        if (applyUserObject.id === userId || applyUserObject.admin === true) {
            return <>
                <footer><button
                    onClick={() => {
                        fetch(`http://localhost:8088/applyances/${applyanceObject.id}`, {
                            method: "DELETE"
                        })
                            .then(() => {
                                getAllApplyances()
                            })
                    }}

                >
                    Delete ApplYance
                </button></footer>
            </>
        } else {
            return ""
        }
    }

    // JSX to render what displays on the all-applyances website (http://localhost:3000/all-applyances)
    return (
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
                <img className="img" src={picture} />
            </div>

            <footer>
                {editButton()}
                {deleteButton()}
            </footer>

        </section>
    )
}

