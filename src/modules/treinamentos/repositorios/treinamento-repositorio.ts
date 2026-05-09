import { banco } from '@core/banco/banco'

import {
  RegistroTreinamento,
  Treinamento,
} from '../tipos/treinamento'

export const treinamentoRepositorio = {
  async criar(
    treinamento: Treinamento
  ) {
    await banco.runAsync(
      `
      INSERT INTO treinamentos (
        id,
        titulo,
        validade_dias,
        descricao,
        criado_em
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        treinamento.id,
        treinamento.titulo,
        treinamento.validade_dias,
        treinamento.descricao ?? null,
        treinamento.criado_em,
      ]
    )
  },

  async listar() {
    return banco.getAllAsync<Treinamento>(
      `
      SELECT *
      FROM treinamentos
      ORDER BY titulo
      `
    )
  },

  async registrarRealizacao(
    registro: RegistroTreinamento
  ) {
    await banco.runAsync(
      `
      INSERT INTO registros_treinamentos (
        id,
        treinamento_id,
        realizado_em,
        vence_em,
        observacoes
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        registro.id,
        registro.treinamento_id,
        registro.realizado_em,
        registro.vence_em,
        registro.observacoes ?? null,
      ]
    )
  },

  async listarHistorico(
    treinamentoId: string
  ) {
    return banco.getAllAsync<RegistroTreinamento>(
      `
      SELECT *
      FROM registros_treinamentos
      WHERE treinamento_id = ?
      ORDER BY realizado_em DESC
      `,
      [treinamentoId]
    )
  },

  async buscarPorId(
    treinamentoId: string
  ) {
    return banco.getFirstAsync<Treinamento>(
      `
    SELECT *
    FROM treinamentos
    WHERE id = ?
    `,
      [treinamentoId]
    )
  },

  async buscarUltimaRealizacao(
    treinamentoId: string
  ) {
    return banco.getFirstAsync<RegistroTreinamento>(
      `
    SELECT *
    FROM registros_treinamentos
    WHERE treinamento_id = ?
    ORDER BY realizado_em DESC
    LIMIT 1
    `,
      [treinamentoId]
    )
  },

  async deletarTreinamento(id: string) {
  await banco.runAsync(
    `DELETE FROM treinamentos WHERE id = ?`,
    [id]
  )

  await banco.runAsync(
    `DELETE FROM registros_treinamentos WHERE treinamento_id = ?`,
    [id]
  )
},

async deletarRealizacao(id: string) {
  await banco.runAsync(
    `DELETE FROM registros_treinamentos WHERE id = ?`,
    [id]
  )
},
}
