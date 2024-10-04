import styled from 'styled-components';
import { useMortgage } from '../../context/MortgageContext';
import { usePayments } from '../../hooks/usePayments';
import { formatNumber } from '../../helpers/numberFormatter';

const StyledTotalPayment = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
	gap: 1rem;
	@media (max-width: 550px) {
		padding-top: 1rem;
		gap: 0.5rem;
	}
`;

const Payment = styled.span`
	font-size: 1.5rem;
	color: var(--White);

	@media (max-width: 768px) {
		font-size: 1.2rem;
		padding-bottom: 1rem;
	}
`;

function TotalPayment() {
	const { selectedType } = useMortgage();

	const { totalRepayment, totalInterest } = usePayments();

	return (
		<StyledTotalPayment>
			{selectedType === 'repayment' && (
				<>
					<p>Total you&apos;ll repay over the term</p>
					<Payment>£{formatNumber(totalRepayment)}</Payment>
				</>
			)}
			{selectedType === 'interest' && (
				<>
					<p>Total interest you&apos;ll pay over the term</p>
					<Payment>£{formatNumber(totalInterest.toFixed(2))}</Payment>
				</>
			)}
		</StyledTotalPayment>
	);
}

export default TotalPayment;
