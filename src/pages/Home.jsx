import { Dock } from '../components/Dock/Dock.jsx';
import '../App.scss';
import '../index.scss';

export function Home() {
  return (
    <div>
      <div className="hero">
        <h2>I'm Eric</h2>
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

export default Home;