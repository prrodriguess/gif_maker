import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import './App.css';

const ffmpeg = createFFmpeg({log: true});

function App() {

  const [ready, setReady] = useState(false);

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])

  return ready ? (
    <div className="App">

    </div>
  ) : 
  (<p>Loading...</p>);
}

export default App;
