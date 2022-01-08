import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import tauriCircles from './tauri.svg'
import tauriWord from './wordmark.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      if (data.length !== 0) {
          return
      }

    fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then(res => res.json())
        .then(d => {
          setData(d)
        })
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        {data.map((v, i) => (
            <div key={"bacon-" + i}>{v}</div>
        ))}
      </header>
    </div>
  )
}

export default App
