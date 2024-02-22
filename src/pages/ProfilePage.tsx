import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import Input from '../components/Input/Input';
import { useTimers } from '../contexts/TimersContext';

export default function ProfilePage() {
	const { timers, convertToTimeFormat } = useTimers();
	const [username, editUsername] = useState('');
	const [isEdit, setIsEdit] = useState(false);
	let totalTime = 0;

	for (let i = 0; i < timers.length; i++) {
		totalTime += timers[i].value;
	}

	return (
		<section className='w-full mt-[100px]'>
			<div className='max-w-[90%] ml-[100px]'>
				<h1 className='text-4xl text-white font-bold mb-10'>Profile</h1>
				<div>
					<div className='flex flex-col gap-y-3'>
						{!isEdit ? (
							<>
								<p className='text-2xl text-white lining-nums font-medium'>
									Name:{' '}
									<span className=' font-normal'>
										{localStorage.getItem('username')}
									</span>
								</p>
								<p className='text-2xl text-white lining-nums font-medium'>
									Timer count:{' '}
									<span className=' font-normal'>{timers.length}</span>
								</p>
								<p className='text-2xl text-white lining-nums font-medium'>
									Total time:{' '}
									<span className=' font-normal'>
										{convertToTimeFormat(totalTime)}
									</span>
								</p>
								<div className='flex  items-center gap-x-3 mt-14'>
									<Button click={() => setIsEdit(true)}>Edit</Button>
									<Link to={`/login`}>
										<Button isDanger={true}>Exit</Button>
									</Link>
								</div>
							</>
						) : (
							<>
								<div className='flex flex-col gap-y-2'>
									<p className=' text-2xl text-white font-medium'>Name:</p>
									<div>
										<Input
											placeholder='Edit new username'
											change={(e) => editUsername(e.target.value)}
										/>
									</div>
								</div>
								<div className='flex  items-center gap-x-3 mt-14'>
									<Button
										click={() => {
											localStorage.setItem('username', username);
											setIsEdit(false);
										}}
									>
										Ok
									</Button>
									<Button
										isDanger={true}
										click={() => {
											setIsEdit(false);
										}}
									>
										Canel
									</Button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
