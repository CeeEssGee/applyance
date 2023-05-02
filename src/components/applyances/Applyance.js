// Child of ApplyanceList.js
// Parent of ApplyanceJSX
import { Link } from "react-router-dom"
import "./Applyances.css"
import { ApplyanceJSX } from "./ApplyanceJSX"

// Receives several props from ApplianceList.js
export const Applyance = ({ id, makeModel, picture, manual, userId, getAllApplyances, applyanceObject, location }) => {

    // get apply user object out of local storage as a string
    const localApplyUser = localStorage.getItem("apply_user") 
    // parse the string into an object with 2 keys (id and admin)
    const applyUserObject = JSON.parse(localApplyUser) 

    // If the current user is the "owner" of the appliance, they can see the edit button and are given permission to edit the appliance
    const editButton = () => {
        if (applyUserObject.id === applyanceObject.userId || applyUserObject.admin === true) {
            return <>
                <footer><Link to={`/all-applyances-edit/${applyanceObject.id}`}><button className="button-edit">
                    Edit ApplYance
                </button></Link></footer>
            </>
        } else {
            return ""
        }
    }

    // If the current user is the "owner" of the appliance, they can see the delete button are given permission to delete the appliance. 
    const deleteButton = () => {
        if ((applyUserObject.id === userId || applyUserObject.admin === true) && applyanceObject.id === id) {
            return <>
                <footer><button className="button-delete"
                    onClick={() => {
                        fetch(`http://localhost:8088/applyances/${id}`, {
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
        <ApplyanceJSX 
        id={id}
        makeModel={makeModel}
        location={location}
        manual={manual}
        picture={picture}
        editButton={editButton}
        deleteButton={deleteButton}
        />
    )
}

