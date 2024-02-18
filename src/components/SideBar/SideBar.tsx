import { Menu, MenuItem, Sidebar, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function SidebarComponent() {
	return (
		<Sidebar
			className='border-0 h-screen'
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					backgroundColor: 'rgb(39 39 42)',
				},
			}}
		>
			<Menu
				menuItemStyles={{
					button: {
						['&:hover']: {
							backgroundColor: 'rgb(68 64 60)',
						},
						[`&.active`]: {
							backgroundColor: '#13395e',
							color: '#b6c8d9',
						},
					},
				}}
			>
				<p className='text-2xl text-emerald-300 ml-[20px] mt-7 font-bold'>
					TMK Proj
				</p>
				<Link to={`/profile`}>
					<MenuItem className='mt-9 text-lg text-white'>Profile</MenuItem>
				</Link>
				<Link to={`/main`}>
					<MenuItem className='text-lg text-white'>Main</MenuItem>
				</Link>
				<Link to={`/stats`}>
					<MenuItem className='text-lg text-white'>Stats</MenuItem>
				</Link>
				<Link to={`/createTimers`}>
					<MenuItem className='text-lg text-white'>Create Timer</MenuItem>
				</Link>
				<Link to={`/about`}>
					<MenuItem className='text-lg text-white'>About</MenuItem>
				</Link>
				<MenuItem
					href='https://github.com/kwinkich'
					target='_blank'
					className='text-lg text-white'
				>
					GitHub
				</MenuItem>
			</Menu>
		</Sidebar>
	);
}
