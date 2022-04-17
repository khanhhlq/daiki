let data = [
    {
        song1: '5qap5aO4i9A',
        name1: 'lofi hip hop radio - beats to relax/study to',
        bg1: 'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif',
    },
    {
        song2: '-5KAN9_CzSA',
        name2: 'coffee shop radio // 24/7 lofi hip-hop beats',
        bg2: 'https://i.gifer.com/2swA.gif'
    },
    {
        song3: 'DrmcAh2FRHQ',

        name3: 'Jazz Piano Music - Relaxing Slow Jazz 24/7 for Work, Sleep, Study and Relax',
        bg3: 'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif'
    },
    {
        song4: 'kgx4WGK0oNU',
        name4: 'jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7]',
        bg4: 'https://c.tenor.com/wch_imF_RLUAAAAC/lofi.gif'
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
        bg.src = data[0].bg1
    }, 500)
    ytb.value = data[0].song1
    nameSong.innerHTML = data[0].name1
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn2.addEventListener("click", () => {
    bg.src = document.getElementById("preload2").src
    setTimeout(() => {
        bg.src = data[1].bg2
    }, 500)
    ytb.value = data[1].song2
    nameSong.innerHTML = data[1].name2
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn3.addEventListener("click", () => {
    bg.src = document.getElementById("preload1").src
    setTimeout(() => {
        bg.src = data[2].bg3
    }, 500)
    ytb.value = data[2].song3
    nameSong.innerHTML = data[2].name3
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn4.addEventListener("click", () => {
    bg.src = document.getElementById("preload2").src
    setTimeout(() => {
        bg.src = data[3].bg4
    }, 500)
    ytb.value = data[3].song4
    nameSong.innerHTML = data[3].name4
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

let previous = document.getElementById("previous")
let forward = document.getElementById("forward")

previous.addEventListener("click", () => {
    idVideo--
})
// forward.addEventListener("click", forSong)

