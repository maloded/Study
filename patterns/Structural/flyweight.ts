// Flyweight interface
interface Flyweight {
  operation(context: string): void;
}

// Concrete Flyweight
class ConcreteFlyweight implements Flyweight {
  private intrinsicState: string;

  constructor(intrinsicState: string) {
    this.intrinsicState = intrinsicState;
  }

  operation(context: string): void {
    console.log(`ConcreteFlyweight: Intrinsic State - ${this.intrinsicState}, Extrinsic State - ${context}`);
  }
}

// Flyweight Factory
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  getFlyweight(key: string): Flyweight {
    if (!(key in this.flyweights)) {
      this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
  }
}

// Usage
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('key1');
flyweight1.operation('context1');

const flyweight2 = factory.getFlyweight('key2');
flyweight2.operation('context2');

const flyweight3 = factory.getFlyweight('key1');
flyweight3.operation('context3');

console.log(flyweight1 === flyweight3); // Output: true
