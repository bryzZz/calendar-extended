import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';

import { calendar } from '../../store/Calendar';

import './style.css';

interface MonthProps {}

export const Month: React.FC<MonthProps> = observer(() => {
    return (
        <div className='Month'>
            {calendar.days.map(({ day, isToday, isSelectedDay, date }, i) => {
                const isFirstSevenDay = i < 7;
                const isFirstDayInMonth = date === 1;

                return (
                    <div
                        key={i}
                        className={[
                            'Month__day',
                            isToday ? 'today' : '',
                            isSelectedDay ? 'selected' : ''
                        ].join(' ')}
                    >
                        {isFirstSevenDay && <div>{moment.weekdaysShort()[day.day()]}</div>}
                        <div
                            className='Month__date'
                            onClick={() => calendar.handleDayClick(day)}
                            aria-hidden
                        >
                            <span>{date}</span>
                            {isFirstDayInMonth && <span>{moment.monthsShort()[day.month()]}</span>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
});
