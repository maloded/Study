// Component interface
interface Component {
  operation(): string;
}

// Concrete Component
class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent: Operation';
  }
}

// Base Decorator
abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

// Concrete Decorator A
class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA: Operation | ${super.operation()}`;
  }
}

// Concrete Decorator B
class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB: Operation | ${super.operation()}`;
  }
}

// Usage
const component: Component = new ConcreteComponent();
const decoratedComponentA: Component = new ConcreteDecoratorA(component);
const decoratedComponentB: Component = new ConcreteDecoratorB(decoratedComponentA);

console.log(component.operation()); // Output: ConcreteComponent: Operation
console.log(decoratedComponentA.operation()); // Output: ConcreteDecoratorA: Operation | ConcreteComponent: Operation
console.log(decoratedComponentB.operation()); // Output: ConcreteDecoratorB: Operation | ConcreteDecoratorA: Operation | ConcreteComponent: Operation
