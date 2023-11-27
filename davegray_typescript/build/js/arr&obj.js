"use strict";
//Arrays
let stringArr = ["one", "two", "three"];
let guitars = ["strat", "les paul", 5243];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "kish";
stringArr.push("hey");
let test = [];
let bands = [];
bands.unshift("Van Halen");
//Tuple
let myTuple = ["dave", 34, true];
let mixed = ["John", 1, true];
let unionArr = ["Kishore", 234];
//myTuple=mixed
mixed = myTuple;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "Kishore";
let evh = {
    name: "Kishore",
    active: false,
    albums: ["OU81234", 1984],
};
//enum
var Test;
(function (Test) {
    Test[Test["U"] = 0] = "U";
    Test[Test["V"] = 1] = "V";
    Test[Test["A"] = 1] = "A";
})(Test || (Test = {}));
console.log(Test.V);
console.log(Test.A);
