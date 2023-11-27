//Arrays
let stringArr = ["one", "two", "three"];

let guitars = ["strat", "les paul", 5243];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "kish";
stringArr.push("hey");

let test = [];
let bands: string[] = [];
bands.unshift("Van Halen");

//Tuple
let myTuple: [string, number, boolean] = ["dave", 34, true];
let mixed = ["John", 1, true];
let unionArr: (string | number)[] = ["Kishore", 234];
//myTuple=mixed
mixed = myTuple;

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "Kishore";

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Kishore",
  active: false,
  albums: ["OU81234", 1984],
};

//enum
enum Test {
  U,
  V,
  A = 1,
}

console.log(Test.V);
console.log(Test.A);
