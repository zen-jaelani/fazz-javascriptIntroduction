const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = [
            'Januari', 'Februari', 'Maret',
            'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September',
            'Oktober', 'November', 'december'
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry data not found"), [])
        }
    }, 200);
}

function showMonth(cek, month) {
    if (cek == null && month.lenght != 0) {
        return month.map((item, i) => console.log(`bulan ke ${i+1} adalah ${item}`))
    } else {
        return console.log(cek);
    }
}

getMonth(showMonth)