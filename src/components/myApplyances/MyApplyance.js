// Child of MyApplyanceList.js
// Parent of ApplyanceJSX
import { Link } from "react-router-dom"
import "../applyances/Applyances.css"
import { ApplyanceJSX } from "../applyances/ApplyanceJSX"

// Receives several props from MyApplianceList.js
export const MyApplyance = ({ id, makeModel, picture, manual, userId, getAllApplyances, applyanceObject, location }) => {
    
    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    // If the current user is the "owner" of the appliance, they can see the edit button and are given permission to edit the appliance
    const editButton = () => {
        if (applyUserObject.id === userId || applyUserObject.admin === true) {
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

    // JSX to render what displays on the my-applyances website (http://localhost:3000/my-applyances)
    return (
    <>
    <ApplyanceJSX 
    id={id} 
    makeModel={makeModel} 
    picture={picture}
    manual={manual} 
    location={location}
    editButton={editButton}
    deleteButton={deleteButton}
    />
    </>
    )
}

