import Link from 'next/link';
import styled from './Button.module.css';

function Button(props) {
    return (
        <Link className={styled.btn} href={props.link}>
            {props.children}
        </Link>
    );
}

export default Button;
