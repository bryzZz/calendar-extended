import moment from 'moment';
import React from 'react';

import { useCalendar } from '../../hooks/useCalendar';

import './style.css';

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
    const {
        days,
        weekdaysShort,
        currentMonth,
        currentYear,
        decrementMonth,
        incrementMonth,
        handleDayClick
    } = useCalendar();

    return (
        <div className='Calendar'>
            <div className='Calendar__header'>
                <div className='Calendar__current-date'>
                    {moment.months()[currentMonth]} {currentYear}
                </div>
                <button className='Calendar__button' onClick={decrementMonth}>
                    <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z' />
                    </svg>
                </button>
                <button className='Calendar__button' onClick={incrementMonth}>
                    <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z' />
                    </svg>
                </button>
            </div>
            <div className='Calendar__week-days'>
                {weekdaysShort.map((weekDay) => (
                    <div key={weekDay} className='Calendar__week-day'>
                        {weekDay}
                    </div>
                ))}
            </div>
            <div className='Calendar__days'>
                {days.map(({ day, date, isCurrentMonthDay, isSelectedDay, isToday }, i) => (
                    <div
                        key={i}
                        className={[
                            'Calendar__day',
                            isCurrentMonthDay ? 'current-month' : '',
                            isSelectedDay ? 'selected' : '',
                            isToday ? 'today' : ''
                        ].join(' ')}
                        onClick={() => handleDayClick(day)}
                        aria-hidden
                    >
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
};
