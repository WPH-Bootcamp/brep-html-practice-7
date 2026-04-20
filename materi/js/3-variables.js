"use strict";

/**
 * Variabel Declaration :
 * 1. var -> global scope (variabel global), bisa reassigned, bisa redeclare
 * 2. let -> block scope (private scope), bisa reassigned, tidak bisa redeclare
 * 3. const -> block scope (private scope), tidak bisa reassigned ataupun redeclare
 */

// 1. Let
let nama = "Ucup";
console.log(nama);
nama = "Kezia";
console.log(nama);

{
  let nama = "Renday";
  console.log(nama);
  let umur = 20;
}
console.log(umur);
// 2. Const
const gravitasi = 10;
console.log(gravitasi);

// gravitasi = 12;
console.log(gravitasi);

// Var -> Hoisting
console.log(a);
let a = 10;
