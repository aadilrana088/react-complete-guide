import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    // const params = useParams();
    const data = useLoaderData();
    console.log(data)
    return <div>
        {/* <h1>EventDetailPage</h1> */}
        <EventItem event={data.event} />
        {/* <p>Event Id: {params.eventId}</p> */}
    </div>;
};

export default EventDetailPage;


export async function  loader({request, params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);
    console.log(response);
    if(!response.ok) {
        throw json({messgae: "could not fetch events for selected events"}, {status: 500})
    } else {
        return response
    }
}