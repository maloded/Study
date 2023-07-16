// Component interface
interface Component {
  operation(): void;
}

// Leaf
class Leaf implements Component {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  operation(): void {
    console.log(`Leaf ${this.name}: Operation`);
  }
}

// Composite
class Composite implements Component {
  private name: string;
  private children: Component[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  operation(): void {
    console.log(`Composite ${this.name}: Operation`);
    for (const child of this.children) {
      child.operation();
    }
  }
}

// Usage
const leaf1: Component = new Leaf("Leaf 1");
const leaf2: Component = new Leaf("Leaf 2");
const leaf3: Component = new Leaf("Leaf 3");

const composite1: Component = new Composite("Composite 1");
(composite1 as Composite).add(leaf1);
(composite1 as Composite).add(leaf2);

const composite2: Component = new Composite("Composite 2");
(composite2 as Composite).add(leaf3);
(composite2 as Composite).add(composite1);

composite2.operation();
