export interface ErrorHandlerResponse {
  title: string
  message: string
  code?: string
}

export interface AmplifyError {
  message: string
  code: string
}
