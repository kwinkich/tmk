interface LabelProps {
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
	return <label className='text-2'>{children}</label>;
};

export default Label;
