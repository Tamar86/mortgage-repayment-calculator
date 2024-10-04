import styled from 'styled-components';
import ResultEmpty from './ResultEmpty';
import ResultCompleted from './ResultCompleted';
import { useMortgage } from '../../context/MortgageContext';

const StyledResult = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 2rem;
	background-color: var(--Slate-900);
	color: var(--Slate-300);
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
	border-bottom-left-radius: 5rem;

	@media (max-width: 1024px) {
		border-top-right-radius: 0;
		border-bottom-left-radius: 1rem;
	}
`;

function ResultLayout() {
	const { isSubmitted } = useMortgage();
	return (
		<StyledResult>
			{isSubmitted ? <ResultCompleted /> : <ResultEmpty />}
		</StyledResult>
	);
}

export default ResultLayout;
