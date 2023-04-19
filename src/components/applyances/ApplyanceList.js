import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Applyances.css"

export const ApplyanceList = () => {

    // reassign useNavigate() hook to navigate to be used later    
    // const navigate = useNavigate()

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
        fetch(`http://localhost:8088/applyances?_sort=name&_expand=user`) 
        .then(response => response.json())
        .then((applyanceArray) => {
            setApplyances(applyanceArray)
        })
    
    },
    [] // empty to observe initial component state
    )

    return <>
    
    <article className="applyanceArticle">
        {
            filteredApplyances.map(
                (applyance) => {
                    return <section key={applyance.id}
                    className="applyanceSection">
                        <header>{applyance.makeModel}</header>
                        <div>
                            <img src={applyance.picture} />
                        </div>
                        <div className="manualLink"><Link to={applyance.manual}>Link to Manual</Link></div>
                    </section>
                }
            )
        }


    </article>
    
    </>


}