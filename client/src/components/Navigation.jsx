import { Link } from 'react-router-dom';

export function Navigation() {
	return (
		<div className='flex justify-between py-3'>
			<Link to='/tasks'>
				<span className='font-bold text-3xl mb-4 tracking-wider	select-none'>
					Recupera
				</span>
			</Link>

			<Link
				className='flex justify-center items-center bg-sky-700 hover:bg-sky-900 px-3 py-2 rounded-lg'
				to='/tasks-create'
			>
				<span className='font-semibold text-light'>Crear tarea</span>
			</Link>
		</div>
	);
}
