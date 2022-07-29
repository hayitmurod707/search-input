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
	height: 46px;
	width: 100%;
	& .progress {
		animation-delay: 0;
		animation-duration: 1.2s;
		animation-iteration-count: infinite;
		animation-name: ${animation};
		animation-timing-function: ease-in-out;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 255, 0) 0%,
			#0000ff 20%,
			#0000ff 80%,
			rgba(0, 0, 255, 0) 100%
		);
		bottom: -4px;
		height: 4px;
		position: absolute;
	}
	& * {
		&::-webkit-scrollbar {
			height: 7px;
			width: 7px;
		}
		&::-webkit-scrollbar-track {
			background: transparent;
		}
		&::-webkit-scrollbar-thumb {
			-moz-border-radius: 3px;
			-ms-border-radius: 3px;
			-o-border-radius: 3px;
			-webkit-border-radius: 4px;
			background: rgba(105, 111, 133, 0.8);
			border-radius: 4px;
		}
	}
`;
export default StyledElement;
