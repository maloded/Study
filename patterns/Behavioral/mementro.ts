// Originator
class Originator {
  private state: string;

  setState(state: string): void {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  createMemento(): Memento {
    return new Memento(this.state);
  }

  restoreMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}

// Memento
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Caretaker
class Caretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

// Usage
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('State 1');
console.log('Current state:', originator.getState()); // Output: Current state: State 1

const memento1 = originator.createMemento();
caretaker.addMemento(memento1);

originator.setState('State 2');
console.log('Current state:', originator.getState()); // Output: Current state: State 2

const memento2 = originator.createMemento();
caretaker.addMemento(memento2);

originator.setState('State 3');
console.log('Current state:', originator.getState()); // Output: Current state: State 3

const previousMemento = caretaker.getMemento(1);
originator.restoreMemento(previousMemento);
console.log('Current state after restoring:', originator.getState()); // Output: Current state after restoring: State 2
