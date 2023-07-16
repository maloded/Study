'use strict';

class Rectangle {
    constructor(height, width) {
      Object.defineProperty(this, 'height', { value: height });
      Object.defineProperty(this, 'width', { value: width });
    }
  
    get area() {
      return this.height * this.width;
    }
  
    *[Symbol.iterator]() {
      yield this.height;
      yield this.width;
    }
  }
  
  const rect = new Rectangle(100, 200);
  
  
  for (let value of rect) {
    console.log('value', value);
  }

// Usage 


console.dir({ rect });
this.history = 300;
console.log(Object.keys(rect));
for (let value of rect) {
    console.log('value', value);
}
console.log('area', rect.area);