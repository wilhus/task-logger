import { NextApiRequest, NextApiResponse } from 'next'
import openDB from '../../openDB';


export default async function getTasks(request: NextApiRequest, response: NextApiResponse) {
    const db = await openDB()
    const tasks = await db.all('SELECT * FROM Task');

    response.json(tasks)
}