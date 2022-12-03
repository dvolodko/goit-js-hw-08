import Player from '@vimeo/player';
import { save, load, remove } from "./storage";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime;

const SavingCurrentTimeToLocalStorage = function (data) {
    currentTime = localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}

player.setCurrentTime(currentTime).then

player.on('timeupdate', SavingCurrentTimeToLocalStorage);
