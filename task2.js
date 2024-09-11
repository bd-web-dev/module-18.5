// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const destinations = ["sajek", "coxsBazar", "sylhet"];
console.log(destinations);
destinations.push("novoTheater");
console.log(destinations);
destinations.push("sangsad bhaban", "shahabuddin park");
console.log(destinations);
const lastAddedNowRemoved = destinations.pop();
console.log(lastAddedNowRemoved);
console.log(destinations);
