//--------------------------------- 1 singleton
class MyCar {
  constructor(model) {
    if (MyCar.exist) {
      return MyCar.instance;
    }
    this.model = model;
    MyCar.instance = this;
    MyCar.exist = true;
  }
  getCar() {
    return this.model;
  }
}

const tesla = new MyCar("tesla");
console.log(tesla.getCar());

const mazda = new MyCar("mazda");
console.log(mazda.getCar());

//--------------------------------- 2 singleton
class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }
  getCount() {
    return this.count;
  }
  increaseCount() {
    return this.count++;
  }
}

myCount1 = new Counter();
myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount());
