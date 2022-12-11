import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const savingCurrentTimeToLocalStorage = function (data) {
  save(STORAGE_KEY, data.seconds);
};

function resumePlayback() {
  const savedFormData = load(STORAGE_KEY);

  if (savedFormData) {
    player.setCurrentTime(savedFormData);
  }
}

resumePlayback();

player.on('timeupdate', throttle(savingCurrentTimeToLocalStorage, 1000));
