import { sql } from '@vercel/postgres';
import { TriviaQuestion } from './definitions';

export async function fetchTriviaQuestions() {
  try {
    console.log('Fetching question data...');

    const data = await sql<TriviaQuestion>`SELECT * FROM questions`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}