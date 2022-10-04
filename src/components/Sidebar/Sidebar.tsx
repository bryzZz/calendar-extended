import React from 'react';

import { Calendar } from '../Calendar/Calendar';

import './style.scss';

interface SidebarProps {
    isExpended: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isExpended }) => {
    return (
        <aside className={['Sidebar', isExpended ? 'expended' : ''].join(' ')}>
            <Calendar />
        </aside>
    );
};
