//Write a JavaScript display the larger of two integers
const a = 4 
const b = 9

if (a <b){    
    console.log( "A is smaller"); 
}
    else if (a >b) {
        console.log ("A is bigger")
    }

 //Write an if/else statement for the following requirements:
let gradeOfStudent = 45
const A = 90 //If student gets 90 or higher: console log  A
const B = 80 //If students get 80 or above: console log B
const C = 70 //If students get 70 or above: console log C
const D = 55 //If students get 55 or above: console log D
const F = 54 //failing grade this or lower

if (gradeOfStudent >= 90) {
    console.log ("You get an A");
}
    else if (gradeOfStudent >= 80)  {
        console.log (" You get a B");
    }

        else if ( gradeOfStudent >= 70)  {
            console.log (" You get a C");
        }

            else if (gradeOfStudent >= 55) {
                console.log ("You get a D");
            } else { (gradeOfStudent < 55) 
                console.log ("Sorry please repeat the class")
            }

//displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
/*let greeting
const ofTheDay = new Date();
const theHour = ofTheDay.getHours() //??????
if (theHour <= 5) {
    console.log ("Good morning");

     if (theHour <= 1159 && theHour >= 16) {
        console.log ("Good afternoon");
    }
}

let timeOfDay = 12
if (timeOfDay <= 5) {
        console.log ("Good morning");
    
         if (timeOfDay <= 1159 && timeOfDay >= 16) 
            console.log ("Good afternoon");*/ 

let timeOfDay = 17
if (timeOfDay <= 5) {
    console.log ("Good Morning");
}
    if (timeOfDay <=12 && timeOfDay >= 16) { //should be 1159 not 12 need to figure out
        console.log ("Good afternoon")
    } else{ console.log ("Hey There");
}

