import { Button } from 'react-bootstrap';
import './styles/signup.scss';
import Nav from '../nav/Nav';
import userSignup, { signup } from './components/SignupComponents';
import { useState } from 'react';
import { CgPill } from 'react-icons/cg';
import SmileFace from '../common/images/smileFace.png';
import { AiFillLock, AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { RootState } from '../modules/redux';

const Signup: React.FC = () => {
	const [user, setUser] = useState<signup>({
		userID: '',
		userPW: '',
	});

	const backEndURL = useSelector((state: RootState) => state.webPath.backEndURL);
	const navigator: NavigateFunction = useNavigate();

	return (
		<>
			<Nav></Nav>
			<div className="signup">
				<div className="signup-container">
					<div className="greeting">
						<h2 className="logo">
							약이어때 <CgPill className="pill icon"></CgPill>
						</h2>
						<h6>
							약이어때의 회원이 되신걸 환영해요
							<img src={SmileFace} className="icon" alt="smile-emoticon" />
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
								value={user.userID}
								onChange={(e) => {
									setUser({
										...user,
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
								value={user.userPW}
								onChange={(e) => {
									setUser({
										...user,
										userPW: e.target.value,
									});
								}}
							/>
						</div>
						<Button
							className="btn-signup"
							onClick={(e) => {
								e.preventDefault();
								userSignup(user, navigator, backEndURL);
							}}
						>
							회원가입
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
