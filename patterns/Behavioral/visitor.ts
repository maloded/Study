// Element A
class ElementA {
  accept(visitor: Visitor): void {
    visitor.visitElementA(this);
  }

  specificOperationA(): void {
    console.log('Specific operation A of ElementA');
  }
}

// Element B
class ElementB {
  accept(visitor: Visitor): void {
    visitor.visitElementB(this);
  }

  specificOperationB(): void {
    console.log('Specific operation B of ElementB');
  }
}

// Visitor
interface Visitor {
  visitElementA(element: ElementA): void;
  visitElementB(element: ElementB): void;
}

// Concrete Visitor A
class ConcreteVisitorA implements Visitor {
  visitElementA(element: ElementA): void {
    console.log('ConcreteVisitorA is visiting ElementA');
    element.specificOperationA();
  }

  visitElementB(element: ElementB): void {
    console.log('ConcreteVisitorA is visiting ElementB');
    element.specificOperationB();
  }
}

// Concrete Visitor B
class ConcreteVisitorB implements Visitor {
  visitElementA(element: ElementA): void {
    console.log('ConcreteVisitorB is visiting ElementA');
    element.specificOperationA();
  }

  visitElementB(element: ElementB): void {
    console.log('ConcreteVisitorB is visiting ElementB');
    element.specificOperationB();
  }
}

// Usage
const elementA = new ElementA();
const elementB = new ElementB();

const visitorA = new ConcreteVisitorA();
const visitorB = new ConcreteVisitorB();

elementA.accept(visitorA);
// Output:
// ConcreteVisitorA is visiting ElementA
// Specific operation A of ElementA

elementB.accept(visitorA);
// Output:
// ConcreteVisitorA is visiting ElementB
// Specific operation B of ElementB

elementA.accept(visitorB);
// Output:
// ConcreteVisitorB is visiting ElementA
// Specific operation A of ElementA

elementB.accept(visitorB);
// Output:
// ConcreteVisitorB is visiting ElementB
// Specific operation B of ElementB
