import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const ApplyanceForm = () => {

    const [applyance, update] = useState({
        makeModel: "",
        picture: "",
        manual: "",
        purchaseDate: "",
        purchasePrice: 0,
        purchaseLocation: ""
    })


    const navigate = useNavigate()

    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        /* Sample ApplYance to match for data to send to API
            {
          "id": 1,
          "makeModel": "Silhouette Cameo4",
          "picture": "images/Cameo4.jpg",
          "manual": "https://drive.google.com/file/d/1x_i-qIs-R_1qpDt6Hu5Y4psMsyWINwve/view?usp=share_link",
          "purchaseDate": "2022-05-27",
          "purchasePrice": 339.99,
          "purchaseLocation": "Amazon",
          "userId": 1
            }
        */

        const dataToSendToAPI = {
            userId: applyUserObject.id,
            makeModel: applyance.makeModel,
            picture: applyance.picture,
            manual: applyance.manual,
            purchaseDate: applyance.purchaseDate,
            purchasePrice: applyance.purchasePrice,
            purchaseLocation: applyance.purchaseLocation
        }

        return fetch(`http://localhost:8088/applyances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/my-applyances")
            })
    }

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

            {/* fieldset for purchase date */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="purchaseDate">Purchase Date: </label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Enter purchase date"
                        value={applyance.purchaseDate}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.purchaseDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            {/* fieldset for purchase price */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="purchasePrice">Purchase Price: </label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter purchase price"
                        value={applyance.purchasePrice}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.purchasePrice = parseFloat(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            {/* fieldset for location */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Purchase Location: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter purchase location"
                        value={applyance.purchaseLocation}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.purchaseLocation = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                    Save ApplYance
            </button>
        </form>
    )
}