import React, { useEffect, useState, useRef } from 'react';
import { MediaCard } from '@shopify/polaris';
import './Post.css';

function Post({ title, explanation, date, url }) {
	const [isLiked, setIsLiked] = useState(localStorage.getItem(title) || false);
	const wrapperEl = useRef(null);

	useEffect(() => {
		isLiked &&
			wrapperEl.current.querySelector('.Polaris-Button').classList.add('liked');
	}, []);

	return (
		<div className="media-card-wrapper" ref={wrapperEl}>
			<MediaCard
				title={`${title} - ${date}`}
				primaryAction={{
					content: 'Like',
					onAction: (e) => {
						e.target.closest('.Polaris-Button').classList.toggle('liked');
						if (isLiked) {
							setIsLiked(false);
							localStorage.removeItem(title);
						} else {
							setIsLiked(true);
							localStorage.setItem(title, true);
						}
					},
				}}
				description={explanation}
			>
				<img
					alt={title}
					width="100%"
					height="100%"
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
					src={url}
				/>
			</MediaCard>
		</div>
	);
}

export default Post;
