export interface Treinamento {
  id: string
  titulo: string
  validade_dias: number
  descricao?: string
  criado_em: string
}

export interface RegistroTreinamento {
  id: string
  treinamento_id: string
  realizado_em: string
  vence_em: string
  observacoes?: string
}
