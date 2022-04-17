let data = [
    {
        song: '5qap5aO4i9A',
        name: 'lofi hip hop radio - beats to relax/study to',
        bg: 'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif',
    },
    {
        song: '-5KAN9_CzSA',
        name: 'coffee shop radio // 24/7 lofi hip-hop beats',
        bg: 'https://i.gifer.com/2swA.gif'
    },
    {
        song: 'DrmcAh2FRHQ',
        name: 'Jazz Piano Music - Relaxing Slow Jazz 24/7 for Work, Sleep, Study and Relax',
        bg: 'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif'
    },
    {
        song: 'kgx4WGK0oNU',
        name: 'jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7]',
        bg: 'https://c.tenor.com/wch_imF_RLUAAAAC/lofi.gif'
    }
]


let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")
let btn4 = document.getElementById("btn-4")
let bg = document.getElementById("background")
let ytb = document.getElementById('YouTube-video-id')
let nameSong = document.getElementById("name-song");

btn1.addEventListener("click", () => {
    bg.src = document.getElementById("preload1").src
    setTimeout(() => {
        bg.src = data[0].bg
    }, 500)
    ytb.value = data[0].song
    nameSong.innerHTML = data[0].name
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn2.addEventListener("click", () => {
    bg.src = document.getElementById("preload2").src
    setTimeout(() => {
        bg.src = data[1].bg
    }, 500)
    ytb.value = data[1].song
    nameSong.innerHTML = data[1].name
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn3.addEventListener("click", () => {
    bg.src = document.getElementById("preload1").src
    setTimeout(() => {
        bg.src = data[2].bg
    }, 500)
    ytb.value = data[2].song
    nameSong.innerHTML = data[2].name
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn4.addEventListener("click", () => {
    bg.src = document.getElementById("preload2").src
    setTimeout(() => {
        bg.src = data[3].bg
    }, 500)
    ytb.value = data[3].song
    nameSong.innerHTML = data[3].name
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

let previous = document.getElementById("previous")
let forward = document.getElementById("forward")

let i = -1;


forward.addEventListener("click", () => {
    i++
    if (i < 4 && i >= 0) {
        bg.src = document.getElementById("preload1").src
        setTimeout(() => {
            bg.src = data[i].bg
        }, 500)
        ytb.value = data[i].song
        nameSong.innerHTML = data[i].name
        document.getElementById("pause").classList.add("displayNone")
        document.getElementById("play").classList.remove("displayNone")
        youTubePlayerChangeVideoId()
    } else if (i > 3) {
        i = 0;
        bg.src = document.getElementById("preload1").src
        setTimeout(() => {
            bg.src = data[i].bg
        }, 500)
        ytb.value = data[i].song
        nameSong.innerHTML = data[i].name
        document.getElementById("pause").classList.add("displayNone")
        document.getElementById("play").classList.remove("displayNone")
        youTubePlayerChangeVideoId()
    }
})


previous.addEventListener("click", () => {
    i--
    if (i < 4 && i >= 0) {
        bg.src = document.getElementById("preload1").src
        setTimeout(() => {
            bg.src = data[i].bg
        }, 500)
        ytb.value = data[i].song
        nameSong.innerHTML = data[i].name
        document.getElementById("pause").classList.add("displayNone")
        document.getElementById("play").classList.remove("displayNone")
        youTubePlayerChangeVideoId()
    } else if (i < 0) {
        i = 3;
        bg.src = document.getElementById("preload1").src
        setTimeout(() => {
            bg.src = data[i].bg
        }, 500)
        ytb.value = data[i].song
        nameSong.innerHTML = data[i].name
        document.getElementById("pause").classList.add("displayNone")
        document.getElementById("play").classList.remove("displayNone")
        youTubePlayerChangeVideoId()
    }
})
