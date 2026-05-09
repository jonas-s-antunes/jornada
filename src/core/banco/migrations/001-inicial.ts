export const migration001Inicial = `
CREATE TABLE IF NOT EXISTS treinamentos (
  id TEXT PRIMARY KEY NOT NULL,
  titulo TEXT NOT NULL,
  validade_dias INTEGER NOT NULL,
  descricao TEXT,
  criado_em TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS registros_treinamentos (
  id TEXT PRIMARY KEY NOT NULL,
  treinamento_id TEXT NOT NULL,
  realizado_em TEXT NOT NULL,
  vence_em TEXT NOT NULL,
  observacoes TEXT,

  FOREIGN KEY (treinamento_id)
    REFERENCES treinamentos(id)
);
`
