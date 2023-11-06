// External Libraries
import React from 'react'

// Components
import { Search } from '../../components/Search'
import { Table } from '@components/tables/Table'

// Services
import { getTableFields } from './constants'

// Styles
import { Container } from './styles'
import { IPet } from '@services/types/Pet'

interface Props {
  loading?: boolean
  data: IPet[]
  onEditClick: (customer: IPet) => void
  onDeleteClick: (id: string) => void
  onSearch: (value: string) => void
}

export const PetsList: React.FC<Props> = ({
  data,
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
        rows={data as any}
        columns={getTableFields(onEditClick, onDeleteClick)}
      />
    </Container>
  )
}
