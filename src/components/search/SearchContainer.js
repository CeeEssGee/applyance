// parent container of ApplyanceList, ApplyanceSearch, and NavBar?
import { useState } from "react"
import { ApplicationViews } from "../views/ApplicationViews"
import { ApplyanceList } from "../applyances/ApplyanceList"
import { ApplyanceSearch } from "../applyances/ApplyanceSearch"
import { NavBar } from "../nav/NavBar"

export const SearchContainer = () => {
    const [mySearchTerms, mySetSearchTerms] = useState("")

    return <>
        <ApplyanceSearch mySetterFunction={mySetSearchTerms}/>
        <ApplyanceList mySearchTermState={mySearchTerms}/>
        <ApplicationViews mySetterFunction={mySetSearchTerms}/>
    </>
}