const readline = require("readline");
const qInterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

qInterface.question("Enter first number: ",(num1)=>{
    qInterface.question("Enter Second number: ",(num2)=>{
    const sum = parseFloat(num1) +parseFloat(num2);
    console.log(sum)
    })
})