import IndicatorsContainer from './IndicatorsContainer';
import NoOptionsMessage from './NoOptionsMessage';
import Option from './Option';
import SingleValue from './SingleValue';
const Options = {
	components: { IndicatorsContainer, NoOptionsMessage, Option, SingleValue },
	isSearchable: true,
	styles: {
		container: styles => ({
			...styles,
			background: '#ffffff',
			borderRadius: 8,
			height: '100%',
			width: '100%',
		}),
		control: styles => ({
			...styles,
			background: '#f7f8fc',
			border: 'none',
			borderRadius: 8,
			boxShadow: 'none',
			display: 'flex',
			flexDirection: 'row-reverse',
			height: '100%',
			outline: 'none',
			padding: 0,
			width: '100%',
		}),
		input: styles => ({
			...styles,
			height: '100%',
			margin: 0,
			padding: 0,
			width: '100%',
		}),
		menu: styles => ({
			...styles,
			background: '#ffffff',
			borderRadius: 8,
			boxShadow:
				'0 1px 10px 0 rgba(13, 46, 105, 0.1), 0 1px 10px 0 rgba(13, 46, 105, 0.1)',
			margin: '4px 0 0 0',
			overflow: 'hidden',
			padding: 0,
		}),
		menuList: styles => ({
			...styles,
			maxHeight: 350,
			overflow: 'auto',
			padding: 0,
		}),
		placeholder: styles => ({
			...styles,
			fontSize: 18,
		}),
		valueContainer: styles => ({
			...styles,
			cursor: 'text',
			height: '100%',
			margin: '0 18px 0 0',
			padding: 0,
			position: 'relative',
			width: 'calc(100% - 46px)',
		}),
	},
	value: {
		isDisabled: true,
		label: '',
		value: '',
	},
};
export default Options;
