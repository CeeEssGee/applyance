import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Applyances.css"

export const MyApplyanceDetails = () => {

    // for admins
    const { myApplyanceId } = useParams()

    const [applyance, updatedApplyance] = useState({
        // makeModel: "Ninja Test",
        // picture: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        // manual: "https://drive.google.com/file/d/10uefldFpR4kEoNra72oZKQx4DXiJEaBU/view?usp=share_link",
        // user: {firstName: "Jason"},
        // purchaseDate: "2023-04-20",
        // purchasePrice: 4,
        // purchaseLocation: "Amazon"
    })

    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances?_expand=user&id=${myApplyanceId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleApplyance = data[0]
                    updatedApplyance(singleApplyance)

                })
        },
        [myApplyanceId]
    )


    

    return (<article className="applyanceArticle">
    <section className="applyanceSection">
        <header className="applyance__header">{applyance.makeModel}</header>
        <div>
            <img src={`${applyance.picture}`}></img>
        </div>
        <div className="manualLink">
            <Link to={applyance.manual}>Link to Manual</Link>
        </div>
        <div>Owner: {applyance?.user?.firstName}</div>
        <div className="purchaseDiv">Purchase Information:
            <div>Purchase Date: {applyance.purchaseDate}</div>
            <div>Purchase Price: {applyance.purchasePrice}</div>
            <div>Purchase Location: {applyance.purchaseLocation}</div>
        </div>
    </section>
    </article>)
}