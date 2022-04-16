let backGround = {
    name1: 'lofi hip hop radio - beats to relax/study to',
    bg1: 'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif',
    name2: 'coffee shop radio // 24/7 lofi hip-hop beats',
    bg2: 'https://i.gifer.com/2swA.gif',
    name3: 'Jazz Piano Music - Relaxing Slow Jazz 24/7 for Work, Sleep, Study and Relax',
    bg3: 'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif',
    name4: 'jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7]',
    bg4: 'https://c.tenor.com/wch_imF_RLUAAAAC/lofi.gif'
}


let idVideo = {
    song1: '5qap5aO4i9A',
    song2: '-5KAN9_CzSA',
    song3: 'DrmcAh2FRHQ',
    song4: 'kgx4WGK0oNU'
}


let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")
let btn4 = document.getElementById("btn-4")
let bg = document.getElementById("background")
let ytb = document.getElementById('YouTube-video-id')

let nameSong = document.getElementById("name-song");

btn1.addEventListener("click", () => {
    bg.src = backGround.bg1
    ytb.value = idVideo.song1
    nameSong.innerHTML = backGround.name1
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn2.addEventListener("click", () => {
    bg.src = backGround.bg2
    ytb.value = idVideo.song2
    nameSong.innerHTML = backGround.name2
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn3.addEventListener("click", () => {
    bg.src = backGround.bg3
    ytb.value = idVideo.song3
    nameSong.innerHTML = backGround.name3
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

btn4.addEventListener("click", () => {
    bg.src = backGround.bg4
    ytb.value = idVideo.song4
    nameSong.innerHTML = backGround.name4
    document.getElementById("pause").classList.add("displayNone")
    document.getElementById("play").classList.remove("displayNone")
    youTubePlayerChangeVideoId()
})

