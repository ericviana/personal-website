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
          two="How do I get languages Fast"
          three=" • 30-11-19"
        />
        <Thing
          one="Languages / Communication"
          two="How to see a new color"
          three=" • 25-11-22"
        />
        <Thing
          one="Technology / Hypothesis"
          two="Behind the scenes"
          three=" • 14-07-22"
        />
      </div>
      <Contact />
    </div>
  );
}

export default Articles;
