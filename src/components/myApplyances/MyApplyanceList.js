import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { MyApplyance } from "./MyApplyance"
import "./Applyances.css"

export const MyApplyanceList = ( {mySearchTermState} ) => {

    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    // reassign useNavigate() hook to navigate to be used later    
    const navigate = useNavigate()

    // initial array of applyances
    const [applyances, setApplyances] = useState([])

    // filtered array to be used to show a filtered list
    const [filteredApplyances, setFiltered] = useState([])

    // setting initial state so users will see the list of applyances because we will be using filtered in our JSX
    useEffect(
        () => {
            setFiltered(applyances)
        },
        [applyances]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user`)
                .then(response => response.json())
                .then((applyanceArray) => {
                    setApplyances(applyanceArray)
                })

        },
        [] // empty to observe initial component state
    )

    useEffect(
        () => {
            const myApplyances = applyances.filter(applyance => applyance.userId === applyUserObject.id)
            setFiltered(myApplyances)
        },
        [applyances] //could be blank
    )

    useEffect(
        () => {
            const mySearchedApplyances = applyances.filter(applyance => {
                return applyance.makeModel.toLowerCase().includes(mySearchTermState.toLowerCase())
            })
            setFiltered(mySearchedApplyances)
        },
        [ mySearchTermState ] //could be blank
        )

    return <>
        <h2>All ApplYances</h2>
        <article className="applyanceArticle">
            {
                filteredApplyances.map(
                    (applyance) => <MyApplyance key={`applyance--${applyance.id}`}
                    id={applyance.id}
                makeModel={applyance.makeModel}
                picture={applyance.picture}
                manual={applyance.manual}
                purchaseDate={applyance.purchaseDate}
                userId={applyance.userId}
                />
                )
            }


        </article>

    </>


}