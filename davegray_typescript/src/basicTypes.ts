import { personObj } from "./types/typesObj";

let myName: string = "Kishore";
let isValid: boolean;
let data: any;
let album: string | number;

let person: personObj = {
  name: "Kishore",
  age: 27,
};

album = 1984;
album = "van halen";

isValid = true;

data = 234;
data = "data";
data = false;

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 3));
