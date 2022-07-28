import axios from 'axios';
import React, { useState } from 'react';
import Search from 'react-select';
import styled, { keyframes } from 'styled-components';
const animation = keyframes`
	0% {
		left: 0;
		width: 0;
	}
	50% {
		left: 0;
		width: 100%;
	}
	100% {
		left: 100%;
		width: 0;
	}
`;
const searchStyles = {
	container: provided => ({
		...provided,
		background: 'white',
		borderRadius: 8,
		height: '100%',
		width: '100%',
	}),
	control: provided => ({
		...provided,
		background: '#f7f8fc',
		border: 'none',
		borderRadius: 8,
		boxShadow: 'none',
		height: '100%',
		outline: 'none',
		padding: 0,
		transition: '400ms',
		width: '100%',
	}),
	menu: provided => ({
		...provided,
		background: 'white',
		borderRadius: 8,
		boxShadow: '0px 8px 8px rgba(115, 141, 163, 0.2)',
		margin: '8px 0 0 0',
		overflow: 'hidden',
		padding: 0,
	}),
	input: provided => ({
		...provided,
		height: '100%',
		margin: 0,
		padding: 0,
		width: '100%',
	}),
	menuList: provided => ({
		...provided,
		maxHeight: 400,
		padding: 0,
	}),
	valueContainer: provided => ({
		...provided,
		cursor: 'text',
		height: '100%',
		padding: '0 0 0 17px',
		position: 'relative',
		width: 'calc(100% - 51px)',
	}),
	placeholder: provided => ({
		...provided,
		fontSize: 18,
	}),
};
const StyledElement = styled.div`
	align-items: center;
	border-radius: 8px;
	display: flex;
	height: 51px;
	margin: 0 24px;
	position: relative;
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
			#d11b27 20%,
			#d11b27 80%,
			rgba(0, 0, 255, 0) 100%
		);
		bottom: -4px;
		height: 4px;
		position: absolute;
	}
	@media (max-width: 991px) {
		height: 45px;
	}
	@media (max-width: 570px) {
		display: none;
	}
`;
const StyledOption = styled.li`
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
const Value = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	left: 17px;
	position: absolute;
	top: 0;
	width: calc(100% - 17px);
`;
const SearchButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	height: 100%;
	outline: none;
	padding: 0;
	width: 51px;
`;
const IndicatorsContainer = () => (
	<SearchButton>
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
	</SearchButton>
);
const Option = ({
	data: { image, name, body, email },
	innerProps,
	innerRef,
	isFocused,
}) => (
	<StyledOption
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
	</StyledOption>
);
const SingleValue = () => <Value>Search posts</Value>;
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
						if (Array.isArray(results) && results?.length) {
							const options = results.map(data => ({
								...data,
								isDisabled: false,
								label: data?.name,
								value: data?.id,
							}));
							setOptions(options);
						} else {
							setOptions([]);
						}
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
				components={{
					IndicatorsContainer,
					NoOptionsMessage: () => null,
					Option,
					SingleValue,
				}}
				filterOption={() => options}
				inputValue={name}
				isSearchable={true}
				onBlur={() => setOptions([])}
				onChange={data => console.log(data)}
				onInputChange={onInputChange}
				options={options}
				styles={searchStyles}
				value={value}
			/>
		</StyledElement>
	);
};
export default SearchInput;
