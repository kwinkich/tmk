import { useForm } from 'react-hook-form';
interface InputProps {
	placeholder: string;
	value?: string;
	change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, change }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	return (
		<input
			placeholder={placeholder}
			value={value}
			onChange={change}
			className='text-lg pl-4 py-4 bg-zinc-700 text-gray-400 lining-nums'
			type='text'
		/>
	);
};

export default Input;
