/* eslint-disable react/display-name */
// External Libraries
import React, { useState, useImperativeHandle } from 'react'

// Components
import { Button } from '@components/buttons/Button'
import { BaseModal } from '@components/modals/BaseModal'
import { Typography } from '@components/toolkit/Typography'

// Services
import { errorHandler, ErrorHandlerResponse } from '@utils/handlers/errors'
import { OpenErrorModal } from '@contexts/useErrorModalContext/types'

// Assets
import { CloseSVG } from '@assets/icons/modals/Close'

// Types
import { IErrorModalMethods } from './types'

// Styles
import { Container, Content, Footer, Header } from './styles'
import theme from '@globals/theme'
import { IconButton } from '@components/buttons/IconButton'

export const ErrorModal = React.forwardRef<IErrorModalMethods, unknown>(
  (_, ref) => {
    // Hooks
    useImperativeHandle(ref, handleRefMethods)

    // States
    const [visible, setVisible] = useState(false)
    const [errorInfo, setErrorInfo] = useState<ErrorHandlerResponse>()

    // Functions
    function handleRefMethods() {
      return { open: handleOpen, close: handleClose }
    }

    function handleOpen(value: OpenErrorModal) {
      const error = errorHandler(value.error)
      setErrorInfo(error)
      setVisible(true)
    }

    function handleClose() {
      setVisible(false)
    }

    return (
      <BaseModal open={visible} handleClose={handleClose}>
        <Container>
          <Header>
            <Typography variant="h6" color={theme.colors.textPrimary}>
              {errorInfo?.title}
            </Typography>

            <IconButton size="2rem" icon={<CloseSVG />} onClick={handleClose} />
          </Header>

          <Content>
            <Typography
              align="left"
              variant="b1"
              color={theme.colors.textSecondary}
            >
              {errorInfo?.message}
            </Typography>

            {errorInfo?.code ? (
              <Typography variant="b2" color={theme.colors.textSecondary}>
                Código do erro: {errorInfo?.code}
              </Typography>
            ) : null}
          </Content>

          <Footer>
            <Button label="Entendi" onClick={handleClose} />
          </Footer>
        </Container>
      </BaseModal>
    )
  }
)

// ErrorModal.displayName = 'ErrorModal'
