// Child of MyApplyanceContainer.js
import "../applyances/Applyances.css"

// MyApplyanceSearch component allows a user to input search terms by typing into a text field, which calls the mySetSearchTerms function that was passed down and updates the mySearchTerms state variable. This component takes mySetterFunction as a prop from its parent component.
export const MyApplyanceSearch = ({ mySetterFunction }) => {
    return (
        <div>
            <input 
            onChange={(changeEvent) => {
                // this mySetterFunction allows the parent component to update its state with the user's search terms
                mySetterFunction(changeEvent.target.value)                
            }}
            type="text" placeholder="Enter search terms" />
        </div>
    )
}
