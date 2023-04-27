// Parent to MyApplyance.js
// Child of MyApplyanceContainer.js
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { MyApplyance } from "./MyApplyance"
import "../applyances/Applyances.css"

// MyApplyanceList component receives the mySearchTermState prop from the parent and uses it to filter the list of applyances that it displays. If empty, it displays all applyances. Otherwise, it displays a filtered list based on the whether the make/model includes the mySearchTerms string
export const MyApplyanceList = ({ mySearchTermState }) => {

    // get apply user object out of local storage as a string
    const localApplyUser = localStorage.getItem("apply_user")
    // parse the string into an object with 2 keys (id and admin)
    const applyUserObject = JSON.parse(localApplyUser)

    // reassign useNavigate() hook to navigate to be used later    
    const navigate = useNavigate()

    // useState hook to observe the initial state (applyances) and to update the state (setApplyances)
    const [applyances, setApplyances] = useState([])

    // useState hook to observe the initial filtered state(filteredApplyances) and to update the state (setFiltered)
    const [filteredApplyances, setFiltered] = useState([])

    // setting filtered to initial state so users will see the list of applyances because we will be using filtered in our JSX
    useEffect(
        () => {
            setFiltered(applyances)
        },
        [applyances]
    )

    // Function that fetches the list of applyances from the API and sets the applyances state variable to the fetched array, allows us to use the function at a later time to get refreshed data from the API
    const getAllApplyances = () => {
        fetch(`http://localhost:8088/applyances?_sort=makeModel&_expand=user`)
            .then(response => response.json())
            .then((applyanceArray) => {
                setApplyances(applyanceArray)
            })
    }

    // useEffect hook that fetches the applyances sorted by makeModel alphabetically with the tag(Id) (location) expanded so we can access it
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

    // useEffect hook is used to update filteredApplyances to show only applyances that a person "owns" 
    useEffect(
        () => {
            const myApplyances = applyances.filter(applyance => applyance.userId === applyUserObject.id)
            setFiltered(myApplyances)
        },
        [applyances] //could be blank
    )

    // useEffect hook is used to update filteredApplyances when the searchTermState changes. Filters the applyances array based on teh search term u sing the filter method and sets the filtered array to filtererdApplyances using the setFiltered function
    useEffect(
        () => {
            const mySearchedApplyances = applyances.filter(applyance => {
                return applyance.makeModel.toLowerCase().includes(mySearchTermState.toLowerCase())
            })
            setFiltered(mySearchedApplyances)
        },
        [mySearchTermState] //could be blank
    )


    // JSX renders to a child (Applyance) with a key prop on the parent. The remaining props are passed to the MyApplyance component.
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
                        userId={applyance.userId}
                        getAllApplyances={getAllApplyances}
                        applyanceObject={applyance}
                        location={applyance?.tag?.location}
                    />
                )
            }


        </article>

    </>


}
