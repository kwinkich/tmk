import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import Input from '../components/Input/Input';
import { useTimers } from '../contexts/TimersContext';

export default function TimerPage() {
	const { id } = useParams();
	const { timers, editTimer, convertToTimeFormat } = useTimers();
	const [timerName, setTimerName] = useState<string>('');
	const [timerDescription, setTimerDescription] = useState<string>('');
	const [timerValue, setTimerValue] = useState<number>(0);
	const [currentTimerValue, setCurrentTimerValue] = useState<number>(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [isEdit, setIsEdit] = useState(false);
	const [isTimerStart, setIsTimerStart] = useState(false);

	function handleEdit() {
		setIsEdit(false);
		const currentTimer = {
			name: timerName,
			description: timerDescription,
			value: timer?.value || 0,
			id: timer?.id || 0,
		};
		editTimer(currentTimer);
		setTimerName('');
		setTimerDescription('');
	}

	const timer = id
		? timers.find((timer) => timer.id === parseInt(id, 10))
		: undefined;

	function handleStartTimer() {
		setIsTimerStart(true);
		const id = setInterval(() => {
			if (timer) {
				const newValue = (timer.value ?? 0) + 1;
				timer.value = newValue;
				setCurrentTimerValue(newValue);
			}
		}, 1000);
		setIntervalId(id);
	}

	function handleStopTimer() {
		setTimerValue(0);
		setIsTimerStart(false);
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	}

	return (
		<section className='w-full mt-14'>
			<div className='max-w-[90%] ml-36'>
				<h1 className='text-3xl text-white font-bold mb-10'>{timer?.name}</h1>
				{timer && !isEdit && (
					<div className='flex items-center justify-between max-w-[50%] mb-14'>
						<div>
							<p className='text-xl text-white'>Name: {timer.name}</p>
							<p className='text-xl text-white'>
								Description: {timer.description}
							</p>
							<p className='text-xl text-white mb-5'>
								Total time: {convertToTimeFormat(timer?.value)}
							</p>
							{isTimerStart ? (
								<Button click={handleStopTimer} isDanger={true}>
									Stop Timer
								</Button>
							) : (
								<Button click={handleStartTimer}>Start Timer</Button>
							)}
						</div>
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
