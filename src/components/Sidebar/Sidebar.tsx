import { observer } from 'mobx-react-lite';
import React from 'react';

import { calendar } from '../../store/Calendar';
import { Calendar } from '../Calendar/Calendar';

import './style.scss';

interface SidebarProps {
    isExpended: boolean;
}

export const Sidebar: React.FC<SidebarProps> = observer(({ isExpended }) => {
    return (
        <aside className={['Sidebar', isExpended ? 'expended' : ''].join(' ')}>
            <Calendar year={calendar.currentYear} monthIndex={calendar.currentMonth} />
        </aside>
    );
});
