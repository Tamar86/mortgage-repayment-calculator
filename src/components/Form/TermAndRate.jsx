import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';

const StyledTermAndRate = styled.div`
	max-width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	height: 7rem;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		height: 14rem;
	}
`;
const Term = styled.span`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&:hover {
		cursor: pointer;
	}
`;

const Rate = styled.span`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&:hover {
		cursor: pointer;
	}
`;
const InputContainer = styled.div`
	border: 2px solid var(--Slate-700);
	display: grid;
	grid-template-columns: 4fr 1fr;
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

const Input = styled.input`
	border-left: 1rem solid var(--White);
`;

const ValueName = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`;

function TermAndRate({ register, errors }) {
	const { dispatch } = useMortgage();
	return (
		<StyledTermAndRate>
			<Term>
				<label>Mortgage Term</label>
				<InputContainer required={errors.term}>
					<Input
						type='text'
						{...register('term', {
							required: 'This field is required',
							onChange: e => {
								dispatch({ type: 'mortgage/term', payload: e.target.value });
							},
						})}
					/>

					<ValueName>Years</ValueName>
				</InputContainer>
				{errors.term && (
					<p style={{ color: 'var(--Red)' }}>{errors.term.message}</p>
				)}
			</Term>
			<Rate>
				<label>Interest Rate</label>
				<InputContainer required={errors.rate}>
					<Input
						type='text'
						onChange={e =>
							dispatch({ type: 'mortgage/rate', payload: e.target.value })
						}
						{...register('rate', {
							required: 'This field is required',
							onChange: e => {
								dispatch({ type: 'mortgage/rate', payload: e.target.value });
							},
						})}
					/>

					<ValueName>%</ValueName>
				</InputContainer>
				{errors.rate && (
					<p style={{ color: 'var(--Red)' }}>{errors.rate.message}</p>
				)}
			</Rate>
		</StyledTermAndRate>
	);
}

export default TermAndRate;
