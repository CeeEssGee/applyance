import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Applyances.css"
import { Applyance } from "./Applyance"

export const ApplyanceList = ({ searchTermState }) => {

    // get apply user object out of local storage
    const localApplyUser = localStorage.getItem("apply_user") // a string
    const applyUserObject = JSON.parse(localApplyUser) // an object with 2 keys (id and staff)

    // initial array of applyances
    const [applyances, setApplyances] = useState([])
    
    // filtered array to be used to show a filtered list
    const [filteredApplyances, setFiltered] = useState([])
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user&_expand=tag`)
                .then(response => response.json())
                .then((applyanceArray) => {
                    setApplyances(applyanceArray)
                })

        },
        [] // empty to observe initial component state
    )

    // setting initial state so users will see the list of applyances because we will be using filtered in our JSX
    useEffect(
        () => {
            setFiltered(applyances)
        },
        [applyances]
    )

    useEffect(
        () => {
            const searchedApplyances = applyances.filter(applyance => {
                return applyance.makeModel.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFiltered(searchedApplyances)
        },
        [searchTermState]
    )

    const getAllApplyances = () => {
        fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user`)
            .then(response => response.json())
            .then((applyanceArray) => {
                setApplyances(applyanceArray)
            })
    }




    return <>
        <h2>All ApplYances</h2>
        <article className="applyanceArticle">
            {
                filteredApplyances.map(
                    (applyance) => <Applyance key={`applyance--${applyance.id}`}
                        id={applyance.id}
                        makeModel={applyance.makeModel}
                        picture={applyance.picture}
                        manual={applyance.manual}
                        purchaseDate={applyance.purchaseDate}
                        userId={applyance.userId}
                        getAllApplyances={getAllApplyances}
                        applyanceObject={applyance}
                        location={applyance?.tag?.location}
                    />)
            }


        </article>

    </>


}