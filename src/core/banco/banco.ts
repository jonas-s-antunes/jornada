import * as SQLite from 'expo-sqlite'

export const banco = SQLite.openDatabaseSync('jornada.db')
