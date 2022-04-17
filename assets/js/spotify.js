let spotify = document.getElementById("spotify")
let btnSpotify = document.getElementById("btn-5")
let btnSpotify2 = document.getElementById("btn-6")
let nowrap = document.getElementById("nowrap")

btnSpotify.addEventListener("click", () => {
    spotify.classList.remove("displayNone");
    btnSpotify.classList.add("displayNone");
    btnSpotify2.classList.remove("displayNone");
})

btnSpotify2.addEventListener("click", () => {
    spotify.classList.add("displayNone");
    btnSpotify.classList.remove("displayNone");
    btnSpotify2.classList.add("displayNone");
})