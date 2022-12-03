import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savingCurrentTimeToLocalStorage = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

const currentTimeFromLocalStorage = localStorage.getItem(
  'videoplayer-current-time'
);

const parsedCurrentTimeFromLocalStorage = JSON.parse(
  currentTimeFromLocalStorage
);

player.setCurrentTime(parsedCurrentTimeFromLocalStorage);

player.on('timeupdate', throttle(savingCurrentTimeToLocalStorage, 1000));
