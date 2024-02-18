interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	isDanger?: boolean;
	click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, href, isDanger, click }) => {
	return isDanger === true ? (
		<a
			onClick={click}
			href={href}
			className='cursor-pointer text-lg text-center px-8 py-4 bg-red-500 text-white font-bold rounded-lg'
		>
			{children}
		</a>
	) : (
		<a
			onClick={click}
			href={href}
			className='cursor-pointer text-lg text-center px-8 py-4 bg-emerald-400 text-zinc-900 font-bold rounded-lg'
		>
			{children}
		</a>
	);
};

export default Button;
