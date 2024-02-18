import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import Input from '../components/Input/Input';

export default function LoginPage() {
	const [username, setUsername] = useState('');

	function storageUsername() {
		localStorage.setItem('username', username);
	}

	return (
		<div className='container mx-auto flex flex-col items-center justify-center h-screen'>
			<h1 className='text-4xl text-white font-bold'>Welcome to TMK!</h1>
			<p className='text-2xl text-gray-300 font-medium mt-2'>
				Login or register
			</p>
			<div className='flex flex-col mt-8 gap-y-5'>
				<Input
					placeholder='username'
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
				/>
				<Button href={`/main`} click={storageUsername}>
					Login
				</Button>
				<p className='text-center text-lg text-gray-200'>or</p>
				<Link to={`/register`}>
					<p className='text-center text-xl text-white font-medium'>
						Registration
					</p>
				</Link>
			</div>
		</div>
	);
}
