const fn = (par, callback) => {
    if (!par) {
        callback(new Error('Parameter needed'));
        return;
    }
    callback(null, 'Data ' + par);
    return 'Value';
}

const cb = (err, data) => {
    if (err) throw err;
    console.dir({data})
}

const res = fn('example', cb);
// const res2 = fn(null, cb);

console.dir({res});
// console.dir({res2});