import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from './pages/NotePage';

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
							path='/note/:id'
							element={<NotePage />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
