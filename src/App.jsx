import { useState } from 'react';
import { Dock } from './components/Dock/Dock.jsx';
import Logo from '/home/eric/workspace/personal/eric.com/src/assets/logo.png'
import './fonts/Magnat-TextRegular.ttf';
import './fonts/Magnat-TextBold.ttf';
import './fonts/Magnat-HeadBold.ttf';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="hero">
        <p>I'm Eric</p>
        <h1>
          <del>Programmer</del>
          <br/>
          <del>Engineer</del>
          <br/>
          Maker.
        </h1>
      </div>
      <div className="navigation">
        <Dock />
      </div>
    </div>
  )
}

export default App
