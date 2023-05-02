# ApplYances

ApplYances is an app where a family can keep information about their appliances and electronics in one place, making the manual and details easy to find. 

## Who is it for?

Anyone and everyone sharing a living space.

### Why do I need it?

Have you ever had an error code pop up on your fancy new washing machine at the worst possible time? When was the last time the filter on the dishwasher was cleaned? Did you even *know* that dishwashers had filters that needed to be cleaned? Yeah - me neither! 

This app is here to help! It's your one-stop-shop to keeping all the digital manuals to your appliances and electronics in one place. In addition, you can add warranty information, maintenance details, purchase location and price, and any other details to the Notes section so you'll always have everything together without tearing your house apart or searching the internet. 

### Technologies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Getting Started

*First, a note about authentication...*
This application uses mock authentication which is purely for demonstration purposes. Therefore the login code written here is completely insecure and would never be implemented in a professional application.

Once the site launches, register by clicking on the "Not a memeber yet?" link.

Fill in the required information on the form. 
    Admins and users can add notes to any appliance
    Users can edit and delete only appliances they have added
    Admins can edit and delete all appliances

Demo User Credentials<br>
    User:   user@demo.com
    Admin:  admin@demo.com

Once logged in, you will be directed to the Home page. From there, you can click on any of the navigation links. 

All ApplYances - shows a list of all appliances
    includes a Search Bar - allows the user to enter search terms and displays all appliances that includes the search terms in the Make and Model (Name)
My ApplYances - shows a list of appliances this logged in user has added
    includes a Search Bar - allows the user to enter search terms and displays all appliances that includes the search terms in the Make and Model (Name)
Add New ApplYance - displays a form to add a new appliance
Logout - logs out of the site

The linked Make and Model (Name) of each appliance will take you to a detailed view of that appliance, which shows the Owner, Model Number, Serial Number, and Notes (plus Add a Note button)

### Demo of the Application
<!-- Insert demo here -->

### To test the functionality:

### As an Admin:
1.  Click on All ApplYances:
        Verify you can Edit and Delete every appliance in the list
        Verify you can view the Manual by clicking the link
2.  Click on the Make and Model (Name) of an Applyance to navigate to the detailed view
        Verify you can Edit and Delete on the detailed view
        Verify you can view the Manual by clicking the link
        Verify you can Add New Note
        Verify you can view Notes
3. Click on My ApplYances
        Verify the listed appliances were added by the logged-in user
        Verify you can Edit and Delete every appliance in the list
        Verify you can view the Manual by clicking the link
4.  Click on the Make and Model (Name) of an Applyance from the MyApplYance list to navigate to the detailed view
        Verify you can Edit and Delete on the detailed view
        Verify you can view the Manual by clicking the link
        Verify you can Add New Note
        Verify you can view Notes
5.  Click on Add New ApplYance
        Verify you can fill out all the fields to add a new appliance
        Verify that the app will not let you add a new appliance without filling out all of the fields and uploading a picture
        Verify the new appliance shows in the My ApplYances list and that the Edit and Delete button show
6.  Click on the Logout link
        Verify that the Login page shows

### As a User:
1.  Click on All ApplYances:
        Verify you can Edit and Delete only appliances the logged-in user has added
        Verify you can view the Manual by clicking the link
2.  Click on the Make and Model (Name) of an Applyance to navigate to the detailed view
        Verify you can Edit and Delete an appliance the logged-in user has added on the detailed view
        Verify that you do not see the Edit and Delete button on an appliance that someone else has added
        Verify you can view the Manual by clicking the link
        Verify you can Add New Note
        Verify you can view Notes
3. Click on My ApplYances
        Verify the listed appliances were added by the logged-in user
        Verify you can Edit and Delete every appliance in the list
        Verify you can view the Manual by clicking the link
4.  Click on the Make and Model (Name) of an Applyance from the MyApplYance list to navigate to the detailed view
        Verify you can Edit and Delete on the detailed view
        Verify you can view the Manual by clicking the link
        Verify you can Add New Note
        Verify you can view Notes
5.  Click on Add New ApplYance
        Verify you can fill out all the fields to add a new appliance
        Verify that the app will not let you add a new appliance without filling out all of the fields and uploading a picture
        Verify the new appliance shows in the My ApplYances list and that the Edit and Delete button show
6.  Click on the Logout link
        Verify that the Login page shows

### Difficulties and Challenges
The biggest challenges I ran into were with Cloudinary and with my modal using Reactstrap. Both were new to me, and I spent way too many hours trying to figure them out on my own before raising my hand and asking for help. I also struggled with repeating my code in several places, and I went back and refactored. I feel like I'm dealing with a pile of spaghetti now, and that if I had done this at the beginning, my code would have been much neater. 

### Lessons Learned
• Push to Github frequently and write smaller tickets to work on<br>
• Hit MVP as early as possible and keep it simple - you can always build up from there with stretch goals<br>
• If you're stuck, and you can't figure out the right question to Google, ask for help<br>
• If you are reusing the same code, turn it into its own component and import it

### How the Application was Developed
I followed along with the Honey Rae's and Kandy Korner's curriculum for the most part. <br>
• Starter code similar to what was given for Kandy Korner<br>
• All ApplYance List<br>
• My ApplYance List<br>
• Add New ApplYance Form<br>
• ApplYance Search / My ApplYance Search<br>
• ApplYance Details / My ApplYance Details<br>
• Decision was made to change purchase information to model number and serial number, refactoring was done to that effect<br>
• Show Notes on the Details pages<br>
• Implemented ReactStrap for the Add New Notes Modal<br>
• Cloudinary for uploading pictures on Add New ApplYance form<br>
• Refactoring and CSS

### Planning
Wireframe: 

![ApplYancesWireframe](https://user-images.githubusercontent.com/116823138/235769947-e6b10e1b-2e05-40d2-b1b3-b917a028d58e.jpg)

ERD: 

![ApplYancesERD](https://user-images.githubusercontent.com/116823138/235769916-94dd049b-f9ff-49bf-b0c1-9b6958477aba.jpg)

#### Created by Courtney Gulledge

<a href="https://github.com/CeeEssGee" target="_blank"><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Courtney Gulledge GitHub" style="height: auto !important;width: auto !important;" /></a> <a href="https://www.linkedin.com/in/courtney-gulledge/" target="_blank"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="Courtney Gulledge LinkedIn" style="height: auto !important;width: auto !important;" /></a>
