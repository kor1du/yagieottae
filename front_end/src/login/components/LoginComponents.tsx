import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface login {
	userID: string;
	userPW: string;
}

export default function userLogin(user: login, navigator: NavigateFunction, backEndURL: string): boolean {
	const data: login = {
		userID: user.userID,
		userPW: user.userPW,
	};
	axios
		.post(backEndURL + '/login/', data)
		.then((res) => {
			res.data.length <= 0 ? navigator('/') : alert(res.data);
		})
		.catch(() => {
			alert('로그인에 실패했습니다. 잠시후 다시 시도해주세요.');
		});
	return true;
}
