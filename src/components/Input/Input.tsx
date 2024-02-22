interface InputProps {
	placeholder: string;
	value?: string;
	change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, change }) => {
	return (
		<input
			placeholder={placeholder}
			value={value}
			onChange={change}
			className='text-lg pl-4 py-4 bg-zinc-700 text-gray-400'
			type='text'
		/>
	);
};

export default Input;
