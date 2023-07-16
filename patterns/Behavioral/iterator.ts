// Iterator interface
interface Iterator<T> {
  next(): CustomIteratorResult<T>;
  hasNext(): boolean;
}

// CustomIteratorResult interface
interface CustomIteratorResult<T> {
  value: T;
  done: boolean;
}

// Concrete Iterator
class ConcreteIterator<T> implements Iterator<T> {
  private collection: T[];
  private index: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.index = 0;
  }

  next(): CustomIteratorResult<T> {
    if (this.hasNext()) {
      const value = this.collection[this.index];
      this.index++;
      return { value, done: false };
    }
    return { value: undefined as unknown as T, done: true };
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

// Concrete Aggregate
class ConcreteAggregate<T> {
  private collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  createIterator(): Iterator<T> {
    return new ConcreteIterator<T>(this.collection);
  }
}

// Usage
const collection = [1, 2, 3, 4, 5];
const aggregate = new ConcreteAggregate<number>(collection);
const iterator = aggregate.createIterator();

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
