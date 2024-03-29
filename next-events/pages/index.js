import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents}></EventList>
        </div>
    );
}

export default HomePage;
