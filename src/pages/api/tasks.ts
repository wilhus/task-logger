import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function getTasks(request: NextApiRequest, response: NextApiResponse) {
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    })
    const tasks = await db.all('SELECT * FROM Task');

    response.json(tasks)
}