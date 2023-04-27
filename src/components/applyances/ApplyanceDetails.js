// need to add a modal input form
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Applyances.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';




export const ApplyanceDetails = () => {

    // useParams hook to obtain the applyanceId based on the selected applyance URL
    const { applyanceId } = useParams()

    // useNavigate hook to navigate to another URL
    const navigate = useNavigate()

    // useState hook to observe the initial state (applyance) and to update the state (updatedApplyance)
    const [applyance, updatedApplyance] = useState({})

    // useState hook to observe the initial state (notes) and to update the state (setNotes)
    const [notes, setNotes] = useState([])


// ***** MODAL *****
    // useState hook to observe the initial state (modal) and to update the state (setModal) - the default state is false (do not show the Modal)
    const [modal, setModal] = useState(false);

    // function, if invoked, the modal does not show
    const handleClose = () => setModal(false)
    // function, if invoked, the model shows
    const handleOpen = () => setModal(true)

    // functionality for the close button on the modal (X in upper right), which closes the modal by invoking the handleClose button
    const closeBtn = (
        <button className="close" onClick={handleClose}>
            {/* this gives it some height to make it visible */}
            &times;
        </button>
    );

    // useState hook to observe the initial state (note) and to update the state (addNote), includes the default properties of the initial state object
    const [note, addNote] = useState({
        description: "",
        applyanceId: applyanceId
    })

    // when the button is clicked, it has a parameter, and at that time, the instructions in this fx will run
    const handleAddNoteClick = (event) => {
        event.preventDefault() // this keeps the page from automatically reloading

        // JavaScript object with the required properties to send to the API
        const noteToSaveToAPI = {
            description: note.description,
            applyanceId: parseInt(note.applyanceId)
        }

        // fetch POST call to post a new object to the database
        fetch(`http://localhost:8088/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteToSaveToAPI)
        })
            .then(response => response.json())
            .then(() => {
                // closes the modal
                handleClose()
                // gets the updated notes from the state
                getUpdatedNotes()
                // navigates to the same page
                navigate(`/all-applyances/${applyanceId}`)
                
                // reloads the page so we can see the updated notes (the picture wasn't showing without it) - seems to be working now
                // reload() 

            })
    }

    const getUpdatedNotes = () => {
        fetch(`http://localhost:8088/notes?applyanceId=${applyanceId}&_expand=applyance&_sort=id&_order=desc`)
            .then(response => response.json())
            .then((notesArray) => {
                setNotes(notesArray)

            })
    }

    // function to reload page because picture doesn't show without it seems to be working now
    // const reload = () => {
    //     (window.location.reload())
    // }
// ***** END MODAL *****



    // useEffect hook that fetches the notes for the selected applyance matching the URL from the API sorted by note ID in descending order so it will display the most recent first
    useEffect(
        () => {
            fetch(`http://localhost:8088/notes?applyanceId=${applyanceId}&_expand=applyance&_sort=id&_order=desc`)
                .then(response => response.json())
                .then((notesArray) => { // assigned as notesArray
                    setNotes(notesArray) // updated the state
                })
        },
        []
    )


    // get apply user object out of local storage as a string
    const localApplyUser = localStorage.getItem("apply_user")
    // parse the string into an object with 2 keys (id and admin)
    const applyUserObject = JSON.parse(localApplyUser)


    // function that will get the most up-to-date data from the API of the list of applyances sorted by makeModel and expanded to show the user information
    const getAllApplyances = () => {
        fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user`)
            .then(response => response.json())
            .then((applyanceArray) => {
                updatedApplyance(applyanceArray)
            })
    }


    // useEffect hook that fetches the specific applyance with tag information and user information
    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances?_expand=tag&_expand=user&id=${applyanceId}`)
                .then(response => response.json())
                .then((data) => {
                    // assigned the returned applyance to singleApplyance variable
                    const singleApplyance = data[0]
                    // updated the state using the updatedApplyance function
                    updatedApplyance(singleApplyance)

                })
        },
        // we're watching for the applyanceId 
        [applyanceId]
    )


    // editButton function, to be invoked in the JSX 
    const editButton = () => {
        // logic that determines if the user is permitted to edit the applyance, and if so, the edit button will be visible
        if (applyUserObject.id === applyance.userId || applyUserObject.admin === true) {
            return <>
                <footer><Link to={`/all-applyances-edit/${applyanceId}`}><button>
                    Edit ApplYance
                </button></Link></footer>
            </>
        } else {
            // if the user is not permitted to view the edit button, an empty string is shown 
            return ""
        }
    }

    // deleteButton function, to be invoked in the JSX
    const deleteButton = () => {
        // logic that determines if the user is permitted to delete the applyance, and if so, the delete button will be visible
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
            // if the user is not permitted to view the delete button, an empty string is shown 
            return ""
        }
    }


    // JSX to render what displays on the all-applyances/# website (http://localhost:3000/all-applyances/#)
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
                <div>Owner:  {applyance?.user?.firstName}</div>
                <div>Model Number:  {applyance.modelNumber}</div>
                <div>Serial Number:  {applyance.serialNumber}</div>
            </div>

            <footer>
                {editButton()}
                {deleteButton()}
            </footer>
        </section>
        <section className="applyanceNotes">
            {/* Modal Form */}
            <div>
                {/* When a user clicks the Add New Note, toggles the Modal to true/false (default is false) */}
                <Button onClick={handleOpen}>Add New Note</Button>

                <Modal
                    isOpen={modal}
                    toggle={handleOpen}
                    className="noteModal">
                    <Form
                    //   onSubmit={handleAddNoteClick}
                    >
                        <FormGroup>
                            <ModalHeader className=" border-0"
                                // toggle={handleClose} 
                                close={closeBtn}>
                                Add New Note
                            </ModalHeader>
                            <ModalBody className="text-left border-0">
                                <p className="modal-label">Please enter your notes</p>
                                <Input
                                    required autoFocus
                                    type="textarea"
                                    className="form-control"
                                    style={{
                                        height: "10rem"
                                    }}
                                    // value={note.description} 
                                    onChange={
                                        (evt) => {
                                            const copy = { ...note }
                                            copy.description = evt.target.value
                                            addNote(copy)
                                        }
                                    }
                                >
                                </Input>
                            </ModalBody>
                        </FormGroup>
                    </Form>
                    <ModalFooter className="modal-footer border-0">
                        <Button className="btn_secondary modal-btn" onClick={handleClose}>
                            Cancel
                        </Button>
                        &nbsp;&nbsp;
                        <Button className="btn btn_primary modal-btn" onClick={handleAddNoteClick}
                        >Save Note</Button>

                    </ModalFooter>

                </Modal>
            </div>
            {/* Modal Form */}



            <p></p>
            Notes:
            <div>
                {
                    applyanceId ?
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

