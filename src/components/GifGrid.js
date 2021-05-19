import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h2 className="animate__animated animate__fadeInLeft">
				{category}
			</h2>

			{loading && (
				<p className="animate__animated animate__flash">
					Loading images...
				</p>
			)}

			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
