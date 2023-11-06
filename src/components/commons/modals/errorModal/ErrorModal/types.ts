import { OpenErrorModal } from '@contexts/useErrorModalContext/types'

export interface IErrorModalMethods {
  open: (value: OpenErrorModal) => void
  close: () => void
}
