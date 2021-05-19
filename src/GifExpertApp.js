import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = (params) => {
	//*De esta manera se puede agregar un elemento al useState
	// 	setCategories(['Hunter X Hunter', ...categories]);
	// 	setCategories((newCategory) => [...newCategory, 'Mad man']);

	// 	console.log('categories', categories);
	// };

	return (
		<>
			<h1>GifExpertApp</h1>
			<hr />
			<AddCategory setCategories={setCategories} />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
