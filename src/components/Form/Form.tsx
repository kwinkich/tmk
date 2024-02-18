import Input from '../Input/Input';
import Label from '../Label/Label';

interface FormProps {
	labelText: string;
	placeholder: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({
	labelText,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<div className='flex flex-col max-w-[300px] gap-y-2'>
			<Label>{labelText}</Label>
			<Input
				placeholder={placeholder}
				value={value || ''}
				change={onChange}
			></Input>
		</div>
	);
};

export default Form;
