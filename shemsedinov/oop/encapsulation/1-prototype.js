'use strict';

function Rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
console.log('1', Rect, Rect.prototype, Rect.__proto__);
Rect.prototype.toString = function() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`
}
console.log('2', Rect, Rect.prototype, Rect.__proto__);

console.log('________________________\n');

function Square(x, y, side) {
    Rect.call(this, x, y, side, side);
}

const r = new Rect(3, 4, 100, 200);
const s = new Square(1, 2, 100);

console.dir({ r });
console.dir({ s });

console.log('r.prototype', r.prototype,'r.proto', r.__proto__);
console.log('s.prototype', s.prototype,'s.proto', s.__proto__);

console.log('________________________\n');

Object.setPrototypeOf(Square.prototype, Rect.prototype);

const p1 = new Square(10, 20, 50);
console.dir(Square.prototype);
console.dir(p1.prototype);
console.dir(p1.constructor);
console.log(p1.constructor === Square);
console.log(p1.__proto__ === Square.prototype);
console.log(p1.toString());

console.log('________________________\n');
console.log(r.toString());
console.log(s.toString());