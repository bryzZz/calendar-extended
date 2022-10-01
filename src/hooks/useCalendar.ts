import moment, { Moment } from 'moment';
import { useMemo, useState } from 'react';

import { useAppContext } from '../context';
import { getArange } from '../utils/helpers/getArange';

export const useCalendar = () => {
    const { selectedDate, setSelectedDate } = useAppContext();
    const [currentMonth, setCurrentMonth] = useState(moment().month());
    const [currentYear, setCurrentYear] = useState(moment().year());

    const days = useMemo(() => {
        const instance = moment([currentYear, currentMonth]);

        const startDate = instance.startOf('month').subtract(instance.weekday() - 1, 'day');

        return getArange(42).map((n) => {
            const day = moment(startDate).add(n, 'day');

            return {
                isToday: moment().isSame(day, 'day'),
                isCurrentMonthDay: currentMonth === day.month(),
                isSelectedDay: day.isSame(selectedDate, 'day'),
                date: day.date(),
                day
            };
        });
    }, [currentMonth, selectedDate]);

    const incrementMonth = () => {
        setCurrentMonth((p) => {
            if (p + 1 > 11) {
                setCurrentYear(currentYear + 1);
                return 0;
            }
            return p + 1;
        });
    };

    const decrementMonth = () => {
        setCurrentMonth((p) => {
            if (p - 1 < 0) {
                setCurrentYear(currentYear - 1);
                return 11;
            }
            return p - 1;
        });
    };

    const handleDayClick = (day: Moment) => {
        if (!selectedDate.isSame(day, 'month')) {
            setCurrentMonth(day.month());
            setCurrentYear(day.year());
        }
        setSelectedDate(day);
    };

    const weekdaysShort = moment.weekdaysShort(true);

    return {
        days,
        weekdaysShort,
        currentMonth,
        currentYear,
        incrementMonth,
        decrementMonth,
        handleDayClick
    };
};
