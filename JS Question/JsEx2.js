/* Q1. Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.*/

function greet(params) {
    console.log("Hello " + params);
};

greet("Abhishek");

/* Write a function called 'getSquare' that takes a number parameter and returns its square.*/
function getSquare(num) {
    return num * num;
};
console.log(getSquare(5));

/* Q3. Write a function called 'countLetters' that takes a string parameter and 
returns an object that contains a count of each letter in the string.*/

function countLetters(params) {
    let count = {};

    for (let i = 0; i < params.length; i++) {
        let char = params[i];
        if (count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1;
        }
    }
    return count;
}
console.log(countLetters("Abhishek"));

//  Q4. Write a function called 'createCounter' that returns a function. 
//The returned function should increment a counter variable each time it is called and return the current count.
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }

}
let counter = createCounter();
console.log(counter());
console.log(counter());

//Q5. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and 
//returns the sum of all even numbers in the array.

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            sum = sum + arr[i];
        }

    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(sumEvenNumbers(arr));