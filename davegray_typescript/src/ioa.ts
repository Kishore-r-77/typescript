//Index Signatures

// interface TransactionObj {
//   [index: string]: number;
// }

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

const prop: string = "Pizza";

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const key in transactions) {
    total += transactions[key];
  }
  return total;
};

console.log(todaysTransaction[prop]);
console.log(todaysNet(todaysTransaction));

interface Student {
  name: string;
  age: number;
}

let student: Student = {
  name: "Kishore",
  age: 27,
};

console.log(student["name" as keyof Student], "I of Student");

type Streams = "salary" | "bonus" | "sidehustles";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustles: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
