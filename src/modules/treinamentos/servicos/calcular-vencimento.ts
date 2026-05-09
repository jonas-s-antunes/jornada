import { addDays } from 'date-fns'

export function calcularVencimento(
  dataRealizacao: Date,
  validadeDias: number
) {
  return addDays(dataRealizacao, validadeDias)
}
