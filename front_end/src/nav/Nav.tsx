import "./styles/nav.scss";
import { GoThreeBars } from "react-icons/go";
import { CgPill } from "react-icons/cg";

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <h2 className="title">
        약이어때
        <CgPill className="pill icon"></CgPill>
      </h2>
      <GoThreeBars className="bars icon"></GoThreeBars>
    </div>
  );
};

export default Nav;
