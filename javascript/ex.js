/* Iterate through the numbers 1 to 10, and at each iteration print “i” */

//    for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } 


/* Iterate through the numbers 10 to 1, and at each iteration print “i”
 */

//   for (let i = 10; i >= 1; i--){
// console.log(i);
// } 


/* Convert numerical grades into letter grades (A, B, C, D, E, F)
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


/* A company has a list of employees and their salary in separate arrays. You are tasked with the job of printing our the name of each employee and the employee’s salary as a string in the format: “Employee name: Employee salary”
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


// Write a loop that displays from 1 to 10 except even numbers?

//  for (let i = 1; i <= 10; i++) {
//         if (i % 2 !== 0) {
//         console.log(i);
//     }
// }