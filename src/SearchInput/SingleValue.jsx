import React from 'react';
import styled from 'styled-components';
const Value = styled.div`
	align-items: center;
	color: #808080;
	display: flex;
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;
const SingleValue = () => <Value>Search posts with postId</Value>;
export default SingleValue;
