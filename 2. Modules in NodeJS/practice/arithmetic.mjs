function sum(x,y){
    return x+y;
}
//     Or
// module.exports.add = (x,y) => {
//     return x+y;
// }
 
function sub(x,y){
    return x-y;
}
 
function mul(x,y){
    return x*y;
}
 
function div(x,y){
    return x/y;
}

// 1. Common JS Module
// module.exports = {
//     addition: sum,
//     sub,
//     mul,
//     div
// };
//2. ES6 Module
export {
    sum,
    sub,
    mul,
    div
}