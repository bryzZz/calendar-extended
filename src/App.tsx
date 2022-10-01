import moment from 'moment';
import React, { useState } from 'react';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Week } from './components/Week/Week';
import { AppContextProvider } from './context';

interface AppProps {}

moment.updateLocale('en', { week: { dow: 1 } });

export const App: React.FC<AppProps> = () => {
    const [selectedDate, setSelectedDate] = useState(moment());

    return (
        <AppContextProvider value={{ selectedDate, setSelectedDate }}>
            <div className='App'>
                <Header />
                <Sidebar />
                <Week />
            </div>
        </AppContextProvider>
    );
};
