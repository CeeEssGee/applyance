import { useEffect, useState } from "react";
import "./Applyances.css"
import { cloud_name, preset_key } from "../../_env";


export const ApplyanceForm = ({ applyance, update, handleSaveButtonClick }) => {


    // ***** Cloudinary code
    const UploadWidget = (clickEvent) => {
        clickEvent.preventDefault()
        let widget = window.cloudinary.createUploadWidget({
            cloudName: cloud_name,
            uploadPreset: preset_key
        },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log(result.info.url)
                    const copy = { ...applyance }
                    copy.picture = result.info.url
                    update(copy)
                }
            });
        widget.open()
    }
    // ***** End Cloudinary code

    // useState hook to observe the initial state (tags) and to update the state (setTags)
    const [tags, setTags] = useState([])

    // useEffect hook that fetches the tags sorted by location so they will show in alphabetical order
    useEffect(
        () => {
            fetch(`http://localhost:8088/tags?_sort=location`)
                .then(response => response.json())
                .then((tagArray) => {
                    setTags(tagArray)
                })
        },
        []
    )



    // JSX to render what displays when clicking the Add New Applyance link in the NavBar (http://localhost:3000/new-applyance)
    return (
        <form
            className="applyanceForm"
            // validation to fill out all form fields
            noValidate
        >

            {/* fieldset for makeModel */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="makeModel">Make and Model: </label>
                    <input
                        autoFocus
                        required
                        type="text"
                        className="form-control"
                        placeholder="Make and Model (GE Dishwasher)"
                        value={applyance.makeModel}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.makeModel = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <p></p>

            {/* fieldset for manual */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manual">Manual: </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Enter URL to Manual"
                        value={applyance.manual}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.manual = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <p></p>

            {/* fieldset for tagId */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tagId">Location in the Home: </label>
                    <select id="tagId"
                        required
                        className="form-control"
                        value={applyance.tagId}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.tagId = parseInt(evt.target.value)
                                update(copy)
                            }
                        }
                    ><option value="0">Select location in dropdown</option>
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
            <p></p>

            {/* fieldset for modelNumber */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="modelNumber">Model Number: </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Model Number (N/A if not applicable)"
                        value={applyance.modelNumber}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.modelNumber = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <p></p>

            {/* fieldset for serial number */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="serialNumber">Serial Number: </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Serial Number (N/A if not applicable)"
                        value={applyance.serialNumber}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.serialNumber = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <p></p>

            {/* fieldset for picture */}
            <fieldset>
                <div className="form-group">
                    <button
                        required
                        onClick={(clickEvent) => UploadWidget(clickEvent)}
                    >Upload Picture</button>
                </div>
                <div className="imagePreview">
                    {
                        applyance.picture !== ""
                            ? <>
                                <div><img src={applyance.picture} ></img>
                                </div>
                            </>
                            : <>(Image will preview here)</>
                    }
                </div>
            </fieldset>
            <p></p>

            <button
                type="submit"
                // References the handleSaveButtonClick function above
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save ApplYance
            </button>
        </form>
    )
}