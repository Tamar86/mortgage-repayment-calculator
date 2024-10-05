import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';

const StyledMortgageAmount = styled.div`
	max-width: 100%;
	max-height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	height: 7rem;
`;

const InputMortgageAmountContainer = styled.div`
	max-width: 100%;
	display: grid;
	grid-template-columns: 1fr 9fr;

	border: 2px solid var(--Slate-700);
	border-radius: 0.2rem;
	background-color: ${props =>
		props.required ? 'var(--Red)' : 'var(--Slate-100)'};
	color: ${props => (props.required ? 'var(--White)' : 'var(--Slate-700)')};
	&:hover {
		cursor: pointer;
		border: ${props =>
			props.required ? 'solid 2px var(--Slate-700)' : 'solid 2px var(--Lime)'};
		background-color: ${props =>
			props.required ? 'var(--Red)' : 'var(--Lime)'};
	}
`;

const InputMortgageAmount = styled.input`
	border-left: 1rem solid var(--White);

	&:hover {
		cursor: pointer;
		border: var(--Lime);
		border-left: 1rem solid var(--White);
	}
`;

const CurrencyIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`;

function MortgageAmount({ register, errors }) {
	const { dispatch } = useMortgage();

	return (
		<StyledMortgageAmount>
			<label>Mortgage Amount</label>

			<InputMortgageAmountContainer required={errors.mortgageAmount}>
				<CurrencyIcon>£</CurrencyIcon>

				<InputMortgageAmount
					type='text'
					{...register('mortgageAmount', {
						required: 'This field is required',
						onChange: e => {
							dispatch({
								type: 'mortgage/amount',
								payload: e.target.value,
							});
						},
					})}
				/>
			</InputMortgageAmountContainer>
			{errors.mortgageAmount && (
				<p style={{ color: 'var(--Red)' }}>{errors.mortgageAmount.message}</p>
			)}
		</StyledMortgageAmount>
	);
}

export default MortgageAmount;
