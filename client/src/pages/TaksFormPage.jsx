import { useForm } from 'react-hook-form';
import { createTasks, deleteTaks, getTask, updateTaks } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
export function TaksFormPage() {
	const navigate = useNavigate();
	const params = useParams();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		if (params.id) {
			await updateTaks(params.id, data);
		} else {
			await createTasks(data);
		}

		navigate('/tasks');
	});

	useEffect(() => {
		async function loadTask() {
			if (params.id) {
				const {
					data: { title, description }
				} = await getTask(params.id);
				setValue('title', title);
				setValue('description', description);
			}
		}
		loadTask();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='title'
					{...register('title', { required: true })}
				/>
				{errors.title && <span>El titulo es requerido</span>}
				<textarea
					rows='3'
					placeholder='description'
					{...register('description', { required: true })}
				></textarea>
				{errors.description && <span>la descripcion es requerida</span>}
				<button>Save</button>
				{params.id && (
					<button
						onClick={async () => {
							const accepted = window.confirm('Estas seguro que quieres eliminar');
							if (accepted) {
								await deleteTaks(params.id);
								navigate('/tasks');
							}
						}}
					>
						Delete
					</button>
				)}
			</form>
		</div>
	);
}
