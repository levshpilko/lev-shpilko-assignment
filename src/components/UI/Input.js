import React from 'react';

export default function Input(props) {
	return (
		<div className='form-floating mb-2'>
			<input
				type={props.type || 'text'}
				className={`form-control ${props.error && 'is-invalid'}`}
				defaultValue={props.value}
				{...(props.register && {
					...props.register(props.label, props.validate)
				})}
			/>
			<label>{props.name}</label>

			<div className='invalid-feedback'>
				{props.errorTxt || 'Please enter at least 3 characters'}
			</div>
		</div>
	);
}
