import "./styles/home.scss";
import Nav from "../nav/Nav";
import { Button } from "react-bootstrap";
import ThinkingFace from "./imgs/thinking-face.png";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Nav></Nav>
      <h2 className="catchphrase">
        지금 이 약 <br></br>복용해도 괜찮은걸까?
        <img src={ThinkingFace} alt="thinking-face" />
      </h2>
      <div className="search">
        <input type="text" />
        <Button>검색하기</Button>
      </div>
    </div>
  );
};

export default Home;
