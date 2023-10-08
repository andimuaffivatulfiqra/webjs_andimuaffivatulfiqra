
// percabangan iff else //
var nilai = 10 ;

if (nilai >= 9) {
    console.log("Nilai saya adalah A");
} else if (nilai >= 7) {
    console.log("Nilai saya adalah B");
} else {
    console.log("Nilai saya adalah C");
}

// percabanngan switch case //

var Warna = "Biru";

switch (Warna) {
    case "Hijau":
        console.log("Warna Hijau");
        break;
    case "Kuning":
        console.log("Warna Kuning.");
        break;
    case "Biru":
        console.log("Warna biru.");
        break;
    default:
        console.log("Warna tidak terdeteksi.");
}

// program menggunakan For Statement //

 for (var j = 1; j <= 9; j++) {
    console.log("Angka ke-" + j);
}

// Program menggunakan while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Pemrograman menggunakan do while
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// Pemrograman menggunakan function
function tambah(a, b) {
  return a + b;
}
var hasilTambah = tambah(4, 2);

console.log("Hasil Penambahan: " + hasilTambah);
