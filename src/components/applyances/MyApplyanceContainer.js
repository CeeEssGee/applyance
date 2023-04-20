// parent container of ApplyanceList and ApplyanceSearch
import { useState } from "react"
import { MyApplyanceList } from "./MyApplyanceList"
import { MyApplyanceSearch } from "./MyApplyanceSearch"

export const MyApplyanceContainer = () => {
    const [mySearchTerms, mySetSearchTerms] = useState("")

    return <>
        <MyApplyanceSearch mySetterFunction={mySetSearchTerms}/>
        <MyApplyanceList mySearchTermState={mySearchTerms}/>
    </>
}