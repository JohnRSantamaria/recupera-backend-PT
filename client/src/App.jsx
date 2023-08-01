import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TaskPage } from './pages/TaskPage';
import { TaksFormPage } from './pages/TaksFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<BrowserRouter>
			<div className='container mx-auto px-4 bg-light h-screen '>
				{' '}
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
				<Toaster />
			</div>
		</BrowserRouter>
	);
}

export default App;
