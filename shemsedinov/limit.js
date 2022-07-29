const limit = (count, fn) => {
    let counter = 0;
    return (...args) => {
        console.log('args', args);
        if(counter === count) return;
        counter++;
        return fn(...args);
    }
}

const fn = par => {
    console.log('Function called, par:', par);
}

const fn2 = limit(2, fn);

fn2('first');
fn2('second');
fn2('third');
