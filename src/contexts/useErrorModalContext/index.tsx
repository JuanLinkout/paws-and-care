// Bibliotecas Externas
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useRef
} from 'react'

// Services
import { ErrorModalContextData } from './types'
import { IErrorModalMethods } from '@components/modals/errorModal/ErrorModal/types'

const ErrorModalContext = createContext<ErrorModalContextData>(
  {} as ErrorModalContextData
)

const ErrorModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<IErrorModalMethods>()

  function openErrorModal(value: unknown) {
    ref.current?.open(value)
  }

  function closeErrorModal() {
    ref.current?.close()
  }

  return (
    <ErrorModalContext.Provider
      value={{
        openErrorModal,
        closeErrorModal,
        ref
      }}
    >
      {children}
    </ErrorModalContext.Provider>
  )
}

function useErrorModalContext(): ErrorModalContextData {
  const context = useContext(ErrorModalContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useErrorModalContext must be within an ContextoProvider')
  }

  return context
}

export { ErrorModalProvider, useErrorModalContext }
