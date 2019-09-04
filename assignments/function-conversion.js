// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

var myFunction = () => console.log("Function was invoked!");

myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

var anotherFunction = param => console.log(param); //console .log added so you can actually see the work!

anotherFunction("Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

var add = (param,param2) => console.log(param+param2); //console .log added so you can actually see the work!

add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

var subtract = (param1,param2) => console.log(param1-param2); //console .log added so you can actually see the work!

subtract(1,2);


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
