import { observer } from 'mobx-react-lite';
import { Moment } from 'moment';
import React, { useState } from 'react';
import Modal from 'react-modal';

import { calendar } from '../../store/Calendar';
import { getArange } from '../../utils/helpers/getArange';

import './style.css';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

interface WeekBodyProps {}

export const WeekBody: React.FC<WeekBodyProps> = observer(() => {
    const [taskText, setTaskText] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState<Moment>();
    const [selectedHour, setSelectedHour] = useState<number>();

    const handleClickField = (day: Moment, hour: number) => {
        setSelectedDay(day);
        setSelectedHour(hour);
        setIsOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedDay && selectedHour)
            calendar.handleAddTask(selectedDay, selectedHour, taskText);

        setTaskText('');
        setIsOpen(false);
    };

    const handleRequestClose = () => {
        setIsOpen(false);
        setTaskText('');
    };

    return (
        <div className='WeekBody'>
            <div className='WeekBody__hours'>
                {getArange(24).map((hour, i) => (
                    <div className='WeekBody__hour' key={i}>
                        {hour}
                    </div>
                ))}
            </div>

            {calendar.currentWeekDays.map((day, i) => (
                <div key={i} className='WeekBody__days'>
                    {getArange(24).map((hour, i) => {
                        const hourTasks = calendar.tasks.find(
                            (task) => task.date.isSame(day) && task.hour === hour
                        );

                        return (
                            <div
                                key={i}
                                className='WeekBody__cell'
                                onClick={() => handleClickField(day, hour)}
                                aria-hidden
                            >
                                {hourTasks?.tasks[0].text}
                            </div>
                        );
                    })}
                </div>
            ))}
            <Modal
                isOpen={isOpen}
                onRequestClose={handleRequestClose}
                contentLabel='Task Modal'
                style={customStyles}
            >
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Type you task'
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </Modal>
        </div>
    );
});
