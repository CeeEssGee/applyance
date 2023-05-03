# ApplYances

ApplYances is an app where a family can keep information about their appliances and electronics in one place, making the manual and details easy to find. 

## Who is it for?

Anyone and everyone sharing a living space.

### Why do I need it?

Have you ever had an error code pop up on your fancy new washing machine at the worst possible time? When was the last time the filter on the dishwasher was cleaned? Did you even *know* that dishwashers had filters that needed to be cleaned? Yeah - me neither! 

This app is here to help! It's your one-stop-shop to keeping all the digital manuals to your appliances and electronics in one place. In addition, you can add warranty information, maintenance details, purchase location and price, and any other details to the Notes section so you'll always have everything together without tearing your house apart or searching the internet. 

### Technologies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Demo of the Application


https://user-images.githubusercontent.com/116823138/235941628-6f6fac7e-ed9b-491b-a94f-b4e11d9ed0a4.mp4


Click <a href="https://www.loom.com/share/844fc1af71454794905a3ffb41739265">here</a> if the preview demo video does not load automatically 

### Getting Started

*First, a note about authentication...*
This application uses mock authentication which is purely for demonstration purposes. Therefore the login code written here is completely insecure and would never be implemented in a professional application.

### Setup

1.  Clone this repository
2.  ```cd``` into the directory
3.  Install the necessary packages<br>
• ```npm install```<br>
• ```npm i --save react-dom react-router-dom reactstrap```<br>
• ```npm i --save bootstrap```<br>
• ```npm install json-server```
4.  ```mkdir api``` and ```touch database.json``` to create the database
5.  Copy and paste sample api below into the database
6.  Run ```json-server database.json -p 8088 -w``` from the api directory
7.  In a separate terminal, run npm start from the repository directory

### Sample API

You can copy and paste sample data to get an idea of how this app can be used

<details><summary>Click for Sample Data</summary>
<p>

