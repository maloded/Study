'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    set area(area) {
        this.width = area / this.height;
    }
}

// Usage 

const rect = new Rectangle(100, 200);
console.dir({ rect });
console.log('area', rect.area);
rect.area = 30000;
console.dir({ rect });
console.log('area2', rect.area);

