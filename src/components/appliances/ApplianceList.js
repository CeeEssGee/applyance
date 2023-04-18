import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./Appliances.css"

export const ApplianceList = () => {

    // reassign useNavigate() hook to navigate to be used later    
    const navigate = useNavigate()

    // initial array of appliances
    const [appliances, setAppliances] = useState([])

    // filtered array to be used to show a filtered list
    const [filteredAppliances, setFiltered] = useState([])
    

    // setting initial state so users will see the list of appliances because we will be using filtered in our JSX
    useEffect(
    () => {
        setFiltered(appliances)
    },
    [appliances] 
    )

    useEffect(
    () => {
        fetch(`http://localhost:8088/appliances?_sort=name&_expand=user`) 
        .then(response => response.json())
        .then((applianceArray) => {
            setAppliances(applianceArray)
        })
    
    },
    [] // empty to observe initial component state
    )

    return <>
    
    <article className="applianceArticle">
        {
            filteredAppliances.map(
                (appliance) => {
                    return <section key={appliance.id}
                    className="applianceSection">
                        <header>{appliance.make} {appliance.model}</header>
                        <div>
                            <img src={appliance.picture} />
                        </div>
                        <div className="manualLink"><Link to={appliance.manual}>Link to Manual</Link></div>
                    </section>
                }
            )
        }


    </article>
    
    </>


}