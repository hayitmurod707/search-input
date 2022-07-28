import axios from 'axios';
import React, { useState } from 'react';
import Search from 'react-select';
import Options from './Options';
import StyledElement from './StyledElement';
const SearchInput = () => {
	const [options, setOptions] = useState([]);
	const [value] = useState({
		isDisabled: true,
		label: '',
		value: '',
	});
	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);
	const onInputChange = async (name, { action }) => {
		if (action !== 'input-blur' && action !== 'menu-close') {
			setName(name);
			await setLoading(true);
			if (name?.length) {
				axios(
					`https://jsonplaceholder.typicode.com/comments?postId=${name}`
				)
					.then(response => {
						const results = response?.data;
						const options =
							Array.isArray(results) && results?.length ? results : [];
						setOptions(options);
					})
					.catch(() => setOptions([]))
					.finally(() => setLoading(true));
			} else {
				setLoading(true);
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
				inputValue={name}
				onBlur={() => setOptions([])}
				onChange={data => console.log(data)}
				onInputChange={onInputChange}
				options={options}
				value={value}
			/>
		</StyledElement>
	);
};
export default SearchInput;
