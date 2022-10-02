import { observer } from 'mobx-react-lite';
import React from 'react';

import { calendar } from '../../store/Calendar';
import { getArange } from '../../utils/helpers/getArange';
import { WeekBodyHour } from '../WeekBodyHour/WeekBodyHour';

import './style.css';

interface WeekBodyProps {}

export const WeekBody: React.FC<WeekBodyProps> = observer(() => {
    return (
        <div className='WeekBody'>
            <div className='WeekBody__hours'>
                {getArange(24).map((hour, i) => (
                    <div className='WeekBody__hour' key={i}>
                        {hour}
                    </div>
                ))}
            </div>
            <div className='WeekBody__days'>
                {calendar.currentWeekDays.map((day) => (
                    <div key={day.day()} className='WeekBody__day'>
                        {getArange(24).map((hour) => (
                            <WeekBodyHour key={hour} day={day} hour={hour} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
});
