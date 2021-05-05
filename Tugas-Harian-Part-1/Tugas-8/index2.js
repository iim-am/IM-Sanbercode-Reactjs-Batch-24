var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var times = 10000;
var i = 0;

readBooksPromise(times, books[i]).then(function (waktu) {
  i += 1;
  readBooksPromise(waktu, books[i]).then(function (waktu2) {
    i += 1;
    readBooksPromise(waktu2, books[i]).then(function (waktu3) {});
  });
});
