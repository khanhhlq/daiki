
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
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
    });
}

const playVideo = () => {
    player.playVideo()
}

const onPlayerReady = (event) => {
    event.target.playVideo()
}

const pauseVideo = () => {
    player.pauseVideo()
}

// 
const setVolume = () => {

}