import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Month, Week } from './pages';

export const App: React.FC = () => {
    const [isSidebarExpended, setIsSidebarExpended] = useState(true);

    return (
        <div className='App'>
            <Header onClickBurgerMenu={setIsSidebarExpended} />
            <main className='main'>
                <Sidebar isExpended={isSidebarExpended} />
                <Routes>
                    <Route path='/week' element={<Week />} />
                    <Route path='/month' element={<Month />} />
                    <Route path='*' element={<Navigate to='/week' replace />} />
                </Routes>
            </main>
        </div>
    );
};
