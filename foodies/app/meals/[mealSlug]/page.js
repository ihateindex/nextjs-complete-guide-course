import Image from 'next/image';

import styled from './page.module.css';
import { getMeal } from '@/lib/meals';

export default function MealDetailsPage({ params }) {
    const meal = getMeal(params.mealSlug);
    // console.log(meal);

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={styled.header}>
                <div className={styled.image}>
                    <Image src={meal.image} alt={meal.title} fill></Image>
                </div>
                <div className={styled.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styled.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styled.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={styled.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
            </main>
        </>
    );
}
