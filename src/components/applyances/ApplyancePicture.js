// child to ApplyanceForm
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Applyances.css"

// when the button is pressed on ApplyanceForm, it will run the fx and then useEffect will be run and POST to the API
export const ApplyancePicture = ({ buttonPressed }) => {

    const [applyance, update] = useState({
        picture: "",
    })

    const dataToSendToAPI = {
        picture: applyance.picture,
    }

    useEffect(
    () => {
    // fetch POST call to post a new object to the database only if the picture is not an empty string
    if (dataToSendToAPI.picture !== "") {
    fetch(`http://localhost:8088/applyances`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSendToAPI)
    })
        .then(response => response.json())
        .then(() => {
        })

    }},
    [buttonPressed] // watching for the button to be pressed
    )
    


    return <>
            
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
            
            </>
}