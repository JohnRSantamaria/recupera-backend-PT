import { useNavigate } from 'react-router-dom';

import { MdRadioButtonUnchecked } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export function TasksCard({ task }) {
	const navigate = useNavigate();
	return (
		<div
			className={`bg-zinc-200 p-3 hover:bg-zinc-400 hover:cursor-pointer 
			${task.done && ' text-zinc-500 bg-zinc-400'} `}
			onClick={() => {
				navigate(`/tasks/${task.id}/`);
			}}
		>
			<span className='flex items-center gap-2'>
				{task.done ? (
					<AiOutlineCheckCircle className='text-2xl text-sky-700 ' />
				) : (
					<MdRadioButtonUnchecked className='text-2xl text-sky-700' />
				)}
				<h1 className={`font-bold uppercase`}>{task.title}</h1>
			</span>
			<p className='text-zinc-600'>{task.description}</p>
		</div>
	);
}
