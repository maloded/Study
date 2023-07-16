interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  operation(): string {
    return 'CocreteProductA operation';
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return 'CocreteProductB operation';
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: ${product.operation()}`;
  }
}

class CocreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class CocreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Usage

const creatorA: Creator = new CocreteCreatorA();
console.log(creatorA.someOperation());

const creatorB: Creator = new CocreteCreatorB();
console.log(creatorB.someOperation());
