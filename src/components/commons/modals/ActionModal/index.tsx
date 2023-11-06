// External Libraries
import React, { useState, useImperativeHandle } from 'react'

// Components
import { BaseModal } from '@components/modals/BaseModal'
import { Typography } from '@components/toolkit/Typography'
import { IconButton } from '@components/buttons/IconButton'
import { Button } from '@components/buttons/Button'

// Assets
import { CloseSVG } from '@assets/icons/modals/Close'

// Types
import { ActionModalMethods } from './types'

// Styles
import { Container, Content, Footer, Header } from './styles'
import theme from '@globals/theme'

interface Props {
  title: string
  description: string
  isAsync?: boolean

  confirmLabel?: string
  onConfirmPress: () => void

  cancelLabel?: string
  onCancelPress?: () => void
}

export const ActionModal = React.forwardRef<ActionModalMethods, Props>(
  (
    {
      isAsync,
      description,
      onCancelPress,
      cancelLabel,
      confirmLabel,
      onConfirmPress,
      title
    },
    ref
  ) => {
    // States
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // Ref
    useImperativeHandle(ref, handleRefMethods)
    function handleRefMethods() {
      return { open: handleOpen, close: handleClose }
    }

    async function handleConfirmClick() {
      try {
        if (isAsync) setLoading(true)
        await onConfirmPress()
      } finally {
        if (isAsync) setLoading(false)
      }
    }

    function handleOpen() {
      setIsOpen(true)
    }

    function handleClose() {
      setIsOpen(false)
    }

    return (
      <BaseModal open={isOpen} handleClose={handleClose}>
        <Container>
          <Header>
            <Typography variant="h6" color={theme.colors.textPrimary}>
              {title}
            </Typography>

            <IconButton size="2rem" icon={<CloseSVG />} onClick={handleClose} />
          </Header>

          <Content>
            <Typography variant="b2" color={theme.colors.textSecondary}>
              {description}
            </Typography>
          </Content>

          <Footer>
            {onCancelPress ? (
              <Button
                onClick={onCancelPress}
                variant="secondary"
                label={cancelLabel || 'Cancelar'}
                marginRight="4px"
              />
            ) : null}

            <Button
              loading={isAsync ? loading : false}
              onClick={handleConfirmClick}
              label={confirmLabel || 'Confirmar'}
              marginLeft="4px"
            />
          </Footer>
        </Container>
      </BaseModal>
    )
  }
)

ActionModal.displayName = 'ActionModal'
