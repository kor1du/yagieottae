import { Button } from 'react-bootstrap';
import smileFace from '../common/images/smileFace.png';
import Nav from '../nav/Nav';
import '../common/styles/commonStyles.scss';
import './styles/login.scss';
import userLogin from './components/LoginComponents';

const Login: React.FC = () => {
	return (
		<>
			<Nav></Nav>
			<div className="login">
				<div className="login-container">
					<h6>
						약이어때에 오신걸 환영해요 <img src={smileFace} alt="emoji-smile-face" className="emoji" />
					</h6>
					<input type="text" placeholder="아이디를 입력해주세요." />
					<input type="password" placeholder="비밀번호를 입력해주세요." />
					<Button
						onClick={(e) => {
							e.preventDefault();
							userLogin();
						}}
					>
						로그인
					</Button>
				</div>
			</div>
		</>
	);
};

export default Login;
