import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video
            src={process.env.PUBLIC_URL + 'video/1.webm'}
            style={{
                height: "100vh"
            }}
            autoPlay
            muted
            loop
            playsInline
        />
      </header>
    </div>
  )
}

export default App
