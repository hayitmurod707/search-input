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
			background: 'white',
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
			height: '100%',
			outline: 'none',
			padding: 0,
			width: '100%',
		}),
		menu: styles => ({
			...styles,
			background: 'white',
			borderRadius: 8,
			boxShadow:
				'0 1px 10px 0 rgba(13, 46, 105, 0.1), 0 1px 10px 0 rgba(13, 46, 105, 0.1)',
			margin: '8px 0 0 0',
			overflow: 'hidden',
			padding: 0,
		}),
		input: styles => ({
			...styles,
			height: '100%',
			margin: 0,
			padding: 0,
			width: '100%',
		}),
		menuList: styles => ({
			...styles,
			top: '41px',
			maxHeight: 400,
			padding: 0,
		}),
		valueContainer: styles => ({
			...styles,
			cursor: 'text',
			height: '100%',
			padding: '0 0 0 17px',
			position: 'relative',
			width: 'calc(100% - 51px)',
		}),
		placeholder: styles => ({
			...styles,
			fontSize: 18,
		}),
	},
};
export default Options;
