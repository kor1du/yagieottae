import axios from 'axios';

interface Login {
	userID: string;
	userPW: string;
}

export default function userLogin(): boolean {
	const data: Login = {
		userID: 'ID',
		userPW: 'PW',
	};
	axios.post('http://localhost:8080/login/', data).then((res) => {
		alert(res.data);
	});
	return true;
}
