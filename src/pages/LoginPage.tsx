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
			<h1 className='hero-text'>Welcome to TMK!</h1>
			<p className='text-2 mt-2'>Login or register</p>
			<div className='flex-flex-col mt-8 gap-y-5'>
				<Input
					placeholder='username'
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
				/>
				<Link to={`/main`}>
					<Button click={storageUsername}>Register</Button>
				</Link>
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
