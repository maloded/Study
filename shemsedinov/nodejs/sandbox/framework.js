// Example showing us how the framework creates an anviroment (sandbox) for application runtime,
// load an application code and passes a sandbox into app as a global context and receives exported
// application interface

const PARSING_TIMEOUT = 1000;
const EXECUTION_TIMEOUT = 5000;

// The framework can require core libraries
const fs = require('fs');
const vm = require('vm');
const timers = require('timers');
const events = require('events');

// Create a hash and turn it into the sandbox context which will be the global context of 
// an application
const context = {
    module: {},
    console,
    require: name => {
        if (name === 'fs') {
            console.log('Module fs is restricted');
            return null;
        }
        return require(name);
    }
};

context.global = context;
const sandbox = vm.createContext(context);

// Prepare lambda context injection 
const api = { timers, events };

// Read an application source code from the file
const fileName = './application.js';
fs.readFile(fileName, 'utf8', (err, src) => {
    // We need to handle errors here

    // Wrap source to lambda, inject api
    src = `api => { ${src} };`;
    
    // Run an application in sandbox context
    let script;
    try {
        script = new vm.Script(src, { timeout: PARSING_TIMEOUT });
    } catch (err) {
        console.dir({ err });
        console.log('Parsing timeout');
        process.exit(1);
    }

    try {
        const f = script.runInNewContext(sandbox, { timeout: EXECUTION_TIMEOUT });
        f(api);
        const exported = sandbox.module.exports;
        console.dir({ exported });
    } catch (err) {
        console.dir({ err });
        console.log('Execution');
        process.exit(1);
    }

    // We can access a link to exported interface from sunboxe.module.exports to execute, save 
    // to the cache, print to console, etc.
});

process.on('uncaughtException', err => {
    console.log(`UncaughtException: ${err}`);
});


