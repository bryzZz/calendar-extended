import { observer } from 'mobx-react-lite';
import React from 'react';

import { WeekBody } from '../../components/WeekBody/WeekBody';
import { WeekHeader } from '../../components/WeekHeader/WeekHeader';

import './style.css';

interface WeekProps {}

export const Week: React.FC<WeekProps> = observer(() => {
    return (
        <div className='Week'>
            <WeekHeader />
            <WeekBody />
        </div>
    );
});
