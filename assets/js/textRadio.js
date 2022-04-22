let textData = [
    "🍵 Hãy tận hưởng ...",
    "💪 Hãy tiếp tục công việc đi nào!",
    "🌏 Hãy cứu lấy trái đất",
    "🔥 Không được trì hoãn",
    "💺 Rác thải nhựa là kẻ thù của con người",
    "🌊 Fighting",
    "🔴 Đài phát thanh",

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
    }, 27000)
    setTimeout(() => {
        radio.innerHTML = textData[3]
    }, 30000)
    setTimeout(() => {
        radio.innerHTML = textData[4]
    }, 40000)
    setTimeout(() => {
        radio.innerHTML = textData[5]
    }, 50000)
    setTimeout(() => {
        radio.innerHTML = textData[6]
    }, 60000)
}, 5000)
