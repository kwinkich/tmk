import { Link } from 'react-router-dom';
import { useTimers } from '../../contexts/TimersContext';

interface TimerCardProps {
	id?: number;
	data: Record<string, any>;
	cardKey: string;
	href?: string;
}

const TimerCard: React.FC<TimerCardProps> = ({ data, cardKey, href, id }) => {
	const { convertToTimeFormat } = useTimers();

	const timeValue = id !== undefined && data.value ? data.value : 0;

	return (
		<Link to={`/timer/${data.id}`}>
			<a
				href={href}
				key={cardKey}
				className='flex items-center justify-between sm:w-[290px] border-2 px-8 py-6 rounded-xl mb-4 cursor-pointer hover:bg-zinc-800 duration-300 ease-in-out '
			>
				<div>
					<h1 className='text-xl text-white font-semibold'>{data.name}</h1>
					<p className='text-lg text-gray-300'>{data.description}</p>
				</div>
				<div>
					<p className='text-base text-white'>
						{convertToTimeFormat(data.value)}
					</p>
				</div>
			</a>
		</Link>
	);
};
export default TimerCard;
