/* 1 Iterate through the numbers 1 to 10, and at each iteration print “i” */

//    for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } 


/* 2 Iterate through the numbers 10 to 1, and at each iteration print “i”
 */

//   for (let i = 10; i >= 1; i--){
// console.log(i);
// } 


/* 3 Convert numerical grades into letter grades (A, B, C, D, E, F)
 */
// function convernumerical(grade ){
//     if (grade >= 90) {
//         return 'A';
//     } else if (grade >= 80) {
//         return 'B';
//     } else if (grade >= 70) {
//         return 'C';
//     } else if (grade >= 60) {
//         return 'D';
//     } else if (grade >= 50) {
//         return 'E';
//     } else {
//         return 'F';
//     }
// }
// const numericalGrade = 85;
// const letterGrade = convernumerical(numericalGrade);
// console.log(`Numerical grade ${numericalGrade} corresponds to letter grade ${letterGrade}`);


/* 4 A company has a list of employees and their salary in separate arrays. You are tasked with the job of printing our the name of each employee and the employee’s salary as a string in the format: “Employee name: Employee salary”
Example: let employees = [“Lara”, “Evee”, “Simi”]
                let salary = [1000, 2000, 120.90]
 */

// let employees = ["Lara", "Evee", "Simi"];
// let salary = [1000, 2000, 120.90];
                
//                 // Check if both arrays have the same length
// if (employees.length === salary.length) {
//                     // Loop through each employee and their corresponding salary
// for (let i = 0; i < employees.length; i++) {
//      let employeeName = employees[i];
//      let employeeSalary = salary[i];
// console.log(`Employee name: ${employeeName} Employee salary: ${employeeSalary}`);
// }
//  } else {
//     console.log("Error: Number of employees does not match number of salaries.");
//     }


// 5 Write a loop that displays from 1 to 10 except even numbers?

//  for (let i = 1; i <= 10; i++) {
//         if (i % 2 !== 0) {
//         console.log(i);
//     }
// }



// 6 Write a program that count the odd and even numbers from the list of numbers containing 1 to 10

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddCount = 0;
// let evenCount = 0;

// // Loop through the numbers array
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         // If the number is even, increment evenCount
//         evenCount++;
//     } else {
//         // If the number is odd, increment oddCount
//         oddCount++;
//     }
// }

// console.log(`Count of odd numbers: ${oddCount}`);
// console.log(`Count of even numbers: ${evenCount}`);


/*7  Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”
 */
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


/*8  Write a program that uses a loop to calculate the sum of all numbers in an array.
 */
// function calculateSum(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// // Example usage:
// const numbersArray = [5, 10, 15, 20];
// const totalSum = calculateSum(numbersArray);
// console.log('The sum of the numbers is:', totalSum);



/*9  Write a program that prints all prime numbers between 1 and 100. */
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function printPrimesInRange(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// // Print prime numbers between 1 and 100
// printPrimesInRange(1, 100);


/* 10Write a program that finds the largest number in an array using a loop.
 */
// function findLargestNumber(numbers) {
//     if (numbers.length === 0) {
//         return null; // Return null for an empty array
//     }

//     let largest = numbers[0]; // Initialize largest with the first element of the array

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i]; // Update largest if a larger number is found
//         }
//     }

//     return largest;
// }

// // Example usage:
// const numbersArray = [10, 5, 30, 15, 20];
// const largestNumber = findLargestNumber(numbersArray);
// console.log('The largest number is:', largestNumber);


