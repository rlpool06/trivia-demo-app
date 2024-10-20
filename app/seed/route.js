import { db } from '@vercel/postgres';
import { triviaQuestions } from '../lib/placeholder-data';

const client = await db.connect();

async function seedQuestions() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      question TEXT NOT NULL,
      answer TEXT NOT NULL
    );
  `;

  const insertedQuestions = await Promise.all(
    triviaQuestions.map(async (question) => {
      return client.sql`
        INSERT INTO questions (id, question, answer)
        VALUES (${question.id}, ${question.question}, ${question.answer})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedQuestions;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedQuestions();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
