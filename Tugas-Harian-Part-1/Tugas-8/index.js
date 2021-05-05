//Jawaban soal 1

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var bukuKuring = books.length;
var time = 10000;

function execute(time, nilai, bukuKuring) {
    readBooks(time, books[nilai], function(pengingatWaktu) {
        time = pengingatWaktu;
        bukuKuring = bukuKuring - 1; 
        if (bukuKuring > 0) {
            execute(time, nilai+1, bukuKuring);
        }
    });
}

execute(time, 0, bukuKuring);
