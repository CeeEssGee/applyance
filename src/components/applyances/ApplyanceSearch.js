// Child of ApplyanceContainer.js
import "./Applyances.css"

// ApplyanceSearch component allows a user to input search terms by typing into a text field, which calls the setSearchTerms function that was passed down and updates the searchTerms state variable. This component takes setterFunction as a prop from its parent component.
export const ApplyanceSearch = ({ setterFunction }) => {
    return (
        <div>
            <input 
            onChange={(changeEvent) => {
                // this setterFunction allows the parent component to update its state with the user's search terms
                setterFunction(changeEvent.target.value)                
            }}
            type="text" placeholder="Enter search terms" />
        </div>
    )
}
