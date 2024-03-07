import EventItem from './EventItem';
import styled from './EventList.module.css';

function EventList(props) {
    console.log(props);
    const { items } = props;

    return (
        <ul className={styled.list}>
            {items.map((event) => {
                return <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image}></EventItem>;
            })}
        </ul>
    );
}

export default EventList;
