/* 1 Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array */

function squareArray(num) {
    return num * num;
  }
  function call(array, callback) {
    for (let index = 0; index < array.length; index++) {
      console.log(callback(array[index]));
    }
  }
  call([1, 2, 3], squareArray);   
  

/* 2 Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously.
*/
// function filterEvenNumbers(array2) {
//     const evenNumbers = array2.filter((number) => number % 2 === 0);
//     return evenNumbers;
//   }
  
//   function numbers(array, callback) {
//     console.log(callback(array));
//   }
//   numbers([1, 2, 3, 4, 5, 6], filterEvenNumbers);
  

/* 3 Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.
  */

// const fs = require('fs');

// const filePath = 'd:/Homework/javascript/ex2.txt';
 
// //console.log('File contents:');
// console.log(fs.readFileSync(filePath, 'utf8'));
 
 
/* 4 Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
 */
// const fs = require('fs');

// function writeFileAsync(filePath,data, callback) {
//   fs.writeFile(filePath, data,'utf8', err=> {
//     if (err) {
//       callback(err); // Pass the error to the callback
//     } else {
//       callback(null,data); // Pass the file contents to the callback
//     }
    
//   });
// }

// const filePath = 'd:/Homework/javascript/ex2.txt';
// const iwanttowrite="I'm from cambodia" 

// writeFileAsync(filePath, iwanttowrite,(err,data) => {
//   if (err) {
//     console.error('Error writing to the file:', err);
//   } else {
//     console.log('File write operation completes successfully.');
//     console.log(data);
//   }
// });


