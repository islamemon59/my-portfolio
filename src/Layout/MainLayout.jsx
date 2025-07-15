import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='blinking-background'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;