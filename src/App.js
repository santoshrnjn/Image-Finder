import React, { useState } from 'react'
import Searchbox from './components/SearchBox';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="App">
        <h1>SnapShot</h1>
        <Searchbox input={input} setInput={setInput} />
        <Gallery query={input} />
      </div>
    </div>
  );
}

export default App;
