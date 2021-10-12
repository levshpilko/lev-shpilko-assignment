import React, { useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import EditModal from './UI/EditModal';
import { usersActions } from '../store/users-slice';

export default function User(props) {
	const [modalShow, setModalShow] = useState(false);
	const dispatch = useDispatch();

	const editUserHandler = useCallback(
		data => {
			dispatch(usersActions.editUser(data));
			setModalShow(false);
		},
		[dispatch]
	);

	const deleteUserHandler = uuid => {
		dispatch(usersActions.deleteUser(uuid));
	};

	return (
		<div className='col my-sm-2 col-sm-12 col-md-5 col-lg-4 '>
			<div className='card h-100'>
				<img
					src={props.imageUrl}
					className='card-img-top'
					alt='...'
					style={{ height: '39vh' }}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{`${props.name.title} ${props.name.first} ${props.name.last}`}</h5>
					{props.id && (
						<p className='card-text'>
							<strong>
								<u>ID:</u>
							</strong>{' '}
							{`${props.id}`}
						</p>
					)}
				</div>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>{props.email}</li>
					<li className='list-group-item'>
						{`${props.location.street.name} ${props.location.street.number}, ${props.location.city}, ${props.location.country}`}
					</li>
				</ul>
				<div className='card-body'>
					<Button variant='success' onClick={() => setModalShow(true)}>
						Edit
					</Button>
					<Button
						type='danger'
						className='btn btn-danger mx-1'
						onClick={() => deleteUserHandler(props.uuid)}
					>
						DELETE
					</Button>
				</div>
			</div>
			<EditModal
				email={props.email}
				name={props.name}
				location={props.location}
				show={modalShow}
				onHide={() => setModalShow(false)}
				editUser={editUserHandler}
				uuid={props.uuid}
			/>
		</div>
	);
}
