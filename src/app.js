// const log = require('./node.js');

// log.printName('Elozino');

// Updating the syntax
// const {printName} = require('./node.js');
// printName('Chinwe');

// Without the object
const printName = require('./node.js');
printName('Asaije')


// We have five console.log statements. Your goal is to have them log to the console in the order 
// that they state without rearranging them. 
// Your solution should include 1 console.log left as is with the other four using globals available
//  within node.js to run the code at the appropriate time in the event loop. There are multiple ways to 
//  accomplish this but you must use at least 3 different methods.


const fs = require('fs');

process.on('beforeExit', () => {
    console.log('Print Fifth');
}) 

setImmediate(() => {
    console.log('Print Third');
}) 

process.nextTick(() => {
    console.log('Print Second');
})

console.log('Print First');

setTimeout(() => {
    console.log('Print Fourth');
}, 5000) 
