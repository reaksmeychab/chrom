/* 1Given the array of `colors` [“Red”, “Blue”, “Green”], use array destructuring to extract the first and third elements of the array
 */
// const colors = ["Red", "Blue", "Green"];

// // Using array destructuring to extract the first and third elements
// const [firstColor, , thirdColor] = colors;

// console.log(firstColor); // Output: "Red"
// console.log(thirdColor); // Output: "Green"

 
/* 2Given the object of person {name: “Alice”, age: 25, job: “Developer”}, use object destructuring to extract the ‘name’ & ‘age’ properties and console.log it out
 */
// const person = { name: "Alice", age: 25, job: "Developer" };

// // Using object destructuring to extract 'name' and 'age' properties
// const { name, age } = person;

// console.log(name); // Output: "Alice"
// console.log(age); // Output: 25

/*  3 Given the object user { id: 1, name: “Sok”, address: {street: “123 Main St”, city: “PP”}}, use destructuring to extract the street and city
// */
// const user = {
//     id: 1,
//     name: "Sok",
//     address: {
//       street: "123 Main St",
//       city: "PP",
//     },
//   };
  
//   // Using nested object destructuring to extract 'street' and 'city'
//   const { address: { street, city } } = user;
  
//   console.log(street); // Output: "123 Main St"
//   console.log(city); // Output: "PP"
  
/* 4Given two arrays of nums1 and nums2, merge them into a new array:
Nums1 = [1, 2, 3]
Nums2 = [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
 */
// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];

// const mergedArray = [...nums1, ...nums2];

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

/* 5Write a function that could take any number of arguments and calculates their sum and return it
Example: console.log(sumAll(1, 2)) // 3
                  console.log(sumAll(1, 2, 3, 4, 5)) // 15
 */
                //   function sumAll(...numbers) {
                //     return numbers.reduce((sum, num) => sum + num, 0);
                //   }
                  
                //   console.log(sumAll(1, 2)); // Output: 3
                //   console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
                  
/* 6 Given the array ‘points’, extract the first point into a variable and store remaining points in an array
Example: points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
                   console.log(firstPoint) // {x: 1, y: 2}
                   console.log(otherPoints) // [{x:2, y:3}, {x:3, y:4}]
*/
// const points = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }];

// // Extracting the first point and storing the remaining points
// const [firstPoint, ...otherPoints] = points;

// console.log(firstPoint); // Output: {x: 1, y: 2}
// console.log(otherPoints); // Output: [{x:2, y:3}, {x:3, y:4}]

/* 7Write a function that takes an object and a list of property names to filter out. Return a new object that contains all the properties of the original object except those specified in the list
Example: object = {a:1, b:2, c:3, d:4}
                   filterProps(object, “b”, “d”) // Should Return:  {a:1, c:3}
 */

                   function filterProps(obj, ...propsToFilter) {
                    const filteredObj = {};
                    
                    for (const key in obj) {
                      if (!propsToFilter.includes(key)) {
                        filteredObj[key] = obj[key];
                      }
                    }
                    
                    return filteredObj;
                  }
                  
                  const object = { a: 1, b: 2, c: 3, d: 4 };
                  console.log(filterProps(object, "b", "d")); // Output: { a: 1, c: 3 }
                  