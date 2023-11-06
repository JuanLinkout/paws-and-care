import { ErrorHandlerResponse } from '@utils/handlers/errors'

export function makeCustomError(
  title: string,
  message: string,
  code?: string
): { customError: ErrorHandlerResponse } {
  return {
    customError: {
      title,
      message,
      code
    }
  }
}
