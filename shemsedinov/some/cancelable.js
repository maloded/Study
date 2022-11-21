const cancelable = fn => {
    const wrapper = (...args) => {
        if (fn) return fn(...args);
    }
    wrapper.cancel = () => fn = null;
    return wrapper;
}

const ff = par => {
    console.log('Function called, par:', par);
}

const f = cancelable(ff);

f('first');
f('second');
f.cancel();
f('third');
