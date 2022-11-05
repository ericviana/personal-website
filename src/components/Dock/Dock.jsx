import styles from './Dock.module.css';
import Home from '/src/assets/icons/home.png';
import Projects from '/src/assets/icons/projects.png';
import Articles from '/src/assets/icons/articles.png';
import About from '/src/assets/icons/about.png';

export function Dock() {
  return (
    <div className={styles.container}>
      <a href="#" data-title="Home"><img className='icon' src={Home} alt="Home icon"/></a>
      <a href="#" data-title="Projects"><img className='icon' src={Projects} alt="Project icon"/></a>
      <a href="#" data-title="Articles"><img className='icon' src={Articles} alt="Article icon"/></a>
      <a href="#" data-title="About me"><img className='icon' src={About} alt="About icon"/></a>
    </div>
  )
}