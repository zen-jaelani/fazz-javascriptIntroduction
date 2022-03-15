function findNumber(nilaiAwal, nilaiAkhir, dataArray) {
    let result
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        result = dataArray.filter(number => number >= nilaiAwal && number <= nilaiAkhir);
        result.sort((a, b) => a - b);
    }
    return result;
}

console.log(findNumber(5, 20, [2, 25, 4, 14, 17, 30, 8]));