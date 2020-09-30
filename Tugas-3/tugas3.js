console.log("=============== SOAL 1 ===============");
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var jawabanSatu =
    kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat;
var jawabanSatuLainnya =
    kataPertama +
    " " +
    kataKedua +
    " " +
    kataKetiga +
    " " +
    kataKeempat.toLocaleUpperCase();
console.log(jawabanSatu);
console.log(jawabanSatuLainnya);

console.log("=============== SOAL 2 ===============");
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jawabanDua =
    parseInt(kataPertama) +
    parseInt(kataKedua) +
    parseInt(kataKetiga) +
    parseInt(kataKeempat);
console.log(jawabanDua);

console.log("=============== SOAL 3 ===============");
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25, 31); // do your own!

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali

console.log("=============== SOAL 4 ===============");
var nilai;

if (nilai >= 80) {
    console.log("A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("D");
} else {
    console.log("E");
}

// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E

console.log("=============== SOAL 5 ===============");
var tanggal = 22;
var bulan = 7;
var tahun = 2020;
//  Maka hasil yang akan tampil di console adalah: '22 Juli 2020';

var bulanStr = "";
switch (bulan) {
    case 1:
        bulanStr = "Januari";
        break;
    case 2:
        bulanStr = "Februari";
        break;
    case 3:
        bulanStr = "Maret";
        break;
    case 4:
        bulanStr = "April";
        break;
    case 5:
        bulanStr = "Mei";
        break;
    case 6:
        bulanStr = "Juni";
        break;
    case 7:
        bulanStr = "Juli";
        break;
    case 8:
        bulanStr = "Agustus";
        break;
    case 9:
        bulanStr = "September";
        break;
    case 10:
        bulanStr = "Oktober";
        break;
    case 11:
        bulanStr = "November";
        break;
    case 12:
        bulanStr = "Desember";
        break;
}

console.log(tanggal.toString(), bulanStr, tahun.toString());