```sh

{
  "users": [
    {
      "id": 1,
      "firstName": "Courtney",
      "lastName": "g",
      "email": "courtney@g.com",
      "password": "courtney",
      "isAdmin": true
    },
    {
      "id": 2,
      "firstName": "Sean",
      "lastName": "Gulledge",
      "email": "sean@g.com",
      "password": "courtney",
      "isAdmin": false
    },
    {
      "id": 3,
      "firstName": "Jeremy",
      "lastName": "Gibeault",
      "email": "jeremy@g.com",
      "password": "courtney",
      "isAdmin": true
    },
    {
      "email": "rick@g.com",
      "firstName": "Rick",
      "lastName": "G",
      "password": "courtney",
      "isAdmin": false,
      "id": 4
    },
    {
      "email": "admin@demo.com",
      "firstName": "Admin",
      "lastName": "Demo",
      "isAdmin": true,
      "id": 5
    },
    {
      "email": "user@demo.com",
      "firstName": "User",
      "lastName": "Demo",
      "isAdmin": false,
      "id": 6
    }
  ],
  "applyances": [
    {
      "id": 1,
      "makeModel": "Silhouette Cameo4",
      "picture": "/images/Cameo4.jpg",
      "manual": "https://drive.google.com/file/d/1x_i-qIs-R_1qpDt6Hu5Y4psMsyWINwve/view?usp=share_link",
      "modelNumber": "N/A",
      "serialNumber": "R201F431338",
      "userId": 1,
      "tagId": 5
    },
    {
      "id": 2,
      "makeModel": "Silhouette Portrait3",
      "picture": "/images/Portrait3.jpg",
      "manual": "https://drive.google.com/file/d/1B5adNBj-X7mDvC7_QcQilucA4LOd7Yak/view?usp=share_link",
      "modelNumber": "N/A",
      "serialNumber": "R108J110069",
      "userId": 1,
      "tagId": 5
    },
    {
      "userId": 2,
      "makeModel": "Ninja Mega Kitchen System",
      "picture": "/images/NinjaKitchenSystem.jpg",
      "manual": "https://drive.google.com/file/d/10uefldFpR4kEoNra72oZKQx4DXiJEaBU/view?usp=share_link",
      "modelNumber": "BL770 Series",
      "serialNumber": "12345",
      "id": 3,
      "tagId": 1
    },
    {
      "userId": 3,
      "makeModel": "Tasty Smart Induction Cooktop",
      "picture": "/images/TastyCooktop.jpg",
      "manual": "https://drive.google.com/file/d/1EFfWK0kKh_cMK2alGFrJFtd4GWHynU2F/view?usp=share_link",
      "modelNumber": "N/A",
      "serialNumber": "N/A",
      "id": 4,
      "tagId": 14
    },
    {
      "userId": 3,
      "makeModel": "Chamberlain Garage Door Opener",
      "picture": "/images/ChamberlainGarageDoorOpener.jpg",
      "manual": "https://drive.google.com/file/d/1SelC7lZE5nHBY8LlDZYdrfJIbauBn0AI/view?usp=share_link",
      "modelNumber": "N/A",
      "serialNumber": "N/A",
      "id": 5,
      "tagId": 4
    },
    {
      "userId": 4,
      "makeModel": "Vicks Warm Mist Humidifier",
      "picture": "/images/VicksHumidifier.jpg",
      "manual": "https://drive.google.com/file/d/1rjG6vOhf3A7Ni0lu5VRLKcDuCrVEfNbs/view?usp=share_link",
      "modelNumber": "N/A",
      "serialNumber": "N/A",
      "id": 6,
      "tagId": 8
    },
    {
      "userId": 1,
      "makeModel": "Kitchen Aid Mixer",
      "picture": "http://res.cloudinary.com/dq4w2zwr2/image/upload/v1683020579/luvc7ovwxtusntanqcbd.jpg",
      "manual": "https://drive.google.com/file/d/1x_v2_mxZzU_hdtKJNFtd4rqp0P9jy0ap/view?usp=share_link",
      "modelNumber": "N/A",
      "serialNumber": "9708371",
      "id": 7,
      "tagId": 1
    },
    {
      "userId": 1,
      "makeModel": "Sharp Carousel Convection Microwave Oven",
      "picture": "/images/SharpCarouselConvectionMicrowaveOven.jpg",
      "manual": "https://drive.google.com/file/d/11lCX0LVrtEJE5Zp2EmATyb76BGsP6HFZ/view?usp=share_link",
      "modelNumber": "R-820BK-F",
      "serialNumber": "81980",
      "id": 8,
      "tagId": 1
    },
    {
      "userId": 1,
      "makeModel": "Whirlpool Refrigerator",
      "picture": "http://res.cloudinary.com/dq4w2zwr2/image/upload/v1683020479/yxbst5sptzguwtiomcei.jpg",
      "manual": "https://www.whirlpool.com/content/dam/global/documents/201306/owners-manual-W10505281-RevA.pdf",
      "modelNumber": "GD5RHAXS800",
      "serialNumber": "ST1634682",
      "tagId": 1,
      "id": 9
    },
    {
      "userId": 1,
      "makeModel": "Maytag Washer",
      "picture": "/images/MaytagWasher.jpg",
      "manual": "https://drive.google.com/file/d/17zVvObQg5Z1dy9W8cz9UtjzUvQM1wSMY/view?usp=share_link",
      "modelNumber": "MVWB835DW4",
      "serialNumber": "C91474341",
      "tagId": 3,
      "id": 10
    },
    {
      "userId": 1,
      "makeModel": "Maytag Dryer",
      "picture": "/images/MaytagDryer.jpg",
      "manual": "https://drive.google.com/file/d/1fIf5DFV-vGRdmX5geTWHjEsEV3Mh7Uij/view?usp=share_link",
      "modelNumber": "MEDB835DW4",
      "serialNumber": "M93304361",
      "tagId": 3,
      "id": 11
    },
    {
      "userId": 1,
      "makeModel": "GE Dishwasher",
      "picture": "/images/GEDishwasher.jpg",
      "manual": "https://drive.google.com/file/d/1HgtkEOiioMQayHgxUcV2f9rcNuHbz16A/view?usp=share_link",
      "modelNumber": "GSD5200G00BB",
      "serialNumber": "AD7783088",
      "tagId": 1,
      "id": 12
    },
    {
      "userId": 3,
      "makeModel": "Ninja Foodi",
      "picture": "/images/NinjaFoodi.jpg",
      "manual": "https://support.ninjakitchen.com/hc/en-us/article_attachments/4873530124060/FD400Series_IB_E_F_S_REV_Mv14_LR_20200728.pdf",
      "modelNumber": "FD402",
      "serialNumber": "K23KQ607Z1F2",
      "tagId": 1,
      "id": 13
    },
    {
      "userId": 1,
      "makeModel": "GE Range/Oven",
      "picture": "https://cdn11.bigcommerce.com/s-pacto3wrn2/images/stencil/500x659/products/9979/598056/d15778e1f2163de5ff6ce295c8504ad4851945e9__62011.1.jpg",
      "manual": "https://products-salsify.geappliances.com/image/upload/s--RzGJV_nI--/91f5a7399bc2698c034b981a667db4f21c931d80.pdf?_ga=2.242967810.1265937768.1682627489-120250239.1682627489",
      "modelNumber": "J DP39B0W6BB",
      "serialNumber": "GG4 54308Q",
      "tagId": 1,
      "id": 14
    },
    {
      "userId": 3,
      "makeModel": "Craftsman Air Compressor",
      "picture": "https://mobileimages.lowes.com/productimages/3436db6b-3191-4063-b5a3-b2323546171c/42715815.jpg?size=xl",
      "manual": "https://www.searspartsdirect.com/manual/pa4uz6k2rm-000247/craftsman-919166440-air-compressor-parts",
      "modelNumber": "919.166440",
      "serialNumber": "N/A",
      "tagId": 4,
      "id": 15
    },
    {
      "userId": 3,
      "makeModel": "Black & Decker Mouse Sander",
      "picture": "https://images.thdstatic.com/productImages/b3096995-4d6f-406c-bf91-f743cd1e589a/svn/black-decker-mouse-sanders-bdems600-64_1000.jpg",
      "manual": "https://images.homedepot-static.com/catalog/pdfImages/51/51127b8a-7165-4a35-856f-8bc427821fc8.pdf",
      "modelNumber": "BDEMS600",
      "serialNumber": "N/A",
      "tagId": 4,
      "id": 16
    },
    {
      "userId": 3,
      "makeModel": "Chef's Choice Knife Sharpener",
      "picture": "https://www.sharpeningsupplies.com/Assets/Images/0250100-z.jpg",
      "manual": "https://drive.google.com/file/d/1Cc6bhrVkWvPcgXS0Pcw-txoIB7TEgw11/view?usp=share_link",
      "modelNumber": "250",
      "serialNumber": "N/A",
      "tagId": 14,
      "id": 17
    },
    {
      "userId": 3,
      "makeModel": "Cuisinart Griddler",
      "picture": "/images/CuisinartGriddler.jpg",
      "manual": "https://www.cuisinart.com/globalassets/catalog/appliances/grills/griddler/gr-4n.pdf",
      "modelNumber": "GR-4N",
      "serialNumber": "N/A",
      "tagId": 14,
      "id": 18
    },
    {
      "userId": 3,
      "makeModel": "SinuPulse Elite",
      "picture": "https://m.media-amazon.com/images/I/71RImiFxywL._AC_SX466_.jpg",
      "manual": "https://cdn.shopify.com/s/files/1/0160/0779/0646/files/Sinupulse_-_User_Guide_0815.pdf?v=1613794312",
      "modelNumber": "SP220",
      "serialNumber": "N/A",
      "tagId": 9,
      "id": 19
    },
    {
      "userId": 1,
      "makeModel": "Shark FlexStyle",
      "picture": "http://res.cloudinary.com/dq4w2zwr2/image/upload/v1682957624/jehwyysn49muxumchvv4.jpg",
      "manual": "https://support.sharkclean.com/hc/en-us/article_attachments/5705591946140/HD400_Series_Warning_Insert_E_F_S_MP_Mv3_220621.pdf",
      "modelNumber": "HD400",
      "serialNumber": "N/A",
      "tagId": 9,
      "id": 21
    },
    {
      "userId": 2,
      "makeModel": "Shark IonFlex Vacuum",
      "picture": "http://res.cloudinary.com/dq4w2zwr2/image/upload/v1683017358/li7okedou1tvqgrqdmfn.jpg",
      "manual": "https://support.sharkclean.com/hc/en-us/article_attachments/4402165895186/IF200_IF250Series_Manual_E_20180620_LR.pdf",
      "modelNumber": "IF200/250, IC205, UF280",
      "serialNumber": "N/A",
      "tagId": 13,
      "id": 22
    },
    {
      "userId": 3,
      "makeModel": "Shark IonFlex Vacuum",
      "picture": "http://res.cloudinary.com/dq4w2zwr2/image/upload/v1683017639/txcly7tx5pz95ubtignd.jpg",
      "manual": "https://support.sharkclean.com/hc/en-us/article_attachments/4402165895186/IF200_IF250Series_Manual_E_20180620_LR.pdf",
      "modelNumber": "IF200/250, IC205, UF280",
      "serialNumber": "N/A",
      "tagId": 12,
      "id": 24
    }
  ],
  "notes": [
    {
      "id": 1,
      "description": "Purchased additional blade June 2022",
      "applyanceId": 1
    },
    {
      "id": 2,
      "description": "Purchased additional mats April 2023",
      "applyanceId": 1
    },
    {
      "description": "Rarely use the convection, if ever",
      "applyanceId": 8,
      "id": 3
    },
    {
      "description": "Makes great smoothies",
      "applyanceId": 3,
      "id": 4
    },
    {
      "description": "Sean has used the Food Processor to make banana ice cream using frozen bananas",
      "applyanceId": 3,
      "id": 5
    },
    {
      "description": "No longer under warranty",
      "applyanceId": 10,
      "id": 6
    },
    {
      "description": "Uses Affresh cleaning tablets, the washer will notify you when it needs to run a cleaning cycle",
      "applyanceId": 10,
      "id": 7
    },
    {
      "description": "Purchased from Lowe's, installed by Jeremy",
      "applyanceId": 5,
      "id": 8
    },
    {
      "description": "Tried to clean the mats with blue Dawn dish detergent, didn't work out so well for me",
      "applyanceId": 1,
      "id": 9
    },
    {
      "description": "Makes delicious burgers",
      "applyanceId": 18,
      "id": 10
    },
    {
      "description": "Salmon patties were great too",
      "applyanceId": 18,
      "id": 11
    },
    {
      "description": "It's a little loud",
      "applyanceId": 5,
      "id": 12
    }
  ],
  "tags": [
    {
      "id": 1,
      "location": "Kitchen"
    },
    {
      "id": 2,
      "location": "Living Room"
    },
    {
      "id": 3,
      "location": "Laundry Room"
    },
    {
      "id": 4,
      "location": "Garage"
    },
    {
      "id": 5,
      "location": "Office/Craft Room"
    },
    {
      "id": 6,
      "location": "Sean's Room"
    },
    {
      "id": 7,
      "location": "Guest Bathroom"
    },
    {
      "id": 8,
      "location": "Master Bedroom"
    },
    {
      "id": 9,
      "location": "Master Bathroom"
    },
    {
      "id": 10,
      "location": "Back Porch/Yard"
    },
    {
      "id": 11,
      "location": " Other - Added to Notes "
    },
    {
      "id": 12,
      "location": "Linen Closet"
    },
    {
      "id": 13,
      "location": "Sean's Dorm"
    },
    {
      "id": 14,
      "location": "Pantry"
    }
  ]
}

```

