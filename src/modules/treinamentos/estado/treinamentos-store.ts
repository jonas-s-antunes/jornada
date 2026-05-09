import { create } from 'zustand'

import { treinamentoRepositorio } from '../repositorios/treinamento-repositorio'
import {
  RegistroTreinamento,
  Treinamento,
} from '../tipos/treinamento'

interface TreinamentosState {
  treinamentos: Treinamento[]

  carregando: boolean

  carregarTreinamentos: () => Promise<void>

  adicionarTreinamento: (
    treinamento: Treinamento
  ) => Promise<void>

  registrarRealizacao: (
    registro: RegistroTreinamento
  ) => Promise<void>
}

export const useTreinamentosStore =
  create<TreinamentosState>((set, get) => ({
    treinamentos: [],

    carregando: false,

    async carregarTreinamentos() {
      set({ carregando: true })

      const treinamentos =
        await treinamentoRepositorio.listar()

      set({
        treinamentos,
        carregando: false,
      })
    },

    async adicionarTreinamento(
      treinamento
    ) {
      await treinamentoRepositorio.criar(
        treinamento
      )

      await get().carregarTreinamentos()
    },

    async registrarRealizacao(
      registro
    ) {
      await treinamentoRepositorio.registrarRealizacao(
        registro
      )
    },
  }))
