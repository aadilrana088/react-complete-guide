import React from 'react';
import {Outlet} from "react-router-dom"
import MainNavigation from '../components/MainNavigation';

const Roots = () => {
    // const navigation = useNavigation();
    return <>
        <MainNavigation />
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <main>
            <Outlet />
        </main>
    </>;
};

export default Roots;
