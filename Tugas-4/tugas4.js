console.log("============= soal 1");

let i = 1;
while (i <= 20) {
    if (i <= 10) {
        if (i == 1) {
            console.log("LOOPING PERTAMA");
        }

        console.log(i * 2 + " - I love coding");
    } else {
        if (i == 11) {
            console.log("LOOPING KEDUA");
        }

        console.log(42 - i * 2 + " - I will become a frontend developer");
    }

    i++;
}

console.log("\n\n============= soal 2");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " - Berkualitas");
    } else if (i % 3 === 0) {
        console.log(i + " - I Love Coding");
    } else {
        console.log(i + " - Santai");
    }
}

console.log("\n\n============= soal 3");
for (let row = 1; row <= 7; row++) {
    let tangga = "";
    for (let col = 1; col <= row; col++) {
        tangga += "#";
    }
    console.log(tangga);
}

console.log("\n\n============= soal 4");
var kalimat = "saya sangat senang belajar javascript";
let hasil = kalimat.split(" ");
console.log(hasil);

console.log("\n\n============= soal 5");
var daftarBuah = [
    "2. Apel",
    "5. Jeruk",
    "3. Anggur",
    "4. Semangka",
    "1. Mangga",
];

let jawabanLima = [];
for (let i = 0; i < daftarBuah.length; i++) {
    num = parseInt(daftarBuah[i].substring(0, 1));

    jawabanLima[num - 1] = daftarBuah[i];
}

console.log(jawabanLima.join("\n"));
