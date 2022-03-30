
// 🌱 Code này tải IFrame Player API.
let tag = document.createElement('script');

// 🌵 Khởi ạo biến để tương tác với video
let player;

tag.src = "https://www.youtube.com/iframe_api";

// 💦 Xử lí API
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 💡 Hàm lấy dữ liệu video trên youtube về bằng id video
const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '5qap5aO4i9A',
        playerVars: {
            'autoplay': 0,
            'controls': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    })
}

// 🔊 Bắt đầu phát
const playVideo = () => player.playVideo()

// 🔈 Tạm dừng 
const pauseVideo = () => player.pauseVideo()

// 🔴 Phát ngay lần đầu tiên
const onPlayerReady = (event) => event.target.playVideo()