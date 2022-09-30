import { Moment } from 'moment';
import React, { useState } from 'react';

import type { Tasks } from '../../types';
import { getWeekDays } from '../../utils/helpers/date/getWeekDays';

import { WeekBody } from './WeekBody';
import { WeekHeader } from './WeekHeader';

interface WeekProps {
    selectedDate: Moment;
}

export const Week: React.FC<WeekProps> = ({ selectedDate }) => {
    const [tasks, setTasks] = useState<Tasks>([]);

    const handleAddTask = (day: Moment, hour: number, text: string) => {
        setTasks((p) => p.concat({ date: day, hour, tasks: [{ text }] }));
    };

    const weekDays = getWeekDays(selectedDate);

    return (
        <div className='Week'>
            <WeekHeader weekDays={weekDays} selectedDate={selectedDate} />
            <WeekBody weekDays={weekDays} tasks={tasks} onAddTask={handleAddTask} />
        </div>
    );
};
