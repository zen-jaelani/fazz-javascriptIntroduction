//1. Konversi suhu fanrenheit ke celcius

const temperature = (input) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("#Konversi fahrenheit ke celcius\n");
            if (typeof(input) == "number") {

                let result = ((input - 32) * 5 / 9).toFixed(2)

                resolve(result)
            } else {
                reject(new Error("pastikan input sudah benar"))
            }
        }, 300);
    })
let input = 100
temperature(input)
    .then((result) => console.log(`${input}F = ${result}C`))
    .catch((error) => console.log(error))
    .finally(() => console.log("=".repeat(30)))

// 2. Game Batu Kertas Gunting

const choice = ["batu", "kertas", "gunting"]

const player = (player) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            player = player.toLowerCase()
            if (typeof(player) == "string" && choice.includes(player)) {
                resolve(player)
            } else {
                reject(new Error("hanya ada pilihan batu,kertas dan gunting"))
            }
        }, 100);
    })

const computer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            random = Math.floor(Math.random() * 3)
            resolve(choice[random])
        }, 300);
    })

const play = (player, computer) => {
    setTimeout(() => {
        let result
        let pilihan = {
            batu: { kalah: "kertas", menang: "gunting" },
            kertas: { kalah: "gunting", menang: "batu" },
            gunting: { kalah: "batu", menang: "kertas" }
        }
        if (pilihan[player].menang == computer) {
            result = "Player menang"
        } else if (pilihan[player].kalah == computer) {
            result = "Computer menang"
        } else {
            result = "Pertandingan seri"
        }
        console.log(
            "#permainan batu kertas gunting \n",
            "\nPlayer memilih: " + player,
            "\nComputer memilih: " + computer,
            "\nHasil permainan: " + result
        );
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