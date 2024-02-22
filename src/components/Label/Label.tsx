interface LabelProps {
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
	return (
		<label className='text-2xl font-semibold text-white'>{children}</label>
	);
};

export default Label;
