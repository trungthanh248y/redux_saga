let fs = require('fs');

// fs.readFile('./test.js', 'utf8', (err, data) => {
//     if(err) return console.log('Error' + err);
//     console.log(data);
// });

// let promiseRead = new Promise((resolve, reject) => {
//     fs.readFile('./test.js', 'utf8', (err, data) => {
//         if(err) return reject(err);
//         resolve(data);
//     });
// });

// promiseRead.then(data => console.log(data), err => console.log(err));
let read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
};

read('./test.js').then(data => console.log(data), err => console.log(err));
//Promise liên tiếp nhau:
