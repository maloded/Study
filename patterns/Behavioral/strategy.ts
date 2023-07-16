// Strategy interface
interface Strategy {
  execute(): void;
}

// Concrete Strategy A
class ConcreteStrategyA implements Strategy {
  execute(): void {
    console.log('Executing ConcreteStrategyA');
  }
}

// Concrete Strategy B
class ConcreteStrategyB implements Strategy {
  execute(): void {
    console.log('Executing ConcreteStrategyB');
  }
}

// Context
class Context0 {
  private strategy: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(): void {
    if (this.strategy) {
      this.strategy.execute();
    }
  }
}

// Usage
const context0 = new Context0();

const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();

context0.setStrategy(strategyA);
context0.executeStrategy(); // Output: Executing ConcreteStrategyA

context0.setStrategy(strategyB);
context0.executeStrategy(); // Output: Executing ConcreteStrategyB