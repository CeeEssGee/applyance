import { useEffect, useState } from "react";
import "./Applyances.css"


export const ApplyanceForm = ({ applyance, update, handleSaveButtonClick }) => {

 
    // ***** Cloudinary code
    const UploadWidget = (clickEvent) => {
        clickEvent.preventDefault()
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dq4w2zwr2",
            uploadPreset: "fe_capstone"
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
            <h2 className="applyanceForm__title">New ApplYance</h2>

            {/* fieldset for makeModel */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="makeModel">Make and Model: </label>
                    <input
                        autoFocus
                        required 
                        type="text"
                        className="form-control"
                        placeholder="(GE Dishwasher)"
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
                    ><option value="0">Select in dropdown</option>
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
                    <input
                        required 
                        type="text"
                        className="form-control"
                        placeholder="(N/A if not applicable)"
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

            {/* fieldset for serial number */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="serialNumber">Serial Number: </label>
                    <input
                        required 
                        type="text"
                        className="form-control"
                        placeholder="(N/A if not applicable)"
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