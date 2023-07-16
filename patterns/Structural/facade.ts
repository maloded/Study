// Subsystem A
class SubsystemA {
  operationA(): string {
    return 'Subsystem A: Operation A';
  }
}

// Subsystem B
class SubsystemB {
  operationB(): string {
    return 'Subsystem B: Operation B';
  }
}

// Subsystem C
class SubsystemC {
  operationC(): string {
    return 'Subsystem C: Operation C';
  }
}

// Facade
class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  operation(): string {
    let result = 'Facade initiates the operations:\n';
    result += this.subsystemA.operationA() + '\n';
    result += this.subsystemB.operationB() + '\n';
    result += this.subsystemC.operationC() + '\n';
    return result;
  }
}

// Usage
const facade = new Facade();
const result = facade.operation();
console.log(result);
