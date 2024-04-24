// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");


const Solution = () => {
  // Write your code here
  try {
      fs.writeFileSync("notes.txt", "The world has enough coders");
  } catch (err) {
      console.log("File not created");
  }

  try {
      const buffer = fs.readFileSync("notes.txt", { encoding: "utf-8" });
      console.log(buffer)
  } catch (err) {
      console.log("File not found")
  }

  try {
      fs.appendFileSync("notes.txt", " BE A CODING NINJAS");
  } catch (err) {
      console.log("File not changed")
  }

  try {
      const buffer = fs.readFileSync("notes.txt", { encoding: "utf-8" });
      console.log(buffer)
  } catch (err) {
      console.log("File not found")
  }

};
Solution();
module.exports = Solution;
