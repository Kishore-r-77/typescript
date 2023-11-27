//type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type userId = stringOrNumber;

//literal type
let me: "Kishore";

let love: "Kishore" | "Aswathy";

//functions

type mathFunction = (a: number, b: number) => number;

interface imathFunction {
  (a: number, b: number): number;
}
const add: mathFunction = (a, b): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(3, 4));

let multiply: imathFunction = function (a, b) {
  return a * b;
};

logMsg(multiply(3, 4));

//optional parameters
const addAll = (a: number, b: number, c: number = 2): number => {
  //   if (typeof c != "undefined") return a + b + c;
  return a + b + c;
};

logMsg(addAll(3, 2, 4));
logMsg(addAll(3, 2));

//Rest parameters
const total = (...nums: number[]) => {
  return nums.reduce((prev, current) => prev + current);
};

logMsg(total(1, 2, 34, 4));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  while (true) {
    let i: number = 0;
    i++;
    if (i > 100) break;
  }
};

const numberOrString = (value: string | number): string => {
  if (typeof value === "string") return "String";
  if (typeof value === "number") return "Number";
  return createError("Sorry Buddy...This should have not happened");
};

logMsg(numberOrString("Kishore"));
