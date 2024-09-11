const friends = ["balam", "kalam", "salam"];

console.log(friends.includes("kalam"));
console.log(friends.includes("eiFriendNai"));

// Includes function is case-sensitive
console.log("Run 1");
if (friends.includes("salam")) {
  console.log("Party korlam");
} else {
  console.log("No food. We are fasting.");
}

console.log("Run 2");
if (friends.includes("Salam")) {
  console.log("Party korlam");
} else {
  console.log("No food. We are fasting.");
}
