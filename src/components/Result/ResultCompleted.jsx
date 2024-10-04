import styled from 'styled-components';
import MonthlyPayment from './MonthlyPayment';
import ResultHeading from './ResultHeading';
import TotalPayment from './TotalPayment';

const StyledResultCompleted = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin-bottom: 3rem;

	@media (max-width: 450px) {
		margin-bottom: 0;
		gap: 1rem;
	}
`;

const PaymentsContainer = styled.div`
	background-color: var(--Slate-950);
	max-height: 100%;
	height: 20rem;
	border-radius: 1rem;
	padding: 2.5rem;
	border-top: 5px solid var(--Lime);

	@media (max-width: 768px) {
		height: 80%;
		padding: 1rem;
	}
`;

function ResultCompleted() {
	return (
		<StyledResultCompleted>
			<ResultHeading />
			<PaymentsContainer>
				<MonthlyPayment />
				<TotalPayment />
			</PaymentsContainer>
		</StyledResultCompleted>
	);
}

export default ResultCompleted;
