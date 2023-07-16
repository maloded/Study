// Abstraction
abstract class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public abstract operation(): void;
}

// Refined Abstraction 1
class RefinedAbstraction1 extends Abstraction {
  public operation(): void {
    console.log('RefinedAbstraction1: Operation');
    this.implementor.operationImpl();
  }
}

// Refined Abstraction 2
class RefinedAbstraction2 extends Abstraction {
  public operation(): void {
    console.log('RefinedAbstraction2: Operation');
    this.implementor.operationImpl();
  }
}

// Implementor
interface Implementor {
  operationImpl(): void;
}

// Concrete Implementor A
class ConcreteImplementorA implements Implementor {
  public operationImpl(): void {
    console.log('ConcreteImplementorA: Operation implementation');
  }
}

// Concrete Implementor B
class ConcreteImplementorB implements Implementor {
  public operationImpl(): void {
    console.log('ConcreteImplementorB: Operation implementation');
  }
}

// Usage
const implementorA: Implementor = new ConcreteImplementorA();
const implementorB: Implementor = new ConcreteImplementorB();

const abstraction1: Abstraction = new RefinedAbstraction1(implementorA);
abstraction1.operation();

const abstraction2: Abstraction = new RefinedAbstraction2(implementorB);
abstraction2.operation();
  