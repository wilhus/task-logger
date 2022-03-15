import { NextApiRequest, NextApiResponse } from 'next'
import openDb from '../../openDb';

export default async function getTasks(request: NextApiRequest, response: NextApiResponse) {
    const db = await openDb()

    if (request.method === 'POST') {
        const statement = await db.prepare(
          'INSERT INTO Task (title, description, created) VALUES (?, ?, ?)'
        )
        await statement.run(
          request.body.title,
          request.body.description,
          request.body.created
        )
      }

    const tasks = await db.all('SELECT * FROM Task');

    response.json(tasks)
}