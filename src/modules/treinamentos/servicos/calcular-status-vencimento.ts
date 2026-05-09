import {
  differenceInDays,
} from 'date-fns'

export function calcularStatusVencimento(
  dataVencimento: string
) {
  const dias =
    differenceInDays(
      new Date(dataVencimento),
      new Date()
    )

  if (dias < 0) {
    return {
      tipo: 'vencido',
      texto: 'Vencido',
      dias,
    }
  }

  if (dias <= 30) {
    return {
      tipo: 'proximo',
      texto: `Vence em ${dias} dias`,
      dias,
    }
  }

  return {
    tipo: 'ok',
    texto: `Vence em ${dias} dias`,
    dias,
  }
}
