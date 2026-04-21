// Object adalah kumpulan data dalam bentuk key-value

// 1. Object Literal
const dataSiswa = {
  nama: "Ucup",
  umur: 20,
  sapa() {
    return this.nama;
  },
};

dataSiswa.alamat = "Jl Untung";

console.log(dataSiswa);
console.log(dataSiswa.umur);
console.log(dataSiswa.sapa());
console.log(dataSiswa["nama"]);

// 2. Constructor Object
const dataMahasiswa = new Object();
dataMahasiswa.nama = "Ucup";
dataMahasiswa.alamat = "Jalan Sukarno Hatta";
console.log(dataMahasiswa);

// Computed Property
const key = "umur";

const user = {
  [key]: 21,
};

console.log(user);

// Cek Property
console.log(dataSiswa.hasOwnProperty("nama"));
console.log("nama" in dataSiswa);

// Object Method Bawaan untuk mengecek isi dari object
console.log(Object.keys(dataSiswa));
console.log(Object.values(dataSiswa));
console.log(Object.entries(dataSiswa));
