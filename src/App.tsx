import moment, { Moment } from 'moment';
import React, { useState } from 'react';

interface AppProps {}

type Tasks = {
    date: Moment;
    hour: number;
    tasks: { text: string }[];
}[];

export const App: React.FC<AppProps> = () => {
    const [selectedDate, setSelectedDate] = useState(moment().subtract(1, 'day'));
    const [tasks, setTasks] = useState<Tasks>([]);

    const currentWeekDays = Array.from({ length: 7 }).map((_, i) => {
        const day = moment(selectedDate).subtract(selectedDate.day(), 'day').add(i, 'day');

        return {
            day,
            date: day.date(),
            weekDay: moment.weekdaysShort()[day.day()],
            isToday: day.date() === moment().date(),
            isSelectedDate: day.date() === selectedDate.date()
        };
    });

    const handleAddTask = (day: Moment, hour: number) => {
        setTasks((p) => p.concat({ date: day, hour, tasks: [{ text: 'abs' }] }));
    };

    const dayTasks = (day: Moment) => {
        return tasks.find((task) => task.date.isSame(day));
    };

    return (
        <div className='App'>
            <div className='Week'>
                <div className='Week__timezone'>12</div>
                {currentWeekDays.map(({ date, weekDay, isToday, isSelectedDate }) => (
                    <div className='Week__day' key={weekDay}>
                        <h3
                            className={[
                                'Week__day-header',
                                isToday ? 'today' : '',
                                isSelectedDate ? 'selected' : ''
                            ].join(' ')}
                        >
                            <span>{weekDay}</span>
                            <span>{date}</span>
                        </h3>
                    </div>
                ))}
                {Array(23)
                    .fill(0)
                    .map((_, i) => i + 1)
                    .map((v) => (
                        <React.Fragment key={v}>
                            <div className='Week__hour'>{v}</div>
                            {currentWeekDays.map(({ day }, i) => {
                                const dayTasks = tasks.find((task) => task.date.isSame(day));

                                return (
                                    <div
                                        className='Week__day-field'
                                        key={i}
                                        onClick={() => handleAddTask(day, v)}
                                        aria-hidden
                                    >
                                        {dayTasks?.hour === v &&
                                            dayTasks.tasks.map((task) => <span>{task.text}</span>)}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};
