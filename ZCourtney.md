<!-- Steps I've taken -->
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
<!-- Status: We have a visible site with working code! -->

<!-- NavBar Branch -->
Create links for Home, All ApplYances, My ApplYances, Add New ApplYance - all currently take you to the home page
Create an AdminNavBar and UserNavBar
<!-- Status: We have a visible NavBar with Links that all point to the root home page -->

<!-- All ApplYances page -->
ApplYanceList.js in the ApplYances directory 
    wrote some basic code with comments
AdminNavBar
    Updated the link for All ApplYances
AdminViews
    Added Route for ApplYanceLIst
<!-- Status: We have a page that renders with a picture and link to manual -->

<!-- My ApplYances page -->
MyApplYanceList.js in ApplYances directory
    copied code from ApplYanceList.js
    added useEffect for filtered for myApplYances
AdminNavBar
    Updated the link for My ApplYances
Update UserNavBar and UserViews for All ApplYances and My ApplYances
<!-- Status: We have working code for both All and My ApplYances for Admin and User -->

<!-- Add New ApplYance page -->
ApplyanceForm.js in ApplYances directory
    create form
Update Admin and User NavBars and Views
<!-- Status: We have a working form! -->

<!-- Add ability to search ApplYances -->
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
<!-- Status - Search works for ApplYances and MyApplYances -->

<!-- Edit an Applyance -->
ApplyanceDetails.js in Applyances directory
    export basic fx
User/AdminViews.js
    set a variable for ApplyanceId
ApplyanceDetails.js (applyanceId)
    Renders details for selected ApplYance
MyApplyanceDetails.js (myApplyanceId) - same steps
<!-- Status - Detailed view works for All and My ApplYances -->

<!-- Separate All and My Applyances -->
Created a myApplyances folder and moved the MyApplyances components
Updated User/AdminViews
<!-- Status - Everything seems to be working, no errors -->

<!-- Move search to NavBar or ApplicationView -->
Consdensed NavBars and Views - pushed to GitHub before lunch
<!-- Status - Put on hold -->

<!-- Edit an Applyance -->
ApplyanceEdit.js in Applyances directory
ApplyanceList.js
    update JSX with Edit button so applyance id is in the header and is a <Link> component that routes the user to /applyances/{id}/edit
<!-- QUESTION
Why do I have to refresh to get my edit button? -->
ApplyanceEdit.js   
    copy code from ApplyanceDetails.js and tweak
ApplyanceViews.js
    Add ApplyanceEdit route
<!-- Status - works for All Applyances/MyApplyances except I have to refresh when switching between users -->

<!-- Delete an appliance -->
ApplyanceList.js
    Add a deleteButton function
MyApplyanceList.js
    Add a deleteButton function
<!-- Status - works for All Applyances/MyApplyances except I have to refresh when switching between users -->




<!-- QUESTIONS -->
On All ApplYances/MyApplyances, why do I have to refresh for the Delete Button to show properly when I switch between users?


<!-- TODO's -->
Rewrite image uploads using Cloudinary
Flesh out single ApplYance.js page
Create link to show details plus notes for each item
    <div>Purchase Date: {applYance.purchaseDate}</div>
    <div>Purchase Price: {applYance.purchasePrice}</div>
    <div>Purchase Location: {applYance.purchaseLocation}</div>
To filter on tags - 01-08
Move search bar to NavBar? 
Color scheme - https://coolors.co/aa8f66-ed9b40-ffeedb-61c9a8-ba3b46
Font - Agency



<!-- STRETCH -->
Register.js
    Add password
Admin.js
    Add password
Delete notes
Show most recent note on main page?


