import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';

const StyledBtnCalculate = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	max-width: 100%;
	width: 70%;
	border: none;
	border-radius: 1.5rem;
	background-color: var(--Lime);
	font-size: 1rem;
	font-weight: var(--Bold);
	padding: 10px 14px;
	color: var(--Slate-900);

	&:hover {
		cursor: pointer;
		background-color: var(--LimeLight);
	}

	&:focus-visible {
		outline: 4px solid var(--Slate-900);
	}

	@media (max-width: 1024px) {
		width: 100%;
	}
	@media (max-width: 375px) {
		font-size: smaller;
	}
`;

function BtnCalculate() {
	const {
		mortgageAmount,
		mortgageTerm,
		mortgageRate,
		selectedType,
		isSubmitted,
	} = useMortgage();

	console.log('mortgageAmount', mortgageAmount);

	console.log('mortgageTerm', mortgageTerm);
	console.log('mortgageRate', mortgageRate);
	console.log('selectedType', selectedType);
	console.log('isSubmitted', isSubmitted);
	return (
		<StyledBtnCalculate>
			<span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
					viewBox='0 0 24 24'
				>
					<path
						fill='#133041'
						d='M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z'
					/>
				</svg>
			</span>
			Calculate Repayments
		</StyledBtnCalculate>
	);
}

export default BtnCalculate;
