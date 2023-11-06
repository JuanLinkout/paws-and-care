import { IErrorModalMethods } from '@components/modals/errorModal/ErrorModal/types'
import { ErrorHandlerResponse } from '@utils/handlers/errors'

export interface OpenErrorModal {
  error?: unknown
  customError?: ErrorHandlerResponse
}

export interface ErrorModalContextData {
  openErrorModal: (value: OpenErrorModal) => void
  closeErrorModal: () => void
  ref: React.MutableRefObject<IErrorModalMethods>
}
