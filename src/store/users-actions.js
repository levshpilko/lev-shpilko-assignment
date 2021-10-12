import axios from 'axios';
import { usersActions } from './users-slice';

export const fetchUsers = () => {
	return async dispatch => {
		const fetchData = async () => {
			const response = await axios.get('https://randomuser.me/api/?results=10');
			return response.data.results;
			//console.log(fetchedUsers.data.results[0].login.uuid);
		};

		try {
			const usersList = await fetchData();
			dispatch(usersActions.replaceUsers({ usersList }));
		} catch (error) {
			console.log(error.data.message);
		}
	};
};
