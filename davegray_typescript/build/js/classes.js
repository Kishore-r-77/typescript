"use strict";
class Coder {
    constructor(name, age, company) {
        this.name = name;
        this.age = age;
        this.company = company;
        this.getAge = () => {
            return this.age;
        };
        // this.name = name;
        // this.age = age;
        // this.company = company;
    }
}
class WebDev extends Coder {
    constructor(computer, name, age, company) {
        super(company, age, name);
        this.computer = computer;
        this.computer = computer;
    }
}
let Dave = new Coder("Dave", 27, "Futura");
let Sara = new WebDev("Dell", "sarah", 35, "Futura");
console.log(Dave.getAge());
console.log(Sara.getAge());
class Guitarists {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const kishore = new Guitarists("Kishore", "Guitar");
console.log(kishore.play("plays"));
class Peeps {
}
Peeps.count = 0;
Peeps.getCount = () => {
    return ++Peeps.count;
};
console.log(Peeps.count);
console.log(Peeps.getCount());
