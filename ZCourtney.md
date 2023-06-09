## Steps I've taken
Terminal
    npx create-react-app (myDirectoryName)
    cd (myDirectoryName)
    npm install --save react-router-dom
Github
    create and push to repository
Create
    API directory
        database.json
    components directory
        nav directory
        applYances directory
        assets directory
        auth directory
        views directory
database.json
    create some sample objects
Review Kandy Korner and tweak the below
    Applyances.js and .css - rename App.cs and App.js
    index.js - update App to Applyance.js
    Applyances.js 
    Applyances.css
    Login.css
    Login.js
    Register.js
    NavBar.css
    NavBar.js
    ApplicationViews.js
    Authorized.js
### Status: We have a visible site with working code!

## NavBar Branch
Create links for Home, All ApplYances, My ApplYances, Add New ApplYance - all currently take you to the home page
Create an AdminNavBar and UserNavBar
### Status: We have a visible NavBar with Links that all point to the root home page

## All ApplYances page
ApplYanceList.js in the ApplYances directory 
    wrote some basic code with comments
AdminNavBar
    Updated the link for All ApplYances
AdminViews
    Added Route for ApplYanceLIst
### Status: We have a page that renders with a picture and link to manual

## My ApplYances page
MyApplYanceList.js in ApplYances directory
    copied code from ApplYanceList.js
    added useEffect for filtered for myApplYances
AdminNavBar
    Updated the link for My ApplYances
Update UserNavBar and UserViews for All ApplYances and My ApplYances
### Status: We have working code for both All and My ApplYances for Admin and User

## Add New ApplYance page
ApplyanceForm.js in ApplYances directory
    create form
Update Admin and User NavBars and Views
### Status: We have a working form!

## Add ability to search ApplYances
ApplyanceSearch.js in ApplYances directory
    create simple search fx
User/AdminViews.js
    Add ApplyanceSearch Route
ApplyanceContainer.js in ApplYances directory
    Export fx with [searchTerms, setSearchTerms] = useState()
User/AdminViews.js
    Cut <ApplyanceSearch /> and <ApplyanceList /> and replace with <ApplyanceContainer />
ApplyanceContainer.js
    return <ApplyanceSearch /> and <ApplyanceList /> inside of a fragment
    set the props to pass down to the children:
        on the ApplyanceSearch, setterFunction={setSearchTerms}
        on ApplyanceList, searchTermState={searchTerms}
ApplyanceSearch.js
    update parameter to setterFunction (the prop from the parent), and it now has access to the value of the variable (setSearchTerms)
    write onChange function and use setterFunction
ApplyanceContainer.js
    add "" to the useState("") to bring an empty string as the initial value
ApplyanceList.js
    add { searchTermList } as the parameter to our component fx
    useEffect and observe searchTermState
    const searchedApplyances = applyances.filter(applyance => {
        return applyance.makeModel.toLowerCase().includes(searchTermState.toLowerCase())})
        setFiltered(searchedApplyances)
        }   
        [searchTermState]
        )
Do the same for MyApplyances
### Status - Search works for ApplYances and MyApplYances

## Edit an Applyance
ApplyanceDetails.js in Applyances directory
    export basic fx
User/AdminViews.js
    set a variable for ApplyanceId
ApplyanceDetails.js (applyanceId)
    Renders details for selected ApplYance
MyApplyanceDetails.js (myApplyanceId) - same steps
### Status - Detailed view works for All and My ApplYances

## Separate All and My Applyances
Created a myApplyances folder and moved the MyApplyances components
Updated User/AdminViews
### Status - Everything seems to be working, no errors

## Move search to NavBar or ApplicationView
Consdensed NavBars and Views - pushed to GitHub before lunch
### Status - Put on hold

## Edit an Applyance
ApplyanceEdit.js in Applyances directory
ApplyanceList.js
    update JSX with Edit button so applyance id is in the header and is a <Link> component that routes the user to /applyances/{id}/edit
ApplyanceEdit.js   
    copy code from ApplyanceDetails.js and tweak
ApplyanceViews.js
    Add ApplyanceEdit route
### Status - works for All Applyances/MyApplyances except I have to refresh when switching between users

## Delete an appliance
ApplyanceList.js
    Add a deleteButton function
MyApplyanceList.js
    Add a deleteButton function
### Status - works for All Applyances/MyApplyances except I have to refresh when switching between users

