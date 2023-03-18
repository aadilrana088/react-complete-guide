import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();
    return <div>
        <h1>EventDetailPage</h1>
        <p>Event Id: {params.eventId}</p>
    </div>;
};

export default EventDetailPage;
