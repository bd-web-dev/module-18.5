let numbers = [88, 77, 99, 421, 54, 63];
// Array indexing starts at 0 instead of 1;
// .length property is 1 higher than last index of array
// 3rd element is actually index 2 of array due to numbering as 0, 1, 2
// Therefore, nth element is at index (n - 1)

// Display array
console.log(numbers);

// Accessing a certain element at a certain index of array
// Accessing element at index 0
console.log("Index 0: " + numbers[0]);
// Accessing element at index 1
console.log("Index 1: " + numbers[1]);
// Accessing element at index 2
console.log("Index 2: " + numbers[2]);
// Accessing element at index 3
console.log("Index 3: " + numbers[3]);

// Setting a variable's value to be array's 4th element (index: 3)
const fourth = numbers[3];
console.log("Value of variable 'fourth': " + fourth);

// Setting an array element's value at a certain index

// Normal variables
let abc = 45;
// Variable already declared. No need for let or const keyword
abc = 99;

// Numbers array already declared
// Set value of element at Index 1 of numbers array
numbers[1] = 999;
console.log(numbers);

let strings = [];
strings[0] = "Hello";
console.log(strings);
