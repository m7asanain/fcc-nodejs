const fs = require('fs');

// fs.writeFile('example.txt', "// This is an example file.", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File seccessfuly created!");
//         // this method to read the file in the termenal
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });


// // this method to rename the file.
// fs.rename('example.txt', 'example-2.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Created Successfuly.");
//     }
// });


// // this method used to append sth to the file (if you forgot) 
// fs.appendFile('example-2.txt', 'Some data being APPENDED', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file have been appended successfuly.');
//     }
// });


// this method to delete file
fs.unlink('example-2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfuly deleted!");
    }
})