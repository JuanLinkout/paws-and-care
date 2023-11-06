// External Libraries
import React from 'react'

// Components
import { Search } from '../../components/Search'
import { Table } from '@components/tables/Table'

// Services
import { ICustomer } from '@services/types/Customer'
import { getTableFields } from './constants'

// Styles
import { Container } from './styles'

interface Props {
  loading?: boolean
  users: ICustomer[]
  onEditClick: (customer: ICustomer) => void
  onDeleteClick: (id: string) => void
  onSearch: (value: string) => void
}

export const UserList: React.FC<Props> = ({
  users,
  loading,
  onSearch,
  onDeleteClick,
  onEditClick
}) => {
  return (
    <Container>
      <Search loading={loading} onSearch={onSearch} />
      <Table
        loading={loading}
        rows={users as any}
        columns={getTableFields(onEditClick, onDeleteClick)}
      />
    </Container>
  )
}
