console.log("========= Soal 1");
function halo() {
    return "Halo Sanbers!";
}

console.log(halo()); // "Halo Sanbers!"

console.log("======== Soal 2");

function kalikan(a, b) {
    return a * b;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

console.log("======= Soal 3");

function introduce(nama, umur, alamat, hoby) {
    return (
        "Nama saya " +
        nama +
        ", umur saya " +
        umur +
        " tahun, alamat saya di " +
        alamat +
        ", dan saya punya hobby yaitu " +
        hoby +
        "!"
    );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

console.log("======== Soal 4");

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objEmpat = {
    nama: arrayDaftarPeserta[0],
    "jenis kelamin": arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    "tahun lahir": arrayDaftarPeserta[3],
};

console.log(objEmpat);

console.log("======== Soal 5");

let soalLima = [
    {
        nama: "strawberry",
        warna: "merah",
        "ada bijinya": "tidak",
        harga: 9000,
    },
    {
        nama: "jeruk",
        warna: "oranye",
        "ada bijinya": "ada",
        harga: 8000,
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "ada",
        harga: 10000,
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 5000,
    },
];

console.log(soalLima[0]);




console.log("======== Soal 6");

var dataFilm = []

function tamabahData(nama, durasi , genre, tahun) {
    let obj = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    }

    if (typeof nama === 'undefined' || typeof durasi === 'undefined' || typeof genre === 'undefined' || typeof tahun === 'undefined' ) {
        return console.log("Data tidak lengkap", obj)
    }

    dataFilm.push(obj)
}

console.log(dataFilm)

tamabahData("film1", "30 menit", "genre1", 2016)
console.log(dataFilm)

tamabahData("film2", "1 jam", "genre2", 2018)
console.log(dataFilm)