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
}>({
	timers: [],
	addTimer: () => {},
	editTimer: () => {},
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

	return (
		<TimersContext.Provider value={{ timers, addTimer, editTimer }}>
			{children}
		</TimersContext.Provider>
	);
};

export const useTimers = () => useContext(TimersContext);
