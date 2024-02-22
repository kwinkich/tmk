import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Buttons';
import Form from '../components/Form/Form';
import { useTimers } from '../contexts/TimersContext';

const CreateTimersPage: React.FC = () => {
	const [timersName, setTimersName] = useState<string>('');
	const [timersDescription, setTimersDescription] = useState<string>('');
	const { addTimer, timers } = useTimers();

	const handleCreateTimer = () => {
		const newTimer = {
			name: timersName,
			description: timersDescription,
			value: 0,
			id: timers.length,
		};
		addTimer(newTimer);
		setTimersName('');
		setTimersDescription('');
	};

	useEffect(() => {
		console.log(timers);
	}, [timers]);

	return (
		<div className='w-full mt-[100px]'>
			<div className='max-w-[90%] ml-[100px]'>
				<h1 className='text-4xl text-white font-bold mb-10'>Create Timers</h1>

				<div className='flex flex-col gap-y-5 max-w-[300px]'>
					<Form
						labelText='Name:'
						placeholder='Timer name'
						value={timersName}
						onChange={(e) => setTimersName(e.target.value)}
					/>
					<Form
						labelText='Description:'
						placeholder='Timer description'
						value={timersDescription}
						onChange={(e) => setTimersDescription(e.target.value)}
					/>
					<Button click={handleCreateTimer}>Create timer</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateTimersPage;
