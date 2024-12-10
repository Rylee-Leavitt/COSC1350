"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Chapter case   

      Word Cloud   Generator
      Author: Rylee Leavitt
      Date:   12/6/24

      Filename:       js07.js
 */

/* Directly below the initial comment section, insert the following code to run an anonymous function in response
 to the change event (see Figure 1): */

document.getElementById ("getFile").onchange = function () {
      //retrieve information about the selected file
      let userFile = this.files [0];
      //userFile : files object selected by the user
      // this.files : file collection contains the files selected by the user

      /*Directly below the statement declaring the userFile variable, 
      add the following initial code for a try catch statement: */
      //verify that a text file is selected
      try {
            let isText = userFile.type.startsWith ("text"); // test whether the source file's mime type starts with text
            if (!isText) {
                  throw userFile.name + "is not a text file" // if it does not, it throughs an error
            }
      

      /*Within the anonymous function add the following commands to create a FileReader
      object and to load the contents of the userFile object as a text file.*/
                              
      //read the contents of the selected file
      let fr = new FileReader (); // create a file reader object
      fr.readAsText (userFile);  // load user file as a text file

      /*Next, apply the onload event handler to the file reader so when the document is complete
      and successfully loaded, its contents will be written to the web page.*/

      //once the file has finished loading, display in the page
      //when the document is loaded, write it's contents to the webpage
      let sourceDoc = document.getElementById ("wc_document");
            fr.onload = function () { 
                  sourceDoc.innerHTML = fr.result;

                  /*Within the anonymous function for the onload event handler, add the following code
                  to store the text of the source document (see Figure 4).*/
                  //store the text of the document, removing HTML tags
                  let sourceText = sourceDoc.textContent;

                  //Directly after the statement declaring the sourceText variable, add the following command to call the wordCloud() function:
                  //Generate the word cloud
                  wordCloud(sourceText); //Call the word cloud function using sourcetext as the argument
            }
      }

      /*Scroll down and directly after the onload anonymous function, insert the following code 
      closing the try statement and adding a catch statement for catching the thrown error. */

      // if error is caught
      // allert the user to select a text file
      catch (err) {
            window.alert (err);
      }

      function wordCloud (sourceText) {
            sourceText = sourceText.toLowerCase(); //convert characters in sourcetext to lower case
            sourceText = sourceText.trim(); //removes leading and trailing whitespace

            //Leave only alphabet characters and whitespace in the text
            let alphaRegx = /[^a-zA-Z\s]/g; // /[^a-zA-Z\s]/g selects characters that are not alphabetic or whitespace
            sourceText = sourceText.replace(alphaRegx, " "); //replaces characters that are not alphabetic or whitespace with an empty text string

            //remove stop words from the text
            for (let i = 0; i < stopWords.length; i++){
                  let stopRegx = new RegExp ("\\b" + stopWords[i]+"\\b", "g"); //select all stop words in the document
                  sourceText = sourceText.replace(stopRegx, "") //replaces stop words with an empty text string
            }

            //place the remaining words into array
            let words = sourceText.split(/\s+/g); //split the document at locations of one or more whitespace characters

            //sort the words in alphebetical order
            words.sort(); //sort the array content into alphebetical order

            console.log(words); //write the revised source text/array to the debugger console

            //creat a 2d array in wich item is an array containing a word and it's duplicate count
            let unique = [ [words[0], 1] ]; //first element in the array contains the first word and a word count of 1

            //keep an index of the unique words
            let uniqueIndex = 0; //keep count of unique words

            //test whether the current word equals the previous word
            for (let i = 1; i < words.length; i++) {
                  
                  if (words [i] === words[i-1]){ //checks whether current word = the previous word

                        //increase the duplicate count by 1
                        unique[uniqueIndex] [1]++; // if current word = the previous word increase duplicate count by +1
                  } else {
                        uniqueIndex++;
                        unique[uniqueIndex] = [words[i], 1];
                  }

            //Return to the js07.js file in your code editor and add the following code to the wordCloud() function as described in Figure 20:
            // sort by descending order of duplicate count
            unique.sort(byDuplicate);
            function byDuplicate (a,b){   //compare function for numeric sorting
                  return b[1]-a[1];       //place a after b if b[1]-a[1] is negative
            }
                  //keep the top 100 words
                  unique = unique.slice (0,100); //slice the array from index 0-100

                  //find the duplicates of the most repeated word
                  let maxCount = unique [0] [1]; 

                  //sort the word list in alphabetical order
                  unique.sort();

                  //reference the word cloud box
                  let cloudBox = document.getElementById("wc_cloud");
                  cloudBox.innerHTML = " "

                  //size each word based on its usage
                  for (let i = 0; i < unique.length; i++){         //loop through every word in the list
                        let word = document.createElement("span"); //create a span element containing the text of every word
                        word.textContent = unique [i] [0];
                        word.style.fontSize = unique [i] [1] / maxCount + "em";  
                        //set thefont size as a percentage of the largest duplicate count

                        cloudBox.appendChild(word); //append the word to the word cloud box
                  }
            }
      }
};









/*--- ----------------------------------------------*/
/* Array of words to NOT include in the word cloud */
/*-------------------------------------------------*/

let stopWords = ["a", "about", "above", "across", "after", "afterwards", "again", "against", 
                 "ago", "all", "almost", "alone", "along", "already", "also", "although", 
                 "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", 
                 "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", 
                 "are", "around", "as", "at", "back", "be", "became", "because", "become", 
                 "becomes", "becoming", "been", "before", "beforehand", "behind", "being", 
                 "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", 
                 "but", "by", "call", "came", "can", "cannot", "cant", "case","cases","cause", 
                 "co", "computer", "con", "could", "couldnt", "cry", "de", "describe", "detail", 
                 "do", "does", "doing", "done", "down", "due", "during", "each", "eg", "eight", 
                 "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", 
                 "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fie",
                 "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", 
                 "formerly", "forty", "found", "four", "from", "front", "full", "further", 
                 "get", "give", "go", "had", "has", "hasnt", "have", "he", "held", "having", 
                 "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", 
                 "herself", "him", "himself", "his", "how", "however", "hundred", "i", "ie", 
                 "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", 
                 "keep", "know", "knows", "knew", "last", "latter", "latterly", "least", "less", 
                 "let", "ltd", "made", "make","many", "may", "me", "meanwhile", "might", "mill", 
                 "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", 
                 "myself", "name", "namely", "neither", "never", "nevertheless", "next", 
                 "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", 
                 "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", 
                 "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", 
                 "own", "part", "per", "perhaps", "plainly", "please", "precisely", "put", 
                 "rather", "re", "same", "said", "say", "says", "see", "seem", "seemed", 
                 "seeming", "seems", "serious", "several", "shall", "she", "should", "show", 
                 "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", 
                 "something", "sometime", "sometimes", "somewhere", "st", "sts", "still", "such", 
                 "system", "take", "ten", "th", "ths", "thx", "than", "that", "the", "their", 
                 "them", "themselves", "then", "thence", "there", "thereafter", "thereby", 
                 "therefore", "therein", "thereupon", "these", "they", "thick", "thin", 
                 "third", "this", "those", "though", "three", "through", "throughout", 
                 "thru", "thus", "to", "together", "too", "top", "toward", "towards", 
                 "twelve", "twenty", "two", "un", "unless", "under", "until", "up", 
                 "upon", "us", "very", "via", "was", "we", "well", "were", "weve", "what", 
                 "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", 
                 "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", 
                 "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", 
                 "with", "within", "without", "would", "year", "years", "yet", "you", 
                 "your", "yours", "yourself", "yourselves"];
                 