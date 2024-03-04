'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export async function shareMeal(formData) {
    function inInvalidText(text) {
        if (!text || text.trim() === '') {
        }
    }

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (
        inInvalidText(meal.title) ||
        inInvalidText(meal.summary) ||
        inInvalidText(meal.instructions) ||
        inInvalidText(meal.image) ||
        inInvalidText(meal.creator) ||
        inInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        throw new Error('Invalid input');
    }
    await saveMeal(meal);
    redirect('/meals');
}
