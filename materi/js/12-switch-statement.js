// switch...case -> switch digunakan untuk membandingkan satu nilai ke banyak kemungkinan.
/**
 * switch(kondisi){
 *  case ...:
 *      // code here
 *      break;
 *  case ...:
 *      // code here
 *      break;
 *  default:
 *      // code here
 * }
 */

let trafficLight = "red";

switch (trafficLight) {
  case "red":
    console.log("Lampu sedang merah, berhentii duluu....");
    break;
  case "yellow":
    console.log("Lampu sedang kuning, siapp-siapp berjalan....");
    break;
  case "green":
    console.log("Lampu sudah hijau, silahkan jalan....");
    break;
  default:
    console.log("Lampu lalu lintas sedang rusak");
}