## Fix bug - Edit/Delete - Refresh between users
Moved variables for localApplyUser and applyUserObject to within the fx
### Status - bug is squashed

## Add location tags
ApplyanceList / MyApplyanceList
    Update fetch URL and add expand=tag
    Add location to props and use optional chaining
Applyance / MyApplyance
    add location as a parameter and add to JSX
Update the form to add tags using a dropdown
Made sure everything works on All and My lists and details
### Status - Everything seems to be working

## Show notes and add notes to each appliance
Updated My and All ApplyanceDetails modules to show notes for that individual appliance.
Create an Add New Note button on both modules
Modal pop-out works, but cursor doesn't automatically shift to the textarea
### Status - We're going to leave it as is

## Update purchase info to model number and serial number
Need to Update:
    database.json
        Added model number and serial number
        Left purchase information for now
    ApplyanceDetails
        Added model number and serial number
        Removed purchase information
    ApplyanceEdit
        Added model number and serial number
        Removed purchase information
    ApplyanceForm
    ApplyanceList
        Removed purchase information
    HomePage
    MyApplyanceDetails
        Added model number and serial number
        Removed purchase information
    MyApplyanceList
        Removed purchase information
    database.json
        removed purchase information
### Status - seems to be working fine

## Cloudinary Questions
Scripts for HTML - Where do we put it?
    <script
    src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"
    ></script>
I was able to get the upload button to show, but that was it. I moved all my files to a Zcloudinary directory and kept existing code. Committed and moved on.
### Status - not functioning

### Move upload image URL to a separate module
Separate module created, picture now posts in an separate object
    {
      "userId": 2,
      "makeModel": "Test",
      "manual": "https://m.media-amazon.com/images/I/61OVQFXu8mL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "modelNumber": "23425",
      "serialNumber": "5363467",
      "tagId": 2,
      "id": 21
    },
    {
      "picture": "https://m.media-amazon.com/images/I/61OVQFXu8mL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "id": 22
    }
Pushed branch to Github and continued on with Cloudinary
### Check with Josh to see if that's what we meant to do... I think so because we are going to be creating a different object on Cloudinary

## Cloudinary
Reunited modules and added Cloudinary with Jeremy's help
Phantom code removed
### Status - It works!!!

### Buggy delete button
Testing - logged in as sean@g.com
Added Test and test (no additional data)
    All Applyances page
        Delete Test and test is also deleted
    My Applyances page
        Delete Test and test is also deleted
    Test details page
        Delete Test and test is also deleted
    test details page
        Delete test and test is also deleted
Added Test and test (with additional data)
    It doesn't bug out if all data is added
Need validation to prevent buggy deletes
Added validation, and now I'm not having the bug anymore
### Status - Bug squashed

## CSS - Make it purty
Clean up some warnings
added font
### Status - uploaded to Github

### Refactor code 
Create form, edit form, and form on separate components to reuse the "form" portion
Make sure the ApplicationViews are updated
### Status - seems to be working

## Test all methods
Verify all edit's are updated
### Status - It alls seems to be working

## CSS
Added background color
Tweaked button and tag colors
https://coolors.co/a80874-b7fdfe-5ef38c-2b9720-343a1a
### Commit and merge before adjusting ReactStrap

## CSS tweaks using Reactstrap
Added Cards to the JSX for the ApplyanceJSX and DetailsJSX
Notes is to the right
### Commit and merge

## Password
Password functionality added to Login and Register
### Status - it works!



# WANT-TO-DO'S
Add a new tag?


# QUESTIONS


# TODO's
Styling
    Color scheme - https://coolors.co/aa8f66-ed9b40-ffeedb-61c9a8-ba3b46 
    Font - Agency 
    Add alt's for images: alt={'Photo of ' + applyance.makeModel} 
After adding a new applyance, stay on that applyance details page
Logic on picture for not submitting an incomplete form

# STRETCH
Add tags
Add password
Delete notes
Edit notes
Show most recent note on main page?
Archive applyances?
Filter on tags 
Stepper for the form?

## MODAL STRETCH
Modal works
    How do I get my cursor to automatically be positioned inthe text box without having to click in it? 
    Josh - cursor in test area: import useRef from react const inputRef = useRef(null); ref={inputRef} Did not work - gave me the below link (complicated but doable):
        https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes 



