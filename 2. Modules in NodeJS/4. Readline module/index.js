// Import required module
const readline = require("readline");

// Create an interface
const qInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const Solution = () => {
  // Write your code here
  qInterface.question("Enter first number: ", (num1) => {
    qInterface.question("Enter second number: ", (num2) => {
    const maximum = Math.max(Number(num1), Number(num2));
    console.log(`The maximum of the two numbers is: ${maximum}`);
    })
  })
};

Solution();
module.exports = Solution;
