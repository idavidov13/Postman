//FOR OF LOOP (ARRAY)
// Function to calculate the total score of students using for...of loop
function calculateTotalScoreArr(scores) {
  let totalScore = 0;
  for (let score of scores) {
    totalScore += score;
  }
  return totalScore;
}

// Example data: array of scores
let studentScoresArr = [85, 90, 78, 92, 88];

// Calculate total score using the function
let totalArr = calculateTotalScoreArr(studentScoresArr);

console.log("Total score:", totalArr);

//FOR IN LOOP
// Function to calculate the total score of students using for...in loop
function calculateTotalScoreObj(scores) {
  let totalScore = 0;
  for (let index in scores) {
    totalScore += scores[index];
  }
  return totalScore;
}

// Example data: object with student scores
let studentScoresObj = {
  John: 85,
  Alice: 90,
  Bob: 78,
  Emily: 92,
  David: 88,
};

// Calculate total score using the function
let totalObj = calculateTotalScoreObj(studentScoresObj);

console.log("Total score:", totalObj);

//EXTRACTING DATA FROM JSON
let jsonResponse = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  friends: [
    {
      name: "Alice",
      age: 28,
    },
    {
      name: "Bob",
      age: 32,
    },
  ],
};

// Extracting data from nested JSON response
let name = jsonResponse.name;
let age = jsonResponse.age;
let city = jsonResponse.address.city;
let country = jsonResponse.address.country;
let friendNames = jsonResponse.friends.map((friend) => friend.name);
let friendAges = jsonResponse.friends.map((friend) => friend.age);
