const friends = ["balam", "kalam", "salam"];
console.log(friends);
friends.push("friend");
console.log(friends);
friends.push("gelam");
friends.push("pailam");
console.log(friends);

// Remove last element of array and return it
const removed1 = friends.pop();
console.log(friends);
const removed2 = friends.pop();
console.log(friends);
console.log(removed1, removed2);
