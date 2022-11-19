import { Dock } from "./components/Dock/Dock.jsx";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/Error";

function App() {
  return (
    <div className="App" id="nav">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Dock />
      </Router>
    </div>
  );
}

export default App;
