type One = string;
type Two = string | number;
type Three = "three";

//convert to more or less specific

let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 3, "add") as string;

console.log(myVal);
