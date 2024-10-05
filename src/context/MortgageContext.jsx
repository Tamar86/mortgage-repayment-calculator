import { createContext, useContext, useReducer } from 'react';

const initialState = {
	mortgageData: {},
	mortgageAmount: '',
	mortgageTerm: '',
	mortgageRate: '',
	selectedType: '',
	isSubmitted: false,
};

function mortgageReducer(state, action) {
	switch (action.type) {
		case 'mortgage/amount':
			return {
				...state,
				mortgageAmount: action.payload,
			};
		case 'mortgage/term':
			return { ...state, mortgageTerm: action.payload };
		case 'mortgage/rate':
			return {
				...state,
				mortgageRate: action.payload,
			};
		case 'type/selected':
			return { ...state, selectedType: action.payload };
		case 'mortgageData/submit':
			return { ...state, mortgageData: action.payload, isSubmitted: true };
		case 'clear/all':
			return initialState;

		default:
			return state;
	}
}

const MortgageContext = createContext();

function MortgageProvider({ children }) {
	const [
		{
			mortgageData,
			mortgageAmount,
			mortgageTerm,
			mortgageRate,
			selectedType,
			isSubmitted,
		},
		dispatch,
	] = useReducer(mortgageReducer, initialState);

	return (
		<MortgageContext.Provider
			value={{
				mortgageAmount,
				mortgageRate,
				mortgageTerm,
				selectedType,
				isSubmitted,
				mortgageData,
				dispatch,
			}}
		>
			{children}
		</MortgageContext.Provider>
	);
}

function useMortgage() {
	const context = useContext(MortgageContext);
	if (context === undefined)
		throw new Error('MortgageContext was used outside MortgageProvider');
	return context;
}
export { MortgageProvider, MortgageContext, useMortgage };
