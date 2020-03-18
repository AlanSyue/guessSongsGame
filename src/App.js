import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, 
    Row,
    Col, 
    Button 
} from 'react-bootstrap';
import Question from './component/Question';
import sortSongArray from './utils/randomSongs'

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [forceUpdateAt, setForceUpdateAt] = useState(Date.now());

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="top">猜歌遊戲</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          { !isStarted && (
            <Button 
              className="main-center"
              size="lg" 
              variant="primary" 
              onClick={e => setIsStarted(true)}
            >
              開始遊戲
            </Button>
            )
          }
          {
            (isStarted && sortSongArray[songIndex]) && <div>
              <Question
                forceUpdateAt={forceUpdateAt}
                name={sortSongArray[songIndex]['name']}
                urlPath={sortSongArray[songIndex]['urlPath']}
              />
              <Button 
                className="center"
                size="lg" 
                variant="primary" 
                onClick={e => setSongIndex(songIndex + 1)}
              >
                下一題
              </Button>
              <Button 
                className="center"
                size="lg" 
                variant="primary" 
                onClick={e => {setForceUpdateAt(Date.now())}}
              >
                重新
              </Button>
            </div>
          }
          {
            (isStarted && !sortSongArray[songIndex]) && <div>
              <img width='100%' src='https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif' />
              <Button 
                className="main-center margin-top"
                size="lg" 
                variant="primary" 
                onClick={e => setSongIndex(1)}
              >
                再玩一次
              </Button>
            </div>
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
