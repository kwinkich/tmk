import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import TimerCard from '../components/TimerCard/TimerCard';
import { useTimers } from '../contexts/TimersContext';

const MainPage: React.FC = () => {
	const { timers } = useTimers();

	useEffect(() => {
		console.log(timers);
	}, [timers]);

	return (
		<div className='w-full mt-14'>
			<div className='max-w-[90%] ml-36'>
				<h1 className='text-3xl text-white font-bold mb-10'>Your Timers</h1>
				{timers.length === 0 ? (
					<div className=' mt-5'>
						<p className='text-lg text-white font-medium mb-10'>
							You didnt have any timers. If you want to create timers please
							click in button
						</p>
						<Button href='/createTimers'>Create Timers</Button>
					</div>
				) : (
					<>
						<div className='max-w-max grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-x-4 mb-5'>
							{timers.map((timer) => (
								<TimerCard cardKey={timer.id.toString()} data={timer} />
							))}
						</div>
						<Link to={`/createTimers`}>
							<Button>Create Timers</Button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default MainPage;
