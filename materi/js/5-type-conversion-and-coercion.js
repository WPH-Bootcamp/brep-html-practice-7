"use strict";

// 1. Explicit Conversion
let angka1 = "20";
console.log(Number(angka1));

// Anomali Javascript
let angka2 = 20;
console.log(angka1 == angka2);

let string1 = true;
console.log(string1 + 1);
console.log(String(string1 + 1 + 10));

let tiggiBadan = "182.5 cm";
console.log(parseFloat(tiggiBadan));

let kecepatanMotor = "20 km/jam";
console.log(parseInt(kecepatanMotor));

// 2. Implicit Coercion
console.log(5 * 2 + "5"); // Concateantion -> ketika menggabungkan 1 string di salah satu tipe data
console.log(5 + 5);
console.log("4" * "2");
