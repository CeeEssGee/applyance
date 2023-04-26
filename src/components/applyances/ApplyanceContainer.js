// parent container of ApplyanceList (list of applyances) and ApplyanceSearch (searching applyances)
import { useState } from "react"
import { ApplyanceSearch } from "./ApplyanceSearch"
import { ApplyanceList } from "./ApplyanceList"
import "./Applyances.css"



export const ApplyanceContainer = () => {

    // useState hook maintains a state variable (searchTerms) which is initially an empty string, passes setSearchTerms function into the ApplyanceSearch child component as a prop (setterFunction)
    const [searchTerms, setSearchTerms] = useState("")

    return <>

        {/* ApplyanceSearch component allows a user to input search terms by typing into a text field, which calls the setSearchTerms function that was passed down and updates the searchTerms state variable */}
        <ApplyanceSearch setterFunction={setSearchTerms}/>

        {/* ApplyanceList component receives the searchTermState prop from the parent and uses it to filter the list of applyances that it displays. If empty, it displays all applyances. Otherwise, it displays a filtered list based on the whether the make/model includes the searchTerms string */}
        <ApplyanceList searchTermState={searchTerms}/>
    </>
}

