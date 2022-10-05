import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';

import { calendar } from '../../store/Calendar';

import './style.scss';

interface WeekHeaderProps {}

export const WeekHeader: React.FC<WeekHeaderProps> = observer(() => {
    return (
        <div className='WeekHeader'>
            <div className='WeekHeader__timezone'>UTC + {moment().utcOffset() / 60}</div>
            {calendar.currentWeekDays.map((day, i) => {
                const weekDayShort = moment.weekdaysShort()[day.day()];
                const isToday = day.date() === moment().date();
                const isSelectedDate = day.date() === calendar.selectedDate.date();

                return (
                    <div
                        className={[
                            'WeekHeader__cell',
                            isToday ? 'today' : '',
                            isSelectedDate ? 'selected' : ''
                        ].join(' ')}
                        key={i}
                    >
                        <span>{weekDayShort}</span>
                        <span>{day.date()}</span>
                    </div>
                );
            })}
        </div>
    );
});
