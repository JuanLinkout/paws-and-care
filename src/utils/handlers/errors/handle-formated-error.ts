import { HttpError, ErrorHandlerResponse } from './types'

export const handleFormatedError = (error: HttpError): ErrorHandlerResponse => {
  const message =
    error?.response?.data?.message ||
    'Por favor entre em contato com o nosso suporte.'
  const title = 'Algo deu errado'
  const code = error?.response?.data?.errorCode || undefined

  return {
    title,
    message,
    code
  }
}