</p>
</details>


### Entering the Site

Once the site launches, register by clicking on the "Not a memeber yet?" link.

Fill in the required information on the form. 
    Admins and users can add notes to any appliance
    Users can edit and delete only appliances they have added
    Admins can edit and delete all appliances

Demo User Credentials<br>
    User:   user@demo.com<br>
    Admin:  admin@demo.com

Once logged in, you will be directed to the Home page. From there, you can click on any of the navigation links. 

All ApplYances - shows a list of all appliances
    includes a Search Bar - allows the user to enter search terms and displays all appliances that includes the search terms in the Make and Model (Name)
My ApplYances - shows a list of appliances this logged in user has added
    includes a Search Bar - allows the user to enter search terms and displays all appliances that includes the search terms in the Make and Model (Name)
Add New ApplYance - displays a form to add a new appliance
Logout - logs out of the site

The linked Make and Model (Name) of each appliance will take you to a detailed view of that appliance, which shows the Owner, Model Number, Serial Number, and Notes (plus Add a Note button)

### To test the functionality:

#### As an Admin:
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

#### As a User:
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
#### Wireframe: 

![ApplYancesWireframe](https://user-images.githubusercontent.com/116823138/235769947-e6b10e1b-2e05-40d2-b1b3-b917a028d58e.jpg)

#### ERD: 

![ApplYancesERD](https://user-images.githubusercontent.com/116823138/235769916-94dd049b-f9ff-49bf-b0c1-9b6958477aba.jpg)

#### Proposal:

<a href="https://docs.google.com/document/d/1_2AHH5Ov9j3kx0sO7VPmUPp0Ljtjxib6I7lv8t0l4Wc/edit?usp=sharing" target="_blank">Link to Capstone Proposal</a>

### Created by: Courtney Gulledge

<a href="https://github.com/CeeEssGee" target="_blank"><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Courtney Gulledge GitHub" style="height: auto !important;width: auto !important;" /></a> <a href="https://www.linkedin.com/in/courtney-gulledge/" target="_blank"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="Courtney Gulledge LinkedIn" style="height: auto !important;width: auto !important;" /></a>
