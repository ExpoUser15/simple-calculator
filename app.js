let pembagian = require("../simple-calculator/pembagian");
let penjumlahan = require("../simple-calculator/penjumlahan")


const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Masukan Angka Pertama: ', (angkaPertama) => {
    rl.question('Masukan Angka Kedua: ', (angkaKedua) => {
      const a = parseFloat(angkaPertama);
      const b = parseFloat(angkaKedua);
      
        const hasil = a + b;
        console.log(`Hasil Penjumlahan adalah: ${hasil}`);
      

      rl.close();
    });
  });