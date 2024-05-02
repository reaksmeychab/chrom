/* 
1 Callback Hell with Mock Database
Implement a series of nested asynchronous functions to simulate querying a mock database, processing the data and then outputting the result. Each step should rely on the completion of the previous one.
  a Create a mock database: 
[{id: 1, name: “sok”}, {id: 2, name; “sao”}, {id: 3, name: “pisey”}]
  b Write a function that could get user info by its id. Note the user object should return after 2 seconds. If the user is not found, it should return an error.
  c Write a function that could process the user data by capitalizing the user name. Note, the process data should be execute around 1.5 seconds
  d Execute and Process: Use example b and c in order. Finally print the processed user data to the console
	Note: This exercise should only use a callback function.
*/

const mockDB = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey" },
  ];
  
  // Function to get user info by id
  function getUserInfoById(id, callback) {
    setTimeout(() => {
      const user = mockDB.find((user) => user.id === id);
      if (user) {
        callback(null, user);
      } else {
        callback("User not found");
      }
    }, 2000); // Simulating 2 seconds delay
  }
  
  // Function to process user data by capitalizing the name
  function processUserData(user, callback) {
    setTimeout(() => {
      if (user) {
        user.name = user.name.toUpperCase();
        callback(null, user);
      } else {
        callback("User data is missing");
      }
    }, 1500); // Simulating 1.5 seconds delay
  }
  
  // Execute and Process
  getUserInfoById(2, (err, user) => {
    if (err) {
      console.error(err);
    } else { 
      processUserData(user, (err, processedUser) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Processed User Data:", processedUser);
        }
      });
    }
  });