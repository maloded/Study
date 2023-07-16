// Product class
class Product {
  private partA: string;
  private partB: string;

  constructor() {
    this.partA = '';
    this.partB = '';
  }

  public setPartA(partA: string): void {
    this.partA = partA;
  }

  public setPartB(partB: string): void {
    this.partB = partB;
  }

  public show(): void {
    console.log(`Part A: ${this.partA}`);
    console.log(`Part B: ${this.partB}`);
  }
}

// Builder interface
interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  getResult(): Product;
}

// Concrete Builder 1
class ConcreteBuilder1 implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA(): void {
    this.product.setPartA('Part A1');
  }

  buildPartB(): void {
    this.product.setPartB('Part B1');
  }

  getResult(): Product {
    return this.product;
  }
}

// Concrete Builder 2
class ConcreteBuilder2 implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA(): void {
    this.product.setPartA('Part A2');
  }

  buildPartB(): void {
    this.product.setPartB('Part B2');
  }

  getResult(): Product {
    return this.product;
  }
}

// Director
class Director {
  private builder: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  construct(): void {
    this.builder.buildPartA();
    this.builder.buildPartB();
  }
}

// Usage
const director = new Director();

const builder1 = new ConcreteBuilder1();
director.setBuilder(builder1);
director.construct();
const product1 = builder1.getResult();
product1.show();

const builder2 = new ConcreteBuilder2();
director.setBuilder(builder2);
director.construct();
const product2 = builder2.getResult();
product2.show();
