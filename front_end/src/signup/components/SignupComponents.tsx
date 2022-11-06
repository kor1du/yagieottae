import axios from 'axios';

export interface signup {
	userID: string;
	userPW: string;
}

function userSignup(user: signup): void {
	alert(`${user.userID} ${user.userPW}`);
	// axios.post('http://localhost:8080/signup/', data).then((res) => {
	// 	alert(res.data);
	// });
}

export default userSignup;
