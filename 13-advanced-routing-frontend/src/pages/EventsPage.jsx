import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some Events',
    },
    {
        id: 'e2',
        title: 'Another Events',
    },
];
const EventsPage = () => {
    return (
        <div>
            EventsPage
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li>
                        <Link to={event.id} id={event.id}>
                            {event.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsPage;
