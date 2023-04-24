// parent container of ApplyanceList and ApplyanceSearch
import { useState } from "react"
import { MyApplyanceList } from "./MyApplyanceList"
import { MyApplyanceSearch } from "./MyApplyanceSearch"
import "../applyances/Applyances.css"


export const MyApplyanceContainer = () => {
    const [mySearchTerms, mySetSearchTerms] = useState("")

    return <>
        <MyApplyanceSearch mySetterFunction={mySetSearchTerms}/>
        <MyApplyanceList mySearchTermState={mySearchTerms}/>
    </>
}