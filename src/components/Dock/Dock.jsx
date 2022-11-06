import styles from './Dock.module.css';
import Home from '/src/assets/icons/home.svg';
import Projects from '/src/assets/icons/projects.svg';
import Articles from '/src/assets/icons/articles.svg';
import About from '/src/assets/icons/about.svg';

export function Dock() {
  return (
    <div className={styles.container}>
      <a href="#" data-title="Home"><img className='icon' src={Home} alt="Home icon"/></a>
      <a href="#" data-title="Projects"><img className='icon' src={Projects} alt="Project icon"/></a>
      <a href="#" data-title="Articles"><img className='icon' src={Articles} alt="Article icon"/></a>
      <a href="#" data-title="About Me"><img className='icon' src={About} alt="About icon"/></a>
    </div>
  )
}