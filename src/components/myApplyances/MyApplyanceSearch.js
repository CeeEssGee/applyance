import "../applyances/Applyances.css"


export const MyApplyanceSearch = ({ mySetterFunction }) => {
    return (
        <div>
            <input 
            onChange={(changeEvent) => {
                mySetterFunction(changeEvent.target.value)                
            }}
            type="text" placeholder="Enter search terms" />
        </div>
    )
}