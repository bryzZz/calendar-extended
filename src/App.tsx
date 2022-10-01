import moment from 'moment';
import React, { useState } from 'react';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Week } from './components/Week/Week';

interface AppProps {}

moment.updateLocale('en', { week: { dow: 1 } });

export const App: React.FC<AppProps> = () => {
    const [isSidebarExpended, setIsSidebarExpended] = useState(true);

    return (
        <div className='App'>
            <Header onClickBurgerMenu={setIsSidebarExpended} />
            <main className='main'>
                <Sidebar isExpended={isSidebarExpended} />
                <Week />
            </main>
        </div>
    );
};
