// Big O is a way to count, to talk about runtime of an algo based on an input. Talk about how effienct it is.
// To Analyze the performance of an algorithm, we use Big O Notation
// Big O Notation can give us a high level understanding of time and spcae complexity of algo
// Doesnt care about precision, only the trend whether its linear, quadratic, constant?
// measuring time and space complexity based on algo not hardware








//This is time complexity
// How to reverse a string?

// function reverse(s){
//     return s.split("").reverse().join("");
// }

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// this is slow
// function addUpTo(n){
//     let total = 0
//     for(let i=1; i <=n; i++){
//     total += i
//     }
//     return total;
// }

// // this is faster
// function addUpTo(n){
//     return n * (n +1) / 2
// }

// console.log(addUpTo(100))

//this is space complexity also measured by big O notation
//Booleans, numbers, undefined, null are constant space O(1)
//strings require O(n) space where n is the string length
//reference types are generally O(n) where n is the length(for arrays) or the number of keys(for objects)
























