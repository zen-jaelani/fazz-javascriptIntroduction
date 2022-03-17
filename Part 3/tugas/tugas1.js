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
    .then((result) => console.log(`\na.then catch : ${result}`))
    .catch((error) => console.log(error))
    .finally(() => console.log("proses then catch selesai"))

/** Penjelasan then catch
 *  program dimulai dengan pemanggilan function promise yang bernama cekHariKerja
 *  yang memiliki parameter sesuai dengan keinginan user dan function Promise akan masuk tahap pending.
 * 
 *  jika function dijalankan tanpa masalah maka Promise akan dinyatakan fulfilled dan parameter
 *  resolve dapat dipanngil dan diberi value pada parameternya
 * 
 *  jika function dijalankan dan tidak memenuhi syarat atau terjadi error maka Promise akan dinyatakan
 *  rejected dan parameter reject dapat dipanggil dan dapat diberi error message pada parameternya
 *   
 *  jika hasil resolve atau reject dipanggil secara langsung maka akan output object yang berisi parameter promise atau pending
 *  jadi perlu dilakukan handling dengan .then .catch
 *  .then digunakan untuk menjalankan callback di dalam parameter saat Promise yang sudah terresolve atau berstatus fulfilled
 *  .then dapat digunakan secara berantai selama proses yang dipanggil tidak ada yang gagal atau error
 * 
 *  .catch akan menjalankan callback jika ada function Promise atau .then yang berstatus gagal atau rejected
 * 
 *  ada juga hadling .finally yang akan menjalankan callback setelah semua proses .then dan .catch selesai tanpa menghiraukan status Promise
 */

//b. try catch

async function cek(day) {
    try {
        let result = await cekHariKerja(day)
        console.log(`\nb.try catch : ${result}`);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("proses try catch selesai");
    }
}
cek("rabu")

/**Penjelasan try catch
 * function cek ditambahkan keyword async untuk mengubah function biasa menjadi async function
 * 
 * try digunakan untuk menjalankan dan mengecek proses yang ada di dalam kurung kurawal 
 * yang mana disini digunakan untuk menjalankan function Promise cekHariKerja
 * dan jika proses dalam function cekHariKerja tidak ada yang gagal atau error maka Promise dinyatakan
 * fulfilled dan parameter resolve dapat diberikan value 
 * dan value dari parameter resolve akan di tampung di dalam variable result dan ditampilkan
 * 
 * await dapat membuat function cekHariKerja menjadi synchronous dengan cara menunda proses yang
 * ada hingga Promise mengeluarkan hasil bahwa Promise resolved atau rejected 
 * 
 * cek function akan menjalankan catch jika ada Promise function di dalam proses try berstatus gagal atau rejected 
 * value yang ada di dalam parameter reject milik Promise function akan di kirim ke parameter
 * catch dan nantinya dapat ditampilkan error messagenya
 * 
 * proses di dalam finally akan dijalankan jika proses try dan catch selesai dijalankan tanpa
 * menhiraukan hasil proses try dan catch 
 */