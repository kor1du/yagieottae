import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface signup {
	userID: string;
	userPW: string;
}

function userSignup(user: signup, navigator: NavigateFunction, backEndURL: string): void {
	const data = {
		userID: user.userID,
		userPW: user.userPW,
	};
	axios
		.post(backEndURL + '/signup/', data)
		.then((res) => {
			alert(res.data);
			navigator('/login');
		})
		.catch(() => {
			alert('회원가입에 실패하였습니다. 잠시후 다시 시도해주세요.');
		});
}

export default userSignup;
