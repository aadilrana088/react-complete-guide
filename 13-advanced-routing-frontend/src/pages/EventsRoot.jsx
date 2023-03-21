import { Outlet, useNavigation } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation"
const EventsRoot = () => {
    const navigation = useNavigation();
    return <>
        <EventsNavigation />
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
    </>;
};

export default EventsRoot;
