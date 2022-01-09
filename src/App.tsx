import React, { useState } from "react";
import "./App.css";

function App() {
  const videos = ["video/1.webm", "video/2.webm"];
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <video
          src={process.env.PUBLIC_URL + videos[index]}
          style={{
            height: "100vh",
          }}
          onEnded={(v) => {
            setIndex(index >= videos.length - 1 ? 0 : index + 1);
          }}
          autoPlay
          muted
        />
      </header>
    </div>
  );
}

export default App;
