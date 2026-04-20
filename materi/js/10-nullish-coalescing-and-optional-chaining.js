/**
 * Falsy :
 * -. false
 * -. 0
 * -. undefined
 * -. null
 * -. NaN
 * -. dll
 */

let score = 0;

// Operator OR(||) -> Melihat nilai falsy
let hasil = score || "default";
console.log(hasil);

// 1. Nullish Coalescing (&&) -> Hanya melihat nilai null dan undefined
let hasilNC = score ?? "default";
console.log(hasilNC);

// 2. Optional Chaining (?.) -> Menghentikan error dalam mengakses struktur data reference seperti object, array, dll
let biodata = {
  nama: "Ucup",
};
console.log(biodata?.alamat?.kota?.desa?.noRmh ?? "GA ADA RUMAH NYA NIH BOS");
