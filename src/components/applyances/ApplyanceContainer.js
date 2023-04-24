// parent container of ApplyanceList and ApplyanceSearch
import { useState } from "react"
import { ApplyanceSearch } from "./ApplyanceSearch"
import { ApplyanceList } from "./ApplyanceList"
import "./Applyances.css"



export const ApplyanceContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <ApplyanceSearch setterFunction={setSearchTerms}/>
        <ApplyanceList searchTermState={searchTerms}/>
    </>
}