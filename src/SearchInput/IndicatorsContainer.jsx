import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background: transparent;
	border: none;
	height: 46px;
	outline: none;
	padding: 0;
	width: 46px;
	& svg {
		margin: 0 0 -4px 3px;
	}
`;
const IndicatorsContainer = () => (
	<StyledButton>
		<svg width="16" height="17" viewBox="0 0 16 17" fill="none">
			<circle
				cx="7.84442"
				cy="8.34442"
				r="5.99237"
				stroke="#143650"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
			<path
				d="M12.0122 12.8234L14.3616 15.1667"
				stroke="#143650"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
		</svg>
	</StyledButton>
);
export default IndicatorsContainer;
