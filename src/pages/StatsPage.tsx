import { PieChart } from '@mui/x-charts';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import { useTimers } from '../contexts/TimersContext';

export default function StatsPage() {
	const { timers, convertToMinutes, getTotalTime } = useTimers();

	const pieChartData = timers.map((timer) => ({
		id: timer.id,
		value: convertToMinutes(timer.value),
		label: `${timer.name}`,
	}));
	return (
		<section className='section'>
			<div className='section-block'>
				<h1 className='hero-text'>Stats Page</h1>
				<div>
					{timers.length === 0 ? (
						<div className='flex-flex-col mt-6'>
							<p className='paragraph'>
								You didnt have any timers. Please create timer
							</p>
							<Link to={`/createTimers`} className='mt-12'>
								<Button>Create timer</Button>
							</Link>
						</div>
					) : (
						<div>
							<PieChart
								series={[
									{
										data: pieChartData,
										innerRadius: 20,
										outerRadius: 100,
										paddingAngle: 5,
										cornerRadius: 5,
										startAngle: -90,
										cx: 150,
										cy: 150,
										highlightScope: { faded: 'global', highlighted: 'item' },
										faded: {
											innerRadius: 30,
											additionalRadius: -30,
											color: 'gray',
										},
									},
								]}
								width={400}
								height={325}
							/>
							<p className='text-2'>
								Total time:{' '}
								<span className=' font-normal'>{getTotalTime(timers)}</span>
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
