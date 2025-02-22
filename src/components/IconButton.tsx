import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import spacings from '../styles/spacings';

interface IconButton {
	rounded?: boolean;
	size?: keyof typeof spacings;
	active?: boolean;
	onClick: () => void;
}

export default function IconWrapper({
	rounded,
	size,
	children,
	active,
	onClick,
	...rest
}: PropsWithChildren<IconButton>) {
	return (
		<StyledWrapper rounded={rounded} active={active} onClick={onClick} {...rest}>
			<StyledGradient rounded={rounded} size={size} active={active}>
				{children}
			</StyledGradient>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.button<{
	rounded?: IconButton['rounded'];
	active?: IconButton['active'];
}>`
	display: inline-block;
	padding: 2px;
	outline: 0;
	border: 0;
	border-radius: ${({ rounded }) => (rounded ? '30px' : '4px')};
	background: ${({ active }) => (active ? `${colors.gradients.grey}` : 'transparent')};
`;

const StyledGradient = styled.div<{
	rounded?: IconButton['rounded'];
	size?: IconButton['size'];
	active?: IconButton['active'];
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 0;
	background-color: ${colors.black};
	padding: ${({ size }) => (size ? spacings[size] : '10px')};
	border: 1px solid ${colors.black};
	border-radius: ${({ rounded }) => (rounded ? '30px' : '4px')};
	cursor: pointer;
	${({ active }) => active && `background: ${colors.gradients.grey}`}
`;
