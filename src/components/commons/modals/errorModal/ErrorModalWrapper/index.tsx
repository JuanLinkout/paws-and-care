// External Libraries
import React from 'react'

// Components
import { ErrorModal } from '../ErrorModal'
import { useErrorModalContext } from '@contexts/useErrorModalContext'

// Services

export const ErrorModalWrapper: React.FC = () => {
  const { ref } = useErrorModalContext()

  return <ErrorModal ref={ref} />
}
