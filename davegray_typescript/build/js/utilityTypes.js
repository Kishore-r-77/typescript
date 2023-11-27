"use strict";
//Partials
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "KHR1234",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 90 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//Required
const recordAssignment = (assign) => {
    return assign;
};
//Readonly
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
