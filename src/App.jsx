import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import './App.css';

const ffmpeg = createFFmpeg({log: true});

function App() {

  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])

  return (
    <div className="App">
    { video && <video
      controls
      width="250"
      src={URL.createObjectURL(video)}>

    </video>}


    <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />

    </div>
  )
}

export default App;
