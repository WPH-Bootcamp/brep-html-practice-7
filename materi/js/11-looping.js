// Looping -> Perulangan
// 1. for Loop
/**
 * for(inisialisasi; kondisi; step){
 *  // code here
 * }
 */

for (i = 1; i <= 10; i += 1) {
  console.log(i);
}

// 2. for...of Loop
const makanan = ["Nasi Goreng", "Pizza", "KFC", "Richesee"];

for (i = 0; i < makanan.length; i++) {
  console.log(makanan[i]);
}

console.log("===========");

for (item of makanan) {
  console.log(item);
}

// 3. while Loop
/**
 * inisialisasi;
 *
 * while(kondisi){
 *  // code here
 *  step;
 * }
 */

let j = 1;
while (j <= 0) {
  console.log(j, "dari while");
  j++;
}

console.log("===========");

// 4. do...while Loop
/**
 * inisialisasi;
 *
 * do{
 *  // code here
 *  step
 * }while(kondisi)
 */

let k = 1;
do {
  console.log(k, "dari do...while");
  k++;
} while (k <= 0);

console.log("===========");

// 5. break Keyword -> Menghentikan looping
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("===========");

// 6. continue Keyword -> Melewati looping
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
