import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Roots = () => {
    return <>
        <MainNavigation />
        <Outlet />
    </>;
};

export default Roots;
