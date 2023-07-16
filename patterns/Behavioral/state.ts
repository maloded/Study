// Context
class Context {
  private state: State;

  constructor() {
    this.state = new StateA();
  }

  setState(state: State): void {
    this.state = state;
  }

  request(): void {
    this.state.handle(this);
  }
}

// State interface
interface State {
  handle(context: Context): void;
}

// Concrete State A
class StateA implements State {
  handle(context: Context): void {
    console.log('State A: Handling request');
    context.setState(new StateB());
  }
}

// Concrete State B
class StateB implements State {
  handle(context: Context): void {
    console.log('State B: Handling request');
    context.setState(new StateC());
  }
}

// Concrete State C
class StateC implements State {
  handle(context: Context): void {
    console.log('State C: Handling request');
    context.setState(new StateA());
  }
}

// Usage
const context = new Context();

context.request(); // Output: State A: Handling request
context.request(); // Output: State B: Handling request
context.request(); // Output: State C: Handling request
context.request(); // Output: State A: Handling request
