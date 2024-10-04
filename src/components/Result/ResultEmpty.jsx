import styled from 'styled-components';
import icon from '/images/illustration-empty.svg';

const StyledResultEmpty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const Heading = styled.h1`
	color: var(--White);
`;

const Paragraph = styled.p`
	text-align: center;
	color: var(--Slate-500);
`;

function ResultEmpty() {
	return (
		<StyledResultEmpty>
			<img src={icon} />
			<Heading>Results shown here</Heading>
			<Paragraph>
				Complete the form and click “calculate repayments” to see what your
				monthly repayments would be.
			</Paragraph>
		</StyledResultEmpty>
	);
}

export default ResultEmpty;
