import EventItem from './EventItem';

function EventList(props) {
    console.log(props);
    const { items } = props;

    return (
        <ul>
            {items.map((event) => {
                return <EventItem></EventItem>;
            })}
        </ul>
    );
}

export default EventList;
