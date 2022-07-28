import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
const StyledElement = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	& .column {
		margin: 100px 0 0 0;
		width: 400px;
	}
`;
const App = () => (
	<StyledElement>
		<div className="column">
			<SearchInput />
		</div>
	</StyledElement>
);
export default App;
