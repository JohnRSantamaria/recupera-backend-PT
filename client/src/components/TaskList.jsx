import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TasksCard } from './TasksCard';

export function TaskList() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		async function loadTasks() {
			const { data } = await getAllTasks();
			setTasks(data);
		}
		loadTasks();
	}, []);

	return (
		<div>
			{tasks.map((task) => (
				<TasksCard
					key={task.id}
					task={task}
				/>
			))}{' '}
		</div>
	);
}
