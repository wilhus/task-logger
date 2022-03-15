const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')

async function setup() {
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    })
    await db.migrate({force: 'last'})

    const tasks = await db.all('SELECT * FROM Task');
    console.log('ALL TASKS', JSON.stringify(tasks, null, 1));
}

setup()