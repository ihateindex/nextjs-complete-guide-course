import Link from 'next/link';
import styles from './Button.module.css';

function Button(props) {
    return (
        <Link className={styles.btn} href={props.link}>
            {props.children}
        </Link>
    );
}

export default Button;
