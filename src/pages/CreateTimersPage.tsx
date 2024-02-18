import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Buttons';
import Form from '../components/Form/Form';
import { useTimers } from '../contexts/TimersContext';

const CreateTimersPage: React.FC = () => {
	const [timersName, setTimersName] = useState<string>('');
	const [timersDescription, setTimersDescription] = useState<string>('');
	const [timersValue, setTimersValue] = useState<string>('');
	const [timersId, setTimersId] = useState<string>('');
	const { addTimer, timers } = useTimers();

	const handleCreateTimer = () => {
		const newTimer = {
			name: timersName,
			description: timersDescription,
			value: Number(timersValue),
			id: Number(timersId),
		};
		addTimer(newTimer);
		setTimersName('');
		setTimersDescription('');
		setTimersId('');
		setTimersValue('');
	};

	useEffect(() => {
		console.log(timers);
	}, [timers]);

	return (
		<div className='w-full mt-14'>
			<div className='max-w-[90%] ml-36'>
				<h1 className='text-3xl text-white font-bold mb-10'>Create Timers</h1>

				<div className='flex flex-col gap-y-5 max-w-[300px]'>
					<Form
						labelText='Enter timer name:'
						placeholder='Timer name'
						value={timersName}
						onChange={(e) => setTimersName(e.target.value)}
					/>
					<Form
						labelText='Enter timer description:'
						placeholder='Timer description'
						value={timersDescription}
						onChange={(e) => setTimersDescription(e.target.value)}
					/>
					<Form
						labelText='Enter timer id:'
						placeholder='Timer id'
						value={timersId}
						onChange={(e) => setTimersId(e.target.value)}
					/>
					<Form
						labelText='Enter timer value:'
						placeholder='Timer value'
						value={timersValue}
						onChange={(e) => setTimersValue(e.target.value)}
					/>
					<Button click={handleCreateTimer}>Create timer</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateTimersPage;