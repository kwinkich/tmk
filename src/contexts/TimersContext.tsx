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
	convertToTimeFormat: (minutes: number) => string;
	convertToMinutes: (time: string) => number;
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

	const convertToTimeFormat = (minutes: number): string => {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		const seconds = (remainingMinutes % 60) * 0;
		return `${String(hours).padStart(2, '0')}:${String(
			remainingMinutes
		).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};

	const convertToMinutes = (time: string): number => {
		const [hours, minutes, seconds] = time.split(':').map(Number);
		return hours * 60 + minutes + seconds / 60;
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
