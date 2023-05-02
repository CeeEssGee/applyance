import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';


export const DetailsJSX = ({ applyance, editButton, deleteButton, handleOpen, setModal, addNote, handleAddNoteClick, modal, closeBtn, note, handleClose, applyanceId, notes }) => {
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
                <img src={`${applyance.picture}`} alt="appliance"></img>
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
