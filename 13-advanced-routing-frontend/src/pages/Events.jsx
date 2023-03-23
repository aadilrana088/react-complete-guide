import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

const EventsPage = () => {
    const data = useLoaderData();
    // if(data.hasError) {
    //     return <p>{data.message}</p>
    // }
    const events = data.events
    return <EventsList events={events} />;
};

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // return {
        //     hasError: true,
        //     message: "Could nor fetch events"
        // }
        throw { message: 'Could not fetch events.'}
    } else {
        const resData = await response.json();
        return resData;
    }
}
