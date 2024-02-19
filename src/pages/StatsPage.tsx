import { PieChart } from '@mui/x-charts';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import { useTimers } from '../contexts/TimersContext';

export default function StatsPage() {
	const { timers } = useTimers();

	const pieChartData = timers.map((timer) => ({
		id: timer.id,
		value: timer.value,
		label: `${timer.name}`,
	}));
	return (
		<section className='w-full mt-14'>
			<div className='max-w-[90%] ml-36'>
				<h1 className='text-3xl text-white font-bold'>Stats Page</h1>
				<div>
					{timers.length === 0 ? (
						<div className='flex flex-col mt-6'>
							<p className='text-lg text-white'>
								You didnt have any timers. Please create timer
							</p>
							<Link to={`/createTimers`} className='mt-12'>
								<Button>Create timer</Button>
							</Link>
						</div>
					) : (
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
					)}
				</div>
			</div>
		</section>
	);
}
