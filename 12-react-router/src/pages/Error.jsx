import React from 'react';
import MainNavigation from '../components/MainNavigation';
import Card from '../components/UI/Card';

const Error = () => {
    return (
        <>
            <MainNavigation />
            <Card>
                <h1>Error page</h1>
                <p>Something went wrong</p>
            </Card>
            ;
        </>
    );
};

export default Error;
