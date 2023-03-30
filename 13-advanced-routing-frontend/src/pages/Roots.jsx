import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../utils/auth';

const Roots = () => {
    // const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit();

    //It has error if someone refresh after 10 minutes then timers start again
    // useEffect(() => {
    //     if (!token) {
    //         return;
    //     }

    //     setTimeout(() => {
    //         submit(null, { action: '/logout', method: 'POST' });
    //     }, 1 * 60 * 60 * 1000);
    // }, [token, submit]);
    // This is correct solution
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post' });
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post' });
        }, tokenDuration);
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
