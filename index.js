// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(a, b) {
    return a - b;
}

console.log(calculateDifference(20, 4));
console.log(calculateDifference(2, 10));


// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3));
console.log(isOdd(4));


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(arr){
    return Math.min(...arr)
}

console.log(findMin([15,36,98,3,87,11,9,8,258]));
//

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array.");
    }
    return numbers.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));


// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

    function sortArrayDescending(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array.");
    }
    if (!numbers.every(num => typeof num === "number")) {
        throw new Error("Array must contain only numbers.");
    }
    return [...numbers].sort((a, b) => b - a);
}
const numbers = [8, 5, 12, 19, 2, 11, 3];
console.log(sortArrayDescending(numbers));


// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    if (typeof str !== 'string') {
        throw new Error("Input must be a string.");
    }
    if (str.length === 0) {
        return str;
    }
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Ostad"));


// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    if (!numbers.every(num => typeof num === "number")) {
        throw new Error("Array must contain only numbers.");
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const numbers = [7, 5, 36, 58, 69];
console.log(findAverage(numbers));


// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

function isLeapYear(year) {
    if (typeof year !== 'number' || year < 0) {
        throw new Error("Input must be a positive number.");
    }

    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
console.log(isLeapYear(2005));

console.log(isLeapYear(1996));



