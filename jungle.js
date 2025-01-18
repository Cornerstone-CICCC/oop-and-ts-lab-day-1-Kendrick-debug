class Animal {
  #name;
  #species;
  #energy;
  static remainingAnimals = 0;
  constructor(name, species, energy = 100) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    Animal.remainingAnimals++;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get species() {
    return this.#species;
  }

  set species(newSpecies) {
    this.#species = newSpecies;
  }

  get energy() {
    return this.#energy;
  }

  set energy(newEnergy) {
    this.#energy = newEnergy;
  }

  eat(amount) {
    this.#energy += amount;
    console.log(`${this.#name} eats and gains energy!`);
  }

  attack(target, energyCost, energyDamage) {
    this.#energy -= energyCost;
    target.energy -= energyDamage;
    console.log(`${this.#name} swoops in to attack ${target.name}!`);
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(newCanFly) {
    this.#canFly = newCanFly;
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(newFurColor) {
    this.#furColor = newFurColor;
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  set coldBlooded(newColdBlooded) {
    this.#coldBlooded = newColdBlooded;
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion, 20, 20);
console.log(`Eagle's energy: ${eagle.energy}`);
console.log(`Lion's energy: ${lion.energy}`);

lion.attack(snake, 50, 80);
console.log(`Lion's energy: ${lion.energy}`);
console.log(`Snake's energy: ${snake.energy}`);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat(10);
console.log(`Eagle's energy: ${eagle.energy}`);
lion.eat(20);
console.log(`Lion's energy: ${lion.energy}`);
snake.eat(15);
console.log(`Snake's energy: ${snake.energy}`);
