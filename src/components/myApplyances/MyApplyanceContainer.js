// parent container of MyApplyanceList (list of my applyances) and MyApplyanceSearch (searching applyances)
import { useState } from "react"
import { MyApplyanceList } from "./MyApplyanceList"
// import { MyApplyanceSearch } from "./MyApplyanceSearch"
import "../applyances/Applyances.css"
import { ApplyanceSearch } from "../applyances/ApplyanceSearch"


export const MyApplyanceContainer = () => {

    // useState hook maintains a state variable (mySearchTerms) which is initially an empty string, passes mySetSearchTerms function into the MyApplyanceSearch child component as a prop (setterFunction)
    const [mySearchTerms, mySetSearchTerms] = useState("")

    return <>

    
        {/* MyApplyanceSearch component allows a user to input search terms by typing into a text field, which calls the mySetSearchTerms function that was passed down and updates the mySearchTerms state variable */}
        <ApplyanceSearch mySetterFunction={mySetSearchTerms}/>

        {/* MyApplyanceList component receives the mySearchTermState prop from the parent and uses it to filter the list of applyances that it displays. If empty, it displays all my applyances. Otherwise, it displays a filtered list based on the whether the make/model includes the mySearchTerms string */}
        <MyApplyanceList mySearchTermState={mySearchTerms}/>
    </>
}
