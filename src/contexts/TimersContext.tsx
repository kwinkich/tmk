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
}>({
	timers: [],
	addTimer: () => {},
});

export const TimerProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [timers, setTimers] = useState<Timer[]>([]);

	const addTimer = (timer: Timer) => {
		setTimers((prevTimers) => [...prevTimers, timer]);
	};

	return (
		<TimersContext.Provider value={{ timers, addTimer }}>
			{children}
		</TimersContext.Provider>
	);
};

export const useTimers = () => useContext(TimersContext);