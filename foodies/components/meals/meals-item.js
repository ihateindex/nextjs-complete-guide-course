import Link from 'next/link';
import Image from 'next/image';

import styled from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
    return (
        <article className={styled.meal}>
            <header>
                <div className={styled.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={styled.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={styled.content}>
                <p className={styled.summary}>{summary}</p>
                <div className={styled.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}
