import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Month, Week, Year } from '../../pages';

import './style.scss';

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
    return (
        <main className='Main'>
            <Routes>
                <Route path='/week' element={<Week />} />
                <Route path='/month' element={<Month />} />
                <Route path='/year' element={<Year />} />
                <Route path='*' element={<Navigate to='/week' replace />} />
            </Routes>
        </main>
    );
};
