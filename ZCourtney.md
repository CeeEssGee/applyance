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





<!-- TODO's -->
Fix applYances to applyances at the end of each branch
Flesh out single ApplYance.js page
Color scheme - https://coolors.co/aa8f66-ed9b40-ffeedb-61c9a8-ba3b46
Create link to show details plus notes for each item
    <div>Purchase Date: {applYance.purchaseDate}</div>
    <div>Purchase Price: {applYance.purchasePrice}</div>
    <div>Purchase Location: {applYance.purchaseLocation}</div>
To filter on tags - 01-08



<!-- STRETCH -->
Register.js
    Add password
Admin.js
    Add password
Delete notes
Show most recent note on main page?


