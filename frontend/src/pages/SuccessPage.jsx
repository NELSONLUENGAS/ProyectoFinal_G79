import { useEffect, useState } from 'react';

export const SuccessPage = () => {
	const [status, setStatus] = useState(null);
	const [customerEmail, setCustomerEmail] = useState('');

	// useEffect(() => {
	// 	const queryString = window.location.search;
	// 	const urlParams = new URLSearchParams(queryString);
	// 	const sessionId = urlParams.get('session_id');

	// 	fetch(`http://127.0.0.1:3001/session-status?session_id=${sessionId}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setStatus(data.status);
	// 			setCustomerEmail(data.customer_email);
	// 		});
	// }, []);

	if (status === 'open') {
		return <Navigate to="/checkout" />;
	}

	if (status === 'complete') {
		return (
			<section id="success">
				<p>
					We appreciate your business! A confirmation email will be sent to{' '}
					{customerEmail}. If you have any questions, please email{' '}
					<a href="mailto:orders@example.com">orders@example.com</a>.
				</p>
			</section>
		);
	}

	return <p>Hola</p>;
};
