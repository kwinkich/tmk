interface ButtonProps {
	children: React.ReactNode;
	isDanger?: boolean;
	click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, isDanger, click }) => {
	return isDanger === true ? (
		<button onClick={click} className='btn border-red-500 hover:bg-red-500'>
			{children}
		</button>
	) : (
		<button
			onClick={click}
			className='btn border-emerald-500 hover:bg-emerald-500'
		>
			{children}
		</button>
	);
};

export default Button;
