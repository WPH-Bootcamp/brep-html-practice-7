// Function adalah blok kode yang diberikan nama agar mudah untuk dijalankan ketika dipanggil

// Function Declaration
/**
 * Step 1 - Declare Function:
 * function namaFungsi(parameter){
 *  // code here
 * }
 *
 * Step 2 - Calling Function (Invoke):
 * namaFungsi(argument)
 */

function celciusToFahrenheit(celcius) {
  console.log(
    `Celcius : ${celcius} adalah ${(celcius * 9) / 5 + 32} Fahrenheit`,
  );
}

celciusToFahrenheit(12);

// Return -> Mengembalikan nilai ke dalam fungsi
function sayHello(nama = "Type your name") {
  return "Hello " + nama;
}

let hasil = sayHello();
console.log(hasil);

// Rest Parameter
function total(...angka) {
  let sum = 0;

  for (const n of angka) {
    sum += n;
  }

  return sum;
}

console.log(total(10, 20, 10, 100, 20));
