//  Q1 use logical operator to find weather the age of a person lies between 10 and 20

let age = 14;
if (age>=10 && age<=20) {
    console.log("Age is between 10 and 20");
} else {
    console.log("age is out of the range");
}

// Q2 demostrate the use of switch statement case in js

let ch = 'D';

switch(ch){
    case 'A': 
        console.log("its A");
    case 'B' : 
        console.log("its B");
    case 'C' :
        console.log("Its C");
    case 'D' : 
        console.log("Its D");
}

// Q3 js pr to check num is divisible by 2 and 3;

let num = 42;
if (num%2 == 0 && num%3 == 0) {
    console.log("Disvisible by 2 and 3");
} else{
    console.log("Not Divisible");
}

// Q3 js program to check num is divisible by 2 or 3

if (num%2==0 || num%3 == 0) {
    console.log("Divisible by 2 or 3");
} else {
    console.log("Not Divisible by any one of them");    
}

// Q5 wap to able to drive or not based on age using terniary op

let drive = (age>18)? "Drive" : "Not able to Drive"
console.log(drive);