/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Card from './Card';

export default {
	title: 'Components/Card',
	component: Card,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '3em', maxWidth: '400px', position: 'relative' }}>
					<Story />
				</div>
			);
		},
	],
};

const cardProps = {
	entries: {
		category: 'Flohmarkt',
		name: 'Faust',
		address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
	},
};

export function Default() {
	return <Card {...cardProps} />;
}
