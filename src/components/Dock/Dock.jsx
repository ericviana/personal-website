import styles from './Dock.module.css';
import Home from '/home/eric/workspace/personal/eric.com/src/assets/icons/home.png';
import Projects from '/home/eric/workspace/personal/eric.com/src/assets/icons/projects.png';
import Articles from '/home/eric/workspace/personal/eric.com/src/assets/icons/articles.png';
import About from '/home/eric/workspace/personal/eric.com/src/assets/icons/about.png';

export function Dock() {
  return (
    <div className={styles.container}>
      <a href="#"><img className='icon' src={Home} alt="Home icon" /></a>
      <a href="#"><img className='icon' src={Projects} alt="Project icon" /></a>
      <a href="#"><img className='icon' src={Articles} alt="Article icon" /></a>
      <a href="#"><img className='icon' src={About} alt="About icon" /></a>
    </div>
  )
}