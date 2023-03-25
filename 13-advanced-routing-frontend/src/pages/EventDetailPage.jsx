import React from 'react';
import { json,  redirect,  useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    // const params = useParams();
    // const data = useLoaderData();
    const data = useRouteLoaderData("event-detail");
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

export async function action ({request, params}) {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/"+eventId, {
        method: request.method,
    })

    if(!response.ok) {
        throw json({message: "Could not delete event"}, {status: 500})
    }
    return redirect("/events")
}