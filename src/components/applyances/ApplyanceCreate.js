import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ApplyanceForm } from "./ApplyanceForm";
import "./Applyances.css"


export const ApplyanceCreate = () => {

    // useState hook to observe the initial state (applyance) and to update the state (update), includes the default properties of the initial state object
    const [applyance, updateApplyance] = useState({
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

    // when the button is clicked, it has a parameter, and at that time, the instructions in this fx will run
    const handleSaveButtonClick = (event) => {
        if (applyance.makeModel === "" || applyance.picture === "" || applyance.manual === "" || applyance.modelNumber === "" || applyance.serialNumber === "") {
            return window.alert("Please ensure that you have filled out all fields and uploaded a photo of the Applyance")
        }
        event.preventDefault() // this keeps the entire page from automatically reloading


        /* Sample ApplYance to match for dataToSendToAPI
            {
          "id": 1,
          "makeModel": "Silhouette Cameo4",
          "picture": "images/Cameo4.jpg",
          "manual": "https://drive.google.com/file/d/1x_i-qIs-R_1qpDt6Hu5Y4psMsyWINwve/view?usp=share_link",
          "modelNumber": "N/A"
          "serialNumber": "R201F431338",
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
                navigate(`/my-applyances`)
            })
    };

    // JSX to render what displays when clicking the Add New Applyance link in the NavBar (http://localhost:3000/new-applyance)
    return (
        <>
            <h2>Add a New Applyance</h2>
            <ApplyanceForm
                applyance={applyance}
                update={updateApplyance}
                handleSaveButtonClick={handleSaveButtonClick}
                tags={tags}
            />
        </>
    );
}