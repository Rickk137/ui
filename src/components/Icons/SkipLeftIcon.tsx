import React from 'react';
import colors from '../../styles/colors';
import { SVGIconProps } from './types';

export default function SkipLeftIcon({ active, onClick }: SVGIconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071L10.2929 12.7071C9.90237 12.3166 9.90237 11.6834 10.2929 11.2929L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L12.4142 12L15.7071 15.2929C16.0976 15.6834 16.0976 16.3166 15.7071 16.7071Z"
				fill={active ? colors.lightBlue : 'white'}
			/>
			<rect x="7" y="7" width="2" height="10" rx="1" fill={active ? colors.lightBlue : 'white'} />
		</svg>
	);
}
