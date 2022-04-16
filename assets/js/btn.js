let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")
let btn4 = document.getElementById("btn-4")
let bg = document.getElementById("background")

let nameSong = document.getElementById("name-song");

btn1.addEventListener("click", () => {
    nameSong.innerHTML = "lofi hip hop radio - beats to relax/study to"
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")

})

btn2.addEventListener("click", () => {
    nameSong.innerHTML = "coffee shop radio // 24/7 lofi hip-hop beats"
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    btn2.style.backgroundColor = 'red';
})

btn3.addEventListener("click", () => {
    nameSong.innerHTML = "Jazz Piano Music - Relaxing Slow Jazz 24/7 for Work, Sleep, Study and Relax"
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    btn3.style.backgroundColor = 'red';
})

btn4.addEventListener("click", () => {
    nameSong.innerHTML = "jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7]"
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    btn4.style.backgroundColor = 'red';
})

