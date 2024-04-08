                       /* Excercise 2.js */
/* 
 1 Write a declaration function that take a parameter called: “name”, and return a greeting message including that name
 */

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// // Example usage:
// const greeting = greet('John');
// console.log(greeting); // Output: Hello, John!



/* 2 Write an expression function that take two parameters “num1” & “num2” and returns their sum
 */

// const sum = function(num1,num2){
//      return num1+num2};
// // Example usage:
// const result = sum(5, 10);
// console.log('The sum is:', result);

/* 3 Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers */

// const average = (number) => {
//     let sum = 0;
//     for (let index = 0; index < number.length; index++) {
//       sum = sum + number[index];
//     }
//     return sum / number.length;
//   };
//   console.log(average([10, 20, 30, 40, 50]));


/* 4 Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)
 */


// (function (weight, height) {
//     console.log(Math.ceil(weight / (height * height)));
//   })(70, 1.72);

/*  5 Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero
*/

// function myProduct(product) {
//     for (let index = 0; index < product.length; index++) {
//       if (product[index].quantity > 0) {
//         console.log(
//           "Product name:",
//           product[index].name,
//           "product price:",
//           product[index].price,
//           "product quantity:",
//           product[index].quantity
//         );
//       }
//     }
//   }
//   myProduct([
//     { name: "Shirt", price: 10, quantity: 1 },
//     { name: "pant", price: 20, quantity: 0 },
//     { name: "hat", price: 30, quantity: 2 },
//   ]);

/* 6 Write a function that could check if the password provided is strong or not. A strong password should have a minimum length of 8 characters
 */

// function checkPassword(password) {
//     if (password.length >= 8) {
//       console.log("strong password");
//     } else {
//       console.log("your password is weak");
//     }
//   }
//   checkPassword("1235678");

/* 7 Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)
 */
// function countVowel(string) {
//     let count = 0;
//     for (let index = 0; index < string.length; index++) {
//       if (
//         string[index] === "a" ||
//         string[index] === "e" ||
//         string[index] === "i" ||
//         string[index] === "o" ||
//         string[index] === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(countVowel("hola hello"));

/* 8 Write a function that could sort a list of numbers in ascending order.
 */
// function sortNumber(number) {
//     return number.sort((a, b) => a - b);
//   }
//   console.log(sortNumber([40, 20, 1000, 30, 2, 0]));


/* 9 Write a function that takes an array of numbers as an input and returns the median value
 */
// function calculateMedian(numbers) {
//     if (numbers.length === 0) {
//         return null; // Return null for an empty array
//     }

//     // Sort the numbers array in ascending order
//     numbers.sort((a, b) => a - b);

//     const middleIndex = Math.floor(numbers.length / 2);

//     // Check if the array length is odd or even
//     if (numbers.length % 2 === 0) {
//         // If the array length is even, return the average of the middle two numbers
//         return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
//     } else {
//         // If the array length is odd, return the middle number
//         return numbers[middleIndex];
//     }
// }

// // Example usage:
// const numbersArray = [1,10];
// const median = calculateMedian(numbersArray);
// console.log('The median is:', median); // Output: The median is: 15


function sum(a,b){
    return a+b;
}
function display(b){display,
    let res =b(2,3);
    console.log("2+3="+res)
}
display(sum)