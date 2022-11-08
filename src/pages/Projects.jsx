import "@/App.scss";
import Contact from "@/components/Contact/Contact";
import Thing from "@/components/Thing/Thing";
import "../styles/Projects.scss";

function Projects() {
  return (
    <div className="container">
      <div className="projects">
        <h1 className="title">Projects</h1>
        <Thing
          one="Open-source / Inc / Organization"
          two="Petrichor"
          three=" • Next, Typescript, Node."
          four="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
        />
        <Thing
          one="Back End / Run Time"
          two="Nice Stuff"
          three=" • Golang, Linux, Unix."
          four="Duis aute irure dolor in reprehenderit in voluptate velit."
        />
        <Thing
          one="DIY / Workout / Hardware"
          two="Crazy Stuff"
          three=" • Steel, Recycling, Welding."
          four="I've built my own gym during the covid pandemic."
        />
      </div>
      <Contact />
    </div>
  );
}

export default Projects;
