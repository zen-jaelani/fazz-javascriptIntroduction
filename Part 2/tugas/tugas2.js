const name = [
    "Abigail", "Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(find, size, callback) {
    let result = callback(find);
    size = result.length - size
    size
    return result.slice(0, -size);
}

function filterName(input) {
    let result = [];
    name.forEach(element => {
        if (element.toLowerCase().includes(input.toLowerCase())) {
            result.push(element);
        }
    });

    return result;
}

console.log(searchName("an", 3, filterName));