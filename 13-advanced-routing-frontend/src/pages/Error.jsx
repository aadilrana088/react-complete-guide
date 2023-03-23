import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

const Error = () => {
    const error = useRouteError();

    let title= "An Error Occured";
    let message= "Something went wrong";

    if(error.status === 500) {
        // message = JSON.parse(error.data).message
        message = error.data.message
    }
    if(error.status === 404) {
        title = "Page Not Found";
        message= "Could not find resource or page"
    }

    return <>
        <MainNavigation />
        <PageContent title={title}>{message}</PageContent>
    </>;
};

export default Error;
