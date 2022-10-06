import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';

import { Calendar } from '../../components';
import { calendar } from '../../store/Calendar';
import { getArange } from '../../utils/helpers/getArange';

import './style.scss';

interface YearProps {}

export const Year: React.FC<YearProps> = observer(() => {
    return (
        <div className='Year'>
            {getArange(12).map((month, i) => (
                <div>
                    <Calendar
                        key={i}
                        year={calendar.currentYear}
                        monthIndex={month}
                        withControls={false}
                        showToday={moment().month() === i}
                    />
                </div>
            ))}
        </div>
    );
});
