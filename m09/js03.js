/*
	Tipton Turbines
     Program to display games results in a web table
     Author: Rylee Leavitt
     Date: 12/5/24

     Filename: js03.js
 */


/*The table head section should display the names of the days of the week. 
Although you can enter this content directly into the HTML file, you can also generate that content using an array. 
You will create an array of weekday names for that purpose.
*/

//Directly below the comment section, enter the following code for the weekDays array as shown in Figue 2.

//Days of the week
let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

//At the bottom of the file insert the following event listener to run the addWeekDays() function when the page is loaded:
window.addEventListener("load", addWeekDays); // This runs the addWeekDays function when the page loads

//Below this statement, add the following addWeekDays() function as described in Figure 5:
//Function to write weekday names into the calendar 
function addWeekDays () {
    let i = 0 ; // initial counter value

    //reference the collection of heading cells
    let headingCells = document.getElementsByTagName ("th"); //store the collection of all th elements in the document

    //write each of the 7 days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i]; //For each th cell, insert the name of a weekday

        //increase the counter by 1
        i++;
    } 
}

//At the bottom of the file insert an event listener to run the showGames() function when the page is loaded:
window.addEventListener("load", showGames); // This runs the showGames function when the page loads

/*Remember that because multiple functions can be attached to an event listener, 
this event listener will supplement the event listener created earlier for the addWeekDays() function.*/

//Below the event listener, add the following showGames() function as described in Figure 7.

//function to write game information into the calendar 
function showGames () {
    for (let i = 0; i < gameDates.length; i++){ //loop through each game played
        let gameInfo = " ";

        //open the paragraph
        switch (gameResults[i]) { //changed from gameInfo += "<p>"; RL
            case "W": 
                gameInfo += "<p class = 'win'>"; // Openening tab : Games won
                break;
                
            case "L": 
                gameInfo += "<p class = 'lose'>"; // Openening tab : Games Lost
                break;
                
            case "S": 
                gameInfo += "<p class = 'suspended'>"; // Openening tab : Games suspended
                break;
                   
            case "P": 
            gameInfo += "<p class = 'postponed'>"; // Openening tab : Games postponed
            break; // stops the switch statement when a match is found
        } 

        //include the opponent
        gameInfo += gameOpponents [i] + "<br>"; //diplay the name of the opponent for each game

        //include the result and score
        gameInfo += gameResults [i] + ": (" + runsScored [i] + "-" + runsAllowed [i] + ")"; //display the game result and score

        //Directly above the comment for closing the paragraph insert the following else if statement (see Figure 11).
        //Display innings played for suspended, shortened, or extra-inning games
        if (gameInnings [i] < 5) {
            gameInfo += " [" + gameInnings [i] + "] ***"; //Display suspended games as [innings] ***
        } else if (gameInnings [i] < 9){
            gameInfo += " [" + gameInnings [i] + "] *"; //Display shortened games as [innings] *
        } else if (gameInnings [i] > 9){
            gameInfo += " [" + gameInnings [i] + "] "; //Display extra-inning games as [innings] 
            // Dont do anything for games that go for 9 innings
        }

        //Close the paragraph 
        gameInfo += "</p>";

        //write the information into a table cell
        let tableCell = document.getElementById (gameDates [i]);
        
        //write the content into the table cell matching the game data
        tableCell.insertAdjacentHTML ("beforeEnd", gameInfo) 
        // beforeEnd : insert the content directly before the closing element's closing tab

        //display the game location
        if (gameLocations [i] === "h") {
            gameInfo += "Vs. "; //the game is at home diplay vs. 
        } else if (gameLocations[i] === "a"){
            gameInfo += "@ "; //the game is away, display @
        }
    }
}

/*There are only two possible locations for Tipton’s game: home (indicated by "h" in the gameLocations array) and away 
(indicated by "a"). The calendar should display the location using “vs.” for home games and “@” for away games as in “vs. 
Bettendorf” or “@ Marion”. Use an else if statement now to write the home/away information on the game calendar. 

Return to the js03.js file in your code editor and scroll down to the showGames() function.

Directly after the statement that writes the opening <p> tag, insert the following else if statement as shown in Figure 9.*/