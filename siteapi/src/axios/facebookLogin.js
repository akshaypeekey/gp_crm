import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('https://simplecrm.pythonanywhere.com/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'JzOnfTdgg4Y9ZbxRkKpqX36L4je7oMB244iLEDec',
			client_secret:
				'Yebg4LL341MuXS7iv7MSAkUjde28vmj4GQ4FR1ldIl7bjPtGKCgBdrAnYmDZGrWEiucf9FpcP24jlPQXLMxr1WjVomjvhA93iGx8XMS9g0R2k56XI5u11tDwHJXaXz9m',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
			window.location.href="https://simplecrm.pythonanywhere.com/"
		});
};

export default facebookLogin;