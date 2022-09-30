import moment, { Moment } from 'moment';
import React from 'react';

interface WeekHeaderProps {
    selectedDate: Moment;
    weekDays: Moment[];
}

export const WeekHeader: React.FC<WeekHeaderProps> = ({ weekDays, selectedDate }) => {
    return (
        <div className='WeekHeader'>
            <div className='WeekHeader__timezone'>UTC + {moment().utcOffset() / 60}</div>
            {weekDays.map((day, i) => {
                const weekDayShort = moment.weekdaysShort()[day.day()];
                const isToday = day.date() === moment().date();
                const isSelectedDate = day.date() === selectedDate.date();

                return (
                    <div
                        className={[
                            'WeekHeader__cell',
                            isToday ? 'today' : '',
                            isSelectedDate ? 'selected' : ''
                        ].join(' ')}
                        key={i}
                    >
                        <h3>
                            <span>{weekDayShort}</span>
                            <span>{day.date()}</span>
                        </h3>
                    </div>
                );
            })}
        </div>
    );
};
