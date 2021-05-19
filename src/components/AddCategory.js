import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		if (inputValue.trim().length > 2) {
			setCategories((lastCategories) => [inputValue, ...lastCategories]);
			setInputValue('');
		}
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add category</h2>
			<input
				type="text"
				placeholder="Type here..."
				value={inputValue}
				onChange={handleInputValue}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
