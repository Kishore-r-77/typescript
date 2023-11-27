"use strict";
//Index Signatures
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
const prop = "Pizza";
const todaysNet = (transactions) => {
    let total = 0;
    for (const key in transactions) {
        total += transactions[key];
    }
    return total;
};
console.log(todaysTransaction[prop]);
console.log(todaysNet(todaysTransaction));
let student = {
    name: "Kishore",
    age: 27,
};
console.log(student["name"], "I of Student");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustles: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
