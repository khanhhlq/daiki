let textData = [
    "🍵 Hãy tận hưởng ...",
    "💪 Hãy tiếp tục công việc đi nào!",
    "🔥 Không được trì hoãn",
    "🌊 Fighting",
    "🔴 Đài phát thanh"
]

let radio = document.getElementById("radio-text")

setInterval(() => {
    setTimeout(() => {
        radio.innerHTML = textData[0]
    }, 7000)

    setTimeout(() => {
        radio.innerHTML = textData[1]
    }, 20000)

    setTimeout(() => {
        radio.innerHTML = textData[2]
    }, 30000)

    setTimeout(() => {
        radio.innerHTML = textData[3]
    }, 40000)

    setTimeout(() => {
        radio.innerHTML = textData[4]
    }, 100000)
}, 5000)
