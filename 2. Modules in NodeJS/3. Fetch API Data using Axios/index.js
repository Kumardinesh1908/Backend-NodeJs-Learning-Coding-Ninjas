// Please do not change the prewritten code
 const axios = require("axios");
 const http = require("http");

const Solution = async () => {
  // Write your code here
  const url = "https://api.codingninjas.com/api/v3/event_tags";
  const response = await axios.get(url);
  const data = response.data;
  console.log(data);
};
Solution();
module.exports = Solution;
