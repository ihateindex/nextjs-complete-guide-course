import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.id;
    const eventById = getEventById(eventId);

    // console.log(router.query);
    console.log(eventById);

    return (
        <div>
            <h1>Event Detail Page</h1>
        </div>
    );
}

export default EventDetailPage;
