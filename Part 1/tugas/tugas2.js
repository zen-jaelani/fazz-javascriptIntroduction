const mtk = 80;
const bahasaIndonesia = "90";
const bahasaInggris = "89";
const ipa = 69;
const mapel = [mtk, bahasaIndonesia, bahasaInggris, ipa];

if (mapel.every(Number)) {

    let avg = (+mtk + +bahasaIndonesia + +bahasaInggris + +ipa) / 4.0; //unary

    let grade =
        avg > 100 || avg < 0 ? "Invalid" :
        avg >= 90 ? "A" :
        avg >= 80 ? "B" :
        avg >= 70 ? "C" :
        avg >= 60 ? "D" : "E";

    console.log(`
    Rata-rata = ${avg}
    Grade = ${grade}
    `);

} else {

    console.log("Input error : pastikan semua mata pelajaran sudah diisi dengan benar");

}