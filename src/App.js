import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, 
    Row,
    Col, 
    Button 
} from 'react-bootstrap';
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
})

const App = () => {
  const [gameStatus, setGameStatus] = useState(-1);
  const changeStatus = statusCode => {
    setGameStatus(statusCode);
  }
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="top">猜歌遊戲</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          { gameStatus == -1 && (
            <Button 
              className="center"
              size="lg" 
              variant="primary" 
              onClick={e => changeStatus(0)}
            >
              開始遊戲
            </Button>
            )
          }
          { gameStatus != -1 && [
              <h3>歌名：{sortSongArray[gameStatus]['name']}</h3>,
              <iframe 
                width="100%" 
                height="auto" 
                src={sortSongArray[gameStatus]['urlPath']}  
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>,
              <Button 
                className="center"
                size="lg" 
                variant="primary" 
                onClick={e => changeStatus(gameStatus + 1)}
              >
                下一題
              </Button>
            ]
          }
        </Col>
      </Row>
    </div>
  )
}

const index = () => {
  return (
    <div>
      <Container>
        <App />
      </Container>
    </div>

  )
}

export default index;
