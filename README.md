# Hunters Mark
## Dungeons and Dragons 5E Dashboard

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Links
- Deployed [https://hunters-mark.herokuapp.com/](https://hunters-mark.herokuapp.com/)
- Repository [https://github.com/jdmarty/actionSurge](https://github.com/jdmarty/actionSurge)

## Welcome to Hunters Mark
This application combines a suite of crucial DM tools into one minimalist experience that allows a DM to track critical combat information like initiative, hit points, positioning, and monster statistics from a single application. It incorporates these tools along with a dice rolling application, simple player creation platform, and access to an open source API [http://www.dnd5eapi.co/](http://www.dnd5eapi.co/) that gives a DM access to the basic DnD 5E rule set.

## How To Use

### Logging In
All links from the home page will redirect the user to the login page if they have not already logged in (since access to user-created player avatars requires an account).

To login and existing user, enter a username and password in the appropriate fields and click Login.

![Hunters Mark Login Page](https://github.com/jdmarty/actionSurge/blob/main/images/login-snip.PNG)

To create a new account, click Sign Up next to the Login button to be redirected to the Create an Account page. From this page enter the desired username, email, and password in the appropriate fields. Once the form is completely filled 

![Hunters Mark Signup page](https://github.com/jdmarty/actionSurge/blob/main/images/signup-snip.PNG)

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

![Create Player Required Fields](https://github.com/jdmarty/actionSurge/blob/main/images/required-info-snip.PNG)

All other fields provide additional information to improve the battle experience.

Click the Create Character button next to the name input field to finalize a character creation.

#### Ability Scores
Enter a value between 1 and 30 in the ability scores box. The app will calculate an ability check bonus from this number.

![Create Player Ability Scores](https://github.com/jdmarty/actionSurge/blob/main/images/ability-scores-snip.PNG)

#### Saving Throws
Saving throw bonuses are automatically calculated from ability scores. Clicking on the check box next to that saving throw indicates that character is proficient in that saving throw, and thus receives an additional bonus relative to their level

![Create Player Saving Throws](https://github.com/jdmarty/actionSurge/blob/main/images/saving-throws-snip.PNG)

#### Hit Points
Enter a number in the Hit Points field to define that characters maximum hit points.

#### Armor Class
Enter a number in AC field to define that characters armor class

#### Speed
Enter a number in the Speed field to define that characters walking speed

#### Defenses
Select a set of values from any of the Resistances, Vulnerabilities, Damage Immunities, and Conditions Immunities fields to add those defenses that that players battle data. These inputs are multi selectors with searchable dropdown menus. Data can be deleted from this field by clicking the x next that value.

#### Skills
Select skills in which a character has proficiency or expertise from the Proficient Skills or Expert Skills dropdown menus. The bonus for each skill is calculated from that characters base stats and their level based proficiency bonus

![Create Player Skills](https://github.com/jdmarty/actionSurge/blob/main/images/skills-snip.PNG)

#### Spells
The list on the left side of the Known Spells panel includes all spells available in the DnD 5E basic rule set. This list can be filtered by entering a search term in the input bar at the the top of the list. Click on a spell to add it to the characters list of known spells. That spell will then appear on the right side of the panel as a known spell. Click a spell on that side of the panel to remove it from the characters list of known spells.

![Create Player Spells](https://github.com/jdmarty/actionSurge/blob/main/images/spells-snip.PNG)

#### Other Equipment
Select weapons, armor, and potions from the appropriate dropdown menu to add that equipment to the characters battle data

![Create Player Equipment](https://github.com/jdmarty/actionSurge/blob/main/images/equipment-snip.PNG)

-------------------------------------------------------------------------------------------

### Editing an Existing Character
Select the Edit Character button on the home page to edit an exiting character. This will redirect the user to to a directory of their existing characters. Click on one of those character links to open the create character page populated with data for that character.

![Edit Player Directory](https://github.com/jdmarty/actionSurge/blob/main/images/edit-character-snip.PNG)

From this page, the user can update any of the information they entered in the character creation screen. Once they are satisfied their selections, they can click the Update button to permanently update that characters battle data, or click the delete button to delete that character from their account.

----------------------------------------------------------------------------------------

### Running a Battle
The user can select the Run Battle button on the home page to open the battle page. This is the home for the bulk of this applications features, including the battle grid, character information display, dice roller, and initiative tracker

![Battle Page]()

#### Adding a Character
Click the Add Character button above the battle grid to add a user-created character to the battle. Select a character from the modal to add that character to the battle. This list can be filtered by entering a search term in the input field at the top of the modal

#### Adding a Monster
Click the Add Character button above the battle grid to add a  monster from the 5th edition basic rules to the battle. Select a monster from the modal to add that monster to the battle. This list can be filtered by entering a search term in the input field at the top of the modal

#### Resizing the Grid
Select a dropdown option from the grid size input to set the size of your battle grid. NOTE that the grid is sized from the top left corner down, so resizing during a battle may cut off tokens in the lower or far right corners of the map

#### Initiative Tracker

![Battle Initiative Tracker](https://github.com/jdmarty/actionSurge/blob/main/images/initiative-snip.PNG)

Once at least on character or monster has been added to the battle, their card will be added to the initiative tracker and the initiative options will appear. 

- Initiative for all combatants can be rolled automatically by clicking the Roll Initiative button at the top of the initiative tracker.

- Initiative can be adjusted manually by altering the numerical value in the initiative field on a combatants card.

- Track the active combatant by clicking the Next Turn button at the top of the initiative tracker. This will cycle initiative to the next combatant in order, and highlight their character token on the battle grid.

- Click the red "X" on a combatants initiative card to remove that combatant from the battle.

- Click the save button at the top of the initiative tracker to locally store battle data, including current hit points, initiative, and grid position.

#### Combatant Details

![Battle Combatant Details]()

Click on a combatant's initiative card or grid token to view details about that combatant. When initiative cycles, this panel will automatically update to display the details of the next combatant in the initiative count.

- Update the value next to the red heart on the details panel to change that combatants hit points value. Current hit points are displayed on both a combatants initiative card and battle token.

- Click on a combatants ability score or saving throw card to make a simple d20 check. All rolls will be made in the Dice Roller panel (see section below)

- Click on a combatants skill or proficiency element to make a simple d20 check for that ability or saving throw

- The actions that a monster may perform are listed below their proficiencies, including their hit bonus and damage rolls.

- A player characters weapons, spells, potions, and armor are listed below their skills

#### Dice Roller

![Battle Dice Roller](https://github.com/jdmarty/actionSurge/blob/main/images/dice-roller-snip.PNG)

The dice roller panel can be used to perform basic dice rolls with any of the standard dice types. To use this feature

1. Enter the number of dice to roll in the first input field
2. Select the type of dice to roll in the second input field
3. Enter the modifier to be added after rolls are completed in the third input field.
4. Click the Roll button to roll all selected dice and report the sum of all dice rolls as the result

This feature can also perform a few special types of roll
- Click the ADV button to make a roll with advantage (roll two d20, add the modifier to each roll, and report the highest value as the result)
- Click the DIS button to make a roll with disadvantage (roll two d20, add the modifier to each roll, and report the lowest value as the result)

Once dice have been added to the pool, a graphic representation of each di will be rendered. Click on that di to perform an individual roll or re-roll of that di.

#### Battle Grid

![Battle Grid](https://github.com/jdmarty/actionSurge/blob/main/images/battle-grid-snip.PNG)

Once a character or monster is added to the battle, a token representing that character is added to the battle grid. 

This token will have a name generated from that combatants initials. Green token are player characters, red tokens are monsters. Hover over a token to view that characters name. The token with a golden outline is at the top of the initiative order

Combatants can be repositioned on the battle grid by dragging and dropping their token. Clicking on a combatants token will display that combatants information on the Combatant Details panel

Token size is calculated based on that monsters size category (Large, Huge, Gargantuan, etc...)

#### Resetting a Battle
Click the red Reset Battle button to open a dialog box that will ask for confirmation before clearing the battle. Click yes to remove all characters from the battle and clear any locally stored battle data

-------------------------------------------------------------------------------------------

## Credits

This application was created as a solo project by UCI Full Stack Flex Code Bootcamp student (Joshua Marty)[https://www.linkedin.com/in/joshua-marty-22a544a2/]

## License

This project uses the ISC license