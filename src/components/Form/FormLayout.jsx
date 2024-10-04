import styled from 'styled-components';
import MortgageAmount from './MortgageAmount';
import TermAndRate from './TermAndRate';
import MortgageType from './MortgageType';
import MortgageHeading from './MortgageHeading';
import BtnCalculate from './BtnCalculate';
import { useForm } from 'react-hook-form';
import { useMortgage } from '../../context/MortgageContext';

const Container = styled.div`
	max-width: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: 1fr 5fr;
	gap: 1rem;
	padding: 2rem;
	background-color: var(--White);
	color: var(--Slate-900);
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;

	@media (max-width: 1024px) {
		border-top-right-radius: 1rem;
	}
	@media (max-width: 450px) {
		gap: 0;
	}
`;

const StyledForm = styled.form`
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 4.5rem;

	@media (max-width: 400px) {
		width: 16rem;
	}

	@media (max-width: 375px) {
		width: 14rem;
	}
`;

const Form = styled.div`
	display: flex;
	height: fit-content;
	flex-direction: column;
	gap: 1rem;
`;

const BtnContainer = styled.div`
	@media (max-width: 1024px) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: fit-content;
	}
`;

function FormLayout() {
	const { dispatch } = useMortgage();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		dispatch({ type: 'mortgageData/submit', payload: data });
	}

	return (
		<Container>
			<MortgageHeading />
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<Form>
					<MortgageAmount register={register} errors={errors} />

					<TermAndRate register={register} errors={errors} />

					<MortgageType register={register} errors={errors} />
				</Form>
				<BtnContainer>
					<BtnCalculate />
				</BtnContainer>
			</StyledForm>
		</Container>
	);
}

export default FormLayout;
