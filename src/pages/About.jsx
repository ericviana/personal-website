import "../styles/About.scss";
import Contact from "@/components/Contact/Contact";
import Thing from "@/components/Thing/Thing";


function About() {
  return (
    <div className="container">
      <div className="about">
        <h1 className="title">About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="experience">
        <h1 className="title">Work XP</h1>
        <Thing
        one="Software Engineer" two="Napice"
        three="• Canada (remote)" four="Aug 2022 – Present • 4 mos"
        />
        <Thing
        one="Software Engineer" two="Company"
        three="• ${location}" four="On the way..."
        />
        <Thing
        one="Engineering Manager" two="Company"
        three="• ${location}" four="On the way..."
        />
      </div>
      <Contact />
    </div>
  );
}

export default About;
