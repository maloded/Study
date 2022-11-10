const sum = (a, b, callback) => callback(a + b);

sum(5, 6, console.log.bind(null, 'sum(5, 2) ='));