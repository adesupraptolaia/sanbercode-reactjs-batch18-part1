console.log("=================== SOAL 1 ==================");

const luasLingkarang = (jariJari) => {
    let hasil = 0;

    if (typeof jariJari !== "number") {
        return "Paramter yang anda masukkan Salah!!!";
    }

    const phi = Math.PI;
    hasil = phi * jariJari * jariJari;

    return hasil;
};

const kelilingLingkarang = (jariJari) => {
    let hasil = 0;

    if (typeof jariJari !== "number") {
        return "Paramter yang anda masukkan Salah!!!";
    }

    const phi = Math.PI;
    hasil = 2 * phi * jariJari;

    return hasil;
};

console.log("Luas Lingkarang jari-jari=10 :", luasLingkarang(10));
console.log("Keliling Lingkarang jari-jari=10 :", kelilingLingkarang(10));

console.log("\n\n=================== SOAL 2 ==================");

let kalimat = "";

const tambahKata = (kata) => {
    kalimat += `${kata} `;
};

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");

console.log(kalimat);

console.log("\n\n=================== SOAL 3 ==================");

const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`);
        },
    };
};

//Driver Code
newFunction("William", "Imoh").fullName();

console.log("\n\n=================== SOAL 4 ==================");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation } = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation);

console.log("\n\n=================== SOAL 5 ==================");

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);
