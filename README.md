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

-----------------------------------------------------------------------------------------

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

Click the Create Character button next to the name input field to finalize a character creation.

#### Ability Scores
Enter a value between 1 and 30 in the ability scores box. The app will calculate an ability check bonus from this number.

![Create Player Ability Scores]()

#### Saving Throws
Saving throw bonuses are automatically calculated from ability scores. Clicking on the check box next to that saving throw indicates that character is proficient in that saving throw, and thus receives an additional bonus relative to their level

![Create Player Saving Throws]()

#### Hit Points
Enter a number in the Hit Points field to define that characters maximum hit points.

#### Armor Class
Enter a number in AC field to define that characters armor class

#### Speed
Enter a number in the Speed field to define that characters walking speed

#### Defenses
Select a set of values from any of the Resistances, Vulnerabilities, Damage Immunities, and Conditions Immunities fields to add those defenses that that players battle data. These inputs are multi selectors with searchable dropdown menus. Data can be deleted from this field by clicking the x next that value.

![Create Player HP, AC, Speed, and Defense]()

#### Skills
Select skills in which a character has proficiency or expertise from the Proficient Skills or Expert Skills dropdown menus. The bonus for each skill is calculated from that characters base stats and their level based proficiency bonus

![Create Player Abilities]()

#### Spells
The list on the left side of the Known Spells panel includes all spells available in the DnD 5E basic rule set. This list can be filtered by entering a search term in the input bar at the the top of the list. Click on a spell to add it to the characters list of known spells. That spell will then appear on the right side of the panel as a known spell. Click a spell on that side of the panel to remove it from the characters list of known spells.

![Create Player Spells]()

#### Other Equipment
Select weapons, armor, and potions from the appropriate dropdown menu to add that equipment to the characters battle data

![Create Player Equipment]()

-------------------------------------------------------------------------------------------

### Editing an Existing Character
Select the Edit Character button on the home page to edit an exiting character. This will redirect the user to to a directory of their existing characters. Click on one of those character links to open the create character page populated with data for that character.

![Edit Player Directory]()

From this page, the user can update any of the information they entered in the character creation screen. Once they are satisfied their selections, they can click the Update button to permanently update that characters battle data, or click the delete button to delete that character from their account.

----------------------------------------------------------------------------------------



