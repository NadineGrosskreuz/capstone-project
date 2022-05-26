import React from 'react';

const svgObject = {
	home: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
	form: 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z',
};

function SVGIcon({ variant, size = '24px', color = 'currentColor' }) {
	return (
		<svg style={{ width: size, height: size }} viewBox="0 0 24 24">
			<path fill={color} d={svgObject[variant]} />
		</svg>
	);
}

export default SVGIcon;
