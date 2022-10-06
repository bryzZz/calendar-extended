import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';

interface HeaderProps {
    onClickBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ onClickBurgerMenu }) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleChangeSelect = (e: Event) => {
            navigate((e.target as HTMLSelectElement).value);
        };

        selectRef.current?.addEventListener('change', handleChangeSelect);

        return () => {
            selectRef.current?.removeEventListener('change', handleChangeSelect);
        };
    }, []);

    return (
        <header className='Header'>
            <button className='Header__burger' onClick={() => onClickBurgerMenu((p) => !p)}>
                <svg
                    fill='none'
                    height='28'
                    viewBox='0 0 28 28'
                    width='28'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z'
                        fill='inherit'
                    />
                    <path
                        d='M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z'
                        fill='inherit'
                    />
                    <path
                        d='M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z'
                        fill='inherit'
                    />
                </svg>
            </button>
            <div className='logo'>
                <svg
                    className='logo__icon'
                    height='24'
                    version='1.1'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g transform='translate(0 -1028.4)'>
                        <path
                            d='m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z'
                            fill='#bdc3c7'
                        />
                        <path
                            d='m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z'
                            fill='#ecf0f1'
                            transform='translate(0 1028.4)'
                        />
                        <path
                            d='m5 1031.4c-1.1046 0-2 0.9-2 2v3h18v-3c0-1.1-0.895-2-2-2h-6-2-6z'
                            fill='#e74c3c'
                        />
                        <path
                            d='m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z'
                            fill='#c0392b'
                            transform='translate(.5 1028.4)'
                        />
                        <path
                            d='m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z'
                            fill='#bdc3c7'
                            transform='translate(0 1028.4)'
                        />
                        <path
                            d='m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z'
                            fill='#c0392b'
                            transform='translate(12.5 1028.4)'
                        />
                        <path
                            d='m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z'
                            fill='#bdc3c7'
                        />
                        <rect
                            fill='#c0392b'
                            height='1'
                            transform='translate(0 1028.4)'
                            width='18'
                            x='3'
                            y='8'
                        />
                        <path
                            d='m8 1039.4v1h2c0.552 0 1 0.4 1 1 0 0.5-0.448 1-1 1h-1v1h1c0.552 0 1 0.4 1 1 0 0.5-0.448 1-1 1h-2v1h2c1.105 0 2-0.9 2-2 0-0.6-0.268-1.2-0.688-1.5 0.42-0.4 0.688-0.9 0.688-1.5 0-1.1-0.895-2-2-2h-2z'
                            fill='#95a5a6'
                        />
                        <path d='m13 1039.4v1h1v5h-1v1h1 1 1v-1h-1v-6h-1-1z' fill='#95a5a6' />
                    </g>
                </svg>
                <span>Calendar</span>
            </div>
            <select ref={selectRef}>
                <option value='week'>Week</option>
                <option value='month'>Month</option>
                <option value='year'>Year</option>
            </select>
        </header>
    );
};
