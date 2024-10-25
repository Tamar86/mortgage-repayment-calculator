import { useMortgage } from '../context/MortgageContext';

export function usePayments() {
	const { mortgageData } = useMortgage();

	const { mortgageAmount, rate, term } = mortgageData;

	console.log(mortgageData);

	console.log(mortgageAmount, rate, term);

	const numberOfPayments = Number(term) * 12;
	const monthlyInterestRate = Number(rate) / 100 / 12;
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
	console.log(totalRepayment, totalInterest);

	return { monthlyRepayment, monthlyInterest, totalRepayment, totalInterest };
}
