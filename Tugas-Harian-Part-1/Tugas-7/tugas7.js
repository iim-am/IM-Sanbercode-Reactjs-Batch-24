// Soal 1
console.log('------Jawaban Soal No.1----')
/*
Terdapat sebuah class Animal yang memiliki sebuah constructor name,
default property legs= 4 dan cold_blooded = false.
*/

// Release 0
console.log('---------Release 0----------')
/*
Buatlah class Animal yang menerima satu parameter constructor berupa name. 
Secara default class Animal akan memiliki property yaitu legs 
(jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.

Gunakan method getter dan setter untuk mengakses property di dalam class
*/

class Animal {
    constructor(name){
        this.namina = name;
        this.sukuna = 4;
        this.getihTiis = false;
    }

    get name() {
        return this.namina
    }

    get legs() {
        return this.sukuna
    }

    set legs(amount){
        this.sukuna = amount
    }

    get cold_blooded() {
        return this.getihTiis
    }

}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)

// Release 1
console.log('----Release 1-----')
/*
Buatlah class Frog dan class Ape yang merupakan inheritance 
dari class Animal.
Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2,
hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal.
class Ape memiliki function yell() yang menampilkan “Auooo” 
dan class Frog memiliki function jump() 
yang akan menampilkan “hop hop”.
*/
class Ape extends Animal {
    constructor(name,amount){
        super(name)
        this.sukuna = amount;
    }

    yell() {
        console.log('Auoooooooooo')
    }
}

class Frog extends Animal{
    constructor(name){
        super(name)
    }

    jump() {
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

// Soal 2
console.log('----Jawaban Soal No 2-----')
/*
Terdapat sebuah class dengan nama Clock 
yang ditulis seperti penulisan pada function,
ubahlah fungsi tersebut menjadi class 
dan pastikan fungsi tersebut tetap berjalan dengan baik.
Jalankan fungsi di terminal/console Anda untuk melihat hasilnya.
(tekan tombol Ctrl + C pada terminal untuk menghentikan method clock.start())


Hint: Fokus soal ini hanya pada kegiatan mengubah struktur 
function Clock menjadi class. 
Jangan lupa menambahkan 
constructor di dalam class, 
dan ubah function di dalam Clock menjadi method pada class.

function Clock({ template }) {
  
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 

*/

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

    var clock = new Clock({ template: 'h:m:s' });
    clock.start();

