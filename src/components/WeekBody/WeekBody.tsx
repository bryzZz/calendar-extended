import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import Modal from 'react-modal';

import type { Tasks } from '../../types';
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

interface WeekBodyProps {
    weekDays: Moment[];
    tasks: Tasks;
    onAddTask: (day: Moment, hour: number, text: string) => void;
}

export const WeekBody: React.FC<WeekBodyProps> = ({ weekDays, tasks, onAddTask }) => {
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

        if (selectedDay && selectedHour) onAddTask(selectedDay, selectedHour, taskText);

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

            {weekDays.map((day, i) => (
                <div key={i} className='WeekBody__days'>
                    {getArange(24).map((hour, i) => {
                        const hourTasks = tasks.find(
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
};
