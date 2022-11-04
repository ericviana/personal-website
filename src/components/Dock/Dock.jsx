import styles from './Dock.module.css';
import Home from '/src/assets/icons/home.png';
import Projects from '/src/assets/icons/projects.png';
import Articles from '/src/assets/icons/articles.png';
import About from '/src/assets/icons/about.png';

export function Dock() {
  return (
    <div className={styles.container}>
      <a href="#"><img className='icon' src={Home} alt="Home icon" title='home'/></a>
      <a href="#"><img className='icon' src={Projects} alt="Project icon" title='projects'/></a>
      <a href="#"><img className='icon' src={Articles} alt="Article icon" title='articles'/></a>
      <a href="#"><img className='icon' src={About} alt="About icon" title='about me'/></a>
    </div>
  )
}