var daftarNama = [];

function tambahNama(nama, gender) {
    let panggilan = "";
    if (gender === "laki-laki") {
        panggilan = "Bapak";
    } else if (gender === "perempuan") {
        panggilan = "Ibu";
    }

    daftarNama.push({
        nama: nama,
        jenisKelamin: gender,
        panggilan: panggilan,
    });
}

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

daftarNama.forEach(function (each, index) {
    console.log(index + 1 + ".", each.panggilan, each.nama);
});

console.log("================");

function luasLingkarang(jariJari) {
    return Math.PI * jariJari * jariJari;
}

function luasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function luasPersegi(sisi) {
    return sisi * sisi;
}

console.log("Luas Lingkarang, jari-jari=7 adalah", luasLingkarang(7));
console.log("Luas Segitiga, alas=5 tinggi=4 adalah", luasSegitiga(5, 4));
console.log("Luas Persegi, sisi=10 adalah", luasPersegi(10));

console.log("=================")

var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"]

let hasil = []
let i = 0
while (i < daftarAlatTulis.length) {
    let alatTulis = daftarAlatTulis[i]
    let indexStr = alatTulis.substring(0,1)

    hasil[parseInt(indexStr)-1] = alatTulis

    i++
    
    if (i === daftarAlatTulis.length) {
        console.log(hasil.join("\n"))
    }
}


console.log("=================");

var pesertaLomba = [
    ["Budi", "Pria", "172cm"],
    ["Susi", "Wanita", "162cm"],
    ["Lala", "Wanita", "155cm"],
    ["Agung", "Pria", "175cm"],
];

var arrayObject = [
    {
        nama: "Budi",
        jenisKelamin: "Pria",
        tinggi: "172cm",
    },
    {
        nama: "Susi",
        jenisKelamin: "Wanita",
        tinggi: "162cm",
    },
    {
        nama: "Lala",
        jenisKelamin: "Wanita",
        tinggi: "155cm",
    },
    {
        nama: "Agung",
        jenisKelamin: "Pria",
        tinggi: "175cm",
    },
];

arrayObject.forEach(function(each, index) {
    console.log(each)
})
