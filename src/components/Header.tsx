import "./Components.scss";
import home from "../assets/home.svg";
import { Image } from "react-bootstrap";
const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <div className="header-h2">
          <h2>Hi, I'm Jeswin</h2>
        </div>
        <h1 className="header-bold">I'm a Software Engineer</h1>
      </div>
      <div className="header-image">
        <Image src={home} fluid />
      </div>
    </div>
  );
};

export default Header;
