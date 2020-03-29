//---------------------------------------------- 1 factory
class Tesla {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class TeslaFactory {
  create(type) {
    if (type === "X3") return new Tesla(type, 40000, 300);
    if (type === "X5") return new Tesla(type, 80000, 360);
  }
}

const factory = new TeslaFactory();
const x3 = factory.create("X3");
console.log(x3);
const x5 = factory.create("X5");
console.log(x5);

//---------------------------------------------- 2 factory
class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standart: StandartMembership,
    premium: PremiumMembership
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Jack", "simple"),
  factory.create("Ann", "standart"),
  factory.create("Kim", "premium")
];

members.forEach(member => {
  member.define();
});
