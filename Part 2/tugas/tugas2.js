const name = [
    "Abigail", "Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(find, size, callback) {
    let result = find
    if (size > 0) {
        result = callback(find);
        if (result.length > size) {
            size = result.length - size
            return result.slice(0, -size);
        } else {
            return result
        }
    } else {
        return "mohon masukkan bilangan lebih dari 0"
    }
}

function filterName(input) {
    let result = [];
    name.forEach(x => {
        if (x.toLowerCase().includes(input.toLowerCase())) {
            result.push(x);
        }
    });
    return result;
}

console.log(searchName("an", 4, filterName));