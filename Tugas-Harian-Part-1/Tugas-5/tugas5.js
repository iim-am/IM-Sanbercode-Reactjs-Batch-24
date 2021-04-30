// soal 1
console.log('------------Jawaban Soal No 1---------------')

function luasPersegiPanjang(panjang, lebar){
    return panjang*lebar
}

function kelilingPersegiPanjang(panjang, lebar){
    return 2*(panjang + lebar)
}

function volumeBalok(panjang, lebar, tinggi){
    return panjang*lebar*tinggi
}

var panjang= 12
var lebar= 4
var tinggi = 8

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)

//soal 2
/* 
    Tulislah sebuah function dengan nama introduce() 
    yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut:
    “Nama saya [nama], umur saya [umur] tahun, alamat saya di [alamat], dan saya punya hobby yaitu [hobi]!”
    Jawabannya nanti:
    Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!" 
*/

console.log('------------Jawaban Soal No 2---------------')
function introduce(name, age, address, hobby){
    return " Nama saya " + name + "," + " umur saya " + age + " tahun" + "," + " alamat saya di " + address + "," + " dan saya punya hobby yaitu " + hobby + "!"
}


var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 

//soal 3
/* 
ubahlah array di bawah ini menjadi object dengan property nama, 
jenis kelamin, hobi dan tahun lahir (var arrayDaftarPeserta harus di olah menjadi object)
*/
console.log('------------Jawaban Soal No 3---------------')
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {}

objectDaftarPeserta.name = arrayDaftarPeserta[0]
objectDaftarPeserta.jenisKelamin = arrayDaftarPeserta[1]
objectDaftarPeserta.hobby = arrayDaftarPeserta[2]
objectDaftarPeserta.lahir = arrayDaftarPeserta[3]

console.log(objectDaftarPeserta)

//soal 4
/*
anda diberikan data-data buah seperti di bawah ini
1.nama: Nanas
  warna: Kuning
  ada bijinya: tidak
  harga: 9000 
2.nama: Jeruk
  warna: Oranye
  ada bijinya: ada
  harga: 8000
3.nama: Semangka
  warna: Hijau & Merah
  ada bijinya: ada
  harga: 10000
4.nama: Pisang
  warna: Kuning
  ada bijinya: tidak
  harga: 5000
uraikan data tersebut menjadi array of object dan munculkan data 
yang tidak memiliki biji
*/
console.log('------------Jawaban Soal No 4---------------')
var buah = [{
    nama: " Nanas ",
    warna: " Kuning ",
    ada_bijinya: false,
    harga: 9000
},
{
    nama: " jeruk ",
    warna: " oranye ",
    ada_bijinya: true,
    harga: 8000
},
{
    nama: " Semangka ",
    warna: " Hijau & Merah",
    ada_bijinya: true,
    harga: 10000
},
{
    nama: " Pisang ",
    warna: " Kuning ",
    ada_bijinya: false,
    harga: 5000
}
]

var buahSegar = buah.filter(function (panen) {
return panen.ada_bijinya == false 
});

console.log(buahSegar)

//soal 5
/* 
    buatlah function tambahDataFilm yang menambahkan object ke array
*/
console.log('------------Jawaban Soal No 5---------------')
function tambahDataFilm(nama, durasi, genre, tahun){
    var objFilm = {}
    objFilm.nama= nama;
    objFilm.durasi= durasi;
    objFilm.genre= genre;
    objFilm.tahun= tahun;
    return dataFilm.push(objFilm)
}

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)