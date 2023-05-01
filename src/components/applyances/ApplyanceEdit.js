import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Applyances.css"

export const ApplyanceEdit = () => {

    // useParams hook to obtain the applyanceId based on the selected applyance URL
    const { applyanceId } = useParams()

    // useNavigate hook to navigate to another URL
    const navigate = useNavigate()

    // useState hook to observe the initial state (applyance) and to edit the state (editApplyance), includes the default properties of the initial state object
    const [applyance, editApplyance] = useState({
        makeModel: "", // default is empty string
        picture: "", // default is empty string
        manual: "", // default is empty string
        modelNumber: "", // default is empty string
        serialNumber: "", // default is empty string
        tagId: "" // default is empty string
    })

    // useState hook to observe the initial state (tags) and to update the state (setTags)
    const [tags, setTags] = useState([])

    // useEffect hook that fetches the tags sorted by location so they will show in alphabetical order
    useEffect(
        () => {
            fetch(`http://localhost:8088/tags?_sort=location`)
                .then(response => response.json())
                .then((tagArray) => { // assigned as tagArray
                    setTags(tagArray) // updated the state
                })
        },
        []
    )

    // useEffect hook that fetches the selected applyance
    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances/${applyanceId}`)
                .then(response => response.json())
                .then((data) => { // assigned as the selected applyance
                    const applyanceArray = data 
                    editApplyance(applyanceArray) // updated the state

                })
        },
        [applyanceId] // we're watching for the applyanceId
    )

    // when the button is clicked, it has a parameter, and at that time, the instructions in this fx will run
    const handleSaveButtonClick = (event) => {
        event.preventDefault() // this keeps the page from automatically reloading

        // updates database with our edits
        return fetch(`http://localhost:8088/applyances/${applyance.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applyance)
        })
            .then(response => response.json())
            .then(() => {
                // navigates the website to the selected applyance after saving the changes
                navigate(`/all-applyances/${applyance.id}`)
            })

    }

    // JSX to render what displays when pressing Edit ApplYance on the all-applyances/# URL
    return <>

        <form className="applyanceForm">
            <h2 className="applyanceForm__title">Edit ApplYance</h2>

            {/* fieldset for makeModel */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="makeModel">Make and Model: </label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "2rem"
                        }}
                        className="form-control"
                        value={applyance.makeModel}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.makeModel = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.makeModel}</textarea>
                </div>
            </fieldset>

            {/* fieldset for picture */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="picture">Picture: </label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={applyance.picture}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.picture = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.picture}</textarea>
                </div>
            </fieldset>

            {/* fieldset for manual */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manual">Manual: </label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={applyance.manual}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.manual = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.manual}</textarea>
                </div>
            </fieldset>

            {/* fieldset for tagId */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tagId">Location in the Home: </label>
                    <select id="tagId"
                        required autoFocus
                        className="form-control"
                        value={applyance.tagId}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.tagId = parseInt(evt.target.value)
                                editApplyance(copy)
                            }
                        }
                    ><option value="0">Select home location</option>
                        {
                            tags.map(
                                (tag) => {
                                    return <option key={tag.id}
                                        className="tagDropdown" value={tag.id}>
                                        {tag.location}
                                    </option>
                                }
                            )
                        }

                    </select>
                </div>
            </fieldset>

            {/* fieldset for modelNumber */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="modelNumber">Model Number: </label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={applyance.modelNumber}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.modelNumber = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.modelNumber}</textarea>
                </div>
            </fieldset>

            {/* fieldset for serialNumber */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Serial Numeber: </label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={applyance.serialNumber}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.serialNumber = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.serialNumber}</textarea>
                </div>
            </fieldset>

            <button
            // References the function above
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button-saveEdit">
                Save ApplYance
            </button>
        </form>
    </>
}

