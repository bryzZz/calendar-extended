import moment from 'moment';
import React from 'react';

import { Calendar } from '../Calendar/Calendar';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <aside className='Sidebar'>
            <Calendar />
        </aside>
    );
};
