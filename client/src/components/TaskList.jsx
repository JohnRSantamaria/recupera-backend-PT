import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TasksCard } from './TasksCard';
import { Link } from 'react-router-dom';

export function TaskList() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		async function loadTasks() {
			const { data } = await getAllTasks();
			setTasks(data);
		}
		loadTasks();
	}, []);

	if (tasks.length <= 0)
		return (
			<div className='flex  justify-center items-center gap-4 shadow-md mt-4 p-4'>
				<Link
					className='text-2xl font-semibold'
					to='/tasks-create'
				>
					No Tiene tareas acutualmente, Desea agregar una tarea?
				</Link>
			</div>
		);

	return (
		<div className='grid grid-cols-1 gap-3 xl:grid-cols-3 sm:grid-cols-2'>
			{tasks.map((task) => (
				<TasksCard
					key={task.id}
					task={task}
				/>
			))}
		</div>
	);
}
