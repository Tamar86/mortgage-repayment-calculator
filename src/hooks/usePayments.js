import { useMortgage } from '../context/MortgageContext';

export function usePayments() {
	const { mortgageAmount, mortgageRate, mortgageTerm } = useMortgage();

	const numberOfPayments = Number(mortgageTerm) * 12;
	const monthlyInterestRate = Number(mortgageRate) / 100 / 12;
	//Monthly repayments
	const monthlyRepayment =
		(Number(mortgageAmount) *
			monthlyInterestRate *
			Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
		(Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
	//Interest only
	const monthlyInterest = Number(mortgageAmount) * monthlyInterestRate;

	//Total
	const totalRepayment = numberOfPayments * monthlyRepayment;
	const totalInterest = totalRepayment - Number(mortgageAmount);

	return { monthlyRepayment, monthlyInterest, totalRepayment, totalInterest };
}
