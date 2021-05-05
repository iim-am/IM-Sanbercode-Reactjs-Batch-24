var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var times = 10000;
var iim = 0;

readBooksPromise(times, books[iim]).then(function (waktu) {
  iim += 1;
  readBooksPromise(waktu, books[iim]).then(function (waktu2) {
    iim += 1;
    readBooksPromise(waktu2, books[iim]).then(function (waktu3) {});
  });
});
