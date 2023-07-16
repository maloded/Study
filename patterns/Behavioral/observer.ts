// Subject (Observable)
interface Subject {
  getState(): number;
  setState(state: number): void;
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject (Observable)
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number;

  getState(): number {
    return this.state;
  }

  setState(state: number): void {
    this.state = state;
    this.notify();
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

// Observer
interface Observer {
  update(subject: Subject): void;
}

// Concrete Observer
class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: Subject): void {
    const state = subject.getState();
    console.log(`Observer ${this.name} received update. New state: ${state}`);
  }
}

// Usage
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');
const observer3 = new ConcreteObserver('Observer 3');

subject.attach(observer1);
subject.attach(observer2);
subject.attach(observer3);

subject.setState(5);
subject.setState(10);

subject.detach(observer2);

subject.setState(15);
