import { useForm } from 'react-hook-form';
import { createTasks } from '../api/tasks.api';
import { useNavigate } from 'react-router-dom';
export function TaksFormPage() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		await createTasks(data);
		navigate('/tasks');
	});

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
			</form>
		</div>
	);
}
