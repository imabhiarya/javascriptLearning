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

// Q6. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

 function sumOfArray(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i]
    }
    return sum;
 }

 let arr3 =  [3,5,6,8,9];
 console.log(sumOfArray(arr3));

 //  Q7. Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
 function stringLenGreaterThanFive(params) {
    let newArray = [];
    // let count = 0;
    for (let i = 0; i < params.length; i++) {
        if (params[i].length > 5) {
            // newArray[count] = params[i];
            // count++;                             this works as same
            newArray.push(params[i]);
        }
    }
    return newArray;
 }
 let strArr = ["Abhishek" , "Kumar", "Arya", "HariomSharan", "Shekhar"]
 console.log(stringLenGreaterThanFive(strArr));

//  Q8. Write a function that takes an object and returns an array of all the keys in the object.

function ArrayOfKeys(object) {
    let newArr =[];
    for (const key in object) {
        newArr.push(key);
    }
return newArr;
}
let myObj ={
    car : "Volvo",
    name : "Abhishek",
    age : 22,
    location : "Greater Noida"
}
console.log(ArrayOfKeys(myObj));
console.log("Now Q9");

// Q9 Write a function that takes an array of objects and returns an array of all the values of a specified property name.

function ArrayofValueOfObj(obj) {
    let newArr = Object.values(obj)
    return newArr;
}

console.log(ArrayofValueOfObj(myObj));
console.log("Q.No. 10");

// Q 10 Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function maxByProperty(arr, prop) {
    if (arr.length == 0) {
        return null;
    }
    let maxObj = arr[0];
    for (let i = 1; i < arr.length; i++) {
       if (arr[i][prop]>maxObj[prop]) {
        maxObj = arr[i];
       }
        
    }
    return maxObj;
}

let myarr2 = [
    {name:"apple", price: 1 },
    {name: "orange", price: 2},
    {name : "banana", price : 3},
];
console.log(maxByProperty(myarr2,"price"));