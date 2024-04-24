const fs = require("fs");

//   to read file content using blocking coe
// const buffer = fs.readFileSync("./data.text", {encoding: "utf-8"});
// console.log(buffer);
// console.log("File read successfully");


// create and writing a file
// try{
// fs.writeFileSync("detail.text", "Name: My name is Dinesh, Age: 23");
// }catch (err){
//     console.log(err);
// }
// console.log("File created successfully");


// append the data to file in try catch
// try{
//     fs.appendFileSync("detail.text", "\nMobile: 9876543210");
// fs.appendFileSync("detail.text", "\nEmail: myemail@gmail.com");
// }catch(err){
//     console.log(err);
// }
// console.log("File created successfully");


// dalete the file in try catch
// try{
//     fs.unlinkSync("detail.text");
// }catch(err){
//     console.log("File not exist");
// }
// console.log("File deleted successfully");


// to read file using non blocking code
// fs.readFile("./data.text", {encoding: "utf-8"}, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })
// console.log("File read successfully")

//  write file using non blocking code
// fs.writeFile("detail.text", "Name: My name is Dinesh, Age: 23", (err) => {
//     if(err){
//         console.log(err);
//     }
// })
// console.log("File created successfully");

//  append to the file using non blocking code
// fs.appendFile("detail.text", "\nMobile: 9876543210", (err) => {
//     if(err){
//         console.log(err);
//     }
// })
// console.log("File appended successfully");

// delete the file using non blocking code
fs.unlink("detail.text", (err) => {
    if(err){
        console.log(err);
    }
})
console.log("File deleted successfully");