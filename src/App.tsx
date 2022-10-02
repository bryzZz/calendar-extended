import React, { useState } from 'react';

import { Header, Sidebar, Week } from './components';

export const App: React.FC = () => {
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
