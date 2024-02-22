import { PieChart } from '@mui/x-charts';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Buttons';
import { useTimers } from '../contexts/TimersContext';

export default function StatsPage() {
	const { timers, convertToMinutes, convertToTimeFormat } = useTimers();

	let totalTime = 0;

	for (let i = 0; i < timers.length; i++) {
		totalTime += timers[i].value;
	}

	const pieChartData = timers.map((timer) => ({
		id: timer.id,
		value: convertToMinutes(timer.value),
		label: `${timer.name}`,
	}));
	return (
		<section className='w-full mt-[100px]'>
			<div className='max-w-[90%] ml-[100px]'>
				<h1 className='text-4xl text-white font-bold'>Stats Page</h1>
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
							<p className='text-2xl text-white lining-nums font-medium'>
								Total time:{' '}
								<span className=' font-normal'>
									{convertToTimeFormat(totalTime)}
								</span>
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
