import "@/App.scss";
import Contact from "@/components/Contact/Contact";
import Thing from "@/components/Thing/Thing";
//import "../styles/Articles.scss";

function Articles() {
  return (
    <div className="container">
      <div className="projects">
        <h1 className="title">Articles</h1>
        <Thing
          one="Brain / Learning"
          two="Learn Any Language in a Few Months"
          three=" • 30-11-19"
        />
        <Thing
          one="Technology / Tooling"
          two="Easiest way to learn Vim"
          three=" • 14-07-22"
        />
      </div>
      <Contact />
    </div>
  );
}

export default Articles;
