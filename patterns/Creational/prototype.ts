// Prototype interface
interface Prototype {
  clone(): Prototype;
  getProperty(): any;
}

// Concrete Prototype 1
class ConcretePrototype1 implements Prototype {
  private property: string;

  constructor(property: string) {
    this.property = property;
  }

  clone(): Prototype {
    return new ConcretePrototype1(this.property);
  }

  getProperty(): string {
    return this.property;
  }
}

// Concrete Prototype 2
class ConcretePrototype2 implements Prototype {
  private property: number;

  constructor(property: number) {
    this.property = property;
  }

  clone(): Prototype {
    return new ConcretePrototype2(this.property);
  }

  getProperty(): number {
    return this.property;
  }
}

// Usage
const prototype1: Prototype = new ConcretePrototype1('Prototype 1');
const clonedPrototype1: Prototype = prototype1.clone();
console.log(prototype1.getProperty()); // Output: Prototype 1
console.log(clonedPrototype1.getProperty()); // Output: Prototype 1

const prototype2: Prototype = new ConcretePrototype2(42);
const clonedPrototype2: Prototype = prototype2.clone();
console.log(prototype2.getProperty()); // Output: 42
console.log(clonedPrototype2.getProperty()); // Output: 42
