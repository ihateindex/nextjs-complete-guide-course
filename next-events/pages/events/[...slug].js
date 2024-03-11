import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function FilteredEventsPage() {
    const router = useRouter();

    const filterData = router.query.slug;
    console.log(filterData);

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p>Invalid filter. Please adjust your values!</p>;
    }

    console.log(numYear, numMonth);

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    console.log(filteredEvents);

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter!</p>;
    }

    return (
        <div>
            <EventList items={filteredEvents}></EventList>
        </div>
    );
}

export default FilteredEventsPage;
