import { any, bool, object, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Logo from './react.png';
const StyledElement = styled.li`
	align-items: center;
	cursor: pointer;
	display: flex;
	overflow: hidden;
	padding: 8px 16px;
	position: relative;
	transition: 0.3s;
	&:hover {
		background: #f7f8fc;
	}
	&:not(:last-child):before {
		background: rgba(115, 141, 163, 0.1);
		bottom: 0;
		content: '';
		height: 1px;
		left: 16px;
		position: absolute;
		width: calc(100% - 32px);
	}
	&[data-focus='focus'] {
		background-color: #f7f8fc;
	}
	&[data-focus='blur'] {
		background-color: initial;
	}
	& .image {
		height: 32px;
		margin: 0 12px 0 0;
		width: 32px;
		& img {
			width: 100%;
			height: 100%;
		}
	}
	& .info {
		width: calc(100% - 44px);
		& h4 {
			align-items: center;
			display: flex;
			font-size: 17px;
			font-weight: 500;
			margin: 0 0 4px 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100%;
		}
		& h5 {
			color: #808080;
			font-size: 16px;
			font-weight: 500;
			margin: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100%;
		}
	}
`;
const Option = ({ data: { email, name }, innerProps, innerRef, isFocused }) => (
	<StyledElement
		{...innerProps}
		data-focus={isFocused ? 'focus' : 'blue'}
		ref={innerRef}
		title={name}
	>
		<div className="image">
			<img alt="react" src={Logo} />
		</div>
		<div className="info">
			<h4>{email}</h4>
			<h5>{name}</h5>
		</div>
	</StyledElement>
);
Option.defaultProps = {
	data: { email: '', name: '' },
	innerProps: {},
	isFocused: false,
};
Option.propTypes = {
	data: shape({ email: string, name: string }),
	innerProps: object,
	innerRef: any,
	isFocused: bool,
};
export default Option;
