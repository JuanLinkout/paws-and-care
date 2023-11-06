// External Libraries
import React from 'react'

// Components
import { CommonLayout } from '@components/structure/CommonLayout'
import { PageTitle } from '@components/structure/PageTitle'
import { Button } from '@components/buttons/Button'
import { PetsList } from './views/PetsList'

// Services
import { usePets } from './hooks/usePets'

// Assets
import { AddSVG } from '@assets/icons/buttons/Add'

// Styles
import { Container, Content, TitleContainer } from './styles'
import { PetDetailsModal } from './modals/PetDetailsModal'
import { ActionModal } from '@components/modals/ActionModal'

export const Pets: React.FC = () => {
  const {
    data,
    loading,
    handleSearch,
    deleteRef,
    detailsRef,
    handleCreateClick,
    handleOpenDetails,
    reloadList,
    handleDeleteClick,
    handleDeleteCustomer
  } = usePets()

  return (
    <CommonLayout>
      <Container>
        <TitleContainer>
          <PageTitle
            title="Pets"
            description="Visualize e gerencie pets"
            endComponent={
              <Button
                onClick={handleCreateClick}
                startIcon={<AddSVG />}
                label="Adicionar pet"
                size="large"
              />
            }
          />
        </TitleContainer>

        <Content>
          <PetsList
            onDeleteClick={handleDeleteClick}
            onEditClick={handleOpenDetails}
            onSearch={handleSearch}
            data={data}
            loading={loading}
          />
        </Content>

        <PetDetailsModal ref={detailsRef} onSuccess={reloadList} />
        <ActionModal
          title="Deletar pet"
          description="Você realmente deseja deletar esse pet? Essa ação não pode ser desfeita."
          ref={deleteRef}
          isAsync
          onCancelPress={() => deleteRef.current.close()}
          onConfirmPress={handleDeleteCustomer}
        />
      </Container>
    </CommonLayout>
  )
}
