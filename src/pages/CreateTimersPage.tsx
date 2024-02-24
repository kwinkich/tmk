import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Buttons';
import Form from '../components/Form/Form';
import { useTimers } from '../contexts/TimersContext';

const CreateTimersPage: React.FC = () => {
	const [timersName, setTimersName] = useState<string>('');
	const [timersDescription, setTimersDescription] = useState<string>('');
	const [isErrorInput, setIsErrorInput] = useState(false);
	const { addTimer, timers } = useTimers();

	const handleCreateTimer = () => {
		if (
			timersName !== '' &&
			timersName !== ' ' &&
			timersName !== undefined &&
			timersDescription !== '' &&
			timersDescription !== ' ' &&
			timersDescription !== undefined
		) {
			setIsErrorInput(false);
			const newTimer = {
				name: timersName,
				description: timersDescription,
				value: 0,
				id: timers.length,
			};
			addTimer(newTimer);
			setTimersName('');
			setTimersDescription('');
		} else {
			setIsErrorInput(true);
		}
	};

	useEffect(() => {
		console.log(timers);
	}, [timers]);

	return (
		<div className='section'>
			<div className='section-block'>
				<h1 className='hero-text mb-10'>Create Timers</h1>

				<div className='flex-flex-col gap-y-5 max-w-[300px]'>
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
					{isErrorInput ? (
						<p className='text-lg text-red-400'>All fields must be filled in</p>
					) : null}
					<Button click={handleCreateTimer}>Create timer</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateTimersPage;
