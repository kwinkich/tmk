interface TimerCardProps {
	id?: number;
	data: Record<string, any>;
	key: string;
	href?: string;
}

const TimerCard: React.FC<TimerCardProps> = ({ data, key, href }) => {
	return (
		<a
			href={href}
			key={key}
			className='flex items-center justify-between sm:w-[290px] border-2 px-8 py-6 rounded-xl mb-4 cursor-pointer hover:bg-zinc-800 duration-300 ease-in-out '
		>
			<div>
				<h1 className='text-xl text-white font-semibold'>{data.name}</h1>
				<p className='text-lg text-gray-300'>{data.description}</p>
			</div>
			<div>
				<p className='text-base text-white'>00:00</p>
			</div>
		</a>
	);
};
export default TimerCard;
