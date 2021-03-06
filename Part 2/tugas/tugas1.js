// 10 Javascript Built-in function

let a = "ini di ulang,";

//1. repeat() = return string yang diulang sebanya parameter yang ditentukan

console.log(a.repeat(3));

//2. replace() = mengubah string yang sesuai dengan parameter pertama dan diubah menjadi parameter kedua

console.log(a.replace("ulang,", "ganti."));

//3. slice() = menghapus perhuruf / array sesuai parameter yang ditentukan

console.log(a.slice(4));
console.log([1, 2, 3, 4].slice(2));

//4. Date() = return string tanggal dan waktu method di run 

console.log(Date());


//5. toExponential() = return number yang disingkat seperti yang ada di kalkulator saat panjang number melebihi digit yang ditentukan

let b = 5555555555555555555555555555555555555555555555555555555555555555555555
console.log(b.toExponential(10));

//6.  Math.random() = return angka acak antara 0 dan 1 dan dengan sedikit rumus dapat return range angka yang diinginkan

let c = Math.random() * 100
console.log(c);

//7. Math.round() = membulatkan angka decimal

console.log(Math.round(c));

//8. Math.sqrt() = return hasil akar kuadrat parameter

console.log(Math.sqrt(25));

//9. every() = mengecek value array sesuai dengan persyaratan yang ditentukan dan nantinya akan return boolean

const arr = [1, 2, 3, 4, 5];
console.log(arr.every((x) => x <= 5));

//10. Object.freeze() = membuat object tidak dapat diganti valuenya

let obj = {
    key: "value",
    prop: 1
}
Object.freeze(obj)
obj.key = "value2"
obj.prop = 3
console.log(obj);