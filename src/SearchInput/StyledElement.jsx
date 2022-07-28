import styled, { keyframes } from 'styled-components';
const animation = keyframes`
	0% {
		left: 6px;
		width: 0;
	}
	50% {
		left: 8px;
		width: calc(100% - 12px);
	}
	100% {
		left: calc(100% - 6px);
		width: 0;
	}
`;
const StyledElement = styled.div`
	align-items: center;
	border-radius: 8px;
	display: flex;
	height: 45px;
	position: relative;
	width: 100%;
	& .progress {
		animation-delay: 0;
		animation-duration: 1.2s;
		animation-iteration-count: infinite;
		animation-name: ${animation};
		animation-timing-function: ease-in-out;
		/* background-color: red; */
		background: linear-gradient(
			90deg,
			rgba(0, 0, 255, 0) 0%,
			#d11b27 20%,
			#d11b27 80%,
			rgba(0, 0, 255, 0) 100%
		);
		bottom: -4px;
		height: 4px;
		position: absolute;
	}
`;
export default StyledElement;
