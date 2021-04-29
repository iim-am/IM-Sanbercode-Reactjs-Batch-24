// soal 1
console.log("-----------jawaban soal No 1---------")
console.log("LOOPING PERTAMA")
var a = 0;
var atribut1 = "I love coding";
while (a < 20) {
    a += 2;
    console.log(a + " - " + atribut1);
}
console.log("LOOPING KEDUA")
var atribut2 = "I will become a frontend developer"
var b = 22;
while (b > 2) {
    b -= 2;
    console.log(b + " - " + atribut2);
}

// soal 2
/* 
SYARAT:
A. Jika angka ganjil maka tampilkan Santai
B. Jika angka genap maka tampilkan Berkualitas
C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
*/
console.log("--------------Jawaban Soal No 2---------")
for(var angka = 1; angka <= 20; angka++) {
    if((angka%3)==0 && (angka%2)==1){
        console.log(angka + ' - I love coding');
    } else if((angka%2)==0){
        console.log(angka + ' - Berkualitas');
    } else if((angka%2)==1){
        console.log(angka + ' - Santai');
    }
}

// Soal 3
/* 
Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi 7 dan alas 7. 
Looping boleh menggunakan syntax apa pun (while, for, do while).
Output:
#
##
###
####
#####
######
#######
*/
console.log('---------------Jawaban Soal No 3------------')
for (var i = 1; i <= 7; i++) {
    console.log('#'.repeat(i))
}

// Soal 4
/*
buatlah variabel seperti di bawah ini

var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
ubah kalimat diatas menjadi seperti di bawah ini:

["saya", "sangat", "senang", "belajar", "javascript"]

lalu tampilkan dengan output seperti di bawah ini:

"saya sangat senang belajar javascript"
*/
console.log('-----------Jawaban Soal No 4----------------')
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
var kalimat_1 = kalimat.slice(1,3);
//console.log(kalimat_1)
var kalimat_2 = kalimat.splice(4,7);
//console.log(kalimat_2)
var kalimat_3 = kalimat_2.join(" ")
//console.log(kalimat_3)
kalimat_1.push(kalimat_3);
//console.log(kalimat_1)
var gabungan_kalimat = kalimat_1.join(" ");
console.log(gabungan_kalimat)

//soal 5
/*
buatlah variabel seperti di bawah ini

var sayuran=[]
perlu di ingat bahwa deklarasi variabel sayuran diatas di mulai dengan array kosong dulu 

tambahkanlah data di bawah ini ke variabel sayuran:

Kangkung
Bayam
Buncis
Kubis
Timun
Seledri
Tauge
lalu urutkan berdasarkan alfabet dan lalu tampilkan dengan loop dan beri angka di depannya sehingga menghasilkan output seperti ini:

1. Bayam
2. Buncis
3. Kangkung
4. Kubis
5. Seledri
6. Tauge
7. Timun
*/

console.log("-----------------Jawaban Soal No 5--------------------------")

var daftar_sayuran = "Kangkung Bayam Buncis Kubis Timun Seledri Tauge";
var sayuran=[];
sayuran.push(daftar_sayuran.substr(0,8));
sayuran.push(daftar_sayuran.substr(9,5));
sayuran.push(daftar_sayuran.substr(15,6));
sayuran.push(daftar_sayuran.substr(22,5));
sayuran.push(daftar_sayuran.substr(28,5));
sayuran.push(daftar_sayuran.substr(34,7));
sayuran.push(daftar_sayuran.substr(42,5));

sayuran.sort();
var a=0;
for(var i=0; i< sayuran.length; i++){
    a; a<7; a++;
    console.log(a + '. '+ sayuran[i])
}

