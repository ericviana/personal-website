import { Dock } from './components/Dock/Dock.jsx';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
/* import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Error from "./pages/Error"; */

function App() {
  return (
    <div className="App" id="nav">
      <Router>
        <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
     {/*<Route path='/articles' element={ <Articles /> }/>
        <Route path='/projects' element={ <Projects /> }/>*/}
        </Routes>
        <Dock />
      </Router>
    </div>
  )
}

export default App;
