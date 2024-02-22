interface ButtonProps {
	children: React.ReactNode;
	isDanger?: boolean;
	click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, isDanger, click }) => {
	return isDanger === true ? (
		<button
			onClick={click}
			className='cursor-pointer text-center px-12 py-4 text-lg text-white font-bold border-2 border-red-500 border-dashed hover:bg-red-500'
		>
			{children}
		</button>
	) : (
		<button
			onClick={click}
			className='cursor-pointer text-center px-12 py-4 text-lg text-white font-bold border-2 border-emerald-500 border-dashed hover:bg-emerald-500'
		>
			{children}
		</button>
	);
};

export default Button;
