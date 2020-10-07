var readBooks = require("./callback.js");

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "komik", timeSpent: 1000 },
];

var i = 0;
var waktuSebelumnya;
function callback(time) {
    let book = books[i];

    if (time !== waktuSebelumnya && i !== books.length && time > 0) {
        readBooks(time, book, callback);
    }

    i++;
    waktuSebelumnya = time;
}

callback(10000);
