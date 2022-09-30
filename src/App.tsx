import moment from 'moment';
import React, { useState } from 'react';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Week } from './components/Week/Week';

interface AppProps {}

moment.updateLocale('en', { week: { dow: 1 } });

export const App: React.FC<AppProps> = () => {
    const [selectedDate, setSelectedDate] = useState(moment().subtract(1, 'day'));

    return (
        <div className='App'>
            <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <Week selectedDate={selectedDate} />
        </div>
    );
};
