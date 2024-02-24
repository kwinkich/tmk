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
			className='input'
			type='text'
		/>
	);
};

export default Input;
