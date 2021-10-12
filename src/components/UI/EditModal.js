import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function EditModal(props) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => {
		if (!props.show) return;
		props.editUser({ ...data, uuid: props.uuid });
	};

	return (
		<Modal
			onHide={props.onHide}
			show={props.show}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Edit User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='form-signin'>
					<form className='' onSubmit={handleSubmit(onSubmit)}>
						<div className='invalid-feedback mb-2'>
							{errors['general'] && errors['general'].message}
						</div>

						<div className='form-floating mb-2'>
							<input
								type={'text'}
								className={`form-control ${
									errors['firstName'] && 'is-invalid'
								}`}
								defaultValue={props.name.first}
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
								defaultValue={props.name.last}
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
								defaultValue={props.email}
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
								className={`form-control ${
									errors['streetName'] && 'is-invalid'
								}`}
								defaultValue={props.location.street.name}
								{...register('streetName', { required: true })}
							/>
							<label>Street</label>
							<div className='invalid-feedback'>Please enter a street.</div>
						</div>
						<div className='form-floating mb-2'>
							<input
								type='text'
								className={`form-control ${
									errors['StreetNumber'] && 'is-invalid'
								}`}
								defaultValue={props.location.street.number}
								{...register('StreetNumber', { required: true })}
							/>
							<label>Number</label>
							<div className='invalid-feedback'>
								Please enter a street number.
							</div>
						</div>
						<div className='form-floating mb-2'>
							<input
								type='text'
								className={`form-control ${errors['city'] && 'is-invalid'}`}
								defaultValue={props.location.city}
								{...register('city', { required: true })}
							/>
							<label>City</label>
							<div className='invalid-feedback'>Please enter a city.</div>
						</div>
						<div className='form-floating mb-2'>
							<input
								type='text'
								className={`form-control ${errors['country'] && 'is-invalid'}`}
								defaultValue={props.location.country}
								{...register('country', { required: true })}
							/>
							<label>Country</label>
							<div className='invalid-feedback'>Please enter a country.</div>
						</div>

						<button className='btn mx-1 btn-success' type='submit'>
							Log In
						</button>
						<button className='btn mx-1 btn-secondary' onClick={props.onHide}>
							cancel
						</button>
					</form>
				</div>
			</Modal.Body>
		</Modal>
	);
}
