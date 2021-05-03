// soal 1
/*
buatlah dua fungsi yaitu fungsi luas lingkaran 
dan keliling lingkaran dengan arrow function (wajib ada parameternya) 
lalu gunakan let atau const di dalam soal ini
*/
console.log('------Jawaban Soal No.1-------')

const luasLingkarang = (r) => {
    const pi = r % 7 === 0 ? (22/7) : 3.14;
    let luas = pi*r*r;
    return console.log (`Luas lingkaran dengan jari- jari ${r} adalah ${luas}`);
}

const kelilingLingkaran = (r) => {
    const pi = r % 7 === 0 ? (22/7) : 3.14;
    let keliling = 2*pi*r;
    return console.log(`keliling lingkaran jari-jari ${r} adalah ${keliling}`);
}
luasLingkarang(7);
kelilingLingkaran(7);

// soal 2
/*
Tulislah sebuah arrow function 
dengan nama introduce yang parameternya
menggunakan rest parameter dan 
menghasilkan kalimat 
"Pak John adalah seorang penulis 
yang berusia 30 tahun" 
menggunakan template literal.
*/
console.log("---------jawaban soal 2-----------")

let introduce = (name, umur, jenis_kelamin, pekerjaan) => {
    return `Pak ${name} adalah seorang ${pekerjaan} yang berusia ${umur} tahun ` ;
};

//kode di bawah ini jangan di rubah atau di hapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) 
// Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun" 

// soal 3
/*
return dalam fungsi di bawah ini masih menggunakan object literal dalam ES5, ubahlah menjadi bentuk yang lebih sederhana di ES6.

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
    }
  }
}
  
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()
*/
console.log('------------Jawaban Soal No 3-------------')

const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}` )
      }
    }
  }
    
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)

  //Driver Code
  newFunction("William", "Imoh").fullName()

// Soal 4
/*
Diberikan sebuah objek sebagai berikut:

let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 
tuliskan kode jawaban yang berisi hasil destructuring yang nantinya akan di gunakan dalam console.log 
*/

console.log('-------------Jawaban Soal No 4------------')

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }

 // Ganti Nama - nama sesuai dengan yang di panggil
 const {
     name  : phoneName,
     brand : phoneBrand,
     year  : year,
     colors: [colorBronze, colorWhite, colorBlack]
 } = phone;

 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

 // soal 5

 /*
 buatlah variabel-variabel seperti di bawah ini:

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

gabungkanlah variabel warna (gabungkan dengan atribut warnaSampul) 
dan dataBukuTambahan ke variabel buku dengan menggunakan spread operator 
 */

console.log('---------Jawaban Soal No 5------------')

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
} 

const overwritten = {
    ...buku,
    warnaSampul: ["hitam", ...warna]
};

const gabungan = {
    ...overwritten, ...dataBukuTambahan
}

console.log(gabungan)


