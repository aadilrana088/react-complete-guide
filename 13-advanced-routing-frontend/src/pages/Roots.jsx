import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Roots = () => {
    // const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        setTimeout(() => {
            submit(null, { action: '/logout', method: 'POST' });
        }, 1 * 60 * 60 * 1000);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            {/* {navigation.state === "loading" && <p>Loading...</p>} */}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Roots;
