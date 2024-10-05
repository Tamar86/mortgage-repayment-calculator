import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';
import { useForm } from 'react-hook-form';

const HeadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 450px) {
		flex-direction: column;
		align-items: start;
		justify-content: left;
		gap: 1rem;
		height: fit-content;
	}
`;
const Heading = styled.h1`
	color: var(--Slate-900);
`;
const BtnClear = styled.button`
	border: 1px solid var(--White);
	padding: 0.5rem;
	border-radius: 5px;

	text-decoration: underline;
	color: var(--Slate-700);
	font-size: 1rem;

	&:hover {
		cursor: pointer;
	}

	&:focus-visible {
		outline: 3px solid var(--Slate-700);
	}
`;

function MortgageHeading({ reset }) {
	const { dispatch } = useMortgage();

	function handleClearAll() {
		dispatch({ type: 'clear/all' });
		reset();
	}
	return (
		<HeadingContainer>
			<Heading>Mortgage Calculator</Heading>
			<BtnClear onClick={handleClearAll}>Clear All</BtnClear>
		</HeadingContainer>
	);
}

export default MortgageHeading;
