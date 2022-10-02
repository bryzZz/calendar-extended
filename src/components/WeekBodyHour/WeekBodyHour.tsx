import { observer } from 'mobx-react-lite';
import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import { tasks } from '../../store/Tasks';

interface WeekBodyHourProps {
    day: Moment;
    hour: number;
}

export const WeekBodyHour: React.FC<WeekBodyHourProps> = observer(({ day, hour }) => {
    const [taskText, setTaskText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent, day: Moment, hour: number) => {
        e.preventDefault();

        tasks.handleAddTask(day, hour, taskText);

        setTaskText('');
    };

    const hourTasks = tasks.tasks.find((task) => task.date.isSame(day) && task.hour === hour);

    return (
        <Popup
            closeOnDocumentClick
            position={['right top', 'left top', 'right bottom', 'left bottom']}
            keepTooltipInside='.Week'
            trigger={
                <div className='WeekBody__cell' aria-hidden>
                    {hourTasks?.tasks[0].text}
                </div>
            }
        >
            <div>
                {moment.weekdays()[day.day()]} {day.date()} - {hour}:00
            </div>
            <form onSubmit={(e) => handleSubmit(e, day, hour)}>
                <input
                    type='text'
                    placeholder='Type you task'
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </Popup>
    );
});
