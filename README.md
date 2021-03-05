# Hunters Mark
## Dungeons and Dragons 5E Dashboard

## Welcome to Hunters Mark
This application combines a suite of crucial DM tools into one minimalist experience that allows a DM to track critical combat information like initiative, hit points, positioning, and monster statistics from a single application. It incorporates these tools along with a dice rolling application, simple player creation platform, and access to an open source API [http://www.dnd5eapi.co/](http://www.dnd5eapi.co/) that gives a DM access to the basic DnD 5E rule set.

## How To Use

### Logging In
All links from the home page will redirect the user to the login page if they have not already logged in (since access to user-created player avatars requires an account).

To login and existing user, enter a username and password in the appropriate fields and click Login.

![Hunters Mark Login Page]()

To create a new account, click Sign Up next to the Login button to be redirected to the Create an Account page. From this page enter the desired username, email, and password in the appropriate fields. Once the form is completely filled 

![Hunters Mark Signup page]()

### Home Page
After logging in or creating an account, the user will be redirected to the home page. From here, they can choose to:
- Create a new player character
- Edit an existing character
- Run a battle

### Creating A Character
The user can enter data describing their character on the Create Character page and sae that character in the application database for use in a battle. This works best when a character is transferred from an existing character sheet into this application

#### Required Inputs

All that is required to create a character is that the following fields have a value

- Name (text input)
- Level (select input)
- Race (select input)
- Class (select input)

![Create Player Required Fields]()

All other fields provide additional information to improve the battle experience.

#### Ability Scores
Enter a value between 1 and 30 in the ability scores box. The app will calculate an ability check bonus from this number.

![Create Player Ability Scores]()

#### Saving Throws
Saving throw bonuses are automatically calculated from ability scores. Clicking on the check box next to that saving throw indicates that character is proficient in that saving throw, and thus receives an additional bonus relative to their level

![Create Player Saving Throws]()

#### Hit Points
Enter a number in the hit points field to define that players maximum hit points


