// External Libraries
import React from 'react'

// Components
import { Button } from '@components/buttons/Button'
import { TitledInput } from '@components/inputs/TitledInput'

// Hooks
import { useSearch } from './hooks/useSearch'

// Styles
import { Container } from './styles'

interface Props {
  onSearch: (value: string) => void
  loading: boolean
}

export const Search: React.FC<Props> = ({ onSearch }) => {
  // Hooks
  const { handleSearchChange, search } = useSearch()

  return (
    <Container>
      <TitledInput
        value={search}
        onChange={handleSearchChange}
        placeholder="Pesquise por clientes"
        onSubmit={() => onSearch(search)}
      />

      <Button
        label="Pesquisar"
        variant="secondary"
        onClick={() => onSearch(search)}
      />
    </Container>
  )
}
