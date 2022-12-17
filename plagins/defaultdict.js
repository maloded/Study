class DefaultDict {
  constructor(defaultInit) {
    return new Proxy({}, {
      get: (target, name) => name in target ?
        target[name] :
        (target[name] = typeof defaultInit === 'function' ?
          new defaultInit().valueOf() :
          defaultInit)
    })
  }
}

class Node {
  constructor(key, val) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.val = val;
  }
}

//   const counts = new DefaultDict(Number)
// counts.c++
// console.log(counts.c) // 1

const lists = new DefaultDict(Node)
lists.man = new Node('bob', 'hello1');
console.log(lists.g)