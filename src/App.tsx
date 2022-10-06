import React, { useState } from 'react';

import { Header, Main, Sidebar } from './components';

export const App: React.FC = () => {
    const [isSidebarExpended, setIsSidebarExpended] = useState(true);

    return (
        <div className='App'>
            <Header onClickBurgerMenu={setIsSidebarExpended} />
            <div className='App__container'>
                <Sidebar isExpended={isSidebarExpended} />
                <Main />
            </div>
        </div>
    );
};
