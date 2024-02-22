import { Menu, MenuItem, Sidebar, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function SidebarComponent() {
	return (
		<Sidebar
			className='border-0 h-screen w-[275px]'
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					backgroundColor: '#3f3f46',
				},
			}}
		>
			<Menu
				menuItemStyles={{
					button: {
						['&:hover']: {
							backgroundColor: '#18181b',
						},
						[`&.active`]: {
							backgroundColor: '#18181b',
							color: 'white',
						},
					},
				}}
			>
				<div className='ml-[50px] mt-[50px] '>
					<p className='text-3xl text-white font-bold'>TMK</p>
					<p className='text-white'>Timer Manage Kiwnkich</p>
				</div>
				<Link to={`/profile`}>
					<MenuItem className='mt-16 text-lg text-white'>
						<p className='pl-9'>Profile</p>
					</MenuItem>
				</Link>
				<Link to={`/main`}>
					<MenuItem className='text-lg text-white'>
						<p className='pl-9'>Main</p>
					</MenuItem>
				</Link>
				<Link to={`/stats`}>
					<MenuItem className='text-lg text-white'>
						<p className='pl-9'>Stats</p>
					</MenuItem>
				</Link>
				<Link to={`/createTimers`}>
					<MenuItem className='text-lg text-white'>
						<p className='pl-9'>Create Timer</p>
					</MenuItem>
				</Link>
				<Link to={`/about`}>
					<MenuItem className='text-lg text-white'>
						<p className='pl-9'>About</p>
					</MenuItem>
				</Link>
				<MenuItem
					href='https://github.com/kwinkich'
					target='_blank'
					className='text-lg text-white'
				>
					<p className='pl-9'>GitHub</p>
				</MenuItem>
			</Menu>
		</Sidebar>
	);
}
