import Link from 'next/link';
import styled from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

export default function MealsPage() {
    return (
        <>
            <header className={styled.header}>
                <h1>
                    Delicious meals, crated <span className={styled.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={styled.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styled.main}>
                <MealsGrid meals={[]}></MealsGrid>
            </main>
        </>
    );
}
