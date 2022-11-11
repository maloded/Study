const numbers = new Array(1000).fill(1);

setTimeout(() => {
    console.log('setTimeot 0')
}, 0);

numbers.forEach((item, i) => {
    console.log(i);
});

