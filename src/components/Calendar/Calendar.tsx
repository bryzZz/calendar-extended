import moment from 'moment';
import React from 'react';

import { useCalendar } from '../../hooks/useCalendar';

import './style.css';

interface CalendarProps {
    selectedDate: moment.Moment;
    setSelectedDate: (date: moment.Moment) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, setSelectedDate }) => {
    const { days, weekdaysShort, currentMonth, currentYear, decrementMonth, incrementMonth } =
        useCalendar(selectedDate);

    return (
        <div className='Calendar'>
            <div className='Calendar__header'>
                <div className='Calendar__current-date'>
                    {moment.months()[currentMonth]} {currentYear}
                </div>
                <button onClick={decrementMonth}>{'<'}</button>
                <button onClick={incrementMonth}>{'>'}</button>
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
                        onClick={() => setSelectedDate(day)}
                        aria-hidden
                    >
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
};
