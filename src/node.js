function printName(name) {
    console.log('Hello, ', name);
}

// module.exports = {
//     printName
// }

// If line 5 to 7 reads as below:
module.exports = printName // exporting the function without the object, then see line 10 of app.js