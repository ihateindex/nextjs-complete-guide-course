import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <ul>
                <EventList items={featuredEvents}></EventList>
            </ul>
        </div>
    );
}

export default HomePage;
