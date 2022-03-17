//1



// 2. Game Batu Kertas Gunting

const choice = ["batu", "kertas", "gunting"]

const player = (player) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            player = player.toLowerCase()
            if (typeof(player) == "string" && choice.includes(player)) {
                resolve(player)
            } else {
                reject(new Error("hanya ada pilihan batu,kertas dan gunting"))
            }
        }, 100);
    })
}
const computer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            random = Math.floor(Math.random() * 3)
            resolve(choice[random])
        }, 300);
    })
}

const play = (a, b) => {
    setTimeout(() => {
        let result
        let pilihan = {
            batu: { kalah: "kertas", menang: "gunting" },
            kertas: { kalah: "gunting", menang: "batu" },
            gunting: { kalah: "batu", menang: "kertas" }
        }
        if (pilihan[a].menang == b) {
            result = "Player menang"
        } else if (pilihan[a].kalah == b) {
            result = "Computer menang"
        } else {
            result = "Pertandingan seri"
        }
        console.log(`
                Player memilih : ${a}
                Computer memilih : ${b}
                Hasil permainan : ${result} 
            `);
    }, 200);
}

async function game() {
    try {
        const playerChoice = await player("kertas")
        const computerChoice = await computer()
        play(playerChoice, computerChoice)
    } catch (error) {
        console.log(error);
    }
}

game()