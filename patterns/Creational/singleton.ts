class Singleton {
  private static instance: Singleton;
  private data: number;

  private constructor() {
    // Private constructor to prevent instantiation from outside
    this.data = Math.random();
  }

  public static getInstance(): Singleton {
    // Returns the singleton instance, creating it if it doesn't exist
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData(): number {
    return this.data;
  }
}

// Usage
const singletonInstance1 = Singleton.getInstance();
console.log(singletonInstance1.getData()); // Output: Some random number

const singletonInstance2 = Singleton.getInstance();
console.log(singletonInstance2.getData()); // Output: The same random number as before

console.log(singletonInstance1 === singletonInstance2); // Output: true
