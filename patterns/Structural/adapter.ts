// Target interface
interface Target {
  request(): void;
}

// Adaptee class
class Adaptee {
  specificRequest(): void {
    console.log('Adaptee: Specific request');
  }
}

// Adapter class
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): void {
    console.log('Adapter: Adapted request');
    this.adaptee.specificRequest();
  }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

adapter.request();
