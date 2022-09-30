import moment from 'moment';
import React from 'react';

import { Calendar } from '../Calendar/Calendar';

interface SidebarProps {
    selectedDate: moment.Moment;
    setSelectedDate: (date: moment.Moment) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedDate, setSelectedDate }) => {
    return (
        <aside className='Sidebar'>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </aside>
    );
};
