import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import SecondPage from './pages/SecondPage';

function App() {
	return (
		<Router>
			<div className='container dark'>
				<div className='app'>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<NotesPage />}
						/>
						<Route
							path='/n'
							element={<SecondPage />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
