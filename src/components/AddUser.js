import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { usersActions } from '../store/users-slice';
import { v4 as uuidv4 } from 'uuid';

export default function AddUser() {
	const history = useHistory();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = data => {
		console.log(data);
		dispatch(usersActions.addUser({ ...data, uuid: uuidv4() }));
		history.push('/');
	};

	return (
		<div className='form-signin mt-5 container'>
			<form className='' onSubmit={handleSubmit(onSubmit)}>
				<div className='invalid-feedback mb-2'>
					{errors['general'] && errors['general'].message}
				</div>

				<div className='form-floating mb-2'>
					<input
						type={'text'}
						className={`form-control ${errors['firstName'] && 'is-invalid'}`}
						{...register('firstName', { required: true })}
					/>
					<label>First Name</label>

					<div className='invalid-feedback'>
						Please enter at least 3 characters.
					</div>
				</div>

				<div className='form-floating mb-2'>
					<input
						type={'text'}
						className={`form-control ${errors['lastName'] && 'is-invalid'}`}
						{...register('lastName', { required: true })}
					/>
					<label>Last Name</label>

					<div className='invalid-feedback'>
						Please enter at least 3 characters.
					</div>
				</div>

				<div className='form-floating mb-2'>
					<input
						type='email'
						className={`form-control ${errors['email'] && 'is-invalid'}`}
						{...register('email', {
							required: true,
							pattern:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						})}
					/>
					<label>Email</label>

					<div className='invalid-feedback'>
						Please enter a valid email address
					</div>
				</div>

				<div className='form-floating mb-2'>
					<input
						type='text'
						className={`form-control ${errors['streetName'] && 'is-invalid'}`}
						{...register('streetName', { required: true })}
					/>
					<label>Street</label>
					<div className='invalid-feedback'>Please enter a street.</div>
				</div>
				<div className='form-floating mb-2'>
					<input
						type='text'
						className={`form-control ${errors['StreetNumber'] && 'is-invalid'}`}
						{...register('StreetNumber', { required: true })}
					/>
					<label>Number</label>
					<div className='invalid-feedback'>Please enter a street number.</div>
				</div>
				<div className='form-floating mb-2'>
					<input
						type='text'
						className={`form-control ${errors['city'] && 'is-invalid'}`}
						{...register('city', { required: true })}
					/>
					<label>City</label>
					<div className='invalid-feedback'>Please enter a city.</div>
				</div>
				<div className='form-floating mb-2'>
					<input
						type='text'
						className={`form-control ${errors['country'] && 'is-invalid'}`}
						{...register('country', { required: true })}
					/>
					<label>Country</label>
					<div className='invalid-feedback'>Please enter a country.</div>
				</div>
				<div className='form-floating mb-2'>
					<input
						type='text'
						className={`form-control ${errors['id'] && 'is-invalid'}`}
						{...register('id')}
					/>
					<label>ID</label>
					<div className='invalid-feedback'>Please enter a country.</div>
				</div>

				<div className='form-floating mb-2'>
					<input
						type='text'
						className={`form-control ${errors['imgUrl'] && 'is-invalid'}`}
						{...register('imgUrl', { required: true })}
					/>
					<label>Image Url</label>
					<div className='invalid-feedback'>Please enter an image Url.</div>
				</div>

				<button className='btn mx-1 btn-success' type='submit'>
					Add User
				</button>
				<button
					className='btn mx-1 btn-secondary'
					onClick={() => history.push('/')}
				>
					cancel
				</button>
			</form>
		</div>
	);
}
