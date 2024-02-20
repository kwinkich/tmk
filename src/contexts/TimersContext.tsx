import React, { ReactNode, createContext, useContext, useState } from 'react';

type Timer = {
	name: string;
	description: string;
	value: number;
	id: number;
};

const TimersContext = createContext<{
	timers: Timer[];
	addTimer: (timer: Timer) => void;
	editTimer: (timer: Timer) => void;
	convertToTimeFormat: (seconds: number) => string;
	convertToMinutes: (seconds: number) => number;
}>({
	timers: [],
	addTimer: () => {},
	editTimer: () => {},
	convertToTimeFormat: () => '00:00:00',
	convertToMinutes: () => 0,
});

export const TimerProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [timers, setTimers] = useState<Timer[]>([]);

	const addTimer = (timer: Timer) => {
		setTimers((prevTimers) => [...prevTimers, timer]);
	};

	const editTimer = (editedTimer: Timer) => {
		setTimers((prevTimers) =>
			prevTimers.map((timer) =>
				timer.id === editedTimer.id ? { ...timer, ...editedTimer } : timer
			)
		);
	};

	const convertToTimeFormat = (seconds: number): string => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
			2,
			'0'
		)}:${String(remainingSeconds).padStart(2, '0')}`;
	};

	const convertToMinutes = (seconds: number): number => {
		return Math.floor((seconds % 3600) / 60);
	};

	return (
		<TimersContext.Provider
			value={{
				timers,
				addTimer,
				editTimer,
				convertToTimeFormat,
				convertToMinutes,
			}}
		>
			{children}
		</TimersContext.Provider>
	);
};

export const useTimers = () => useContext(TimersContext);
