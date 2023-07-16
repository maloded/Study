// Abstract Product A
interface AbstractProductA {
  usefulFunctionA(): string;
}

// Concrete Product A1
class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}

// Concrete Product A2
class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}

// Abstract Product B
interface AbstractProductB {
  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

// Concrete Product B1
class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

// Concrete Product B2
class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

// Abstract Factory
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

// Concrete Factory 1
class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

// Concrete Factory 2
class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

// Usage
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
  
}

const factory1: AbstractFactory = new ConcreteFactory1();
clientCode(factory1);

const factory2: AbstractFactory = new ConcreteFactory2();
clientCode(factory2);
