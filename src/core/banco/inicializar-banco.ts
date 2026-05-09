import { banco } from './banco'
import { migrations } from './migrations'

export async function inicializarBanco() {
  await banco.execAsync(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL
    );
  `)

  const migrationsExecutadas =
    await banco.getAllAsync<{ nome: string }>(
      'SELECT nome FROM migrations'
    )

  const nomesExecutados = migrationsExecutadas.map(
    item => item.nome
  )

  for (let i = 0; i < migrations.length; i++) {
    const nomeMigration = `migration-${i + 1}`

    if (nomesExecutados.includes(nomeMigration)) {
      continue
    }

    await banco.execAsync(migrations[i])

    await banco.runAsync(
      'INSERT INTO migrations (nome) VALUES (?)',
      [nomeMigration]
    )
  }
}
