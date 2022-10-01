import { makeAutoObservable } from 'mobx';
import moment from 'moment';

import { Tasks } from '../types';
import { getArange } from '../utils/helpers/getArange';

class Calendar {
    tasks: Tasks = [];

    selectedDate = moment();

    currentYear = this.selectedDate.year();

    currentMonth = this.selectedDate.month();

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedDate(date: moment.Moment) {
        this.selectedDate = date;
    }

    handleAddTask(day: moment.Moment, hour: number, text: string) {
        // setTasks((p) => p.concat({ date: day, hour, tasks: [{ text }] }));
    }

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

    get currentWeekDays() {
        return getArange(7).map((n) => moment(this.selectedDate).startOf('week').add(n, 'day'));
    }

    get days() {
        const instance = moment([this.currentYear, this.currentMonth]);

        const startDate = instance.startOf('month').subtract(instance.weekday() - 1, 'day');

        return getArange(42).map((n) => {
            const day = moment(startDate).add(n, 'day');

            return {
                isToday: moment().isSame(day, 'day'),
                isCurrentMonthDay: this.currentMonth === day.month(),
                isSelectedDay: day.isSame(this.selectedDate, 'day'),
                date: day.date(),
                day
            };
        });
    }
}

export const calendar = new Calendar();
