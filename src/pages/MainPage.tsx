import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import TimerCard from '../components/TimerCard/TimerCard';
import { useTimers } from '../contexts/TimersContext';

const MainPage: React.FC = () => {
	const { timers } = useTimers();

	return (
		<section className='section'>
			<div className='section-block'>
				<h1 className='hero-text'>Timers</h1>
				{timers.length === 0 ? (
					<div className=' mt-5'>
						<p className='paragraph font-medium mb-10'>
							You don't have any timers. Please create timers
						</p>
						<Link to={`/createTimers`}>
							<Button>Create Timers</Button>
						</Link>
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
		</section>
	);
};

export default MainPage;
