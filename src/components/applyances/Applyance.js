import { Link } from "react-router-dom"
import "./Applyances.css"




export const Applyance = ({ id, makeModel, picture, manual, userId, getAllApplyances, applyanceObject, location }) => {
    
// get apply user object out of local storage
const localApplyUser = localStorage.getItem("apply_user") // a string
const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)


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

    return (
    <section className="applyanceSection">
        <header>
            <Link to={`/all-applyances/${id}`}>{makeModel}</Link>
        </header>
        <div className="picture">
            <img src={picture} />
        </div>
        <div className="manualLink">
            <Link to={manual}>Link to Manual</Link>
        </div>
        <div className="tag">{location}</div>
        {editButton()}
        {deleteButton()}
    </section>
    )
}