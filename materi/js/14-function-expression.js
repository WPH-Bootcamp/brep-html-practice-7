// Function Expression -> Function yang disimpan dalam variabel

const sayHi = function (sayOla) {
  return sayOla();
};

console.log(
  sayHi(function () {
    return "Olaaa";
  }),
);

// Note : Anonim function tidak bisa dibuat tanpa ada variabel atau sebagai callback

const fn = function (a, b) {
  return a + b;
};
console.log(fn(2, 5));

// Callback = fungsi yang dikirim sebagai argumen
function sapa(nama) {
  return "Halo " + nama;
}

function proses(callback) {
  return callback("Budi");
}

console.log(proses(sapa));

const dataSiswa = ["Renday", "Ucup", "Susi", "DLL"];
dataSiswa.forEach(function (data) {
  console.log(data);
});

// IIFE -> Immediately Invoked Function Expression
(function () {
  console.log("Langsung jalan");
})();
