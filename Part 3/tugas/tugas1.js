const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

//a. then catch
cekHariKerja("senin")
    .then((result) => console.log(`a.then catch : ${result}`))
    .catch((error) => console.log(error));



//b. try catch

async function cek() {
    try {
        let day = "rabu"
        let result = await cekHariKerja(day)
        console.log(`b.try catch : ${result}`);
    } catch (error) {
        console.log(error);
    }
}

cek()