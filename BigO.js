// Big O is a way to count, to talk about runtime of an algo based on an input. Talk about how effienct it is.
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
//Booleans, numbers, undefined, null are constant space
//strings require O(n) space where n is the string length
//reference types are generally O(n) where n is the length(for arrays) or the number of keys(for objects)
























