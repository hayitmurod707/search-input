import { any, bool, object, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
const StyledElement = styled.li`
	cursor: pointer;
	display: flex;
	overflow: hidden;
	padding: 8px 16px;
	position: relative;
	transition: 0.3s;
	&:hover {
		background: #f7f8fc;
	}
	&:before {
		background: rgba(115, 141, 163, 0.1);
		bottom: 0;
		content: '';
		height: 1px;
		left: 16px;
		position: absolute;
		width: calc(100% - 32px);
	}
	&[data-focus='focus'] {
		background-color: red;
	}
	&[data-focus='blur'] {
		background-color: transparent;
	}
	& .drug-image {
		height: 64px;
		margin: 0 8px 0 0;
		min-height: 64px;
		min-width: 64px;
		width: 64px;
	}
	& h4 {
		align-items: center;
		display: flex;
		font-size: 16px;
		margin: 8px 0;
		& span {
			display: inline-block;
			white-space: nowrap;
		}
		& .search-drug-name {
			background: rgba(6, 27, 52, 0.9) !important;
			border-radius: 4px !important;
			color: #ffffff !important;
			margin: 0 1px;
			padding: 3px 3px;
		}
	}
	& h5 {
		font-size: 16px;
		font-weight: 400;
		margin: 0;
	}
`;
const Option = ({
	data: { image, name, body, email },
	innerProps,
	innerRef,
	isFocused,
}) => (
	<StyledElement
		data-focus={isFocused ? 'focus' : 'blue'}
		title={name}
		ref={innerRef}
		{...innerProps}
	>
		<div className="drug-image">
			<img alt="drug" height="64" src={image} width="64" />
		</div>
		<div>
			<h4>
				{email} {name}
			</h4>
			<h5>{body}</h5>
		</div>
	</StyledElement>
);
Option.defaultProps = {
	data: { name: '', body: '', email: '' },
	innerProps: {},
	isFocused: false,
};
Option.propTypes = {
	data: shape({ name: string, body: string, email: string }),
	innerProps: object,
	innerRef: any,
	isFocused: bool,
};
export default Option;
