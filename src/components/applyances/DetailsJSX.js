import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Card, CardHeader, CardSubtitle, CardBody, ListGroupItem, ListGroup } from 'reactstrap';


export const DetailsJSX = ({ applyance, editButton, deleteButton, handleOpen, setModal, addNote, handleAddNoteClick, modal, closeBtn, note, handleClose, applyanceId, notes }) => {
    return (
        <>
            <article className="detailsArticle">
                <Card
                    className="my-2"
                    color="white"
                    outline
                    style={{
                        width: '25rem'
                    }}
                >
                    <section className="applyanceSection">
                        <CardBody>
                            <CardHeader>
                                <header className="applyance__header">{applyance.makeModel}</header>
                            </CardHeader>
                            <CardSubtitle>
                                <div className="manualLink">
                                    <Link to={applyance.manual}>Link to Manual</Link>
                                </div>
                            </CardSubtitle>
                        </CardBody>

                        <div>
                            <img src={`${applyance.picture}`} alt="appliance"></img>
                        </div>

                        <CardBody className="card-bottom-half">
                            <div>
                                <div>Owner:  {applyance?.user?.firstName}</div>
                                <div>Model Number:  {applyance.modelNumber}</div>
                                <div>Serial Number:  {applyance.serialNumber}</div>
                                <div className="tag">{applyance?.tag?.location}</div>
                            </div>
                        </CardBody>
                        <footer>
                            {editButton()}
                            {deleteButton()}
                        </footer>
                    </section>
                </Card>

                <section className="applyanceNotes">
                    {/* Modal Form */}
                    <div>
                        {/* When a user clicks the Add New Note, toggles the Modal to true/false (default is false) */}
                        <Button className="notesButton" onClick={handleOpen}>Add New Note</Button>

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
                    <ListGroup>
                        <div>
                            {
                                applyanceId ?
                                    notes.map(
                                        (note) => {
                                            return <>
                                                <ListGroupItem>
                                                    <div key={note.id} className="note">
                                                        {note.description}
                                                    </div>
                                                </ListGroupItem>
                                            </>
                                        }
                                    )
                                    : ""
                            }

                        </div>
                    </ListGroup>

                </section>
            </article>
        </>)
}
