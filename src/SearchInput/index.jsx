import axios from 'axios';
import React, { useState } from 'react';
import Search from 'react-select';
import Options from './Options';
import StyledElement from './StyledElement';
// info color #0000ff
// light color #ffffff
// muted color #808080
// text color #000000
const SearchInput = () => {
	const [options, setOptions] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [loading, setLoading] = useState(false);
	const onInputChange = async (inputValue, { action }) => {
		if (action !== 'input-blur' && action !== 'menu-close') {
			setInputValue(inputValue);
			await setLoading(true);
			if (inputValue?.length) {
				axios(
					`https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`
				)
					.then(response => {
						const data = response?.data;
						const options = Array.isArray(data) ? data : [];
						setOptions(options);
					})
					.catch(() => setOptions([]))
					.finally(() => setLoading(false));
			} else {
				setLoading(false);
				setOptions([]);
			}
		}
	};
	return (
		<StyledElement>
			{loading && <div className="progress"></div>}
			<Search
				{...Options}
				filterOption={() => options}
				inputValue={inputValue}
				onBlur={() => setOptions([])}
				onChange={data => console.log(data)}
				onInputChange={onInputChange}
				options={options}
			/>
		</StyledElement>
	);
};
export default SearchInput;
