var readBooksPromise = require("./promise.js");

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
];

var i = 0;
var waktuSebelumnya;
function callback(time) {
    let book = books[i];

    if (time !== waktuSebelumnya && i !== books.length && time > 0) {
        readBooksPromise(time, book)
            .then((sisaWaktu) => callback(sisaWaktu))
            .catch(() => {});
    }

    i++;
    waktuSebelumnya = time;
}

callback(10000);
