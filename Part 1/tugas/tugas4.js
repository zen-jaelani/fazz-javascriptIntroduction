let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let result1 = {
    ...data,
    name: "Foo",
    email: "foo@mail.com",
    hobby: "gaming"
}
console.log(result1);

const { street, city } = data.address;
console.log(`
    Street : ${street}
    City   : ${city}
`);