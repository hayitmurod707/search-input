import React from 'react';
import styled from 'styled-components';
const Value = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	left: 17px;
	position: absolute;
	top: 0;
	width: calc(100% - 17px);
`;
const SingleValue = () => <Value>Search posts</Value>;
export default SingleValue;
