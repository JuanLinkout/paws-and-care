// External Libraries
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'

// Styles
import { Modal } from './styles'

interface Props {
  content?: JSX.Element | null
  activateComponent?: JSX.Element
  visible: boolean
  borderRadius?: string
  onClose: () => void
}

export const TippySelect: React.FC<Props> = ({
  content,
  activateComponent,
  visible,
  borderRadius,
  onClose
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null

    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
  }, [onClose])

  function handleClose() {
    onClose()
  }

  return (
    <Modal
      interactive
      arrow={false}
      visible={visible}
      theme={'custom' as any}
      placement="bottom-start"
      content={
        <AnimatePresence mode="wait">{visible && content}</AnimatePresence>
      }
      onClickOutside={handleClose}
      borderRadius={borderRadius}
    >
      <div>{activateComponent}</div>
    </Modal>
  )
}
