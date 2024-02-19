import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import Input from '../components/Input/Input';
import { useTimers } from '../contexts/TimersContext';

export default function TimerPage() {
	const { id } = useParams();
	const { timers, editTimer } = useTimers();
	const [timerName, setTimerName] = useState('');
	const [timerDescription, setTimerDescription] = useState('');
	const [timerValue, setTimerValue] = useState('');
	const [isEdit, setIsEdit] = useState(false);

	function handleEdit() {
		setIsEdit(false);
		const currentTimer = {
			name: timerName,
			description: timerDescription,
			value: Number(timerValue) || timer?.value || NaN,
			id: timer?.id || NaN,
		};
		editTimer(currentTimer);
		setTimerName('');
		setTimerDescription('');
		setTimerValue('');
	}

	const timer = id
		? timers.find((timer) => timer.id === parseInt(id, 10))
		: undefined;

	return (
		<section className='w-full mt-14'>
			<div className='max-w-[90%] ml-36'>
				<h1 className='text-3xl text-white font-bold mb-10'>{timer?.name}</h1>
				{timer && !isEdit && (
					<div className='mb-14'>
						<p className='text-lg text-white'>Name: {timer.name}</p>
						<p className='text-lg text-white'>
							Description: {timer.description}
						</p>
						<p className='text-lg text-white'>Value: {timer.value}</p>
					</div>
				)}
				{isEdit && (
					<div className='mb-14 flex flex-col gap-y-3'>
						<div>
							<Input
								placeholder='Timer name'
								change={(e) => setTimerName(e.target.value)}
							></Input>
						</div>
						<div>
							<Input
								placeholder='Timer description'
								change={(e) => setTimerDescription(e.target.value)}
							></Input>
						</div>
						<div>
							<Input
								placeholder='Timer value'
								change={(e) => setTimerValue(e.target.value)}
							></Input>
						</div>
						<div className='mt-3'>
							<Button click={handleEdit}>OK</Button>
						</div>
					</div>
				)}
				<div className='flex items-center gap-x-3'>
					<Button click={() => setIsEdit(true)}>Edit</Button>
					<Link to={`/main`}>
						<Button isDanger={true}>Back</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
