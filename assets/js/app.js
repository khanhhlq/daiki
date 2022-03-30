
// 🌱 Code này tải IFrame Player API.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 🌵 Khởi tạo biến để tương tác với video
let player;

// 💡 Hàm lấy dữ liệu video trên youtube về bằng id video
const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    })
}


// 🔊 Bắt đầu phát
const playVideo = () => player.playVideo()

// 🔈 Tạm dừng 
const pauseVideo = () => player.pauseVideo()

// 🔴 Phát ngay lần đầu tiên
const onPlayerReady = (event) => event.target.playVideo()





