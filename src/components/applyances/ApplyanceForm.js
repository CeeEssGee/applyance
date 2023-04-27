import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Applyances.css"


export const ApplyanceForm = () => {

    // useState hook to observe the initial state (applyance) and to update the state (update), includes the default properties of the initial state object
    const [applyance, update] = useState({
        makeModel: "",
        picture: "",
        manual: "",
        modelNumber: "",
        serialNumber: "",
        tagId: ""
    })

    // useNavigate hook to navigate to another URL
    const navigate = useNavigate()

    // get apply user object out of local storage as a string
    const localApplyUser = localStorage.getItem("apply_user")
    // parse the string into an object with 2 keys (id and admin)
    const applyUserObject = JSON.parse(localApplyUser)

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

    useEffect(
    () => {
    fetch(`http://localhost:8088/applyances`) // do you need a return
    .then(response => response.json())
    .then((applyanceArray) => {
        const newApplyanceId = applyanceArray.length
    })
    },
    [applyances] //could be blank
    )
    

    // when the button is clicked, it has a parameter, and at that time, the instructions in this fx will run
    const handleSaveButtonClick = (event) => {
        event.preventDefault() // this keeps the page from automatically reloading

        /* Sample ApplYance to match for data to send to API
            {
          "id": 1,
          "makeModel": "Silhouette Cameo4",
          "picture": "images/Cameo4.jpg",
          "manual": "https://drive.google.com/file/d/1x_i-qIs-R_1qpDt6Hu5Y4psMsyWINwve/view?usp=share_link",
          "modelNumber": "akb52"
          "serialNumber": "258s23056",
          "userId": 1,
           "tagId": 5
            }
        */

        // JavaScript object with the required properties to send to the API
        const dataToSendToAPI = {
            userId: applyUserObject.id, // obtained from the login info
            makeModel: applyance.makeModel,
            picture: applyance.picture,
            manual: applyance.manual,
            modelNumber: applyance.modelNumber,
            serialNumber: applyance.serialNumber,
            tagId: applyance.tagId
        }

        // fetch POST call to post a new object to the database
        return fetch(`http://localhost:8088/applyances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                // display the my-applyances URL
                navigate(`/my-applyances/${newApplyanceId}`)
            })
    }


    // JSX to render what displays when clicking the Add New Applyance link in the NavBar (http://localhost:3000/new-applyance)
    return (
        <form className="applyanceForm">
            <h2 className="applyanceForm__title">New ApplYance</h2>

            {/* fieldset for makeModel */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="makeModel">Make and Model: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter make and model of new appliance"
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

            {/* fieldset for picture */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="picture">Picture: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter picture URL for new appliance"
                        value={applyance.picture}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.picture = evt.target.value
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
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter manual URL for new appliance"
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
                        required autoFocus
                        className="form-control"
                        value={applyance.tagId}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.tagId = parseInt(evt.target.value)
                                update(copy)
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
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter model number"
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
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter serial number"
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

            <button
                // References the function above
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save ApplYance
            </button>
        </form>
    )
}

