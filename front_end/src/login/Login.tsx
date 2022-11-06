import { Button } from 'react-bootstrap';
import { useState } from 'react';
import WinkingFace from '../common/images/winkingFace.png';
import Nav from '../nav/Nav';
import '../common/styles/commonStyles.scss';
import './styles/login.scss';
import userLogin, { login } from './components/LoginComponents';
import { CgPill } from 'react-icons/cg';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../modules/redux/index';

const Login: React.FC = () => {
	const [login, setLogin] = useState<login>({
		userID: '',
		userPW: '',
	});

	const backEndURL = useSelector((state: RootState) => state.webPath.backEndURL);
	const navigator: NavigateFunction = useNavigate();

	return (
		<>
			<Nav></Nav>
			<div className="login">
				<div className="login-container">
					<div className="greeting">
						<h2 className="logo">
							약이어때 <CgPill className="pill icon"></CgPill>
						</h2>
						<h6>
							약이어때에 어서오세요
							<img src={WinkingFace} className="icon" alt="smile-emoticon" />
						</h6>
					</div>
					<form>
						<div>
							<label htmlFor="id">
								<AiOutlineUser className="icon"></AiOutlineUser>
							</label>
							<input
								id="id"
								type="text"
								placeholder="아이디를 입력해주세요."
								value={login.userID}
								onChange={(e) => {
									setLogin({
										...login,
										userID: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="password">
								<AiFillLock className="icon"></AiFillLock>
							</label>
							<input
								id="password"
								type="password"
								placeholder="비밀번호를 입력해주세요."
								autoComplete="off"
								value={login.userPW}
								onChange={(e) => {
									setLogin({
										...login,
										userPW: e.target.value,
									});
								}}
							/>
						</div>
						<Button
							className="btn-signup"
							onClick={(e) => {
								e.preventDefault();
								userLogin(login, navigator, backEndURL);
							}}
						>
							로그인
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
