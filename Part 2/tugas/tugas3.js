function findNumber(nilaiAwal, nilaiAkhir, dataArray) {
    const param = [nilaiAkhir, nilaiAwal, dataArray].flat(); //mengubah array di dalam array menjadi value
    if (param.every(x => typeof(x) == "number")) { //mengecek semua parameter adalah number dan tidak ada yang tidak diisi

        if (nilaiAwal > nilaiAkhir) {
            return "Nilai akhir harus lebih besar dari nilai awal"
        } else if (dataArray.length <= 5) {
            return "Jumlah angka dalam dataArray harus lebih dari 5"
        } else {

            let result = dataArray.filter(number => number >= nilaiAwal && number <= nilaiAkhir); //return array yang sudah di seleksi sesuai parameter
            result.sort((a, b) => a - b); // mengurutkan array sesuai rumus yang ada di parameter

            if (result.length == 0) {
                return "Nilai tidak ditemukan"
            } else {
                return result;
            }

        }

    } else {
        return "pastikan semua input benar"
    }
}

console.log(findNumber(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(findNumber(15, 3, [2, 25, 4, 14, 17, 30, 8]))
console.log(findNumber(4, 17, [2, 25, 4]))
console.log(findNumber(5, 17, [2, 25, 4, 1, 30, 18]))