import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';
import { usePayments } from '../../hooks/usePayments';
import { formatNumber } from '../../helpers/numberFormatter';

const StyledMonthlyPayment = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (max-width: 550px) {
		gap: 0.5rem;
	}
`;

const Payment = styled.span`
	font-size: 3.6rem;
	border-bottom: 1px solid var(--Slate-300);
	padding-bottom: 1.5rem;
	color: var(--Lime);

	@media (max-width: 768px) {
		font-size: 2.5rem;
		padding-bottom: 1rem;
	}
`;

function MonthlyPayment() {
	const { selectedType } = useMortgage();

	const { monthlyRepayment, monthlyInterest } = usePayments();

	return (
		<StyledMonthlyPayment>
			{selectedType === 'repayment' && (
				<>
					<p>Your monthly repayments</p>
					<Payment>£{formatNumber(monthlyRepayment)}</Payment>
				</>
			)}
			{selectedType === 'interest' && (
				<>
					<p>Your monthly interest</p>
					<Payment>£{formatNumber(monthlyInterest)}</Payment>
				</>
			)}
		</StyledMonthlyPayment>
	);
}

export default MonthlyPayment;
