import { Image } from "react-bootstrap";
import pro from "../assets/pro.png";
import "./Components.scss";
const About = () => {
  return (
    <div className="about" id="About">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <p>
          Hi. I'm Jeswin and I'm currently working as a Software Engineer at
          Searce Inc. I have always enjoyed working on web dev and has been
          doing that since the past 2 years. Here are a few technologies that I
          have been working on recently
        </p>
        <Image src={pro} alt="jes" roundedCircle width="80vw" height="100vh" />
      </div>
    </div>
  );
};

export default About;
