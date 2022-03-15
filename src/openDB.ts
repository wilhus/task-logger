import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default function openDB() {
    return open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    })
}