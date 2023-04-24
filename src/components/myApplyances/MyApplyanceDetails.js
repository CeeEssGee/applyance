import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "../applyances/Applyances.css"


export const MyApplyanceDetails = () => {

    const { myApplyanceId } = useParams()

    const [applyance, updatedApplyance] = useState({})

    const [notes, setNotes] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/notes?applyanceId=${myApplyanceId}&_expand=applyance&_sort=id&_order=desc`)
                .then(response => response.json())
                .then((notesArray) => {
                    setNotes(notesArray)
                })
        },
        []
    )


    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)


    const getAllApplyances = () => {
        fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user`)
            .then(response => response.json())
            .then((applyanceArray) => {
                updatedApplyance(applyanceArray)
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances?_expand=tag&_expand=user&id=${myApplyanceId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleApplyance = data[0]
                    updatedApplyance(singleApplyance)

                })
        },
        [myApplyanceId]
    )


    const editButton = () => {
        if (applyUserObject.id === applyance.userId || applyUserObject.admin === true) {
            return <>
                <footer><Link to={`/all-applyances-edit/${myApplyanceId}`}><button>
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
                        fetch(`http://localhost:8088/applyances/${myApplyanceId}`, {
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

    return (<article className="detailsArticle">
        <section className="applyanceSection">
            <div>
                <header className="applyance__header">{applyance.makeModel}</header>
                <div className="tag">{applyance?.tag?.location}</div>
                <div className="manualLink">
                    <Link to={applyance.manual}>Link to Manual</Link>
                </div>
            </div>

            <div>
                <img src={`${applyance.picture}`}></img>
            </div>

            <div>
                <div>Owner: {applyance?.user?.firstName}</div>
                <div className="purchaseDiv">Purchase Information:
                    <div>Purchase Date: {applyance.purchaseDate}</div>
                    <div>Purchase Price: ${applyance.purchasePrice}</div>
                    <div>Purchase Location: {applyance.purchaseLocation}</div>
                </div>
            </div>

            <footer>
                {editButton()}
                {deleteButton()}
            </footer>
        </section>
        <section className="applyanceNotes">
            <button>Add New Note</button>
            <p></p>
            Notes:
            <div>
                {
                    myApplyanceId ?
                        notes.map(
                            (note) => {
                                return <div key={note.id} className="note">
                                    {note.description}
                                </div>
                            }
                        )
                        : ""
                }

            </div>
        </section>
    </article>)
}