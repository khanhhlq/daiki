
// 🌱 Code này tải IFrame Player API.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

// 🌵 Khởi ạo biến để tương tác với video
let player;

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 💡 Hàm lấy dữ liệu video trên youtube về bằng id
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '5qap5aO4i9A',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    })
}

// 🔊 Bắt đầu phát
const playVideo = () => {
    player.playVideo()
}

// 🔈 Tạm dừng 
const pauseVideo = () => {
    player.pauseVideo()
}

const setVolume = () => {

}

const onPlayerReady = (event) => {
    event.target.playVideo()
}