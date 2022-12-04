import "../styles/About.scss";
import Contact from "@/components/Contact/Contact";
import Thing from "@/components/Thing/Thing";

function About() {
  return (
    <div className="container">
      <div className="about">
        <h1 className="title">About me</h1>
        <p>
          My name is Eric, I'm currently livig in brazil. My career is being revolved around software engineering world-class
          projects and pursuing the cutting edge of everything I do.
          <br />
          <br /> I speak
          four languages and much of my ethos comes from my eagerness to
          practice novel ways of 'hacking' things and learn through constant
          experimentation.
        </p>
      </div>
      <div className="experience">
        <h1 className="title">Work XP</h1>
        <Thing
          one="Software Engineer"
          two="Napice"
          three="• Canada (remote)"
          four="Aug 2022 – Present • 4 mos"
        />
        <Thing
          one="Software Engineer"
          two="Company"
          three="• ${location}"
          four="On the way..."
        />
        <Thing
          one="Engineering Manager"
          two="Company"
          three="• ${location}"
          four="On the way..."
        />
      </div>
      <Contact />
    </div>
  );
}

export default About;
