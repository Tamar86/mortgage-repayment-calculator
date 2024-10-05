import styled from 'styled-components';

import FormLayout from './Form/FormLayout';
import ResultLayout from './Result/ResultLayout';

const StyledLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 100%;
	width: 62rem;
	height: auto;
	background-color: var(--White);
	border-radius: 1rem;

	@media (max-width: 1200px) {
		width: 60rem;
	}

	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		width: 45rem;
	}

	@media (max-width: 950px) {
		width: 40rem;
	}

	@media (max-width: 768px) {
		/* width: 35rem; */
	}

	@media (max-width: 650px) {
		width: 35rem;
	}

	@media (max-width: 600px) {
		width: 33rem;
	}
	@media (max-width: 550px) {
		width: 30rem;
	}
	@media (max-width: 480px) {
		width: 25rem;
	}
	@media (max-width: 400px) {
		width: 23rem;
	}
	@media (max-width: 375px) {
		width: 20rem;
	}
`;

function Layout() {
	return (
		<StyledLayout>
			<FormLayout />
			<ResultLayout />
		</StyledLayout>
	);
}

export default Layout;
