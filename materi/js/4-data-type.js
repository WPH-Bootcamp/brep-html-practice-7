// DATA TYPES
/**
 * Primitive Data Types :
 * 1. String -> character dan/atau teks
 * 2. Number -> nilai angka (desimal dan bulat)
 * 3. Boolean -> nilai logika (true/false)
 * 4. null -> kosong
 * 5. undefined -> belum didefinisikan
 * 6. symbol -> simbol
 */

/**
 * Reference Data Types :
 * 1. Object -> struktur data dengan pasangan key dan value
 * 2. Array -> struktur data yang dipisah melalui index
 * 3. Class
 * 4. function
 * 5. ...
 *
 */

// 1. Primitive Data Types
let nama = "Ucup";
console.log(nama);

let umur = 25;
console.log(umur);

let sudahMakan = true;
console.log(sudahMakan);

let biodata = null;
console.log(biodata);

let pacar = undefined;
console.log(pacar);

let id = Symbol("id");
console.log(id);

// 2. Reference Data Types
const biodataKaryawan = {
  nama: "Ucup",
  umur: 20,
};

console.log(biodataKaryawan.nama);
biodataKaryawan.nama = "renday";
console.log(biodataKaryawan.nama);

console.log(biodataKaryawan);

// 3. Cek Tipe Data (typeof)
console.log(typeof biodataKaryawan);
console.log(typeof nama);
console.log(typeof umur);
console.log(typeof sudahMakan);

// Anomali Javascript
console.log(typeof null);
console.log(typeof NaN);
