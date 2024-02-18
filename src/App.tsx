import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SidebarComponent from './components/SideBar/SideBar';
import { TimerProvider } from './contexts/TimersContext';
import './index.css';
import AboutPage from './pages/AboutPage';
import CreateTimersPage from './pages/CreateTimersPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import RegistrationPage from './pages/RegistrationPage';
import StatsPage from './pages/StatsPage';
import TimerPage from './pages/TimerPage';

function App() {
	return (
		<Router>
			<TimerProvider>
				<div className='flex'>
					<SidebarComponent />
					<Routes>
						<Route path='/main' element={<MainPage />} />
						<Route path='/createTimers' element={<CreateTimersPage />} />
						<Route path='/stats' element={<StatsPage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/register' element={<RegistrationPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/timer/:id' element={<TimerPage />} />
					</Routes>
				</div>
			</TimerProvider>
		</Router>
	);
}

export default App;
