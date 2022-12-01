const lib = {};

['submodule1', 'submodule2', 'submodule3'].forEach(name => {
        const sub = require(`./lib/${name}.js`);
        Object.assign(lib, sub);
});

console.log('Combined submodules:', Object.keys(lib).join(', '));


module.exports = lib;
