import { NextApiRequest, NextApiResponse } from 'next'
import openDb from '../../../../openDb'

export default async function getTaskById(request: NextApiRequest, response: NextApiResponse) {
    const db = await openDb()
    const task = await db.get('SELECT * FROM Task WHERE id = ?', [request.query.id]);

    response.json(task)
}