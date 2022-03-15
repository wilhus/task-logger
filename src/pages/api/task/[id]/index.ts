import { NextApiRequest, NextApiResponse } from 'next'
import openDB from '../../../../openDB';

export default async function getTaskById(request: NextApiRequest, response: NextApiResponse) {
    const db = await openDB()
    const task = await db.get('SELECT * FROM Task WHERE id = ?', [request.query.id]);

    response.json(task)
}