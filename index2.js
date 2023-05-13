// const { fetchMyIP , fetchCoordsByIP,fetchISSFlyOverTimes} = require('./iss_promised');

// fetchMyIP()
//   .then(body => console.log(body));

  // fetchMyIP()
  // .then(fetchCoordsByIP)
  // .then(body => console.log(body));

  // fetchMyIP()
  // .then(fetchCoordsByIP)
  // .then(fetchISSFlyOverTimes)
  // .then(body => console.log(body));

  

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// Call 
// nextISSTimesForMyLocation()
//   .then((passTimes) => {
//     printPassTimes(passTimes);
//   })

//error handling 
const { nextISSTimesForMyLocation } = require('./iss_promised');
const {printPassTimes}=require('./index');
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });