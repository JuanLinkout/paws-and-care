import { ErrorHandlerResponse } from './types'

export const handleFormatedError = (
  error: ErrorHandlerResponse
): ErrorHandlerResponse => {
  const message =
    error?.message || 'Por favor entre em contato com o nosso suporte.'
  const title = error?.title || 'Algo deu errado'
  const code = error?.code || undefined

  return {
    title,
    message,
    code
  }
}
