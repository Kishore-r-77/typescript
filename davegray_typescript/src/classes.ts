class Coder {
  constructor(
    public readonly name: string,
    private age: number,
    protected company: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.company = company;
  }
  public getAge = () => {
    return this.age;
  };
}

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    company: string
  ) {
    super(company, age, name);
    this.computer = computer;
  }
}

let Dave = new Coder("Dave", 27, "Futura");
let Sara = new WebDev("Dell", "sarah", 35, "Futura");

console.log(Dave.getAge());
console.log(Sara.getAge());
////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarists implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const kishore = new Guitarists("Kishore", "Guitar");

console.log(kishore.play("plays"));

class Peeps {
  static count: number = 0;

  static getCount = (): number => {
    return ++Peeps.count;
  };
}

console.log(Peeps.count);
console.log(Peeps.getCount());
