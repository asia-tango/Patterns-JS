const developer = {
  name: "Asia",
  getDev() {
    console.log(`Hi, I am ${this.name} and I am a ${this.level} developer`);
  }
};

const developerWithLevel = Object.create(developer, {
  level: {
    value: "Junior"
  }
});

developerWithLevel.getDev();
console.log(developerWithLevel.__proto__ === developer);
