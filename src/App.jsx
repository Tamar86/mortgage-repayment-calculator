import Layout from './components/Layout';
import { MortgageProvider } from './context/MortgageContext';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<>
			<MortgageProvider>
				<GlobalStyles />
				<Layout />
			</MortgageProvider>
		</>
	);
}

export default App;
