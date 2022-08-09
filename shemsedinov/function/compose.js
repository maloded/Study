const Context = function() {
    this.hello = 'Marcus';
    const city = {
        year: 482,
        f1: function () {
            return this.hello;
        },
        f2: () => {
            return this.hello;
        },
        f3() {
            return this.hello;
        }
    }
    return city;
}

const c = new Context();

console.log(c.f1());

