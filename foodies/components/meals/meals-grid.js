import styled from './meals-grid.module.css';
import MealItem from './meals-item';

export default function MealsGrid({ meals }) {
    return (
        <ul className={styled.meals}>
            {meals.map((meal) => {
                return (
                    <li key={meals.id}>
                        <MealItem {...meal}></MealItem>
                    </li>
                );
            })}
        </ul>
    );
}
