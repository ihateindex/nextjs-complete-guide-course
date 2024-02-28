import styled from './meals-grid.module.css';
import MealItem from './meals-item';

export default function MealsGrid({ meals }) {
    console.log(meals);
    return (
        <ul className={styled.meals}>
            {meals.map((meal) => {
                return (<li key={meals.id}>
                    <MealItem {...meal}></MealItem>
                </li>);
            })}
        </ul>
    );
}
