import AddressIcon from '../icons/AddressIcon';
import DateIcon from '../icons/DateIcon';
import LogisticsItem from './LogisticsItem';
import styles from './EventLogistics.module.css';

function EventLogistics(props) {
    const { date, address, image, imageAlt } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const addressText = address.replace(', ', '\n');

    return (
        <section className={styles.logistics}>
            <div className={styles.image}>
                <img src={`/${image}`} alt={imageAlt} />
            </div>
            <ul className={styles.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
