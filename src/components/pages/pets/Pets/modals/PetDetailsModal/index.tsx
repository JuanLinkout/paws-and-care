// External Libraries
import React, { useImperativeHandle } from 'react'

// Components
import { BaseModal } from '@components/modals/BaseModal'
import { TitledInput } from '@components/inputs/TitledInput'
import { Typography } from '@components/toolkit/Typography'
import { IconButton } from '@components/buttons/IconButton'
import { Button } from '@components/buttons/Button'

// Assets
import { CloseSVG } from '@assets/icons/modals/Close'

// Types
import { PetDetailsModalMethods } from './types'
import { usePetDetailsModal } from './hooks/usePetDetailsModal'
import { getModalTitle } from './hooks/usePetDetailsModal/utils'

// Styles
import { Container, Content, Footer, Header, Row } from './styles'
import theme from '@globals/theme'
import { Select } from '@components/selects/Select'

interface Props {
  onSuccess: () => void
}

export const PetDetailsModal = React.forwardRef<PetDetailsModalMethods, Props>(
  ({ onSuccess }, ref) => {
    const {
      handleRefMethods,
      handleClose,
      handleCustomerFormChange,
      handleConfirmClick,
      isOpen,
      form,
      isCreating,
      loading,
      customers
    } = usePetDetailsModal(onSuccess)
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
              value={form.name}
              onChange={v => handleCustomerFormChange('name', v)}
            />

            <TitledInput
              title="Tipo"
              placeholder="Tipo"
              value={form.type}
              onChange={v => handleCustomerFormChange('type', v)}
            />

            <TitledInput
              title="Raça"
              placeholder="Raça"
              value={form.breed}
              onChange={v => handleCustomerFormChange('breed', v)}
            />

            <Select
              label="Dono"
              value={form.customer}
              onChange={v => handleCustomerFormChange('customer', v)}
              options={customers}
            />
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
  }
)

PetDetailsModal.displayName = 'PetDetailsModal'
