
import { songs } from './song.js';

let sortSongArray = [];
const songsNum = Object.keys(songs).length;
for (var sortArr = [], i = 0; i < songsNum; ++i) sortArr[i] = i;

const shuffle = array => {
  let tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }

  return array;
}

sortArr = shuffle(sortArr);
Object.keys(songs).map((key, index) => {
  const sortKey = sortArr.shift();
  const songId = songs[key]['id'];
  const startSec = songs[key]['startSec'];
  sortSongArray[sortKey] = {
    'name'           : key,
    'urlPath'        : `https://www.youtube.com/embed/${songId}?start=${startSec}` 
  };
  return true;
})


export default sortSongArray;
