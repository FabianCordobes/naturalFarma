import axios from 'axios';
import { useEffect, useState } from 'react';

const History = () => {
	const idUser = localStorage.getItem('user').split('"').join('');
	const [historyItems, setHistoryItems] = useState({});
	console.log(idUser);

	useEffect(() => {
		const getHistoryItem = async () => {
			const response = await axios.get(`/history/${idUser}`);
			setHistoryItems(response);
			console.log(response);
		};
		getHistoryItem();

		if (historyItems) {
			console.log(historyItems);
		}
	});

	return <div></div>;
};

export default History;
