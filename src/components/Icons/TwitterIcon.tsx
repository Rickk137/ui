import React from 'react';
import { SVGSocialIconProps } from './types';

export default function TwitterIcon({ fill, onClick }: SVGSocialIconProps) {
	return (
		<svg
			width="24"
			height="20"
			viewBox="0 0 24 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
		>
			<g clipPath="url(#clip0_916_1830)">
				<path
					d="M24 2.31C23.12 2.7 22.17 2.97 21.17 3.09C22.19 2.48 22.97 1.52 23.34 0.37C22.39 0.93 21.33 1.34 20.21 1.57C19.31 0.6 18.03 0 16.62 0C13.44 0 11.11 2.97 11.82 6.05C7.73 5.84 4.1 3.88 1.67 0.9C0.38 3.11 1 6.01 3.19 7.48C2.39 7.45 1.63 7.23 0.96 6.86C0.91 9.14 2.54 11.27 4.91 11.75C4.22 11.94 3.46 11.98 2.69 11.83C3.32 13.79 5.13 15.21 7.29 15.25C5.22 16.88 2.61 17.6 0 17.29C2.18 18.69 4.77 19.5 7.55 19.5C16.69 19.5 21.86 11.78 21.54 4.85C22.5 4.16 23.34 3.3 24 2.31Z"
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id="clip0_916_1830">
					<rect width="24" height="19.5" fill={fill} />
				</clipPath>
			</defs>
		</svg>
	);
}
