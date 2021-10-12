import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchUsers } from '../store/users-actions';
import User from './User';

export default function UsersList() {
	const users = useSelector(state => state.users.usersList);
	const dispatch = useDispatch();
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		if (users.length > 0) {
			setisLoading(false);
			return;
		}
		dispatch(fetchUsers());
		setisLoading(false);
	}, [dispatch, users]);

	return (
		<div className='container'>
			<div className='d-flex justify-content-evenly row'>
				<NavLink to='/new-user'>
					<button className='w-100 my-2 btn btn-lg btn-primary' type='submit'>
						Add New User
					</button>
				</NavLink>

				{isLoading ? (
					<p>LOADING</p>
				) : (
					users.map(user => (
						<User
							key={user.login.uuid}
							name={user.name}
							email={user.email}
							imageUrl={user.picture.medium}
							location={user.location}
							id={user.id.value}
							uuid={user.login.uuid}
						/>
					))
				)}
			</div>
		</div>
	);
}
