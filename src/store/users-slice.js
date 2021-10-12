import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: { usersList: [] },
	reducers: {
		replaceUsers(state, action) {
			state.usersList = action.payload.usersList;
		},
		editUser(state, action) {
			const userData = action.payload;
			const user = state.usersList.find(u => u.login.uuid === userData.uuid);
			if (!user) return;

			user.name.first = userData.firstName;
			user.name.last = userData.lastName;
			user.email = userData.email;
			user.location.street.number = userData.streetNumber;
			user.location.street.name = userData.streetName;
			user.location.city = userData.city;
			user.location.country = userData.country;
		},
		addUser(state, action) {
			const userData = action.payload;
			const newUser = {
				name: {
					first: userData.firstName,
					last: userData.lastName
				},
				email: userData.email,
				location: {
					street: { number: userData.streetNumber, name: userData.streetName },
					city: userData.city,
					country: userData.country
				},
				id: {
					value: userData.id
				},
				picture: {
					medium: userData.imgUrl
				},
				login: {
					uuid: userData.uuid
				}
			};
			state.usersList.push(newUser);
		},
		deleteUser(state, action) {
			state.usersList = state.usersList.filter(
				user => user.login.uuid !== action.payload
			);
		}
	}
});

export const usersActions = usersSlice.actions;

export default usersSlice;
