import './styles/nav.scss';
import '../common/styles/commonStyles.scss';
import { GoThreeBars } from 'react-icons/go';
import { CgPill } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { toggleNavMenus } from './components/NavComponents';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
	return (
		<div className="container">
			<div className="nav">
				<Link to="/">
					<h2 className="logo">
						약이어때
						<CgPill className="pill icon"></CgPill>
					</h2>
				</Link>
				<GoThreeBars
					className="bars icon"
					onClick={(e) => {
						e.preventDefault();
						toggleNavMenus();
					}}
				></GoThreeBars>
			</div>
			<div className="nav-menus">
				<Link to="/" className="menu">
					<AiFillHome className="icon"></AiFillHome>
					홈으로
				</Link>
				<Link to="/login" className="menu">
					<BiLogIn className="icon"></BiLogIn>
					로그인
				</Link>
				<Link to="/signup" className="menu">
					<AiOutlineUserAdd className="icon"></AiOutlineUserAdd>
					회원가입
				</Link>
			</div>
		</div>
	);
};

export default Nav;
