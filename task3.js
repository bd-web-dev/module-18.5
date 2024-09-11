// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ["pythonBook", "javascriptBook", "rustBook", "javaBook"];
console.log("Run 1");
let containsJsBook = books.includes("javascriptBook");
console.log("Is JavaScript book present? Answer is: " + containsJsBook);
books.shift();
books.shift();
console.log("Run 2");
containsJsBook = books.includes("javascriptBook");
console.log("Is JavaScript book present? Answer is: " + containsJsBook);
