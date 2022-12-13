const sum = (a, b, callback) => {
    console.log('hello')
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < 1000; i++) {
        arr = arr.map(e => e + 1)
    }
    callback(arr)
};

sum(5, 6, (data) => {
    console.log(data)
});

console.log('bi')