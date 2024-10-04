import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';

const StyledMortgageType = styled.div`
	height: 7rem;
	&:hover {
		cursor: pointer;
	}
`;

const Type = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Input = styled.input`
	appearance: none;
	-webkit-appearance: none;
	position: relative;
	width: 16px;
	height: 16px;
	border: 2px solid var(--Slate-700);
	transition: 0.2s all linear;
	border-radius: 50%;

	&:hover {
		cursor: pointer;
	}

	&:checked {
		width: 16px;
		height: 16px;
		background-color: var(--Lime);
		border: 2px solid var(--White);
		outline: 2px solid var(--Lime);
		outline-offset: 1px;
	}
	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 5px solid var(--Slate-700);
		outline-offset: 0;
	}
`;

const Radio = styled.div`
	display: flex;
	align-items: center;
	height: 3rem;
	padding: 0 1rem;
	border: ${({ checked }) =>
		checked ? 'var(--Lime) solid 2px' : 'var(--Slate-700) solid 2px'};
	background-color: ${({ checked }) =>
		checked ? 'var(--LimeLight)' : 'var(--White)'};
	border-radius: 0.2rem;
	gap: 1rem;

	&:focus-visible {
		outline: 3px solid var(--Slate-700);
	}
`;

const LabelRadio = styled.label`
	color: var(--Slate-900);
	font-weight: var(--Bold);
	&:hover {
		cursor: pointer;
	}
`;

function MortgageType({ register, errors }) {
	const { selectedType, dispatch } = useMortgage();

	function handleCheck(e) {
		const value = e.target.value;
		dispatch({ type: 'type/selected', payload: value });
	}

	return (
		<StyledMortgageType>
			<Type>
				<label>Mortgage Type</label>

				<Radio checked={selectedType === 'repayment'} tabIndex={0}>
					<Input
						type='radio'
						id='repayment'
						value='repayment'
						name='mortgageType'
						checked={selectedType === 'repayment'}
						{...register('mortgageType', {
							required: 'This field is required',
							onChange: e => handleCheck(e),
						})}
					/>
					<LabelRadio htmlFor='repayment'>Repayment</LabelRadio>
				</Radio>

				<Radio checked={selectedType === 'interest'} tabIndex={0}>
					<Input
						type='radio'
						id='interest'
						value='interest'
						name='mortgageType'
						checked={selectedType === 'interest'}
						{...register('mortgageType', {
							required: 'This field is required',
							onChange: e => handleCheck(e),
						})}
					/>
					<LabelRadio htmlFor='interest'>Interest Only</LabelRadio>
				</Radio>
			</Type>
			{errors.mortgageType && (
				<p style={{ color: 'var(--Red)' }}>{errors.mortgageType.message}</p>
			)}
		</StyledMortgageType>
	);
}

export default MortgageType;
