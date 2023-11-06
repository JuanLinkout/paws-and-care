// External Libraries
import React, { useImperativeHandle } from 'react'

// Components
import { BaseModal } from '@components/modals/BaseModal'
import { Typography } from '@components/toolkit/Typography'
import { IconButton } from '@components/buttons/IconButton'
import { Button } from '@components/buttons/Button'

// Assets
import { CloseSVG } from '@assets/icons/modals/Close'

// Types
import { CustomerDetailsModalMethods } from './types'

// Styles
import { Container, Content, Footer, Header, Row } from './styles'
import theme from '@globals/theme'
import { useCustomerDetailsModal } from './hooks/useCustomerDetailsModal'
import { getModalTitle } from './hooks/useCustomerDetailsModal/utils'
import { TitledInput } from '@components/inputs/TitledInput'

interface Props {
  onSuccess: () => void
}

export const CustomerDetailsModal = React.forwardRef<
  CustomerDetailsModalMethods,
  Props
>(({ onSuccess }, ref) => {
  const {
    handleRefMethods,
    handleClose,
    handleCustomerFormChange,
    handleConfirmClick,
    isOpen,
    customerDetailsForm,
    isCreating,
    loading
  } = useCustomerDetailsModal(onSuccess)
  useImperativeHandle(ref, handleRefMethods)

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <Container>
        <Header>
          <Typography variant="h6" color={theme.colors.textPrimary}>
            {getModalTitle(isCreating)}
          </Typography>

          <IconButton size="2rem" icon={<CloseSVG />} onClick={handleClose} />
        </Header>

        <Content>
          <TitledInput
            title="Nome"
            placeholder="Nome"
            value={customerDetailsForm.name}
            onChange={v => handleCustomerFormChange('name', v)}
          />

          <TitledInput
            title="Documento"
            placeholder="Documento"
            value={customerDetailsForm.document}
            mask="document"
            onChange={v => handleCustomerFormChange('document', v)}
          />

          <Row>
            <TitledInput
              flex={1}
              title="E-mail"
              placeholder="E-mail"
              value={customerDetailsForm.email}
              onChange={v => handleCustomerFormChange('email', v)}
            />

            <TitledInput
              flex={1}
              title="Telefone"
              mask="phone"
              placeholder="Telefone"
              value={customerDetailsForm.phone}
              onChange={v => handleCustomerFormChange('phone', v)}
            />
          </Row>
        </Content>

        <Footer>
          <Button
            onClick={handleClose}
            variant="secondary"
            label={'Cancelar'}
            marginRight="4px"
          />

          <Button
            loading={loading}
            onClick={handleConfirmClick}
            label={'Confirmar'}
            marginLeft="4px"
          />
        </Footer>
      </Container>
    </BaseModal>
  )
})

CustomerDetailsModal.displayName = 'CustomerDetailsModal'
