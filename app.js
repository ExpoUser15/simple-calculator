const readline = require('readline');
let pembagian = require("./pembagian");
let penjumlahan = require("./penjumlahan");
let perkalian = require("./perkalian");
let pengurangan = require("./pengurangan");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputNumber(operator){
  rl.question('Masukan Angka Pertama: ', (angkaPertama) => {
    rl.question('Masukan Angka Kedua: ', (angkaKedua) => {
      const a = parseFloat(angkaPertama);
      const b = parseFloat(angkaKedua);
      
        let hasil = 0;
        if(operator === "+"){
            hasil = penjumlahan(a, b);
        }else if(operator === "-"){
            hasil = pengurangan(a, b);
        }else if(operator === "*"){
            hasil = perkalian(a, b);
        }else if(operator === "/"){
            hasil = pembagian(a, b);
        }
        console.log(`Hasil Penjumlahan adalah: ${hasil}`);
        rl.close();
    });
  });
}

rl.question('Pilih Operator: ', (operator) => {
    inputNumber(operator);
});

