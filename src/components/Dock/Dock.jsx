import { Link } from "react-router-dom";
import styles from "./Dock.module.scss";
import "../../../src/App.scss";
//

import Home from "/src/assets/icons/home.svg";
import Projects from "/src/assets/icons/projects.svg";
import Articles from "/src/assets/icons/articles.svg";
import About from "/src/assets/icons/about.svg";

export function Dock() {
  return (
    <div className={styles.container}>
      <div className={styles.dock}>
        <Link to="/" data-title="Home">
          <img className="icon" src={Home} alt="Home icon" />
        </Link>
        <Link to="/projects" href="#" data-title="Projects">
          <img className="icon" src={Projects} alt="Project icon" />
        </Link>
        <Link to="/articles" href="#" data-title="Articles">
          <img className="icon" src={Articles} alt="Article icon" />
        </Link>
        <Link to="/about" href="#" data-title="About Me">
          <img className="icon" src={About} alt="About icon" />
        </Link>
      </div>
    </div>
  );
}
