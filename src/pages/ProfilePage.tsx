import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import Input from '../components/Input/Input';
import { useTimers } from '../contexts/TimersContext';

export default function ProfilePage() {
	const { timers, convertToTimeFormat, getTotalTime } = useTimers();
	const [username, editUsername] = useState('');
	const [isEdit, setIsEdit] = useState(false);
	const [isErrorInput, setIsErrorInput] = useState(false);
	let totalTime = 0;
	for (let i = 0; i < timers.length; i++) {
		totalTime += timers[i].value;
	}

	function setName() {
		if (username !== '' && username !== ' ' && username !== undefined) {
			localStorage.setItem('username', username);
			setIsEdit(false);
			setIsErrorInput(false);
		} else {
			setIsErrorInput(true);
		}
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
									<span className='lining-nums font-normal'>
										{localStorage.getItem('username')}
									</span>
								</p>
								<p className='text-2xl text-white lining-nums font-medium'>
									Timer count:{' '}
									<span className='lining-nums font-normal'>
										{timers.length}
									</span>
								</p>
								<p className='text-2xl text-white lining-nums font-medium'>
									Total time:{' '}
									<span className='lining-nums font-normal'>
										{getTotalTime(timers)}
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
										{isErrorInput ? (
											<p className='text-lg text-red-400'>Error</p>
										) : null}
									</div>
								</div>
								<div className='flex  items-center gap-x-3 mt-14'>
									<Button click={() => setName()}>Ok</Button>
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
