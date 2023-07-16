// Abstract Class
abstract class AbstractClass {
  // Template method
  templateMethod(): void {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }

  // Abstract step one
  protected abstract stepOne(): void;

  // Concrete step two
  protected stepTwo(): void {
    console.log('Default implementation of stepTwo');
  }

  // Abstract step three
  protected abstract stepThree(): void;
}

// Concrete Class A
class ConcreteClassA extends AbstractClass {
  stepOne(): void {
    console.log('ConcreteClassA: Step one');
  }

  stepThree(): void {
    console.log('ConcreteClassA: Step three');
  }
}

// Concrete Class B
class ConcreteClassB extends AbstractClass {
  stepOne(): void {
    console.log('ConcreteClassB: Step one');
  }

  stepTwo(): void {
    console.log('ConcreteClassB: Custom implementation of stepTwo');
  }

  stepThree(): void {
    console.log('ConcreteClassB: Step three');
  }
}

// Usage
const classA = new ConcreteClassA();
classA.templateMethod();
// Output:
// ConcreteClassA: Step one
// Default implementation of stepTwo
// ConcreteClassA: Step three

const classB = new ConcreteClassB();
classB.templateMethod();
// Output:
// ConcreteClassB: Step one
// ConcreteClassB: Custom implementation of stepTwo
// ConcreteClassB: Step three
