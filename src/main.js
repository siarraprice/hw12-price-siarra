class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
    this.includeSpoon = "Here is your spoon!";
  }
}

const vanillaIceCream = new IceCream("Ice Cream", "340", "2", "Vanilla");

console.log(vanillaIceCream);


const includeSpoon = "Here is your spoon!";
console.log(includeSpoon);
