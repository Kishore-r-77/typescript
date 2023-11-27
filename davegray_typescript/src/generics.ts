const echo = <T>(arg: T): T => arg;

const isObj = <T>(args: T): boolean => {
  return typeof args === "object" && !Array.isArray(args) && args !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docOne: Resource<string> = {
  uid: 8743,
  resourceName: "person",
  data: "data",
};

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Kishore" }));
