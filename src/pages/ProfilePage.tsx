import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import Input from '../components/Input/Input';
import { useTimers } from '../contexts/TimersContext';

export default function ProfilePage() {
	const { timers } = useTimers();
	const [username, editUsername] = useState('');
	const [isEdit, setIsEdit] = useState(false);

	return (
		<section className='w-full mt-14'>
			<div className='max-w-[90%] ml-36'>
				<h1 className='text-3xl text-white font-bold mb-10'>Your Profile</h1>
				<div>
					<div className='flex flex-col gap-y-3'>
						{!isEdit ? (
							<p className='text-xl text-white'>
								Profile Name: {localStorage.getItem('username')}
							</p>
						) : (
							<div className='flex gap-x-3'>
								<Input
									placeholder='Edit new username'
									change={(e) => editUsername(e.target.value)}
								/>
								<Button
									click={() => {
										localStorage.setItem('username', username);
										setIsEdit(false);
									}}
								>
									OK
								</Button>
							</div>
						)}
						<p className='text-xl text-white'>
							Current Timers: {timers.length}
						</p>
					</div>
					<div className='flex  items-center gap-x-3 mt-14'>
						<Link to={`/login`}>
							<Button isDanger={true}>Exit</Button>
						</Link>
						<Button click={() => setIsEdit(true)}>Edit</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
