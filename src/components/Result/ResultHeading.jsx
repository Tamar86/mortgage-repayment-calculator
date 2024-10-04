import styled from 'styled-components';

const StyledHeading = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	@media (max-width: 450px) {
		gap: 1rem;
	}
`;

const Heading = styled.h1`
	color: var(--White);
`;

function ResultHeading() {
	return (
		<StyledHeading>
			<Heading>Your results</Heading>
			<p>
				Your results are shown below based on the information you provided. To
				adjust the results, edit the form and click “calculate repayments”
				again.
			</p>
		</StyledHeading>
	);
}

export default ResultHeading;
