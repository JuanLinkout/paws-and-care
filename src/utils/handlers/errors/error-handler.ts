import { ErrorHandlerResponse } from './types'
import { handleFormatedError } from './handle-formated-error'
import { handleUnformatedError } from './handle-unformated-error'

export const errorHandler = (
  error: unknown,
  isAmplify?: boolean
): ErrorHandlerResponse => {
  let response: ErrorHandlerResponse

  try {
    const parsedError = JSON.parse(
      (error as Error).message
    ) as ErrorHandlerResponse
    response = handleFormatedError(parsedError)
  } catch (e) {
    response = handleUnformatedError(error as Error)
  }

  return response
}
