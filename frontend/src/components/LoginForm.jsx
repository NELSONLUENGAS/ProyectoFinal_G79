import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
	// const { handleSession } = useAuth();
	// const navigate = useNavigate();

	// const [login, setLogin] = useState({
	// 	email: '',
	// 	password: '',
	// });

	// const handleSumbit = async (event) => {
	// 	event.preventDefault();

	// 	const newUser = await fetch(`${VITE_API_URL}/api/auth/login`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(login),
	// 	});

	// 	const { token } = await newUser.json();
	// 	const payload = JSON.parse(atob(token.split('.')[1]));

	// 	setLogin((prevState) => {
	// 		const newState = {
	// 			...prevState,
	// 			token: token,
	// 			...payload,
	// 		};
	// 		return newState;
	// 	});

	// 	setTimeout(() => {
	// 		navigate(`/profile`);
	// 	}, 1000);
	// };

	// useEffect(() => {
	// 	if (login.email && login.password) {
	// 		handleSession(login);
	// 	}
	// }, [login]);

	// const handleOnChange = (event) => {
	// 	const { name, value } = event.target;

	// 	setLogin({
	// 		...login,
	// 		[name]: value,
	// 	});
	// };
	const { handleSession, session } = useAuth();

	const [login, setLogin] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState(false);

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setLogin({
			...login,
			[name]: value,
		});
	};

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (session.email === login.email && session.password === login.password) {
			handleSession(session);
			navigate('/admin');
		} else {
			setError(true);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
		>
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					onChange={handleOnChange}
					type="text"
					id="email"
					name="email"
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium text-gray-700"
				>
					Password
				</label>
				<input
					onChange={handleOnChange}
					type="password"
					id="password"
					name="password"
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<button
					type="submit"
					className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
				>
					Sign In
				</button>
			</div>

			{error && (
				<div>
					<p className="text-center font-bold text-red-500">
						Credenciales erroneas
					</p>
				</div>
			)}
		</form>
	);
};
