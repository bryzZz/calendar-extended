import moment, { Moment } from 'moment';

import { getArange } from '../getArange';

export const getWeekDays = (date: Moment) => {
    return getArange(7).map((n) => moment(date).startOf('week').add(n, 'day'));
};
