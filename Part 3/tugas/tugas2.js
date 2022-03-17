const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = [
            'Januari', 'Februari', 'Maret',
            'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September',
            'Oktober', 'November', 'December'
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry data not found"), [])
        }
    }, 200);
}

function showMonth(cekError, month) {
    if (cekError == null && month.lenght != 0) {
        month.map((item, i) => console.log(`bulan ke-${i+1} adalah ${item}`))
    } else {
        console.log(cekError);
    }
}

getMonth(showMonth)