/*
Student Name: Rylee Leavitt
File Name: fizzBuzz.js
Date: 10/09/24
*/

/* Instructions: Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
Name the file fizzBuzz.js, include a multi-line comment with your name, filename, and date, and be sure to run your code.*/

//start a for loop, initializing i to 1, and runs until i is 100 using console.log

for (let i = 1; i <= 100;i++) {
    //Check if number is divisble by 3
    if (i%3 == 0 && i%5 !== 0){
    /*The % operator, the modulus (or remainder) operator, returns the remainder of a division.
    the == operator compares value.
    the && makes sure bothe statements are true. !== means is not equal to.
    */
        console.log("Fizz"); // Prints "Fizz" for numbers divisible by 3
    }

    //Checks if i is divisible by 5 and not by 3
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz"); // Prints "Buzz" for numbers divisible by 5
    } 

    // If neither condition is met, just print the number
    else {
        console.log(i); // Prints the number if not divisible by 3 or 5
    }
}
