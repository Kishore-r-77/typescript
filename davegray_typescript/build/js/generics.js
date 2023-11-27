"use strict";
const echo = (arg) => arg;
const isObj = (args) => {
    return typeof args === "object" && !Array.isArray(args) && args !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
const docOne = {
    uid: 8743,
    resourceName: "person",
    data: "data",
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "Kishore" }));
