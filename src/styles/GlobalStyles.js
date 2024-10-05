import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

:root {
	/* COLORS */

	/* Primary */

	--Lime: hsl(61, 70%, 52%);
	--Red: hsl(4, 69%, 50%);
	
	/* Neutral */
	
	--LimeLight: hsl(61, 70%, 75%);
	--White: hsl(0, 0%, 100%);
	--Slate-100: hsl(202, 86%, 94%);
	--Slate-300: hsl(203, 41%, 72%);
	--Slate-500: hsl(200, 26%, 54%);
	--Slate-700: hsl(200, 24%, 40%);
	--Slate-900: hsl(202, 55%, 16%);
	--Slate-950: hsl(202, 55%, 10%);

	/* FONT SIZE */
	--Paragraph: 1rem;
	/* FONT WEIGHT */
	--Normal: 500;
	--Bold: 700;
}

body {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 100%;
	width: 100%;
	max-height: 100%;
	padding: 5rem;
	font-family: 'Plus Jakarta Sans', sans-serif;
	font-optical-sizing: auto;
	font-weight: var(--Normal);
	font-style: normal;
	background-color: var(--Slate-100);

	@media (max-width:768px) {
		padding: 1rem;
	}

}
h1 {
	font-size: 1.5rem;

	@media (max-width:370px) {
	font-size: 1.3rem;
}
}

p {
		font-size: var(--Paragraph);

	@media (max-width:450px) {
	font-size: 0.75rem;
}

}

label{
	color: var(--Slate-700);
}

input {
	max-width: 100%;
  width: 100%;
	height: 3rem;
	border-radius: 0.2rem;
	border: 1px solid var(--Slate-700);
	font-weight: var(--Bold);
	font-size: 1.2rem;
	border: none;
  border-radius: 0;
  color: var(--Slate-900);
	
 &:focus{
		outline: none;
	}

	// To remove autofill background color
	 &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--White) inset; 
    box-shadow: 0 0 0px 1000px var(--White) inset; 
    background-color: var(--White) !important; 
    color: var(--Slate-900) !important; 
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--White) inset; 
    box-shadow: 0 0 0px 1000px var(--White) inset; 
  }
	}
`;

export default GlobalStyles;
