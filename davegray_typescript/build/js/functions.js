"use strict";
//literal type
let me;
let love;
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(3, 4));
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(3, 4));
//optional parameters
const addAll = (a, b, c = 2) => {
    //   if (typeof c != "undefined") return a + b + c;
    return a + b + c;
};
logMsg(addAll(3, 2, 4));
logMsg(addAll(3, 2));
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 34, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    while (true) {
        let i = 0;
        i++;
        if (i > 100)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "String";
    if (typeof value === "number")
        return "Number";
    return createError("Sorry Buddy...This should have not happened");
};
logMsg(numberOrString("Kishore"));
