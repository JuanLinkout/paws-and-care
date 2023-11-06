interface ErrorBody {
  errorCode: string
  message: string
  error: string
  localizedMessage?: string
  localizedTitle?: string
}

export interface HttpError {
  response: {
    data: ErrorBody
  }
}

export interface ErrorHandlerResponse {
  title: string
  message: string
  code?: string
}

export interface AmplifyError {
  message: string
  code: string
}
