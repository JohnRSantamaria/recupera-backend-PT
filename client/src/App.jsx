import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TaskPage } from './pages/TaskPage';
import { TaksFormPage } from './pages/TaksFormPage';
import { Navigation } from './components/Navigation';
function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/tasks' />}
				/>
				<Route
					path='/tasks'
					element={<TaskPage />}
				></Route>
				<Route
					path='/tasks-create'
					element={<TaksFormPage />}
				></Route>
				<Route
					path='/tasks/:id'
					element={<TaksFormPage />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
