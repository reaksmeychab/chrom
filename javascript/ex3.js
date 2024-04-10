/* 1 Create a function that could take an argument which is an array of objects. Each object should contain property name and age. The function should return a new list which only contains the user who have higher than 18 years old
write js plz */

// function filterUsersByAge(users) {
//     return users.filter(user => user.age > 18);
//   }
  
//   // Example usage:
//   const users = [
//     { name: 'Sokritha', age: 25},
//     { name: 'Sing', age: 12 },
//     { name: 'Smey', age: 22 },
    
//   ];
  
//   const adults = filterUsersByAge(users);
//   console.log(adults);

  /* 2 Given an array of numbers which includes duplicates, use `filter` method to create a new array that contains only unique values
 */
  
//   function getUniqueValues(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index);
//   }
  
//   // Example usage:
//   const numbers = [1, 2, 3, 4, 2, 5, 1, 6, 3];
//   const uniqueNumbers = getUniqueValues(numbers);
//   console.log(uniqueNumbers);

/* 3 Given an array of user objects which include property name and age, use the `map` method to create a new array that contains just the names of the users
 */

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 },
//   ];
  
//   const names = users.map(user => user.name);
//   console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
  

/*4 Given an array of date string in the format “YYYY-MM-DD”. Use the ‘map’ method to transform the array [“2024-01-01”, “2024-02-02”, “2024-04-04”] into an array of date strings in the format “DD/MM/YYYY”
 */

// const dateStrings = ["2024-01-01", "2024-02-02", "2024-04-04"];

// const transformedDates = dateStrings.map(dateString => {
//   const [year, month, day] = dateString.split("-");
//   return `${day}/${month}/${year}`;
// });

// console.log(transformedDates);


/* 5 Given an array of numbers, use the `reduce` method to find the maximum number of the array
 */

// const numbers = [10, 5, 8, 15, 3];

// const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

// console.log(maxNumber);


/*6  You have an array of objects where each object has properties `name` and `category`. Use the `reduce` method to group these objects by category.
Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}
 */
const items = [
  { name: "Bread", category: "Grocery" },
  { name: "Butter", category: "Grocery" },
  { name: "Shampoo", category: "Personal Care" }
];

const groupedItems = items.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item.name);
  return acc;
}, {});

// console.log(groupedItems);
