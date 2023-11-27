"use strict";
//convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "add");
console.log(myVal);
