import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';

import { calendar } from '../../store/Calendar';

import './style.scss';

interface CalendarProps {
    year: number;
    monthIndex: number;
    withControls?: boolean;
    showToday?: boolean;
    showSelectedDay?: boolean;
}

const weekdaysShort = moment.weekdaysShort(true);

export const Calendar: React.FC<CalendarProps> = observer(
    ({ year, monthIndex, withControls = true, showToday = true, showSelectedDay = true }) => {
        return (
            <div className='Calendar'>
                <div className='Calendar__header'>
                    <div className='Calendar__current-date'>
                        {moment.months()[monthIndex]} {year}
                    </div>
                    {withControls && (
                        <>
                            <button className='Calendar__button' onClick={calendar.decrementMonth}>
                                <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z' />
                                </svg>
                            </button>
                            <button className='Calendar__button' onClick={calendar.incrementMonth}>
                                <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z' />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
                <div className='Calendar__week-days'>
                    {weekdaysShort.map((weekDay) => (
                        <div key={weekDay} className='Calendar__week-day'>
                            <span>{weekDay}</span>
                        </div>
                    ))}
                </div>
                <div className='Calendar__days'>
                    {calendar
                        .getCalendarDays(year, monthIndex)
                        .map(({ day, date, isCurrentMonthDay, isSelectedDay, isToday, id }) => (
                            <div
                                key={id}
                                className={[
                                    'Calendar__day',
                                    isCurrentMonthDay ? 'current-month' : '',
                                    showSelectedDay && isSelectedDay ? 'selected' : '',
                                    showToday && isToday ? 'today' : ''
                                ].join(' ')}
                                onClick={() => calendar.handleDayClick(day)}
                                aria-hidden
                            >
                                <span>{date}</span>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
);
