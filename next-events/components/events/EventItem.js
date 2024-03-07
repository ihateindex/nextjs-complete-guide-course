import styled from './EventItem.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={styled.item}>
            <img src={'/' + image} alt={title} />
            <div className={styled.content}>
                <div className={styled.summary}>
                    <h2>{title}</h2>
                    <div className={styled.date}>
                        <DateIcon></DateIcon>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styled.address}>
                        <AddressIcon></AddressIcon>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styled.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styled.icon}>
                            <ArrowRightIcon></ArrowRightIcon>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
