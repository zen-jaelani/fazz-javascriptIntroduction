const name = [
    "Abigail", "Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(find, size, callback) {
    if (typeof(find) == "string" && typeof(size) == "number" && typeof(callback) == "function") {

        if (size > 0) {

            result = callback(find);
            if (result.length > size) {
                size = result.length - size
                return result.slice(0, -size); // menghapus index array sesuai ketentuan parameter
            } else {
                return result
            }

        } else {
            return "mohon masukkan bilangan lebih dari 0"
        }

    } else {
        return "pastikan input sudah benar"
    }
}

function filterName(input) {
    let result = [];
    name.forEach(x => { // mengekeskusi perintah yang di sediakan di parameter ke setiap index didalam array
        //toLowerCase() digunakan untuk mengubah seluruh string menjadi huruf kecil
        if (x.toLowerCase().includes(input.toLowerCase())) { //includes() digunakan untuk mengecek apakah variable memiliki value yang sama dengan parameter
            result.push(x); //menambahkan value kebagian array yang paling akhir
        }
    });
    return result;
}

console.log(searchName("an", 3, filterName));