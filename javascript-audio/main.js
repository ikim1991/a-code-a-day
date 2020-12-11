// const audio = document.getElementById('audio');
const playbtn = document.getElementById('play');
const pausebtn = document.getElementById('stop');
// let count = 0;

// const playPause = () => {
//     if(count === 0){
//         count = 1;
//         audio.play();
//     } else{
//         count = 0;
//         audio.pause();
//     }
// }

// playbtn.addEventListener('click', playPause)
// pausebtn.addEventListener('click', playPause)

let audio = new Audio('./a-team.mp4');

playbtn.addEventListener('click', () => {
    audio.play();
})

pausebtn.addEventListener('click', () => {
    audio.pause();
})