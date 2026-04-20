// Operator Logika
/**
 * 1. Logika DAN (&&) -> Ketika semua kondisi true, maka hasilnya true
 * 2. Logika OR (||) -> Salah satu saja true, maka hasilnya true
 * 3. Logika NOT (!) -> Membalikkan nilai awal
 */

let sudahMakan = true;
let sudahCuciPiring = false;

console.log(sudahMakan && sudahCuciPiring);
console.log(sudahMakan || sudahCuciPiring);
console.log(!sudahCuciPiring);

// Short Circuit Logic
// 1. AND (&&)
console.log(true && false);
console.log(0 && true);
console.log(undefined && "12");
console.log(1 && true);

// 2. OR (||)
console.log(1 || 0);
console.log(true || 1);
console.log("Test" || 10);
