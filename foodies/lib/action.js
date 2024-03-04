'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

export async function shareMeal(previousState, formData) {
    function inInvalidText(text) {
        return !text || text.trim() === '';
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
        inInvalidText(meal.creator) ||
        inInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
    }
    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}
