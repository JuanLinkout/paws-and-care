import { ErrorHandlerResponse } from './types'

export const handleUnformatedError = (error: Error): ErrorHandlerResponse => {
  // TODO: Implementar lógica com sentry ou firebase pra enviar dados dos erros não formatados
  console.error('HandleUnformatedError: ', error)

  return {
    title: 'Algo deu errado do nosso lado',
    message: 'Por favor entre em contato com o nosso suporte.'
  }
}
