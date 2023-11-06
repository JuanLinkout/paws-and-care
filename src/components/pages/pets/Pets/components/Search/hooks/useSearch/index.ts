import { ISelectOption } from '@components/selects/Select/types'
import { useState } from 'react'

export function useSearch() {
  // States
  const [search, setSearch] = useState('')

  // Functions

  return {
    search,
    handleSearchChange: setSearch
  }
}
