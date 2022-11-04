import { Dock } from './components/Dock/Dock.jsx';
import './App.css';

function App() {
  
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
