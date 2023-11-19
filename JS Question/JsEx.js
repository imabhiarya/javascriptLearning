// Write a function that takes two numbers as arguments and returns their sum.
function sum(x, y){
    num1 = parseInt(x);
    num2 = parseInt(y);
    return (num1 + num2);
}
let sum1 = sum(5,7);
console.log(sum1);

// Write a function that takes a string as an argument and returns its length.
function stringLen(str) {
    return str.length;
}
console.log(stringLen("Abhishek"));

// Write a program that takes two numbers and displays their sum, difference, product, and quotient.

function basicSum(x,y) {
    sum = (x + y);
    minus = (x - y);
    product = (x*y);
    divide = (x/y);
    return console.log(`Sum : ${sum} Subtraction : ${minus} Product : ${product} Divide : ${divide}`);
}

basicSum(7,2);

// Write a function that takes two numbers as arguments and returns the larger number.
function maxNum(x,y) {
    max = Math.max(x,y);
    return max;
}
console.log(maxNum(6,8));

// Write a program that displays a string in reverse order.

function revStr(str){
    let rev ="";
    for (let index = str.length - 1; index >=0; index--) {
        rev = rev + (str[index]);
    }
    console.log(rev);
}
revStr("ABhishek");

// 6. **Write a program that takes a number and checks whether it is positive, negative, or zero.**
function numTypeCheck(num){
    if (num<0) {
        console.log("Negative");
    } else if(num== 0){
        console.log("Zero");
    }else{
        console.log("Positive");
    }
};

numTypeCheck(8);

// Write a program that takes a number and prints the multiplication table for that number.
function printMult(num) {
    mult = undefined;
    for (let index = 1; index <=10; index++){
        multi = num * index; 
        console.log(multi);
    }
}
printMult(6);

// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

function sumOfNnum(num){
    let sum = 0;
    for (let index = 0; index <= num ; index++) {
        sum = sum + index;
    }
    return sum;
}

console.log(sumOfNnum(8));

// Write a program that takes a string and prints out the number of vowels in the string.

function printVowels(Str){
    let counter = 0;
    for (let i = 0; i < Str.length; i++) {
        if (Str[i] == "a") {
            counter++;
        } else if(Str[i]=="e"){
            counter++;
        } else if(Str[i]=="i"){
            counter++
        } else if(Str[i]=="u"){
            counter++;
        }else if(Str[i] == "o"){
            counter++;
        }
        // else{
        //     // console.log("Not Found");
        // }
        
    }
    return counter;

}
console.log(printVowels("abhishek"));

// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.
let arr1 =[1,2,3,4,5];
let arr2 = [3,4,5,6,7];
function commonElm(arr1,arr2){
   let newArr =[];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            if(!newArr.includes(arr1[i])){
                newArr.push(arr1[i])
            }
        }
            newArr.sort((a,b)=> a-b)
    }
    return newArr;
}
console.log(commonElm(arr1,arr2));