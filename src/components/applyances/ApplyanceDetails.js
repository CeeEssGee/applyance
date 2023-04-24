import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Applyances.css"

export const ApplyanceDetails = () => {

    const { applyanceId } = useParams()
    const [applyances, setApplyances] = useState([])


    const [applyance, updatedApplyance] = useState({

    })

    const getAllApplyances = () => {
        fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user`)
            .then(response => response.json())
            .then((applyanceArray) => {
                setApplyances(applyanceArray)
            })
    }
    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances?_expand=tag&_expand=user&id=${applyanceId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleApplyance = data[0]
                    updatedApplyance(singleApplyance)

                })
        },
        [applyanceId]
    )



    const editButton = () => {
        if (applyUserObject.id === applyance.userId || applyUserObject.admin === true) {
            return <>
            <footer><Link to={`/all-applyances-edit/${applyanceId}`}><button>
    Edit ApplYance
    </button></Link></footer> 
            </>
        } else {
            return ""
        }
    }

    const deleteButton = () => {
        if (applyUserObject.id === applyance.userId || applyUserObject.admin === true) {
            return <>
            <footer><button
                        onClick={() => {
                            fetch(`http://localhost:8088/applyances/${applyanceId}`, {
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


    return (<article className="applyanceArticle">
    <section className="applyanceSection">
        <header className="applyance__header">{applyance.makeModel}</header>
        <div>
            <img src={`${applyance.picture}`}></img>
        </div>
        <div className="manualLink">
            <Link to={applyance.manual}>Link to Manual</Link>
        </div>
        <div>Owner: {applyance?.user?.firstName}</div>
        <div className="purchaseDiv">Purchase Information:
            <div>Purchase Date: {applyance.purchaseDate}</div>
            <div>Purchase Price: {applyance.purchasePrice}</div>
            <div>Purchase Location: {applyance.purchaseLocation}</div>
            <div className="tag">{applyance?.tag?.location}</div>
        </div>
        {editButton()}
        {deleteButton()}
    </section>
    </article>)
}