/* eslint-disable @typescript-eslint/lines-between-class-members */
import { makeAutoObservable } from 'mobx';
import moment from 'moment';

import { getArange } from '../utils/helpers/getArange';

moment.updateLocale('en', { week: { dow: 1 } });

class Calendar {
    selectedDate = moment();
    currentYear = this.selectedDate.year();
    currentMonth = this.selectedDate.month();

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedDate = (date: moment.Moment) => {
        this.selectedDate = date;
    };

    incrementMonth = () => {
        if (this.currentMonth + 1 > 11) {
            this.currentYear += 1;
            this.currentMonth = 0;
        } else {
            this.currentMonth += 1;
        }
    };

    decrementMonth = () => {
        if (this.currentMonth - 1 < 0) {
            this.currentYear -= 1;
            this.currentMonth = 11;
        } else {
            this.currentMonth -= 1;
        }
    };

    handleDayClick = (day: moment.Moment) => {
        if (!this.selectedDate.isSame(day, 'month')) {
            this.currentMonth = day.month();
            this.currentYear = day.year();
        }
        this.selectedDate = day;
    };

    getCalendarDays = (year: number, monthIndex: number) => {
        const instance = moment([year, monthIndex]);

        const startDate = instance.startOf('month').subtract(instance.weekday(), 'day');

        return getArange(42).map((n) => {
            const day = moment(startDate).add(n, 'day');
            const id = day.format('MM-DD-YYYY');
            const isCurrentMonthDay = monthIndex === day.month();
            const isToday = moment().isSame(day, 'day');
            const isSelectedDay = day.isSame(this.selectedDate, 'day');
            const date = day.date();

            return {
                id,
                isToday,
                isCurrentMonthDay,
                isSelectedDay,
                date,
                day
            };
        });
    };

    get currentWeekDays() {
        return getArange(7).map((n) => moment(this.selectedDate).startOf('week').add(n, 'day'));
    }
}

export const calendar = new Calendar();
