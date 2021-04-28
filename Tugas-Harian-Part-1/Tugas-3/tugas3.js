// soal 1
//saya Senang belajaR JAVASCRIPT
console.log('--------- Jawaban Soal No 1 ----------')
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript"; 

var kataKedua_1 = kataKedua.charAt(0);
console.log(kataKedua_1);
var kataKedua_1_Besar = kataKedua_1.toUpperCase();
console.log(kataKedua_1_Besar);
var kataKedua_Sebagian_Selain_s = kataKedua.substr(1);
console.log(kataKedua_Sebagian_Selain_s); 
var kataKedua_Sebagian_besar = kataKedua_1_Besar.concat(kataKedua_Sebagian_Selain_s);
console.log(kataKedua_Sebagian_besar);

var kataKetiga_1 = kataKetiga.charAt(6);
console.log(kataKetiga_1);
var kataKetiga_r_Besar = kataKetiga_1.toUpperCase();
console.log(kataKetiga_r_Besar);
var kataKetiga_sebagian_selain_r= kataKetiga.substr(0,6);
console.log(kataKetiga_sebagian_selain_r)
var kataKetiga_sebagian_besar = kataKetiga_sebagian_selain_r.concat(kataKetiga_r_Besar);
console.log(kataKetiga_sebagian_besar);

var kataKeempat_Besar = kataKeempat.toUpperCase();
console.log(kataKeempat_Besar);

var gabungan = kataPertama.concat(" ", kataKedua_Sebagian_besar, " ", kataKetiga_sebagian_besar, " ", kataKeempat_Besar);
console.log(gabungan);

//Soal 2
//ubah lah variabel diatas ke dalam integer dan gunakan pada operasi perhitungan dari keliling persegi panjang dan luas segitiga dengan variabel di bawah ini:
//var kelilingPersegiPanjang;
//var luasSegitiga;
console.log("-----------Jawaban Soal No 2------------");
console.log("Diketahui:")
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga= "6";
var tinggiSegitiga = "7";

var panjangPersegiPanjang_1 = parseInt(panjangPersegiPanjang);
console.log("   Panjang Persegi Panjang = " + panjangPersegiPanjang_1);
var lebarPersegiPanjang_1 = parseInt(lebarPersegiPanjang);
console.log("   Lebar Persegi Panjang = " + lebarPersegiPanjang_1);

var alasSegitiga_1 = parseInt(alasSegitiga);
console.log("   Alas Segitiga = " + alasSegitiga_1);
var tinggiSegitiga_1 = parseInt(tinggiSegitiga);
console.log("   Tinggi Segitiga = " + tinggiSegitiga_1);

console.log("Rumus");
console.log("   Keliling Persegi Panjang = 2*(P+L)");
console.log("   Luas Segitiga = (Alas x Tinggi)/2");
console.log("Maka Hasilnya:");

var kelilingPersegiPanjang = 2*(panjangPersegiPanjang_1 + lebarPersegiPanjang_1);
console.log("   Keliling Persegi Panjang = " + kelilingPersegiPanjang);

var luasSegitiga= (alasSegitiga_1*tinggiSegitiga_1)/2;
console.log("   Luas Segitiga = " + luasSegitiga);

// Soal 3
//selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:
//Kata Pertama: wah
//Kata Kedua: javascript
//Kata Ketiga: itu
//Kata Keempat: keren
//Kata Kelima: sekali
console.log("------------Jawaban Soal No 3--------------")

var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord= sentences.substring(4,14); // do your own! 
var thirdWord= sentences.substring(15,18); // do your own! 
var fourthWord= sentences.substring(19,24); // do your own! 
var fifthWord= sentences.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

//Soal 4
//tentukan indeks nilai dari nilaiJohn dan nilaiDoe (tampilkan dengan console.log) dengan kondisi :
//nilai >= 80 indeksnya A
//nilai >= 70 dan nilai < 80 indeksnya B
//nilai >= 60 dan nilai < 70 indeksnya c
//nilai >= 50 dan nilai < 60 indeksnya D
//nilai < 50 indeksnya E
console.log("-------------Jawaban Soal No 4----------------")
var nilaiJohn = 80;
var nilaiDoe = 50;

console.log("Nilai John :")
if (nilaiJohn >= 80){
    console.log("indeksnya A")
} else if (nilaiJohn >=70 && nilaiJohn < 80 ){
    console.log("indeksnya B")
} else if (nilaiJohn >=60 && nilaiJohn < 70){
    console.log("indeksnya C")
} else if (nilaiJohn >=50 && nilaiJohn < 60){
    console.log("indeksnya D")
}else if (nilaiJohn <=50){
    console.log("indeksnya E")
}

console.log("Nilai Doe :")
if (nilaiDoe >= 80){
    console.log("indeksnya A")
} else if (nilaiDoe >=70 && nilaiDoe < 80 ){
    console.log("indeksnya B")
} else if (nilaiDoe >=60 && nilaiDoe < 70){
    console.log("indeksnya C")
} else if (nilaiDoe >=50 && nilaiDoe < 60){
    console.log("indeksnya D")
}else if (nilaiDoe <=50){
    console.log("indeksnya E")
}

//Soal 5
console.log("-----------Jawaban Soal No 5--------------")
var tanggal = 1;
var bulan = 5;
var tahun = 1992;

switch(bulan) {
    case 1 : { console.log(tanggal + ' ' + 'Januari' + ' ' + tahun); break}
    case 2 : { console.log(tanggal + ' ' + 'Febuari' + ' ' + tahun); break}
    case 3 : { console.log(tanggal + ' ' + 'Maret' + ' ' + tahun); break}
    case 4 : { console.log(tanggal + ' ' + 'April' + ' ' + tahun); break}
    case 5 : { console.log(tanggal + ' ' + 'Mei' + ' ' + tahun); break}
    case 6 : { console.log(tanggal + ' ' + 'Juni' + ' ' + tahun); break}
    case 7 : { console.log(tanggal + ' ' + 'Juli' + ' ' + tahun); break}
    case 8 : { console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun); break}
    case 9 : { console.log(tanggal + ' ' + 'Septemper' + ' ' + tahun); break}
    case 10 : { console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun); break}
    case 11 : { console.log(tanggal + ' ' + 'November' + ' ' + tahun); break}
    case 12 : { console.log(tanggal + ' ' + 'Desember' + ' ' + tahun); break}
}










