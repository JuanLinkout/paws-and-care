// External Libraries
import React from 'react'

// Components
import { CommonLayout } from '@components/structure/CommonLayout'
import { PageTitle } from '@components/structure/PageTitle'
import { Button } from '@components/buttons/Button'
import { UserList } from './views/UserList'

// Services
import { useUsers } from './hooks/useUsers'

// Assets
import { AddSVG } from '@assets/icons/buttons/Add'

// Styles
import { Container, Content, TitleContainer } from './styles'
import { CustomerDetailsModal } from './modals/CustomerDetailsModal'
import { ActionModal } from '@components/modals/ActionModal'

export const Users: React.FC = () => {
  const {
    users,
    loading,
    customerDetailsRef,
    deleteCustomerRef,
    handleSearch,
    handleOpenCustomerDetails,
    handleCreateCustomerClick,
    reloadList,
    handleDeleteClick,
    handleDeleteCustomer
  } = useUsers()

  return (
    <CommonLayout>
      <Container>
        <TitleContainer>
          <PageTitle
            title="Clientes"
            description="Visualize e gerencie clientes"
            endComponent={
              <Button
                onClick={handleCreateCustomerClick}
                startIcon={<AddSVG />}
                label="Adicionar cliente"
                size="large"
              />
            }
          />
        </TitleContainer>

        <Content>
          <UserList
            onDeleteClick={handleDeleteClick}
            onEditClick={handleOpenCustomerDetails}
            onSearch={handleSearch}
            users={users}
            loading={loading}
          />
        </Content>

        <CustomerDetailsModal ref={customerDetailsRef} onSuccess={reloadList} />
        <ActionModal
          title="Deletar cliente"
          description="Você realmente deseja deletar esse cliente? Essa ação não pode ser desfeita."
          ref={deleteCustomerRef}
          isAsync
          onCancelPress={() => deleteCustomerRef.current.close()}
          onConfirmPress={handleDeleteCustomer}
        />
      </Container>
    </CommonLayout>
  )
}
