import { useNavigate, useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Applyances.css"


export const ApplyanceEdit = () => {


    const { applyanceId } = useParams()
    const navigate = useNavigate()

    const [applyance, editApplyance] = useState({
        makeModel: "",
        picture: "",
        manual: "",
        purchaseDate: "",
        purchasePrice: 0,
        purchaseLocation: "",
        tagId: ""
    })

    
    const [tags, setTags] = useState([])

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
            fetch(`http://localhost:8088/applyances/${applyanceId}`)
                .then(response => response.json())
                .then((data) => {
                    const applyanceArray = data
                    editApplyance(applyanceArray)

                })
        },
        [applyanceId]
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        return fetch(`http://localhost:8088/applyances/${applyance.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applyance)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/all-applyances/${applyance.id}`)
            })

    }

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

            {/* fieldset for purchase date */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="purchaseDate">Purchase Date: </label>
                    <textarea
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={applyance.purchaseDate}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.purchaseDate = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.purchaseDate}</textarea>
                </div>
            </fieldset>

            {/* fieldset for purchase price */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="purchasePrice">Purchase Price: </label>
                    <textarea
                        required autoFocus
                        type="number"
                        className="form-control"
                        value={applyance.purchasePrice}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.purchasePrice = parseFloat(evt.target.value)
                                editApplyance(copy)
                            }
                        }>{applyance.purchasePrice}</textarea>
                </div>
            </fieldset>

            {/* fieldset for location */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Purchase Location: </label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={applyance.purchaseLocation}
                        onChange={
                            (evt) => {
                                const copy = { ...applyance }
                                copy.purchaseLocation = evt.target.value
                                editApplyance(copy)
                            }
                        }>{applyance.purchaseLocation}</textarea>
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save ApplYance
            </button>
        </form>
    </>
}