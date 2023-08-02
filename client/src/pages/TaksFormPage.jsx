import { useForm } from 'react-hook-form';
import { createTasks, deleteTaks, getTask, updateTaks } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function TaksFormPage() {
	const navigate = useNavigate();
	const params = useParams();
	const [done, setDone] = useState();
	const [date, setDate] = useState(new Date());

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm();

	const handleDelete = async () => {
		const accepted = window.confirm('Estas seguro que quieres eliminar');
		if (accepted) {
			await deleteTaks(params.id);
			toast.success('Tarea Eliminada', {
				position: 'top-center',
				style: {
					background: '#101010',
					color: '#fff'
				}
			});
			navigate('/tasks');
		}
	};

	const handleDoneCheck = async () => {
		setDone(!done);
	};

	const handleChangeDate = (e) => {
		setDate(e);
	};

	const onSubmit = handleSubmit(async (data) => {
		if (params.id) {
			data = { ...data, date: date.toISOString() };

			await updateTaks(params.id, data);
			toast.success('Tarea Actualizada', {
				position: 'top-center',
				style: {
					background: '#101010',
					color: '#fff'
				}
			});
		} else {
			data = { ...data, date: date.toISOString() };
			await createTasks(data);
			toast.success('Tarea creada', {
				position: 'top-center',
				style: {
					background: '#101010',
					color: '#fff'
				}
			});
		}
		navigate('/tasks');
	});

	useEffect(() => {
		async function loadTask() {
			if (params.id) {
				const {
					data: { title, description, done, date }
				} = await getTask(params.id);
				setValue('title', title);
				setValue('description', description);
				setDone(done);
				setDate(date);
			}
		}
		loadTask();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='max-w-xl mx-auto'>
			<form
				onSubmit={onSubmit}
				className='pb-8'
			>
				<input
					type='text'
					placeholder='Titulo'
					{...register('title', { required: true })}
					className='bg-zinc-300 p-3 rounded-lg block w-full mb-3 focus:outline-sky-700'
				/>
				{errors.title && <span className='text-red-500'>El titulo es requerido</span>}
				<textarea
					rows='3'
					placeholder='descripcion'
					{...register('description', { required: true })}
					className='bg-zinc-300 p-3 rounded-lg block w-full mb-3 focus:outline-sky-700'
				></textarea>
				{errors.description && (
					<span className='text-red-500'>la descripcion es requerida</span>
				)}
				<span className='flex justify-start items-center gap-2'>
					<span className='flex items-center gap-2'>
						Hecha: {done ? <p>Si</p> : <p>No</p>}{' '}
					</span>

					<input
						type='checkbox'
						name='done'
						id='done'
						onClick={handleDoneCheck}
						checked={done}
						className={`relative flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200 outline-none 
            ${!done ? 'ring-gray-400' : ''}`}
						{...register('done')}
					/>
				</span>
				<div className='flex flex-col justify-center items-center mb-2 py-8'>
					<h2 className='font-semibold'>¿En Que dia debera ser completada?</h2>
					<Calendar
						onChange={handleChangeDate}
						value={date}
					/>
				</div>
				<button
					className='bg-sky-700 p-3 rounded-lg block w-full mt-3 text-white font-semibold'
					type='submit'
				>
					Guardar
				</button>
				{params.id && (
					<div className='flex justify-end'>
						<button
							className='bg-red-500 p-3 rounded-lg w-48 mt-3 text-white font-semibold'
							type='button'
							onClick={handleDelete}
						>
							Delete
						</button>
					</div>
				)}
			</form>
		</div>
	);
}
