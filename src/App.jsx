import { Dock } from './components/Dock/Dock.jsx';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" id="nav">
      <Router>
        <Routes>
        <Route path='/' element={ <Home /> }/>
     {/*<Route path='/' element={ <Home /> }/>
        <Route path='/' element={ <Home /> }/>
        <Route path='/' element={ <Home /> }/>*/}
        </Routes>
        <Dock />
      </Router>
    </div>
  )
}

export default App
