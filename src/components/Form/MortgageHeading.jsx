import styled from 'styled-components';

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

	&:focus-visible {
		outline: 3px solid var(--Slate-700);
	}
`;

function MortgageHeading() {
	return (
		<HeadingContainer>
			<Heading>Mortgage Calculator</Heading>
			<BtnClear>Clear All</BtnClear>
		</HeadingContainer>
	);
}

export default MortgageHeading;
