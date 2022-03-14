const printSegitiga = "5";
let result = "";
if (!isNaN(printSegitiga)) {
    for (let i = printSegitiga; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }
        result += "\n";
    }
} else {
    result = "Data harus number";
}
console.log(result);